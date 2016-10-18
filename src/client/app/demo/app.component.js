import { Component, Input, Inject } from 'ng-metadata/core';
import { AppService } from './app.service';

@Component({
	selector: 'app',
	template: `
		<h1>{{ $ctrl.message }}</h1>
		<br />
		<h2>This is from {{ $ctrl.serviceData  }}</h2>
		<app-other-component></app-other-component>
	`
})
export class AppComponent {
	@Input() message = null;

	constructor(appService: AppService){
		this.serviceData = appService.getData();
	}

	ngOnInit(){
	}
}
