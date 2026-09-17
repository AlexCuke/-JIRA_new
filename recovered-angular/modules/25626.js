// Extracted from main; webpack module 25626. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var e = d(i(16106)),
    m = d(i(84779));
  function d(I) {
    return I && I.__esModule ? I : {
      default: I
    };
  }
  function b(I, O) {
    if (!I) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !O || "object" != typeof O && "function" != typeof O ? I : O;
  }
  var N = function (I) {
    function O(L, C) {
      if (function M(I, O) {
        if (!(I instanceof O)) throw new TypeError("Cannot call a class as a function");
      }(this, O), /^[\x00-\x7F\xC8-\xD3]+$/.test(L)) var v = b(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, (0, m.default)(L), C));else v = b(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, L, C));
      return b(v);
    }
    return function A(I, O) {
      if ("function" != typeof O && null !== O) throw new TypeError("Super expression must either be null or a function, not " + typeof O);
      I.prototype = Object.create(O && O.prototype, {
        constructor: {
          value: I,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), O && (Object.setPrototypeOf ? Object.setPrototypeOf(I, O) : I.__proto__ = O);
    }(O, I), O;
  }(e.default);
  V.default = N;
});
