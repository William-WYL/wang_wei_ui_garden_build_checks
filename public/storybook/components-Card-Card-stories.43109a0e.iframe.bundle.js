'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [513],
  {
    './src/components/Card/Card.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Card_stories,
        }));
      var _templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const StyledCard = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  background-color: ',
              ';\n  cursor: ',
              ';\n  padding: 1rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n',
            ])),
          (_ref) => {
            let { disabled } = _ref;
            return disabled ? '#f5f5f5' : 'white';
          },
          (_ref2) => {
            let { disabled } = _ref2;
            return disabled ? 'not-allowed' : 'pointer';
          },
        ),
        Card = (_ref3) => {
          let { title, content, disabled } = _ref3;
          return (0, jsx_runtime.jsxs)(StyledCard, {
            disabled,
            'data-testid': 'card-container',
            children: [
              (0, jsx_runtime.jsx)('h3', { children: title }),
              content && (0, jsx_runtime.jsx)('p', { children: content }),
            ],
          });
        },
        Card_Card = Card;
      Card.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Card',
        props: {
          title: { required: !0, tsType: { name: 'string' }, description: '' },
          content: { required: !1, tsType: { name: 'string' }, description: '' },
          disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
        },
      };
      const Card_stories = {
          title: 'Components/Card',
          component: Card_Card,
          tags: ['autodocs'],
          argTypes: { title: { control: 'text' }, content: { control: 'text' }, disabled: { control: 'boolean' } },
        },
        Default = { args: { title: 'Card Title', content: 'This is card content.', disabled: !1 } },
        Disabled = { args: { title: 'Disabled Card', content: 'This card is disabled.', disabled: !0 } },
        __namedExportsOrder = ['Default', 'Disabled'];
      ((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    title: "Card Title",\n    content: "This is card content.",\n    disabled: false\n  }\n}',
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
                '{\n  args: {\n    title: "Disabled Card",\n    content: "This card is disabled.",\n    disabled: true\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }));
    },
  },
]);
