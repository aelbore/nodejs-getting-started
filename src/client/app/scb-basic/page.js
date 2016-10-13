
let Page = () => {
  return {
    transclude: true,
    template: `
      <div ng-transclude></div>
    `,
		restrict: 'E'
  } 
};

export default Page;