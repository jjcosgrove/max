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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _commander = __webpack_require__(2);

var _commander2 = _interopRequireDefault(_commander);

var _inquirer = __webpack_require__(3);

var _store = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// info
_commander2.default.version('0.0.6').description('A simple backup utility for macOS');

// init
_commander2.default.command('init').description('Initialize max').action(function () {
  (0, _inquirer.prompt)([{
    type: 'input',
    name: 'path',
    message: 'Enter a relative path in which to store all max backups',
    validate: function validate(value) {
      return nonEmptyCheck(value);
    }
  }, {
    type: 'confirm',
    name: 'snapshots',
    message: 'Enable snapshots? (each backup will be timestamped and seperate)'
  }, {
    when: function when(answers) {
      return answers.snapshots;
    },
    type: 'list',
    choices: ['YYYY-MM-DD HHmmss', 'DD-MM-YYYY HHmmss'],
    name: 'timestamp',
    message: 'Choose a timestamp format for your snapshots'
  }]).then(function (answers) {
    return _store.store.initialize(answers.path, answers.snapshots, answers.timestamp);
  });
});

// add
_commander2.default.command('add').description('Add a new backup entry to max').action(function () {
  var combinedResponses = {
    name: '',
    paths: []

    // run just the name prompt
  };(0, _inquirer.prompt)({
    type: 'input',
    name: 'name',
    message: 'Enter a name for this backup entry',
    validate: function validate(value) {
      return nonEmptyCheck(value);
    }
  }).then(function (answers) {
    combinedResponses.name = answers.name;

    // keep asking for paths
    repeatingPrompt();
  });

  var repeatingPrompt = function repeatingPrompt() {
    (0, _inquirer.prompt)({
      type: 'input',
      name: 'path',
      message: 'Enter a relative path for this backup entry (leave blank to finish)'
    }) // grab just the path
    .then(function (answers) {
      if (!answers.path) {
        _store.store.add(combinedResponses.name, combinedResponses.paths);
      } else {
        combinedResponses.paths.push(answers.path);
        repeatingPrompt();
      }
    });
  };
});

// remove
_commander2.default.command('remove').description('Remove a backup entry from max').action(function () {
  (0, _inquirer.prompt)([{
    type: 'input',
    name: 'name',
    message: 'Enter the name of the backup entry to remove',
    validate: function validate(value) {
      return nonEmptyCheck(value);
    }
  }, {
    type: 'confirm',
    name: 'confirm',
    message: 'Are you sure?'
  }]).then(function (answers) {
    if (answers.confirm) {
      _store.store.remove(answers.name);
    }
  });
});

// hold
_commander2.default.command('hold').description('Place a backup entry in max, on hold').action(function () {
  (0, _inquirer.prompt)({
    type: 'input',
    name: 'name',
    message: 'Enter the name of the backup entry to put on hold',
    validate: function validate(value) {
      return nonEmptyCheck(value);
    }
  }).then(function (answers) {
    return _store.store.hold(answers.name);
  });
});

// unhold
_commander2.default.command('unhold').description('Place a backup entry in max, on unhold').action(function () {
  (0, _inquirer.prompt)({
    type: 'input',
    name: 'name',
    message: 'Enter the name of the backup entry to put on unhold',
    validate: function validate(value) {
      return nonEmptyCheck(value);
    }
  }).then(function (answers) {
    return _store.store.unhold(answers.name);
  });
});

// list
_commander2.default.command('list').option('-v, --verbose', 'verbose mode').description('List backup entries for max').action(function (options) {
  return _store.store.list(options.verbose);
});

// backup
_commander2.default.command('backup').description('Backup everything as defined in max').action(function () {
  return _store.store.backup();
});

_commander2.default.parse(process.argv);

