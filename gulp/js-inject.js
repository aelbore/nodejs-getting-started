
/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';

import { Configs } from '../modules/component-config';

gulp.task('component', () => {
  
  let components = [];

  let files = glob.sync(Configs.files, {
    dot: true, 
    ignore: Configs.ignore
  });  

  files.forEach((file) => {
    let moduleName = path.basename(file).replace('.component.js', '-module');
    components.push(`'${moduleName}'`);
  });  

  let dependencies = components.toString();

  let filePath = path.join(__dirname, './index.component.js');
  fs.writeFile(filePath, ngComponentModule,  (error) => {
    console.log('The file was saved!');
  });

});