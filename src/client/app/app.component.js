import { Component, View } from 'angular-decorators';

@Component({
	selector: 'app',
  controllerAs: 'vm'
})
@View({ 
	template: `<h1>{{ vm.message }}</h1>` 
})
export class AppComponent {
  constructor(){    
    this.message = `Hello World111121212`;
  }
}

export default AppComponent;