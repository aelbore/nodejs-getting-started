/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import { watcher } from './utils';
import { SRC_JS, DESTINATION } from './config';

gulp.task('watch-files', () => {
  watcher(SRC_JS, DESTINATION);
});