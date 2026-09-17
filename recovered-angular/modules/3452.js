// Extracted from main; webpack module 3452. Factory, not an ES module.
(function (Ae) {
  (function () {
    var V,
      i,
      t,
      e,
      a,
      m,
      d = [].slice,
      M = {}.hasOwnProperty;
    V = function () {
      var b, A, N, I, O, L;
      if (L = arguments[0], O = 2 <= arguments.length ? d.call(arguments, 1) : [], e(Object.assign)) Object.assign.apply(null, arguments);else for (b = 0, N = O.length; b < N; b++) if (null != (I = O[b])) for (A in I) M.call(I, A) && (L[A] = I[A]);
      return L;
    }, e = function (b) {
      return !!b && "[object Function]" === Object.prototype.toString.call(b);
    }, a = function (b) {
      var A;
      return !!b && ("function" == (A = typeof b) || "object" === A);
    }, i = function (b) {
      return e(Array.isArray) ? Array.isArray(b) : "[object Array]" === Object.prototype.toString.call(b);
    }, t = function (b) {
      var A;
      if (i(b)) return !b.length;
      for (A in b) if (M.call(b, A)) return !1;
      return !0;
    }, m = function (b) {
      var A, N;
      return a(b) && (N = Object.getPrototypeOf(b)) && (A = N.constructor) && "function" == typeof A && A instanceof A && Function.prototype.toString.call(A) === Function.prototype.toString.call(Object);
    }, Ae.exports.assign = V, Ae.exports.isFunction = e, Ae.exports.isObject = a, Ae.exports.isArray = i, Ae.exports.isEmpty = t, Ae.exports.isPlainObject = m;
  }).call(this);
});
