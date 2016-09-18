/// <reference path="../typings/index.d.ts" />

import express from 'express';
import * as http from 'http';

import { app } from './app';

let server = http.createServer(app);

server.listen(3000, 'localhost');
server.on('listening', function() {
  let { port, address } = server.address();
  console.log(`Express server started on port ${port} at ${address}`);
});