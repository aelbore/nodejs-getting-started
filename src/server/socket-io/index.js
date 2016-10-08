/// <reference path="../../../typings/index.d.ts" />

import * as io from 'socket.io';
import { RedisSubscriber } from './redis-subscriber';
 
let socketio = {
  onInit: (server) =>{
    /// socket io instance/object
    let ioSocket = io.listen(server);
    
    /// Subscibe and listen to redis
    RedisSubscriber.onListen(ioSocket);

    /// listen o connect 
    ioSocket.sockets.on('connect', (socket) => {
      socket.on('message', (data) => {
        if (typeof data === 'string' || data instanceof String){
          socket.join(data);
        }
        if (Array.isArray(data)){
          data.forEach(value => socket.join(value));
        }
        console.log(`> Client: ${socket.client.id}, data: ${JSON.stringify(data)}`);
      });
    }); 
  }   
};

export { socketio }