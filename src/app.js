/// <reference path="../typings/index.d.ts" />

import express from 'express';

let app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendfile('public/index.html');
});

export { app }