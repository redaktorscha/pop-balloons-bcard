// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/Decor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Decor = /*#__PURE__*/function () {
  function Decor() {
    _classCallCheck(this, Decor);
  }

  _createClass(Decor, [{
    key: "create",
    value: function create(div) {
      div.id = this.prefix + this.id;
      div.classList.add(this.class);
      div.style.left = this.coords.x + 'px';
      div.style.top = this.coords.y + 'px';
      div.innerHTML = this.inner;
      div.style.color = this.color;
      return div;
    }
  }]);

  return Decor;
}();

exports.default = Decor;

_defineProperty(Decor, "getRandInt", function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
});
},{}],"src/Balloon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Decor2 = _interopRequireDefault(require("./Decor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Balloon = /*#__PURE__*/function (_Decor) {
  _inherits(Balloon, _Decor);

  var _super = _createSuper(Balloon);

  function Balloon(q, parentOffsetWidth, parentOffsetHeight) {
    var _this;

    _classCallCheck(this, Balloon);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "colors", ['#F787BB', '#5FA1E4', '#F32566', '#BDFFC2', '#B59FF7', '#FAFE03', '#A328CD', '#2A59F7']);

    _this.color = _this.colors[Balloon.getRandInt(0, _this.colors.length)];
    _this.id = q;
    _this.prefix = 'bal';
    _this.class = 'balloon';
    _this.inner = "<svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='90pt' height='100pt' viewBox='0 0 950.000000 1280.000000' preserveAspectRatio='xMidYMid meet'><metadata>\n    Created by potrace 1.15, written by Peter Selinger 2001-2017\n    </metadata>          \n          <g id='".concat(_this.id, "' transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)' fill='").concat(_this.color, "' stroke='#000000'>\n            <path d='M4430 12789 c-921 -59 -1769 -370 -2480 -908 -1067 -807 -1758 -2084\n-1914 -3536 -69 -641 -34 -1378 100 -2105 192 -1039 624 -2084 1222 -2955 536\n-781 1225 -1439 1919 -1834 140 -79 424 -214 558 -264 215 -80 439 -136 648\n-162 60 -7 111 -16 115 -19 8 -9 -15 -237 -34 -326 -35 -167 -134 -411 -198\n-487 -33 -40 -33 -73 2 -105 59 -57 173 -82 372 -83 213 0 331 25 393 83 36\n34 34 62 -7 116 -114 150 -225 522 -226 758 0 54 -15 47 150 68 889 116 1919\n814 2751 1865 480 607 892 1332 1182 2085 466 1210 624 2521 441 3659 -214\n1337 -881 2491 -1874 3242 -876 663 -1971 982 -3120 908z' />\n          </g>\n        </svg>");
    _this.width = 90;
    _this.coords = {
      x: Balloon.getRandInt(-(_this.width / 2), parentOffsetWidth - _this.width),
      y: parentOffsetHeight * q
    };
    return _this;
  }

  return Balloon;
}(_Decor2.default);

exports.default = Balloon;
},{"./Decor":"src/Decor.js"}],"src/BalloonsLoader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Balloon = _interopRequireDefault(require("./Balloon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BalloonsLoader =
/*#__PURE__*/
function () {
  function BalloonsLoader(cardWrapper) {
    _classCallCheck(this, BalloonsLoader);

    this.cardWrapper = cardWrapper;
  }

  _createClass(BalloonsLoader, [{
    key: "generateBalloon",
    value: function generateBalloon(index) {
      var balloon = new _Balloon.default(index, this.cardWrapper.offsetWidth, this.cardWrapper.offsetHeight).create(document.createElement('div'));
      this.cardWrapper.append(balloon);
    }
  }, {
    key: "loadBalloons",
    value: function loadBalloons(balloonsQuantity) {
      for (var i = 1; i <= balloonsQuantity; i += 1) {
        this.generateBalloon(i);
      }
    }
  }]);

  return BalloonsLoader;
}();

