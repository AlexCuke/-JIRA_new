// Exact compiled component metadata; references belong to modules/15513.js
({
  type: LC,
  selectors: [["tsk-hematomas-directory"]],
  viewQuery: function (o, D) {
    if (1 & o && e.Gf(x3, 5), 2 & o) {
      let Z;
      e.iGM(Z = e.CRH()) && (D.areasTree = Z.first);
    }
  },
  inputs: {
    schemaSelected: "schemaSelected",
    skinFormGroup: "skinFormGroup",
    width: "width",
    isShowCloseButton: "isShowCloseButton",
    isShowBottomButtons: "isShowBottomButtons"
  },
  outputs: {
    closePanelEvent: "closePanelEvent",
    selectedAreaEvent: "selectedAreaEvent"
  },
  standalone: !0,
  features: [e.TTD, e.jDz],
  decls: 19,
  vars: 15,
  consts: [[1, "hematomas-directory"], [1, "hematomas-directory__header"], ["icon", "close", 3, "size", "click", 4, "ngIf"], [1, "hematomas-directory__content"], [1, "hematomas-directory__content__search"], ["luInput", "", "luInputString", "", "placeholder", "Поиск", 3, "ngModel", "ngModelChange"], ["lu-button-icon", "", "luInputWrapperAfter", "", 4, "ngIf", "ngIfElse"], ["showClearButton", ""], ["luTreeCheckboxAdapter", "", 3, "indentLines", "ngModel", "compareFn", "nodes", "nodeContent", "ngModelChange"], ["areasTree", "", "treeAdapter", "luTreeAdapter", "tree", ""], ["nodeContent", ""], ["class", "hematomas-directory__action", 4, "ngIf"], ["icon", "close", 3, "size", "click"], ["lu-button-icon", "", "luInputWrapperAfter", ""], ["icon", "search", 3, "size"], ["lu-button-icon", "", "luInputWrapperAfter", "", 3, "click"], ["icon", "close", 3, "size"], [1, "node-item"], ["class", "node-item__expand", "lu-button-icon", "", 3, "click", 4, "ngIf"], [1, "node-item__checkbox", 3, "ngModel", "ngModelChange"], ["lu-text", ""], ["lu-button-icon", "", 1, "node-item__expand", 3, "click"], [3, "size", "icon"], [1, "hematomas-directory__action"], ["lu-button-outer", "", "color", "red", 3, "click"], ["lu-button-raised", "", "color", "blue", 3, "click"]],
  template: function (o, D) {
    if (1 & o && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "span"), e._uU(3, "Справочник локализаций гематом"), e.qZA(), e.YNc(4, UD, 1, 1, "lu-svg-icon", 2), e.qZA(), e.TgZ(5, "div", 3)(6, "lu-input-wrapper", 4)(7, "input", 5), e.NdJ("ngModelChange", function (X) {
      return D.search = X;
    })("ngModelChange", function () {
      return D.searchAreas();
    }), e.qZA(), e.YNc(8, HD, 2, 1, "button", 6), e.YNc(9, BD, 2, 1, "ng-template", null, 7, e.W1O), e.qZA(), e.TgZ(11, "lu-tree", 8, 9), e.NdJ("ngModelChange", function (X) {
      return D.selectedItems = X;
    })("ngModelChange", function () {
      return D.prepareSelected();
    }), e.ALo(15, "luTreeNodes"), e.qZA(), e.YNc(16, b3, 5, 3, "ng-template", null, 10, e.W1O), e.qZA(), e.YNc(18, w3, 5, 0, "div", 11), e.qZA()), 2 & o) {
      const Z = e.MAs(10),
        X = e.MAs(17);
      e.Udp("width", D.width), e.xp6(4), e.Q6J("ngIf", D.isShowCloseButton), e.xp6(3), e.Q6J("ngModel", D.search), e.xp6(1), e.Q6J("ngIf", !D.search)("ngIfElse", Z), e.xp6(3), e.Q6J("indentLines", !0)("ngModel", D.selectedItems)("compareFn", D.compareNode.bind(D))("nodes", e.xi3(15, 12, D.treeItems, D.getChildren))("nodeContent", X), e.xp6(7), e.Q6J("ngIf", D.isShowBottomButtons);
    }
  },
  dependencies: [vo.ez, vo.O5, Qc.o, Qc.k, Oa.h, Oa.q, Xl.W1, Xl.mc, W_.KE, W_.aV, W_.QZ, Qu.aI, Qu.NZ, ax.sx, ax.l7, ym.Nu, ym.$m, pr.u5, pr.Fj, pr.JJ, pr.On, id.f, id.L, pp.c, pp.H, Ju.LA, Ju.HY, Ju.Fj, y3.i],
  styles: [".hematomas-directory[_ngcontent-%COMP%]{height:100%;background-color:#fff;border:1px solid #e6e6e6;border-radius:5px}.hematomas-directory__header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start;height:50px;font-weight:600;color:#333;box-shadow:0 4px 16px #24293012}.hematomas-directory__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:16px;width:344px;height:24px;font-size:15px;font-weight:600}.hematomas-directory__header[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{align-self:center;cursor:pointer;--lu-svg-icon-color: #ccc}.hematomas-directory__content[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:column;justify-content:start;align-items:flex-start;height:calc(100% - 100px)}.hematomas-directory__content__search[_ngcontent-%COMP%]{margin:16px 16px 0;width:368px;height:40px}.hematomas-directory__content[_ngcontent-%COMP%]   lu-tree[_ngcontent-%COMP%]{width:100%}.hematomas-directory__content[_ngcontent-%COMP%]   lu-tree[_ngcontent-%COMP%]     lu-node-indent{margin-left:17px}.hematomas-directory__content[_ngcontent-%COMP%]   lu-tree[_ngcontent-%COMP%]     lu-node-indent .lu-indent-line:before{content:\"\";position:relative;transform:translate(11px);z-index:1;display:block;height:100%;width:1px;background:#d9d9d9;transition:.2s ease}.hematomas-directory__content[_ngcontent-%COMP%]   lu-tree[_ngcontent-%COMP%]     lu-node-indent[data-lu-hovered=true] .lu-indent-line:before{background:#757575}.hematomas-directory__content[_ngcontent-%COMP%]   lu-tree[_ngcontent-%COMP%]   .node-item[_ngcontent-%COMP%]{display:grid;grid-template-columns:50px auto;grid-template-rows:minmax(32px,auto);grid-column-gap:0;grid-row-gap:0;align-items:center}.hematomas-directory__content[_ngcontent-%COMP%]   lu-tree[_ngcontent-%COMP%]   .node-item__expand[_ngcontent-%COMP%]{grid-area:1/1/2/2;height:24px;width:24px;display:flex;align-items:center;justify-content:center;margin:4px 8px 4px 16px}.hematomas-directory__content[_ngcontent-%COMP%]   lu-tree[_ngcontent-%COMP%]   .node-item__checkbox[_ngcontent-%COMP%]{grid-area:1/2/2/3}.hematomas-directory__action[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:end;gap:10px;border-top:1px solid #e6e6e6;width:95%;height:50px}"],
  changeDetection: 0
});
