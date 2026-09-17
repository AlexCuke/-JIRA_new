// Extracted from main; webpack module 40187. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    y: () => L
  });
  var t = i(71822),
    e = i(39646),
    a = i(63900),
    m = i(70262),
    d = i(54004),
    M = i(18505),
    b = i(51588),
    A = i(89704),
    N = i(80862),
    I = i(77560),
    O = i(48763);
  class L {
    constructor(v) {
      this.medicalEntry = v;
    }
    loadSetting() {
      const v = new I.z(this.medicalEntry.getApis().settingsApi);
      return (0, e.of)(this).pipe((0, a.w)(() => {
        const f = this.medicalEntry.getRoot().getComposition().getLinks().filter(E => "SETTING" === E.getValue().type)[0];
        return f ? v.getSetting(f.getValue()?.target?.replace("setting:medical-entry/", "") ?? "").pipe((0, m.K)(() => (0, e.of)(void 0))) : (0, e.of)(void 0);
      }), (0, a.w)(f => {
        if (f) return (0, e.of)(f);
        const E = this.findAction();
        return E && this.isAssignmentResult(E) ? this.medicalEntry.getEhr().getMedicalEntryByComposition(O.B.getUid(E.getInstructionDetails().compositionUid ?? ""), this.medicalEntry.getMoId()).pipe((0, d.U)(h => h.getEntry(O.B.getUid(E.getInstructionDetails().compositionUid ?? ""))), (0, d.U)(h => h.getSettingsForAction(E))).pipe((0, m.K)(() => (0, e.of)(void 0))) : (0, e.of)(void 0);
      }), (0, a.w)(f => f ? (0, e.of)(f) : v.getSettingByTemplateId(this.medicalEntry.getRoot().getTemplateId() || "not found").pipe((0, m.K)(() => (0, e.of)(void 0)))), (0, a.w)(f => f ? (0, e.of)(f) : this.generateSettings()));
    }
    findAction() {
      return this.medicalEntry.getRoot().getComposition().find(new t.XA(t.B8.ACTION))[0];
    }
    isAssignmentResult(v) {
      return !(!v.getInstructionDetails()?.compositionUid || this.medicalEntry.getUid() === O.B.getUid(v.getInstructionDetails().compositionUid ?? ""));
    }
    generateSettings() {
      const v = new A.s(this.medicalEntry.getApis().settingsApi),
        f = {};
      return v.getSettings().pipe((0, M.b)(E => {
        E?.forEach(h => {
          f[h.templateId] = h;
        });
      }), (0, a.w)(() => this.medicalEntry.findLinkedChildren()), (0, d.U)(E => {
        const h = [],
          x = [];
        return E.forEach(u => {
          h.indexOf(u.name) < 0 && (h.push(u.name), x.push(u));
        }), {
          code: (0, b.Z)(),
          name: this.medicalEntry.getRoot().getComposition().getNode().name,
          type: f[this.medicalEntry.getRoot().getTemplateId()] ? N.y.Instruction : N.y.Data,
          entries: x.map(u => {
            const T = f[u.templateId]?.type;
            return {
              templateId: u.templateId,
              name: u.name,
              code: (0, b.Z)(),
              type: T || (f[u.templateId] ? N.y.Instruction : N.y.Data)
            };
          })
        };
      }));
    }
  }
});
