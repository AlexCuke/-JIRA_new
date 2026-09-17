// Extracted from main; webpack module 15764. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(60862),
    m = Object.prototype.hasOwnProperty;
  Ae.exports = function d(M) {
    var b = this.__data__;
    if (t) {
      var A = b[M];
      return "__lodash_hash_undefined__" === A ? void 0 : A;
    }
    return m.call(b, M) ? b[M] : void 0;
  };
});
