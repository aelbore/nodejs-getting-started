/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import * as glob from 'glob';
import { watcher } from './utils';
import { SERVER_JS_SOURCE, DESTINATION } from './config';

gulp.task('watch-server', () => {
  watcher(SERVER_JS_SOURCE, DESTINATION);
});

gulp.task('watch-html', () => {
  gulp.watch('public/**/*.html', ['bs-reload']);
});
