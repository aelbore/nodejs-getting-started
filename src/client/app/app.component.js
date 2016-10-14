import { Component } from 'ng-metadata/core';
import './app.component.css!css';

@Component({
	selector: 'app',
  template: `<h1>{{ $ctrl.message }}</h1>` 
})
export class AppComponent {
  constructor(){    
    this.message = `Hello World111121212`;
  }
}

export default AppComponent;