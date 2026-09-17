// Extracted from main; webpack module 84779. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  var t = i(89068),
    e = function (A) {
      return A.match(new RegExp("^" + t.A_CHARS + "*"))[0].length;
    },
    a = function (A) {
      return A.match(new RegExp("^" + t.B_CHARS + "*"))[0].length;
    },
    m = function (A) {
      return A.match(new RegExp("^" + t.C_CHARS + "*"))[0];
    };
  function d(b, A) {
    var N = A ? t.A_CHARS : t.B_CHARS,
      I = b.match(new RegExp("^(" + N + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
    if (I) return I[1] + String.fromCharCode(204) + M(b.substring(I[1].length));
    var O = b.match(new RegExp("^" + N + "+"))[0];
    return O.length === b.length ? b : O + String.fromCharCode(A ? 205 : 206) + d(b.substring(O.length), !A);
  }
  function M(b) {
    var A = m(b),
      N = A.length;
    if (N === b.length) return b;
    b = b.substring(N);
    var I = e(b) >= a(b);
    return A + String.fromCharCode(I ? 206 : 205) + d(b, I);
  }
  V.default = function (b) {
    var A = void 0;
    if (m(b).length >= 2) A = t.C_START_CHAR + M(b);else {
      var I = e(b) > a(b);
      A = (I ? t.A_START_CHAR : t.B_START_CHAR) + d(b, I);
    }
    return A.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, function (O, L) {
      return String.fromCharCode(203) + L;
    });
  };
});
