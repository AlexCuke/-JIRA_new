// Extracted from main; webpack module 29495. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Kd: () => E,
    Y5: () => L,
    mr: () => h
  });
  var t = i(94650),
    e = i(8699),
    a = i(39646),
    m = i(4128),
    d = i(63900),
    M = i(54004),
    b = i(80529);
  function A(x, u) {
    const T = new Map(u.map(R => [R.code, R.setting]));
    return {
      ...x,
      columns: x.columns.map(R => T.get(R))
    };
  }
  function N(x) {
    if (!Array.isArray(x.columns)) throw new Error("Свойство \"columns\" должно быть массивом.");
    return x.columns.every(u => "string" == typeof u);
  }
  let I = (() => {
      class x {
        constructor(T) {
          this.apiService = T;
        }
        getConfig(T, R) {
          return this.apiService.get(`${T.settings}/${R}`).pipe((0, d.w)(B => N(B.setting) ? this.compareSettings(B.setting, T) : (0, a.of)(B.setting)));
        }
        compareSettings(T, R) {
          if (!R.columns) throw new Error("Для получения настроек столбцов должен быть указан путь");
          return (0, m.D)({
            list: (0, a.of)(T),
            columns: this.apiService.get(R.columns)
          }).pipe((0, M.U)(({
            list: B,
            columns: y
          }) => A(B, y)));
        }
      }
      return x.ɵfac = function (T) {
        return new (T || x)(t.LFG(e.sM));
      }, x.ɵprov = t.Yz7({
        token: x,
        factory: x.ɵfac
      }), x;
    })(),
    O = (() => {
      class x {
        constructor(T) {
          this.httpClient = T;
        }
        getConfig(T, R) {
          return this.httpClient.get(`${T.settings}/${R}.json`).pipe((0, d.w)(B => N(B) ? this.compareSettings(B, T) : (0, a.of)(B)));
        }
        compareSettings(T, R) {
          if (!R.columns) throw new Error("Для получения настроек столбцов должен быть указан путь");
          return (0, m.D)({
            list: (0, a.of)(T),
            columns: this.getColumns(T, R)
          }).pipe((0, M.U)(({
            list: B,
            columns: y
          }) => A(B, y)));
        }
        getColumns(T, {
          columns: R
        }) {
          return (0, m.D)(T.columns.map(B => this.httpClient.get(`${String(R)}/${String(B)}.json`).pipe((0, M.U)(y => ({
            code: String(B),
            setting: y
          })))));
        }
      }
      return x.ɵfac = function (T) {
        return new (T || x)(t.LFG(b.eN));
      }, x.ɵprov = t.Yz7({
        token: x,
        factory: x.ɵfac
      }), x;
    })();
  var L = (() => {
    return (x = L || (L = {})).POST = "POST", x.GET = "GET", x.LOCAL = "LOCAL", L;
    var x;
  })();
  const C = new t.OlP("UniversalListConfigToken"),
    v = new t.OlP("UniversalListConfigAdapterToken");
  let E = (() => {
      class x {
        constructor(T, R, B, y) {
          this.universalListConfig = T, this.localAdapter = R, this.settingsService = B, this.universalListAdapter = y;
        }
        getConfig(T) {
          if (!this.universalListConfig) throw new Error("universalListConfig is missing");
          if (this.universalListAdapter) return this.universalListAdapter.getConfig(this.universalListConfig.path, T);
          switch (this.universalListConfig.method) {
            case L.LOCAL:
              return this.localAdapter.getConfig(this.universalListConfig.path, T);
            case L.GET:
              return this.settingsService.getConfig(this.universalListConfig.path, T);
            default:
              return (0, a.of)({});
          }
        }
      }
      return x.ɵfac = function (T) {
        return new (T || x)(t.LFG(C, 8), t.LFG(O), t.LFG(I), t.LFG(v, 8));
      }, x.ɵprov = t.Yz7({
        token: x,
        factory: x.ɵfac
      }), x;
    })(),
    h = (() => {
      class x {
        static forRoot(T) {
          return {
            ngModule: x,
            providers: [E, O, I, e.sM, {
              provide: C,
              useValue: T
            }, ...(T.adapter ? [{
              provide: v,
              useClass: T.adapter
            }] : [])]
          };
        }
        static forFeature(T) {
          return {
            ngModule: x,
            providers: [E, {
              provide: C,
              useValue: T
            }, ...(T.adapter ? [{
              provide: v,
              useClass: T.adapter
            }] : [])]
          };
        }
      }
      return x.ɵfac = function (T) {
        return new (T || x)();
      }, x.ɵmod = t.oAB({
        type: x
      }), x.ɵinj = t.cJS({}), x;
    })();
});
