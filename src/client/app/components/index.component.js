/// <reference path="../../../../typings/index.d.ts" />

import * as glob from 'glob';
import * as angular from 'angular';
import Page from './page';

let files = glob.sync('./*.component.js', {
  dot: true, 
  ignore: [ 
      './app.component.js',
      './app.components.controller.js',
      './index.components.js',
      './page.js'
  ] 
});

let components = [];
files.forEach((file) => {
  let component = require(file);
  components.push(component.name);
});

let Component = angular
  .module('ui-component', components)
  .directive('ui-page', Page);

export default Component;
