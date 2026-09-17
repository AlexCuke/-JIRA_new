// Exact compiled component metadata; references belong to modules/38334.js
({
  type: te,
  selectors: [["app-menu"]],
  viewQuery: function (le, n) {
    if (1 & le && e.Gf(J, 5), 2 & le) {
      let Se;
      e.iGM(Se = e.CRH()) && (n.headerMenuRef = Se.first);
    }
  },
  outputs: {
    reloadTable: "reloadTable"
  },
  decls: 8,
  vars: 6,
  consts: [[1, "menu-wrapper"], [1, "menu-content"], [1, "border-heading"], ["headerMenu", ""], [1, "fio"], ["icon", "close", 3, "size", "click"], [4, "ngComponentOutlet", "ngComponentOutletInjector"]],
  template: function (le, n) {
    1 & le && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2, 3)(4, "div", 4), e._uU(5), e.qZA(), e.TgZ(6, "lu-svg-icon", 5), e.NdJ("click", function () {
      return n.onMenuClose();
    }), e.qZA()(), e.YNc(7, fe, 1, 0, "ng-container", 6), e.qZA()()), 2 & le && (e.ekj("open", n.openMenu), e.xp6(5), e.Oqu(n.title), e.xp6(1), e.Q6J("size", 24), e.xp6(1), e.Q6J("ngComponentOutlet", n.component)("ngComponentOutletInjector", n.injectorHeader));
  },
  dependencies: [Le.$G, ke.q],
  styles: [".menu-wrapper.open[_ngcontent-%COMP%]{width:calc(100% + 57px);position:absolute;top:0;right:0;z-index:1;height:100%;background:rgba(0,0,0,.5)}.menu-wrapper.open[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]{transform:scale(1);visibility:visible;opacity:1}.menu-content[_ngcontent-%COMP%]{margin-left:auto;width:786px;height:100%;background:#fff;opacity:0;visibility:hidden;transform:scale(.98);transition:.2s ease;position:absolute;top:0;right:0;z-index:1}.menu-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:17px 17px 13px 24px;position:relative;z-index:2;box-shadow:0 4px 8px #00000014,0 1px 2px #00000014}.menu-heading[_ngcontent-%COMP%]   .fio[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#000}.menu-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:20px}.menu-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   app-appointment-list-icon[_ngcontent-%COMP%]{margin-right:9px}.menu-heading[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{margin-left:auto;--lu-svg-icon-color: #ccc;cursor:pointer}.menu-heading[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}"],
  changeDetection: 0
});
