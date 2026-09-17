// Extracted from main; webpack module 18200. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    U: () => E,
    r: () => f
  });
  var t = i(94650),
    e = i(36895),
    a = i(24006),
    m = i(97582),
    d = i(58435),
    M = i(78372),
    b = i(33459),
    A = i(95029),
    N = i(28369),
    I = i(42302);
  const O = ["input"];
  function L(h, x) {
    if (1 & h) {
      const u = t.EpF();
      t.TgZ(0, "input", 2, 3), t.NdJ("click", function (R) {
        return t.CHM(u), t.oxw().onInputClick(), t.KtG(R.stopPropagation());
      })("change", function (R) {
        return R.stopPropagation();
      }), t.qZA();
    }
    if (2 & h) {
      const u = t.oxw();
      t.Q6J("disabled", u.isDisabled)("type", u.type)("name", u.name)("value", u.value)("checked", u.checked);
    }
  }
  var v;
  let f = v = class {
    get isDisabled() {
      return this.disabled || this.formControlDisabled;
    }
    constructor(x, u, T, R, B, y, j) {
      this.changeDetector = x, this.ngZone = u, this.elementRef = j, this.change = new t.vpe(), this.touched = new t.vpe(), this.click = new t.vpe(), this.type = "checkbox", this.uncheckable = !1, this.preventDeselect = !1, this.name = "lu-chip-group", this.disabled = !1, this.formControlDisabled = !1, this.checked = !1, this.value = "", this.backgroundTheme = "white", this.onChange = () => {}, this.onTouched = () => {}, this.elementRef?.nativeElement?.setAttribute("data-test-role", "clickableElement"), this.name = T?.name, this.type = B?.type, this.uncheckable = !!y, this.backgroundTheme = R?.theme, B && B.typeChange.pipe((0, d.t)(this)).subscribe(W => {
        this.type = W, this.changeDetector.detectChanges();
      }), this.ngZone.runOutsideAngular(() => {
        this.ngZone.onStable.pipe((0, d.t)(this), (0, M.b)(0)).subscribe(() => {
          this.input && this.input.nativeElement.checked !== this.checked && this.ngZone.run(() => {
            this.input && (this.checked = this.input.nativeElement.checked, this.changeDetector.detectChanges(), this.onChange(this.checked), this.change.emit(this.checked));
          });
        });
      });
    }
    registerOnChange(x) {
      this.onChange = x;
    }
    registerOnTouched(x) {
      this.onTouched = x;
    }
    setDisabledState(x) {
      this.formControlDisabled = x, this.changeDetector.detectChanges();
    }
    onClick() {
      this.click.emit();
    }
    onInputClick() {
      "radio" === this.type && !this.uncheckable || (!this.type || "checkbox" === this.type) && this.uncheckable && this.checked || this.preventDeselect && this.checked || (this.checked = !this.checked, this.changeDetector.detectChanges(), this.onChange(this.checked), this.change.emit(this.checked), this.onTouched(), this.touched.emit());
    }
    writeValue(x) {
      this.checked = x, this.changeDetector.detectChanges();
    }
  };
  f.ɵfac = function (x) {
    return new (x || f)(t.Y36(t.sBO), t.Y36(t.R0b), t.Y36(b.P, 8), t.Y36(A.A, 8), t.Y36(N.b, 8), t.Y36(I.j, 8), t.Y36(t.SBq));
  }, f.ɵcmp = t.Xpm({
    type: f,
    selectors: [["lu-chip"]],
    viewQuery: function (x, u) {
      if (1 & x && t.Gf(O, 5, t.SBq), 2 & x) {
        let T;
        t.iGM(T = t.CRH()) && (u.input = T.first);
      }
    },
    hostVars: 1,
    hostBindings: function (x, u) {
      2 & x && t.uIk("lu-background-theme", u.backgroundTheme);
    },
    inputs: {
      type: "type",
      uncheckable: "uncheckable",
      preventDeselect: "preventDeselect",
      name: "name",
      disabled: "disabled",
      checked: "checked",
      value: "value",
      backgroundTheme: "backgroundTheme"
    },
    outputs: {
      change: "change",
      touched: "touched",
      click: "click"
    },
    features: [t._Bn([{
      provide: a.JU,
      useExisting: (0, t.Gpc)(() => v),
      multi: !0
    }])],
    ngContentSelectors: ["*"],
    decls: 3,
    vars: 5,
    consts: [["data-test-role", "title", 1, "lu-chip", 3, "click"], ["class", "lu-chip-input", "data-test-role", "input", 3, "disabled", "type", "name", "value", "checked", "click", "change", 4, "ngIf"], ["data-test-role", "input", 1, "lu-chip-input", 3, "disabled", "type", "name", "value", "checked", "click", "change"], ["input", ""]],
    template: function (x, u) {
      1 & x && (t.F$t(), t.TgZ(0, "label", 0), t.NdJ("click", function (R) {
        return u.onClick(), R.stopPropagation();
      }), t.Hsn(1), t.YNc(2, L, 2, 5, "input", 1), t.qZA()), 2 & x && (t.ekj("checked", u.checked)("disabled", u.isDisabled), t.xp6(2), t.Q6J("ngIf", "button" !== u.type));
    },
    dependencies: [e.O5],
    styles: ["[lu-background-theme=gray][_nghost-%COMP%]{--lu-chip-background: #FFFFFF;--lu-chip-background-hover: var(--lu-chip-background);--lu-chip-background-active: var(--lu-chip-background);--lu-chip-background-disabled: rgb(255, 255, 255);--lu-chip-color-hover: #1D8585;--lu-chip-color-active: #157171}[_nghost-%COMP%]{display:flex;min-width:40px;min-height:32px;max-height:64px;-webkit-appearance:none;margin-bottom:auto;word-break:break-word}.lu-chip[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;height:100%;cursor:pointer;user-select:none;padding:4px 12px;background:var(--lu-chip-background);border-radius:16px;gap:8px;color:var(--lu-chip-color)}.lu-chip[_ngcontent-%COMP%]     lu-svg-icon{vertical-align:middle}.lu-chip[_ngcontent-%COMP%]:hover{background:var(--lu-chip-background-hover);color:var(--lu-chip-color-hover)}.lu-chip[_ngcontent-%COMP%]:active{background:var(--lu-chip-background-active);color:var(--lu-chip-color-active)}.lu-chip.checked[_ngcontent-%COMP%]{background:var(--lu-chip-background-checked);color:var(--lu-chip-color-checked)}.lu-chip.disabled[_ngcontent-%COMP%]{background:var(--lu-chip-background-disabled);color:var(--lu-chip-color-disabled);cursor:auto;--lu-svg-icon-color: var(--lu-chip-icon-color-disabled)}.lu-chip-input[_ngcontent-%COMP%]{display:none}"],
    changeDetection: 0
  }), f = v = (0, m.gn)([(0, d.c)()], f);
  let E = (() => {
    class h {}
    return h.ɵfac = function (u) {
      return new (u || h)();
    }, h.ɵmod = t.oAB({
      type: h
    }), h.ɵinj = t.cJS({
      imports: [e.ez, a.u5]
    }), h;
  })();
});
