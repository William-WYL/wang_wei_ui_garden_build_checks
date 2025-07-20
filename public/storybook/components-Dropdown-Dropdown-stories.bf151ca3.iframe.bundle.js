'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [215],
  {
    './src/components/Dropdown/Dropdown.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Dropdown_stories,
        }));
      var _templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Select = styled_components_browser_esm.Ay.select(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  padding: 8px;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: ',
              ';\n  color: ',
              ';\n  cursor: ',
              ';\n  width: 100%;\n',
            ])),
          (_ref) => {
            let { disabled } = _ref;
            return disabled ? '#eee' : 'white';
          },
          (_ref2) => {
            let { disabled } = _ref2;
            return disabled ? '#999' : 'black';
          },
          (_ref3) => {
            let { disabled } = _ref3;
            return disabled ? 'not-allowed' : 'pointer';
          },
        ),
        Dropdown = (_ref4) => {
          let { options, selectedValue, onChange, disabled = !1 } = _ref4;
          return (0, jsx_runtime.jsx)(Select, {
            disabled,
            value: selectedValue,
            onChange: (e) => onChange && onChange(e.target.value),
            children: options.map((opt) =>
              (0, jsx_runtime.jsx)('option', { value: opt.value, children: opt.label }, opt.value),
            ),
          });
        },
        Dropdown_Dropdown = Dropdown;
      Dropdown.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Dropdown',
        props: {
          options: {
            required: !0,
            tsType: { name: 'Array', elements: [{ name: 'DropdownOption' }], raw: 'DropdownOption[]' },
            description: '',
          },
          selectedValue: { required: !1, tsType: { name: 'string' }, description: '' },
          onChange: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '(value: string) => void',
              signature: { arguments: [{ type: { name: 'string' }, name: 'value' }], return: { name: 'void' } },
            },
            description: '',
          },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
          },
        },
      };
      const Dropdown_stories = {
          title: 'Components/Dropdown',
          component: Dropdown_Dropdown,
          tags: ['autodocs'],
          argTypes: {
            options: { control: 'object' },
            selectedValue: { control: 'text' },
            disabled: { control: 'boolean' },
          },
        },
        sampleOptions = [
          { label: 'Option 1', value: 'opt1' },
          { label: 'Option 2', value: 'opt2' },
          { label: 'Option 3', value: 'opt3' },
        ],
        Default = { args: { options: sampleOptions, selectedValue: 'opt1', disabled: !1 } },
        Disabled = { args: { options: sampleOptions, selectedValue: 'opt2', disabled: !0 } },
        __namedExportsOrder = ['Default', 'Disabled'];
      ((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    options: sampleOptions,\n    selectedValue: 'opt1',\n    disabled: false\n  }\n}",
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
                "{\n  args: {\n    options: sampleOptions,\n    selectedValue: 'opt2',\n    disabled: true\n  }\n}",
              ...Disabled.parameters?.docs?.source,
            },
          },
        }));
    },
  },
]);
