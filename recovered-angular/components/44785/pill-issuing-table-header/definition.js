// Exact compiled component metadata; references belong to modules/44785.js
({
  type: Gh,
  selectors: [["pill-issuing-table-header"]],
  hostVars: 2,
  hostBindings: function (k, ce) {
    2 & k && n.Udp("--grid-template-columns", ce.gridTemplateColumns);
  },
  inputs: {
    gridTemplateColumns: "gridTemplateColumns",
    timeHeaderMode: "timeHeaderMode",
    selectedPeriod: "selectedPeriod",
    allHourlyHeaders: "allHourlyHeaders",
    groupingMode: "groupingMode",
    selectedTime: "selectedTime",
    visibleHourlyHeaders: "visibleHourlyHeaders"
  },
  outputs: {
    hourlyHeaderClick: "hourlyHeaderClick",
    chunkIndexChange: "chunkIndexChange",
    timeHeaderSelected: "timeHeaderSelected"
  },
  features: [n.TTD],
  decls: 20,
  vars: 11,
  consts: [[1, "table-header", 3, "ngClass"], [1, "table-header__cell"], [4, "ngIf"], [1, "table-header__cell", "table-header__cell--time-slots", "table-header__cell--fixed-right", 3, "ngClass"], [1, "table-header__resize-handle"], [4, "ngIf", "ngIfElse"], ["showAllPeriods", ""], ["hourlyView", ""], [1, "table-header__time-periods", "table-header__time-periods--single"], [1, "table-header__time-period-item"], [1, "table-header__time-periods"], [1, "table-header__time-period-item", "table-header__time-period-item--night"], [1, "table-header__hourly-view"], [1, "table-header__hourly-nav", "table-header__hourly-nav--left", 3, "disabled", "click"], [1, "table-header__hourly-tabs-wrapper"], [1, "table-header__hourly-tabs"], ["class", "table-header__hourly-tab", 3, "id", "active", "selected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-header__hourly-nav", "table-header__hourly-nav--right", 3, "disabled", "click"], [1, "table-header__hourly-tab", 3, "id", "click"]],
  template: function (k, ce) {
    if (1 & k && (n.TgZ(0, "div", 0)(1, "div", 1), n._uU(2, "Признак / Наименование"), n.qZA(), n.TgZ(3, "div", 1), n._uU(4, "Торговое наименование"), n.qZA(), n.YNc(5, Nm, 3, 0, "ng-container", 2), n.TgZ(6, "div", 1), n._uU(7, "Доза приема"), n.qZA(), n.TgZ(8, "div", 1), n._uU(9, "Способ введения"), n.qZA(), n.TgZ(10, "div", 1), n._uU(11, "Кратность"), n.qZA(), n.YNc(12, bf, 3, 0, "ng-container", 2), n.TgZ(13, "div", 3), n._UZ(14, "div", 4), n.YNc(15, k0, 2, 2, "ng-container", 5), n.YNc(16, tm, 9, 0, "ng-template", null, 6, n.W1O), n.YNc(18, Dl, 8, 6, "ng-template", null, 7, n.W1O), n.qZA()()), 2 & k) {
      const Ye = n.MAs(19);
      n.Q6J("ngClass", n.WLB(6, dg, "byPatient" === ce.groupingMode, "byMedicament" === ce.groupingMode)), n.xp6(5), n.Q6J("ngIf", "byMedicament" === ce.groupingMode), n.xp6(7), n.Q6J("ngIf", "byPatient" === ce.groupingMode), n.xp6(1), n.Q6J("ngClass", n.VKq(9, kd, !!ce.periodLabel)), n.xp6(2), n.Q6J("ngIf", "periods" === ce.timeHeaderMode)("ngIfElse", Ye);
    }
  },
  dependencies: [Di.mk, Di.sg, Di.O5],
  styles: ["[_nghost-%COMP%]{display:block;width:100%;overflow:hidden;--table-header-text-muted: #999999;--table-header-border-dark: #cbd5e0;--table-header-brand-color: #3182ce;--table-header-height: 40px}.table-header-by-patient[_ngcontent-%COMP%]{grid-template-columns:272px 304px 164px 196px 206px 164px auto}.table-header-by-medicament[_ngcontent-%COMP%]{grid-template-columns:344px 280px 124px 164px 184px 226px auto}.table-header[_ngcontent-%COMP%]{display:grid;column-gap:24px;width:100%;height:var(--table-header-height);background-color:#fff;border-bottom:1px solid #E5E5E5;z-index:2}.table-header__cell[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:13px;font-weight:400;line-height:18px;color:var(--table-header-text-muted);display:flex;align-items:center;white-space:nowrap;padding:0}.table-header__cell[_ngcontent-%COMP%]:first-child{padding-left:24px}.table-header__cell[_ngcontent-%COMP%]:last-child{width:var(--time-column-width, 366px)}.table-header__cell--time-slots[_ngcontent-%COMP%]{overflow:visible;padding:0}.table-header__cell--time-slots--single[_ngcontent-%COMP%]{width:126px;justify-self:end!important}.table-header__cell--fixed-right[_ngcontent-%COMP%]{position:sticky;right:0;min-width:var(--time-column-width, 366px);z-index:10;background-color:#fff;display:flex;align-items:center;overflow:visible;border-bottom:1px solid #E5E5E5;justify-self:end}.table-header__time-periods[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(4,66px);align-content:center;justify-content:center;gap:16px;height:100%;max-width:var(--time-column-width)}.table-header__time-periods[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{text-align:start}.table-header__time-periods--single[_ngcontent-%COMP%]{grid-template-columns:1fr;justify-items:center;justify-content:end;width:126px}.table-header__time-period-item[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:13px;font-weight:400;line-height:18px;color:var(--table-header-text-muted);text-align:center;white-space:nowrap;width:64px;min-width:64px}.table-header__hourly-view[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;justify-content:space-between;width:100%;gap:8px;max-width:var(--time-column-width)}.table-header__hourly-nav[_ngcontent-%COMP%]{flex-shrink:0;background:transparent;border:1px solid var(--table-header-border-dark);border-radius:50%;width:28px;height:28px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--table-header-text-muted);transition:all .2s ease}.table-header__hourly-nav[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--table-header-brand-color);border-color:var(--table-header-brand-color);color:#fff}.table-header__hourly-nav[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.5}.table-header__hourly-tabs-wrapper[_ngcontent-%COMP%]{overflow:hidden;flex-grow:1}.table-header__hourly-tabs[_ngcontent-%COMP%]{display:grid;width:100%;height:100%}.table-header__hourly-tab[_ngcontent-%COMP%]{text-align:center;padding:10px 5px;font-size:15px;color:#888;cursor:pointer;background-color:transparent;border-bottom:3px solid transparent;transition:color .5s ease,border-color .7s ease;font-weight:500;white-space:nowrap}.table-header__hourly-tab[_ngcontent-%COMP%]:hover{color:#333}.table-header__hourly-tab.active[_ngcontent-%COMP%]{color:#222;font-weight:600;border-bottom-color:#333}.table-header__hourly-tab.selected[_ngcontent-%COMP%]{color:#333;font-weight:600;border-radius:4px 4px 0 0}"],
  changeDetection: 0
});
