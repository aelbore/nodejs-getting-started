/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import { build } from './utils';
import { SRC_JS, DESTINATION } from './config';
import * as glob from 'glob';

const FILES = glob.sync(`${SRC_JS}/**/*.js`);

gulp.task('build', () => {
  return build(FILES, SRC_JS);
});
