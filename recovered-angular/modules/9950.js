// Extracted from main; webpack module 9950. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    U: () => O
  });
  var t = i(39646),
    e = i(18505),
    a = i(63900),
    m = i(55643),
    d = i(72757),
    M = i(24441),
    b = i(66395),
    A = i(82562),
    N = i(19336),
    I = i(67838);
  class O extends b._ {
    constructor(C, v) {
      super(v), this.context = C;
    }
    getType() {
      return d.A.ICompositionEntryRoot;
    }
    attach(C) {
      this.getComposition().getLinks().filter(v => v.getValue()?.target === M.S).forEach(v => v.delete(!0)), this.unregisterType(d.A.ICompositionEntryRoot), super.attach(C);
    }
    getSettings() {
      return this.getMedicalEntry().getSettings();
    }
    prepareTags(C) {
      if (C !== A.u.COMPLETE) return this.getSettings().tags ?? void 0;
      if (this.getSettings().skipTagSign) return this.getSettings().tags ?? void 0;
      const v = this.getMedicalEntry().getUserContext();
      return [...(this.getSettings().tags || []), ...(v.getSignTags() || []), ...(0, m.$)(this.getSettings())];
    }
    incomplete(C) {
      return A.u.INCOMPLETE !== this.entry.getLifecycleState() || this.isModified() ? (this.clearDraftLinks(), this.prepareLinks(), (0, t.of)(this).pipe((0, e.b)(() => {
        this.clearDraftLinks(), this.prepareLinks();
      })).pipe((0, a.w)(() => super.incomplete(C)))) : (0, t.of)(this);
    }
    complete(C) {
      return A.u.COMPLETE !== this.entry.getLifecycleState() || this.isModified() ? (0, t.of)(this).pipe((0, e.b)(() => {
        this.clearDraftLinks(), this.prepareLinks();
      })).pipe((0, a.w)(() => super.complete(C))) : (0, t.of)(this);
    }
    prepareLinks() {
      const C = this.entry.getComposition().getLinks();
      (C.filter(x => "EHR" === x.getValue()?.type && x.getValue()?.target === M.S)[0] || this.entry.getComposition().addLink()).setValue({
        target: M.S,
        type: "EHR",
        meaning: "Корневая композиция"
      }), (C.filter(x => "SETTING" === x.getValue()?.type && x.getValue()?.target?.startsWith("setting:medical-entry"))[0] || this.entry.getComposition().addLink()).setValue({
        target: `setting:medical-entry/${this.context.getSettings()?.code}`,
        type: "SETTING",
        meaning: "Ссылка на тип медицинской записи"
      });
      const E = this.entry.getMedicalEntry().getRoot().getUid(),
        h = this.getSettings();
      h.code && ((0, N.V)(this.getComposition()) || this.entry.getComposition().getContext().addLink())?.setValue({
        target: `${h.code}/${E}`,
        type: "MedicalEntrySetting",
        meaning: "Ссылка на код медицинской записи или код секции медицинской записи"
      }), (0, I._)(this.getComposition().getLinks());
    }
    setDraftLinks(C) {
      this.clearDraftLinks(), C.forEach(v => {
        this.entry.getComposition().addLink()?.setValue({
          type: "EHR",
          meaning: "Ссылка на черновик",
          target: `ehr:draft/${v}`
        });
      });
    }
    getDraftLinks() {
      return this.entry.getComposition().getLinks().filter(C => C.getValue()?.target && C.getValue().target?.startsWith("ehr:draft/")).map(C => C.getValue().target?.replace("ehr:draft/", "") ?? "").filter(Boolean);
    }
    linkChildCompositions(C) {
      this.clearByPrefix("ehr:child"), C.forEach(v => {
        this.entry.getComposition().addLink()?.setValue({
          type: "EHR",
          meaning: "Ссылка на дочернюю композицию",
          target: `ehr:child/${v}`
        });
      });
    }
    draft(C) {
      const v = "|root:true" + (this.entry.getLifecycleState() ? "" : "|new:true");
      return this.prepareLinks(), this.entry.draft(C, v);
    }
    clearByPrefix(C) {
      this.entry.getComposition().getLinks().filter(v => "EHR" === v.getValue().type && v.getValue()?.target?.startsWith(C)).forEach(v => v.delete(!0));
    }
    clearDraftLinks() {
      this.clearByPrefix("ehr:draft");
    }
  }
});
