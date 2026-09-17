// Extracted from main; webpack module 85041. Factory, not an ES module.
(function (Ae) {
  (function () {
    var i = function (e, a) {
        return function () {
          return e.apply(a, arguments);
        };
      },
      t = {}.hasOwnProperty;
    Ae.exports = function () {
      function e(a) {
        var m, d;
        for (m in this.assertLegalChar = i(this.assertLegalChar, this), a || (a = {}), this.noDoubleEncoding = a.noDoubleEncoding, d = a.stringify || {}) t.call(d, m) && (this[m] = d[m]);
      }
      return e.prototype.eleName = function (a) {
        return this.assertLegalChar(a = "" + a || "");
      }, e.prototype.eleText = function (a) {
        return this.assertLegalChar(this.elEscape(a = "" + a || ""));
      }, e.prototype.cdata = function (a) {
        return a = (a = "" + a || "").replace("]]>", "]]]]><![CDATA[>"), this.assertLegalChar(a);
      }, e.prototype.comment = function (a) {
        if ((a = "" + a || "").match(/--/)) throw new Error("Comment text cannot contain double-hypen: " + a);
        return this.assertLegalChar(a);
      }, e.prototype.raw = function (a) {
        return "" + a || "";
      }, e.prototype.attName = function (a) {
        return "" + a || "";
      }, e.prototype.attValue = function (a) {
        return this.attEscape(a = "" + a || "");
      }, e.prototype.insTarget = function (a) {
        return "" + a || "";
      }, e.prototype.insValue = function (a) {
        if ((a = "" + a || "").match(/\?>/)) throw new Error("Invalid processing instruction value: " + a);
        return a;
      }, e.prototype.xmlVersion = function (a) {
        if (!(a = "" + a || "").match(/1\.[0-9]+/)) throw new Error("Invalid version number: " + a);
        return a;
      }, e.prototype.xmlEncoding = function (a) {
        if (!(a = "" + a || "").match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) throw new Error("Invalid encoding: " + a);
        return a;
      }, e.prototype.xmlStandalone = function (a) {
        return a ? "yes" : "no";
      }, e.prototype.dtdPubID = function (a) {
        return "" + a || "";
      }, e.prototype.dtdSysID = function (a) {
        return "" + a || "";
      }, e.prototype.dtdElementValue = function (a) {
        return "" + a || "";
      }, e.prototype.dtdAttType = function (a) {
        return "" + a || "";
      }, e.prototype.dtdAttDefault = function (a) {
        return null != a ? "" + a || "" : a;
      }, e.prototype.dtdEntityValue = function (a) {
        return "" + a || "";
      }, e.prototype.dtdNData = function (a) {
        return "" + a || "";
      }, e.prototype.convertAttKey = "@", e.prototype.convertPIKey = "?", e.prototype.convertTextKey = "#text", e.prototype.convertCDataKey = "#cdata", e.prototype.convertCommentKey = "#comment", e.prototype.convertRawKey = "#raw", e.prototype.assertLegalChar = function (a) {
        var m;
        if (m = a.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/)) throw new Error("Invalid character in string: " + a + " at index " + m.index);
        return a;
      }, e.prototype.elEscape = function (a) {
        return a.replace(this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
      }, e.prototype.attEscape = function (a) {
        return a.replace(this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
      }, e;
    }();
  }).call(this);
});
