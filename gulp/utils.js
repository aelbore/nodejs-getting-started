/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import clean from 'gulp-clean';

import * as glob from 'glob';
import * as path from 'path';

import { 
  BROWSER_SYNC_RELOAD_DELAY, 
  SERVER_JS_SOURCE, 
  DESTINATION 
} from './config';

let build = (files, source = null, dest = DESTINATION) => {
  return gulp.src((source ? `${source}/**/*` : files))
    .pipe(babel({ babelrc: true, only: files, sourceMaps: 'both' }))
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
    script: `${jsSource}/server/server.js`,
    watch: [`${dest}/**/*`]   
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
  });
};

export { build, cleanFiles, watcher, nodemonDebug }