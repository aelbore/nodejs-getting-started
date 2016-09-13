/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import { watcher } from './utils';
import { SERVER_JS_SOURCE, DESTINATION } from './config';

gulp.task('watch-server-js', () => {
  watcher(SERVER_JS_SOURCE, DESTINATION);
});

gulp.task('watch-html', () => {
  gulp.watch('public/**/*.html', ['bs-reload']);
});