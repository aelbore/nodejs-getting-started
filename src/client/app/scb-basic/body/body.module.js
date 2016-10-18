/// <reference path="../../../../../typings/index.d.ts" />

import { provide } from 'ng-metadata/core';
import { ScbBasicBody } from './body';

const ScbBasicBodyModule = 'scb.basic.body.module';

angular
  .module(ScbBasicBodyModule, [])
  .directive(...provide(ScbBasicBody));

export default ScbBasicBodyModule;