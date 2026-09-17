// Extracted from main; webpack module 46421. Factory, not an ES module.
(Ae => {
  Ae.exports = function V(i) {
    var t = this.has(i) && delete this.__data__[i];
    return this.size -= t ? 1 : 0, t;
  };
});
