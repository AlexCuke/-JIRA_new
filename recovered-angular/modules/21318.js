// Extracted from main; webpack module 21318. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(60443),
    e = Object.prototype,
    a = e.hasOwnProperty,
    m = e.toString,
    d = t ? t.toStringTag : void 0;
  Ae.exports = function M(b) {
    var A = a.call(b, d),
      N = b[d];
    try {
      b[d] = void 0;
      var I = !0;
    } catch {}
    var O = m.call(b);
    return I && (A ? b[d] = N : delete b[d]), O;
  };
});
