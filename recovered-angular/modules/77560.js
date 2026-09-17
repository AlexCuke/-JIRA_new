// Extracted from main; webpack module 77560. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    z: () => N
  });
  var t = i(63900),
    e = i(18505),
    a = i(54004),
    m = i(98129);
  class d extends m.U {
    constructor(O) {
      super("medical-entry2", O);
    }
    getSettings(O, L) {
      return super.getSettings().pipe((0, a.U)(C => C.filter(v => !1 === L || v.active).map(v => (v.entries && !Array.isArray(v.entries) && (v.entries = [v.entries]), v))));
    }
  }
  var M = i(91487),
    b = i(94650),
    A = i(10885);
  let N = (() => {
    class I extends d {
      constructor(L) {
        super(L), this.sections = new M.g(L);
      }
      getSetting(L) {
        return this.sections.init().pipe((0, t.w)(() => super.getSetting(L)), (0, e.b)(C => {
          (C.entries?.length ?? 0) > 0 && (C.entries = [...(this.sections.mapEntries(C.entries) ?? [])]);
        }));
      }
      getSettings(L, C) {
        return this.sections.init().pipe((0, t.w)(() => super.getSettings(L, C))).pipe((0, e.b)(v => {
          v.forEach(f => this.initEntry(f));
        }));
      }
      initEntry(L) {
        L._sectionsInitialized || (L.entries && L.entries.length > 0 && (L.entries = this.sections.mapEntries(L.entries)), L._sectionsInitialized = !0);
      }
      getSettingByTemplateId(L, C) {
        return this.getSettings().pipe((0, a.U)(v => v.filter(f => f.templateId === L && (!C || f.code === C))[0]));
      }
      getTypes() {
        return this.getSettings().pipe((0, a.U)(L => L.map(C => C.typeId ?? "").filter(C => "" !== C)));
      }
      getSettingsByType(L) {
        return this.getSettings().pipe((0, a.U)(C => C.filter(v => v.typeId === L)));
      }
    }
    return I.ɵfac = function (L) {
      return new (L || I)(b.LFG(A.p));
    }, I.ɵprov = b.Yz7({
      token: I,
      factory: I.ɵfac,
      providedIn: "root"
    }), I;
  })();
});
