// Extracted from main; webpack module 80069. Factory, not an ES module.
(Ae => {
  var V = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  Ae.exports = function i(t) {
    return t.match(V) || [];
  };
});
