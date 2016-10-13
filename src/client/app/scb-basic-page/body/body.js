import './scb-basic-body.css!css';

let ScbBasicBody = () => {
  return {
    transclude: true,
    template: `
      <div ng-transclude></div>
    `,
		restrict: 'E'
  }
};

export default ScbBasicBody;