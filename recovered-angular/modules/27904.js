// Extracted from main; webpack module 27904. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var t, e, a, m, d, M, b;
    b = i(3452), d = b.assign, M = b.isFunction, t = i(10519), e = i(71105), m = i(34354), a = i(97647), Ae.exports.create = function (A, N, I, O) {
      var L, C;
      if (null == A) throw new Error("Root element needs a name");
      return O = d({}, N, I, O), C = (L = new t(O)).element(A), O.headless || (L.declaration(O), (null != O.pubID || null != O.sysID) && L.doctype(O)), C;
    }, Ae.exports.begin = function (A, N, I) {
      var O;
      return M(A) && (N = (O = [A, N])[0], I = O[1], A = {}), N ? new e(A, N, I) : new t(A);
    }, Ae.exports.stringWriter = function (A) {
      return new m(A);
    }, Ae.exports.streamWriter = function (A, N) {
      return new a(A, N);
    };
  }).call(this);
});
