'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [391],
  {
    './src/components/RadioButton/RadioButton.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => RadioButton_stories,
        }));
      var _templateObject,
        _templateObject2,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Label = styled_components_browser_esm.Ay.label(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  display: flex;\n  align-items: center;\n  cursor: ',
              ';\n  color: ',
              ';\n',
            ])),
          (_ref) => {
            let { disabled } = _ref;
            return disabled ? 'not-allowed' : 'pointer';
          },
          (_ref2) => {
            let { disabled } = _ref2;
            return disabled ? '#999' : 'inherit';
          },
        ),
        Input = styled_components_browser_esm.Ay.input(
          _templateObject2 || (_templateObject2 = (0, taggedTemplateLiteral.A)(['\n  margin-right: 8px;\n'])),
        ),
        RadioButton = (_ref3) => {
          let { label, name, checked = !1, disabled = !1, onChange } = _ref3;
          return (0, jsx_runtime.jsxs)(Label, {
            'data-testid': 'radio-label',
            disabled,
            children: [
              (0, jsx_runtime.jsx)(Input, {
                type: 'radio',
                name,
                checked,
                disabled,
                onChange: (e) => onChange && onChange(e.target.checked),
              }),
              label,
            ],
          });
        },
        RadioButton_RadioButton = RadioButton;
      RadioButton.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'RadioButton',
        props: {
          label: { required: !0, tsType: { name: 'string' }, description: '' },
          name: { required: !0, tsType: { name: 'string' }, description: '' },
          checked: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
          },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
          },
          onChange: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '(checked: boolean) => void',
              signature: { arguments: [{ type: { name: 'boolean' }, name: 'checked' }], return: { name: 'void' } },
            },
            description: '',
          },
        },
      };
      const RadioButton_stories = {
          title: 'Components/RadioButton',
          component: RadioButton_RadioButton,
          tags: ['autodocs'],
          argTypes: {
            label: { control: 'text' },
            name: { control: 'text' },
            checked: { control: 'boolean' },
            disabled: { control: 'boolean' },
          },
        },
        Default = { args: { label: 'Option 1', name: 'group1', checked: !1, disabled: !1 } },
        Disabled = { args: { label: 'Option 2', name: 'group1', checked: !0, disabled: !0 } },
        __namedExportsOrder = ['Default', 'Disabled'];
      ((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    label: 'Option 1',\n    name: 'group1',\n    checked: false,\n    disabled: false\n  }\n}",
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
                "{\n  args: {\n    label: 'Option 2',\n    name: 'group1',\n    checked: true,\n    disabled: true\n  }\n}",
              ...Disabled.parameters?.docs?.source,
            },
          },
        }));
    },
  },
]);
