/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import { DESTINATION, CLIENT_JS_SOURCE } from './config';

gulp.task('copy-systemjs:bundle', () => {
  return gulp.src(`${CLIENT_JS_SOURCE}/jspm_packages/system.js`)
    .pipe(gulp.dest('build'));
});

gulp.task('copy-jspm', () => {
  return gulp.src(`${CLIENT_JS_SOURCE}/jspm_packages/**/*`)
    .pipe(gulp.dest(`${DESTINATION}/client/jspm_packages`));
});

gulp.task('copy', ['copy-jspm']);