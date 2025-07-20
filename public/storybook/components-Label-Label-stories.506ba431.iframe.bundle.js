'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [747],
  {
    './src/components/Label/Label.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Label_stories,
        }));
      var _templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const StyledLabel = styled_components_browser_esm.Ay.label(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  font-size: 1rem;\n  color: ',
              ';\n  cursor: ',
              ';\n',
            ])),
          (_ref) => {
            let { disabled } = _ref;
            return disabled ? '#999' : '#333';
          },
          (_ref2) => {
            let { disabled } = _ref2;
            return disabled ? 'not-allowed' : 'default';
          },
        ),
        Label = (_ref3) => {
          let { text, htmlFor, disabled } = _ref3;
          return (0, jsx_runtime.jsx)(StyledLabel, { htmlFor, disabled, children: text });
        },
        Label_Label = Label;
      Label.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Label',
        props: {
          text: { required: !0, tsType: { name: 'string' }, description: '' },
          htmlFor: { required: !1, tsType: { name: 'string' }, description: '' },
          disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
        },
      };
      const Label_stories = {
          title: 'Components/Label',
          component: Label_Label,
          tags: ['autodocs'],
          argTypes: { text: { control: 'text' }, htmlFor: { control: 'text' }, disabled: { control: 'boolean' } },
        },
        Default = { args: { text: 'Username', disabled: !1 } },
        Disabled = { args: { text: 'Password', disabled: !0 } },
        __namedExportsOrder = ['Default', 'Disabled'];
      ((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    text: 'Username',\n    disabled: false\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: "{\n  args: {\n    text: 'Password',\n    disabled: true\n  }\n}",
              ...Disabled.parameters?.docs?.source,
            },
          },
        }));
    },
  },
]);
