/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import browserSync from 'browser-sync';
import { PROXY } from './config';

gulp.task('browser-sync', ['nodemon'], (done) => {
  browserSync({
    startPath: '/',
    proxy: PROXY.URL,
    port: PROXY.PORT,
    browser: 'default'
  }, done);
});

gulp.task('bs-reload', () => {
  browserSync.reload();
});