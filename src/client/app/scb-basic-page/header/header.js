import './header.css!css';

let Header = () => {
  return {
    transclude: true,
    scope: {
      title: '@'
    },
    template: `
      <h3>{{ title }}</h3>
      <div ng-transclude></div>
    `,
		restrict: 'E'
  }
};

export default Header;