exports.default = BalloonsLoader;
},{"./Balloon":"src/Balloon.js"}],"src/Wish.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Decor2 = _interopRequireDefault(require("./Decor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Wish = /*#__PURE__*/function (_Decor) {
  _inherits(Wish, _Decor);

  var _super = _createSuper(Wish);

  function Wish(leftCoord, topCoord, color, id) {
    var _this;

    _classCallCheck(this, Wish);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "wishes", ['&#9829;', '&#9752;', '&#127800;', '&#9775;', '&#128062;', '&#127799;', '&#128568;', '&#129392;', '&#129321;', '&#129321;', '&#129412;', '&#129434;', '&#128330;', '&#129419;', '&#129417;', '&#127853;', '&#9883;', '&#8986;', '&#8987;', '&#128241;', '&#9749;', '&#9997;', '&#9999;', '&#9993;', '&#128150;', '&#128156;', '&#10052;', '&#127802;', '&#127804;', '&#127803;', '&#127799;', '&#9730;', '&#9728;', '&#127769;', '&#127828;', '&#127827;', '&#127839;', '&#127852;', '&#127851;', '&#127850;', '&#127849;', '&#127917;', '&#127905;', '&#127912;', '&#127926;', '&#127942;', '&#128690;', '&#128091;', '&#9733;', '&#10032;', '&#128092;', '&#128089;', '&#128082;', '&#128087;', '&#127843;', '&#127848;', '&#127856;', '&#127849;', '&#36;', '&#8364;']);

    _this.prefix = 'wish';
    _this.id = id;
    _this.class = 'wish';
    _this.color = color;
    _this.coords = {
      x: leftCoord,
      y: topCoord
    };
    _this.inner = _this.wishes[Wish.getRandInt(0, _this.wishes.length)];
    return _this;
  }

  return Wish;
}(_Decor2.default);

exports.default = Wish;
},{"./Decor":"src/Decor.js"}],"src/Card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BalloonsLoader = _interopRequireDefault(require("./BalloonsLoader"));

var _Wish = _interopRequireDefault(require("./Wish"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card =
/*#__PURE__*/
function () {
  function Card(cardWrapper, startScreen, btnStart, btnText, _ref) {
    var speed = _ref.speed,
        balloonsQuantity = _ref.balloonsQuantity;

    _classCallCheck(this, Card);

    this.cardWrapper = cardWrapper;
    this.startScreen = startScreen;
    this.btnStart = btnStart;
    this.btnText = btnText;
    this.balloonsLoader = new _BalloonsLoader.default(this.cardWrapper);
    this.speed = speed;
    this.balloonsQuantity = balloonsQuantity;
  }

  _createClass(Card, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.balloonsLoader.loadBalloons(this.balloonsQuantity);
      this.startScreen.style.display = 'none';
      this.btnText.innerHTML = "Pop balloons<br>to get Bday wishes!";
      this.btnStart.classList.remove('bcard__bottom-start');
      this.cardWrapper.addEventListener('click', function (e) {
        return _this.popBalloons(e.target.id);
      });
      requestAnimationFrame(this.moveBalloons.bind(this));
    }
  }, {
    key: "moveBalloons",
    value: function moveBalloons() {
      var _this2 = this;

      var balloons = document.querySelectorAll('.balloon');
      balloons.forEach(function (balloon) {
        var y = balloon.offsetTop;
        y -= _this2.speed;
        balloon.style.top = y + 'px';

        if (y <= -200) {
          _this2.balloonsLoader.generateBalloon(balloon.id.slice(3));

          balloon.remove();
        }
      });
      requestAnimationFrame(this.moveBalloons.bind(this));
    }
  }, {
    key: "popBalloons",
    value: function popBalloons(id) {
      if (id === 'bcont' || id.slice(0, 4) === 'wish') {
        return;
      }

      var targetBalloon = document.getElementById(id);
      var targetBalloonColor = targetBalloon.style.color;
      var x = targetBalloon.offsetLeft;
      var y = targetBalloon.offsetTop;
      var wish = new _Wish.default(x, y, targetBalloonColor, id.slice(3)).create(document.createElement('div'));
      targetBalloon.remove();
      this.cardWrapper.append(wish);
      this.balloonsLoader.generateBalloon(id.slice(3));
      setTimeout(function () {
        return wish.remove();
      }, 3000);
    }
  }]);

  return Card;
}();

exports.default = Card;
},{"./BalloonsLoader":"src/BalloonsLoader.js","./Wish":"src/Wish.js"}],"src/startSettings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startSettings = void 0;
var startSettings = {
  speed: 120,
  balloonsQuantity: 4
};
exports.startSettings = startSettings;
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

var _Card = _interopRequireDefault(require("./Card"));

var _Decor = _interopRequireDefault(require("./Decor"));

var _Balloon = _interopRequireDefault(require("./Balloon"));

var _BalloonsLoader = _interopRequireDefault(require("./BalloonsLoader"));

var _Wish = _interopRequireDefault(require("./Wish"));

var _startSettings = require("./startSettings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.getElementById("start").addEventListener("click", function () {
  var card = new _Card.default(document.getElementById("bcont"), document.getElementById("balloons"), document.getElementById("start"), document.getElementById("txt"), _startSettings.startSettings);
  card.start();
});
},{"./Card":"src/Card.js","./Decor":"src/Decor.js","./Balloon":"src/Balloon.js","./BalloonsLoader":"src/BalloonsLoader.js","./Wish":"src/Wish.js","./startSettings":"src/startSettings.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36945" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map