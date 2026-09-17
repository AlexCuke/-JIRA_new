// Extracted from main; webpack module 74707. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(29148),
    e = i(73943),
    a = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    N = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
  Ae.exports = function I(O) {
    return (O = e(O)) && O.replace(a, t).replace(N, "");
  };
});
