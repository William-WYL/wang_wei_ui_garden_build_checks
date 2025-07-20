'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [250],
  {
    './src/components/Table/TableRow/TableRow.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => TableRow_stories,
        }));
      var _templateObject,
        react = __webpack_require__('./node_modules/react/index.js'),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const StyledTr = styled_components_browser_esm.Ay.tr(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  background-color: ',
              ';\n  cursor: ',
              ';\n  color: ',
              ';\n',
            ])),
          (props) => (props.disabled ? '#f0f0f0' : 'transparent'),
          (props) => (props.disabled ? 'not-allowed' : 'default'),
          (props) => (props.disabled ? '#999' : 'inherit'),
        ),
        TableRow = (_ref) => {
          let { children, disabled = !1 } = _ref;
          return (0, jsx_runtime.jsx)(StyledTr, {
            disabled,
            'aria-disabled': disabled,
            children: react.Children.map(children, (child) =>
              react.isValidElement(child) ? react.cloneElement(child, { disabled }) : child,
            ),
          });
        },
        TableRow_TableRow = TableRow;
      TableRow.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'TableRow',
        props: {
          children: { required: !0, tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' }, description: '' },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
          },
        },
      };
      const TableRow_stories = {
          title: 'Components/Table/TableRow',
          component: TableRow_TableRow,
          tags: ['autodocs'],
          argTypes: { disabled: { control: 'boolean' } },
        },
        Default = {
          args: {
            disabled: !1,
            children: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)('td', { children: 'Cell 1' }),
                (0, jsx_runtime.jsx)('td', { children: 'Cell 2' }),
              ],
            }),
          },
        },
        Disabled = {
          args: {
            disabled: !0,
            children: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)('td', { children: 'Disabled Cell 1' }),
                (0, jsx_runtime.jsx)('td', { children: 'Disabled Cell 2' }),
              ],
            }),
          },
        },
        __namedExportsOrder = ['Default', 'Disabled'];
      ((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    disabled: false,\n    children: <>\r\n        <td>Cell 1</td>\r\n        <td>Cell 2</td>\r\n      </>\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    disabled: true,\n    children: <>\r\n        <td>Disabled Cell 1</td>\r\n        <td>Disabled Cell 2</td>\r\n      </>\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }));
    },
  },
]);
