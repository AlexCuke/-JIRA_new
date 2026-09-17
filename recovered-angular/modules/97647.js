// Extracted from main; webpack module 97647. Factory, not an ES module.
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
      function x(u, T) {
        x.__super__.constructor.call(this, T), this.stream = u;
      }
      return function (h, x) {
        for (var u in x) E.call(x, u) && (h[u] = x[u]);
        function T() {
          this.constructor = h;
        }
        T.prototype = x.prototype, h.prototype = new T(), h.__super__ = x.prototype;
      }(x, h), x.prototype.document = function (u) {
        var T, R, B, y, j, W, F, Le;
        for (R = 0, y = (W = u.children).length; R < y; R++) (T = W[R]).isLastRootNode = !1;
        for (u.children[u.children.length - 1].isLastRootNode = !0, Le = [], B = 0, j = (F = u.children).length; B < j; B++) switch (T = F[B], !1) {
          case !(T instanceof b):
            Le.push(this.declaration(T));
            break;
          case !(T instanceof A):
            Le.push(this.docType(T));
            break;
          case !(T instanceof e):
            Le.push(this.comment(T));
            break;
          case !(T instanceof I):
            Le.push(this.processingInstruction(T));
            break;
          default:
            Le.push(this.element(T));
        }
        return Le;
      }, x.prototype.attribute = function (u) {
        return this.stream.write(" " + u.name + "=\"" + u.value + "\"");
      }, x.prototype.cdata = function (u, T) {
        return this.stream.write(this.space(T) + "<![CDATA[" + u.text + "]]>" + this.endline(u));
      }, x.prototype.comment = function (u, T) {
        return this.stream.write(this.space(T) + "<!-- " + u.text + " -->" + this.endline(u));
      }, x.prototype.declaration = function (u, T) {
        return this.stream.write(this.space(T)), this.stream.write("<?xml version=\"" + u.version + "\""), null != u.encoding && this.stream.write(" encoding=\"" + u.encoding + "\""), null != u.standalone && this.stream.write(" standalone=\"" + u.standalone + "\""), this.stream.write(this.spacebeforeslash + "?>"), this.stream.write(this.endline(u));
      }, x.prototype.docType = function (u, T) {
        var R, B, y, j;
        if (T || (T = 0), this.stream.write(this.space(T)), this.stream.write("<!DOCTYPE " + u.root().name), u.pubID && u.sysID ? this.stream.write(" PUBLIC \"" + u.pubID + "\" \"" + u.sysID + "\"") : u.sysID && this.stream.write(" SYSTEM \"" + u.sysID + "\""), u.children.length > 0) {
          for (this.stream.write(" ["), this.stream.write(this.endline(u)), B = 0, y = (j = u.children).length; B < y; B++) switch (R = j[B], !1) {
            case !(R instanceof a):
              this.dtdAttList(R, T + 1);
              break;
            case !(R instanceof m):
              this.dtdElement(R, T + 1);
              break;
            case !(R instanceof d):
              this.dtdEntity(R, T + 1);
              break;
            case !(R instanceof M):
              this.dtdNotation(R, T + 1);
              break;
            case !(R instanceof t):
              this.cdata(R, T + 1);
              break;
            case !(R instanceof e):
              this.comment(R, T + 1);
              break;
            case !(R instanceof I):
              this.processingInstruction(R, T + 1);
              break;
            default:
              throw new Error("Unknown DTD node type: " + R.constructor.name);
          }
          this.stream.write("]");
        }
        return this.stream.write(this.spacebeforeslash + ">"), this.stream.write(this.endline(u));
      }, x.prototype.element = function (u, T) {
        var B, y, j, W, F, Le, ke;
        for (W in T || (T = 0), ke = this.space(T), this.stream.write(ke + "<" + u.name), F = u.attributes) E.call(F, W) && this.attribute(F[W]);
        if (0 === u.children.length || u.children.every(function (J) {
          return "" === J.value;
        })) this.stream.write(this.allowEmpty ? "></" + u.name + ">" : this.spacebeforeslash + "/>");else if (this.pretty && 1 === u.children.length && null != u.children[0].value) this.stream.write(">"), this.stream.write(u.children[0].value), this.stream.write("</" + u.name + ">");else {
          for (this.stream.write(">" + this.newline), y = 0, j = (Le = u.children).length; y < j; y++) switch (B = Le[y], !1) {
            case !(B instanceof t):
              this.cdata(B, T + 1);
              break;
            case !(B instanceof e):
              this.comment(B, T + 1);
              break;
            case !(B instanceof N):
              this.element(B, T + 1);
              break;
            case !(B instanceof O):
              this.raw(B, T + 1);
              break;
            case !(B instanceof C):
              this.text(B, T + 1);
              break;
            case !(B instanceof I):
              this.processingInstruction(B, T + 1);
              break;
            default:
              throw new Error("Unknown XML node type: " + B.constructor.name);
          }
          this.stream.write(ke + "</" + u.name + ">");
        }
        return this.stream.write(this.endline(u));
      }, x.prototype.processingInstruction = function (u, T) {
        return this.stream.write(this.space(T) + "<?" + u.target), u.value && this.stream.write(" " + u.value), this.stream.write(this.spacebeforeslash + "?>" + this.endline(u));
      }, x.prototype.raw = function (u, T) {
        return this.stream.write(this.space(T) + u.value + this.endline(u));
      }, x.prototype.text = function (u, T) {
        return this.stream.write(this.space(T) + u.value + this.endline(u));
      }, x.prototype.dtdAttList = function (u, T) {
        return this.stream.write(this.space(T) + "<!ATTLIST " + u.elementName + " " + u.attributeName + " " + u.attributeType), "#DEFAULT" !== u.defaultValueType && this.stream.write(" " + u.defaultValueType), u.defaultValue && this.stream.write(" \"" + u.defaultValue + "\""), this.stream.write(this.spacebeforeslash + ">" + this.endline(u));
      }, x.prototype.dtdElement = function (u, T) {
        return this.stream.write(this.space(T) + "<!ELEMENT " + u.name + " " + u.value), this.stream.write(this.spacebeforeslash + ">" + this.endline(u));
      }, x.prototype.dtdEntity = function (u, T) {
        return this.stream.write(this.space(T) + "<!ENTITY"), u.pe && this.stream.write(" %"), this.stream.write(" " + u.name), u.value ? this.stream.write(" \"" + u.value + "\"") : (u.pubID && u.sysID ? this.stream.write(" PUBLIC \"" + u.pubID + "\" \"" + u.sysID + "\"") : u.sysID && this.stream.write(" SYSTEM \"" + u.sysID + "\""), u.nData && this.stream.write(" NDATA " + u.nData)), this.stream.write(this.spacebeforeslash + ">" + this.endline(u));
      }, x.prototype.dtdNotation = function (u, T) {
        return this.stream.write(this.space(T) + "<!NOTATION " + u.name), u.pubID && u.sysID ? this.stream.write(" PUBLIC \"" + u.pubID + "\" \"" + u.sysID + "\"") : u.pubID ? this.stream.write(" PUBLIC \"" + u.pubID + "\"") : u.sysID && this.stream.write(" SYSTEM \"" + u.sysID + "\""), this.stream.write(this.spacebeforeslash + ">" + this.endline(u));
      }, x.prototype.endline = function (u) {
        return u.isLastRootNode ? "" : this.newline;
      }, x;
    }(v);
  }).call(this);
});
