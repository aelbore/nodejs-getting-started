/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import rimraf from 'rimraf';
import { cleanFiles } from './utils';
import { DESTINATION } from './config';

gulp.task('clean', () => {
  return cleanFiles(`${DESTINATION}/*`);
});

gulp.task('remove-jspm', (cb) => {
  rimraf(`${DESTINATION}/client/jspm_packages`, cb);
});
