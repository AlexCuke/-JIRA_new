// Extracted from main; webpack module 8699. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    TF: () => d,
    sM: () => m,
    xI: () => M
  });
  var t = i(80529),
    e = i(94650),
    a = i(39646);
  let m = (() => {
      class b {
        constructor(N) {
          this.http = N;
        }
        post(N, I) {
          const L = new t.WM();
          return L.set("Content-Type", "application/json"), this.http.post(N, I, {
            headers: L,
            responseType: "json"
          });
        }
        get(N) {
          const O = new t.WM();
          return O.set("Content-Type", "application/json"), this.http.get(N, {
            headers: O,
            responseType: "json"
          });
        }
      }
      return b.ɵfac = function (N) {
        return new (N || b)(e.LFG(t.eN));
      }, b.ɵprov = e.Yz7({
        token: b,
        factory: b.ɵfac
      }), b;
    })(),
    d = (() => {
      class b {
        constructor() {}
        getList(N, I) {
          return (0, a.of)({
            total: 0,
            items: [],
            totals: {
              all: 0
            },
            aggregation: {}
          });
        }
        getConfig(N) {
          return (0, a.of)({});
        }
      }
      return b.ɵfac = function (N) {
        return new (N || b)();
      }, b.ɵprov = e.Yz7({
        token: b,
        factory: b.ɵfac
      }), b;
    })();
  const M = new e.OlP("UniversalListScenarioToken");
});
