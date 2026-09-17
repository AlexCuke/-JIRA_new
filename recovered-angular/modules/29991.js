// Extracted from main; webpack module 29991. Factory, not an ES module.
(function (Ae) {
  Ae.exports = function () {
    "use strict";

    return function (V, i) {
      i.prototype.isSameOrBefore = function (t, e) {
        return this.isSame(t, e) || this.isBefore(t, e);
      };
    };
  }();
});
