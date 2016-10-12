
/// <reference path="../../../../../typings/index.d.ts" />

import * as angular from 'angular';
import Footer from './footer';

let FooterModule = angular
      .module('footer-module', [])
      .directive('scbFooter', Footer);

export default FooterModule;