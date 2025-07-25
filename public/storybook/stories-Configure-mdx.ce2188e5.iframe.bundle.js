(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [187],
  {
    './node_modules/@mdx-js/react/lib/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { R: () => useMDXComponents, x: () => MDXProvider });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/react/index.js');
      const emptyComponents = {},
        MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);
      function useMDXComponents(components) {
        const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
        return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
          function () {
            return 'function' == typeof components
              ? components(contextComponents)
              : { ...contextComponents, ...components };
          },
          [contextComponents, components],
        );
      }
      function MDXProvider(properties) {
        let allComponents;
        return (
          (allComponents = properties.disableParentContext
            ? 'function' == typeof properties.components
              ? properties.components(emptyComponents)
              : properties.components || emptyComponents
            : useMDXComponents(properties.components)),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            MDXContext.Provider,
            { value: allComponents },
            properties.children,
          )
        );
      }
    },
    './node_modules/@storybook/addon-docs/dist sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      ((webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = './node_modules/@storybook/addon-docs/dist sync recursive'),
        (module.exports = webpackEmptyContext));
    },
    './node_modules/storybook/dist/components sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      ((webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = './node_modules/storybook/dist/components sync recursive'),
        (module.exports = webpackEmptyContext));
    },
    './node_modules/storybook/dist/theming sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      ((webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = './node_modules/storybook/dist/theming sync recursive'),
        (module.exports = webpackEmptyContext));
    },
    './src/stories/Configure.mdx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      (__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, { RightArrow: () => RightArrow, default: () => MDXContent }));
      __webpack_require__('./node_modules/react/index.js');
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        lib = __webpack_require__('./node_modules/@mdx-js/react/lib/index.js'),
        blocks = __webpack_require__('./node_modules/@storybook/addon-docs/dist/blocks.mjs');
      const github = __webpack_require__.p + 'static/media/github.e4e8df827592b1ed0288e4678e1965ce.svg';
      const discord = __webpack_require__.p + 'static/media/discord.d85804c7f88be863ff119366ab74d826.svg';
      const youtube = __webpack_require__.p + 'static/media/youtube.fd046a09fac357359f94cc21068d6560.svg';
      const tutorials = __webpack_require__.p + 'static/media/tutorials.fde6e46fc254fa77b6e39d1118470f7c.svg',
        styling_namespaceObject =
          'data:image/png;base64,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',
        context_namespaceObject =
          'data:image/png;base64,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',
        assets_namespaceObject =
          'data:image/png;base64,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',
        docs_namespaceObject = __webpack_require__.p + 'f7d8b9a8cec7528e0e36.png',
        share_namespaceObject = __webpack_require__.p + '161528bb6c25115b3f83.png',
        figma_plugin_namespaceObject = __webpack_require__.p + '9335a1a91b80ad4fec70.png',
        testing_namespaceObject = __webpack_require__.p + 'c720ced26387af8a9cb2.png',
        accessibility_namespaceObject = __webpack_require__.p + '2dbc69731c3f9930a271.png',
        theming_namespaceObject = __webpack_require__.p + 'e93de094692245f1ec04.png',
        addon_library_namespaceObject = __webpack_require__.p + '7a58d2cb9a6358f85e9b.png',
        RightArrow = () =>
          (0, jsx_runtime.jsx)('svg', {
            viewBox: '0 0 14 14',
            width: '8px',
            height: '14px',
            style: {
              marginLeft: '4px',
              display: 'inline-block',
              shapeRendering: 'inherit',
              verticalAlign: 'middle',
              fill: 'currentColor',
              'path fill': 'currentColor',
            },
            children: (0, jsx_runtime.jsx)('path', {
              d: 'm11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z',
            }),
          });
      function _createMdxContent(props) {
        const _components = { code: 'code', h1: 'h1', p: 'p', ...(0, lib.R)(), ...props.components };
        return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            (0, jsx_runtime.jsx)(blocks.W8, { title: 'Configure your project' }),
            '\n',
            (0, jsx_runtime.jsxs)('div', {
              className: 'sb-container',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'sb-section-title',
                  children: [
                    (0, jsx_runtime.jsx)(_components.h1, {
                      id: 'configure-your-project',
                      children: 'Configure your project',
                    }),
                    (0, jsx_runtime.jsx)(_components.p, {
                      children:
                        "Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community.",
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'sb-section',
                  children: [
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'sb-section-item',
                      children: [
                        (0, jsx_runtime.jsx)('img', {
                          src: styling_namespaceObject,
                          alt: 'A wall of logos representing different styling technologies',
                        }),
                        (0, jsx_runtime.jsx)('h4', {
                          className: 'sb-section-item-heading',
                          children: 'Add styling and CSS',
                        }),
                        (0, jsx_runtime.jsx)('p', {
                          className: 'sb-section-item-paragraph',
                          children:
                            'Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook.',
                        }),
                        (0, jsx_runtime.jsxs)('a', {
                          href: 'https://storybook.js.org/docs/configure/styling-and-css/?renderer=react',
                          target: '_blank',
                          children: ['Learn more', (0, jsx_runtime.jsx)(RightArrow, {})],
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'sb-section-item',
                      children: [
                        (0, jsx_runtime.jsx)('img', {
                          src: context_namespaceObject,
                          alt: 'An abstraction representing the composition of data for a component',
                        }),
                        (0, jsx_runtime.jsx)('h4', {
                          className: 'sb-section-item-heading',
                          children: 'Provide context and mocking',
                        }),
                        (0, jsx_runtime.jsx)('p', {
                          className: 'sb-section-item-paragraph',
                          children:
                            "Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available.",
                        }),
                        (0, jsx_runtime.jsxs)('a', {
                          href: 'https://storybook.js.org/docs/writing-stories/decorators/?renderer=react#context-for-mocking',
                          target: '_blank',
                          children: ['Learn more', (0, jsx_runtime.jsx)(RightArrow, {})],
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'sb-section-item',
                      children: [
                        (0, jsx_runtime.jsx)('img', {
                          src: assets_namespaceObject,
                          alt: 'A representation of typography and image assets',
                        }),
                        (0, jsx_runtime.jsxs)('div', {
                          children: [
                            (0, jsx_runtime.jsx)('h4', {
                              className: 'sb-section-item-heading',
                              children: 'Load assets and resources',
                            }),
                            (0, jsx_runtime.jsxs)('p', {
                              className: 'sb-section-item-paragraph',
                              children: [
                                'To link static files (like fonts) to your projects and stories, use the\n',
                                (0, jsx_runtime.jsx)(_components.code, { children: 'staticDirs' }),
                                ' configuration option to specify folders to load when\nstarting Storybook.',
                              ],
                            }),
                            (0, jsx_runtime.jsxs)('a', {
                              href: 'https://storybook.js.org/docs/configure/images-and-assets/?renderer=react',
                              target: '_blank',
                              children: ['Learn more', (0, jsx_runtime.jsx)(RightArrow, {})],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, jsx_runtime.jsxs)('div', {
              className: 'sb-container',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'sb-section-title',
                  children: [
                    (0, jsx_runtime.jsx)(_components.h1, {
                      id: 'do-more-with-storybook',
                      children: 'Do more with Storybook',
                    }),
                    (0, jsx_runtime.jsx)(_components.p, {
                      children:
                        "Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs.",
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)('div', {
                  className: 'sb-section',
                  children: (0, jsx_runtime.jsxs)('div', {
                    className: 'sb-features-grid',
                    children: [
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'sb-grid-item',
                        children: [
                          (0, jsx_runtime.jsx)('img', {
                            src: docs_namespaceObject,
                            alt: 'A screenshot showing the autodocs tag being set, pointing a docs page being generated',
                          }),
                          (0, jsx_runtime.jsx)('h4', { className: 'sb-section-item-heading', children: 'Autodocs' }),
                          (0, jsx_runtime.jsx)('p', {
                            className: 'sb-section-item-paragraph',
                            children:
                              'Auto-generate living,\ninteractive reference documentation from your components and stories.',
                          }),
                          (0, jsx_runtime.jsxs)('a', {
                            href: 'https://storybook.js.org/docs/writing-docs/autodocs/?renderer=react',
                            target: '_blank',
                            children: ['Learn more', (0, jsx_runtime.jsx)(RightArrow, {})],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'sb-grid-item',
                        children: [
                          (0, jsx_runtime.jsx)('img', {
                            src: share_namespaceObject,
                            alt: 'A browser window showing a Storybook being published to a chromatic.com URL',
                          }),
                          (0, jsx_runtime.jsx)('h4', {
                            className: 'sb-section-item-heading',
                            children: 'Publish to Chromatic',
                          }),
                          (0, jsx_runtime.jsx)('p', {
                            className: 'sb-section-item-paragraph',
                            children: 'Publish your Storybook to review and collaborate with your entire team.',
                          }),
                          (0, jsx_runtime.jsxs)('a', {
                            href: 'https://storybook.js.org/docs/sharing/publish-storybook/?renderer=react#publish-storybook-with-chromatic',
                            target: '_blank',
                            children: ['Learn more', (0, jsx_runtime.jsx)(RightArrow, {})],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'sb-grid-item',
                        children: [
                          (0, jsx_runtime.jsx)('img', {
                            src: figma_plugin_namespaceObject,
                            alt: 'Windows showing the Storybook plugin in Figma',
                          }),
                          (0, jsx_runtime.jsx)('h4', {
                            className: 'sb-section-item-heading',
                            children: 'Figma Plugin',
                          }),
                          (0, jsx_runtime.jsx)('p', {
                            className: 'sb-section-item-paragraph',
                            children:
                              'Embed your stories into Figma to cross-reference the design and live\nimplementation in one place.',
                          }),
                          (0, jsx_runtime.jsxs)('a', {
                            href: 'https://storybook.js.org/docs/sharing/design-integrations/?renderer=react#embed-storybook-in-figma-with-the-plugin',
                            target: '_blank',
                            children: ['Learn more', (0, jsx_runtime.jsx)(RightArrow, {})],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'sb-grid-item',
                        children: [
                          (0, jsx_runtime.jsx)('img', {
                            src: testing_namespaceObject,
                            alt: 'Screenshot of tests passing and failing',
                          }),
                          (0, jsx_runtime.jsx)('h4', { className: 'sb-section-item-heading', children: 'Testing' }),
                          (0, jsx_runtime.jsx)('p', {
                            className: 'sb-section-item-paragraph',
                            children: 'Use stories to test a component in all its variations, no matter how\ncomplex.',
                          }),
                          (0, jsx_runtime.jsxs)('a', {
                            href: 'https://storybook.js.org/docs/writing-tests/?renderer=react',
                            target: '_blank',
                            children: ['Learn more', (0, jsx_runtime.jsx)(RightArrow, {})],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'sb-grid-item',
                        children: [
                          (0, jsx_runtime.jsx)('img', {
                            src: accessibility_namespaceObject,
                            alt: 'Screenshot of accessibility tests passing and failing',
                          }),
                          (0, jsx_runtime.jsx)('h4', {
                            className: 'sb-section-item-heading',
                            children: 'Accessibility',
                          }),
                          (0, jsx_runtime.jsx)('p', {
                            className: 'sb-section-item-paragraph',
                            children: 'Automatically test your components for a11y issues as you develop.',
                          }),
                          (0, jsx_runtime.jsxs)('a', {
                            href: 'https://storybook.js.org/docs/writing-tests/accessibility-testing/?renderer=react',
                            target: '_blank',
                            children: ['Learn more', (0, jsx_runtime.jsx)(RightArrow, {})],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'sb-grid-item',
                        children: [
                          (0, jsx_runtime.jsx)('img', {
                            src: theming_namespaceObject,
                            alt: 'Screenshot of Storybook in light and dark mode',
                          }),
                          (0, jsx_runtime.jsx)('h4', { className: 'sb-section-item-heading', children: 'Theming' }),
                          (0, jsx_runtime.jsx)('p', {
                            className: 'sb-section-item-paragraph',
                            children: "Theme Storybook's UI to personalize it to your project.",
                          }),
                          (0, jsx_runtime.jsxs)('a', {
                            href: 'https://storybook.js.org/docs/configure/theming/?renderer=react',
                            target: '_blank',
                            children: ['Learn more', (0, jsx_runtime.jsx)(RightArrow, {})],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            '\n',
            (0, jsx_runtime.jsxs)('div', {
              className: 'sb-addon',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'sb-addon-text',
                  children: [
                    (0, jsx_runtime.jsx)('h4', { children: 'Addons' }),
                    (0, jsx_runtime.jsx)('p', {
                      className: 'sb-section-item-paragraph',
                      children: 'Integrate your tools with Storybook to connect workflows.',
                    }),
                    (0, jsx_runtime.jsxs)('a', {
                      href: 'https://storybook.js.org/addons/',
                      target: '_blank',
                      children: ['Discover all addons', (0, jsx_runtime.jsx)(RightArrow, {})],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)('div', {
                  className: 'sb-addon-img',
                  children: (0, jsx_runtime.jsx)('img', {
                    src: addon_library_namespaceObject,
                    alt: 'Integrate your tools with Storybook to connect workflows.',
                  }),
                }),
              ],
            }),
            '\n',
            (0, jsx_runtime.jsxs)('div', {
              className: 'sb-section sb-socials',
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: 'sb-section-item',
                  children: [
                    (0, jsx_runtime.jsx)('img', { src: github, alt: 'Github logo', className: 'sb-explore-image' }),
                    (0, jsx_runtime.jsx)(_components.p, {
                      children: 'Join our contributors building the future of UI development.',
                    }),
                    (0, jsx_runtime.jsxs)('a', {
                      href: 'https://github.com/storybookjs/storybook',
                      target: '_blank',
                      children: ['Star on GitHub', (0, jsx_runtime.jsx)(RightArrow, {})],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'sb-section-item',
                  children: [
                    (0, jsx_runtime.jsx)('img', { src: discord, alt: 'Discord logo', className: 'sb-explore-image' }),
                    (0, jsx_runtime.jsxs)('div', {
                      children: [
                        (0, jsx_runtime.jsx)(_components.p, {
                          children: 'Get support and chat with frontend developers.',
                        }),
                        (0, jsx_runtime.jsxs)('a', {
                          href: 'https://discord.gg/storybook',
                          target: '_blank',
                          children: ['Join Discord server', (0, jsx_runtime.jsx)(RightArrow, {})],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'sb-section-item',
                  children: [
                    (0, jsx_runtime.jsx)('img', { src: youtube, alt: 'Youtube logo', className: 'sb-explore-image' }),
                    (0, jsx_runtime.jsxs)('div', {
                      children: [
                        (0, jsx_runtime.jsx)(_components.p, {
                          children: 'Watch tutorials, feature previews and interviews.',
                        }),
                        (0, jsx_runtime.jsxs)('a', {
                          href: 'https://www.youtube.com/@chromaticui',
                          target: '_blank',
                          children: ['Watch on YouTube', (0, jsx_runtime.jsx)(RightArrow, {})],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'sb-section-item',
                  children: [
                    (0, jsx_runtime.jsx)('img', { src: tutorials, alt: 'A book', className: 'sb-explore-image' }),
                    (0, jsx_runtime.jsx)('p', { children: 'Follow guided walkthroughs on for key workflows.' }),
                    (0, jsx_runtime.jsxs)('a', {
                      href: 'https://storybook.js.org/tutorials/',
                      target: '_blank',
                      children: ['Discover tutorials', (0, jsx_runtime.jsx)(RightArrow, {})],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, jsx_runtime.jsx)('style', {
              children:
                '\n.sb-container {\n  margin-bottom: 48px;\n}\n\n.sb-section {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n\nimg {\n  object-fit: cover;\n}\n\n.sb-section-title {\n  margin-bottom: 32px;\n}\n\n.sb-section a:not(h1 a, h2 a, h3 a) {\n  font-size: 14px;\n}\n\n.sb-section-item, .sb-grid-item {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.sb-section-item-heading {\n  padding-top: 20px !important;\n  padding-bottom: 5px !important;\n  margin: 0 !important;\n}\n.sb-section-item-paragraph {\n  margin: 0;\n  padding-bottom: 10px;\n}\n\n.sb-chevron {\n  margin-left: 5px;\n}\n\n.sb-features-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 32px 20px;\n}\n\n.sb-socials {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.sb-socials p {\n  margin-bottom: 10px;\n}\n\n.sb-explore-image {\n  max-height: 32px;\n  align-self: flex-start;\n}\n\n.sb-addon {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n  background-color: #EEF3F8;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  background: #EEF3F8;\n  height: 180px;\n  margin-bottom: 48px;\n  overflow: hidden;\n}\n\n.sb-addon-text {\n  padding-left: 48px;\n  max-width: 240px;\n}\n\n.sb-addon-text h4 {\n  padding-top: 0px;\n}\n\n.sb-addon-img {\n  position: absolute;\n  left: 345px;\n  top: 0;\n  height: 100%;\n  width: 200%;\n  overflow: hidden;\n}\n\n.sb-addon-img img {\n  width: 650px;\n  transform: rotate(-15deg);\n  margin-left: 40px;\n  margin-top: -72px;\n  box-shadow: 0 0 1px rgba(255, 255, 255, 0);\n  backface-visibility: hidden;\n}\n\n@media screen and (max-width: 800px) {\n  .sb-addon-img {\n    left: 300px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .sb-section {\n    flex-direction: column;\n  }\n\n  .sb-features-grid {\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .sb-socials {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .sb-addon {\n    height: 280px;\n    align-items: flex-start;\n    padding-top: 32px;\n    overflow: hidden;\n  }\n\n  .sb-addon-text {\n    padding-left: 24px;\n  }\n\n  .sb-addon-img {\n    right: 0;\n    left: 0;\n    top: 130px;\n    bottom: 0;\n    overflow: hidden;\n    height: auto;\n    width: 124%;\n  }\n\n  .sb-addon-img img {\n    width: 1200px;\n    transform: rotate(-12deg);\n    margin-left: 0;\n    margin-top: 48px;\n    margin-bottom: -40px;\n    margin-left: -24px;\n  }\n}\n',
            }),
          ],
        });
      }
      function MDXContent(props = {}) {
        const { wrapper: MDXLayout } = { ...(0, lib.R)(), ...props.components };
        return MDXLayout
          ? (0, jsx_runtime.jsx)(MDXLayout, {
              ...props,
              children: (0, jsx_runtime.jsx)(_createMdxContent, { ...props }),
            })
          : _createMdxContent(props);
      }
    },
  },
]);
