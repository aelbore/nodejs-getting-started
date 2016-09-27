/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import * as path from 'path';
import { DESTINATION } from './config';

let files = [
  path.join(__dirname, '../node_modules/core-js/shim.js'),
  path.join(__dirname, '../node_modules/zone.js/dist/zone.js'),
  path.join(__dirname, '../node_modules/reflect-metadata/Reflect.js'),
  path.join(__dirname, '../node_modules/systemjs/dist/system.src.js'),
  path.join(__dirname, '../node_modules/core-js/shim.js'), 
];

gulp.task('copy-libs', () => {
  return gulp.src(files).pipe(gulp.dest(`${DESTINATION}/client/libs`));
});