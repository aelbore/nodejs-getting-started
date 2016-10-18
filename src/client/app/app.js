/// <reference path="../../../typings/index.d.ts" />

import 'reflect-metadata';
import 'angular';

import { provide } from 'ng-metadata/core';
import { AppOtherComponent } from './demo/app.other.component';
import { AppComponent } from './demo/app.component';
import { AppService } from './demo/app.service';

import ScbBasicModule from './scb-basic/index';

let AppModule = 'App';

angular
  .module(AppModule, [ ScbBasicModule ])
  .directive(...provide(AppComponent))
  .directive(...provide(AppOtherComponent))
  .service(...provide(AppService));

var container = document.getElementById('app-container');

angular.element(document).ready(function() {
  angular.bootstrap(container, [ AppModule ]);
});

export default AppModule;