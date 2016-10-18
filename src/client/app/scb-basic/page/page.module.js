/// <reference path="../../../../../typings/index.d.ts" />

import * as angular from 'angular';
import { provide } from 'ng-metadata/core';
import { ScbBasicPage } from './page';

let ScbBasicPageModule = angular
      .module('scb.basic.page.module', [])
      .directive(...provide(ScbBasicPage));

export default ScbBasicPageModule;