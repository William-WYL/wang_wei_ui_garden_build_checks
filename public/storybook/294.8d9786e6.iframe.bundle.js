'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [294],
  {
    './node_modules/@mdx-js/react/index.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          MDXProvider: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.x,
          useMDXComponents: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.R,
        }));
      var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/@mdx-js/react/lib/index.js');
    },
    './node_modules/@mdx-js/react/lib/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { R: () => useMDXComponents, x: () => MDXProvider });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/react/index.js');
      const emptyComponents = {},
        MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);
      function useMDXComponents(components) {
        const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
        return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
          function () {
            return 'function' == typeof components
              ? components(contextComponents)
              : { ...contextComponents, ...components };
          },
          [contextComponents, components],
        );
      }
      function MDXProvider(properties) {
        let allComponents;
        return (
          (allComponents = properties.disableParentContext
            ? 'function' == typeof properties.components
              ? properties.components(emptyComponents)
              : properties.components || emptyComponents
            : useMDXComponents(properties.components)),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            MDXContext.Provider,
            { value: allComponents },
            properties.children,
          )
        );
      }
    },
  },
]);
