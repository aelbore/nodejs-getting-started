/// <reference path="../../../../../typings/index.d.ts" />

import { provide } from 'ng-metadata/core';
import { ScbBasicHeader } from './header';

const ScbBasicHeaderModule = 'scb.basic.header.module';

angular
  .module(ScbBasicHeaderModule, [])
  .directive(...provide(ScbBasicHeader)); 

export default ScbBasicHeaderModule;