import './footer.css!css';

let Footer = () => {
  return {
    transclude: true,
    template: `
      <div ng-transclude></div>
    `,
		restrict: 'E'
  }
};

export default Footer;