import { Component } from 'ng-metadata/core';

import './footer.css!css';

@Component({
  selector: 'scb-basic-footer',
  template: `
    <div ng-transclude></div>
  `,
  legacy: { transclude: true }
})
export class ScbBasicFooter {

  constructor(){
  }

  onInit(){
  }

}