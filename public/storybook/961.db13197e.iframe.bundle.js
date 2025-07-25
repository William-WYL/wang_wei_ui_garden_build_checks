/*! For license information please see 961.db13197e.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunkui_garden = self.webpackChunkui_garden || []).push([
  [961],
  {
    './node_modules/react-dom/cjs/react-dom.production.js': (__unused_webpack_module, exports, __webpack_require__) => {
      var React = __webpack_require__('./node_modules/react/index.js');
      function formatProdErrorMessage(code) {
        var url = 'https://react.dev/errors/' + code;
        if (1 < arguments.length) {
          url += '?args[]=' + encodeURIComponent(arguments[1]);
          for (var i = 2; i < arguments.length; i++) url += '&args[]=' + encodeURIComponent(arguments[i]);
        }
        return (
          'Minified React error #' +
          code +
          '; visit ' +
          url +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      function noop() {}
      var Internals = {
          d: {
            f: noop,
            r: function () {
              throw Error(formatProdErrorMessage(522));
            },
            D: noop,
            C: noop,
            L: noop,
            m: noop,
            X: noop,
            S: noop,
            M: noop,
          },
          p: 0,
          findDOMNode: null,
        },
        REACT_PORTAL_TYPE = Symbol.for('react.portal');
      var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      function getCrossOriginStringAs(as, input) {
        return 'font' === as ? '' : 'string' == typeof input ? ('use-credentials' === input ? input : '') : void 0;
      }
      ((exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals),
        (exports.createPortal = function (children, container) {
          var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (!container || (1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType))
            throw Error(formatProdErrorMessage(299));
          return (function createPortal$1(children, containerInfo, implementation) {
            var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
              $$typeof: REACT_PORTAL_TYPE,
              key: null == key ? null : '' + key,
              children,
              containerInfo,
              implementation,
            };
          })(children, container, null, key);
        }),
        (exports.flushSync = function (fn) {
          var previousTransition = ReactSharedInternals.T,
            previousUpdatePriority = Internals.p;
          try {
            if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) return fn();
          } finally {
            ((ReactSharedInternals.T = previousTransition), (Internals.p = previousUpdatePriority), Internals.d.f());
          }
        }),
        (exports.preconnect = function (href, options) {
          'string' == typeof href &&
            (options
              ? (options =
                  'string' == typeof (options = options.crossOrigin)
                    ? 'use-credentials' === options
                      ? options
                      : ''
                    : void 0)
              : (options = null),
            Internals.d.C(href, options));
        }),
        (exports.prefetchDNS = function (href) {
          'string' == typeof href && Internals.d.D(href);
        }),
        (exports.preinit = function (href, options) {
          if ('string' == typeof href && options && 'string' == typeof options.as) {
            var as = options.as,
              crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
              integrity = 'string' == typeof options.integrity ? options.integrity : void 0,
              fetchPriority = 'string' == typeof options.fetchPriority ? options.fetchPriority : void 0;
            'style' === as
              ? Internals.d.S(href, 'string' == typeof options.precedence ? options.precedence : void 0, {
                  crossOrigin,
                  integrity,
                  fetchPriority,
                })
              : 'script' === as &&
                Internals.d.X(href, {
                  crossOrigin,
                  integrity,
                  fetchPriority,
                  nonce: 'string' == typeof options.nonce ? options.nonce : void 0,
                });
          }
        }),
        (exports.preinitModule = function (href, options) {
          if ('string' == typeof href)
            if ('object' == typeof options && null !== options) {
              if (null == options.as || 'script' === options.as) {
                var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
                Internals.d.M(href, {
                  crossOrigin,
                  integrity: 'string' == typeof options.integrity ? options.integrity : void 0,
                  nonce: 'string' == typeof options.nonce ? options.nonce : void 0,
                });
              }
            } else null == options && Internals.d.M(href);
        }),
        (exports.preload = function (href, options) {
          if (
            'string' == typeof href &&
            'object' == typeof options &&
            null !== options &&
            'string' == typeof options.as
          ) {
            var as = options.as,
              crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
            Internals.d.L(href, as, {
              crossOrigin,
              integrity: 'string' == typeof options.integrity ? options.integrity : void 0,
              nonce: 'string' == typeof options.nonce ? options.nonce : void 0,
              type: 'string' == typeof options.type ? options.type : void 0,
              fetchPriority: 'string' == typeof options.fetchPriority ? options.fetchPriority : void 0,
              referrerPolicy: 'string' == typeof options.referrerPolicy ? options.referrerPolicy : void 0,
              imageSrcSet: 'string' == typeof options.imageSrcSet ? options.imageSrcSet : void 0,
              imageSizes: 'string' == typeof options.imageSizes ? options.imageSizes : void 0,
              media: 'string' == typeof options.media ? options.media : void 0,
            });
          }
        }),
        (exports.preloadModule = function (href, options) {
          if ('string' == typeof href)
            if (options) {
              var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
              Internals.d.m(href, {
                as: 'string' == typeof options.as && 'script' !== options.as ? options.as : void 0,
                crossOrigin,
                integrity: 'string' == typeof options.integrity ? options.integrity : void 0,
              });
            } else Internals.d.m(href);
        }),
        (exports.requestFormReset = function (form) {
          Internals.d.r(form);
        }),
        (exports.unstable_batchedUpdates = function (fn, a) {
          return fn(a);
        }),
        (exports.useFormState = function (action, initialState, permalink) {
          return ReactSharedInternals.H.useFormState(action, initialState, permalink);
        }),
        (exports.useFormStatus = function () {
          return ReactSharedInternals.H.useHostTransitionStatus();
        }),
        (exports.version = '19.1.0'));
    },
    './node_modules/react-dom/index.js': (module, __unused_webpack_exports, __webpack_require__) => {
      (!(function checkDCE() {
        if (
          'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
          } catch (err) {
            console.error(err);
          }
      })(),
        (module.exports = __webpack_require__('./node_modules/react-dom/cjs/react-dom.production.js')));
    },
  },
]);
