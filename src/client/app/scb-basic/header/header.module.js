/// <reference path="../../../../../typings/index.d.ts" />

import * as angular from 'angular';
import { provide } from 'ng-metadata/core';
import { ScbBasicHeader } from './header';

let ScbBasicHeaderModule = angular
      .module('scb.basic.header.module', [])
      .directive(...provide(ScbBasicHeader));

export default ScbBasicHeaderModule;