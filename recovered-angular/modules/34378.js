// Extracted from main; webpack module 34378. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(43503),
    a = Array.prototype.splice;
  Ae.exports = function m(d) {
    var M = this.__data__,
      b = t(M, d);
    return !(b < 0 || (b == M.length - 1 ? M.pop() : a.call(M, b, 1), --this.size, 0));
  };
});
