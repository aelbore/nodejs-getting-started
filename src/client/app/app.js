/// <reference path="../../../typings/index.d.ts" />

import 'reflect-metadata';
import * as angular from 'angular';

import '../../../build/scb.basic.min';

let AppModule = angular
      .module('App', [ 'scb.basic.module' ]);

var container = document.getElementById('app-container');

angular.element(document).ready(function() {
  angular.bootstrap(container, [AppModule.name]);
});

export default AppModule;