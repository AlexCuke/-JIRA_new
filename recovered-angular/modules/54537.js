// Extracted from main; webpack module 54537. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(23819);
  Ae.exports = function e(a, m) {
    var d = a.__data__;
    return t(m) ? d["string" == typeof m ? "string" : "hash"] : d.map;
  };
});
