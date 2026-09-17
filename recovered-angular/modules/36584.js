// Extracted from main; webpack module 36584. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(62329),
    e = i(77609),
    a = i(66007),
    m = i(73943);
  Ae.exports = function d(M) {
    return function (b) {
      b = m(b);
      var A = e(b) ? a(b) : void 0,
        N = A ? A[0] : b.charAt(0),
        I = A ? t(A, 1).join("") : b.slice(1);
      return N[M]() + I;
    };
  };
});
