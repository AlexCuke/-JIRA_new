// Extracted from main; webpack module 10968. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    b: () => A
  });
  var t = i(27481),
    e = i(94650),
    a = i(36895),
    m = i(93278),
    d = i(70823),
    M = i(15091);
  function b(I, O) {
    if (1 & I && e._UZ(0, "lu-svg-icon", 2), 2 & I) {
      const L = e.oxw();
      e.Q6J("icon", L.icon)("size", 24);
    }
  }
  const N = class {
    constructor() {
      this.age = 0, this.icon = "";
    }
    ngOnInit() {
      this.age = (0, t.K)(this.data.data.careCase.birthDate), this.icon = 1 == this.data.data.careCase.genderCode ? "male2" : "female2";
    }
  };
  let A = N;
  N.ɵfac = function (L) {
    return new (L || N)();
  }, N.ɵcmp = e.Xpm({
    type: N,
    selectors: [["gender-age-cell"]],
    inputs: {
      data: "data"
    },
    decls: 5,
    vars: 8,
    consts: [["panelClass", "gender-age-tooltip", 1, "gender-age-cell", 3, "luTooltip", "positions", "borderOffset"], [3, "icon", "size", 4, "ngIf"], [3, "icon", "size"]],
    template: function (L, C) {
      1 & L && (e.TgZ(0, "div", 0), e.ALo(1, "luDateFormatter"), e.YNc(2, b, 1, 2, "lu-svg-icon", 1), e.TgZ(3, "p"), e._uU(4), e.qZA()()), 2 & L && (e.Q6J("luTooltip", e.xi3(1, 5, C.data.data.careCase.birthDate, "dd.MM.yyyy"))("positions", "top-left")("borderOffset", -4), e.xp6(2), e.Q6J("ngIf", C.icon), e.xp6(2), e.Oqu(C.age));
    },
    dependencies: [a.O5, m.q, d.$, M.M],
    styles: [".gender-age-cell[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px;align-items:center}  .gender-age-tooltip .lu-overlay-content{border-radius:4px}"]
  });
});
