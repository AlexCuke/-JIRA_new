// Extracted from main; webpack module 94253. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    F6: () => T,
    G_: () => W
  });
  var t = i(97582),
    e = i(74523),
    a = i(43429),
    m = i(33981),
    d = i(89188),
    M = i(34874),
    b = i(73021);
  class A {}
  (0, t.gn)([(0, e.w)((0, M.mF)(), {
    toClassOnly: !0
  })], A.prototype, "timeCommitted", void 0);
  class N {}
  (0, t.gn)([(0, e.w)(({
    value: F
  }) => F && new Date(F), {
    toClassOnly: !0
  })], N.prototype, "updated", void 0), (0, t.gn)([(0, e.w)((0, M.mF)(), {
    toClassOnly: !0
  })], N.prototype, "initialPatientExaminationChecklistNurseTimeCommitted", void 0), (0, t.gn)([(0, e.w)((0, M.mF)(), {
    toClassOnly: !0
  })], N.prototype, "patientScalesMorseFallScaleTimeCommitted", void 0);
  class I {}
  class O {}
  class L {}
  class C {}
  (0, t.gn)([(0, e.w)((0, M.mF)(), {
    toClassOnly: !0
  })], C.prototype, "timeCommitted", void 0);
  class v {}
  (0, t.gn)([(0, e.w)((0, M.mF)(), {
    toClassOnly: !0
  })], v.prototype, "timeCommitted", void 0);
  class f {}
  (0, t.gn)([(0, e.w)((0, M.mF)(), {
    toClassOnly: !0
  })], f.prototype, "timeCommitted", void 0), (0, t.gn)([(0, e.w)((0, M.mF)(), {
    toClassOnly: !0
  })], f.prototype, "scaleMorseTime", void 0);
  class E {}
  class h {}
  (0, t.gn)([(0, e.w)((0, M.mF)(), {
    toClassOnly: !0
  })], h.prototype, "timeCommitted", void 0);
  class x {}
  class u {}
  class T {}
  (0, t.gn)([(0, a.D)(() => b.xe)], T.prototype, "careCase", void 0), (0, t.gn)([(0, a.D)(() => b.rw)], T.prototype, "hospitalCard", void 0), (0, t.gn)([(0, a.D)(() => B)], T.prototype, "hospitalizedPatient", void 0), (0, t.gn)([(0, a.D)(() => b.ph)], T.prototype, "patientMovement", void 0), (0, t.gn)([(0, a.D)(() => A)], T.prototype, "form004", void 0), (0, t.gn)([(0, a.D)(() => I)], T.prototype, "consultationAssignment", void 0), (0, t.gn)([(0, a.D)(() => O)], T.prototype, "instrumentalAssignment", void 0), (0, t.gn)([(0, a.D)(() => L)], T.prototype, "laboratoryAssignment", void 0), (0, t.gn)([(0, a.D)(() => C)], T.prototype, "news2", void 0), (0, t.gn)([(0, a.D)(() => v)], T.prototype, "initialChecklist", void 0), (0, t.gn)([(0, a.D)(() => f)], T.prototype, "scales", void 0), (0, t.gn)([(0, a.D)(() => E)], T.prototype, "anthropometricData", void 0), (0, t.gn)([(0, a.D)(() => h)], T.prototype, "triageUrgency", void 0), (0, t.gn)([(0, a.D)(() => x)], T.prototype, "stomas", void 0), (0, t.gn)([(0, a.D)(() => u)], T.prototype, "procedureAssignment", void 0), (0, t.gn)([(0, a.D)(() => T)], class R {}.prototype, "data", void 0);
  class B {}
  class y {
    get fullName() {
      return `${this.name?.lastName || ""} ${this.name?.firstName || ""} ${this.name?.secondName || ""}`;
    }
    get age() {
      return (0, d.x9)(this.birthDate);
    }
    get gender() {
      return "1" === this.genderCode ? "М" : "Ж";
    }
  }
  (0, t.gn)([(0, e.w)((0, M.mF)(), {
    toClassOnly: !0
  }), (0, e.w)((0, M.TB)(), {
    toPlainOnly: !0
  })], y.prototype, "birthDate", void 0), (0, t.gn)([(0, m.o)({
    toPlainOnly: !0
  })], y.prototype, "fullName", null), (0, t.gn)([(0, m.o)({
    toPlainOnly: !0
  })], y.prototype, "age", null), (0, t.gn)([(0, m.o)({
    toPlainOnly: !0
  })], y.prototype, "gender", null);
  const W = [{
    id: 1,
    name: "Может идти"
  }, {
    id: 2,
    name: "Сидя"
  }, {
    id: 3,
    name: "Лежа"
  }];
});
