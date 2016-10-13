
/// <reference path="../../../../../typings/index.d.ts" />

import * as angular from 'angular';
import Header from './header';

let HeaderModule = angular
      .module('header-module', [])
      .directive('scbHeader', Header);

export default HeaderModule;