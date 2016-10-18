/// <reference path="../../../../../typings/index.d.ts" />

import { provide } from 'ng-metadata/core';
import { ScbBasicPage } from './page';

let ScbBasicPageModule = 'scb.basic.page.module';

angular
  .module(ScbBasicPageModule, [])
  .directive(...provide(ScbBasicPage));

export default ScbBasicPageModule;