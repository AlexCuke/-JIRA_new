// Exact compiled component metadata; references belong to modules/59250.js
({
  type: x,
  selectors: [["lu-dropdown"]],
  contentQueries: function (T, R, B) {
    if (1 & T && a.Suo(B, O.o, 5, a.Rgc), 2 & T) {
      let y;
      a.iGM(y = a.CRH()) && (R.overlayContent = y.first);
    }
  },
  hostVars: 1,
  hostBindings: function (T, R) {
    1 & T && a.NdJ("focus", function () {
      return R.focus();
    }), 2 & T && a.uIk("data-lu-dropdown-id", R.dropdownId);
  },
  inputs: {
    color: "color",
    content: "content",
    origin: "origin",
    closeIfOutsideClick: "closeIfOutsideClick",
    closeIfInnerClick: "closeIfInnerClick",
    closeOnNavigation: "closeOnNavigation",
    notFocusClosestElement: "notFocusClosestElement",
    withArrow: "withArrow",
    borderOffset: "borderOffset",
    panelClass: "panelClass",
    contactBorder: "contactBorder",
    positions: "positions",
    minHeight: "minHeight",
    maxHeight: "maxHeight",
    height: "height",
    minWidth: "minWidth",
    maxWidth: "maxWidth",
    width: "width"
  },
  outputs: {
    beforeOpen: "beforeOpen",
    afterOpen: "afterOpen",
    beforeClose: "beforeClose",
    afterClose: "afterClose"
  },
  features: [a._Bn([b.c]), a.TTD],
  decls: 0,
  vars: 0,
  template: function (T, R) {},
  styles: [".lu-dropdown-color-dark{--lu-overlay-background: var(--lu-black-80);--lu-overlay-border: var(--lu-black-80);color:var(--lu-white)}"],
  changeDetection: 0
});
