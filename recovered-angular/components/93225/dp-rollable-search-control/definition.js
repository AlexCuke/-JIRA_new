// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-rollable-search-control"]],
  viewQuery: function (Pt, Ki) {
    if (1 & Pt && t.Gf(jt, 5), 2 & Pt) {
      let Nr;
      t.iGM(Nr = t.CRH()) && (Ki.searchInput = Nr.first);
    }
  },
  inputs: {
    widget: "widget",
    dropdownContent: "dropdownContent",
    formControl: "formControl"
  },
  decls: 4,
  vars: 3,
  consts: [[1, "search-content"], [1, "search-content-icon"], ["luInputWrapperBefore", "", 1, "search-icon", 3, "icon", "size", "click"], ["class", "search-field", 3, "ngStyle", 4, "ngIf"], [1, "search-field", 3, "ngStyle"], ["searchField", ""], ["luInput", "", "luInputString", "", 3, "placeholder", "formControl"], ["searchInput", ""], ["luInputWrapperAfter", "", 1, "search-icon", 3, "ngClass", "icon", "size", "click"], [4, "ngIf"], [1, "search-field-dropdown"], [4, "ngTemplateOutlet"]],
  template: function (Pt, Ki) {
    1 & Pt && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "lu-svg-icon", 2), t.NdJ("click", function () {
      return Ki.onClickToggleShowField();
    }), t.qZA()(), t.YNc(3, Gn, 7, 12, "div", 3), t.qZA()), 2 & Pt && (t.xp6(2), t.Q6J("icon", Ki.getIcon)("size", 24), t.xp6(1), t.Q6J("ngIf", Ki.showInputField));
  },
  dependencies: [qe.mk, qe.O5, qe.tP, qe.PC, ke.q, R.HY, R.kH, R.Fj, F.L, Y.H, a.Fj, a.JJ, a.oH],
  styles: [".search-content[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;z-index:1}.search-content-icon[_ngcontent-%COMP%]{height:24px;--lu-svg-icon-color: var(--lu-primary)}.search-field[_ngcontent-%COMP%]{position:absolute;left:calc(var(--lu-base-gutter) * 4.5);z-index:1;background-color:#fff}.search-field[_ngcontent-%COMP%]:after{position:absolute;right:-70px;top:0;content:\"\";display:block;height:100%;width:70px;background:linear-gradient(to right,white 20%,transparent)}.search-field-dropdown[_ngcontent-%COMP%]{position:absolute;width:100%;border:1px solid var(--lu-overlay-border);background:var(--lu-white)}.search-icon[_ngcontent-%COMP%]{cursor:pointer;--lu-svg-icon-color: var(--lu-primary)}.reset-icon[_ngcontent-%COMP%]{cursor:pointer;--lu-svg-icon-color: var(--lu-black-30)}  .search-input .lu-input-container:after,   lu-floated-border:after{border-radius:calc(var(--lu-base-gutter) * .5)}"],
  data: {
    animation: [(0, We.X$)("fadeInOut", [(0, We.eR)(":enter", [(0, We.oB)({
      width: 0,
      opacity: 0
    }), (0, We.jt)("200ms ease-in", (0, We.oB)({
      width: "{{ width }}",
      opacity: 1
    }))], {
      params: {
        width: "550px"
      }
    }), (0, We.eR)(":leave", [(0, We.jt)("200ms ease-out", (0, We.oB)({
      width: 0,
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
