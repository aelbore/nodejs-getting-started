/// <reference path="../../../typings/index.d.ts" />

import io from 'socket.io-client/socket.io'; 

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
      args.onListenCallback(data);
    });
  };

  return SocketClient;
})();

export default SocketClient;
