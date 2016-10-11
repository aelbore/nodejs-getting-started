
/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import * as fs from 'fs';
import * as glob from 'glob';

import { Configs } from '../modules/component-config';

gulp.task('component', () => {
  
  let components = [];

  let files = glob.sync(Configs.files, {
    dot: true, 
    ignore: Configs.ignore
  });  

  files.forEach((file) => {
    components.push(component.name);
  });  

  let ngComponentModule = `
    import * as angular from 'angular';
    import Page from './page';

    let Component = angular
      .module('ui-component', [${components.toString()}])
      .directive('ui-page', Page);
  `;

   let filePath = path.join(__dirname, './index.component.js');
   fs.writeFile(filePath, (error) => {
     console.log('The file was saved!');
   });

});