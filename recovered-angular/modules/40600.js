// Extracted from main; webpack module 40600. Factory, not an ES module.
((Ae, V, i) => {
  var F;
  i.d(V, {
    j: () => W
  });
  var t = i(97582),
    e = i(94650),
    a = i(36895),
    m = i(9073),
    d = i(85623),
    M = i(13700),
    b = i(52958),
    A = i(43150),
    N = i(62804),
    I = i(23062),
    O = i(93278),
    L = i(76500),
    C = i(6676),
    v = i(24006),
    f = i(7047),
    E = i(20891),
    h = i(5264),
    x = i(39453),
    u = i(96408),
    T = i(50494);
  function R(Le, ke) {
    1 & Le && (e.TgZ(0, "span"), e._uU(1, "*"), e.qZA());
  }
  function B(Le, ke) {
    if (1 & Le && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & Le) {
      const J = ke.$implicit;
      e.xp6(1), e.Oqu(J);
    }
  }
  function y(Le, ke) {
    if (1 & Le && (e.TgZ(0, "lu-data-list", 11), e.YNc(1, B, 2, 1, "ng-template", null, 12, e.W1O), e.qZA()), 2 & Le) {
      const J = e.MAs(2),
        fe = e.oxw();
      e.Q6J("items", fe.localizationPlace)("itemContent", J);
    }
  }
  function j(Le, ke) {
    1 & Le && (e.TgZ(0, "span"), e._uU(1, "*"), e.qZA());
  }
  let W = ((F = class {
    constructor() {
      this.isRequired = !0, this.peripheralFormSubmitted = new e.vpe(), this.peripheralCatheterFormChanges = new e.vpe(), this.fb = (0, e.f3M)(v.qu), this.cdr = (0, e.f3M)(e.sBO), this.peripheralCatheterForm = this._initForm(), this.localizationPlace = f.pC.map(ke => ke.name), this.getControl = x.YV;
    }
    ngOnChanges(ke) {
      this.isRequired || ["catheterLocus", "peripheralCatheterUnit", "peripheralCatheterSize"].forEach(J => {
        this.peripheralCatheterForm.get(J).clearValidators(), this.peripheralCatheterForm.get(J).updateValueAndValidity();
      });
    }
    ngAfterViewInit() {
      this.peripheralCatheterForm.valueChanges.pipe((0, h.t)(this)).subscribe(ke => {
        this.peripheralFormSubmitted.emit({
          isValid: this.peripheralCatheterForm.valid,
          data: ke
        }), this.cdr.markForCheck(), this.peripheralCatheterFormChanges.emit((0, T.zb)((0, T.yE)(u.Dz, ke)));
      });
    }
    _initForm() {
      return this.fb.group({
        catheterLocus: [null, [v.kI.required]],
        peripheralCatheterSize: [null, [v.kI.required]],
        peripheralCatheterUnit: ["G", [v.kI.required]]
      });
    }
  }).ɵfac = function (J) {
    return new (J || F)();
  }, F.ɵcmp = e.Xpm({
    type: F,
    selectors: [["peripheral-catheter"]],
    inputs: {
      isRequired: "isRequired"
    },
    outputs: {
      peripheralFormSubmitted: "peripheralFormSubmitted",
      peripheralCatheterFormChanges: "peripheralCatheterFormChanges"
    },
    standalone: !0,
    features: [e.TTD, e.jDz],
    decls: 19,
    vars: 4,
    consts: [[3, "formGroup"], [1, "locus_desc"], [4, "ngIf"], ["type", "autocomplete", "formControlName", "catheterLocus", "panelClass", "locus-custom-combobox", 1, "locus", 3, "positions"], [3, "items", "itemContent", 4, "luData"], [1, "row"], [1, "row_desc"], [1, "cat-parameters"], [1, "field-size"], ["luInput", "", "luInputNumber", "", "formControlName", "peripheralCatheterSize"], ["readonly", "", "type", "text", "luInput", "", "luInputString", "", "formControlName", "peripheralCatheterUnit"], [3, "items", "itemContent"], ["templateCatheter", ""]],
    template: function (J, fe) {
      1 & J && (e.TgZ(0, "form", 0)(1, "span", 1), e._uU(2, "Локус "), e.YNc(3, R, 2, 0, "span", 2), e.qZA(), e.TgZ(4, "lu-combobox", 3), e.YNc(5, y, 3, 2, "lu-data-list", 4), e.qZA(), e.TgZ(6, "div", 5)(7, "span", 6), e._uU(8, "Параметры катетера"), e.YNc(9, j, 2, 0, "span", 2), e.qZA(), e.TgZ(10, "div", 7)(11, "div", 8)(12, "label")(13, "lu-input-wrapper"), e._UZ(14, "input", 9), e.qZA()()(), e.TgZ(15, "div", 8)(16, "label")(17, "lu-input-wrapper"), e._UZ(18, "input", 10), e.qZA()()()()()()), 2 & J && (e.Q6J("formGroup", fe.peripheralCatheterForm), e.xp6(3), e.Q6J("ngIf", fe.isRequired), e.xp6(1), e.Q6J("positions", "bottom-center"), e.xp6(5), e.Q6J("ngIf", fe.isRequired));
    },
    dependencies: [a.ez, a.O5, m.W1, d.c, C.n, C.m, M.f, M.L, b.R, b.l, A.c, A.H, N.LA, N.HY, I.Ki, O.h, v.UX, v._Y, v.Fj, v.JJ, v.JL, v.sg, v.u, E.X, E.l, L.u, L.g],
    styles: [".locus[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:16px;width:100%}.row_desc[_ngcontent-%COMP%], .locus_desc[_ngcontent-%COMP%]{display:block;line-height:24px}  lu-data-list[data-test-role=optionList]{height:158px!important}  lu-data-list[data-test-role=optionList]::-webkit-scrollbar-thumb{border:4px solid #B3B3B3!important}  lu-data-list[data-test-role=optionList]::-webkit-scrollbar-track{background-color:#b3b3b3!important}.cat-parameters[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;margin-top:8px;width:168px}.field-size[_ngcontent-%COMP%]{width:80px}"]
  }), F);
  W = (0, t.gn)([(0, h.c)()], W);
});
