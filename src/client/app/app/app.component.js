
import Controller from './app.components.controller';

let AppComponent = () => {
	return {
		template: `
      <h1>Hello World</h1>
      <div id="content">
        <ul>
          <li ng-repeat="item in vm.items">
            {{ item.fName }}
          </li>
        </ul>  
      </div>
    `,
		restrict: 'E',
		controller: Controller,
    controllerAs: 'vm'
	};
};

export default AppComponent;
