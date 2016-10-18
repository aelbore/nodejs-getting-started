/// <reference path="../../../../typings/index.d.ts" />

import 'reflect-metadata';
import 'angular';

import ScbBasicHeaderModule from './header/header.module';
import ScbBasicPageModule from './page/page.module';
import ScbBasicBodyModule from './body/body.module';
import ScbBasicFooterModule from './footer/footer.module';

const ScbBasicModule = 'scb.basic.module';

angular
  .module(ScbBasicModule, [ ScbBasicPageModule, ScbBasicHeaderModule, ScbBasicBodyModule, ScbBasicFooterModule ]);

export default ScbBasicModule;