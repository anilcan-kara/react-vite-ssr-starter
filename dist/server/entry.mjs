import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigsSerialized = [
  {
    pageId: "/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/pages_error.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        valueSerialized: "true",
        type: "computed",
        definedAtData: null
      },
      ["clientRouting"]: {
        valueSerialized: "true",
        type: "classic",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] }
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/pages/about",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/about", "definedBy": "/pages/about/" },
    loadConfigValuesAll: () => import("./entries/pages_about.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        valueSerialized: "true",
        type: "computed",
        definedAtData: null
      },
      ["clientRouting"]: {
        valueSerialized: "true",
        type: "classic",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] }
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/pages/index/" },
    loadConfigValuesAll: () => import("./entries/pages_index.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        valueSerialized: "true",
        type: "computed",
        definedAtData: null
      },
      ["clientRouting"]: {
        valueSerialized: "true",
        type: "classic",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] }
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/pages/star-wars/@id",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/star-wars/@id", "definedBy": "/pages/star-wars/@id/" },
    loadConfigValuesAll: () => import("./entries/pages_star-wars_-id.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        valueSerialized: "true",
        type: "computed",
        definedAtData: null
      },
      ["clientRouting"]: {
        valueSerialized: "true",
        type: "classic",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] }
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/pages/star-wars/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/star-wars", "definedBy": "/pages/star-wars/index/" },
    loadConfigValuesAll: () => import("./entries/pages_star-wars_index.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        valueSerialized: "true",
        type: "computed",
        definedAtData: null
      },
      ["clientRouting"]: {
        valueSerialized: "true",
        type: "classic",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] }
      }
    },
    configValuesImported: []
  }
];
const pageConfigGlobalSerialized = {
  configValuesImported: []
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-!~{007}~.js": {
    "file": "assets/static/onRenderClient.B_x-51_i.css",
    "src": "_chunk-!~{007}~.js"
  },
  "_chunk-C3bx-nK1.js": {
    "file": "assets/chunks/chunk-C3bx-nK1.js",
    "name": "_onRenderClient",
    "css": [
      "assets/static/onRenderClient.B_x-51_i.css"
    ],
    "assets": [
      "assets/static/logo.2_7Lo9tV.svg"
    ]
  },
  "_chunk-DwVJtgRy.js": {
    "file": "assets/chunks/chunk-DwVJtgRy.js",
    "name": "useData",
    "imports": [
      "_chunk-C3bx-nK1.js"
    ]
  },
  "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.Cmz8lBRg.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/pages/about",
      "virtual:vike:pageConfigValuesAll:client:/pages/index",
      "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id",
      "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index"
    ]
  },
  "renderer/logo.svg": {
    "file": "assets/static/logo.2_7Lo9tV.svg",
    "src": "renderer/logo.svg"
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.CZXXZS12.js",
    "name": "entries/pages/_error",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/_error",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-C3bx-nK1.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/about": {
    "file": "assets/entries/pages_about.C__e4oC3.js",
    "name": "entries/pages/about",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/about",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-C3bx-nK1.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.B5Dfgm_-.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-C3bx-nK1.js",
      "_chunk-DwVJtgRy.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id": {
    "file": "assets/entries/pages_star-wars_-id.DwfPRQBJ.js",
    "name": "entries/pages/star-wars/@id",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-C3bx-nK1.js",
      "_chunk-DwVJtgRy.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index": {
    "file": "assets/entries/pages_star-wars_index.BPlApbWs.js",
    "name": "entries/pages/star-wars/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-C3bx-nK1.js",
      "_chunk-DwVJtgRy.js"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.171",
    "usesClientRouter": false,
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
