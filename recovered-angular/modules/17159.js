// Extracted from main; webpack module 17159. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    x: () => B
  });
  var t = i(38421),
    e = i(85363),
    a = i(54482);
  function m(y, j = 0) {
    return (0, a.e)((W, F) => {
      F.add(y.schedule(() => W.subscribe(F), j));
    });
  }
  var b = i(69751),
    N = i(2202),
    I = i(30576),
    O = i(39672);
  function C(y, j) {
    if (!y) throw new Error("Iterable cannot be null");
    return new b.y(W => {
      (0, O.f)(W, j, () => {
        const F = y[Symbol.asyncIterator]();
        (0, O.f)(W, j, () => {
          F.next().then(Le => {
            Le.done ? W.complete() : W.next(Le.value);
          });
        }, 0, !0);
      });
    });
  }
  var v = i(93670),
    f = i(28239),
    E = i(81144),
    h = i(26495),
    x = i(12206),
    u = i(44532),
    T = i(53260);
  function B(y, j) {
    if (null != y) {
      if ((0, v.c)(y)) return function d(y, j) {
        return (0, t.Xf)(y).pipe(m(j), (0, e.Q)(j));
      }(y, j);
      if ((0, E.z)(y)) return function A(y, j) {
        return new b.y(W => {
          let F = 0;
          return j.schedule(function () {
            F === y.length ? W.complete() : (W.next(y[F++]), W.closed || this.schedule());
          });
        });
      }(y, j);
      if ((0, f.t)(y)) return function M(y, j) {
        return (0, t.Xf)(y).pipe(m(j), (0, e.Q)(j));
      }(y, j);
      if ((0, x.D)(y)) return C(y, j);
      if ((0, h.T)(y)) return function L(y, j) {
        return new b.y(W => {
          let F;
          return (0, O.f)(W, j, () => {
            F = y[N.h](), (0, O.f)(W, j, () => {
              let Le, ke;
              try {
                ({
                  value: Le,
                  done: ke
                } = F.next());
              } catch (J) {
                return void W.error(J);
              }
              ke ? W.complete() : W.next(Le);
            }, 0, !0);
          }), () => (0, I.m)(F?.return) && F.return();
        });
      }(y, j);
      if ((0, T.L)(y)) return function R(y, j) {
        return C((0, T.Q)(y), j);
      }(y, j);
    }
    throw (0, u.z)(y);
  }
});
