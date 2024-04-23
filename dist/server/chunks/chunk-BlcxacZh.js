import { jsxDEV } from "react/jsx-dev-runtime";
import ReactDOMServer from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import React, { useContext } from "react";
import { HiCog } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import PropTypes from "prop-types";
const Context = React.createContext();
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsxDEV(Context.Provider, { value: pageContext, children }, void 0, false, {
    fileName: "/Users/alankara/ws/vike-app/renderer/usePageContext.jsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
const usePageContext = () => useContext(Context);
function Link(props) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const { href } = props;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  const className = [props.className, isActive && "is-active"].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxDEV("a", { ...props, className }, void 0, false, {
    fileName: "/Users/alankara/ws/vike-app/renderer/Link.jsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}
Link.propTypes = { className: PropTypes.string, href: PropTypes.string.isRequired };
const logoUrl = "/assets/static/logo.2_7Lo9tV.svg";
function PageShell({ pageContext, children }) {
  return /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsxDEV(Layout, { children: [
    /* @__PURE__ */ jsxDEV(Sidebar, { children: [
      /* @__PURE__ */ jsxDEV(Logo, {}, void 0, false, {
        fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { href: "/", children: [
        /* @__PURE__ */ jsxDEV(HiCog, {}, void 0, false, {
          fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
          lineNumber: 18,
          columnNumber: 28
        }, this),
        " Welcome"
      ] }, void 0, true, {
        fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { href: "/about", children: [
        /* @__PURE__ */ jsxDEV(MdMenu, {}, void 0, false, {
          fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
          lineNumber: 19,
          columnNumber: 33
        }, this),
        " About"
      ] }, void 0, true, {
        fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
        lineNumber: 19,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { href: "/star-wars", children: "Data Fetching" }, void 0, false, {
        fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
        lineNumber: 20,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV(Content, { children }, void 0, false, {
      fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
      lineNumber: 22,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", maxWidth: 900, margin: "auto" }, children }, void 0, false, {
    fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
function Sidebar({ children }) {
  return /* @__PURE__ */ jsxDEV("div", { id: "sidebar", style: { padding: 20, flexShrink: 0, display: "flex", flexDirection: "column", lineHeight: "1.8em", borderRight: "2px solid #eee" }, children }, void 0, false, {
    fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
function Content({ children }) {
  return /* @__PURE__ */ jsxDEV("div", { id: "page-container", children: /* @__PURE__ */ jsxDEV(
    "div",
    {
      id: "page-content",
      style: {
        padding: 20,
        paddingBottom: 50,
        minHeight: "100vh"
      },
      children
    },
    void 0,
    false,
    {
      fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
      lineNumber: 48,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
function Logo() {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      style: {
        marginTop: 20,
        marginBottom: 10
      },
      children: /* @__PURE__ */ jsxDEV("a", { href: "/", children: /* @__PURE__ */ jsxDEV("img", { src: logoUrl, height: 64, width: 64, alt: "logo" }, void 0, false, {
        fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
        lineNumber: 71,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
        lineNumber: 70,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/alankara/ws/vike-app/renderer/PageShell.jsx",
      lineNumber: 64,
      columnNumber: 5
    },
    this
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
    /* @__PURE__ */ jsxDEV(PageShell, { pageContext, children: /* @__PURE__ */ jsxDEV(Page, {}, void 0, false, {
      fileName: "/Users/alankara/ws/vike-app/renderer/+onRenderHtml.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "/Users/alankara/ws/vike-app/renderer/+onRenderHtml.jsx",
      lineNumber: 17,
      columnNumber: 5
    }, this)
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
