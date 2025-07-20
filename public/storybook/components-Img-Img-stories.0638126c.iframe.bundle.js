'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [15],
  {
    './src/components/Img/Img.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Img_stories,
        }));
      var _templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const StyledImg = styled_components_browser_esm.Ay.img(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  width: ',
              ';\n  height: ',
              ';\n  opacity: ',
              ';\n  pointer-events: ',
              ';\n  filter: ',
              ';\n',
            ])),
          (_ref) => {
            let { width } = _ref;
            return width || 'auto';
          },
          (_ref2) => {
            let { height } = _ref2;
            return height || 'auto';
          },
          (_ref3) => {
            let { disabled } = _ref3;
            return disabled ? 0.5 : 1;
          },
          (_ref4) => {
            let { disabled } = _ref4;
            return disabled ? 'none' : 'auto';
          },
          (_ref5) => {
            let { disabled } = _ref5;
            return disabled ? 'grayscale(100%)' : 'none';
          },
        ),
        Img = (_ref6) => {
          let { src, alt, width, height, disabled } = _ref6;
          return (0, jsx_runtime.jsx)(StyledImg, { src, alt, width, height, disabled });
        },
        Img_Img = Img;
      Img.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Img',
        props: {
          src: { required: !0, tsType: { name: 'string' }, description: '' },
          alt: { required: !1, tsType: { name: 'string' }, description: '' },
          width: { required: !1, tsType: { name: 'string' }, description: '' },
          height: { required: !1, tsType: { name: 'string' }, description: '' },
          disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
        },
      };
      const Img_stories = {
          title: 'Components/Img',
          component: Img_Img,
          tags: ['autodocs'],
          argTypes: {
            src: { control: 'text' },
            alt: { control: 'text' },
            width: { control: 'text' },
            height: { control: 'text' },
            disabled: { control: 'boolean' },
          },
        },
        Default = {
          args: {
            src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=600&q=80',
            alt: 'Placeholder Image',
            width: '400px',
            height: '500px',
            disabled: !1,
          },
        },
        Disabled = {
          args: {
            src: 'https://placehold.co/600x400?text=Disabled+Image',
            alt: 'Disabled Image',
            width: '400px',
            height: '500px',
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
              "{\n  args: {\n    src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=600&q=80',\n    alt: 'Placeholder Image',\n    width: '400px',\n    height: '500px',\n    disabled: false\n  }\n}",
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
                "{\n  args: {\n    src: 'https://placehold.co/600x400?text=Disabled+Image',\n    alt: 'Disabled Image',\n    width: '400px',\n    height: '500px',\n    disabled: true\n  }\n}",
              ...Disabled.parameters?.docs?.source,
            },
          },
        }));
    },
  },
]);
