// Extracted from main; webpack module 98129. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    U: () => d
  });
  var t = i(54004),
    e = i(70262),
    a = i(39646),
    m = i(63900);
  class d {
    constructor(b, A) {
      this.type = b, this.api = A;
    }
    getSettingCode() {
      return this.type;
    }
    getSettings(b) {
      return this.api.getSettings(this.type, b).pipe((0, t.U)(A => [...A]));
    }
    getSetting(b) {
      return this.api.getSetting(this.type, b);
    }
    setSetting(b, A) {
      return this.getSetting(b).pipe((0, e.K)(() => (0, a.of)(void 0))).pipe((0, m.w)(N => N ? this.api.updateSetting(this.type, b, A) : this.api.createSetting(this.type, b, A)));
    }
  }
});
