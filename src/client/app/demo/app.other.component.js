/// <reference path="../../../../typings/index.d.ts" />

import { Component, Inject } from 'ng-metadata/core';

@Component({
  selector: 'app-other-component',
  template: `<h3>From Other Component</h3>`
})
export class AppOtherComponent {

  constructor(){
  }

  onInit(){
  }
}