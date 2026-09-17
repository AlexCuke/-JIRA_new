// Extracted from main; webpack module 34354. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var t,
      e,
      a,
      m,
      d,
      M,
      b,
      A,
      N,
      I,
      O,
      C,
      v,
      E = {}.hasOwnProperty;
    b = i(54789), A = i(99195), t = i(91361), e = i(92516), N = i(43352), O = i(59942), C = i(20474), I = i(94666), a = i(97274), m = i(32068), d = i(8349), M = i(33087), v = i(43576), Ae.exports = function (h) {
      function x(u) {
        x.__super__.constructor.call(this, u);
      }
      return function (h, x) {
        for (var u in x) E.call(x, u) && (h[u] = x[u]);
        function T() {
          this.constructor = h;
        }
        T.prototype = x.prototype, h.prototype = new T(), h.__super__ = x.prototype;
      }(x, h), x.prototype.document = function (u) {
        var T, R, B, y, j;
        for (this.textispresent = !1, y = "", R = 0, B = (j = u.children).length; R < B; R++) T = j[R], y += function () {
          switch (!1) {
            case !(T instanceof b):
              return this.declaration(T);
            case !(T instanceof A):
              return this.docType(T);
            case !(T instanceof e):
              return this.comment(T);
            case !(T instanceof I):
              return this.processingInstruction(T);
            default:
              return this.element(T, 0);
          }
        }.call(this);
        return this.pretty && y.slice(-this.newline.length) === this.newline && (y = y.slice(0, -this.newline.length)), y;
      }, x.prototype.attribute = function (u) {
        return " " + u.name + "=\"" + u.value + "\"";
      }, x.prototype.cdata = function (u, T) {
        return this.space(T) + "<![CDATA[" + u.text + "]]>" + this.newline;
      }, x.prototype.comment = function (u, T) {
        return this.space(T) + "<!-- " + u.text + " -->" + this.newline;
      }, x.prototype.declaration = function (u, T) {
        var R;
        return R = this.space(T), R += "<?xml version=\"" + u.version + "\"", null != u.encoding && (R += " encoding=\"" + u.encoding + "\""), null != u.standalone && (R += " standalone=\"" + u.standalone + "\""), (R += this.spacebeforeslash + "?>") + this.newline;
      }, x.prototype.docType = function (u, T) {
        var R, B, y, j, W;
        if (T || (T = 0), j = this.space(T), j += "<!DOCTYPE " + u.root().name, u.pubID && u.sysID ? j += " PUBLIC \"" + u.pubID + "\" \"" + u.sysID + "\"" : u.sysID && (j += " SYSTEM \"" + u.sysID + "\""), u.children.length > 0) {
          for (j += " [", j += this.newline, B = 0, y = (W = u.children).length; B < y; B++) R = W[B], j += function () {
            switch (!1) {
              case !(R instanceof a):
                return this.dtdAttList(R, T + 1);
              case !(R instanceof m):
                return this.dtdElement(R, T + 1);
              case !(R instanceof d):
                return this.dtdEntity(R, T + 1);
              case !(R instanceof M):
                return this.dtdNotation(R, T + 1);
              case !(R instanceof t):
                return this.cdata(R, T + 1);
              case !(R instanceof e):
                return this.comment(R, T + 1);
              case !(R instanceof I):
                return this.processingInstruction(R, T + 1);
              default:
                throw new Error("Unknown DTD node type: " + R.constructor.name);
            }
          }.call(this);
          j += "]";
        }
        return (j += this.spacebeforeslash + ">") + this.newline;
      }, x.prototype.element = function (u, T) {
        var B, y, j, W, F, Le, ke, J, fe, ye, ae, Y;
        for (Le in T || (T = 0), Y = !1, this.textispresent ? (this.newline = "", this.pretty = !1) : (this.newline = this.newlinedefault, this.pretty = this.prettydefault), ke = "", ke += (ae = this.space(T)) + "<" + u.name, J = u.attributes) E.call(J, Le) && (ke += this.attribute(J[Le]));
        if (0 === u.children.length || u.children.every(function (G) {
          return "" === G.value;
        })) ke += this.allowEmpty ? "></" + u.name + ">" + this.newline : this.spacebeforeslash + "/>" + this.newline;else if (this.pretty && 1 === u.children.length && null != u.children[0].value) ke += ">", ke += u.children[0].value, ke += "</" + u.name + ">" + this.newline;else {
          if (this.dontprettytextnodes) for (y = 0, W = (fe = u.children).length; y < W; y++) if (null != (B = fe[y]).value) {
            this.textispresent++, Y = !0;
            break;
          }
          for (this.textispresent && (this.newline = "", this.pretty = !1, ae = this.space(T)), ke += ">" + this.newline, j = 0, F = (ye = u.children).length; j < F; j++) B = ye[j], ke += function () {
            switch (!1) {
              case !(B instanceof t):
                return this.cdata(B, T + 1);
              case !(B instanceof e):
                return this.comment(B, T + 1);
              case !(B instanceof N):
                return this.element(B, T + 1);
              case !(B instanceof O):
                return this.raw(B, T + 1);
              case !(B instanceof C):
                return this.text(B, T + 1);
              case !(B instanceof I):
                return this.processingInstruction(B, T + 1);
              default:
                throw new Error("Unknown XML node type: " + B.constructor.name);
            }
          }.call(this);
          Y && this.textispresent--, this.textispresent || (this.newline = this.newlinedefault, this.pretty = this.prettydefault), ke += ae + "</" + u.name + ">" + this.newline;
        }
        return ke;
      }, x.prototype.processingInstruction = function (u, T) {
        var R;
        return R = this.space(T) + "<?" + u.target, u.value && (R += " " + u.value), R + (this.spacebeforeslash + "?>") + this.newline;
      }, x.prototype.raw = function (u, T) {
        return this.space(T) + u.value + this.newline;
      }, x.prototype.text = function (u, T) {
        return this.space(T) + u.value + this.newline;
      }, x.prototype.dtdAttList = function (u, T) {
        var R;
        return R = this.space(T) + "<!ATTLIST " + u.elementName + " " + u.attributeName + " " + u.attributeType, "#DEFAULT" !== u.defaultValueType && (R += " " + u.defaultValueType), u.defaultValue && (R += " \"" + u.defaultValue + "\""), R + (this.spacebeforeslash + ">") + this.newline;
      }, x.prototype.dtdElement = function (u, T) {
        return this.space(T) + "<!ELEMENT " + u.name + " " + u.value + this.spacebeforeslash + ">" + this.newline;
      }, x.prototype.dtdEntity = function (u, T) {
        var R;
        return R = this.space(T) + "<!ENTITY", u.pe && (R += " %"), R += " " + u.name, u.value ? R += " \"" + u.value + "\"" : (u.pubID && u.sysID ? R += " PUBLIC \"" + u.pubID + "\" \"" + u.sysID + "\"" : u.sysID && (R += " SYSTEM \"" + u.sysID + "\""), u.nData && (R += " NDATA " + u.nData)), R + (this.spacebeforeslash + ">") + this.newline;
      }, x.prototype.dtdNotation = function (u, T) {
        var R;
        return R = this.space(T) + "<!NOTATION " + u.name, u.pubID && u.sysID ? R += " PUBLIC \"" + u.pubID + "\" \"" + u.sysID + "\"" : u.pubID ? R += " PUBLIC \"" + u.pubID + "\"" : u.sysID && (R += " SYSTEM \"" + u.sysID + "\""), R + (this.spacebeforeslash + ">") + this.newline;
      }, x.prototype.openNode = function (u, T) {
        var B, y, j;
        if (T || (T = 0), u instanceof N) {
          for (B in y = this.space(T) + "<" + u.name, j = u.attributes) E.call(j, B) && (y += this.attribute(j[B]));
          return y + (u.children ? ">" : "/>") + this.newline;
        }
        return y = this.space(T) + "<!DOCTYPE " + u.rootNodeName, u.pubID && u.sysID ? y += " PUBLIC \"" + u.pubID + "\" \"" + u.sysID + "\"" : u.sysID && (y += " SYSTEM \"" + u.sysID + "\""), y + (u.children ? " [" : ">") + this.newline;
      }, x.prototype.closeNode = function (u, T) {
        switch (T || (T = 0), !1) {
          case !(u instanceof N):
            return this.space(T) + "</" + u.name + ">" + this.newline;
          case !(u instanceof A):
            return this.space(T) + "]>" + this.newline;
        }
      }, x;
    }(v);
  }).call(this);
});
