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
})({"TlhM":[function(require,module,exports) {
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
function jsxProd(type, config, maybeKey) {
  var key = null;
  void 0 !== maybeKey && (key = "" + maybeKey);
  void 0 !== config.key && (key = "" + config.key);
  if ("key" in config) {
    maybeKey = {};
    for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
  } else maybeKey = config;
  config = maybeKey.ref;
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: void 0 !== config ? config : null,
    props: maybeKey
  };
}
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsxProd;
exports.jsxs = jsxProd;
},{}],"plwR":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react-jsx-runtime.production.js');
} else {
  module.exports = require('./cjs/react-jsx-runtime.development.js');
}
},{"./cjs/react-jsx-runtime.production.js":"TlhM"}],"zo2T":[function(require,module,exports) {
"use strict";

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PetGame = exports.STAT_DECAY_RATES = void 0;
exports.calculatePetMood = calculatePetMood;
const jsx_runtime_1 = require("react/jsx-runtime");
const _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
function getStatColorClass(value) {
  return value >= 70 ? "high" : value >= 40 ? "medium" : "low";
}
function StatBar(_ref) {
  let label = _ref.label,
    value = _ref.value,
    icon = _ref.icon,
    _ref$reverse = _ref.reverse,
    reverse = _ref$reverse === void 0 ? false : _ref$reverse;
  const colorClass = getStatColorClass(!reverse ? value : 100 - value);
  return (0, jsx_runtime_1.jsxs)("div", {
    className: "stat-bar stat",
    children: [(0, jsx_runtime_1.jsxs)("div", {
      className: "stat-header",
      children: [(0, jsx_runtime_1.jsxs)("div", {
        className: "stat-label",
        children: [(0, jsx_runtime_1.jsx)("span", {
          className: "stat-icon",
          children: icon
        }), (0, jsx_runtime_1.jsx)("span", {
          className: "stat-name",
          children: label
        })]
      }), (0, jsx_runtime_1.jsxs)("span", {
        className: "stat-value",
        children: [Math.round(value), "%"]
      })]
    }), (0, jsx_runtime_1.jsx)("div", {
      className: "stat-progress",
      children: (0, jsx_runtime_1.jsx)("div", {
        className: "stat-fill ".concat(colorClass),
        style: {
          width: "".concat(value, "%")
        }
      })
    })]
  });
}
var PetAction;
(function (PetAction) {
  PetAction[PetAction["NONE"] = 0] = "NONE";
  PetAction[PetAction["EAT"] = 1] = "EAT";
  PetAction[PetAction["PLAY"] = 2] = "PLAY";
  PetAction[PetAction["SLEEP"] = 3] = "SLEEP";
})(PetAction || (PetAction = {}));
var PetMood;
(function (PetMood) {
  PetMood[PetMood["HAPPY"] = 0] = "HAPPY";
  PetMood[PetMood["EXCITED"] = 1] = "EXCITED";
  PetMood[PetMood["CONTENT"] = 2] = "CONTENT";
  PetMood[PetMood["SAD"] = 3] = "SAD";
  PetMood[PetMood["TIRED"] = 4] = "TIRED";
  PetMood[PetMood["SICK"] = 5] = "SICK";
  PetMood[PetMood["HUNGRY"] = 6] = "HUNGRY";
})(PetMood || (PetMood = {}));
exports.STAT_DECAY_RATES = {
  hunger: 10,
  happiness: 5,
  energy: 5
};
const UPDATE_INTERVAL = 30 * 1000;
function calculatePetMood(pt) {
  const hunger = pt.hunger,
    happiness = pt.happiness,
    energy = pt.energy;
  if (hunger > 70) return PetMood.HUNGRY;
  if (energy < 30) return PetMood.TIRED;
  if (happiness < 30) return PetMood.SAD;
  if (happiness > 80 && energy > 70) return PetMood.EXCITED;
  if (happiness > 60) return PetMood.HAPPY;
  return PetMood.CONTENT;
}
const moodEmojiMap = {
  [PetMood.HAPPY]: "😺",
  [PetMood.EXCITED]: "😻",
  [PetMood.CONTENT]: "😸",
  [PetMood.SAD]: "😿",
  [PetMood.TIRED]: "😽",
  [PetMood.SICK]: "🙀",
  [PetMood.HUNGRY]: "😹"
};
function usePet(_ref2) {
  let isGameStarted = _ref2.isGameStarted;
  let _useState = useState({
      name: "",
      happiness: 100,
      hunger: 0,
      energy: 100,
      species: "Cat"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    pet = _useState2[0],
    setPet = _useState2[1];
  useEffect(() => {
    if (!isGameStarted) return;
    const interval = setInterval(() => {
      setPet(pet => _objectSpread(_objectSpread({}, pet), {}, {
        happiness: Math.max(pet.happiness - 5, 0),
        hunger: Math.min(pet.hunger + 5, 100)
      }));
    }, UPDATE_INTERVAL);
    return () => clearInterval(interval);
  }, [isGameStarted]);
  function doAction(action) {
    switch (action) {
      case PetAction.EAT:
        feedPet();
        break;
      case PetAction.SLEEP:
        restPet();
        break;
      case PetAction.PLAY:
        playWithPet();
        break;
    }
  }
  function feedPet() {
    setPet(pet => _objectSpread(_objectSpread({}, pet), {}, {
      hunger: Math.max(pet.hunger - exports.STAT_DECAY_RATES.hunger, 0),
      energy: Math.min(pet.energy + exports.STAT_DECAY_RATES.energy, 100)
    }));
  }
  function playWithPet() {
    setPet(pet => _objectSpread(_objectSpread({}, pet), {}, {
      energy: Math.max(pet.energy - exports.STAT_DECAY_RATES.energy, 0),
      happiness: Math.min(pet.happiness + exports.STAT_DECAY_RATES.happiness, 100)
    }));
  }
  function restPet() {
    setPet(pet => _objectSpread(_objectSpread({}, pet), {}, {
      hunger: Math.min(pet.hunger + exports.STAT_DECAY_RATES.hunger, 100),
      energy: Math.min(pet.energy + exports.STAT_DECAY_RATES.energy, 100)
    }));
  }
  return {
    pet,
    doAction,
    setName: name => setPet(_objectSpread(_objectSpread({}, pet), {}, {
      name
    }))
  };
}
const PetGame = () => {
  const _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isGameStarted = _useState4[0],
    setGameStarted = _useState4[1];
  let _usePet = usePet({
      isGameStarted,
      setGameStarted
    }),
    pet = _usePet.pet,
    doAction = _usePet.doAction,
    setName = _usePet.setName;
  const _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    fact = _useState6[0],
    setFact = _useState6[1];
  useEffect(() => {
    fetch("https://cat-facts-api.freecodecamp.rocks/api/catfacts/random").then(res => res.json()).then(fact => setFact(fact)).catch(err => {
      setFact("Sorry, we're not able to retrieve your cat fact right now");
    });
  }, []);
  function startGame() {
    const petName = document.getElementById("pet-name").value;
    if (!petName) return;
    setName(petName);
    setGameStarted(true);
  }
  return (0, jsx_runtime_1.jsxs)("main", {
    children: [(0, jsx_runtime_1.jsxs)("header", {
      children: [(0, jsx_runtime_1.jsx)("h1", {
        children: "Digital Pet Game"
      }), (0, jsx_runtime_1.jsx)("p", {
        children: "Take care of your virtual companion!"
      })]
    }), isGameStarted && (0, jsx_runtime_1.jsxs)("section", {
      className: "base-container game-container",
      children: [(0, jsx_runtime_1.jsxs)("div", {
        className: "pet-screen",
        children: [(0, jsx_runtime_1.jsx)("div", {
          className: "pet-sprite",
          children: moodEmojiMap[calculatePetMood(pet)]
        }), (0, jsx_runtime_1.jsx)("h2", {
          className: "pet-name",
          children: pet.name
        })]
      }), (0, jsx_runtime_1.jsxs)("div", {
        className: "pet-buttons",
        children: [(0, jsx_runtime_1.jsx)("button", {
          onClick: () => doAction(PetAction.EAT),
          className: "pet-button pet-buttons-left",
          id: "eat-action",
          children: "EAT"
        }), (0, jsx_runtime_1.jsx)("button", {
          onClick: () => doAction(PetAction.PLAY),
          className: "pet-button pet-buttons-center",
          id: "play-action",
          children: "PLAY"
        }), (0, jsx_runtime_1.jsx)("button", {
          onClick: () => doAction(PetAction.SLEEP),
          className: "pet-button pet-buttons-right",
          id: "sleep-action",
          children: "SLEEP"
        })]
      })]
    }), isGameStarted && (0, jsx_runtime_1.jsxs)("section", {
      className: "stats-grid",
      children: [(0, jsx_runtime_1.jsx)(StatBar, {
        label: "Hunger",
        value: pet.hunger,
        icon: "\uD83C\uDF54",
        reverse: true
      }), (0, jsx_runtime_1.jsx)(StatBar, {
        label: "Happiness",
        value: pet.happiness,
        icon: "\uD83D\uDE0A",
        reverse: true
      }), (0, jsx_runtime_1.jsx)(StatBar, {
        label: "Energy",
        value: pet.energy,
        icon: "\uD83D\uDD0B",
        reverse: true
      })]
    }), (0, jsx_runtime_1.jsx)("section", {
      className: "base-container info-panel",
      children: !isGameStarted ? (0, jsx_runtime_1.jsxs)("form", {
        className: "start-questions",
        children: [(0, jsx_runtime_1.jsx)("label", {
          htmlFor: "pet-name",
          children: "What is your pet's name?"
        }), (0, jsx_runtime_1.jsx)("input", {
          id: "pet-name",
          name: "pet-name",
          required: true,
          pattern: "[A-Za-z0-9]{1,20}"
        }), (0, jsx_runtime_1.jsx)("button", {
          id: "set-name-btn",
          onClick: startGame,
          children: "Start Game"
        })]
      }) : (0, jsx_runtime_1.jsxs)("div", {
        id: "hud",
        children: [(0, jsx_runtime_1.jsxs)("p", {
          id: "pet-species",
          children: ["Species: ", pet.species]
        }), (0, jsx_runtime_1.jsxs)("p", {
          id: "pet-fact",
          children: [(0, jsx_runtime_1.jsx)("b", {
            children: "Pet Fact:"
          }), " ", fact]
        })]
      })
    })]
  });
};
exports.PetGame = PetGame;
},{"react/jsx-runtime":"plwR"}]},{},["zo2T"], null)
//# sourceMappingURL=/src.d477cc3a.js.map