
const HOST = 'http://localhost:3000';

let AppComponent = function(){
	return {
		template: `
      <h1>Hello World</h1>
      <div id="content">
        <ul>
          <li ng-repeat="item in ctrl.items">
            {{ item.fName }}
          </li>
        </ul>  
      </div>
    `,
		restrict: 'E',
    controllerAs: 'ctrl',
		controller: function(socketClient){     
      //this.items = JSON.parse("[{\"fName\":\"Arjay\"}]");

      socketClient.onInit({
        host: HOST,
        channels: [ 
          'SG_GROUP', 
          'user'+ Math.random() 
        ],
        onListenCallback: function(data) {
          console.log(data);
          this.items = data;
        }.bind(this)
      });
		}
	};
};

export default AppComponent;
