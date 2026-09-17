// Extracted from main; webpack module 62033. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(64016),
    e = i(97783),
    a = i(32424),
    m = i(85663),
    d = i(80449),
    M = i(2699),
    b = i(34792),
    A = i(74901);
  function N(h) {
    return unescape(encodeURIComponent(h)).length;
  }
  function I(h, x, u) {
    for (var R, T = []; null !== (R = h.exec(u));) T.push({
      data: R[0],
      index: R.index,
      mode: x,
      length: R[0].length
    });
    return T;
  }
  function O(h) {
    var T,
      R,
      x = I(M.NUMERIC, t.NUMERIC, h),
      u = I(M.ALPHANUMERIC, t.ALPHANUMERIC, h);
    return b.isKanjiModeEnabled() ? (T = I(M.BYTE, t.BYTE, h), R = I(M.KANJI, t.KANJI, h)) : (T = I(M.BYTE_KANJI, t.BYTE, h), R = []), x.concat(u, T, R).sort(function (y, j) {
      return y.index - j.index;
    }).map(function (y) {
      return {
        data: y.data,
        mode: y.mode,
        length: y.length
      };
    });
  }
  function L(h, x) {
    switch (x) {
      case t.NUMERIC:
        return e.getBitsLength(h);
      case t.ALPHANUMERIC:
        return a.getBitsLength(h);
      case t.KANJI:
        return d.getBitsLength(h);
      case t.BYTE:
        return m.getBitsLength(h);
    }
  }
  function E(h, x) {
    var u,
      T = t.getBestModeForData(h);
    if ((u = t.from(x, T)) !== t.BYTE && u.bit < T.bit) throw new Error("\"" + h + "\" cannot be encoded with mode " + t.toString(u) + ".\n Suggested mode is: " + t.toString(T));
    switch (u === t.KANJI && !b.isKanjiModeEnabled() && (u = t.BYTE), u) {
      case t.NUMERIC:
        return new e(h);
      case t.ALPHANUMERIC:
        return new a(h);
      case t.KANJI:
        return new d(h);
      case t.BYTE:
        return new m(h);
    }
  }
  V.fromArray = function (x) {
    return x.reduce(function (u, T) {
      return "string" == typeof T ? u.push(E(T, null)) : T.data && u.push(E(T.data, T.mode)), u;
    }, []);
  }, V.fromString = function (x, u) {
    for (var R = function v(h) {
        for (var x = [], u = 0; u < h.length; u++) {
          var T = h[u];
          switch (T.mode) {
            case t.NUMERIC:
              x.push([T, {
                data: T.data,
                mode: t.ALPHANUMERIC,
                length: T.length
              }, {
                data: T.data,
                mode: t.BYTE,
                length: T.length
              }]);
              break;
            case t.ALPHANUMERIC:
              x.push([T, {
                data: T.data,
                mode: t.BYTE,
                length: T.length
              }]);
              break;
            case t.KANJI:
              x.push([T, {
                data: T.data,
                mode: t.BYTE,
                length: N(T.data)
              }]);
              break;
            case t.BYTE:
              x.push([{
                data: T.data,
                mode: t.BYTE,
                length: N(T.data)
              }]);
          }
        }
        return x;
      }(O(x, b.isKanjiModeEnabled())), B = function f(h, x) {
        for (var u = {}, T = {
            start: {}
          }, R = ["start"], B = 0; B < h.length; B++) {
          for (var y = h[B], j = [], W = 0; W < y.length; W++) {
            var F = y[W],
              Le = "" + B + W;
            j.push(Le), u[Le] = {
              node: F,
              lastCount: 0
            }, T[Le] = {};
            for (var ke = 0; ke < R.length; ke++) {
              var J = R[ke];
              u[J] && u[J].node.mode === F.mode ? (T[J][Le] = L(u[J].lastCount + F.length, F.mode) - L(u[J].lastCount, F.mode), u[J].lastCount += F.length) : (u[J] && (u[J].lastCount = F.length), T[J][Le] = L(F.length, F.mode) + 4 + t.getCharCountIndicator(F.mode, x));
            }
          }
          R = j;
        }
        for (ke = 0; ke < R.length; ke++) T[R[ke]].end = 0;
        return {
          map: T,
          table: u
        };
      }(R, u), y = A.find_path(B.map, "start", "end"), j = [], W = 1; W < y.length - 1; W++) j.push(B.table[y[W]].node);
    return V.fromArray(function C(h) {
      return h.reduce(function (x, u) {
        var T = x.length - 1 >= 0 ? x[x.length - 1] : null;
        return T && T.mode === u.mode ? (x[x.length - 1].data += u.data, x) : (x.push(u), x);
      }, []);
    }(j));
  }, V.rawSplit = function (x) {
    return V.fromArray(O(x, b.isKanjiModeEnabled()));
  };
});
