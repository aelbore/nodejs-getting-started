/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import { cleanFiles } from './utils';
import { DESTINATION } from './config';

gulp.task('clean', () => {
  return cleanFiles(`${DESTINATION}/*`);
});