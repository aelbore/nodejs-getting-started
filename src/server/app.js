/// <reference path="../../typings/index.d.ts" />

import express from 'express';
import * as path from 'path';

let app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(express.static('dist/client'));
app.use(express.static('node_modules'));

export { app }