// Extracted from main; webpack module 5343. Factory, not an ES module.
((Ae, V) => {
  "use strict";

  V.byteLength = function b(C) {
    var v = M(C),
      E = v[1];
    return 3 * (v[0] + E) / 4 - E;
  }, V.toByteArray = function N(C) {
    var v,
      R,
      f = M(C),
      E = f[0],
      h = f[1],
      x = new e(function A(C, v, f) {
        return 3 * (v + f) / 4 - f;
      }(0, E, h)),
      u = 0,
      T = h > 0 ? E - 4 : E;
    for (R = 0; R < T; R += 4) v = t[C.charCodeAt(R)] << 18 | t[C.charCodeAt(R + 1)] << 12 | t[C.charCodeAt(R + 2)] << 6 | t[C.charCodeAt(R + 3)], x[u++] = v >> 16 & 255, x[u++] = v >> 8 & 255, x[u++] = 255 & v;
    return 2 === h && (v = t[C.charCodeAt(R)] << 2 | t[C.charCodeAt(R + 1)] >> 4, x[u++] = 255 & v), 1 === h && (v = t[C.charCodeAt(R)] << 10 | t[C.charCodeAt(R + 1)] << 4 | t[C.charCodeAt(R + 2)] >> 2, x[u++] = v >> 8 & 255, x[u++] = 255 & v), x;
  }, V.fromByteArray = function L(C) {
    for (var v, f = C.length, E = f % 3, h = [], x = 16383, u = 0, T = f - E; u < T; u += x) h.push(O(C, u, u + x > T ? T : u + x));
    return 1 === E ? h.push(i[(v = C[f - 1]) >> 2] + i[v << 4 & 63] + "==") : 2 === E && h.push(i[(v = (C[f - 2] << 8) + C[f - 1]) >> 10] + i[v >> 4 & 63] + i[v << 2 & 63] + "="), h.join("");
  };
  for (var i = [], t = [], e = typeof Uint8Array < "u" ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", m = 0, d = a.length; m < d; ++m) i[m] = a[m], t[a.charCodeAt(m)] = m;
  function M(C) {
    var v = C.length;
    if (v % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var f = C.indexOf("=");
    return -1 === f && (f = v), [f, f === v ? 0 : 4 - f % 4];
  }
  function I(C) {
    return i[C >> 18 & 63] + i[C >> 12 & 63] + i[C >> 6 & 63] + i[63 & C];
  }
  function O(C, v, f) {
    for (var h = [], x = v; x < f; x += 3) h.push(I((C[x] << 16 & 16711680) + (C[x + 1] << 8 & 65280) + (255 & C[x + 2])));
    return h.join("");
  }
  t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63;
});
