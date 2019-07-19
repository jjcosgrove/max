#!/usr/bin/env node
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, author, license, repository, scripts, bin, preferGlobal, engines, dependencies, devDependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"@jjcosgrove/max\\\",\\\"version\\\":\\\"0.0.7\\\",\\\"description\\\":\\\"A simple backup utility for macOS\\\",\\\"author\\\":\\\"Jonathan James Cosgrove\\\",\\\"license\\\":\\\"MIT\\\",\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"https://github.com/jjcosgrove/max.git\\\"},\\\"scripts\\\":{\\\"build\\\":\\\"webpack --config ./webpack.config.babel.js\\\",\\\"prepack\\\":\\\"npm install && npm run build\\\"},\\\"bin\\\":{\\\"max\\\":\\\"./build/max.js\\\"},\\\"preferGlobal\\\":true,\\\"engines\\\":{\\\"node\\\":\\\">=8.0\\\"},\\\"dependencies\\\":{\\\"commander\\\":\\\"^2.13.0\\\",\\\"fs-extra\\\":\\\"5.0.0\\\",\\\"inquirer\\\":\\\"^6.5.0\\\",\\\"js-yaml\\\":\\\"^3.10.0\\\",\\\"log-symbols\\\":\\\"^3.0.0\\\",\\\"mkdirp\\\":\\\"^0.5.1\\\",\\\"moment\\\":\\\"^2.20.1\\\",\\\"overwrite\\\":\\\"^1.0.3\\\"},\\\"devDependencies\\\":{\\\"@babel/cli\\\":\\\"^7.0.0\\\",\\\"@babel/core\\\":\\\"^7.5.5\\\",\\\"@babel/preset-env\\\":\\\"^7.5.5\\\",\\\"@babel/register\\\":\\\"^7.5.5\\\",\\\"babel-loader\\\":\\\"^8.0.6\\\",\\\"eslint\\\":\\\"^6.0.1\\\",\\\"eslint-config-standard\\\":\\\"^13.0.1\\\",\\\"eslint-loader\\\":\\\"^2.2.1\\\",\\\"eslint-plugin-import\\\":\\\"^2.8.0\\\",\\\"eslint-plugin-node\\\":\\\"^9.1.0\\\",\\\"eslint-plugin-promise\\\":\\\"^4.2.1\\\",\\\"eslint-plugin-standard\\\":\\\"^4.0.0\\\",\\\"watch-ignore-webpack-plugin\\\":\\\"^1.0.0\\\",\\\"webpack\\\":\\\"^4.36.1\\\",\\\"webpack-cli\\\":\\\"^3.3.6\\\",\\\"webpack-node-externals\\\":\\\"^1.6.0\\\"}}\");\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\nvar packageJSON = __webpack_require__(/*! @packageJSON */ \"./package.json\");\n\nvar config = {\n  appName: 'max',\n  appVersion: packageJSON.version\n};\n\n\n//# sourceURL=webpack:///./src/config/index.js?");

/***/ }),

