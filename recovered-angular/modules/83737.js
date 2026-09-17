// Extracted from main; webpack module 83737. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  }), V.getTotalWidthOfEncodings = V.calculateEncodingAttributes = V.getBarcodePadding = V.getEncodingHeight = V.getMaximumHeightOfEncodings = void 0;
  var e = function a(I) {
    return I && I.__esModule ? I : {
      default: I
    };
  }(i(44070));
  function m(I, O) {
    return O.height + (O.displayValue && I.text.length > 0 ? O.fontSize + O.textMargin : 0) + O.marginTop + O.marginBottom;
  }
  function d(I, O, L) {
    if (L.displayValue && O < I) {
      if ("center" == L.textAlign) return Math.floor((I - O) / 2);
      if ("left" == L.textAlign) return 0;
      if ("right" == L.textAlign) return Math.floor(I - O);
    }
    return 0;
  }
  function N(I, O, L) {
    var C;
    if (L) C = L;else {
      if (!(typeof document < "u")) return 0;
      C = document.createElement("canvas").getContext("2d");
    }
    C.font = O.fontOptions + " " + O.fontSize + "px " + O.font;
    var v = C.measureText(I);
    return v ? v.width : 0;
  }
  V.getMaximumHeightOfEncodings = function A(I) {
    for (var O = 0, L = 0; L < I.length; L++) I[L].height > O && (O = I[L].height);
    return O;
  }, V.getEncodingHeight = m, V.getBarcodePadding = d, V.calculateEncodingAttributes = function M(I, O, L) {
    for (var C = 0; C < I.length; C++) {
      var E,
        v = I[C],
        f = (0, e.default)(O, v.options);
      E = f.displayValue ? N(v.text, f, L) : 0;
      var h = v.data.length * f.width;
      v.width = Math.ceil(Math.max(E, h)), v.height = m(v, f), v.barcodePadding = d(E, h, f);
    }
  }, V.getTotalWidthOfEncodings = function b(I) {
    for (var O = 0, L = 0; L < I.length; L++) O += I[L].width;
    return O;
  };
});
