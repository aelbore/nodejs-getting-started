
import * as path from 'path';
import { CLIENT_JS_SOURCE, BUILD_PATH } from './gulp/config';

let BundleConfigs = {
  main: path.join(__dirname, `./${CLIENT_JS_SOURCE}/app/scb-basic/index.js`),
  outFolder: path.join(__dirname, '../../scb-ui/scb-ui-module-seed/scb-ui-seed/build'),
  outFile: 'scb.basic.min.js',
}

export { BundleConfigs }