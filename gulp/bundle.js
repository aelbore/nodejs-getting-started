/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import rename from 'gulp-rename';
import htmlreplace from 'gulp-html-replace';
import htmlmin from 'gulp-htmlmin';
import sourcemaps from 'gulp-sourcemaps';
import gulp_jspm from 'gulp-jspm';
import gulpSequence from 'gulp-sequence';

import * as path from 'path';

import { CLIENT_JS_SOURCE, DESTINATION } from './config';

let buildRoot = path.join(__dirname, '../build/'); 
let appPath = path.join(__dirname, '../dist/client/app/app.js')

gulp.task('jspm-bundle', function(){
  let jspm_options = {
      selfExecutingBundle: true,
      minify: true,
      sourceMaps: true
  };
  return gulp.src(appPath)
      .pipe(sourcemaps.init())        
      .pipe(gulp_jspm(jspm_options))
      .pipe(rename('app.min.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(buildRoot));
});

gulp.task('jspm-html', () => {
  return gulp.src(`${CLIENT_JS_SOURCE}/index.html`)
      .pipe(htmlreplace({
          'js': ['system.js', 'app.min.js']
      }))
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest(buildRoot));
});

gulp.task('bundle', gulpSequence('jspm-html', 'copy-systemjs:bundle', 'jspm-bundle'));

