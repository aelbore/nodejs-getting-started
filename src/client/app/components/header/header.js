import './header.css!css';

let Header = () => {
  return {
    transclude: true,
    scope: {
      title: '@'
    },
    template: `<h3>{{ title }}</h3><ng-transclude></ng-transclude>`,
		restrict: 'E'
  }
};

export default Header;