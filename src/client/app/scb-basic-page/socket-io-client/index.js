/// <reference path="../../../../../typings/index.d.ts" />

import * as angular from 'angular';
import SocketClient from './socket-io-client';

let SocketClientModule = angular
  .module('socket-io-client-module', [])
  .service('socketClient', SocketClient);

export default SocketClientModule;