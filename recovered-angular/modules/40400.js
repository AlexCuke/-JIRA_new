// Extracted from main; webpack module 40400. Factory, not an ES module.
((Ae, V, i) => {
  var W;
  i.d(V, {
    q: () => j
  });
  var t = i(97582),
    e = i(94650),
    a = i(36895),
    m = i(9073),
    d = i(13700),
    M = i(62804),
    b = i(23062),
    A = i(93278),
    N = i(76500),
    I = i(6676),
    O = i(24006),
    L = i(5416),
    C = i(20891),
    v = i(54976),
    f = i(47313),
    E = i(7047),
    h = i(39453),
    x = i(5264);
  function u(F, Le) {
    1 & F && (e.TgZ(0, "span"), e._uU(1, "*"), e.qZA());
  }
  function T(F, Le) {
    if (1 & F) {
      const ke = e.EpF();
      e.TgZ(0, "button", 7), e.NdJ("click", function () {
        const ye = e.CHM(ke).$implicit,
          ae = e.oxw();
        return e.KtG(ae.getControl(ae.urinaryCatheterForm, "urinaryCatheterType").patchValue(ye));
      }), e._uU(1), e.qZA();
    }
    if (2 & F) {
      const ke = Le.$implicit;
      e.Q6J("value", ke), e.xp6(1), e.hij(" ", ke, " ");
    }
  }
  function R(F, Le) {
    1 & F && (e.TgZ(0, "span"), e._uU(1, "*"), e.qZA());
  }
  function B(F, Le) {
    if (1 & F && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & F) {
      const ke = Le.$implicit;
      e.xp6(1), e.Oqu(ke);
    }
  }
  function y(F, Le) {
    if (1 & F && (e.TgZ(0, "lu-data-list", 8), e.YNc(1, B, 2, 1, "ng-template", null, 9, e.W1O), e.qZA()), 2 & F) {
      const ke = e.MAs(2),
        J = e.oxw();
      e.Q6J("items", J.urinaryCatheterSizes)("itemContent", ke);
    }
  }
  let j = ((W = class {
    constructor() {
      this.isRequired = !0, this.urinaryFormSubmitted = new e.vpe(), this.fb = (0, e.f3M)(O.qu), this.urinaryCatheterForm = this._initForm(), this.urinaryCatheterTypes = E.j6, this.urinaryCatheterSizes = E.Ur, this.getControl = h.YV;
    }
    ngOnInit() {}
    ngOnChanges(Le) {
      this.isRequired || ["urinaryCatheterType", "urinaryCatheterSize"].forEach(ke => {
        this.urinaryCatheterForm.get(ke).clearValidators(), this.urinaryCatheterForm.get(ke).updateValueAndValidity();
      });
    }
    ngAfterViewInit() {
      this.urinaryCatheterForm.valueChanges.pipe((0, x.t)(this)).subscribe(Le => {
        this.urinaryFormSubmitted.emit({
          isValid: this.urinaryCatheterForm.valid,
          data: Le
        });
      });
    }
    _initForm() {
      return this.fb.group({
        urinaryCatheterType: [null, [O.kI.required]],
        urinaryCatheterSize: [null, [O.kI.required]]
      });
    }
  }).ɵfac = function (ke) {
    return new (ke || W)();
  }, W.ɵcmp = e.Xpm({
    type: W,
    selectors: [["urinary-catheter"]],
    inputs: {
      isRequired: "isRequired"
    },
    outputs: {
      urinaryFormSubmitted: "urinaryFormSubmitted"
    },
    standalone: !0,
    features: [e.TTD, e.jDz],
    decls: 13,
    vars: 4,
    consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "urinaryCatheterType", 1, "catheter-type"], ["lu-segment-button", "", "luSegment", "", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "row"], ["formControlName", "urinaryCatheterSize", 1, "catheter-size"], [3, "items", "itemContent", 4, "luData"], ["lu-segment-button", "", "luSegment", "", 3, "value", "click"], [3, "items", "itemContent"], ["templateCatheter", ""]],
    template: function (ke, J) {
      1 & ke && (e.TgZ(0, "form", 0)(1, "span"), e._uU(2, "Тип катетера "), e.YNc(3, u, 2, 0, "span", 1), e.qZA(), e.TgZ(4, "lu-radio-group", 2)(5, "lu-button-group"), e.YNc(6, T, 2, 2, "button", 3), e.qZA()(), e.TgZ(7, "div", 4)(8, "span"), e._uU(9, "Размер катетера "), e.YNc(10, R, 2, 0, "span", 1), e.qZA(), e.TgZ(11, "lu-combobox", 5), e.YNc(12, y, 3, 2, "lu-data-list", 6), e.qZA()()()), 2 & ke && (e.Q6J("formGroup", J.urinaryCatheterForm), e.xp6(3), e.Q6J("ngIf", J.isRequired), e.xp6(3), e.Q6J("ngForOf", J.urinaryCatheterTypes), e.xp6(4), e.Q6J("ngIf", J.isRequired));
    },
    dependencies: [a.ez, a.sg, a.O5, m.W1, m.mc, L.F, L.w, I.n, I.m, d.f, M.LA, C.X, C.l, b.Ki, A.h, O.u5, O._Y, O.JJ, O.JL, O.UX, O.sg, O.u, v.y8, v.K2, N.u, N.g, f.P, f.X],
    styles: [".catheter-type[_ngcontent-%COMP%]{height:38px;margin-top:8px;margin-bottom:16px}.catheter-size[_ngcontent-%COMP%]{margin-top:8px;width:126px}.catheter-size[_ngcontent-%COMP%]     .lu-chevron-button{transform:scaleY(-1)}"]
  }), W);
  j = (0, t.gn)([(0, x.c)()], j);
});
