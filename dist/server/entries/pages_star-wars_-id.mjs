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
  const { movie } = useData();
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("h1", { children: movie.title }, void 0, false, {
      fileName: "/Users/alankara/ws/vike-app/pages/star-wars/@id/+Page.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    "Release Date: ",
    movie.release_date,
    /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
      fileName: "/Users/alankara/ws/vike-app/pages/star-wars/@id/+Page.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    "Director: ",
    movie.director,
    /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
      fileName: "/Users/alankara/ws/vike-app/pages/star-wars/@id/+Page.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    "Producer: ",
    movie.producer
  ] }, void 0, true, {
    fileName: "/Users/alankara/ws/vike-app/pages/star-wars/@id/+Page.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
function minimize(movie) {
  const { id, title, release_date, director, producer } = movie;
  movie = { id, title, release_date, director, producer };
  return movie;
}
const data = async (pageContext) => {
  await sleep(300);
  const response = await fetch(`https://brillout.github.io/star-wars/api/films/${pageContext.routeParams.id}.json`);
  let movie = await response.json();
  movie = minimize(movie);
  return {
    movie,
    // The page's <title>
    title: movie.title
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
    importPath: "/pages/star-wars/@id/+Page.jsx",
    isValueFile: true,
    exportValues: import_1
  },
  {
    configName: "data",
    importPath: "/pages/star-wars/@id/+data.js",
    isValueFile: true,
    exportValues: import_2
  }
];
const configValuesSerialized = {};
export {
  configValuesImported,
  configValuesSerialized
};
