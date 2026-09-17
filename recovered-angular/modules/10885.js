// Extracted from main; webpack module 10885. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    p: () => O
  });
  var t = i(18552),
    e = i(18505),
    a = i(54004),
    m = i(39646),
    d = i(70262),
    M = i(2908),
    b = i(14782),
    A = i(94650),
    N = i(80529);
  const I = (0, M.b)("/settings/api");
  let O = (() => {
    class L {
      constructor(v, f) {
        this.terminologyService = v, this.http = f, this.settingCache = {}, this.settingsCache = {}, this.dictionariesCache = {};
      }
      getSettings(v, f) {
        return f ? this.http.post(`${I}/v1/setting/${v}/byCodes`, JSON.stringify(f), {
          ...(0, b.h)()
        }).pipe((0, e.b)(E => {
          E.forEach(h => {
            const x = this.getKey(v, h.code);
            this.settingsCache[x] = h;
          });
        })).pipe((0, a.U)(E => E.map(h => h.setting))) : this.settingsCache[v] ? (0, m.of)(this.settingsCache[v]) : this.http.get(`${I}/v1/setting/${v}`, {
          ...(0, b.h)()
        }).pipe((0, a.U)(E => [...E.map(h => h.setting)])).pipe((0, e.b)(E => {
          this.settingsCache[v] = E;
        }));
      }
      getSetting(v, f) {
        const E = this.getKey(v, f);
        return this.settingCache[E] ? (0, m.of)(this.settingCache[E]) : this.http.get(`${I}/v1/setting/${v}/${f}`, {
          ...(0, b.h)()
        }).pipe((0, a.U)(h => h.setting)).pipe((0, e.b)(h => {
          this.settingCache[E] = h;
        }));
      }
      createSetting(v, f, E) {
        return this.http.post(`${I}/v1/setting/${v}/${f}`, E, {
          ...(0, b.h)()
        }).pipe((0, a.U)(() => E));
      }
      updateSetting(v, f, E) {
        return this.http.put(`${I}/v1/setting/${v}/${f}`, E, {
          ...(0, b.h)()
        }).pipe((0, a.U)(() => E)).pipe((0, e.b)(() => {
          const h = this.getKey(v, f);
          this.settingCache[h] && (this.settingCache[h] = void 0), this.settingsCache[v] = void 0;
        }));
      }
      getTerminology(v) {
        return this.dictionariesCache[v] ? (0, m.of)(this.dictionariesCache[v]) : this.terminologyService.getTerminologyQuery(v).pipe((0, a.U)(f => {
          const E = f.items || [];
          return E.length && (this.dictionariesCache[v] = E), E;
        }), (0, d.K)(() => (0, m.of)([])));
      }
      getKey(v, f) {
        return `${v}_${f}`;
      }
    }
    return L.ɵfac = function (v) {
      return new (v || L)(A.LFG(t.ae), A.LFG(N.eN));
    }, L.ɵprov = A.Yz7({
      token: L,
      factory: L.ɵfac,
      providedIn: "root"
    }), L;
  })();
});
