// Extracted from main; webpack module 97989. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    C0: () => I
  });
  var t = i(80529),
    e = i(39646),
    a = i(18505),
    m = i(54004),
    d = i(63900),
    M = i(2908),
    b = i(94650);
  const A = (0, M.b)("/ehr-forms/api");
  function N() {
    return {
      headers: new t.WM({
        "Cache-Control": "no-store",
        "Content-Type": "application/json"
      })
    };
  }
  let I = (() => {
    class O {
      constructor(C) {
        this.http = C, this.formCache = {};
      }
      getForm(C) {
        return this.formCache[C] ? (0, e.of)(this.formCache[C]) : this.http.get(`${A}/form/${C}`, {
          ...N()
        }).pipe((0, a.b)(v => {
          this.formCache[C] = v;
        }));
      }
      draft(C) {
        return this.http.post(`${A}/draft`, C, {
          ...N()
        });
      }
      publish(C) {
        return this.http.post(`${A}/draft/${C}/publish`, {}, {
          ...N()
        });
      }
      getKey(C, v) {
        return `${C}_${v}`;
      }
      findFormDescription(C, v) {
        const f = this.getKey(C, v || "undefined");
        return this.formCache[f] ? (0, e.of)(this.formCache[f]) : this.http.post(`${A}/form/search`, {
          filters: [{
            $type: "and",
            criteria: [{
              $type: "compare",
              comparison: "=",
              field: "template",
              value: C
            }, {
              $type: "compare",
              comparison: "=",
              field: "active",
              value: !0
            }, {
              $type: "compare",
              comparison: "=",
              field: "tag",
              value: ["EHR Hospital"]
            }]
          }],
          page: {
            $type: "page",
            page: 1,
            pageSize: 15
          },
          sorts: [{
            direction: "desc",
            field: "updatedDate"
          }]
        }, {
          ...N()
        }).pipe((0, m.U)(h => {
          let x;
          if (v && (x = h.items.filter(u => u.title === v)[0]?.id), x || (x = h.items[0]?.id), !x) throw new Error(`Unable to find form for templateId: ${C}`);
          return x;
        })).pipe((0, d.w)(h => this.getForm(h))).pipe((0, a.b)(h => {
          this.formCache[f] = h;
        }));
      }
    }
    return O.ɵfac = function (C) {
      return new (C || O)(b.LFG(t.eN));
    }, O.ɵprov = b.Yz7({
      token: O,
      factory: O.ɵfac,
      providedIn: "root"
    }), O;
  })();
});