/***/ "./src/max.js":
/*!********************!*\
  !*** ./src/max.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! commander */ \"commander\");\n/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(commander__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inquirer */ \"inquirer\");\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inquirer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config */ \"./src/config/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store */ \"./src/store/index.js\");\n\n\n\n // info\n\ncommander__WEBPACK_IMPORTED_MODULE_0___default.a.version(_config__WEBPACK_IMPORTED_MODULE_2__[\"config\"].appVersion).description('A simple backup utility for macOS'); // init\n\ncommander__WEBPACK_IMPORTED_MODULE_0___default.a.command('init').description('Initialize max').action(function () {\n  Object(inquirer__WEBPACK_IMPORTED_MODULE_1__[\"prompt\"])([{\n    type: 'input',\n    name: 'path',\n    message: 'Enter a relative path in which to store all max backups',\n    validate: function validate(value) {\n      return nonEmptyCheck(value);\n    }\n  }, {\n    type: 'confirm',\n    name: 'snapshots',\n    message: 'Enable snapshots? (each backup will be timestamped and seperate)'\n  }, {\n    when: function when(answers) {\n      return answers.snapshots;\n    },\n    type: 'list',\n    choices: ['YYYY-MM-DD HHmmss', 'DD-MM-YYYY HHmmss'],\n    name: 'timestamp',\n    message: 'Choose a timestamp format for your snapshots'\n  }]).then(function (answers) {\n    return _store__WEBPACK_IMPORTED_MODULE_3__[\"store\"].initialize(answers.path, answers.snapshots, answers.timestamp);\n  });\n}); // add\n\ncommander__WEBPACK_IMPORTED_MODULE_0___default.a.command('add').description('Add a new backup entry to max').action(function () {\n  var combinedResponses = {\n    name: '',\n    paths: [] // run just the name prompt\n\n  };\n  Object(inquirer__WEBPACK_IMPORTED_MODULE_1__[\"prompt\"])({\n    type: 'input',\n    name: 'name',\n    message: 'Enter a name for this backup entry',\n    validate: function validate(value) {\n      return nonEmptyCheck(value);\n    }\n  }).then(function (answers) {\n    combinedResponses.name = answers.name; // keep asking for paths\n\n    repeatingPrompt();\n  });\n\n  var repeatingPrompt = function repeatingPrompt() {\n    Object(inquirer__WEBPACK_IMPORTED_MODULE_1__[\"prompt\"])({\n      type: 'input',\n      name: 'path',\n      message: 'Enter a relative path for this backup entry (leave blank to finish)'\n    }) // grab just the path\n    .then(function (answers) {\n      if (!answers.path) {\n        _store__WEBPACK_IMPORTED_MODULE_3__[\"store\"].add(combinedResponses.name, combinedResponses.paths);\n      } else {\n        combinedResponses.paths.push(answers.path);\n        repeatingPrompt();\n      }\n    });\n  };\n}); // remove\n\ncommander__WEBPACK_IMPORTED_MODULE_0___default.a.command('remove').description('Remove a backup entry from max').action(function () {\n  Object(inquirer__WEBPACK_IMPORTED_MODULE_1__[\"prompt\"])([{\n    type: 'input',\n    name: 'name',\n    message: 'Enter the name of the backup entry to remove',\n    validate: function validate(value) {\n      return nonEmptyCheck(value);\n    }\n  }, {\n    type: 'confirm',\n    name: 'confirm',\n    message: 'Are you sure?'\n  }]).then(function (answers) {\n    if (answers.confirm) {\n      _store__WEBPACK_IMPORTED_MODULE_3__[\"store\"].remove(answers.name);\n    }\n  });\n}); // hold\n\ncommander__WEBPACK_IMPORTED_MODULE_0___default.a.command('hold').description('Place a backup entry in max, on hold').action(function () {\n  Object(inquirer__WEBPACK_IMPORTED_MODULE_1__[\"prompt\"])({\n    type: 'input',\n    name: 'name',\n    message: 'Enter the name of the backup entry to put on hold',\n    validate: function validate(value) {\n      return nonEmptyCheck(value);\n    }\n  }).then(function (answers) {\n    return _store__WEBPACK_IMPORTED_MODULE_3__[\"store\"].hold(answers.name);\n  });\n}); // unhold\n\ncommander__WEBPACK_IMPORTED_MODULE_0___default.a.command('unhold').description('Place a backup entry in max, on unhold').action(function () {\n  Object(inquirer__WEBPACK_IMPORTED_MODULE_1__[\"prompt\"])({\n    type: 'input',\n    name: 'name',\n    message: 'Enter the name of the backup entry to put on unhold',\n    validate: function validate(value) {\n      return nonEmptyCheck(value);\n    }\n  }).then(function (answers) {\n    return _store__WEBPACK_IMPORTED_MODULE_3__[\"store\"].unhold(answers.name);\n  });\n}); // list\n\ncommander__WEBPACK_IMPORTED_MODULE_0___default.a.command('list').option('-v, --verbose', 'verbose mode').description('List backup entries for max').action(function (options) {\n  return _store__WEBPACK_IMPORTED_MODULE_3__[\"store\"].list(options.verbose);\n}); // backup\n\ncommander__WEBPACK_IMPORTED_MODULE_0___default.a.command('backup').description('Backup everything as defined in max').action(function () {\n  return _store__WEBPACK_IMPORTED_MODULE_3__[\"store\"].backup();\n});\ncommander__WEBPACK_IMPORTED_MODULE_0___default.a.parse(process.argv); // validator for inputs\n\nvar nonEmptyCheck = function nonEmptyCheck(path) {\n  return path.length ? true : 'Cannot be empty';\n};\n\n//# sourceURL=webpack:///./src/max.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-yaml */ \"js-yaml\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mkdirp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mkdirp */ \"mkdirp\");\n/* harmony import */ var mkdirp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mkdirp__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var log_symbols__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! log-symbols */ \"log-symbols\");\n/* harmony import */ var log_symbols__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(log_symbols__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var overwrite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! overwrite */ \"overwrite\");\n/* harmony import */ var overwrite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(overwrite__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @config */ \"./src/config/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n // patch copySync function of fs-extra package\n\nvar fse = overwrite__WEBPACK_IMPORTED_MODULE_6___default()('fs-extra', {\n  'lib/copy-sync/copy-sync.js': function libCopySyncCopySyncJs(contents) {\n    var lines = contents.split('\\n');\n    lines.splice(201, 1, \"return src !== dest &&\\n        dest.indexOf(src) === 0 &&\\n        destBasename === path.basename(src)\");\n    return lines.join('\\n');\n  }\n});\n\nvar Store =\n/*#__PURE__*/\nfunction () {\n  function Store() {\n    _classCallCheck(this, Store);\n\n    this.homeDir = \"\".concat(os__WEBPACK_IMPORTED_MODULE_0___default.a.homedir());\n    this.baseDir = \"\".concat(this.homeDir, \"/.\").concat(_config__WEBPACK_IMPORTED_MODULE_8__[\"config\"].appName);\n    this.configFile = \"\".concat(this.baseDir, \"/\").concat(_config__WEBPACK_IMPORTED_MODULE_8__[\"config\"].appName, \".yml\");\n    this.configsDir = \"\".concat(this.baseDir, \"/configs\");\n  } // init\n\n\n  _createClass(Store, [{\n    key: \"initialize\",\n    value: function initialize(path, snapshots, timestamp) {\n      if (this.alreadyInitialized()) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"\".concat(_config__WEBPACK_IMPORTED_MODULE_8__[\"config\"].appName, \" is already initialized\"));\n      } else {\n        var absolutePath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(this.homeDir, path);\n        this.createConfigsAndStore(absolutePath, snapshots, timestamp);\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.success, 'Successfully initialized');\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.success, 'Backing up to: ', absolutePath);\n      }\n    }\n  }, {\n    key: \"createConfigsAndStore\",\n    value: function createConfigsAndStore(path, snapshots) {\n      var timestamp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      var errorHasOccured = false;\n      mkdirp__WEBPACK_IMPORTED_MODULE_4___default()(this.baseDir, function (error) {\n        if (error) {\n          errorHasOccured = true;\n        }\n      });\n      this.writeConfig({\n        path: path,\n        active: [],\n        inactive: [],\n        snapshots: snapshots,\n        timestamp: timestamp\n      });\n      mkdirp__WEBPACK_IMPORTED_MODULE_4___default()(this.configsDir, function (error) {\n        if (error) {\n          errorHasOccured = true;\n        }\n      });\n      mkdirp__WEBPACK_IMPORTED_MODULE_4___default()(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(this.homeDir, path), function (error) {\n        if (error) {\n          errorHasOccured = true;\n        }\n      });\n\n      if (errorHasOccured) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.error, \"Cannot create \".concat(_config__WEBPACK_IMPORTED_MODULE_8__[\"config\"].appName, \" folders and files. Check permissions\"));\n      }\n    } // add\n\n  }, {\n    key: \"add\",\n    value: function add(name, paths) {\n      var _this = this;\n\n      if (!this.alreadyInitialized()) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"Please run: \".concat(_config__WEBPACK_IMPORTED_MODULE_8__[\"config\"].appName, \" init\"));\n        return;\n      }\n\n      var configuration = this.readConfig(); // if not present in active/inactive then add\n\n      if (!configuration.active.filter(function (i) {\n        return i === name;\n      }).length && !configuration.inactive.filter(function (i) {\n        return i === name;\n      }).length) {\n        configuration.active.push(name);\n        this.writeConfig(configuration);\n        this.writeConfigs(\"\".concat(this.configsDir, \"/\").concat(name, \".yml\"), {\n          name: name,\n          paths: paths.map(function (path) {\n            return path__WEBPACK_IMPORTED_MODULE_1___default.a.join(_this.homeDir, path);\n          })\n        });\n      } else {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"\".concat(name, \" is already present. Either remove existing, or choose a new name\"));\n      }\n    } // remove\n\n  }, {\n    key: \"remove\",\n    value: function remove(name) {\n      if (!this.alreadyInitialized()) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"Please run: \".concat(_config__WEBPACK_IMPORTED_MODULE_8__[\"config\"].appName, \" init\"));\n        return;\n      }\n\n      var configuration = this.readConfig();\n      var preLength = configuration.active.length + configuration.inactive.length;\n      configuration.active = configuration.active.filter(function (i) {\n        return i !== name;\n      });\n      configuration.inactive = configuration.inactive.filter(function (i) {\n        return i !== name;\n      });\n      var postLength = configuration.active.length + configuration.inactive.length;\n\n      if (preLength === postLength) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"\".concat(name, \" does not appear to be present\"));\n      } else {\n        this.writeConfig(configuration);\n      }\n    } // hold\n\n  }, {\n    key: \"hold\",\n    value: function hold(name) {\n      if (!this.alreadyInitialized()) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"Please run: \".concat(_config__WEBPACK_IMPORTED_MODULE_8__[\"config\"].appName, \" init\"));\n        return;\n      }\n\n      var configuration = this.readConfig();\n\n      if (configuration.active.includes(name)) {\n        configuration.active = configuration.active.filter(function (i) {\n          return i !== name;\n        });\n        configuration.inactive.push(name);\n        this.writeConfig(configuration);\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.success, \"\".concat(name, \" is now held\"));\n      } else if (configuration.inactive.includes(name)) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"\".concat(name, \" is already held\"));\n      } else {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"\".concat(name, \" does not appear to be present\"));\n      }\n    } // unhold\n\n  }, {\n    key: \"unhold\",\n    value: function unhold(name) {\n      if (!this.alreadyInitialized()) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"Please run: \".concat(_config__WEBPACK_IMPORTED_MODULE_8__[\"config\"].appName, \" init\"));\n        return;\n      }\n\n      var configuration = this.readConfig();\n\n      if (configuration.inactive.includes(name)) {\n        configuration.inactive = configuration.active.filter(function (i) {\n          return i !== name;\n        });\n        configuration.active.push(name);\n        this.writeConfig(configuration);\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.success, \"\".concat(name, \" is now unheld\"));\n      } else if (configuration.active.includes(name)) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"\".concat(name, \" is already unheld\"));\n      } else {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"\".concat(name, \" does not appear to be present\"));\n      }\n    } // list\n\n  }, {\n    key: \"list\",\n    value: function list() {\n      var _this2 = this;\n\n      var verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      if (!this.alreadyInitialized()) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"Please run: \".concat(_config__WEBPACK_IMPORTED_MODULE_8__[\"config\"].appName, \" init\"));\n        return;\n      }\n\n      var configuration = this.readConfig();\n\n      if (configuration.active.length) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.success, 'Active');\n        configuration.active.forEach(function (entry) {\n          if (verbose) {\n            var thisConfig = _this2.readConfigs(entry);\n\n            thisConfig.paths.forEach(function (path) {\n              console.log(entry + ' -> ' + path);\n            });\n          } else {\n            console.log(entry);\n          }\n        });\n      } else {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.success, 'Active (empty)');\n      }\n\n      if (configuration.inactive.length) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.error, 'Inactive');\n        configuration.inactive.forEach(function (entry) {\n          if (verbose) {\n            var thisConfig = _this2.readConfigs(entry);\n\n            thisConfig.paths.forEach(function (path) {\n              console.log(entry + ' -> ' + path);\n            });\n          } else {\n            console.log(entry);\n          }\n        });\n      } else {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.error, 'Inactive (empty)');\n      }\n    } // backup\n\n  }, {\n    key: \"backup\",\n    value: function backup() {\n      var _this3 = this;\n\n      if (!this.alreadyInitialized()) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"Please run: \".concat(_config__WEBPACK_IMPORTED_MODULE_8__[\"config\"].appName, \" init\"));\n        return;\n      }\n\n      var configuration = this.readConfig();\n      var activeEntries = configuration.active;\n\n      if (activeEntries.length) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, \"Backing up \".concat(activeEntries.join(', ')));\n      }\n\n      var paths = [];\n      activeEntries.forEach(function (entry) {\n        var thisConfig = _this3.readConfigs(entry);\n\n        thisConfig.paths.forEach(function (path) {\n          paths.push(path);\n        });\n      });\n      paths.forEach(function (path) {\n        _this3.copy(path, path__WEBPACK_IMPORTED_MODULE_1___default.a.join(configuration.path, configuration.snapshots ? moment__WEBPACK_IMPORTED_MODULE_7___default()().format(configuration.timestamp) : ''));\n      });\n\n      if (activeEntries.length) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.success, \"Backup complete. \".concat(activeEntries.length, \" entries processed\"));\n      } else {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.info, 'Nothing to backup');\n      }\n    }\n  }, {\n    key: \"copy\",\n    value: function copy(source, destination) {\n      try {\n        fse.copySync(source, path__WEBPACK_IMPORTED_MODULE_1___default.a.join(destination, source), {\n          overwrite: true,\n          preserveTimestamps: true\n        });\n      } catch (error) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.error, \"Error copying from \".concat(source, \" to \").concat(destination));\n      }\n    }\n  }, {\n    key: \"readConfig\",\n    value: function readConfig() {\n      try {\n        return js_yaml__WEBPACK_IMPORTED_MODULE_3___default.a.safeLoad(fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(this.configFile, 'utf8'));\n      } catch (error) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.error, \"Cannot read from \".concat(_config__WEBPACK_IMPORTED_MODULE_8__[\"config\"].appName, \" configuration\"));\n      }\n    }\n  }, {\n    key: \"writeConfig\",\n    value: function writeConfig(configuration) {\n      try {\n        // sort active/inactive\n        configuration.active = this.uniqueSortArray(configuration.active);\n        configuration.inactive = this.uniqueSortArray(configuration.inactive);\n        fs__WEBPACK_IMPORTED_MODULE_2___default.a.writeFileSync(this.configFile, js_yaml__WEBPACK_IMPORTED_MODULE_3___default.a.dump(configuration));\n      } catch (error) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.error, \"Cannot write to \".concat(_config__WEBPACK_IMPORTED_MODULE_8__[\"config\"].appName, \" configuration\"));\n      }\n    }\n  }, {\n    key: \"readConfigs\",\n    value: function readConfigs(name) {\n      try {\n        return js_yaml__WEBPACK_IMPORTED_MODULE_3___default.a.safeLoad(fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(\"\".concat(this.configsDir, \"/\").concat(name, \".yml\"), 'utf8'));\n      } catch (error) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.error, \"Cannot read from \".concat(name, \" configuration\"));\n      }\n    }\n  }, {\n    key: \"writeConfigs\",\n    value: function writeConfigs(file, configuration) {\n      try {\n        // sort paths\n        configuration.paths = this.uniqueSortArray(configuration.paths);\n        fs__WEBPACK_IMPORTED_MODULE_2___default.a.writeFileSync(file, js_yaml__WEBPACK_IMPORTED_MODULE_3___default.a.dump(configuration));\n      } catch (error) {\n        console.log(log_symbols__WEBPACK_IMPORTED_MODULE_5___default.a.error, \"Cannot write to \".concat(configuration.name, \" configuration\"));\n      }\n    } // helpers\n\n  }, {\n    key: \"alreadyInitialized\",\n    value: function alreadyInitialized() {\n      try {\n        return fs__WEBPACK_IMPORTED_MODULE_2___default.a.statSync(this.baseDir).isDirectory();\n      } catch (error) {\n        return !error.code === 'ENOENT';\n      }\n    }\n  }, {\n    key: \"uniqueSortArray\",\n    value: function uniqueSortArray(dataArray) {\n      return dataArray.filter(function (item, index, dataArray) {\n        return dataArray.indexOf(item) === index;\n      }).sort();\n    }\n  }, {\n    key: \"flattenArrays\",\n    value: function flattenArrays(arrayOfArrays) {\n      var _this4 = this;\n\n      return arrayOfArrays.reduce(function (a, b) {\n        return a.concat(Array.isArray(b) ? _this4.flattenArrays(b) : b, []);\n      }, []);\n    }\n  }]);\n\n  return Store;\n}();\n\nvar store = new Store();\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./src/max ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/max */\"./src/max.js\");\n\n\n//# sourceURL=webpack:///multi_./src/max?");

/***/ }),

/***/ "commander":
/*!****************************!*\
  !*** external "commander" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"commander\");\n\n//# sourceURL=webpack:///external_%22commander%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "inquirer":
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"inquirer\");\n\n//# sourceURL=webpack:///external_%22inquirer%22?");

/***/ }),

/***/ "js-yaml":
/*!**************************!*\
  !*** external "js-yaml" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-yaml\");\n\n//# sourceURL=webpack:///external_%22js-yaml%22?");

/***/ }),

/***/ "log-symbols":
/*!******************************!*\
  !*** external "log-symbols" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"log-symbols\");\n\n//# sourceURL=webpack:///external_%22log-symbols%22?");

/***/ }),

/***/ "mkdirp":
/*!*************************!*\
  !*** external "mkdirp" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mkdirp\");\n\n//# sourceURL=webpack:///external_%22mkdirp%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

/***/ }),

/***/ "overwrite":
/*!****************************!*\
  !*** external "overwrite" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"overwrite\");\n\n//# sourceURL=webpack:///external_%22overwrite%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });