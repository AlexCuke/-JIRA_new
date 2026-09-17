// Extracted from main; webpack module 45352. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(21503),
    e = i(44129),
    a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    m = /^\w*$/;
  Ae.exports = function d(M, b) {
    if (t(M)) return !1;
    var A = typeof M;
    return !("number" != A && "symbol" != A && "boolean" != A && null != M && !e(M)) || m.test(M) || !a.test(M) || null != b && M in Object(b);
  };
});
