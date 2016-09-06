/// <reference path="./typings/index.d.ts" />

import gulp from 'gulp';
import browserSync from 'browser-sync';
import nodemon from 'nodemon';

const BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'index.js',
    watch: ['src/**/*.js', 'public/**/*.html']
  })
  .on('start', function onStart() {
    if (!called) { cb(); }
    called = true;
  })
  .on('restart', function onRestart() {
    setTimeout(function reload() {
      browserSync.reload({
        stream: false
      });
    }, BROWSER_SYNC_RELOAD_DELAY);
   });
});

gulp.task('browser-sync', ['nodemon'], function () {
  browserSync({
    startPath: '/',
    server: {
      baseDir: 'public'
    },
    browser: 'default'
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch('public/**/*.html', ['bs-reload']);
});