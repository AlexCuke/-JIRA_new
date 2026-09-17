// Extracted from main; webpack module 41731. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (O) {
      return typeof O;
    } : function (O) {
      return O && "function" == typeof Symbol && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
    },
    a = b(i(96428)),
    d = b(i(82216)),
    M = i(87497);
  function b(O) {
    return O && O.__esModule ? O : {
      default: O
    };
  }
  V.default = function A(O) {
    if ("string" == typeof O) return function N(O) {
      var L = document.querySelectorAll(O);
      if (0 !== L.length) {
        for (var C = [], v = 0; v < L.length; v++) C.push(A(L[v]));
        return C;
      }
    }(O);
    if (Array.isArray(O)) {
      for (var L = [], C = 0; C < O.length; C++) L.push(A(O[C]));
      return L;
    }
    if (typeof HTMLCanvasElement < "u" && O instanceof HTMLImageElement) return function I(O) {
      var L = document.createElement("canvas");
      return {
        element: L,
        options: (0, a.default)(O),
        renderer: d.default.CanvasRenderer,
        afterRender: function () {
          O.setAttribute("src", L.toDataURL());
        }
      };
    }(O);
    if (O && O.nodeName && "svg" === O.nodeName.toLowerCase() || typeof SVGElement < "u" && O instanceof SVGElement) return {
      element: O,
      options: (0, a.default)(O),
      renderer: d.default.SVGRenderer
    };
    if (typeof HTMLCanvasElement < "u" && O instanceof HTMLCanvasElement) return {
      element: O,
      options: (0, a.default)(O),
      renderer: d.default.CanvasRenderer
    };
    if (O && O.getContext) return {
      element: O,
      renderer: d.default.CanvasRenderer
    };
    if (O && "object" === (typeof O > "u" ? "undefined" : t(O)) && !O.nodeName) return {
      element: O,
      renderer: d.default.ObjectRenderer
    };
    throw new M.InvalidElementException();
  };
});
