import * as angular from 'angular';
import Page from './page'; 
import BodyModule from './body/body.module';
import FooterModule from './footer/footer.module';
import HeaderModule from './header/header.module';

let Module = angular
  .module('scb-seed-ui-module', [ BodyModule.name, FooterModule.name, HeaderModule.name ])
  .directive('scbPage', Page);

export default Module;