// Extracted from main; webpack module 73021. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    gz: () => N,
    ir: () => I,
    ph: () => A,
    rw: () => b,
    xe: () => M
  });
  var t = i(97582),
    e = i(74523),
    a = i(33981),
    m = i(89188),
    d = i(39453);
  class M {
    get fullName() {
      return `${this.lastName || ""} ${this.firstName || ""} ${this.secondName || ""}`;
    }
    get gender() {
      return 1 == +this.genderCode ? "М" : "Ж";
    }
    get age() {
      return (0, m.x9)(this.birthDate);
    }
    get dativeCaseShortName() {
      return `\n    ${(0, d.$l)(this.lastName)}\n    ${this.firstName?.substring(0, 1) || ""}.\n    ${this.secondName?.substring(0, 1) || ""}.\n    `;
    }
  }
  (0, t.gn)([(0, e.w)((0, d.mF)(), {
    toClassOnly: !0
  }), (0, e.w)((0, d.TB)(), {
    toPlainOnly: !0
  })], M.prototype, "birthDate", void 0), (0, t.gn)([(0, e.w)((0, d.mF)(), {
    toClassOnly: !0
  })], M.prototype, "arrivalTime", void 0), (0, t.gn)([(0, a.o)({
    toPlainOnly: !0
  })], M.prototype, "fullName", null), (0, t.gn)([(0, a.o)({
    toPlainOnly: !0
  })], M.prototype, "gender", null), (0, t.gn)([(0, a.o)({
    toPlainOnly: !0
  })], M.prototype, "age", null), (0, t.gn)([(0, a.o)({
    toPlainOnly: !0
  })], M.prototype, "dativeCaseShortName", null);
  class b {}
  class A {}
  class N {
    get resolvedType() {
      return this.catheterType || this.CateterType || "";
    }
  }
  (0, t.gn)([(0, e.w)((0, d.mF)(), {
    toClassOnly: !0
  })], N.prototype, "protocoldate", void 0), (0, t.gn)([(0, e.w)((0, d.mF)(), {
    toClassOnly: !0
  })], N.prototype, "lastTreatment", void 0);
  class I {}
});
