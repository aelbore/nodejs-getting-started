
const HOST = 'http://localhost:3000';

let AppComponent = () => {
	return {
		template: `
      <h1>Hello World</h1>
      <div id="content">
        <ul ng-repeat="item in vm.items">
          <li>{{ item.fName }}</li>
        </ul>  
      </div>
    `,
		restrict: 'E',
		controller: function(socketClient){      
      let vm = this;

      socketClient.onInit({
        host: HOST,
        channels: [ 
          'SG_GROUP', 
          'user'+ Math.random() 
        ],
        onListenCallback: function(data){
          console.log(data);
          vm.items = data;
        }
      });
		},
    controllerAs: 'vm'
	};
};

export default AppComponent;
