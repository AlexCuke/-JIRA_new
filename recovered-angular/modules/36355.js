// Extracted from main; webpack module 36355. Factory, not an ES module.
((Ae, V) => {
  function i(t) {
    if ("number" == typeof t && (t = t.toString()), "string" != typeof t) throw new Error("Color should be defined as hex string");
    var e = t.slice().replace("#", "").split("");
    if (e.length < 3 || 5 === e.length || e.length > 8) throw new Error("Invalid hex color: " + t);
    (3 === e.length || 4 === e.length) && (e = Array.prototype.concat.apply([], e.map(function (m) {
      return [m, m];
    }))), 6 === e.length && e.push("F", "F");
    var a = parseInt(e.join(""), 16);
    return {
      r: a >> 24 & 255,
      g: a >> 16 & 255,
      b: a >> 8 & 255,
      a: 255 & a,
      hex: "#" + e.slice(0, 6).join("")
    };
  }
  V.getOptions = function (e) {
    e || (e = {}), e.color || (e.color = {});
    var m = e.width && e.width >= 21 ? e.width : void 0;
    return {
      width: m,
      scale: m ? 4 : e.scale || 4,
      margin: typeof e.margin > "u" || null === e.margin || e.margin < 0 ? 4 : e.margin,
      color: {
        dark: i(e.color.dark || "#000000ff"),
        light: i(e.color.light || "#ffffffff")
      },
      type: e.type,
      rendererOpts: e.rendererOpts || {}
    };
  }, V.getScale = function (e, a) {
    return a.width && a.width >= e + 2 * a.margin ? a.width / (e + 2 * a.margin) : a.scale;
  }, V.getImageWidth = function (e, a) {
    var m = V.getScale(e, a);
    return Math.floor((e + 2 * a.margin) * m);
  }, V.qrToImageData = function (e, a, m) {
    for (var d = a.modules.size, M = a.modules.data, b = V.getScale(d, m), A = Math.floor((d + 2 * m.margin) * b), N = m.margin * b, I = [m.color.light, m.color.dark], O = 0; O < A; O++) for (var L = 0; L < A; L++) {
      var C = 4 * (O * A + L),
        v = m.color.light;
      O >= N && L >= N && O < A - N && L < A - N && (v = I[M[Math.floor((O - N) / b) * d + Math.floor((L - N) / b)] ? 1 : 0]), e[C++] = v.r, e[C++] = v.g, e[C++] = v.b, e[C] = v.a;
    }
  };
});
