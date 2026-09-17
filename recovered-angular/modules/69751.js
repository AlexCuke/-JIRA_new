// Extracted from main; webpack module 69751. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    y: () => A
  });
  var t = i(70930),
    e = i(50727),
    a = i(48822),
    m = i(89635),
    d = i(42416),
    M = i(30576),
    b = i(72806);
  let A = (() => {
    class L {
      constructor(v) {
        v && (this._subscribe = v);
      }
      lift(v) {
        const f = new L();
        return f.source = this, f.operator = v, f;
      }
      subscribe(v, f, E) {
        const h = function O(L) {
          return L && L instanceof t.Lv || function I(L) {
            return L && (0, M.m)(L.next) && (0, M.m)(L.error) && (0, M.m)(L.complete);
          }(L) && (0, e.Nn)(L);
        }(v) ? v : new t.Hp(v, f, E);
        return (0, b.x)(() => {
          const {
            operator: x,
            source: u
          } = this;
          h.add(x ? x.call(h, u) : u ? this._subscribe(h) : this._trySubscribe(h));
        }), h;
      }
      _trySubscribe(v) {
        try {
          return this._subscribe(v);
        } catch (f) {
          v.error(f);
        }
      }
      forEach(v, f) {
        return new (f = N(f))((E, h) => {
          const x = new t.Hp({
            next: u => {
              try {
                v(u);
              } catch (T) {
                h(T), x.unsubscribe();
              }
            },
            error: h,
            complete: E
          });
          this.subscribe(x);
        });
      }
      _subscribe(v) {
        var f;
        return null === (f = this.source) || void 0 === f ? void 0 : f.subscribe(v);
      }
      [a.L]() {
        return this;
      }
      pipe(...v) {
        return (0, m.U)(v)(this);
      }
      toPromise(v) {
        return new (v = N(v))((f, E) => {
          let h;
          this.subscribe(x => h = x, x => E(x), () => f(h));
        });
      }
    }
    return L.create = C => new L(C), L;
  })();
  function N(L) {
    var C;
    return null !== (C = L ?? d.v.Promise) && void 0 !== C ? C : Promise;
  }
});
