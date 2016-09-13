/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import { build } from './utils';

gulp.task('build', () => {
  return build('src/**/*.js');
});
