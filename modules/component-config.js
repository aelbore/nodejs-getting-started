/// <reference path="../typings/index.d.ts" />

import * as path from 'path';

const SOURCE = '../src/client/app/components';

let Configs = {
  files: path.join(__dirname, `${SOURCE}/**/*.component.js`),
  ignore: [
     path.join(__dirname, `${SOURCE}/app.component.js`),
     path.join(__dirname, `${SOURCE}/app.components.controller.js`),
     path.join(__dirname, `${SOURCE}/index.components.js`),
     path.join(__dirname, `${SOURCE}/page.js`)    
  ],
  index:`import * as angular from 'angular';
import Page from './page';

let Component = angular
  .module('ui-component', [${dependencies}])
  .directive('ui-page', Page);

export default Component;  
  `
};

export { Configs }