// Extracted from main; webpack module 54976. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    K2: () => v,
    y8: () => f
  });
  var t = i(97582),
    e = i(94650),
    a = i(24006),
    m = i(37933),
    d = i(44348),
    M = i(85273),
    b = i(99246),
    A = i(46757),
    N = i(36895);
  const I = [[["", "luRadioGroupHeader", ""]], "*"];
  var L;
  let v = L = class extends d.zH {
    constructor(h, x) {
      super(h, void 0, x), this.changeDetectorRef = h, this.ngControl = x, this.orientation = "vertical", this.itemsOrientation = "vertical", this.compareFn = M.kX;
    }
  };
  v.ɵfac = function (h) {
    return new (h || v)(e.Y36(e.sBO), e.Y36(a.a5, 10));
  }, v.ɵcmp = e.Xpm({
    type: v,
    selectors: [["lu-radio-group"]],
    hostVars: 2,
    hostBindings: function (h, x) {
      2 & h && e.uIk("data-lu-orientation", x.orientation)("data-lu-items-orientation", x.itemsOrientation);
    },
    inputs: {
      orientation: "orientation",
      itemsOrientation: "itemsOrientation",
      compareFn: "compareFn"
    },
    features: [e._Bn([{
      provide: b.fU,
      useExisting: L
    }, {
      provide: b.Oc,
      useValue: A.Ls.PRIMITIVE
    }, {
      provide: b.od,
      useValue: A.kx.RADIO_BUTTON
    }, {
      provide: d.Vg,
      useExisting: L
    }]), e.qOj],
    ngContentSelectors: ["[luRadioGroupHeader]", "*"],
    decls: 4,
    vars: 0,
    consts: [[1, "lu-radio-group-header"], [1, "lu-radio-group"]],
    template: function (h, x) {
      1 & h && (e.F$t(I), e.TgZ(0, "div", 0), e.Hsn(1), e.qZA(), e.TgZ(2, "div", 1), e.Hsn(3, 1), e.qZA());
    },
    styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}[data-lu-orientation=horizontal][_nghost-%COMP%]{flex-direction:row}[data-lu-orientation=horizontal][_nghost-%COMP%]   .lu-radio-group-header[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) * 3) 0 0}[data-lu-items-orientation=horizontal][_nghost-%COMP%]   .lu-radio-group[_ngcontent-%COMP%]{flex-direction:row;--lu-list-element-vertical-space: 0;--lu-list-element-horizontal-space: var(--lu-base-gutter)}.lu-radio-group-header[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);margin:0 0 var(--lu-base-gutter) 0}.lu-radio-group-header[_ngcontent-%COMP%]:empty{display:none}.lu-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;--lu-list-element-vertical-space: var(--lu-base-gutter)}"],
    changeDetection: 0
  }), v = L = (0, t.gn)([(0, m.c)()], v);
  let f = (() => {
    class E {}
    return E.ɵfac = function (x) {
      return new (x || E)();
    }, E.ɵmod = e.oAB({
      type: E
    }), E.ɵinj = e.cJS({
      imports: [N.ez]
    }), E;
  })();
});
