
/// <reference path="../../../../../typings/index.d.ts" />

import * as angular from 'angular';
import Button from './button';

let ButtonModule = angular
      .module('button-module', [])
      .directive('scbButton', Button);

export default ButtonModule;