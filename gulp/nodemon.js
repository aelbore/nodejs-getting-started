/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import browserSync from 'browser-sync';
import { 
  BROWSER_SYNC_RELOAD_DELAY, 
  SERVER_JS_SOURCE, 
  DESTINATION 
} from './config';

gulp.task('nodemon', (cb) => {
  var called = false;
  nodemon({
    script: `${DESTINATION}/server.js`,
    watch: [`${SERVER_JS_SOURCE}/**/*.js`]
  })
  .on('start', () => {
    if (!called) { called = true; cb(); }
  })          
  .on('restart', () => {
    setTimeout(() => {
      browserSync.reload({ stream: false });
    }, BROWSER_SYNC_RELOAD_DELAY);
   });
});