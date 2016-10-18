import { Component } from 'ng-metadata/core';

@Component({
	selector: 'scb-basic-page',
  template: `
    <div ng-transclude></div>
  `,
  legacy: { transclude: true }
})
export class ScbBasicPage {
	constructor(){
	}
}
