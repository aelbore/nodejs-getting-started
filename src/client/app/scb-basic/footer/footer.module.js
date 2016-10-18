/// <reference path="../../../../../typings/index.d.ts" />

import { provide } from 'ng-metadata/core';
import { ScbBasicFooter } from './footer';

const ScbBasicFooterModule = 'scb.basic.footer.module';

angular
  .module(ScbBasicFooterModule, [])
  .directive(...provide(ScbBasicFooter));

export default ScbBasicFooterModule;