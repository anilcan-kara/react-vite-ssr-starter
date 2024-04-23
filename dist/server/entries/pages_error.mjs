import { u as usePageContext, i as import_0 } from "../chunks/chunk-BlcxacZh.js";
import { jsxDEV } from "react/jsx-dev-runtime";
import "react-dom/server";
import "vike/server";
import "react";
import "react-icons/hi";
import "react-icons/md";
import "prop-types";
function Center({ children }) {
  return /* @__PURE__ */ jsxDEV("div", { style: { height: "calc(100vh - 100px)", display: "flex", justifyContent: "center", alignItems: "center" }, children }, void 0, false, {
    fileName: "/Users/alankara/ws/vike-app/pages/_error/+Page.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
function Page() {
  const pageContext = usePageContext();
  let { abortReason } = pageContext;
  if (!abortReason) {
    abortReason = pageContext.is404 ? "Page not found." : "Something went wrong.";
  }
  return /* @__PURE__ */ jsxDEV(Center, { children: /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "1.3em" }, children: abortReason }, void 0, false, {
    fileName: "/Users/alankara/ws/vike-app/pages/_error/+Page.jsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/alankara/ws/vike-app/pages/_error/+Page.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
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
    importPath: "/pages/_error/+Page.jsx",
    isValueFile: true,
    exportValues: import_1
  }
];
const configValuesSerialized = {};
export {
  configValuesImported,
  configValuesSerialized
};
