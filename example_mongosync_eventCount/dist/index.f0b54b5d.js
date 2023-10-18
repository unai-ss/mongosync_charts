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
})({"bLPaj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a70597cbf0b54b5d";
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
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
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
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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

},{}],"5kGPv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _auto = require("chart.js/auto");
var _autoDefault = parcelHelpers.interopDefault(_auto);
(async function() {
    const data2 = [
        {
            "level": "info",
            "serverID": "4ab83a64",
            "mongosyncID": "coordinator",
            "totalEventsApplied": 7908996,
            "lagTimeSeconds": 128694,
            "time": "2023-09-14T15:04:03.059578943Z",
            "message": "Replication progress."
        },
        {
            "level": "info",
            "serverID": "4ab83a64",
            "mongosyncID": "coordinator",
            "totalEventsApplied": 7921117,
            "lagTimeSeconds": 128718,
            "time": "2023-09-14T15:04:33.058859292Z",
            "message": "Replication progress."
        }
    ];
    const data = require("1a273faa04430181");
    new (0, _autoDefault.default)(document.getElementById("acquisitions_B_plus1hour"), {
        type: "bar",
        data: {
            labels: data.map((x)=>x.errGroupRoutineID),
            datasets: [
                {
                    label: "eventCount from point B to Oct 6 19:00",
                    data: data.map((row)=>row.eventCount)
                }
            ]
        }
    });
})();

},{"chart.js/auto":"d8NN9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","1a273faa04430181":"aW6s3"}],"aW6s3":[function(require,module,exports) {
module.exports = JSON.parse('[{"errGroupRoutineID":"10","count":1110,"eventCount":15528},{"errGroupRoutineID":"100","count":1071,"eventCount":15493},{"errGroupRoutineID":"101","count":1035,"eventCount":15498},{"errGroupRoutineID":"102","count":1011,"eventCount":15420},{"errGroupRoutineID":"103","count":1016,"eventCount":15492},{"errGroupRoutineID":"104","count":939,"eventCount":15449},{"errGroupRoutineID":"105","count":1012,"eventCount":15478},{"errGroupRoutineID":"106","count":979,"eventCount":15391},{"errGroupRoutineID":"107","count":1042,"eventCount":15355},{"errGroupRoutineID":"108","count":1056,"eventCount":15457},{"errGroupRoutineID":"109","count":1089,"eventCount":15480},{"errGroupRoutineID":"11","count":989,"eventCount":15567},{"errGroupRoutineID":"110","count":1011,"eventCount":15545},{"errGroupRoutineID":"111","count":1034,"eventCount":15481},{"errGroupRoutineID":"112","count":986,"eventCount":15441},{"errGroupRoutineID":"113","count":1126,"eventCount":15472},{"errGroupRoutineID":"114","count":1082,"eventCount":15480},{"errGroupRoutineID":"115","count":998,"eventCount":15511},{"errGroupRoutineID":"116","count":1096,"eventCount":15464},{"errGroupRoutineID":"117","count":1102,"eventCount":15395},{"errGroupRoutineID":"118","count":1019,"eventCount":15515},{"errGroupRoutineID":"119","count":1065,"eventCount":15421},{"errGroupRoutineID":"12","count":1040,"eventCount":15486},{"errGroupRoutineID":"120","count":965,"eventCount":15436},{"errGroupRoutineID":"121","count":1154,"eventCount":15528},{"errGroupRoutineID":"122","count":984,"eventCount":15439},{"errGroupRoutineID":"123","count":1042,"eventCount":15551},{"errGroupRoutineID":"124","count":1025,"eventCount":15469},{"errGroupRoutineID":"125","count":1064,"eventCount":15501},{"errGroupRoutineID":"126","count":1004,"eventCount":15451},{"errGroupRoutineID":"127","count":1046,"eventCount":15492},{"errGroupRoutineID":"128","count":1056,"eventCount":15463},{"errGroupRoutineID":"129","count":1143,"eventCount":15459},{"errGroupRoutineID":"13","count":1070,"eventCount":15530},{"errGroupRoutineID":"130","count":996,"eventCount":15478},{"errGroupRoutineID":"131","count":1080,"eventCount":15442},{"errGroupRoutineID":"132","count":1072,"eventCount":15393},{"errGroupRoutineID":"133","count":997,"eventCount":15465},{"errGroupRoutineID":"134","count":1137,"eventCount":15484},{"errGroupRoutineID":"135","count":1098,"eventCount":15501},{"errGroupRoutineID":"136","count":1098,"eventCount":15430},{"errGroupRoutineID":"137","count":968,"eventCount":15435},{"errGroupRoutineID":"138","count":1006,"eventCount":15442},{"errGroupRoutineID":"139","count":1062,"eventCount":15536},{"errGroupRoutineID":"14","count":1010,"eventCount":15456},{"errGroupRoutineID":"140","count":1015,"eventCount":15536},{"errGroupRoutineID":"141","count":1149,"eventCount":15529},{"errGroupRoutineID":"142","count":1046,"eventCount":15558},{"errGroupRoutineID":"143","count":1055,"eventCount":15457},{"errGroupRoutineID":"144","count":966,"eventCount":15414},{"errGroupRoutineID":"145","count":1017,"eventCount":15484},{"errGroupRoutineID":"146","count":1039,"eventCount":15519},{"errGroupRoutineID":"147","count":975,"eventCount":15517},{"errGroupRoutineID":"148","count":1114,"eventCount":15426},{"errGroupRoutineID":"149","count":923,"eventCount":15400},{"errGroupRoutineID":"15","count":1023,"eventCount":15458},{"errGroupRoutineID":"150","count":1058,"eventCount":15503},{"errGroupRoutineID":"151","count":981,"eventCount":15395},{"errGroupRoutineID":"152","count":1034,"eventCount":15451},{"errGroupRoutineID":"153","count":989,"eventCount":15410},{"errGroupRoutineID":"154","count":990,"eventCount":15439},{"errGroupRoutineID":"155","count":1060,"eventCount":15530},{"errGroupRoutineID":"156","count":1033,"eventCount":15477},{"errGroupRoutineID":"157","count":960,"eventCount":15437},{"errGroupRoutineID":"158","count":1026,"eventCount":15442},{"errGroupRoutineID":"159","count":1107,"eventCount":15481},{"errGroupRoutineID":"16","count":1074,"eventCount":15431},{"errGroupRoutineID":"160","count":1062,"eventCount":15478},{"errGroupRoutineID":"161","count":1022,"eventCount":15481},{"errGroupRoutineID":"162","count":1029,"eventCount":15462},{"errGroupRoutineID":"163","count":957,"eventCount":15457},{"errGroupRoutineID":"164","count":965,"eventCount":15452},{"errGroupRoutineID":"165","count":1020,"eventCount":15480},{"errGroupRoutineID":"166","count":941,"eventCount":15428},{"errGroupRoutineID":"167","count":1092,"eventCount":15455},{"errGroupRoutineID":"168","count":1001,"eventCount":15444},{"errGroupRoutineID":"169","count":977,"eventCount":15484},{"errGroupRoutineID":"17","count":977,"eventCount":15457},{"errGroupRoutineID":"170","count":1006,"eventCount":15561},{"errGroupRoutineID":"171","count":991,"eventCount":15482},{"errGroupRoutineID":"172","count":1047,"eventCount":15438},{"errGroupRoutineID":"173","count":1063,"eventCount":15476},{"errGroupRoutineID":"174","count":1009,"eventCount":15511},{"errGroupRoutineID":"175","count":1037,"eventCount":15489},{"errGroupRoutineID":"176","count":988,"eventCount":15448},{"errGroupRoutineID":"177","count":1101,"eventCount":15429},{"errGroupRoutineID":"178","count":1024,"eventCount":15540},{"errGroupRoutineID":"179","count":1007,"eventCount":15487},{"errGroupRoutineID":"18","count":992,"eventCount":15442},{"errGroupRoutineID":"180","count":999,"eventCount":15508},{"errGroupRoutineID":"181","count":1042,"eventCount":15459},{"errGroupRoutineID":"182","count":997,"eventCount":15482},{"errGroupRoutineID":"183","count":1019,"eventCount":15492},{"errGroupRoutineID":"184","count":1074,"eventCount":15475},{"errGroupRoutineID":"185","count":1007,"eventCount":15444},{"errGroupRoutineID":"186","count":1003,"eventCount":15355},{"errGroupRoutineID":"187","count":992,"eventCount":15474},{"errGroupRoutineID":"188","count":987,"eventCount":15540},{"errGroupRoutineID":"189","count":991,"eventCount":15486},{"errGroupRoutineID":"19","count":1071,"eventCount":15478},{"errGroupRoutineID":"190","count":981,"eventCount":15469},{"errGroupRoutineID":"191","count":983,"eventCount":15504},{"errGroupRoutineID":"192","count":1047,"eventCount":15501},{"errGroupRoutineID":"193","count":984,"eventCount":15505},{"errGroupRoutineID":"194","count":1074,"eventCount":15511},{"errGroupRoutineID":"195","count":998,"eventCount":15478},{"errGroupRoutineID":"196","count":1108,"eventCount":15458},{"errGroupRoutineID":"197","count":1073,"eventCount":15459},{"errGroupRoutineID":"198","count":1009,"eventCount":15486},{"errGroupRoutineID":"199","count":1056,"eventCount":15452},{"errGroupRoutineID":"20","count":1090,"eventCount":15499},{"errGroupRoutineID":"200","count":958,"eventCount":15514},{"errGroupRoutineID":"201","count":1021,"eventCount":15488},{"errGroupRoutineID":"202","count":1022,"eventCount":15414},{"errGroupRoutineID":"203","count":1024,"eventCount":15484},{"errGroupRoutineID":"204","count":1173,"eventCount":15489},{"errGroupRoutineID":"205","count":959,"eventCount":15549},{"errGroupRoutineID":"206","count":1029,"eventCount":15480},{"errGroupRoutineID":"207","count":1002,"eventCount":15519},{"errGroupRoutineID":"208","count":1057,"eventCount":15454},{"errGroupRoutineID":"209","count":993,"eventCount":15448},{"errGroupRoutineID":"21","count":1121,"eventCount":15411},{"errGroupRoutineID":"210","count":1084,"eventCount":15505},{"errGroupRoutineID":"211","count":952,"eventCount":15574},{"errGroupRoutineID":"212","count":1031,"eventCount":15494},{"errGroupRoutineID":"213","count":1076,"eventCount":15482},{"errGroupRoutineID":"214","count":1071,"eventCount":15385},{"errGroupRoutineID":"215","count":977,"eventCount":15533},{"errGroupRoutineID":"216","count":964,"eventCount":15505},{"errGroupRoutineID":"217","count":1070,"eventCount":15438},{"errGroupRoutineID":"218","count":996,"eventCount":15513},{"errGroupRoutineID":"219","count":1013,"eventCount":15414},{"errGroupRoutineID":"22","count":1032,"eventCount":15581},{"errGroupRoutineID":"220","count":1029,"eventCount":15465},{"errGroupRoutineID":"221","count":994,"eventCount":15457},{"errGroupRoutineID":"222","count":1064,"eventCount":15546},{"errGroupRoutineID":"223","count":1027,"eventCount":15407},{"errGroupRoutineID":"224","count":1046,"eventCount":15432},{"errGroupRoutineID":"225","count":962,"eventCount":15497},{"errGroupRoutineID":"226","count":1010,"eventCount":15499},{"errGroupRoutineID":"227","count":1032,"eventCount":15500},{"errGroupRoutineID":"228","count":1012,"eventCount":15493},{"errGroupRoutineID":"229","count":1016,"eventCount":15554},{"errGroupRoutineID":"23","count":976,"eventCount":15398},{"errGroupRoutineID":"230","count":993,"eventCount":15471},{"errGroupRoutineID":"231","count":953,"eventCount":15497},{"errGroupRoutineID":"232","count":1079,"eventCount":15488},{"errGroupRoutineID":"233","count":1089,"eventCount":15459},{"errGroupRoutineID":"234","count":1107,"eventCount":15420},{"errGroupRoutineID":"235","count":1056,"eventCount":15425},{"errGroupRoutineID":"236","count":982,"eventCount":15409},{"errGroupRoutineID":"237","count":990,"eventCount":15476},{"errGroupRoutineID":"238","count":989,"eventCount":15541},{"errGroupRoutineID":"239","count":1102,"eventCount":15522},{"errGroupRoutineID":"24","count":1070,"eventCount":15437},{"errGroupRoutineID":"240","count":1018,"eventCount":15457},{"errGroupRoutineID":"241","count":1056,"eventCount":15610},{"errGroupRoutineID":"242","count":1073,"eventCount":15480},{"errGroupRoutineID":"243","count":1024,"eventCount":15481},{"errGroupRoutineID":"244","count":937,"eventCount":15425},{"errGroupRoutineID":"245","count":1132,"eventCount":15396},{"errGroupRoutineID":"246","count":963,"eventCount":15461},{"errGroupRoutineID":"247","count":1047,"eventCount":15419},{"errGroupRoutineID":"248","count":965,"eventCount":15456},{"errGroupRoutineID":"249","count":1022,"eventCount":15507},{"errGroupRoutineID":"25","count":988,"eventCount":15366},{"errGroupRoutineID":"250","count":1054,"eventCount":15493},{"errGroupRoutineID":"251","count":1010,"eventCount":15535},{"errGroupRoutineID":"252","count":974,"eventCount":15512},{"errGroupRoutineID":"253","count":1020,"eventCount":15510},{"errGroupRoutineID":"254","count":1044,"eventCount":15452},{"errGroupRoutineID":"255","count":1064,"eventCount":15478},{"errGroupRoutineID":"256","count":1016,"eventCount":15461},{"errGroupRoutineID":"257","count":1065,"eventCount":15412},{"errGroupRoutineID":"258","count":1032,"eventCount":15531},{"errGroupRoutineID":"259","count":994,"eventCount":15469},{"errGroupRoutineID":"26","count":973,"eventCount":15460},{"errGroupRoutineID":"260","count":1021,"eventCount":15462},{"errGroupRoutineID":"261","count":1030,"eventCount":15462},{"errGroupRoutineID":"262","count":973,"eventCount":15497},{"errGroupRoutineID":"263","count":1005,"eventCount":15525},{"errGroupRoutineID":"264","count":964,"eventCount":15484},{"errGroupRoutineID":"265","count":960,"eventCount":15333},{"errGroupRoutineID":"266","count":1126,"eventCount":15472},{"errGroupRoutineID":"267","count":1027,"eventCount":15523},{"errGroupRoutineID":"268","count":1066,"eventCount":15532},{"errGroupRoutineID":"269","count":1058,"eventCount":15480},{"errGroupRoutineID":"27","count":977,"eventCount":15467},{"errGroupRoutineID":"270","count":1024,"eventCount":15482},{"errGroupRoutineID":"271","count":1007,"eventCount":15437},{"errGroupRoutineID":"272","count":1030,"eventCount":15407},{"errGroupRoutineID":"273","count":1084,"eventCount":15501},{"errGroupRoutineID":"274","count":1038,"eventCount":15467},{"errGroupRoutineID":"275","count":1022,"eventCount":15518},{"errGroupRoutineID":"276","count":1037,"eventCount":15505},{"errGroupRoutineID":"277","count":1089,"eventCount":15362},{"errGroupRoutineID":"278","count":961,"eventCount":15511},{"errGroupRoutineID":"279","count":1008,"eventCount":15436},{"errGroupRoutineID":"28","count":1084,"eventCount":15462},{"errGroupRoutineID":"280","count":1051,"eventCount":15473},{"errGroupRoutineID":"281","count":1045,"eventCount":15440},{"errGroupRoutineID":"282","count":1084,"eventCount":15434},{"errGroupRoutineID":"283","count":1088,"eventCount":15485},{"errGroupRoutineID":"284","count":1012,"eventCount":15503},{"errGroupRoutineID":"285","count":995,"eventCount":15495},{"errGroupRoutineID":"286","count":1015,"eventCount":15435},{"errGroupRoutineID":"287","count":1036,"eventCount":15478},{"errGroupRoutineID":"288","count":1021,"eventCount":15422},{"errGroupRoutineID":"289","count":1015,"eventCount":15485},{"errGroupRoutineID":"29","count":1042,"eventCount":15528},{"errGroupRoutineID":"290","count":973,"eventCount":15471},{"errGroupRoutineID":"291","count":1124,"eventCount":15455},{"errGroupRoutineID":"292","count":1017,"eventCount":15452},{"errGroupRoutineID":"293","count":960,"eventCount":15466},{"errGroupRoutineID":"294","count":998,"eventCount":15473},{"errGroupRoutineID":"295","count":1022,"eventCount":15459},{"errGroupRoutineID":"296","count":997,"eventCount":15487},{"errGroupRoutineID":"297","count":1070,"eventCount":15487},{"errGroupRoutineID":"298","count":1062,"eventCount":15485},{"errGroupRoutineID":"299","count":972,"eventCount":15410},{"errGroupRoutineID":"3","count":994,"eventCount":15444},{"errGroupRoutineID":"30","count":1073,"eventCount":15484},{"errGroupRoutineID":"300","count":944,"eventCount":15417},{"errGroupRoutineID":"301","count":1023,"eventCount":15484},{"errGroupRoutineID":"302","count":1006,"eventCount":15493},{"errGroupRoutineID":"303","count":980,"eventCount":15438},{"errGroupRoutineID":"304","count":1149,"eventCount":15488},{"errGroupRoutineID":"305","count":1008,"eventCount":15471},{"errGroupRoutineID":"306","count":1067,"eventCount":15503},{"errGroupRoutineID":"307","count":1049,"eventCount":15435},{"errGroupRoutineID":"308","count":1029,"eventCount":15483},{"errGroupRoutineID":"309","count":1046,"eventCount":15449},{"errGroupRoutineID":"31","count":1029,"eventCount":15487},{"errGroupRoutineID":"310","count":1089,"eventCount":15508},{"errGroupRoutineID":"311","count":968,"eventCount":15442},{"errGroupRoutineID":"312","count":1010,"eventCount":15543},{"errGroupRoutineID":"313","count":1084,"eventCount":15406},{"errGroupRoutineID":"314","count":1001,"eventCount":15498},{"errGroupRoutineID":"315","count":1083,"eventCount":15457},{"errGroupRoutineID":"316","count":1102,"eventCount":15503},{"errGroupRoutineID":"317","count":965,"eventCount":15484},{"errGroupRoutineID":"318","count":998,"eventCount":15497},{"errGroupRoutineID":"319","count":1025,"eventCount":15479},{"errGroupRoutineID":"32","count":1019,"eventCount":15464},{"errGroupRoutineID":"320","count":936,"eventCount":15465},{"errGroupRoutineID":"321","count":1040,"eventCount":15522},{"errGroupRoutineID":"322","count":1032,"eventCount":15559},{"errGroupRoutineID":"323","count":1040,"eventCount":15445},{"errGroupRoutineID":"324","count":1009,"eventCount":15493},{"errGroupRoutineID":"325","count":1041,"eventCount":15457},{"errGroupRoutineID":"326","count":1149,"eventCount":15523},{"errGroupRoutineID":"327","count":1016,"eventCount":15496},{"errGroupRoutineID":"328","count":1088,"eventCount":15510},{"errGroupRoutineID":"329","count":1036,"eventCount":15477},{"errGroupRoutineID":"33","count":1116,"eventCount":15436},{"errGroupRoutineID":"330","count":1053,"eventCount":15424},{"errGroupRoutineID":"331","count":1109,"eventCount":15461},{"errGroupRoutineID":"332","count":1091,"eventCount":15492},{"errGroupRoutineID":"333","count":1071,"eventCount":15524},{"errGroupRoutineID":"334","count":974,"eventCount":15476},{"errGroupRoutineID":"335","count":1058,"eventCount":15479},{"errGroupRoutineID":"336","count":1061,"eventCount":15415},{"errGroupRoutineID":"337","count":991,"eventCount":15489},{"errGroupRoutineID":"338","count":1000,"eventCount":15513},{"errGroupRoutineID":"339","count":981,"eventCount":15570},{"errGroupRoutineID":"34","count":960,"eventCount":15503},{"errGroupRoutineID":"340","count":1019,"eventCount":15455},{"errGroupRoutineID":"341","count":1016,"eventCount":15490},{"errGroupRoutineID":"342","count":1044,"eventCount":15497},{"errGroupRoutineID":"343","count":977,"eventCount":15465},{"errGroupRoutineID":"344","count":1087,"eventCount":15513},{"errGroupRoutineID":"345","count":1056,"eventCount":15498},{"errGroupRoutineID":"346","count":1020,"eventCount":15464},{"errGroupRoutineID":"347","count":1001,"eventCount":15403},{"errGroupRoutineID":"348","count":1015,"eventCount":15520},{"errGroupRoutineID":"349","count":1056,"eventCount":15485},{"errGroupRoutineID":"35","count":1041,"eventCount":15486},{"errGroupRoutineID":"350","count":1020,"eventCount":15548},{"errGroupRoutineID":"351","count":981,"eventCount":15470},{"errGroupRoutineID":"352","count":959,"eventCount":15422},{"errGroupRoutineID":"353","count":1023,"eventCount":15503},{"errGroupRoutineID":"354","count":1029,"eventCount":15476},{"errGroupRoutineID":"355","count":1052,"eventCount":15521},{"errGroupRoutineID":"356","count":1091,"eventCount":15438},{"errGroupRoutineID":"357","count":996,"eventCount":15524},{"errGroupRoutineID":"358","count":1015,"eventCount":15445},{"errGroupRoutineID":"359","count":1055,"eventCount":15469},{"errGroupRoutineID":"36","count":987,"eventCount":15366},{"errGroupRoutineID":"360","count":998,"eventCount":15447},{"errGroupRoutineID":"361","count":1080,"eventCount":15445},{"errGroupRoutineID":"362","count":1052,"eventCount":15416},{"errGroupRoutineID":"363","count":978,"eventCount":15466},{"errGroupRoutineID":"364","count":1015,"eventCount":15440},{"errGroupRoutineID":"365","count":1018,"eventCount":15536},{"errGroupRoutineID":"366","count":968,"eventCount":15593},{"errGroupRoutineID":"367","count":1012,"eventCount":15506},{"errGroupRoutineID":"368","count":971,"eventCount":15456},{"errGroupRoutineID":"369","count":1066,"eventCount":15509},{"errGroupRoutineID":"37","count":1053,"eventCount":15478},{"errGroupRoutineID":"370","count":975,"eventCount":15474},{"errGroupRoutineID":"371","count":1042,"eventCount":15479},{"errGroupRoutineID":"372","count":1104,"eventCount":15467},{"errGroupRoutineID":"373","count":1109,"eventCount":15462},{"errGroupRoutineID":"374","count":1028,"eventCount":15448},{"errGroupRoutineID":"375","count":1091,"eventCount":15444},{"errGroupRoutineID":"376","count":1035,"eventCount":15422},{"errGroupRoutineID":"377","count":1049,"eventCount":15493},{"errGroupRoutineID":"378","count":988,"eventCount":15469},{"errGroupRoutineID":"379","count":1015,"eventCount":15563},{"errGroupRoutineID":"38","count":941,"eventCount":15435},{"errGroupRoutineID":"380","count":1127,"eventCount":15516},{"errGroupRoutineID":"381","count":1090,"eventCount":15502},{"errGroupRoutineID":"382","count":1007,"eventCount":15489},{"errGroupRoutineID":"383","count":1073,"eventCount":15497},{"errGroupRoutineID":"384","count":1041,"eventCount":15468},{"errGroupRoutineID":"385","count":974,"eventCount":15463},{"errGroupRoutineID":"386","count":966,"eventCount":15506},{"errGroupRoutineID":"387","count":1031,"eventCount":15460},{"errGroupRoutineID":"388","count":1002,"eventCount":15463},{"errGroupRoutineID":"389","count":981,"eventCount":15430},{"errGroupRoutineID":"39","count":1013,"eventCount":15447},{"errGroupRoutineID":"390","count":1036,"eventCount":15441},{"errGroupRoutineID":"391","count":1127,"eventCount":15518},{"errGroupRoutineID":"392","count":1013,"eventCount":15487},{"errGroupRoutineID":"393","count":1037,"eventCount":15408},{"errGroupRoutineID":"394","count":1031,"eventCount":15482},{"errGroupRoutineID":"395","count":1021,"eventCount":15497},{"errGroupRoutineID":"396","count":953,"eventCount":15548},{"errGroupRoutineID":"397","count":982,"eventCount":15558},{"errGroupRoutineID":"398","count":1006,"eventCount":15560},{"errGroupRoutineID":"399","count":1023,"eventCount":15416},{"errGroupRoutineID":"4","count":1105,"eventCount":15449},{"errGroupRoutineID":"40","count":1085,"eventCount":15509},{"errGroupRoutineID":"400","count":963,"eventCount":15385},{"errGroupRoutineID":"401","count":1011,"eventCount":15483},{"errGroupRoutineID":"402","count":1045,"eventCount":15508},{"errGroupRoutineID":"403","count":1018,"eventCount":15507},{"errGroupRoutineID":"404","count":1004,"eventCount":15475},{"errGroupRoutineID":"405","count":1032,"eventCount":15424},{"errGroupRoutineID":"406","count":1016,"eventCount":15537},{"errGroupRoutineID":"407","count":1084,"eventCount":15390},{"errGroupRoutineID":"408","count":980,"eventCount":15484},{"errGroupRoutineID":"409","count":959,"eventCount":15450},{"errGroupRoutineID":"41","count":981,"eventCount":15476},{"errGroupRoutineID":"410","count":1073,"eventCount":15472},{"errGroupRoutineID":"411","count":993,"eventCount":15515},{"errGroupRoutineID":"412","count":967,"eventCount":15540},{"errGroupRoutineID":"413","count":1101,"eventCount":15427},{"errGroupRoutineID":"414","count":1049,"eventCount":15480},{"errGroupRoutineID":"415","count":1080,"eventCount":15474},{"errGroupRoutineID":"416","count":1015,"eventCount":15419},{"errGroupRoutineID":"417","count":1025,"eventCount":15418},{"errGroupRoutineID":"418","count":1020,"eventCount":15470},{"errGroupRoutineID":"419","count":1134,"eventCount":15432},{"errGroupRoutineID":"42","count":1047,"eventCount":15520},{"errGroupRoutineID":"420","count":949,"eventCount":15368},{"errGroupRoutineID":"421","count":989,"eventCount":15441},{"errGroupRoutineID":"422","count":1119,"eventCount":15415},{"errGroupRoutineID":"423","count":977,"eventCount":15468},{"errGroupRoutineID":"424","count":1079,"eventCount":15496},{"errGroupRoutineID":"425","count":1032,"eventCount":15471},{"errGroupRoutineID":"426","count":1037,"eventCount":15477},{"errGroupRoutineID":"427","count":1081,"eventCount":15443},{"errGroupRoutineID":"428","count":977,"eventCount":15458},{"errGroupRoutineID":"429","count":1111,"eventCount":15410},{"errGroupRoutineID":"43","count":998,"eventCount":15480},{"errGroupRoutineID":"430","count":1015,"eventCount":15506},{"errGroupRoutineID":"431","count":1067,"eventCount":15521},{"errGroupRoutineID":"432","count":1049,"eventCount":15524},{"errGroupRoutineID":"433","count":1043,"eventCount":15496},{"errGroupRoutineID":"434","count":1088,"eventCount":15545},{"errGroupRoutineID":"435","count":1040,"eventCount":15485},{"errGroupRoutineID":"436","count":1055,"eventCount":15460},{"errGroupRoutineID":"437","count":1011,"eventCount":15491},{"errGroupRoutineID":"438","count":1066,"eventCount":15441},{"errGroupRoutineID":"439","count":1029,"eventCount":15488},{"errGroupRoutineID":"44","count":924,"eventCount":15438},{"errGroupRoutineID":"440","count":1074,"eventCount":15521},{"errGroupRoutineID":"441","count":1008,"eventCount":15458},{"errGroupRoutineID":"442","count":976,"eventCount":15415},{"errGroupRoutineID":"443","count":999,"eventCount":15460},{"errGroupRoutineID":"444","count":987,"eventCount":15497},{"errGroupRoutineID":"445","count":1117,"eventCount":15452},{"errGroupRoutineID":"446","count":1102,"eventCount":15456},{"errGroupRoutineID":"447","count":1000,"eventCount":15466},{"errGroupRoutineID":"448","count":935,"eventCount":15421},{"errGroupRoutineID":"449","count":1084,"eventCount":15478},{"errGroupRoutineID":"45","count":1055,"eventCount":15497},{"errGroupRoutineID":"450","count":950,"eventCount":15505},{"errGroupRoutineID":"451","count":1059,"eventCount":15466},{"errGroupRoutineID":"452","count":1111,"eventCount":15492},{"errGroupRoutineID":"453","count":1067,"eventCount":15430},{"errGroupRoutineID":"454","count":1025,"eventCount":15493},{"errGroupRoutineID":"455","count":1102,"eventCount":15484},{"errGroupRoutineID":"456","count":1012,"eventCount":15368},{"errGroupRoutineID":"457","count":929,"eventCount":15509},{"errGroupRoutineID":"458","count":1081,"eventCount":15503},{"errGroupRoutineID":"459","count":992,"eventCount":15453},{"errGroupRoutineID":"46","count":1127,"eventCount":15485},{"errGroupRoutineID":"460","count":1027,"eventCount":15508},{"errGroupRoutineID":"461","count":947,"eventCount":15562},{"errGroupRoutineID":"462","count":953,"eventCount":15474},{"errGroupRoutineID":"463","count":1034,"eventCount":15475},{"errGroupRoutineID":"464","count":1063,"eventCount":15451},{"errGroupRoutineID":"465","count":1018,"eventCount":15433},{"errGroupRoutineID":"466","count":1125,"eventCount":15554},{"errGroupRoutineID":"467","count":1090,"eventCount":15528},{"errGroupRoutineID":"468","count":1024,"eventCount":15475},{"errGroupRoutineID":"469","count":1060,"eventCount":15496},{"errGroupRoutineID":"47","count":1030,"eventCount":15501},{"errGroupRoutineID":"470","count":947,"eventCount":15430},{"errGroupRoutineID":"471","count":954,"eventCount":15432},{"errGroupRoutineID":"472","count":1051,"eventCount":15510},{"errGroupRoutineID":"473","count":957,"eventCount":15463},{"errGroupRoutineID":"474","count":952,"eventCount":15474},{"errGroupRoutineID":"475","count":1012,"eventCount":15324},{"errGroupRoutineID":"476","count":960,"eventCount":15511},{"errGroupRoutineID":"477","count":1044,"eventCount":15426},{"errGroupRoutineID":"478","count":1002,"eventCount":15552},{"errGroupRoutineID":"479","count":949,"eventCount":15463},{"errGroupRoutineID":"48","count":1001,"eventCount":15476},{"errGroupRoutineID":"480","count":1056,"eventCount":15419},{"errGroupRoutineID":"481","count":1032,"eventCount":15466},{"errGroupRoutineID":"482","count":1141,"eventCount":15504},{"errGroupRoutineID":"483","count":990,"eventCount":15497},{"errGroupRoutineID":"484","count":986,"eventCount":15488},{"errGroupRoutineID":"485","count":1003,"eventCount":15474},{"errGroupRoutineID":"486","count":981,"eventCount":15497},{"errGroupRoutineID":"487","count":1071,"eventCount":15495},{"errGroupRoutineID":"488","count":1134,"eventCount":15441},{"errGroupRoutineID":"489","count":981,"eventCount":15435},{"errGroupRoutineID":"49","count":996,"eventCount":15446},{"errGroupRoutineID":"490","count":1033,"eventCount":15433},{"errGroupRoutineID":"491","count":1114,"eventCount":15413},{"errGroupRoutineID":"492","count":1021,"eventCount":15468},{"errGroupRoutineID":"493","count":995,"eventCount":15426},{"errGroupRoutineID":"494","count":1132,"eventCount":15618},{"errGroupRoutineID":"495","count":1153,"eventCount":15518},{"errGroupRoutineID":"496","count":961,"eventCount":15439},{"errGroupRoutineID":"497","count":1097,"eventCount":15526},{"errGroupRoutineID":"498","count":1012,"eventCount":15497},{"errGroupRoutineID":"499","count":1124,"eventCount":15544},{"errGroupRoutineID":"5","count":1073,"eventCount":15485},{"errGroupRoutineID":"50","count":1046,"eventCount":15542},{"errGroupRoutineID":"500","count":1042,"eventCount":15424},{"errGroupRoutineID":"501","count":992,"eventCount":15441},{"errGroupRoutineID":"502","count":948,"eventCount":15411},{"errGroupRoutineID":"503","count":965,"eventCount":15351},{"errGroupRoutineID":"504","count":1023,"eventCount":15446},{"errGroupRoutineID":"505","count":975,"eventCount":15439},{"errGroupRoutineID":"506","count":1001,"eventCount":15469},{"errGroupRoutineID":"507","count":950,"eventCount":15524},{"errGroupRoutineID":"508","count":1057,"eventCount":15462},{"errGroupRoutineID":"509","count":986,"eventCount":15435},{"errGroupRoutineID":"51","count":1028,"eventCount":15465},{"errGroupRoutineID":"510","count":1043,"eventCount":15418},{"errGroupRoutineID":"511","count":1049,"eventCount":15484},{"errGroupRoutineID":"512","count":1017,"eventCount":15456},{"errGroupRoutineID":"513","count":1144,"eventCount":15448},{"errGroupRoutineID":"514","count":1005,"eventCount":15498},{"errGroupRoutineID":"52","count":1052,"eventCount":15470},{"errGroupRoutineID":"53","count":953,"eventCount":15410},{"errGroupRoutineID":"54","count":1063,"eventCount":15476},{"errGroupRoutineID":"55","count":1068,"eventCount":15490},{"errGroupRoutineID":"56","count":1021,"eventCount":15529},{"errGroupRoutineID":"57","count":1041,"eventCount":15458},{"errGroupRoutineID":"58","count":1064,"eventCount":15432},{"errGroupRoutineID":"59","count":967,"eventCount":15432},{"errGroupRoutineID":"6","count":995,"eventCount":15410},{"errGroupRoutineID":"60","count":1114,"eventCount":15510},{"errGroupRoutineID":"61","count":997,"eventCount":15512},{"errGroupRoutineID":"62","count":985,"eventCount":15442},{"errGroupRoutineID":"63","count":1047,"eventCount":15513},{"errGroupRoutineID":"64","count":1063,"eventCount":15421},{"errGroupRoutineID":"65","count":1047,"eventCount":15505},{"errGroupRoutineID":"66","count":1059,"eventCount":15460},{"errGroupRoutineID":"67","count":985,"eventCount":15445},{"errGroupRoutineID":"68","count":984,"eventCount":15519},{"errGroupRoutineID":"69","count":991,"eventCount":15433},{"errGroupRoutineID":"7","count":1073,"eventCount":15512},{"errGroupRoutineID":"70","count":980,"eventCount":15510},{"errGroupRoutineID":"71","count":1011,"eventCount":15486},{"errGroupRoutineID":"72","count":1076,"eventCount":15465},{"errGroupRoutineID":"73","count":1095,"eventCount":15505},{"errGroupRoutineID":"74","count":965,"eventCount":15430},{"errGroupRoutineID":"75","count":1064,"eventCount":15477},{"errGroupRoutineID":"76","count":1012,"eventCount":15506},{"errGroupRoutineID":"77","count":978,"eventCount":15473},{"errGroupRoutineID":"78","count":1059,"eventCount":15431},{"errGroupRoutineID":"79","count":1023,"eventCount":15513},{"errGroupRoutineID":"8","count":1078,"eventCount":15446},{"errGroupRoutineID":"80","count":995,"eventCount":15453},{"errGroupRoutineID":"81","count":1023,"eventCount":15429},{"errGroupRoutineID":"82","count":1028,"eventCount":15477},{"errGroupRoutineID":"83","count":1134,"eventCount":15532},{"errGroupRoutineID":"84","count":1086,"eventCount":15441},{"errGroupRoutineID":"85","count":1104,"eventCount":15465},{"errGroupRoutineID":"86","count":1007,"eventCount":15454},{"errGroupRoutineID":"87","count":1023,"eventCount":15471},{"errGroupRoutineID":"88","count":1044,"eventCount":15514},{"errGroupRoutineID":"89","count":1162,"eventCount":15490},{"errGroupRoutineID":"9","count":1050,"eventCount":15396},{"errGroupRoutineID":"90","count":1030,"eventCount":15516},{"errGroupRoutineID":"91","count":1005,"eventCount":15393},{"errGroupRoutineID":"92","count":1071,"eventCount":15476},{"errGroupRoutineID":"93","count":985,"eventCount":15487},{"errGroupRoutineID":"94","count":986,"eventCount":15540},{"errGroupRoutineID":"95","count":998,"eventCount":15456},{"errGroupRoutineID":"96","count":1051,"eventCount":15454},{"errGroupRoutineID":"97","count":1097,"eventCount":15503},{"errGroupRoutineID":"98","count":1132,"eventCount":15500},{"errGroupRoutineID":"99","count":1076,"eventCount":15486}]');

},{}]},["bLPaj","5kGPv"], "5kGPv", "parcelRequire30ab")

//# sourceMappingURL=index.f0b54b5d.js.map
