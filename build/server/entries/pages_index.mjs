import { i as import_0 } from "../chunks/chunk-DQ-zEVRJ.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { u as useData } from "../chunks/chunk-BswSSwqR.js";
import { useState } from "react";
import "react-dom/server";
import "vike/server";
import "react-icons/hi";
import "react-icons/md";
import "prop-types";
function Counter() {
  const { tckimlikno } = useData();
  const [count, setCount] = useState(tckimlikno ?? 0);
  return /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setCount((count2) => count2 + 1), children: [
    "Counter ",
    count
  ] });
}
function Page() {
  const { tckimlikno } = useData();
  console.log("tckimlikno", tckimlikno);
  console.log("new Date()", /* @__PURE__ */ new Date());
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Welcomee" }),
    "This page is:",
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: "Rendered to HTML." }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Interactive. ",
        /* @__PURE__ */ jsx(Counter, {})
      ] })
    ] })
  ] });
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
