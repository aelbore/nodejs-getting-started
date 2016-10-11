/// <reference path="../typings/index.d.ts" />

import * as path from 'path';

const SOURCE = '../src/client/app/components';

let Configs = {
  files: path.join(__dirname, `${SOURCE}/*.component.js`),
  ignore: [
     path.join(__dirname, `${SOURCE}/app.component.js`),
     path.join(__dirname, `${SOURCE}/app.components.controller.js`),
     path.join(__dirname, `${SOURCE}/index.components.js`),
     path.join(__dirname, `${SOURCE}/page.js`)    
  ]
};

export { Configs }