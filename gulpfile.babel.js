/// <reference path="./typings/index.d.ts" />

import * as path from 'path';
import * as glob from 'glob';

let tasks = glob.sync('./gulp/**/*.js', {
  dot: true, 
  ignore: [ 
    path.join(__dirname, './gulp/utils.js'), 
    path.join(__dirname, './gulp/config.js'),
    path.join(__dirname, './gulp/utils-string.js')
  ] 
});
tasks.forEach(task => require(task));