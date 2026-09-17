// Extracted from main; webpack module 26676. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(60862);
  Ae.exports = function a(m, d) {
    var M = this.__data__;
    return this.size += this.has(m) ? 0 : 1, M[m] = t && void 0 === d ? "__lodash_hash_undefined__" : d, this;
  };
});
