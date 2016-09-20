/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import browserSync from 'browser-sync';
import { nodemonDebug } from './utils';
import { SERVER_JS_SOURCE,  DESTINATION } from './config';

gulp.task('nodemon', (cb) => { 
  nodemonDebug(SERVER_JS_SOURCE, DESTINATION, false, cb) 
});

gulp.task('nodemon:debug', (cb) => { 
  nodemonDebug(SERVER_JS_SOURCE, DESTINATION, true, cb) 
});