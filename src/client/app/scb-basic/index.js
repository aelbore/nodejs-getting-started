/// <reference path="../../../typings/index.d.ts" />

import 'reflect-metadata';
import * as angular from 'angular';

import ScbBasicHeaderModule from './header/header.module';
import ScbBasicPageModule from './page/page.module';

let ScbBasicModule = angular
      .module('scb.basic.module', [ ScbBasicPageModule.name, ScbBasicHeaderModule.name ])

export default ScbBasicModule;