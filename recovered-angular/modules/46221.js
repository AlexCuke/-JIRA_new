// Extracted from main; webpack module 46221. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(34792).getSymbolSize;
  V.getRowColCoords = function (a) {
    if (1 === a) return [];
    for (var m = Math.floor(a / 7) + 2, d = t(a), M = 145 === d ? 26 : 2 * Math.ceil((d - 13) / (2 * m - 2)), b = [d - 7], A = 1; A < m - 1; A++) b[A] = b[A - 1] - M;
    return b.push(6), b.reverse();
  }, V.getPositions = function (a) {
    for (var m = [], d = V.getRowColCoords(a), M = d.length, b = 0; b < M; b++) for (var A = 0; A < M; A++) 0 === b && 0 === A || 0 === b && A === M - 1 || b === M - 1 && 0 === A || m.push([d[b], d[A]]);
    return m;
  };
});
