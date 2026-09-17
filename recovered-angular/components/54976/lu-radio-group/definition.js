// Exact compiled component metadata; references belong to modules/54976.js
({
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
});
