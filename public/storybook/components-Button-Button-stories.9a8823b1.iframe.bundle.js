'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [721],
  {
    './src/components/Button/Button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Button_stories,
        }));
      var _templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const StyledButton = styled_components_browser_esm.Ay.button(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  background-color: ',
              ';\n  color: white;\n  padding: 10px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: ',
              ';\n  font-size: 1rem;\n\n  &:hover {\n    background-color: ',
              ';\n  }\n',
            ])),
          (_ref) => {
            let { disabled } = _ref;
            return disabled ? '#ccc' : '#007bff';
          },
          (_ref2) => {
            let { disabled } = _ref2;
            return disabled ? 'not-allowed' : 'pointer';
          },
          (_ref3) => {
            let { disabled } = _ref3;
            return disabled ? '#ccc' : '#0056b3';
          },
        ),
        Button = (_ref4) => {
          let { label, onClick, disabled } = _ref4;
          return (0, jsx_runtime.jsx)(StyledButton, { onClick, disabled, children: label });
        },
        Button_Button = Button;
      Button.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Button',
        props: {
          label: { required: !0, tsType: { name: 'string' }, description: '' },
          onClick: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
          },
          disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
        },
      };
      const Button_stories = {
          title: 'Components/Button',
          component: Button_Button,
          tags: ['autodocs'],
          argTypes: { label: { control: 'text' }, disabled: { control: 'boolean' }, onClick: { action: 'clicked' } },
        },
        Default = { args: { label: 'Click Me', disabled: !1 } },
        Disabled = { args: { label: "Can't Click Me", disabled: !0 } },
        __namedExportsOrder = ['Default', 'Disabled'];
      ((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    label: "Click Me",\n    disabled: false\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    label: "Can\'t Click Me",\n    disabled: true\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }));
    },
  },
]);
