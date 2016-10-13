/// <reference path="../../../typings/index.d.ts" />

import * as angular from 'angular';
import AppComponent from './app/app.component';
import SocketClient from './socket-io-client';
import Module from './components/module';

let AppModule = angular
      .module('App', [Module.name])
      .directive('app', AppComponent);      

var container = document.getElementById('app-container');

angular.element(document).ready(function() {
  angular.bootstrap(container, [AppModule.name]);
});

export default AppModule;