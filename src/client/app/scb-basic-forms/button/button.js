import './button.css!css';

import ButtonController from './button.controller';

let Button = () => {
  return {
    restrict: 'E',
    bindToController: true,
    scope: {
      label: '@',
      isvisible: '='
    },
    template: `
      <button type="button" ng-class="btnCtrl.styles">
        {{btnCtrl.label}}
      </button>
    `,		
    controllerAs: 'btnCtrl',
    controller: ButtonController    
  }
};

export default Button;