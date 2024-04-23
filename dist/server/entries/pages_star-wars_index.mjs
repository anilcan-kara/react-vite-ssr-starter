import { i as import_0 } from "../chunks/chunk-BlcxacZh.js";
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { u as useData } from "../chunks/chunk-DW574uU7.js";
import { s as sleep } from "../chunks/chunk-CEspyVf0.js";
import "react-dom/server";
import "vike/server";
import "react";
import "react-icons/hi";
import "react-icons/md";
import "prop-types";
function Page() {
  const { movies } = useData();
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-bold", children: "Star Wars Movies" }, void 0, false, {
      fileName: "/Users/alankara/ws/vike-app/pages/star-wars/index/+Page.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("ol", { className: "list-decimal list-inside bg-gray-100 p-4 rounded-lg my-4", children: movies.map(({ id, title, release_date }) => /* @__PURE__ */ jsxDEV("li", { children: [
      /* @__PURE__ */ jsxDEV("a", { href: `/star-wars/${id}`, children: title }, void 0, false, {
        fileName: "/Users/alankara/ws/vike-app/pages/star-wars/index/+Page.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      " (",
      release_date,
      ")"
    ] }, id, true, {
      fileName: "/Users/alankara/ws/vike-app/pages/star-wars/index/+Page.jsx",
      lineNumber: 12,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "/Users/alankara/ws/vike-app/pages/star-wars/index/+Page.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("p", { children: [
      "Source: ",
      /* @__PURE__ */ jsxDEV("a", { href: "https://brillout.github.io/star-wars/", children: "brillout.github.io/star-wars" }, void 0, false, {
        fileName: "/Users/alankara/ws/vike-app/pages/star-wars/index/+Page.jsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "/Users/alankara/ws/vike-app/pages/star-wars/index/+Page.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("p", { children: [
      "Data can be fetched by using the ",
      /* @__PURE__ */ jsxDEV("code", { children: "data()" }, void 0, false, {
        fileName: "/Users/alankara/ws/vike-app/pages/star-wars/index/+Page.jsx",
        lineNumber: 22,
        columnNumber: 42
      }, this),
      " hook."
    ] }, void 0, true, {
      fileName: "/Users/alankara/ws/vike-app/pages/star-wars/index/+Page.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/alankara/ws/vike-app/pages/star-wars/index/+Page.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
function minimize(movies) {
  return movies.map((movie) => {
    const { title, release_date, id } = movie;
    return { title, release_date, id };
  });
}
const data = async () => {
  await sleep(700);
  const response = await fetch("https://brillout.github.io/star-wars/api/films.json");
  const moviesData = await response.json();
  const movies = minimize(moviesData);
  return {
    movies,
    title: `${movies.length} Star Wars Movies`
  };
};
const import_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
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
    importPath: "/pages/star-wars/index/+Page.jsx",
    isValueFile: true,
    exportValues: import_1
  },
  {
    configName: "data",
    importPath: "/pages/star-wars/index/+data.js",
    isValueFile: true,
    exportValues: import_2
  }
];
const configValuesSerialized = {};
export {
  configValuesImported,
  configValuesSerialized
};
