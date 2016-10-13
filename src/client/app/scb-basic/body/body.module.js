
/// <reference path="../../../../../typings/index.d.ts" />

import * as angular from 'angular';
import ScbBasicBody from './body';

let ScbBasicBodyModule = angular
            .module('scb-basic-body-module', [])
            .directive('scbBasicBody', ScbBasicBody);

export default ScbBasicBodyModule;