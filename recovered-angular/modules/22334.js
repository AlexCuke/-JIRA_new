// Extracted from main; webpack module 22334. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(36355);
  function e(d, M) {
    var b = d.a / 255,
      A = M + "=\"" + d.hex + "\"";
    return b < 1 ? A + " " + M + "-opacity=\"" + b.toFixed(2).slice(1) + "\"" : A;
  }
  function a(d, M, b) {
    var A = d + M;
    return typeof b < "u" && (A += " " + b), A;
  }
  V.render = function (M, b, A) {
    var N = t.getOptions(b),
      I = M.modules.size,
      O = M.modules.data,
      L = I + 2 * N.margin,
      C = N.color.light.a ? "<path " + e(N.color.light, "fill") + " d=\"M0 0h" + L + "v" + L + "H0z\"/>" : "",
      v = "<path " + e(N.color.dark, "stroke") + " d=\"" + function m(d, M, b) {
        for (var A = "", N = 0, I = !1, O = 0, L = 0; L < d.length; L++) {
          var C = Math.floor(L % M),
            v = Math.floor(L / M);
          !C && !I && (I = !0), d[L] ? (O++, L > 0 && C > 0 && d[L - 1] || (A += I ? a("M", C + b, .5 + v + b) : a("m", N, 0), N = 0, I = !1), C + 1 < M && d[L + 1] || (A += a("h", O), O = 0)) : N++;
        }
        return A;
      }(O, I, N.margin) + "\"/>",
      h = "<svg xmlns=\"http://www.w3.org/2000/svg\" " + (N.width ? "width=\"" + N.width + "\" height=\"" + N.width + "\" " : "") + "viewBox=\"0 0 " + L + " " + L + "\" shape-rendering=\"crispEdges\">" + C + v + "</svg>\n";
    return "function" == typeof A && A(null, h), h;
  };
});
