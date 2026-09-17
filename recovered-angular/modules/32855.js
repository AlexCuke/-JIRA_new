// Extracted from main; webpack module 32855. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(90719),
    e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    a = /\\(\\)?/g,
    m = t(function (d) {
      var M = [];
      return 46 === d.charCodeAt(0) && M.push(""), d.replace(e, function (b, A, N, I) {
        M.push(N ? I.replace(a, "$1") : A || b);
      }), M;
    });
  Ae.exports = m;
});
