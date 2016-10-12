/// <reference path="../typings/index.d.ts" />

import * as path from 'path';
import * as glob from 'glob';

const SOURCE = '../src/client/app/components';

let Configs = {
  dest: path.join(__dirname, `${SOURCE}/module.js`),
  files: glob.sync(path.join(__dirname, `${SOURCE}/**/*.module.js`), {
    dot: true, 
    ignore: [
      path.join(__dirname, `${SOURCE}/app.component.js`),
      path.join(__dirname, `${SOURCE}/app.components.controller.js`),
      path.join(__dirname, `${SOURCE}/module.js`),
      path.join(__dirname, `${SOURCE}/page.js`)    
    ]
  }),
  indexComponent: (dependencies, imports) => {
    return `import * as angular from 'angular';
import Page from './page'; 
${imports}
let Module = angular
  .module('scb-seed-ui-module', [${dependencies} ])
  .directive('scbPage', Page);

export default Module;` }
};

export { Configs }