// validator for inputs
var nonEmptyCheck = function nonEmptyCheck(path) {
  return path.length ? true : 'Cannot be empty';
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("commander");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("inquirer");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _os = __webpack_require__(5);

var _os2 = _interopRequireDefault(_os);

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(7);

var _fs2 = _interopRequireDefault(_fs);

var _jsYaml = __webpack_require__(8);

var _jsYaml2 = _interopRequireDefault(_jsYaml);

var _mkdirp = __webpack_require__(9);

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _logSymbols = __webpack_require__(10);

var _logSymbols2 = _interopRequireDefault(_logSymbols);

var _overwrite = __webpack_require__(11);

var _overwrite2 = _interopRequireDefault(_overwrite);

var _moment = __webpack_require__(12);

var _moment2 = _interopRequireDefault(_moment);

var _config = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// patch copySync function of fs-extra package
var fse = (0, _overwrite2.default)('fs-extra', {
  'lib/copy-sync/copy-sync.js': function libCopySyncCopySyncJs(contents) {
    var lines = contents.split('\n');
    lines.splice(201, 1, 'return src !== dest &&\n        dest.indexOf(src) === 0 &&\n        destBasename === path.basename(src)');
    return lines.join('\n');
  }
});

var Store = function () {
  function Store() {
    _classCallCheck(this, Store);

    this.homeDir = '' + _os2.default.homedir();
    this.baseDir = this.homeDir + '/.' + _config.config.appName;
    this.configFile = this.baseDir + '/' + _config.config.appName + '.yml';
    this.configsDir = this.baseDir + '/configs';
  }

  // init


  _createClass(Store, [{
    key: 'initialize',
    value: function initialize(path, snapshots, timestamp) {
      if (this.alreadyInitialized()) {
        console.log(_logSymbols2.default.info, _config.config.appName + ' is already initialized');
      } else {
        var absolutePath = _path2.default.join(this.homeDir, path);
        this.createConfigsAndStore(absolutePath, snapshots, timestamp);
        console.log(_logSymbols2.default.success, 'Successfully initialized');
        console.log(_logSymbols2.default.success, 'Backing up to: ', absolutePath);
      }
    }
  }, {
    key: 'createConfigsAndStore',
    value: function createConfigsAndStore(path, snapshots) {
      var timestamp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var errorHasOccured = false;

      (0, _mkdirp2.default)(this.baseDir, function (error) {
        if (error) {
          errorHasOccured = true;
        }
      });

      this.writeConfig({
        path: path,
        active: [],
        inactive: [],
        snapshots: snapshots,
        timestamp: timestamp
      });

      (0, _mkdirp2.default)(this.configsDir, function (error) {
        if (error) {
          errorHasOccured = true;
        }
      });

      (0, _mkdirp2.default)(_path2.default.resolve(this.homeDir, path), function (error) {
        if (error) {
          errorHasOccured = true;
        }
      });

      if (errorHasOccured) {
        console.log(_logSymbols2.default.error, 'Cannot create ' + _config.config.appName + ' folders and files. Check permissions');
      }
    }

    // add

  }, {
    key: 'add',
    value: function add(name, paths) {
      var _this = this;

      if (!this.alreadyInitialized()) {
        console.log(_logSymbols2.default.info, 'Please run: ' + _config.config.appName + ' init');
        return;
      }

      var configuration = this.readConfig();

      // if not present in active/inactive then add
      if (!configuration.active.filter(function (i) {
        return i === name;
      }).length && !configuration.inactive.filter(function (i) {
        return i === name;
      }).length) {
        configuration.active.push(name);
        this.writeConfig(configuration);
        this.writeConfigs(this.configsDir + '/' + name + '.yml', {
          name: name,
          paths: paths.map(function (path) {
            return _path2.default.join(_this.homeDir, path);
          })
        });
      } else {
        console.log(_logSymbols2.default.info, name + ' is already present. Either remove existing, or choose a new name');
      }
    }

    // remove

  }, {
    key: 'remove',
    value: function remove(name) {
      if (!this.alreadyInitialized()) {
        console.log(_logSymbols2.default.info, 'Please run: ' + _config.config.appName + ' init');
        return;
      }

      var configuration = this.readConfig();

      var preLength = configuration.active.length + configuration.inactive.length;

      configuration.active = configuration.active.filter(function (i) {
        return i !== name;
      });
      configuration.inactive = configuration.inactive.filter(function (i) {
        return i !== name;
      });

      var postLength = configuration.active.length + configuration.inactive.length;

      if (preLength === postLength) {
        console.log(_logSymbols2.default.info, name + ' does not appear to be present');
      } else {
        this.writeConfig(configuration);
      }
    }

    // hold

  }, {
    key: 'hold',
    value: function hold(name) {
      if (!this.alreadyInitialized()) {
        console.log(_logSymbols2.default.info, 'Please run: ' + _config.config.appName + ' init');
        return;
      }

      var configuration = this.readConfig();

      if (configuration.active.includes(name)) {
        configuration.active = configuration.active.filter(function (i) {
          return i !== name;
        });
        configuration.inactive.push(name);
        this.writeConfig(configuration);
        console.log(_logSymbols2.default.success, name + ' is now held');
      } else if (configuration.inactive.includes(name)) {
        console.log(_logSymbols2.default.info, name + ' is already held');
      } else {
        console.log(_logSymbols2.default.info, name + ' does not appear to be present');
      }
    }

    // unhold

  }, {
    key: 'unhold',
    value: function unhold(name) {
      if (!this.alreadyInitialized()) {
        console.log(_logSymbols2.default.info, 'Please run: ' + _config.config.appName + ' init');
        return;
      }

      var configuration = this.readConfig();

      if (configuration.inactive.includes(name)) {
        configuration.inactive = configuration.active.filter(function (i) {
          return i !== name;
        });
        configuration.active.push(name);
        this.writeConfig(configuration);
        console.log(_logSymbols2.default.success, name + ' is now unheld');
      } else if (configuration.active.includes(name)) {
        console.log(_logSymbols2.default.info, name + ' is already unheld');
      } else {
        console.log(_logSymbols2.default.info, name + ' does not appear to be present');
      }
    }

    // list

  }, {
    key: 'list',
    value: function list() {
      var _this2 = this;

      var verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.alreadyInitialized()) {
        console.log(_logSymbols2.default.info, 'Please run: ' + _config.config.appName + ' init');
        return;
      }

      var configuration = this.readConfig();

      if (configuration.active.length) {
        console.log(_logSymbols2.default.success, 'Active');

        configuration.active.forEach(function (entry) {
          if (verbose) {
            var thisConfig = _this2.readConfigs(entry);

            thisConfig.paths.forEach(function (path) {
              console.log(entry + ' -> ' + path);
            });
          } else {
            console.log(entry);
          }
        });
      } else {
        console.log(_logSymbols2.default.success, 'Active (empty)');
      }

      if (configuration.inactive.length) {
        console.log(_logSymbols2.default.error, 'Inactive');

        configuration.inactive.forEach(function (entry) {
          if (verbose) {
            var thisConfig = _this2.readConfigs(entry);

            thisConfig.paths.forEach(function (path) {
              console.log(entry + ' -> ' + path);
            });
          } else {
            console.log(entry);
          }
        });
      } else {
        console.log(_logSymbols2.default.error, 'Inactive (empty)');
      }
    }

    // backup

  }, {
    key: 'backup',
    value: function backup() {
      var _this3 = this;

      if (!this.alreadyInitialized()) {
        console.log(_logSymbols2.default.info, 'Please run: ' + _config.config.appName + ' init');
        return;
      }

      var configuration = this.readConfig();
      var activeEntries = configuration.active;

      if (activeEntries.length) {
        console.log(_logSymbols2.default.info, 'Backing up ' + activeEntries.join(', '));
      }

      var paths = [];
      activeEntries.forEach(function (entry) {
        var thisConfig = _this3.readConfigs(entry);

        thisConfig.paths.forEach(function (path) {
          paths.push(path);
        });
      });

      paths.forEach(function (path) {
        _this3.copy(path, _path2.default.join(configuration.path, configuration.snapshots ? (0, _moment2.default)().format(configuration.timestamp) : ''));
      });

      if (activeEntries.length) {
        console.log(_logSymbols2.default.success, 'Backup complete. ' + activeEntries.length + ' entries processed');
      } else {
        console.log(_logSymbols2.default.info, 'Nothing to backup');
      }
    }
  }, {
    key: 'copy',
    value: function copy(source, destination) {
      try {
        fse.copySync(source, _path2.default.join(destination, source), {
          overwrite: true,
          preserveTimestamps: true
        });
      } catch (error) {
        console.log(_logSymbols2.default.error, 'Error copying from ' + source + ' to ' + destination);
      }
    }
  }, {
    key: 'readConfig',
    value: function readConfig() {
      try {
        return _jsYaml2.default.safeLoad(_fs2.default.readFileSync(this.configFile, 'utf8'));
      } catch (error) {
        console.log(_logSymbols2.default.error, 'Cannot read from ' + _config.config.appName + ' configuration');
      }
    }
  }, {
    key: 'writeConfig',
    value: function writeConfig(configuration) {
      try {
        // sort active/inactive
        configuration.active = this.uniqueSortArray(configuration.active);
        configuration.inactive = this.uniqueSortArray(configuration.inactive);
        _fs2.default.writeFileSync(this.configFile, _jsYaml2.default.dump(configuration));
      } catch (error) {
        console.log(_logSymbols2.default.error, 'Cannot write to ' + _config.config.appName + ' configuration');
      }
    }
  }, {
    key: 'readConfigs',
    value: function readConfigs(name) {
      try {
        return _jsYaml2.default.safeLoad(_fs2.default.readFileSync(this.configsDir + '/' + name + '.yml', 'utf8'));
      } catch (error) {
        console.log(_logSymbols2.default.error, 'Cannot read from ' + name + ' configuration');
      }
    }
  }, {
    key: 'writeConfigs',
    value: function writeConfigs(file, configuration) {
      try {
        // sort paths
        configuration.paths = this.uniqueSortArray(configuration.paths);
        _fs2.default.writeFileSync(file, _jsYaml2.default.dump(configuration));
      } catch (error) {
        console.log(_logSymbols2.default.error, 'Cannot write to ' + configuration.name + ' configuration');
      }
    }

    // helpers

  }, {
    key: 'alreadyInitialized',
    value: function alreadyInitialized() {
      try {
        return _fs2.default.statSync(this.baseDir).isDirectory();
      } catch (error) {
        return !error.code === 'ENOENT';
      }
    }
  }, {
    key: 'uniqueSortArray',
    value: function uniqueSortArray(dataArray) {
      return dataArray.filter(function (item, index, dataArray) {
        return dataArray.indexOf(item) === index;
      }).sort();
    }
  }, {
    key: 'flattenArrays',
    value: function flattenArrays(arrayOfArrays) {
      var _this4 = this;

      return arrayOfArrays.reduce(function (a, b) {
        return a.concat(Array.isArray(b) ? _this4.flattenArrays(b) : b, []);
      }, []);
    }
  }]);

  return Store;
}();

var store = exports.store = new Store();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("js-yaml");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("mkdirp");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("log-symbols");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("overwrite");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  appName: 'max'
};

exports.config = config;

/***/ })
/******/ ]);