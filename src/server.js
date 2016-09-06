/// <reference path="../typings/index.d.ts" />

import express from 'express';
import * as http from 'http';

let app = express();
let server = http.createServer(app);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendfile('public/index.html');
});

server.listen(3000, 'localhost');
server.on('listening', () => {
  const {address, port} = server.address();
  console.log(`Express server started on port ${port} at ${address}`);
});