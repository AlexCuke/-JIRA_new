// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-list-table"]],
  viewQuery: function (z, De) {
    if (1 & z && t.Gf(kl, 5), 2 & z) {
      let rt;
      t.iGM(rt = t.CRH()) && (De.toolboxCmp = rt.first);
    }
  },
  inputs: {
    viewData: "viewData",
    filterInColTemplate: "filterInColTemplate"
  },
  outputs: {
    rowsSort: "rowsSort",
    refresh: "refresh",
    clearFilter: "clearFilter",
    scrolled: "scrolled",
    goToPage: "goToPage",
    range: "range",
    runActionWithItem: "runActionWithItem",
    outsideClick: "outsideClick"
  },
  features: [t.TTD],
  decls: 15,
  vars: 28,
  consts: [[1, "table-container"], ["dpStickyContainer", "dp-scroll-container > div", 3, "displayType", "dataSource", "dataSourceGrouped", "virtualLabels", "groupingType", "columns", "metaMap", "tdCellsTemplate", "tdHeaderCellsTemplate", "rowBackgroundColorFunction", "rowDisabledConditionFunction", "rowDisabledTooltipTextFunction", "rowSelectItemFunction", "sortParams", "markRowsAllowed", "markAllRowsAllowed", "showSettings", "trackByFnCreator", "usePaginator", "pageIndex", "tableCellPaddingY", "rowsSort", "rowDbClick", "rowClick", "scrollEnd", "rowContextMenu", "openSettingsMenu", "selectedItems", "outside"], ["stickyContainer", "dpStickyContainer"], [3, "viewData", "clearFilter", "refresh", 4, "ngIf"], [3, "contextMenuMaxWidth"], ["contextMenu", ""], [4, "ngFor", "ngForOf"], ["class", "preloader __preloader", 3, "absolute", 4, "ngIf"], ["tdHeaderCellsTemplate", ""], ["tdCellsTemplate", ""], [4, "ngIf"], ["class", "total-in-query", 4, "ngIf"], [3, "viewData", "clearFilter", "refresh"], [3, "itemText", "iconName", "type", "data", 4, "ngIf"], [3, "itemText", "iconName", "type", "dropdown", "data", 4, "ngIf"], [3, "itemText", "iconName", "type", "data"], [3, "itemText", "iconName", "type", "dropdown", "data"], [1, "preloader", "__preloader", 3, "absolute"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "viewData"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cell", 4, "ngSwitchCase"], [1, "cell"], [3, "grid", "meta", "hideIf", "runAction", 4, "ngSwitchCase"], [3, "meta", "data", "runAction", 4, "ngSwitchDefault"], [1, "__widget-in-cell", 3, "widget", "runEvent"], [3, "grid", "meta", "hideIf", "runAction"], [3, "meta", "data", "runAction"], ["dpStickyElement", "RIGHT", 1, "__control-panel", 3, "visible", "container", "buttons", "element", "contextMenuMaxWidth", "data"], [1, "navigation-container"], [1, "navigation__total"], [1, "total-in-paginator"], [1, "navigation__paginator"], [3, "viewData", "goToPage"], [1, "total-in-query"], [1, "selection-container"], ["lu-text", "", 3, "size", "color"]],
  template: function (z, De) {
    if (1 & z) {
      const rt = t.EpF();
      t.TgZ(0, "div", 0)(1, "dp-table", 1, 2), t.NdJ("rowsSort", function (po) {
        return De.onRowsSort(po, De.viewData.sort);
      })("rowDbClick", function (po) {
        return De.onRunClickAction(po, De.mapItemToRowSelectEvent(po, De.viewData.rowDblClickEventFn));
      })("rowClick", function (po) {
        return De.onRunClickAction(po, De.mapItemToRowSelectEvent(po, De.viewData.rowClickEventFn));
      })("scrollEnd", function () {
        return De.onScrollEndY();
      })("rowContextMenu", function (po) {
        t.CHM(rt);
        const dr = t.MAs(5);
        return t.KtG(De.openRowContextMenu(po, dr));
      })("openSettingsMenu", function () {
        return De.onClickSettingsMenu();
      })("selectedItems", function (po) {
        return De.onSelectedItems(po);
      })("outside", function () {
        return De.onOutsideClick();
      }), t.qZA(), t.YNc(3, Ga, 2, 3, "dp-table-no-items-view", 3), t.TgZ(4, "dp-universal-list-context-menu", 4, 5), t.YNc(6, Za, 4, 3, "ng-container", 6), t.qZA(), t.YNc(7, sl, 2, 1, "lu-preloader", 7), t.YNc(8, pc, 2, 2, "ng-template", null, 8, t.W1O), t.YNc(10, al, 3, 4, "ng-template", null, 9, t.W1O), t.qZA(), t.YNc(12, ca, 8, 2, "ng-container", 10), t.YNc(13, _a, 2, 1, "div", 11), t.YNc(14, Ja, 6, 4, "ng-container", 10);
    }
    if (2 & z) {
      const rt = t.MAs(5),
        Cn = t.MAs(9),
        po = t.MAs(11);
      let dr;
      t.xp6(1), t.Q6J("displayType", "basic")("dataSource", De.viewData.items)("dataSourceGrouped", De.viewData.groupingItems)("virtualLabels", De.viewData.virtualLabels)("groupingType", De.viewData.groupingType)("columns", De.columnName)("metaMap", De.columnsMetaMap)("tdCellsTemplate", po)("tdHeaderCellsTemplate", Cn)("rowBackgroundColorFunction", De.viewData.rowBackgroundColorFn)("rowDisabledConditionFunction", De.viewData.rowDisableFn)("rowDisabledTooltipTextFunction", De.viewData.rowDisableReasonFn)("rowSelectItemFunction", null !== (dr = De.viewData.rowClickEventFn) && void 0 !== dr ? dr : De.viewData.rowDblClickEventFn)("sortParams", De.viewData.sort)("markRowsAllowed", !!De.viewData.selectionOptions)("markAllRowsAllowed", !!De.viewData.selectionOptions && De.viewData.selectionOptions.canCheckAll)("showSettings", !De.viewData.disableColsSettings)("trackByFnCreator", De.trackByFn)("usePaginator", De.viewData.usePaginator)("pageIndex", De.viewData.pageData.paging.pageIndex)("tableCellPaddingY", De.viewData.tableCellPaddingY), t.xp6(2), t.Q6J("ngIf", De.viewData.isEmptyList), t.xp6(1), t.Q6J("contextMenuMaxWidth", null == De.viewData.tableOptions ? null : De.viewData.tableOptions.contextMenuMaxWidth), t.xp6(2), t.Q6J("ngForOf", rt.items), t.xp6(1), t.Q6J("ngIf", "PENDING" === De.viewData.status), t.xp6(5), t.Q6J("ngIf", De.viewData.usePaginator && !De.viewData.showTotalInQuery && De.viewData.total > 0), t.xp6(1), t.Q6J("ngIf", De.showTotalInQuery), t.xp6(1), t.Q6J("ngIf", De.viewData.selectionOptions && De.hasActiveSelection);
    }
  },
  dependencies: [ae.SJ, b.sg, b.O5, b.tP, b.RF, b.n9, b.ED, j.ac, Y.bN, Y._1, Ar, va, zc, j.uh, h.d, kl, I.NZ, j.nP, y.NP, ae.AL, at, Ut, e.BX, Vn, Gt, xi, so, yr, Rr, Ns],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden;position:relative}.table-container[_ngcontent-%COMP%]{flex:1 1 auto;overflow:auto}.selection-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.selection-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){padding-right:calc(var(--lu-base-gutter) * 2)}.selection-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{padding-left:calc(var(--lu-base-gutter) * 3)}.navigation-container[_ngcontent-%COMP%]{flex:0 0 auto;border-top:1px solid var(--lu-black-10);background:var(--lu-white, #fff);display:flex;align-items:center;justify-content:center;position:relative;padding:calc(var(--lu-base-gutter) * 1) calc(var(--lu-base-gutter) * 1)}.navigation__total[_ngcontent-%COMP%]{position:absolute;left:var(--lu-base-gutter);color:var(--lu-black-60)}.navigation__paginator[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.__control-panel[_ngcontent-%COMP%]{opacity:1;position:absolute;top:0;bottom:0;right:0}.__widget-in-cell[_ngcontent-%COMP%]{margin-right:var(--lu-base-gutter)}.visible[_ngcontent-%COMP%]{opacity:1}.preloader[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.__preloader[_ngcontent-%COMP%]{position:absolute;inset:0;background:rgba(0,0,0,.1)}.message-container[_ngcontent-%COMP%]{--lu-replacement-index: 0;--lu-replacement-bg: var(--lu-black-5)}.message-title[_ngcontent-%COMP%]{color:var(--lu-black-100)}.message-text[_ngcontent-%COMP%]{display:flex}.message-text__button[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) / 2)}.cell[_ngcontent-%COMP%]{display:flex;align-items:baseline}.total-in-query[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;background:var(--lu-black-5);color:var(--lu-black-60);padding:var(--lu-base-gutter) var(--lu-base-gutter)}.total-in-paginator[_ngcontent-%COMP%]{font-weight:700}"],
  changeDetection: 0
});
