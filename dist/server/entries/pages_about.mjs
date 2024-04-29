import { i as import_0 } from "../chunks/chunk-DQ-zEVRJ.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "react-dom/server";
import "vike/server";
import "react";
import "react-icons/hi";
import "react-icons/md";
import "prop-types";
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "About" }),
    /* @__PURE__ */ jsx("p", { className: "bg-yellow-500 text-black p-2 rounded-lg", children: "Example of using Vike." })
  ] });
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
const title = "About";
const import_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    importPath: "/pages/about/+Page.jsx",
    isValueFile: true,
    exportValues: import_1
  },
  {
    configName: "title",
    importPath: "/pages/about/+title.js",
    isValueFile: true,
    exportValues: import_2
  }
];
const configValuesSerialized = {};
export {
  configValuesImported,
  configValuesSerialized
};
