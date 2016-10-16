
/// <reference path="../typings/index.d.ts" />

import * as fs from 'fs';
import * as path from 'path';

const SRC_JS = 'src';
const SERVER_JS_SOURCE = `${SRC_JS}/server`;
const CLIENT_JS_SOURCE = `${SRC_JS}/client`;
const DESTINATION = 'dist';
const BUILD_PATH = 'build';
const BROWSER_SYNC_RELOAD_DELAY = 500;
const PROXY = {
  URL: 'http://localhost:3000',
  PORT: 4000
};

const BABEL_RC = JSON.parse(fs.readFileSync(path.join(__dirname, '../.babelrc'), 'utf-8'));

export {
  SERVER_JS_SOURCE,
  CLIENT_JS_SOURCE,
  DESTINATION,
  BROWSER_SYNC_RELOAD_DELAY,
  BABEL_RC,
  PROXY,
  SRC_JS,
  BUILD_PATH
}