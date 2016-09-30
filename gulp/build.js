/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import { build } from './utils';
import { CLIENT_JS_SOURCE, SERVER_JS_SOURCE, SRC_JS, DESTINATION } from './config';
import * as glob from 'glob';
import * as path from 'path';

gulp.task('build', () => {
  let ignoreFiles = glob.sync(`${CLIENT_JS_SOURCE}/jspm_packages/**/*`);
  ignoreFiles.push(`${CLIENT_JS_SOURCE}/config.js`);

  let serverFiles = glob.sync(`${SERVER_JS_SOURCE}/**/*.js`);
  let clientFiles = glob.sync(`${CLIENT_JS_SOURCE}/**/*.js`, {
    dot: true, 
    ignore: ignoreFiles 
  });
  
  return build(serverFiles.concat(clientFiles), SRC_JS);
});