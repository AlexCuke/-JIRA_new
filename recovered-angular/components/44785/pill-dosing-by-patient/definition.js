// Exact compiled component metadata; references belong to modules/44785.js
({
  type: th,
  selectors: [["pill-dosing-by-patient"]],
  hostVars: 6,
  hostBindings: function (k, ce) {
    2 & k && n.Udp("--grid-template-columns", ce.gridTemplateColumns)("--selected-column-index", ce.selectedColumnIndexCss)("--grid-columns-count", ce.gridColumnsCountCss);
  },
  inputs: {
    gridTemplateColumns: "gridTemplateColumns",
    patientData: "patientData",
    timeHeaderMode: "timeHeaderMode",
    allHourlyHeaders: "allHourlyHeaders",
    visibleHourlyHeaders: "visibleHourlyHeaders",
    selectedPeriod: "selectedPeriod",
    selectedTime: "selectedTime",
    selectedColumnIndex: "selectedColumnIndex",
    gridColumnsCount: "gridColumnsCount",
    searchTerm: "searchTerm",
    loadingFlag: "loadingFlag",
    hasMoreData: "hasMoreData",
    onLoadMore: "onLoadMore"
  },
  outputs: {
    slotAction: "slotAction"
  },
  features: [n.TTD],
  decls: 2,
  vars: 6,
  consts: [[3, "onEndReached", "listItems", "isLoading", "hasMore"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dosing-by-patient__patient-group-wrapper"], [1, "dosing-by-patient__patient-group"], [3, "patient", "searchTerm"], [1, "dosing-by-patient__patient-group-sticky"], ["class", "dosing-by-patient__patient-group-highlight", 3, "left", "width", 4, "ngIf"], [1, "dosing-by-patient__patient-group-highlight"], ["luDropdownOrigin", "", 1, "dosing-by-patient__row"], ["origin", "luDropdownOrigin"], [3, "medicine", "searchTerm", "click", "contextmenu"], [1, "dosing-by-patient__cell", "dosing-by-patient__cell--time-slots", "dosing-by-patient__cell--fixed-right", 3, "ngClass"], ["class", "dosing-by-patient__column-highlight", 3, "left", "width", 4, "ngIf"], [1, "dosing-by-patient__cell--time-slots", 3, "ngStyle", "slots", "mode", "timeHeaderMode", "hourlyHeaders", "visibleHeaders", "filterPeriod", "isBaseTherapy", "action"], ["panelClass", "custom-menu-dropdown", 3, "positions"], ["rowDropdown", ""], [4, "ngIf"], [1, "dosing-by-patient__column-highlight"], ["class", "custom-menu-container", 4, "luOverlayContent"], [1, "custom-menu-container"], [1, "menu-item", 3, "click"], ["icon", "mark-done", 3, "size"]],
  template: function (k, ce) {
    1 & k && (n.TgZ(0, "infinity-scroll-container", 0), n.YNc(1, zg, 7, 14, "ng-container", 1), n.qZA()), 2 & k && (n.Q6J("onEndReached", ce.loadMoreItems)("listItems", ce.patientData)("isLoading", ce.loadingFlag)("hasMore", ce.hasMoreData), n.xp6(1), n.Q6J("ngForOf", ce.patientData)("ngForTrackBy", ce.trackByPatient));
  },
  dependencies: [Di.mk, Di.sg, Di.O5, Di.PC, _r.$, Ci.q, js.n, Ts.o, yf, Wu, Kd, Wg],
  styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:100%;--dosing-text-primary: #2d3748;--dosing-border-light: #e2e8f0;--dosing-row-hover-bg: #ECF6FB;--dosing-row-height: 47px}.dosing-by-patient__patient-group[_ngcontent-%COMP%]{grid-column:1/-2;margin-left:8px;margin-top:8px;border-radius:3px;height:32px;width:-moz-fit-content;width:fit-content;padding:4px 16px;background-color:#e6e6e6;display:flex;align-items:center;gap:8px 20px;position:sticky;left:0;z-index:11}.dosing-by-patient__patient-group-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:var(--grid-template-columns);column-gap:24px;width:100%;position:relative;z-index:10}.dosing-by-patient__patient-group-sticky[_ngcontent-%COMP%]{grid-column:-2/-1;position:sticky;right:0;width:-moz-fit-content!important;width:fit-content!important;min-width:auto!important;max-width:none!important;padding:0;z-index:20;background-color:#f2f2f2!important;box-sizing:border-box;overflow:hidden!important}.dosing-by-patient__patient-group-highlight[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;background-color:#0000000a;pointer-events:none;z-index:0;width:88px!important}.dosing-by-patient__row[_ngcontent-%COMP%]{display:grid;grid-template-columns:272px 304px 164px 196px 206px 164px auto;column-gap:24px;width:100%;min-height:var(--dosing-row-height);border-bottom:1px solid var(--dosing-border-light);background-color:#fff;position:relative;z-index:1}.dosing-by-patient__row[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:var(--dosing-row-hover-bg);z-index:2}.dosing-by-patient__row[_ngcontent-%COMP%]:hover   .dosing-by-patient__cell--fixed-right[_ngcontent-%COMP%]{background-color:var(--dosing-row-hover-bg)}.dosing-by-patient__row.is-new[_ngcontent-%COMP%], .dosing-by-patient__row.is-new[_ngcontent-%COMP%]   .dosing-by-patient__cell--fixed-right[_ngcontent-%COMP%]{background-color:#fff8cc}.dosing-by-patient__cell[_ngcontent-%COMP%]{padding:0 0 0 24px;display:flex;flex-direction:column;justify-content:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dosing-by-patient__cell--time-slots[_ngcontent-%COMP%]{max-width:var(--time-column-width);overflow:visible;padding:0;justify-self:end}.dosing-by-patient__cell--time-slots--single[_ngcontent-%COMP%]{width:126px;justify-self:end!important}.dosing-by-patient__cell--fixed-right[_ngcontent-%COMP%]{position:sticky;padding:0;justify-content:flex-start;right:0;width:100%;z-index:10;background-color:#fff;display:flex;justify-self:flex-end}.dosing-by-patient__column-highlight[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;background-color:#0000000a;pointer-events:none;z-index:0;width:88px!important}[_nghost-%COMP%]     .infinity-scroll{height:auto!important;max-height:none!important;overflow:visible!important}.custom-menu-dropdown[_ngcontent-%COMP%]{background:#fff;border-radius:4px;box-shadow:0 12px 24px #0000001f,0 4px 8px #00000014}.custom-menu-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:0}.menu-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:10px 18px;font-size:15px;color:#333;cursor:pointer;-webkit-user-select:none;user-select:none;transition:background .12s,color .12s;border-radius:4px}.menu-item[_ngcontent-%COMP%]:hover, .menu-item[_ngcontent-%COMP%]:focus-visible{background-color:#f7f4fd;color:#333}.menu-item[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{flex-shrink:0;display:block}"],
  changeDetection: 0
});
