/// <reference path="../../../typings/index.d.ts" />

let io = require('socket.io-client');

let SocketClient = (function(){
  function SocketClient(){    
  }

  SocketClient.prototype.onInit = function(args){
    /// connect do the host;
    let socket = io(args.host);
    /// listen to on connect
    socket.on('connect', () => {
      console.log('Connected');
      socket.emit('message', args.channels);
    });
    /// listen to client
    socket.on('socket-client', function(data){
      args.onListenCallBack(data);
    });
  };

  return SocketClient;
})();

export default SocketClient;
