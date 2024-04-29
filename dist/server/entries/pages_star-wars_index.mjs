import { i as import_0 } from "../chunks/chunk-DQ-zEVRJ.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { u as useData, s as sleep } from "../chunks/chunk-BUIJybLA.js";
import "react-dom/server";
import "vike/server";
import "react";
import "react-icons/hi";
import "react-icons/md";
import "prop-types";
function Page() {
  const { movies } = useData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Star Wars Movies" }),
    /* @__PURE__ */ jsx("ol", { className: "list-decimal list-inside bg-gray-100 p-4 rounded-lg my-4", children: movies.map(({ id, title, release_date }) => /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("a", { href: `/star-wars/${id}`, children: title }),
      " (",
      release_date,
      ")"
    ] }, id)) }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Source: ",
      /* @__PURE__ */ jsx("a", { href: "https://brillout.github.io/star-wars/", children: "brillout.github.io/star-wars" }),
      "."
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Data can be fetched by using the ",
      /* @__PURE__ */ jsx("code", { children: "data()" }),
      " hook."
    ] })
  ] });
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
