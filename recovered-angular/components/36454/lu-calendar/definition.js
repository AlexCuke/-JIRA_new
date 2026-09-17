// Exact compiled component metadata; references belong to modules/36454.js
({
  type: st,
  selectors: [["lu-calendar"]],
  contentQueries: function (mt, ut, Ct) {
    if (1 & mt && (e.Suo(Ct, qe, 5), e.Suo(Ct, Rt, 5)), 2 & mt) {
      let Ft;
      e.iGM(Ft = e.CRH()) && (ut.calendarNavigation = Ft.first), e.iGM(Ft = e.CRH()) && (ut.calendarFooter = Ft.first);
    }
  },
  hostVars: 1,
  hostBindings: function (mt, ut) {
    2 & mt && e.uIk("data-test-role", ut.dataTestRole);
  },
  inputs: {
    multiselect: "multiselect",
    twoMonths: "twoMonths",
    multiDates: "multiDates",
    minDate: "minDate",
    maxDate: "maxDate",
    footerIsVisible: "footerIsVisible",
    resetPeriodOnClick: "resetPeriodOnClick",
    periodMin: "periodMin",
    periodMax: "periodMax",
    dayIsDisabled: "dayIsDisabled",
    dayClass: "dayClass",
    selectionState: "selectionState"
  },
  outputs: {
    startDateChange: "startDateChange",
    endDateChange: "endDateChange"
  },
  features: [e._Bn([{
    provide: I.BU,
    useExisting: st
  }]), e.qOj],
  ngContentSelectors: te,
  decls: 8,
  vars: 12,
  consts: [[1, "lu-calendar-wrapper"], [1, "lu-calendar"], [1, "lu-calendar-header"], [3, "currentMonth", "maxDate", "minDate", "selectionState", "startDate", "nextMonth", "prevMonth", "selectMonth", 4, "ngIf"], [3, "selectionState", "currentMonth", "dayClass", "dayIsDisabled", "months", "multiselect", "twoMonths", "multiDates", "ngModel", "resetPeriodOnClick", "endDateChange", "ngModelChange", "startDateChange", "selectionStateChange"], ["class", "lu-calendar-bottom-bar", 4, "ngIf"], [3, "currentMonth", "maxDate", "minDate", "selectionState", "startDate", "nextMonth", "prevMonth", "selectMonth"], [1, "lu-calendar-bottom-bar"], [1, "lu-link", 3, "click"], [1, "lu-link-text"]],
  template: function (mt, ut) {
    1 & mt && (e.F$t(G), e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), e.YNc(3, ae, 1, 5, "lu-calendar-navigation", 3), e.Hsn(4), e.qZA(), e.TgZ(5, "lu-calendar-months-wrapper", 4), e.NdJ("endDateChange", function (Ft) {
      return ut.endDateChange.emit(Ft);
    })("ngModelChange", function (Ft) {
      return ut.changeValue(Ft);
    })("startDateChange", function (Ft) {
      return ut.startDateChange.emit(Ft);
    })("selectionStateChange", function (Ft) {
      return ut.selectionState = Ft;
    }), e.qZA(), e.YNc(6, Y, 5, 3, "div", 5), e.Hsn(7, 1), e.qZA()()), 2 & mt && (e.xp6(3), e.Q6J("ngIf", !ut.calendarNavigation), e.xp6(2), e.Q6J("selectionState", ut.selectionState)("currentMonth", ut.currentMonth)("dayClass", ut.dayClass)("dayIsDisabled", ut.prepareDateIsDisabledFunction())("months", ut.selectedMonths)("multiselect", ut.multiselect)("twoMonths", ut.twoMonths)("multiDates", ut.multiDates)("ngModel", ut.model)("resetPeriodOnClick", ut.resetPeriodOnClick), e.xp6(1), e.Q6J("ngIf", ut.footerIsVisible && !ut.calendarFooter));
  },
  dependencies: [f.O5, L.JJ, L.On, Se, n, M.M],
  styles: ["[_nghost-%COMP%]   .lu-calendar-wrapper[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);display:inline-flex;overflow:hidden;max-width:100%;width:100%;min-width:312px}[_nghost-%COMP%]   .lu-calendar-wrapper[_ngcontent-%COMP%]   .lu-calendar[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .lu-calendar-wrapper[_ngcontent-%COMP%]   .lu-calendar[_ngcontent-%COMP%]   .lu-calendar-header[_ngcontent-%COMP%]{width:280px;margin-left:auto;margin-right:auto;margin-bottom:var(--lu-base-gutter)}[_nghost-%COMP%]   .lu-calendar-wrapper[_ngcontent-%COMP%]   .lu-calendar[_ngcontent-%COMP%]   .lu-calendar-bottom-bar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:var(--lu-base-gutter) 0}"],
  changeDetection: 0
});
