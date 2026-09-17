// Extracted from main; webpack module 52827. Factory, not an ES module.
(Ae => {
  var i = Function.prototype.toString;
  Ae.exports = function t(e) {
    if (null != e) {
      try {
        return i.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  };
});
