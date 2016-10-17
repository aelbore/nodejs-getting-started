import { Component, Input } from 'ng-metadata/core';

@Component({
	selector: 'app',
	template: `<h1>{{ $ctrl.message }}</h1>`
})
export class AppComponent {
	@Input() message = null;
	constructor(){
	}
}
