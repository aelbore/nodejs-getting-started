
/// <reference path="../../../../../typings/index.d.ts" />

import * as angular from 'angular';
import Body from './body';

let BodyModule = angular
      .module('body-module', [])
      .directive('scbBody', Body);

export default BodyModule;