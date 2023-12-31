// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1Tveh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f7d23b776fe6bb4d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1XA8E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _appJs = require("./App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _indexJs = require("./routes/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
const root = document.querySelector("#root");
// App
root.append(new (0, _appJsDefault.default)().el);
(0, _indexJsDefault.default)();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./App.js":"1yvPi","./routes/index.js":"kcdl5"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1yvPi":[function(require,module,exports) {
// export default class App {
//     constructor() {
//         this.el = document.createElement('div');
//         this.el.textContent = 'Hello World!';
//     }
// }
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropyJs = require("./core/heropy.js");
var _fruitItemJs = require("./components/FruitItem.js");
var _fruitItemJsDefault = parcelHelpers.interopDefault(_fruitItemJs);
var _theHeaderJs = require("./components/TheHeader.js");
var _theHeaderJsDefault = parcelHelpers.interopDefault(_theHeaderJs);
class App extends (0, _heropyJs.Component) {
    // constructor()와 super()가 비어있으면 제거해도 괜찮음
    constructor(){
        // super() - 컴포넌트라는 app에서 상속하고 있는 그 클래스의 컨스트럭터 부분을 실행하는 부분
        // super() 안의 객체 데이터는 heropy.js에 component의 payload로 받을 수 있음
        super({
            state: {
                fruits: [
                    {
                        name: "apple",
                        price: 1000
                    },
                    {
                        name: "banana",
                        price: 2000
                    },
                    {
                        name: "cherry",
                        price: 3000
                    }
                ]
            }
        });
    }
    render() {
        this.el.classList.add("search");
        this.el.innerHTML = /* html */ `
        <input />
        <button>Click!</button>
        `;
        const inputEl = this.el.querySelector("input");
        inputEl.addEventListener("input", ()=>{
            this.state.inputText = inputEl.value;
        });
        const buttonEl = this.el.querySelector("button");
        buttonEl.addEventListener("click", ()=>{
            console.log(this.state.inputText);
        });
        console.log(this.state.fruits);
        // innerHTML 사용
        // this.el.innerHTML = /* html */ `
        // <h1>Fruits</h1>
        // <ul>
        //     <!-- 데이터 기반으로 작성 -->
        //     ${this.state.fruits.filter(fruit =>
        //         fruit.price < 3000)
        //         .map(fruit => `<li>${fruit.name}</li>`)
        //         .join('')}
        // </ul>
        // `
        this.el.innerHTML = /* html */ `
        <h1>Fruits</h1>
        <ul>
        </ul>
        `;
        const ulEl = this.el.querySelector("ul");
        ulEl.append(...this.state.fruits.filter((fruit)=>fruit.price < 3000).map((fruit)=>new (0, _fruitItemJsDefault.default)({
                props: {
                    name: fruit.name,
                    price: fruit.price
                }
            }).el));
        const routerView = document.createElement("router-view");
        this.el.append(new (0, _theHeaderJsDefault.default)().el, routerView);
    }
}
exports.default = App;

},{"./core/heropy.js":"kVcDV","./components/FruitItem.js":"1yj35","./components/TheHeader.js":"3t31c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVcDV":[function(require,module,exports) {
// 컴포넌트 
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component);
parcelHelpers.export(exports, "createRouter", ()=>createRouter);
// store //
parcelHelpers.export(exports, "Store", ()=>Store);
class Component {
    // Component라는 클래스는 호출될 때 객체데이터를 인수로 받는데, 객체데이터를 payload()라는 매개변수로 받아서
    // payload()안에서 tagName, state, props라는 내용으로 꺼내서 쓸 수 있음
    // this. 으로 내용을 할당해주고
    // render() 부분에서 사용
    constructor(payload = {}){
        // tagName 기본값 div로 설정(아무것도 입력안되면 기본값은 div로)
        const { tagName = "div", state = {}, props = {} } = payload;
        this.el = document.createElement(tagName);
        this.state = state;
        this.props = props;
        this.render();
    }
    render() {
    // ...
    }
}
// Router 기능
function routeRender(routes) {
    if (!location.hash) history.replaceState(null, "", "/#/");
    const routerView = document.querySelector("router-view");
    // location.hash => 주소의 hash값을 얻을 수 있음
    // http://localhost:1234/#/about?heropy
    // #/about?name=heropy
    // -> ?기준으로 앞쪽: 해쉬, 뒤쪽: 쿼리스트링
    // -> 물음표를 기준으로 해쉬값을 알아야 함
    const [hash, queryString = ""] = location.hash.split("?");
    // a=123&b=456
    // ['a=123', 'b=456']
    // {a: '123', b: '456'}
    queryString.split("&").reduce((acc, cur)=>{
        const [key, value] = cur.split("=");
        acc[key] = value;
        return acc;
    }, {});
    history.replaceState(null, "");
    const currentRoute = routes.find((route)=>// 정규표현식 사용
        new RegExp(`${route.path}/?$`).test(hash));
    routerView.innerHTML = "";
    routerView.append(new currentRoute.component().el);
    window.scrollTo(0, 0);
}
function createRouter(routes) {
    return function() {
        window.addEventListener("popstate", ()=>{
            routeRender(routes);
        });
        routeRender(routes);
    };
}
class Store {
    constructor(state){
        this.state = {};
        this.observers = {};
        // 객체데이터 반복 - For in
        for(const key in state)Object.defineProperty(this.state, key, {
            get: ()=>state[key],
            set: (val)=>{
                state[key] = val;
                this.observers[key].forEach((observer)=>observer(val));
            }
        });
    }
    subscribe(key, cb) {
        Array.isArray(this.observers[key]) ? this.observers[key].push(cb) : this.observers[key] = [
            cb
        ];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1yj35":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropyJs = require("../core/heropy.js");
class FruitItem extends (0, _heropyJs.Component) {
    constructor(payload){
        // super() 부분은 상속받은 Component가 실행되는 부분
        // payload 라는 매개변수에서 super()함수로 payload.props를 다시 Props에 할당
        super({
            tagName: "li",
            props: payload.props
        });
    }
    render() {
        this.el.innerHTML = /* html */ `
        <span>${this.props.name}</span>
        <span>${this.props.price}</span>
        `;
        this.el.addEventListener("click", ()=>{
            console.log(this.props.name, this.props.price);
        });
    }
}
exports.default = FruitItem;

},{"../core/heropy.js":"kVcDV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3t31c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropyJs = require("../core/heropy.js");
class TheHeader extends (0, _heropyJs.Component) {
    constructor(){
        super({
            tagName: "header"
        });
    }
    render() {
        this.el.innerHTML = /* html */ `
                <a href="#/">Main!</a>
                <a href="#/about">About!</a>
            `;
    }
}
exports.default = TheHeader;

},{"../core/heropy.js":"kVcDV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kcdl5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropyJs = require("../core/heropy.js");
var _homeJs = require("./Home.js");
var _homeJsDefault = parcelHelpers.interopDefault(_homeJs);
var _aboutJs = require("./About.js");
var _aboutJsDefault = parcelHelpers.interopDefault(_aboutJs);
exports.default = (0, _heropyJs.createRouter)([
    {
        path: "#/",
        component: (0, _homeJsDefault.default)
    },
    {
        path: "#/about",
        component: (0, _aboutJsDefault.default)
    }
]);

},{"../core/heropy.js":"kVcDV","./Home.js":"5Ct2a","./About.js":"eoZyX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Ct2a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropyJs = require("../core/heropy.js");
var _textFieldJs = require("../components/TextField.js");
var _textFieldJsDefault = parcelHelpers.interopDefault(_textFieldJs);
var _messageJs = require("../components/Message.js");
var _messageJsDefault = parcelHelpers.interopDefault(_messageJs);
var _titleJs = require("../components/Title.js");
var _titleJsDefault = parcelHelpers.interopDefault(_titleJs);
class Home extends (0, _heropyJs.Component) {
    render() {
        this.el.innerHTML = /* html */ `
            <h1>Home Page!</h1>
        `;
        this.el.append(new (0, _textFieldJsDefault.default)().el, new (0, _messageJsDefault.default)().el, new (0, _titleJsDefault.default)().el);
    }
}
exports.default = Home;

},{"../core/heropy.js":"kVcDV","../components/TextField.js":"kikcd","../components/Message.js":"8TIlP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../components/Title.js":"lE72b"}],"kikcd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropyJs = require("../core/heropy.js");
var _messageJs = require("../store/message.js");
var _messageJsDefault = parcelHelpers.interopDefault(_messageJs);
class TextField extends (0, _heropyJs.Component) {
    render() {
        this.el.innerHTML = /*html*/ `
        <input value="${(0, _messageJsDefault.default).state.message}"/>
        `;
        const inputEl = this.el.querySelector("input");
        inputEl.addEventListener("input", ()=>{
            (0, _messageJsDefault.default).state.message = inputEl.value;
        });
    }
}
exports.default = TextField;

},{"../core/heropy.js":"kVcDV","../store/message.js":"eBQxf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eBQxf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropyJs = require("../core/heropy.js");
exports.default = new (0, _heropyJs.Store)({
    message: "Hello~"
});

},{"../core/heropy.js":"kVcDV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8TIlP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropyJs = require("../core/heropy.js");
var _messageJs = require("../store/message.js");
var _messageJsDefault = parcelHelpers.interopDefault(_messageJs);
class Message extends (0, _heropyJs.Component) {
    constructor(){
        super();
        (0, _messageJsDefault.default).subscribe("message", ()=>{
            this.render();
        });
    }
    render() {
        this.el.innerHTML = /* html */ `
        <h2>${(0, _messageJsDefault.default).state.message}</h2>
        `;
    }
}
exports.default = Message;

},{"../core/heropy.js":"kVcDV","../store/message.js":"eBQxf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lE72b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropyJs = require("../core/heropy.js");
var _messageJs = require("../store/message.js");
var _messageJsDefault = parcelHelpers.interopDefault(_messageJs);
class Title extends (0, _heropyJs.Component) {
    constructor(){
        super({
            tagName: "h1"
        });
        (0, _messageJsDefault.default).subscribe("message", ()=>{
            this.render();
        });
    }
    render() {
        this.el.textContent = `Title: ${(0, _messageJsDefault.default).state.message}`;
    }
}
exports.default = Title;

},{"../core/heropy.js":"kVcDV","../store/message.js":"eBQxf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eoZyX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropyJs = require("../core/heropy.js");
class About extends (0, _heropyJs.Component) {
    render() {
        this.el.innerHTML = /* html */ `
            <h1>About Page!</h1>
        `;
    }
}
exports.default = About;

},{"../core/heropy.js":"kVcDV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1Tveh","1XA8E"], "1XA8E", "parcelRequire82f9")

//# sourceMappingURL=index.6fe6bb4d.js.map
