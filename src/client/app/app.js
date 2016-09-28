/// <reference path="../../../typings/index.d.ts" />

import * as angular from 'angular';
import AppComponent from './app.component';

let AppModule = angular
      .module('App', [])
      .directive('app', AppComponent);

var container = document.getElementById('app-container');

angular.element(document).ready(function() {
    angular.bootstrap(container, [AppModule.name]);
});

export default AppModule;