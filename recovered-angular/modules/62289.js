// Extracted from main; webpack module 62289. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Yg: () => T,
    xu: () => v
  });
  var t = i(94650),
    e = i(21281),
    a = i(77579),
    m = i(39841),
    d = i(97272),
    M = i(69751),
    b = i(95698),
    A = i(35684),
    N = i(78372),
    I = i(54004),
    O = i(68675),
    L = i(82722),
    C = i(83353);
  let v = (() => {
    class y {}
    return y.ɵfac = function (W) {
      return new (W || y)();
    }, y.ɵmod = t.oAB({
      type: y
    }), y.ɵinj = t.cJS({}), y;
  })();
  const f = new Set();
  let E,
    h = (() => {
      class y {
        constructor(W) {
          this._platform = W, this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : u;
        }
        matchMedia(W) {
          return (this._platform.WEBKIT || this._platform.BLINK) && function x(y) {
            if (!f.has(y)) try {
              E || (E = document.createElement("style"), E.setAttribute("type", "text/css"), document.head.appendChild(E)), E.sheet && (E.sheet.insertRule(`@media ${y} {body{ }}`, 0), f.add(y));
            } catch (j) {
              console.error(j);
            }
          }(W), this._matchMedia(W);
        }
      }
      return y.ɵfac = function (W) {
        return new (W || y)(t.LFG(C.t4));
      }, y.ɵprov = t.Yz7({
        token: y,
        factory: y.ɵfac,
        providedIn: "root"
      }), y;
    })();
  function u(y) {
    return {
      matches: "all" === y || "" === y,
      media: y,
      addListener: () => {},
      removeListener: () => {}
    };
  }
  let T = (() => {
    class y {
      constructor(W, F) {
        this._mediaMatcher = W, this._zone = F, this._queries = new Map(), this._destroySubject = new a.x();
      }
      ngOnDestroy() {
        this._destroySubject.next(), this._destroySubject.complete();
      }
      isMatched(W) {
        return R((0, e.Eq)(W)).some(Le => this._registerQuery(Le).mql.matches);
      }
      observe(W) {
        const Le = R((0, e.Eq)(W)).map(J => this._registerQuery(J).observable);
        let ke = (0, m.a)(Le);
        return ke = (0, d.z)(ke.pipe((0, b.q)(1)), ke.pipe((0, A.T)(1), (0, N.b)(0))), ke.pipe((0, I.U)(J => {
          const fe = {
            matches: !1,
            breakpoints: {}
          };
          return J.forEach(({
            matches: ye,
            query: ae
          }) => {
            fe.matches = fe.matches || ye, fe.breakpoints[ae] = ye;
          }), fe;
        }));
      }
      _registerQuery(W) {
        if (this._queries.has(W)) return this._queries.get(W);
        const F = this._mediaMatcher.matchMedia(W),
          ke = {
            observable: new M.y(J => {
              const fe = ye => this._zone.run(() => J.next(ye));
              return F.addListener(fe), () => {
                F.removeListener(fe);
              };
            }).pipe((0, O.O)(F), (0, I.U)(({
              matches: J
            }) => ({
              query: W,
              matches: J
            })), (0, L.R)(this._destroySubject)),
            mql: F
          };
        return this._queries.set(W, ke), ke;
      }
    }
    return y.ɵfac = function (W) {
      return new (W || y)(t.LFG(h), t.LFG(t.R0b));
    }, y.ɵprov = t.Yz7({
      token: y,
      factory: y.ɵfac,
      providedIn: "root"
    }), y;
  })();
  function R(y) {
    return y.map(j => j.split(",")).reduce((j, W) => j.concat(W)).map(j => j.trim());
  }
});
