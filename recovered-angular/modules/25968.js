// Extracted from main; webpack module 25968. Factory, not an ES module.
(function (Ae) {
  (function () {
    Ae.exports = function () {
      function i(t, e, a) {
        if (this.options = t.options, this.stringify = t.stringify, null == e) throw new Error("Missing attribute name of element " + t.name);
        if (null == a) throw new Error("Missing attribute value for attribute " + e + " of element " + t.name);
        this.name = this.stringify.attName(e), this.value = this.stringify.attValue(a);
      }
      return i.prototype.clone = function () {
        return Object.create(this);
      }, i.prototype.toString = function (t) {
        return this.options.writer.set(t).attribute(this);
      }, i;
    }();
  }).call(this);
});
