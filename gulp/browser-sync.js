/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init({
    startPath: '/',
    server: {
      baseDir: 'public'
    },
    browser: 'default'
  });
});

gulp.task('bs-reload', () => {
  browserSync.reload();
});