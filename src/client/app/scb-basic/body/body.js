import { Component } from 'ng-metadata/core';

import './body.css!css';

@Component({
  selector: 'scb-basic-body',
  template: `
    <div ng-transclude></div>
  `,
  legacy: { transclude: true }
})
export class ScbBasicBody {

  constructor(){
  }

  onInit(){
  }

}