System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "stage": 1,
    "plugins": [
      "babel-plugin-angular2-annotations",
      "babel-plugin-transform-decorators-legacy",
      "babel-plugin-transform-flow-strip-types",
      "babel-plugin-transform-class-properties"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "angular": "github:angular/bower-angular@1.4.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-plugin-angular2-annotations": "npm:babel-plugin-angular2-annotations@5.1.0",
    "babel-plugin-systemjs": "npm:babel-plugin-systemjs@0.0.1",
    "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.16.0",
    "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
    "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.14.0",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@2.4.1",
    "css": "github:systemjs/plugin-css@0.1.31",
    "ng-metadata": "npm:ng-metadata@2.2.1",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.16",
    "plugin-babel-runtime": "npm:babel-runtime@5.8.38",
    "reflect-metadata": "npm:reflect-metadata@0.1.8",
    "rxjs": "npm:rxjs@5.0.0-rc.1",
    "systemjs-babel-build": "npm:systemjs-plugin-babel@0.0.16/systemjs-babel-browser.js",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-code-frame@6.16.0": {
      "chalk": "npm:chalk@1.1.3",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@2.0.0"
    },
    "npm:babel-generator@6.17.0": {
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.16.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "detect-indent": "npm:detect-indent@3.0.1",
      "jsesc": "npm:jsesc@1.3.0",
      "lodash": "npm:lodash@4.16.4",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:babel-helper-function-name@6.8.0": {
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.16.0",
      "babel-traverse": "npm:babel-traverse@6.16.0",
      "babel-types": "npm:babel-types@6.16.0"
    },
    "npm:babel-helper-get-function-arity@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.16.0"
    },
    "npm:babel-messages@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-angular2-annotations@5.1.0": {
      "babel-generator": "npm:babel-generator@6.17.0",
      "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4"
    },
    "npm:babel-plugin-transform-class-properties@6.16.0": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
      "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.16.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-plugin-transform-flow-strip-types@6.14.0": {
      "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.11.6": {
      "core-js": "npm:core-js@2.4.1",
      "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
    },
    "npm:babel-template@6.16.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-traverse": "npm:babel-traverse@6.16.0",
      "babel-types": "npm:babel-types@6.16.0",
      "babylon": "npm:babylon@6.12.0",
      "lodash": "npm:lodash@4.16.4"
    },
    "npm:babel-traverse@6.16.0": {
      "babel-code-frame": "npm:babel-code-frame@6.16.0",
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.16.0",
      "babylon": "npm:babylon@6.12.0",
      "debug": "npm:debug@2.2.0",
      "globals": "npm:globals@8.18.0",
      "invariant": "npm:invariant@2.2.1",
      "lodash": "npm:lodash@4.16.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-types@6.16.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@4.16.4",
      "to-fast-properties": "npm:to-fast-properties@1.0.2"
    },
    "npm:babylon@6.12.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:core-js@2.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:detect-indent@3.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeating": "npm:repeating@1.1.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:globals@8.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-finite@1.0.2": {
      "number-is-nan": "npm:number-is-nan@1.0.1"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ng-metadata@2.2.1": {
      "angular": "npm:angular@1.5.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "reflect-metadata": "npm:reflect-metadata@0.1.8",
      "rxjs": "npm:rxjs@5.0.0-beta.11"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:regenerator-runtime@0.9.5": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:repeating@1.1.3": {
      "is-finite": "npm:is-finite@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:rxjs@5.0.0-beta.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@1.0.4"
    },
    "npm:rxjs@5.0.0-rc.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@1.0.4"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
