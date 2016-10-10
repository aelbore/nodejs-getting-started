/// <reference path="../../../typings/index.d.ts" />

import * as angular from 'angular';
import AppComponent from './components/app.component';
import SocketClient from './socket-io-client';

let AppModule = angular
      .module('App', [])
      .directive('app', AppComponent)
      .service('socketClient', SocketClient);

var container = document.getElementById('app-container');

angular.element(document).ready(function() {
    angular.bootstrap(container, [AppModule.name]);
});

export default AppModule;