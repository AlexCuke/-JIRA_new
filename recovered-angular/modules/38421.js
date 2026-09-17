// Extracted from main; webpack module 38421. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Xf: () => C
  });
  var t = i(97582),
    e = i(81144),
    a = i(28239),
    m = i(69751),
    d = i(93670),
    M = i(12206),
    b = i(44532),
    A = i(26495),
    N = i(53260),
    I = i(30576),
    O = i(87849),
    L = i(48822);
  function C(R) {
    if (R instanceof m.y) return R;
    if (null != R) {
      if ((0, d.c)(R)) return function v(R) {
        return new m.y(B => {
          const y = R[L.L]();
          if ((0, I.m)(y.subscribe)) return y.subscribe(B);
          throw new TypeError("Provided object does not correctly implement Symbol.observable");
        });
      }(R);
      if ((0, e.z)(R)) return function f(R) {
        return new m.y(B => {
          for (let y = 0; y < R.length && !B.closed; y++) B.next(R[y]);
          B.complete();
        });
      }(R);
      if ((0, a.t)(R)) return function E(R) {
        return new m.y(B => {
          R.then(y => {
            B.closed || (B.next(y), B.complete());
          }, y => B.error(y)).then(null, O.h);
        });
      }(R);
      if ((0, M.D)(R)) return x(R);
      if ((0, A.T)(R)) return function h(R) {
        return new m.y(B => {
          for (const y of R) if (B.next(y), B.closed) return;
          B.complete();
        });
      }(R);
      if ((0, N.L)(R)) return function u(R) {
        return x((0, N.Q)(R));
      }(R);
    }
    throw (0, b.z)(R);
  }
  function x(R) {
    return new m.y(B => {
      (function T(R, B) {
        var y, j, W, F;
        return (0, t.mG)(this, void 0, void 0, function* () {
          try {
            for (y = (0, t.KL)(R); !(j = yield y.next()).done;) if (B.next(j.value), B.closed) return;
          } catch (Le) {
            W = {
              error: Le
            };
          } finally {
            try {
              j && !j.done && (F = y.return) && (yield F.call(y));
            } finally {
              if (W) throw W.error;
            }
          }
          B.complete();
        });
      })(R, B).catch(y => B.error(y));
    });
  }
});
