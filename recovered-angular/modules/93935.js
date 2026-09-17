// Extracted from main; webpack module 93935. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(60443),
    e = i(84633),
    a = i(21503),
    m = i(44129),
    M = t ? t.prototype : void 0,
    b = M ? M.toString : void 0;
  Ae.exports = function A(N) {
    if ("string" == typeof N) return N;
    if (a(N)) return e(N, A) + "";
    if (m(N)) return b ? b.call(N) : "";
    var I = N + "";
    return "0" == I && 1 / N == -Infinity ? "-0" : I;
  };
});
