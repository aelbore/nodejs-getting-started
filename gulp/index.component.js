
import * as angular from 'angular';
import Page from './page';

let Component = angular
  .module('ui-component', ['header-module','index-module'])
  .directive('ui-page', Page);

export default Component;  
  