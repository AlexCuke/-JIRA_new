// Extracted from main; webpack module 23210. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(36355);
  V.render = function (d, M, b) {
    var A = b,
      N = M;
    typeof A > "u" && (!M || !M.getContext) && (A = M, M = void 0), M || (N = function a() {
      try {
        return document.createElement("canvas");
      } catch {
        throw new Error("You need to specify a canvas element");
      }
    }()), A = t.getOptions(A);
    var I = t.getImageWidth(d.modules.size, A),
      O = N.getContext("2d"),
      L = O.createImageData(I, I);
    return t.qrToImageData(L.data, d, A), function e(m, d, M) {
      m.clearRect(0, 0, d.width, d.height), d.style || (d.style = {}), d.height = M, d.width = M, d.style.height = M + "px", d.style.width = M + "px";
    }(O, N, I), O.putImageData(L, 0, 0), N;
  }, V.renderToDataURL = function (d, M, b) {
    var A = b;
    return typeof A > "u" && (!M || !M.getContext) && (A = M, M = void 0), A || (A = {}), V.render(d, M, A).toDataURL(A.type || "image/png", (A.rendererOpts || {}).quality);
  };
});
