/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import jspm from 'jspm';
import ngAnnotate from 'gulp-ng-annotate';
import rename from 'gulp-rename';
import htmlreplace from 'gulp-html-replace';
import htmlmin from 'gulp-htmlmin';
import sourcemaps from 'gulp-sourcemaps';
import gulp_jspm from 'gulp-jspm';
import gulpSequence from 'gulp-sequence';

import * as path from 'path';

import { CLIENT_JS_SOURCE, BUILD_PATH } from './config';

let buildRoot = path.join(__dirname, `../${BUILD_PATH}/`); 
let buildPath = `${buildRoot}/app.js`;
let appPath = path.join(__dirname, `../${CLIENT_JS_SOURCE}/app/app.js`);

gulp.task('jspm-bundle', () => {
  let jspm_options = {
      selfExecutingBundle: true,
      minify: true,
      sourceMaps: true
  };
  return gulp.src(appPath)
      .pipe(sourcemaps.init())
      .pipe(gulp_jspm(jspm_options))
      .pipe(ngAnnotate())    
      .pipe(rename('app.min.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(buildRoot));
});

gulp.task('jspm-bundle-index', () => {
  let htmlReplace = htmlreplace({ 'js': ['app.min.js'] });
  return gulp.src(`${CLIENT_JS_SOURCE}/index.html`)
      .pipe(htmlReplace)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest(buildRoot));
});

gulp.task('bundle', 
    gulpSequence('clean:build', 
        'jspm-bundle', 
        'jspm-bundle-index')
);