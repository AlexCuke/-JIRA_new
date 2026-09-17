// Extracted from main; webpack module 91943. Factory, not an ES module.
((Ae, V, i) => {
  var m,
    t = i(24610),
    e = (m = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "")) ? "Symbol(src)_1." + m : "";
  Ae.exports = function a(m) {
    return !!e && e in m;
  };
});
