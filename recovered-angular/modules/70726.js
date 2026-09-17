// Extracted from main; webpack module 70726. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var t = function () {
      function A(N, I) {
        for (var O = 0; O < I.length; O++) {
          var L = I[O];
          L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(N, L.key, L);
        }
      }
      return function (N, I, O) {
        return I && A(N.prototype, I), O && A(N, O), N;
      };
    }(),
    a = function d(A) {
      return A && A.__esModule ? A : {
        default: A
      };
    }(i(44070)),
    m = i(83737),
    b = function () {
      function A(N, I, O) {
        (function M(A, N) {
          if (!(A instanceof N)) throw new TypeError("Cannot call a class as a function");
        })(this, A), this.canvas = N, this.encodings = I, this.options = O;
      }
      return t(A, [{
        key: "render",
        value: function () {
          if (!this.canvas.getContext) throw new Error("The browser does not support canvas.");
          this.prepareCanvas();
          for (var I = 0; I < this.encodings.length; I++) {
            var O = (0, a.default)(this.options, this.encodings[I].options);
            this.drawCanvasBarcode(O, this.encodings[I]), this.drawCanvasText(O, this.encodings[I]), this.moveCanvasDrawing(this.encodings[I]);
          }
          this.restoreCanvas();
        }
      }, {
        key: "prepareCanvas",
        value: function () {
          var I = this.canvas.getContext("2d");
          I.save(), (0, m.calculateEncodingAttributes)(this.encodings, this.options, I);
          var O = (0, m.getTotalWidthOfEncodings)(this.encodings),
            L = (0, m.getMaximumHeightOfEncodings)(this.encodings);
          this.canvas.width = O + this.options.marginLeft + this.options.marginRight, this.canvas.height = L, I.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (I.fillStyle = this.options.background, I.fillRect(0, 0, this.canvas.width, this.canvas.height)), I.translate(this.options.marginLeft, 0);
        }
      }, {
        key: "drawCanvasBarcode",
        value: function (I, O) {
          var v,
            L = this.canvas.getContext("2d"),
            C = O.data;
          v = "top" == I.textPosition ? I.marginTop + I.fontSize + I.textMargin : I.marginTop, L.fillStyle = I.lineColor;
          for (var f = 0; f < C.length; f++) {
            var E = f * I.width + O.barcodePadding;
            "1" === C[f] ? L.fillRect(E, v, I.width, I.height) : C[f] && L.fillRect(E, v, I.width, I.height * C[f]);
          }
        }
      }, {
        key: "drawCanvasText",
        value: function (I, O) {
          var v,
            f,
            L = this.canvas.getContext("2d");
          I.displayValue && (f = "top" == I.textPosition ? I.marginTop + I.fontSize - I.textMargin : I.height + I.textMargin + I.marginTop + I.fontSize, L.font = I.fontOptions + " " + I.fontSize + "px " + I.font, "left" == I.textAlign || O.barcodePadding > 0 ? (v = 0, L.textAlign = "left") : "right" == I.textAlign ? (v = O.width - 1, L.textAlign = "right") : (v = O.width / 2, L.textAlign = "center"), L.fillText(O.text, v, f));
        }
      }, {
        key: "moveCanvasDrawing",
        value: function (I) {
          this.canvas.getContext("2d").translate(I.width, 0);
        }
      }, {
        key: "restoreCanvas",
        value: function () {
          this.canvas.getContext("2d").restore();
        }
      }]), A;
    }();
  V.default = b;
});
