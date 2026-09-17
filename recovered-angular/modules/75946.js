// Extracted from main; webpack module 75946. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(93337),
    e = i(25940);
  Ae.exports = function b(A) {
    if (!e(A)) return !1;
    var N = t(A);
    return "[object Function]" == N || "[object GeneratorFunction]" == N || "[object AsyncFunction]" == N || "[object Proxy]" == N;
  };
});
