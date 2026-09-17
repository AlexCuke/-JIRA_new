// Extracted from main; webpack module 37902. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var t = function () {
      function N(I, O) {
        for (var L = 0; L < O.length; L++) {
          var C = O[L];
          C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(I, C.key, C);
        }
      }
      return function (I, O, L) {
        return O && N(I.prototype, O), L && N(I, L), I;
      };
    }(),
    a = function d(N) {
      return N && N.__esModule ? N : {
        default: N
      };
    }(i(44070)),
    m = i(83737),
    b = "http://www.w3.org/2000/svg",
    A = function () {
      function N(I, O, L) {
        (function M(N, I) {
          if (!(N instanceof I)) throw new TypeError("Cannot call a class as a function");
        })(this, N), this.svg = I, this.encodings = O, this.options = L, this.document = L.xmlDocument || document;
      }
      return t(N, [{
        key: "render",
        value: function () {
          var O = this.options.marginLeft;
          this.prepareSVG();
          for (var L = 0; L < this.encodings.length; L++) {
            var C = this.encodings[L],
              v = (0, a.default)(this.options, C.options),
              f = this.createGroup(O, v.marginTop, this.svg);
            this.setGroupOptions(f, v), this.drawSvgBarcode(f, v, C), this.drawSVGText(f, v, C), O += C.width;
          }
        }
      }, {
        key: "prepareSVG",
        value: function () {
          for (; this.svg.firstChild;) this.svg.removeChild(this.svg.firstChild);
          (0, m.calculateEncodingAttributes)(this.encodings, this.options);
          var O = (0, m.getTotalWidthOfEncodings)(this.encodings),
            L = (0, m.getMaximumHeightOfEncodings)(this.encodings),
            C = O + this.options.marginLeft + this.options.marginRight;
          this.setSvgAttributes(C, L), this.options.background && this.drawRect(0, 0, C, L, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
        }
      }, {
        key: "drawSvgBarcode",
        value: function (O, L, C) {
          var f,
            v = C.data;
          f = "top" == L.textPosition ? L.fontSize + L.textMargin : 0;
          for (var E = 0, h = 0, x = 0; x < v.length; x++) h = x * L.width + C.barcodePadding, "1" === v[x] ? E++ : E > 0 && (this.drawRect(h - L.width * E, f, L.width * E, L.height, O), E = 0);
          E > 0 && this.drawRect(h - L.width * (E - 1), f, L.width * E, L.height, O);
        }
      }, {
        key: "drawSVGText",
        value: function (O, L, C) {
          var f,
            E,
            v = this.document.createElementNS(b, "text");
          L.displayValue && (v.setAttribute("style", "font:" + L.fontOptions + " " + L.fontSize + "px " + L.font), E = "top" == L.textPosition ? L.fontSize - L.textMargin : L.height + L.textMargin + L.fontSize, "left" == L.textAlign || C.barcodePadding > 0 ? (f = 0, v.setAttribute("text-anchor", "start")) : "right" == L.textAlign ? (f = C.width - 1, v.setAttribute("text-anchor", "end")) : (f = C.width / 2, v.setAttribute("text-anchor", "middle")), v.setAttribute("x", f), v.setAttribute("y", E), v.appendChild(this.document.createTextNode(C.text)), O.appendChild(v));
        }
      }, {
        key: "setSvgAttributes",
        value: function (O, L) {
          var C = this.svg;
          C.setAttribute("width", O + "px"), C.setAttribute("height", L + "px"), C.setAttribute("x", "0px"), C.setAttribute("y", "0px"), C.setAttribute("viewBox", "0 0 " + O + " " + L), C.setAttribute("xmlns", b), C.setAttribute("version", "1.1"), C.setAttribute("style", "transform: translate(0,0)");
        }
      }, {
        key: "createGroup",
        value: function (O, L, C) {
          var v = this.document.createElementNS(b, "g");
          return v.setAttribute("transform", "translate(" + O + ", " + L + ")"), C.appendChild(v), v;
        }
      }, {
        key: "setGroupOptions",
        value: function (O, L) {
          O.setAttribute("style", "fill:" + L.lineColor + ";");
        }
      }, {
        key: "drawRect",
        value: function (O, L, C, v, f) {
          var E = this.document.createElementNS(b, "rect");
          return E.setAttribute("x", O), E.setAttribute("y", L), E.setAttribute("width", C), E.setAttribute("height", v), f.appendChild(E), E;
        }
      }]), N;
    }();
  V.default = A;
});
