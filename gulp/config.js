
/// <reference path="../typings/index.d.ts" />

import * as fs from 'fs';
import * as path from 'path';

const SERVER_JS_SOURCE = 'src';
const DESTINATION = 'dist';
const BROWSER_SYNC_RELOAD_DELAY = 500;

const BABEL_RC = JSON.parse(fs.readFileSync(path.join(__dirname, '../.babelrc'), 'utf-8'));

export {
  SERVER_JS_SOURCE,
  DESTINATION,
  BROWSER_SYNC_RELOAD_DELAY,
  BABEL_RC
}