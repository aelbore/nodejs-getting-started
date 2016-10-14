/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import clean from 'gulp-clean';
import nodemon from 'gulp-nodemon';
import browserSync from 'browser-sync';
import filter from 'gulp-filter';
import gulpIf from 'gulp-if';
import htmlmin from 'gulp-htmlmin';

import * as glob from 'glob';
import * as path from 'path';

import { 
  BROWSER_SYNC_RELOAD_DELAY, 
  SERVER_JS_SOURCE, 
  CLIENT_JS_SOURCE,
  DESTINATION 
} from './config';

let condition = (file) => {
  console.log(file);
  return false;
};

let build = (files, source = null, dest = DESTINATION) => {
  let sourceFiles = (source ? 
      [ `${source}/**/*`, `!${CLIENT_JS_SOURCE}/jspm_packages/**/*` ] : files);
  return gulp.src(sourceFiles)
    .pipe(babel({ babelrc: true, only: files, sourceMaps: 'both', minified: false }))
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest(dest));  
},
cleanFiles = (files) => {
  return gulp.src(files, {read: false})
    .pipe(clean());
},
copyFiles = (files, dest) => {
  return gulp.src(files).pipe(gulp.dest(dest));
},
nodemonDebug = (jsSource, dest, isDebug = true, callback) => {
  var called = false;
  let options = {
    script: `${dest}/server/server.js`,
    watch: [`${jsSource}/**/*.js`]   
  };
  if (isDebug){ 
    options.exec = 'node-inspector & node --debug' 
  }
  nodemon(options)
    .on('start', () => {
      if (!called) { called = true; callback(); }
    })          
    .on('restart', () => {
      setTimeout(() => {
        browserSync.reload({ stream: false });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
},
watcher = (srcRoot, destRoot) => {
  gulp.watch(`${srcRoot}/**/*`, (event) => {
    console.log(`> ${event.type}: ${event.path}.`);
    let isClient = (event.path.indexOf('client') >= 0);
    let file = event.path.replace(srcRoot, destRoot);
    if (event.type === 'deleted'){
      cleanFiles(file);
    } else {
      let dest = path.dirname(file);
      if (path.extname(event.path) === '.js'){
        build(glob.sync(event.path), null, dest);
      } else {
        copyFiles(event.path, null, dest);
      }
    }
    if (isClient){ gulp.start('bs-reload'); }
  });
};

export { build, cleanFiles, watcher, nodemonDebug }