// Extracted from main; webpack module 23819. Factory, not an ES module.
(Ae => {
  Ae.exports = function V(i) {
    var t = typeof i;
    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== i : null === i;
  };
});
