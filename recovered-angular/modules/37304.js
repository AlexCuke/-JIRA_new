// Extracted from main; webpack module 37304. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(75946),
    e = i(91943),
    a = i(25940),
    m = i(52827),
    M = /^\[object .+?Constructor\]$/,
    O = RegExp("^" + Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  Ae.exports = function L(C) {
    return !(!a(C) || e(C)) && (t(C) ? O : M).test(m(C));
  };
});
