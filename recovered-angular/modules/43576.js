// Extracted from main; webpack module 43576. Factory, not an ES module.
(function (Ae) {
  (function () {
    var i = {}.hasOwnProperty;
    Ae.exports = function () {
      function t(e) {
        var a, m, d, M, b, A, N, I;
        for (a in e || (e = {}), this.pretty = e.pretty || !1, this.allowEmpty = null != (m = e.allowEmpty) && m, this.pretty ? (this.indent = null != (d = e.indent) ? d : "  ", this.newline = null != (M = e.newline) ? M : "\n", this.offset = null != (b = e.offset) ? b : 0, this.dontprettytextnodes = null != (A = e.dontprettytextnodes) ? A : 0) : (this.indent = "", this.newline = "", this.offset = 0, this.dontprettytextnodes = 0), this.spacebeforeslash = null != (N = e.spacebeforeslash) ? N : "", !0 === this.spacebeforeslash && (this.spacebeforeslash = " "), this.newlinedefault = this.newline, this.prettydefault = this.pretty, I = e.writer || {}) i.call(I, a) && (this[a] = I[a]);
      }
      return t.prototype.set = function (e) {
        var a, m;
        for (a in e || (e = {}), "pretty" in e && (this.pretty = e.pretty), "allowEmpty" in e && (this.allowEmpty = e.allowEmpty), this.pretty ? (this.indent = "indent" in e ? e.indent : "  ", this.newline = "newline" in e ? e.newline : "\n", this.offset = "offset" in e ? e.offset : 0, this.dontprettytextnodes = "dontprettytextnodes" in e ? e.dontprettytextnodes : 0) : (this.indent = "", this.newline = "", this.offset = 0, this.dontprettytextnodes = 0), this.spacebeforeslash = "spacebeforeslash" in e ? e.spacebeforeslash : "", !0 === this.spacebeforeslash && (this.spacebeforeslash = " "), this.newlinedefault = this.newline, this.prettydefault = this.pretty, m = e.writer || {}) i.call(m, a) && (this[a] = m[a]);
        return this;
      }, t.prototype.space = function (e) {
        var a;
        return this.pretty && (a = (e || 0) + this.offset + 1) > 0 ? new Array(a).join(this.indent) : "";
      }, t;
    }();
  }).call(this);
});
