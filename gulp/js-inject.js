
/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import strToSteam from 'string-to-stream';
import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';

import { Configs } from '../modules/component-config';
import { toPascalCase } from './utils-string';

gulp.task('component', () => {
  let components = []; 
  let imports = null;

  let createImport = (file) => {
    let filePath = path.basename(file).replace('.js', '');
    let ModuleObject = toPascalCase(filePath);
    let paths = path.dirname(file).split('/');
    let pathLen = paths.length;
    let parentPath = paths[pathLen - 1];
    return `import ${ModuleObject} from './${parentPath}/${filePath}';\n`;   
  };

  Configs.files.forEach((file) => {
    let filePath = path.basename(file).replace('.js', '');
    let ModuleObject = toPascalCase(filePath);
    imports = (imports ? imports : '') + createImport(file);
    components.push(` ${ModuleObject}.name`);
  });  
  
  let ngComponentModule = Configs.indexComponent(components.toString(), imports);
  let writable = fs.createWriteStream(Configs.dest);

  strToSteam(ngComponentModule).pipe(writable);  
});