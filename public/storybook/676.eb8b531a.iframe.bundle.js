(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [676],
  {
    './node_modules/@storybook/addon-docs/dist sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      ((webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = './node_modules/@storybook/addon-docs/dist sync recursive'),
        (module.exports = webpackEmptyContext));
    },
    './node_modules/@storybook/addon-docs/dist/DocsRenderer-PQXLIZUC.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { DocsRenderer: () => DocsRenderer });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/react/index.js'),
        _storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@storybook/react-dom-shim/dist/react-18.mjs',
        ),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/blocks.mjs',
        ),
        defaultComponents = {
          code: _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,
          a: _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,
          ..._storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw,
        },
        ErrorBoundary = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
          constructor() {
            (super(...arguments), (this.state = { hasError: !1 }));
          }
          static getDerivedStateFromError() {
            return { hasError: !0 };
          }
          componentDidCatch(err) {
            let { showException } = this.props;
            showException(err);
          }
          render() {
            let { hasError } = this.state,
              { children } = this.props;
            return hasError
              ? null
              : react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                  null,
                  children,
                );
          }
        },
        DocsRenderer = class {
          constructor() {
            ((this.render = async (context, docsParameter, element) => {
              let components = { ...defaultComponents, ...docsParameter?.components },
                TDocs = _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;
              return new Promise((resolve, reject) => {
                __webpack_require__
                  .e(294)
                  .then(__webpack_require__.bind(__webpack_require__, './node_modules/@mdx-js/react/index.js'))
                  .then(({ MDXProvider }) =>
                    (0, _storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.renderElement)(
                      react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        ErrorBoundary,
                        { showException: reject, key: Math.random() },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                          MDXProvider,
                          { components },
                          react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs, { context, docsParameter }),
                        ),
                      ),
                      element,
                    ),
                  )
                  .then(() => resolve());
              });
            }),
              (this.unmount = (element) => {
                (0, _storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.unmountElement)(element);
              }));
          }
        };
    },
    './node_modules/storybook/dist/components sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      ((webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = './node_modules/storybook/dist/components sync recursive'),
        (module.exports = webpackEmptyContext));
    },
    './node_modules/storybook/dist/theming sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      ((webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = './node_modules/storybook/dist/theming sync recursive'),
        (module.exports = webpackEmptyContext));
    },
  },
]);
