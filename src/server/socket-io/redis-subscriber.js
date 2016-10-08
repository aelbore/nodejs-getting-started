/// <reference path="../../../typings/index.d.ts" />

import * as redis from 'redis';

let redisClient = redis.createClient();

let RedisSubscriber = {
  onListen: (ioSocket) => {
    /// subscribe
    redisClient.psubscribe('*');

    /// listen to message
    redisClient.on('pmessage', (pattern, channel, key) => {
      ioSocket.to(channel).emit('socket-client', JSON.parse(key));
    });
  }
};

export { RedisSubscriber }