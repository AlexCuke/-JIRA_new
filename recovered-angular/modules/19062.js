// Extracted from main; webpack module 19062. Factory, not an ES module.
(Ae => {
  var V = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  Ae.exports = function i(t) {
    return V.test(t);
  };
});
