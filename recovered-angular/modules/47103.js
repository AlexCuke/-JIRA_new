// Extracted from main; webpack module 47103. Factory, not an ES module.
(Ae => {
  var V = {}.toString;
  Ae.exports = Array.isArray || function (i) {
    return "[object Array]" == V.call(i);
  };
});
