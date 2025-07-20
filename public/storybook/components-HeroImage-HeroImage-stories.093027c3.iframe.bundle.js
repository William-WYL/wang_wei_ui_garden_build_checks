'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [407],
  {
    './src/components/HeroImage/HeroImage.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => HeroImage_stories,
        }));
      var _templateObject,
        _templateObject2,
        _templateObject3,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Container = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  background-image: url(',
              ');\n  background-size: cover;\n  background-position: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  color: white;\n  filter: ',
              ';\n  pointer-events: ',
              ';\n',
            ])),
          (props) => props.backgroundImage,
          (props) => (props.disabled ? 'grayscale(100%)' : 'none'),
          (props) => (props.disabled ? 'none' : 'auto'),
        ),
        Title = styled_components_browser_esm.Ay.h1(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)(['\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n'])),
        ),
        Subtitle = styled_components_browser_esm.Ay.p(
          _templateObject3 || (_templateObject3 = (0, taggedTemplateLiteral.A)(['\n  font-size: 1.25rem;\n'])),
        ),
        HeroImage = (_ref) => {
          let { backgroundImage, title, subtitle, disabled } = _ref;
          return (0, jsx_runtime.jsxs)(Container, {
            backgroundImage,
            disabled,
            'data-testid': 'hero-container',
            children: [
              (0, jsx_runtime.jsx)(Title, { children: title }),
              subtitle && (0, jsx_runtime.jsx)(Subtitle, { children: subtitle }),
            ],
          });
        },
        HeroImage_HeroImage = HeroImage;
      HeroImage.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'HeroImage',
        props: {
          backgroundImage: { required: !0, tsType: { name: 'string' }, description: '' },
          title: { required: !0, tsType: { name: 'string' }, description: '' },
          subtitle: { required: !1, tsType: { name: 'string' }, description: '' },
          disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
        },
      };
      const HeroImage_stories = {
          title: 'Components/HeroImage',
          component: HeroImage_HeroImage,
          tags: ['autodocs'],
          argTypes: {
            backgroundImage: { control: 'text' },
            title: { control: 'text' },
            subtitle: { control: 'text' },
            disabled: { control: 'boolean' },
          },
        },
        Default = {
          args: {
            backgroundImage:
              'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80',
            title: 'Welcome to UI Garden',
            subtitle: 'Build beautiful components with ease',
            disabled: !1,
          },
        },
        Disabled = {
          args: {
            backgroundImage: 'https://placehold.co/1200x500?text=Disabled+Hero+Image',
            title: 'Access Restricted',
            subtitle: "You can't interact with this section",
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
              '{\n  args: {\n    backgroundImage: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",\n    title: "Welcome to UI Garden",\n    subtitle: "Build beautiful components with ease",\n    disabled: false\n  }\n}',
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
                '{\n  args: {\n    backgroundImage: "https://placehold.co/1200x500?text=Disabled+Hero+Image",\n    title: "Access Restricted",\n    subtitle: "You can\'t interact with this section",\n    disabled: true\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }));
    },
  },
]);
