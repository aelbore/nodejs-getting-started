
import * as path from 'path';
import { CLIENT_JS_SOURCE, BUILD_PATH } from './gulp/config';

let SCB_BASIC_PATH = '../../scb-ui/scb-ui-module-seed/scb-ui-seed/build';
let SCB_BASIC_FILE = `./${CLIENT_JS_SOURCE}/app/scb-basic/index.js`;
let SCB_BASIC_OUT_FILE = 'scb.basic.min.js';

let APP_PATH = `./${CLIENT_JS_SOURCE}/app/app.js`;
let APP_BUILD_PATH = './build/';
let OUT_FILE = 'app.min.js';

let BundleConfigs = {
  main: path.join(__dirname, SCB_BASIC_FILE),
  outFolder: path.join(__dirname, SCB_BASIC_PATH),
  outFile: SCB_BASIC_OUT_FILE,
}

export { BundleConfigs }