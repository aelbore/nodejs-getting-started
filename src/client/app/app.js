/// <reference path="../../../typings/index.d.ts" />

import 'reflect-metadata';
import * as angular from 'angular';
import { Module } from 'angular-decorators';

import AppComponent from './app.component';

let AppModule = Module('App', []).add(AppComponent);

var container = document.getElementById('app-container');

angular
  .element(document)
  .ready(() => {
    angular.bootstrap(container, [AppModule.name]);
  });

export default AppModule;











