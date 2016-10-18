import { Component, Input } from 'ng-metadata/core';

import './header.css!css';

@Component({
	selector: 'scb-basic-header',
  template: `
    <h3>{{ $ctrl.title }}</h3>
    <div ng-transclude></div>
  `,
  legacy: { transclude: true }
})
export class ScbBasicHeader {
	@Input() title = null;

	constructor(){
	}

  onInit(){
  }
}
