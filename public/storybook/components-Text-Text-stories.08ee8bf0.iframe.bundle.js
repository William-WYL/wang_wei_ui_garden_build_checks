'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [103],
  {
    './src/components/Text/Text.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Text_stories,
        }));
      var _templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const StyledText = styled_components_browser_esm.Ay.p(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  font-size: 1rem;\n  color: ',
              ';\n  cursor: ',
              ';\n',
            ])),
          (_ref) => {
            let { disabled } = _ref;
            return disabled ? '#999' : '#000';
          },
          (_ref2) => {
            let { disabled } = _ref2;
            return disabled ? 'not-allowed' : 'auto';
          },
        ),
        Text = (_ref3) => {
          let { text, disabled = !1 } = _ref3;
          return (0, jsx_runtime.jsx)(StyledText, { disabled, children: text });
        },
        Text_Text = Text;
      Text.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Text',
        props: {
          text: { required: !0, tsType: { name: 'string' }, description: '' },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
          },
        },
      };
      const Text_stories = {
          title: 'Components/Text',
          component: Text_Text,
          tags: ['autodocs'],
          argTypes: { text: { control: 'text' }, disabled: { control: 'boolean' } },
        },
        Default = { args: { text: 'Sample text', disabled: !1 } },
        Disabled = { args: { text: 'Disabled text', disabled: !0 } },
        __namedExportsOrder = ['Default', 'Disabled'];
      ((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    text: 'Sample text',\n    disabled: false\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: "{\n  args: {\n    text: 'Disabled text',\n    disabled: true\n  }\n}",
              ...Disabled.parameters?.docs?.source,
            },
          },
        }));
    },
  },
]);
