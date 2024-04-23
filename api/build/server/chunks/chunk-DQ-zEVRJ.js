import { jsx, jsxs } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import React, { useContext } from "react";
import { HiCog } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import PropTypes from "prop-types";
const Context = React.createContext();
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
const usePageContext = () => useContext(Context);
function Link(props) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const { href } = props;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  const className = [props.className, isActive && "is-active"].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("a", { ...props, className });
}
Link.propTypes = { className: PropTypes.string, href: PropTypes.string.isRequired };
const logoUrl = "/assets/static/logo.2_7Lo9tV.svg";
function PageShell({ pageContext, children }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsxs(Sidebar, { children: [
      /* @__PURE__ */ jsx(Logo, {}),
      /* @__PURE__ */ jsxs(Link, { href: "/", children: [
        /* @__PURE__ */ jsx(HiCog, {}),
        " Welcome"
      ] }),
      /* @__PURE__ */ jsxs(Link, { href: "/about", children: [
        /* @__PURE__ */ jsx(MdMenu, {}),
        " About"
      ] }),
      /* @__PURE__ */ jsx(Link, { href: "/star-wars", children: "Data Fetching" })
    ] }),
    /* @__PURE__ */ jsx(Content, { children })
  ] }) }) });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsx("div", { style: { display: "flex", maxWidth: 900, margin: "auto" }, children });
}
function Sidebar({ children }) {
  return /* @__PURE__ */ jsx("div", { id: "sidebar", style: { padding: 20, flexShrink: 0, display: "flex", flexDirection: "column", lineHeight: "1.8em", borderRight: "2px solid #eee" }, children });
}
function Content({ children }) {
  return /* @__PURE__ */ jsx("div", { id: "page-container", children: /* @__PURE__ */ jsx(
    "div",
    {
      id: "page-content",
      style: {
        padding: 20,
        paddingBottom: 50,
        minHeight: "100vh"
      },
      children
    }
  ) });
}
function Logo() {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        marginTop: 20,
        marginBottom: 10
      },
      children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: logoUrl, height: 64, width: 64, alt: "logo" }) })
    }
  );
}
function getPageTitle(pageContext) {
  var _a;
  return ((_a = pageContext.data) == null ? void 0 : _a.title) || pageContext.config.title || "ACKPOS";
}
function onRenderHtml(pageContext) {
  var _a;
  const { Page } = pageContext;
  if (!Page)
    throw new Error("My onRenderHtml() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, {}) })
  );
  const title = getPageTitle(pageContext);
  const desc = ((_a = pageContext.data) == null ? void 0 : _a.description) || pageContext.config.description || "ACKPOS";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add custom pageContext properties here, see https://vike.dev/pageContext#custom
    }
  };
}
const import_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onRenderHtml
}, Symbol.toStringTag, { value: "Module" }));
export {
  import_0 as i,
  usePageContext as u
};
