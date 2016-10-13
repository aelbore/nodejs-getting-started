import * as angular from 'angular';
import Page from './page';
import SocketClientModule from './socket-io-client/index'; 
import BodyModule from './body/body.module';
import FooterModule from './footer/footer.module';
import HeaderModule from './header/header.module';
import ButtonModule from './button/button.module';

let Module = angular
  .module('scb-seed-ui-module', [ ButtonModule.name, BodyModule.name, FooterModule.name, HeaderModule.name ])
  .directive('scbPage', Page);
  
export default Module;