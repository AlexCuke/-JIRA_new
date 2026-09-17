// Extracted from main; webpack module 84633. Factory, not an ES module.
(Ae => {
  Ae.exports = function V(i, t) {
    for (var e = -1, a = null == i ? 0 : i.length, m = Array(a); ++e < a;) m[e] = t(i[e], e, i);
    return m;
  };
});
