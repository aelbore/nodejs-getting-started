/// <reference path="./typings/index.d.ts" />

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

var BROWSER_SYNC_RELOAD_DELAY = 500;
var HOST_PORT = 'http://localhost:3000';

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
    proxy: HOST_PORT,
    port: 4000,
    browser: ['google-chrome']
  });
});


gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch('public/**/*.html', ['bs-reload']);
});