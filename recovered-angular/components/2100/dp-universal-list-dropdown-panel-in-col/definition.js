// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-dropdown-panel-in-col"]],
  viewQuery: function (z, De) {
    if (1 & z && t.Gf(pn, 5), 2 & z) {
      let rt;
      t.iGM(rt = t.CRH()) && (De.dropdownEl = rt.first);
    }
  },
  inputs: {
    viewData: "viewData"
  },
  features: [t.TTD],
  ngContentSelectors: Pe,
  decls: 9,
  vars: 8,
  consts: [["luDropdownOrigin", "", 1, "dropdown-panel-toggle-control", 3, "click"], ["origin", "luDropdownOrigin"], [4, "ngIf"], ["icon", "chevron-down", "luButtonPostfix", "", 3, "size", "luChevronRotate"], ["positions", "bottom-right", "panelClass", "dropdown-panel-content", 3, "origin", "content", "withArrow"], ["dropdown", ""], ["content", ""], [1, "dropdown-panel-toggle-control-icon-container"], ["luButtonPrefix", "", 3, "icon", "size"], ["class", "dropdown-panel-toggle-control-marker", 4, "ngIf"], ["class", "dropdown-panel-toggle-control__text", 4, "ngIf"], [1, "dropdown-panel-toggle-control-marker"], [1, "dropdown-panel-toggle-control__text"], [1, "dropdown-content"]],
  template: function (z, De) {
    if (1 & z) {
      const rt = t.EpF();
      t.F$t(), t.TgZ(0, "div", 0, 1), t.NdJ("click", function () {
        t.CHM(rt);
        const po = t.MAs(6);
        return t.KtG(po.toggle());
      }), t.YNc(2, Si, 5, 4, "ng-container", 2), t.ALo(3, "dropdownPanelInColAnchorButton"), t._UZ(4, "lu-svg-icon", 3), t.qZA(), t.TgZ(5, "lu-dropdown", 4, 5), t.YNc(7, mn, 2, 0, "ng-template", null, 6, t.W1O), t.qZA();
    }
    if (2 & z) {
      const rt = t.MAs(1),
        Cn = t.MAs(6),
        po = t.MAs(8);
      t.xp6(2), t.Q6J("ngIf", t.lcZ(3, 6, De.viewData)), t.xp6(2), t.Q6J("size", 16)("luChevronRotate", Cn), t.xp6(1), t.Q6J("origin", rt)("content", po)("withArrow", !0);
    }
  },
  dependencies: [b.O5, L.q, C.$, J.c, O.nx, O.zY, v.n, dl],
  styles: ["[_nghost-%COMP%]{display:flex;align-items:flex-end;height:100%}  .dropdown-panel-content{--lu-overlay-border: var(--lu-black-5)}  .dropdown-panel-content .lu-overlay-pointer-content{box-shadow:0 15px 35px -14px var(--lu-black-40)}.dropdown-panel-toggle-control[_ngcontent-%COMP%]{--marker-size: 6px;display:flex;flex-direction:row;align-items:center;color:var(--lu-primary);font-weight:var(--lu-font-weight-bold);--lu-svg-icon-color: var(--lu-primary);cursor:pointer}.dropdown-panel-toggle-control[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:first-child){margin-left:calc(var(--lu-base-gutter) * .5)}.dropdown-panel-toggle-control[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{margin-right:calc(var(--lu-base-gutter) * .5)}.dropdown-panel-toggle-control__text[_ngcontent-%COMP%]{margin-right:calc(var(--lu-base-gutter) * .5)}.dropdown-panel-toggle-control-icon-container[_ngcontent-%COMP%]{position:relative;display:flex}.dropdown-panel-toggle-control-marker[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:var(--marker-size);height:var(--marker-size);border-radius:var(--marker-size);border:2px solid white;box-sizing:content-box;background-color:var(--lu-yellow-100)}.dropdown-content[_ngcontent-%COMP%]{width:calc(var(--lu-base-gutter) * 48);height:calc(var(--lu-base-gutter) * 63.375)}"],
  changeDetection: 0
});
