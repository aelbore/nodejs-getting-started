## Usage

```javascript
var controller = (function(){
  controller.$inject = ['$scope', 'socketClient'];

  function controller($scope, socketClient){
    var vm = this;
    socketClient.onInit({
      host: 'http://localhost:3000',
      channels: [ 
        'SG_GROUP', 
        'user'+ Math.random() 
      ],
      onListenCallback: function(data){
        let vm = this;
        $scope.$apply(function(){
          vm.items = data;
        });  
      }.bind(this)
    });    
  }

  return controller;
})();
```