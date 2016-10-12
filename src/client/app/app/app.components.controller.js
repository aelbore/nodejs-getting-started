
const HOST = 'http://localhost:3000';

let Controller = (function(){
  Controller.$inject = ['$scope', 'socketClient'];

  function Controller($scope, socketClient){
    socketClient.onInit({
      host: HOST,
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

  return Controller;
})();


export default Controller;