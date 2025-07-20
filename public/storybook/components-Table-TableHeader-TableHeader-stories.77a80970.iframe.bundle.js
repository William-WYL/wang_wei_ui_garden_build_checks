'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [440],
  {
    './src/components/Table/TableCell/TableCell.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _templateObject,
        D_LEARNING_RRC_Term3_BizSystem_Assignment_Coding_Assignment_13_UI_Component_Library_wang_wei_ui_garden_build_checks_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const StyledTd = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.td(
          _templateObject ||
            (_templateObject = (0,
            D_LEARNING_RRC_Term3_BizSystem_Assignment_Coding_Assignment_13_UI_Component_Library_wang_wei_ui_garden_build_checks_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ['\n  padding: 8px;\n  border: 1px solid #ddd;\n  background-color: ', ';\n  color: ', ';\n'],
            )),
          (_ref) => {
            let { disabled } = _ref;
            return disabled ? '#f5f5f5' : 'white';
          },
          (_ref2) => {
            let { disabled } = _ref2;
            return disabled ? '#999' : 'inherit';
          },
        ),
        TableCell = (_ref3) => {
          let { children, disabled, className } = _ref3;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledTd, { disabled, className, children });
        },
        __WEBPACK_DEFAULT_EXPORT__ = TableCell;
      TableCell.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'TableCell',
        props: {
          children: { required: !1, tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' }, description: '' },
          disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
          className: { required: !1, tsType: { name: 'string' }, description: '' },
        },
      };
    },
    './src/components/Table/TableHeader/TableHeader.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => TableHeader_stories,
        }));
      var _templateObject,
        _templateObject2,
        react = __webpack_require__('./node_modules/react/index.js'),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const StyledThead = styled_components_browser_esm.Ay.thead(
          _templateObject || (_templateObject = (0, taggedTemplateLiteral.A)(['\n  background-color: #f0f0f0;\n'])),
        ),
        StyledTh = styled_components_browser_esm.Ay.th(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              '\n  padding: 8px;\n  border: 1px solid #ddd;\n  color: ',
              ';\n  background-color: ',
              ';\n',
            ])),
          (_ref) => {
            let { disabled } = _ref;
            return disabled ? '#999' : 'inherit';
          },
          (_ref2) => {
            let { disabled } = _ref2;
            return disabled ? '#f5f5f5' : 'inherit';
          },
        ),
        TableHeader = (_ref3) => {
          let { children, disabled, className } = _ref3;
          return (0, jsx_runtime.jsx)(StyledThead, {
            className,
            children: (0, jsx_runtime.jsx)('tr', {
              children: react.Children.map(children, (child) => {
                if (react.isValidElement(child)) {
                  const element = child;
                  return (0, jsx_runtime.jsx)(StyledTh, { disabled, children: element.props.children });
                }
                return (0, jsx_runtime.jsx)(StyledTh, { disabled, children: child });
              }),
            }),
          });
        },
        TableHeader_TableHeader = TableHeader;
      TableHeader.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'TableHeader',
        props: {
          children: { required: !1, tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' }, description: '' },
          disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
          className: { required: !1, tsType: { name: 'string' }, description: '' },
        },
      };
      var TableCell = __webpack_require__('./src/components/Table/TableCell/TableCell.tsx');
      const TableHeader_stories = {
          title: 'Components/Table/TableHeader',
          component: TableHeader_TableHeader,
          tags: ['autodocs'],
          argTypes: { disabled: { control: 'boolean' } },
        },
        Default = {
          args: {
            children: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(TableCell.A, { children: 'Header 1' }),
                (0, jsx_runtime.jsx)(TableCell.A, { children: 'Header 2' }),
              ],
            }),
            disabled: !1,
          },
        },
        Disabled = {
          args: {
            children: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(TableCell.A, { children: 'Header 1' }),
                (0, jsx_runtime.jsx)(TableCell.A, { children: 'Header 2' }),
              ],
            }),
            disabled: !0,
          },
        },
        __namedExportsOrder = ['Default', 'Disabled'];
      ((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    children: <>\r\n        <TableCell>Header 1</TableCell>\r\n        <TableCell>Header 2</TableCell>\r\n      </>,\n    disabled: false\n  }\n}',
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
                '{\n  args: {\n    children: <>\r\n        <TableCell>Header 1</TableCell>\r\n        <TableCell>Header 2</TableCell>\r\n      </>,\n    disabled: true\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }));
    },
  },
]);
