'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [144],
  {
    './src/components/Table/Table/Table.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Table_stories,
        }));
      __webpack_require__('./node_modules/react/index.js');
      var _templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const StyledTable = styled_components_browser_esm.Ay.table(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)(['\n  width: 100%;\n  border-collapse: collapse;\n'])),
        ),
        Table = (_ref) => {
          let { children, className } = _ref;
          return (0, jsx_runtime.jsx)(StyledTable, { className, children });
        },
        Table_Table = Table;
      Table.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Table',
        props: {
          children: { required: !1, tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' }, description: '' },
          className: { required: !1, tsType: { name: 'string' }, description: '' },
        },
      };
      const Table_stories = {
          title: 'Components/Table/Table',
          component: Table_Table,
          tags: ['autodocs'],
          argTypes: {},
        },
        Default = {
          args: {
            children: (0, jsx_runtime.jsx)('tbody', {
              children: (0, jsx_runtime.jsxs)('tr', {
                children: [
                  (0, jsx_runtime.jsx)('td', { children: 'Cell 1' }),
                  (0, jsx_runtime.jsx)('td', { children: 'Cell 2' }),
                ],
              }),
            }),
          },
        },
        __namedExportsOrder = ['Default'];
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    children: <tbody>\r\n        <tr>\r\n          <td>Cell 1</td>\r\n          <td>Cell 2</td>\r\n        </tr>\r\n      </tbody>\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
    },
  },
]);
