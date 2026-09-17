// Extracted from main; webpack module 24676. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    P: () => f,
    m: () => E
  });
  var v,
    t = i(94650),
    e = i(24006),
    a = i(36895),
    m = i(97582),
    d = i(58435),
    M = i(85273),
    b = i(18200),
    A = i(77579),
    N = i(39841),
    I = i(56451),
    O = i(68675),
    L = i(35684);
  let f = v = class {
    constructor() {
      this.chips = M.Mm, this.writeValue$ = new A.x(), this.setDisabled$ = new A.x(), this.contentInit$ = new A.x(), this.onChange = () => {}, this.onTouched = () => {}, (0, N.a)([this.writeValue$, this.contentInit$]).subscribe(([x]) => {
        this.chips?.forEach(u => {
          u.writeValue(x?.includes(u.value) || !1);
        });
      }), (0, N.a)([this.setDisabled$, this.contentInit$]).subscribe(([x]) => {
        this.chips?.forEach(u => {
          u.disabled || u.setDisabledState?.(x);
        });
      });
    }
    ngAfterContentInit() {
      this.contentInit$.next(), this.chips.changes.pipe((0, O.O)(this.chips), (0, d.t)(this)).subscribe(() => {
        (0, N.a)(this.chips.map(x => x.change.pipe((0, O.O)(null)))).pipe((0, d.t)(this), (0, L.T)(1)).subscribe(() => {
          const x = this.chips.filter(u => u.checked).map(u => u.value);
          this.onChange(x);
        });
      }), (0, I.T)(this.chips.map(x => x.touched)).pipe((0, d.t)(this)).subscribe(() => this.onTouched());
    }
    writeValue(x) {
      this.writeValue$.next(x || []);
    }
    registerOnChange(x) {
      this.onChange = x;
    }
    registerOnTouched(x) {
      this.onTouched = x;
    }
    setDisabledState(x) {
      this.setDisabled$.next(x);
    }
  };
  f.ɵfac = function (x) {
    return new (x || f)();
  }, f.ɵcmp = t.Xpm({
    type: f,
    selectors: [["lu-chips-group"]],
    contentQueries: function (x, u, T) {
      if (1 & x && t.Suo(T, b.r, 4), 2 & x) {
        let R;
        t.iGM(R = t.CRH()) && (u.chips = R);
      }
    },
    features: [t._Bn([{
      provide: e.JU,
      useExisting: (0, t.Gpc)(() => v),
      multi: !0
    }])],
    ngContentSelectors: ["*"],
    decls: 1,
    vars: 0,
    template: function (x, u) {
      1 & x && (t.F$t(), t.Hsn(0));
    },
    encapsulation: 2,
    changeDetection: 0
  }), f = v = (0, m.gn)([(0, d.c)()], f);
  let E = (() => {
    class h {}
    return h.ɵfac = function (u) {
      return new (u || h)();
    }, h.ɵmod = t.oAB({
      type: h
    }), h.ɵinj = t.cJS({
      imports: [a.ez, e.u5]
    }), h;
  })();
});
