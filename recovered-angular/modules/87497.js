// Extracted from main; webpack module 87497. Factory, not an ES module.
((Ae, V) => {
  "use strict";

  function i(M, b) {
    if (!(M instanceof b)) throw new TypeError("Cannot call a class as a function");
  }
  function t(M, b) {
    if (!M) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !b || "object" != typeof b && "function" != typeof b ? M : b;
  }
  function e(M, b) {
    if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
    M.prototype = Object.create(b && b.prototype, {
      constructor: {
        value: M,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(M, b) : M.__proto__ = b);
  }
  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var a = function (M) {
      function b(A, N) {
        i(this, b);
        var I = t(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
        return I.name = "InvalidInputException", I.symbology = A, I.input = N, I.message = "\"" + I.input + "\" is not a valid input for " + I.symbology, I;
      }
      return e(b, Error), b;
    }(),
    m = function (M) {
      function b() {
        i(this, b);
        var A = t(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
        return A.name = "InvalidElementException", A.message = "Not supported type to render on", A;
      }
      return e(b, Error), b;
    }(),
    d = function (M) {
      function b() {
        i(this, b);
        var A = t(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
        return A.name = "NoElementException", A.message = "No element to render on.", A;
      }
      return e(b, Error), b;
    }();
  V.InvalidInputException = a, V.InvalidElementException = m, V.NoElementException = d;
});
