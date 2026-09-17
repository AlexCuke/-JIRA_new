// Exact compiled component metadata; references belong to modules/44785.js
({
  type: $h,
  selectors: [["pill-dosing-by-medicament"]],
  hostVars: 6,
  hostBindings: function (k, ce) {
    2 & k && n.Udp("--grid-template-columns", ce.gridTemplateColumns)("--selected-column-index", ce.selectedColumnIndexCss)("--grid-columns-count", ce.gridColumnsCountCss);
  },
  inputs: {
    gridTemplateColumns: "gridTemplateColumns",
    medicamentData: "medicamentData",
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
  decls: 4,
  vars: 10,
  consts: [[3, "onEndReached", "listItems", "isLoading", "hasMore"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dosing-by-medicament__row", "dosing-by-medicament__row--group", 3, "click"], [1, "dosing-by-medicament__cell", "dosing-by-medicament__cell--group-name"], ["icon", "chevron-right", 1, "dosing-by-medicament__chevron", 3, "luRotator"], [1, "dosing-by-medicament__group-name", 3, "innerHTML"], [1, "dosing-by-medicament__cell", "dosing-by-medicament__cell--fixed-right", "dosing-by-medicament__cell--hideable"], ["class", "dosing-by-medicament__column-highlight", 3, "left", "width", 4, "ngIf"], [4, "ngIf"], [1, "dosing-by-medicament__column-highlight"], ["class", "dosing-by-medicament__row dosing-by-medicament__row--patient", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dosing-by-medicament__row", "dosing-by-medicament__row--patient", 3, "click"], [1, "dosing-by-medicament__cell", "dosing-by-medicament__cell--patient"], [1, "dosing-by-medicament__patient-name", 3, "innerHTML"], [1, "dosing-by-medicament__cell"], [1, "dosing-by-medicament__text-size", 3, "innerHTML"], [1, "dosing-by-medicament__cell", "dosing-by-medicament__text-size"], [1, "dosing-by-medicament__cell", "dosing-by-medicament__cell--time-slots", "dosing-by-medicament__cell--fixed-right", 3, "ngClass"], [1, "dosing-by-medicament__cell--time-slots", 3, "slots", "mode", "timeHeaderMode", "hourlyHeaders", "visibleHeaders", "filterPeriod", "isBaseTherapy", "action"]],
  template: function (k, ce) {
    1 & k && (n.TgZ(0, "infinity-scroll-container", 0), n.ALo(1, "keyvalue"), n.YNc(2, Jp, 9, 11, "ng-container", 1), n.ALo(3, "keyvalue"), n.qZA()), 2 & k && (n.Q6J("onEndReached", ce.loadMoreItems)("listItems", n.lcZ(1, 6, ce.medicamentData))("isLoading", ce.loadingFlag)("hasMore", ce.hasMoreData), n.xp6(2), n.Q6J("ngForOf", n.lcZ(3, 8, ce.medicamentData))("ngForTrackBy", ce.trackByGroupKey));
  },
  dependencies: [Di.mk, Di.sg, Di.O5, Ci.q, im.r, yf, Wu, Di.Nd, ms.S],
  styles: ["[_nghost-%COMP%]{display:block;width:100%;--dosing-text-primary: #333333;--dosing-text-secondary: #666666;--dosing-text-muted: #999999;--dosing-border-light: #e5e5e5;--dosing-row-hover-bg: #ecf6fb;--dosing-row-height: 48px;--dosing-chevron-color: #38A1D6}.dosing-by-medicament__text-size[_ngcontent-%COMP%]{font-size:15px!important}.dosing-by-medicament__row[_ngcontent-%COMP%]{display:grid;grid-template-columns:344px 280px 124px 164px 184px 226px auto;column-gap:24px;width:100%;min-height:38px;border-bottom:1px solid var(--dosing-border-light);background-color:#fff;position:relative;z-index:1;align-items:center}.dosing-by-medicament__row[_ngcontent-%COMP%]:hover{background-color:var(--dosing-row-hover-bg);z-index:2}.dosing-by-medicament__row[_ngcontent-%COMP%]:hover     .slots-wrapper-grid{background-color:var(--dosing-row-hover-bg)}.dosing-by-medicament__row--group[_ngcontent-%COMP%]{cursor:pointer;background-color:#fff;border-bottom:none}.dosing-by-medicament__row--group[_ngcontent-%COMP%]:after{content:\"\";position:absolute;left:24px;right:var(--time-column-width, 366px);bottom:0;height:1px;background-color:var(--dosing-border-light);z-index:11;pointer-events:none}.dosing-by-medicament__row--group[_ngcontent-%COMP%]:hover{background-color:#fff}.dosing-by-medicament__row--group.dosing-by-medicament__row--expanded[_ngcontent-%COMP%]:after{display:none}.dosing-by-medicament__row--group.dosing-by-medicament__row--expanded[_ngcontent-%COMP%]   .dosing-by-medicament__cell--hideable[_ngcontent-%COMP%]:not(.dosing-by-medicament__cell--fixed-right){display:none}.dosing-by-medicament__row--group.dosing-by-medicament__row--expanded[_ngcontent-%COMP%]   .dosing-by-medicament__cell--fixed-right[_ngcontent-%COMP%]{grid-column:-2/-1;width:126px;justify-self:end!important}.dosing-by-medicament__row--patient[_ngcontent-%COMP%]{background-color:#fff;border-bottom:none}.dosing-by-medicament__row--patient[_ngcontent-%COMP%]:after{content:\"\";position:absolute;left:42px;right:0;bottom:0;height:1px;background-color:var(--dosing-border-light);z-index:11;pointer-events:none}.dosing-by-medicament__cell[_ngcontent-%COMP%]{padding:0;display:flex;overflow:hidden;text-overflow:ellipsis;font-family:Open Sans,sans-serif;font-size:13px;line-height:18px;color:var(--dosing-text-primary);height:100%;align-items:center}.dosing-by-medicament__cell[_ngcontent-%COMP%]:first-child{padding-left:24px}.dosing-by-medicament__cell--group-name[_ngcontent-%COMP%]{flex-direction:row;align-items:center;gap:8px}.dosing-by-medicament__cell--patient[_ngcontent-%COMP%], .dosing-by-medicament__cell--patient[_ngcontent-%COMP%]:first-child{padding-left:72px}.dosing-by-medicament__cell--time-slots[_ngcontent-%COMP%]{width:100%;overflow:visible;padding:0}.dosing-by-medicament__cell--time-slots--single[_ngcontent-%COMP%]{width:126px;justify-self:end!important}.dosing-by-medicament__cell--fixed-right[_ngcontent-%COMP%]{position:sticky;padding:0;justify-content:center;right:0;min-width:var(--time-column-width, 366px);z-index:10;background-color:#fff;display:flex;flex-direction:row;align-items:center;border-bottom:1px solid var(--dosing-border-light)}.dosing-by-medicament__column-highlight[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;background-color:#0000000a;pointer-events:none;z-index:0}.dosing-by-medicament__chevron[_ngcontent-%COMP%]{flex-shrink:0;width:16px;height:16px;--lu-svg-icon-color: var(--dosing-chevron-color);transition:transform .2s ease;cursor:pointer}.dosing-by-medicament__chevron[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #2C8DC4}.dosing-by-medicament__group-name[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400;font-size:15px;line-height:18px;color:var(--dosing-text-primary);padding:8px 0}.dosing-by-medicament__group-name--expanded[_ngcontent-%COMP%]{font-weight:600}.dosing-by-medicament__group-count[_ngcontent-%COMP%]{font-size:13px;color:var(--dosing-text-muted);margin-left:4px}.dosing-by-medicament__patient-name[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400;font-size:15px;line-height:18px;color:var(--dosing-text-primary)}.dosing-by-medicament__method-notes[_ngcontent-%COMP%]{display:block;font-size:12px;line-height:16px;color:var(--dosing-text-muted);white-space:normal;margin-top:2px}[_nghost-%COMP%]     .infinity-scroll{height:auto!important;max-height:none!important;overflow:visible!important}"],
  changeDetection: 0
});
