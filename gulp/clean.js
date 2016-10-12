/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import rimraf from 'rimraf';
import * as path from 'path';

import { cleanFiles } from './utils';
import { DESTINATION } from './config';

gulp.task('clean', () => {
  return cleanFiles(`${DESTINATION}/*`);
});

gulp.task('remove-jspm', (cb) => {
  rimraf(`${DESTINATION}/client/jspm_packages`, cb);
});

gulp.task('clean-temp', (cb) => {
  const del = require('del');
  let temp = path.join(__dirname, './temp');
  del.sync([`${temp}/**`], {dryRun: true});
});

