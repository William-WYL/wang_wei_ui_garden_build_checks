'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [372],
  {
    './src/components/Table/TableCell/TableCell.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }));
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Components/Table/TableCell',
          component: __webpack_require__('./src/components/Table/TableCell/TableCell.tsx').A,
          tags: ['autodocs'],
          argTypes: { disabled: { control: 'boolean' }, children: { control: 'text' } },
        },
        Default = { args: { children: 'Cell content', disabled: !1 } },
        Disabled = { args: { children: 'Disabled cell', disabled: !0 } },
        __namedExportsOrder = ['Default', 'Disabled'];
      ((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    children: 'Cell content',\n    disabled: false\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: "{\n  args: {\n    children: 'Disabled cell',\n    disabled: true\n  }\n}",
              ...Disabled.parameters?.docs?.source,
            },
          },
        }));
    },
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
  },
]);
