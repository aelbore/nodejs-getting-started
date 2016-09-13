/// <reference path="../typings/index.d.ts" />

import { app } from './app';
import * as http from 'http';

require('http-shutdown').extend();

let server = http.createServer(app).withShutdown();

server.listen(3000, 'localhost');
server.on('listening', () => {
  const {address, port} = server.address();
  console.log(`Express server started on port ${port} at ${address}.`);
});

server.shutdown(() => {
  process.exit(0);
});