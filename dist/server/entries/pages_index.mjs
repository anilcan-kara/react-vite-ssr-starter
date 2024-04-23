import { i as import_0 } from "../chunks/chunk-BlcxacZh.js";
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { u as useData } from "../chunks/chunk-DW574uU7.js";
import { useState } from "react";
import "react-dom/server";
import "vike/server";
import "react-icons/hi";
import "react-icons/md";
import "prop-types";
function Counter() {
  const { tckimlikno } = useData();
  const [count, setCount] = useState(tckimlikno ?? 0);
  return /* @__PURE__ */ jsxDEV("button", { type: "button", onClick: () => setCount((count2) => count2 + 1), children: [
    "Counter ",
    count
  ] }, void 0, true, {
    fileName: "/Users/alankara/ws/vike-app/pages/index/Counter.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
function Page() {
  const { tckimlikno } = useData();
  console.log("tckimlikno", tckimlikno);
  console.log("new Date()", /* @__PURE__ */ new Date());
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("h1", { children: "Welcomee" }, void 0, false, {
      fileName: "/Users/alankara/ws/vike-app/pages/index/+Page.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    "This page is:",
    /* @__PURE__ */ jsxDEV("ul", { children: [
      /* @__PURE__ */ jsxDEV("li", { children: "Rendered to HTML." }, void 0, false, {
        fileName: "/Users/alankara/ws/vike-app/pages/index/+Page.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("li", { children: [
        "Interactive. ",
        /* @__PURE__ */ jsxDEV(Counter, {}, void 0, false, {
          fileName: "/Users/alankara/ws/vike-app/pages/index/+Page.jsx",
          lineNumber: 17,
          columnNumber: 24
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/alankara/ws/vike-app/pages/index/+Page.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/alankara/ws/vike-app/pages/index/+Page.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/alankara/ws/vike-app/pages/index/+Page.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
const data = async () => {
  return { tckimlikno: 50 + 8, date: (/* @__PURE__ */ new Date()).toLocaleString() };
};
const import_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
const title = "Welcome";
const import_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title
}, Symbol.toStringTag, { value: "Module" }));
const configValuesImported = [
  {
    configName: "onRenderHtml",
    importPath: "/renderer/+onRenderHtml.jsx",
    isValueFile: true,
    exportValues: import_0
  },
  {
    configName: "Page",
    importPath: "/pages/index/+Page.jsx",
    isValueFile: true,
    exportValues: import_1
  },
  {
    configName: "data",
    importPath: "/pages/index/+data.js",
    isValueFile: true,
    exportValues: import_2
  },
  {
    configName: "title",
    importPath: "/pages/index/+title.js",
    isValueFile: true,
    exportValues: import_3
  }
];
const configValuesSerialized = {};
export {
  configValuesImported,
  configValuesSerialized
};
