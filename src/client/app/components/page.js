
let Page = () => {
  return {
    transclude: true,
    template: `
      <ng-transclude></ng-transclude>
    `,
		restrict: 'E'
  } 
};

export default Page;