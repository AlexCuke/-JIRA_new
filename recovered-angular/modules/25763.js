// Extracted from main; webpack module 25763. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    fd: () => C,
    mQ: () => v
  });
  var t = i(97582),
    e = i(94650),
    a = i(24006),
    m = i(37933),
    d = i(44348),
    M = i(99246),
    b = i(46757),
    A = i(36895);
  const N = [[["", "luCheckboxGroupHeader", ""]], "*"];
  var O;
  let C = O = class extends d.HY {
    constructor(E, h) {
      super(E, void 0, h), this.changeDetectorRef = E, this.ngControl = h, this.orientation = "vertical", this.itemsOrientation = "vertical";
    }
  };
  C.ɵfac = function (E) {
    return new (E || C)(e.Y36(e.sBO), e.Y36(a.a5, 10));
  }, C.ɵcmp = e.Xpm({
    type: C,
    selectors: [["lu-checkbox-group"]],
    hostVars: 2,
    hostBindings: function (E, h) {
      2 & E && e.uIk("data-lu-orientation", h.orientation)("data-lu-items-orientation", h.itemsOrientation);
    },
    inputs: {
      orientation: "orientation",
      itemsOrientation: "itemsOrientation"
    },
    features: [e._Bn([{
      provide: M.fU,
      useExisting: O
    }, {
      provide: M.Oc,
      useValue: b.Ls.ARRAY
    }, {
      provide: d.Vg,
      useExisting: O
    }, {
      provide: M.od,
      useValue: b.kx.CHECKBOX
    }]), e.qOj],
    ngContentSelectors: ["[luCheckboxGroupHeader]", "*"],
    decls: 4,
    vars: 0,
    consts: [[1, "lu-checkbox-group-header"], [1, "lu-checkbox-group"]],
    template: function (E, h) {
      1 & E && (e.F$t(N), e.TgZ(0, "div", 0), e.Hsn(1), e.qZA(), e.TgZ(2, "div", 1), e.Hsn(3, 1), e.qZA());
    },
    styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}[data-lu-orientation=horizontal][_nghost-%COMP%]{flex-direction:row}[data-lu-orientation=horizontal][_nghost-%COMP%]   .lu-checkbox-group-header[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) * 3) 0 0}[data-lu-items-orientation=horizontal][_nghost-%COMP%]   .lu-checkbox-group[_ngcontent-%COMP%]{flex-direction:row;--lu-list-element-vertical-space: 0;--lu-list-element-horizontal-space: var(--lu-base-gutter)}.lu-checkbox-group-header[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);margin:0 0 var(--lu-base-gutter) 0}.lu-checkbox-group-header[_ngcontent-%COMP%]:empty{display:none}.lu-checkbox-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;--lu-list-element-vertical-space: var(--lu-base-gutter)}"],
    changeDetection: 0
  }), C = O = (0, t.gn)([(0, m.c)()], C);
  let v = (() => {
    class f {}
    return f.ɵfac = function (h) {
      return new (h || f)();
    }, f.ɵmod = e.oAB({
      type: f
    }), f.ɵinj = e.cJS({
      imports: [A.ez]
    }), f;
  })();
});
