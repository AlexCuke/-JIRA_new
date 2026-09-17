// Extracted from main; webpack module 93337. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(60443),
    e = i(21318),
    a = i(92902),
    M = t ? t.toStringTag : void 0;
  Ae.exports = function b(A) {
    return null == A ? void 0 === A ? "[object Undefined]" : "[object Null]" : M && M in Object(A) ? e(A) : a(A);
  };
});
