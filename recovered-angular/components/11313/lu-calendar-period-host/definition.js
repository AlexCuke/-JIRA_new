// Exact compiled component metadata; references belong to modules/11313.js
({
  type: B,
  selectors: [["lu-calendar-period-host"]],
  contentQueries: function (W, F, Le) {
    if (1 & W && (e.Suo(Le, A.$, 5), e.Suo(Le, d.N_, 5), e.Suo(Le, M.n, 5), e.Suo(Le, b.W, 5)), 2 & W) {
      let ke;
      e.iGM(ke = e.CRH()) && (F.dropdown = ke.first), e.iGM(ke = e.CRH()) && (F.calendar = ke.first), e.iGM(ke = e.CRH()) && (F.from = ke.first), e.iGM(ke = e.CRH()) && (F.to = ke.first);
    }
  },
  viewQuery: function (W, F) {
    if (1 & W && (e.Gf(u, 7, e.SBq), e.Gf(N.V, 7)), 2 & W) {
      let Le;
      e.iGM(Le = e.CRH()) && (F.origin = Le.first), e.iGM(Le = e.CRH()) && (F.focusCatcher = Le.first);
    }
  },
  hostVars: 2,
  hostBindings: function (W, F) {
    2 & W && e.uIk("data-lu-size", F.size)("data-lu-selection-state", F.selectionState);
  },
  inputs: {
    size: "size"
  },
  features: [e._Bn([{
    provide: O.fU,
    useExisting: R
  }, {
    provide: O.Oc,
    useValue: L.Ls.PRIMITIVE
  }, {
    provide: O.N4,
    useExisting: R
  }]), e.qOj],
  ngContentSelectors: ["*"],
  decls: 3,
  vars: 1,
  consts: [["luFocusCatcher", "", 1, "lu-calendar-period", 3, "luDropdownHandler", "focusEvent", "click", "blurEvent"], ["origin", ""]],
  template: function (W, F) {
    1 & W && (e.F$t(), e.TgZ(0, "div", 0, 1), e.NdJ("focusEvent", function () {
      return F.open();
    })("click", function () {
      return F.open();
    })("blurEvent", function () {
      return null == F.dropdown ? null : F.dropdown.close();
    }), e.Hsn(2), e.qZA()), 2 & W && e.Q6J("luDropdownHandler", F.dropdown);
  },
  dependencies: [N.V, h.i],
  styles: ["[_nghost-%COMP%]{display:inline-block;flex-shrink:0;--lu-calendar-period-from-border: var(--lu-floated-border);--lu-calendar-period-to-border: var(--lu-floated-border)}[data-lu-selection-state=start-editing][_nghost-%COMP%]{--lu-calendar-period-from-border: var(--lu-focus)}[data-lu-selection-state=end-editing][_nghost-%COMP%]{--lu-calendar-period-to-border: var(--lu-focus)}[data-lu-size=small][_nghost-%COMP%]{--lu-input-width: 144px}[data-lu-size=medium][_nghost-%COMP%]{--lu-input-width: 168px}.lu-calendar-period[_ngcontent-%COMP%]{display:inline-flex}.lu-calendar-period[_ngcontent-%COMP%]     lu-calendar-period-to .lu-label{padding-left:var(--lu-base-gutter)}.lu-calendar-period[_ngcontent-%COMP%]     .lu-label{padding-right:var(--lu-base-gutter)!important}"],
  changeDetection: 0
});
