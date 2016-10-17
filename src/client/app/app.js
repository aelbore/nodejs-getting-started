/// <reference path="../../../typings/index.d.ts" />

import 'reflect-metadata';
import * as angular from 'angular';
import { provide } from 'ng-metadata/core';
import { AppComponent } from './app.component';

let AppModule = angular
      .module('App', [])
      .directive(...provide(AppComponent));

var container = document.getElementById('app-container');

angular.element(document).ready(function() {
  angular.bootstrap(container, [AppModule.name]);
});

export default AppModule;