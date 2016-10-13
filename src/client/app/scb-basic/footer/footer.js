import './footer.css!css';

let ScbBasicFooter = () => {
  return {
    transclude: true,
    template: `
      <div ng-transclude></div>
    `,
		restrict: 'E'
  }
};

export default ScbBasicFooter;