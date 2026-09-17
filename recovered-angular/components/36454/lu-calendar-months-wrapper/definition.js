// Exact compiled component metadata; references belong to modules/36454.js
({
  type: n,
  selectors: [["lu-calendar-months-wrapper"]],
  viewQuery: function (q, mt) {
    if (1 & q && e.Gf(j, 7), 2 & q) {
      let ut;
      e.iGM(ut = e.CRH()) && (mt.wrapperElement = ut.first);
    }
  },
  inputs: {
    currentMonth: "currentMonth",
    twoMonths: "twoMonths",
    months: "months",
    multiselect: "multiselect",
    multiDates: "multiDates",
    selectionState: "selectionState",
    resetPeriodOnClick: "resetPeriodOnClick",
    dayIsDisabled: "dayIsDisabled",
    dayClass: "dayClass"
  },
  outputs: {
    selectionStateChange: "selectionStateChange",
    startDateChange: "startDateChange",
    endDateChange: "endDateChange"
  },
  features: [e._Bn([{
    provide: L.JU,
    useExisting: (0, e.Gpc)(() => le),
    multi: !0
  }, {
    provide: pe,
    useExisting: le
  }])],
  decls: 3,
  vars: 4,
  consts: [[1, "lu-calendar-month-wrapper", 3, "tabIndex"], ["wrapper", ""], ["class", "lu-calendar-month", 3, "height", 4, "ngFor", "ngForOf"], [1, "lu-calendar-month"], ["class", "lu-calendar-month-title", 4, "ngIf"], ["class", "lu-calendar-week", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "lu-calendar-month-title"], [1, "lu-calendar-week"], ["class", "lu-day-wrapper", "data-test-role", "clickableElement", 3, "luCalendarDay", "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["data-test-role", "clickableElement", 1, "lu-day-wrapper", 3, "luCalendarDay"], [1, "lu-calendar-day-backdrop"], [1, "lu-day-content"], ["data-test-role", "title", 1, "lu-calendar-day"]],
  template: function (q, mt) {
    1 & q && (e.TgZ(0, "div", 0, 1), e.YNc(2, ke, 3, 5, "div", 2), e.qZA()), 2 & q && (e.Udp("height", mt.twoMonths ? "512px" : "240px"), e.Q6J("tabIndex", 0), e.xp6(2), e.Q6J("ngForOf", mt.months));
  },
  dependencies: [f.sg, f.O5, be],
  styles: ["[_nghost-%COMP%]   .lu-calendar-month-wrapper[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);position:relative;overflow:hidden;height:240px}[_nghost-%COMP%]   .lu-calendar-month-wrapper[_ngcontent-%COMP%]   .lu-calendar-month[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:var(--lu-white);overflow:hidden;height:100%;width:100%}[_nghost-%COMP%]   .lu-calendar-month-wrapper[_ngcontent-%COMP%]   .lu-calendar-month-title[_ngcontent-%COMP%]{width:280px;font-size:15px;line-height:24px;color:#333;margin-left:auto;margin-right:auto;margin-bottom:12px}[_nghost-%COMP%]   .lu-calendar-month-wrapper[_ngcontent-%COMP%]   .lu-calendar-month[_ngcontent-%COMP%]   .lu-calendar-week[_ngcontent-%COMP%]{display:flex;width:100%;flex:1;justify-content:center}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]{position:relative;display:inline-flex;justify-content:center;align-items:center;font-size:15px;color:var(--lu-black-80);cursor:pointer;width:40px;height:40px}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:first-child{flex:1}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:first-child:before{width:100%}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:first-child:not(.-start-of-disabled)   .lu-calendar-day-backdrop[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:first-child.-selected:after, [_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:first-child:focus:after, [_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:first-child:hover:after{left:unset;right:0;width:40px}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:first-child.-start-of-active:before, [_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:first-child.-start-of-disabled   .lu-calendar-day-backdrop[_ngcontent-%COMP%]{left:unset;right:0;width:40px}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:first-child   .lu-day-content[_ngcontent-%COMP%]{margin-left:auto}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:last-child{flex:1}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:last-child:before{width:100%}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:last-child:not(.-end-of-disabled)   .lu-calendar-day-backdrop[_ngcontent-%COMP%]{left:0;width:100%}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:last-child.-selected:after, [_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:last-child:focus:after, [_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:last-child:hover:after{left:0;right:unset}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:last-child.-end-of-active:before, [_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:last-child.-end-of-disabled   .lu-calendar-day-backdrop[_ngcontent-%COMP%]{left:0;right:unset;width:40px}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:last-child   .lu-day-content[_ngcontent-%COMP%]{margin-right:auto}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]   .lu-calendar-day-backdrop[_ngcontent-%COMP%]{position:absolute;content:\"\";top:0;left:0;right:0;width:40px;height:100%;background-color:var(--lu-primary);opacity:0}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:hover:after, [_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]:focus:after{opacity:.2;border-radius:40px}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]   .lu-day-content[_ngcontent-%COMP%]{display:flex;width:40px;height:40px;justify-content:center;align-items:center}[_nghost-%COMP%]   .lu-day-wrapper[_ngcontent-%COMP%]   .lu-calendar-day[_ngcontent-%COMP%]{position:relative;z-index:1}[_nghost-%COMP%]   .lu-day-wrapper.-another-month[_ngcontent-%COMP%]:not(.-selected)   .lu-calendar-day[_ngcontent-%COMP%]{opacity:.4}[_nghost-%COMP%]   .lu-day-wrapper.-today[_ngcontent-%COMP%]{color:var(--lu-black-100);font-weight:600}[_nghost-%COMP%]   .lu-day-wrapper.-today[_ngcontent-%COMP%]   .lu-calendar-day[_ngcontent-%COMP%]:after{position:absolute;content:\"\";left:0;bottom:0;width:100%;height:2px;background-color:var(--lu-black-100)}[_nghost-%COMP%]   .lu-day-wrapper.-today.-is-weekend[_ngcontent-%COMP%]   .lu-calendar-day[_ngcontent-%COMP%]:after{background-color:var(--lu-red-120)}[_nghost-%COMP%]   .lu-day-wrapper.-is-disabled[_ngcontent-%COMP%]{pointer-events:none}[_nghost-%COMP%]   .lu-day-wrapper.-is-disabled[_ngcontent-%COMP%]   .lu-calendar-day-backdrop[_ngcontent-%COMP%]{background-color:var(--lu-black-5);opacity:1}[_nghost-%COMP%]   .lu-day-wrapper.-is-disabled[_ngcontent-%COMP%]   .lu-calendar-day[_ngcontent-%COMP%]{opacity:.2}[_nghost-%COMP%]   .lu-day-wrapper.-is-disabled.-start-of-disabled[_ngcontent-%COMP%]   .lu-calendar-day-backdrop[_ngcontent-%COMP%]{border-bottom-left-radius:40px;border-top-left-radius:40px}[_nghost-%COMP%]   .lu-day-wrapper.-is-disabled.-end-of-disabled[_ngcontent-%COMP%]   .lu-calendar-day-backdrop[_ngcontent-%COMP%]{border-bottom-right-radius:40px;border-top-right-radius:40px}[_nghost-%COMP%]   .lu-day-wrapper.-start-of-disabled[_ngcontent-%COMP%]:not(.-end-of-disabled)   .lu-calendar-day-backdrop[_ngcontent-%COMP%]{border-radius:40px 0 0 40px}[_nghost-%COMP%]   .lu-day-wrapper.-start-of-disabled[_ngcontent-%COMP%]   .lu-calendar-day-backdrop[_ngcontent-%COMP%]{background-color:var(--lu-black-5);opacity:1}[_nghost-%COMP%]   .lu-day-wrapper.-end-of-disabled[_ngcontent-%COMP%]:not(.-start-of-disabled)   .lu-calendar-day-backdrop[_ngcontent-%COMP%]{border-radius:0 40px 40px 0}[_nghost-%COMP%]   .lu-day-wrapper.-end-of-disabled[_ngcontent-%COMP%]   .lu-calendar-day-backdrop[_ngcontent-%COMP%]{background-color:var(--lu-black-5);opacity:1}[_nghost-%COMP%]   .lu-day-wrapper.-is-weekend[_ngcontent-%COMP%]{color:var(--lu-red-120)}[_nghost-%COMP%]   .lu-day-wrapper.-active[_ngcontent-%COMP%]:before{border-radius:0;opacity:.2}[_nghost-%COMP%]   .lu-day-wrapper.-start-of-active[_ngcontent-%COMP%]:before{border-bottom-left-radius:40px;border-top-left-radius:40px;opacity:.2}[_nghost-%COMP%]   .lu-day-wrapper.-end-of-active[_ngcontent-%COMP%]:before{border-bottom-right-radius:40px;border-top-right-radius:40px;opacity:.2}[_nghost-%COMP%]   .lu-day-wrapper.-selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .lu-day-wrapper.-invalid[_ngcontent-%COMP%]{color:var(--lu-white);font-weight:600}[_nghost-%COMP%]   .lu-day-wrapper.-selected[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .lu-day-wrapper.-invalid[_ngcontent-%COMP%]:after{border-radius:40px;opacity:1}[_nghost-%COMP%]   .lu-day-wrapper.-selected.-selected[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .lu-day-wrapper.-invalid.-selected[_ngcontent-%COMP%]:after{background-color:var(--lu-primary)}[_nghost-%COMP%]   .lu-day-wrapper.-selected.-invalid[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .lu-day-wrapper.-invalid.-invalid[_ngcontent-%COMP%]:after{background-color:var(--lu-red-100)}[_nghost-%COMP%]   .lu-day-wrapper.-selected[_ngcontent-%COMP%]   .lu-calendar-day[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .lu-day-wrapper.-invalid[_ngcontent-%COMP%]   .lu-calendar-day[_ngcontent-%COMP%]:after{background-color:var(--lu-white)}"],
  data: {
    animation: [(0, O.X$)("monthAnimation", [(0, O.eR)(":increment", [(0, O.ru)([(0, O.IO)(":enter", [(0, O.oB)({
      transform: "translateY(100%)",
      position: "absolute",
      left: 0,
      top: 0,
      "z-index": 1
    }), (0, O.jt)("150ms cubic-bezier(0.4,0.0,0.2,1)", (0, O.oB)({
      transform: "translateY(0)"
    }))], {
      optional: !0,
      limit: 1
    }), (0, O.IO)(":leave", [(0, O.oB)({
      transform: "translateY(0%)"
    }), (0, O.jt)("150ms cubic-bezier(0.4,0.0,0.2,1)", (0, O.oB)({
      transform: "translateY(-100%)"
    }))], {
      optional: !0,
      limit: 1
    })])]), (0, O.eR)(":decrement", [(0, O.ru)([(0, O.IO)(":enter", [(0, O.oB)({
      transform: "translateY(-100%)",
      position: "absolute",
      left: 0,
      top: 0,
      "z-index": 1
    }), (0, O.jt)("150ms cubic-bezier(0.4,0.0,0.2,1)", (0, O.oB)({
      transform: "translateY(0)"
    }))], {
      optional: !0,
      limit: 1
    }), (0, O.IO)(":leave", [(0, O.oB)({
      transform: "translateY(0%)"
    }), (0, O.jt)("150ms cubic-bezier(0.4,0.0,0.2,1)", (0, O.oB)({
      transform: "translateY(100%)"
    }))], {
      optional: !0,
      limit: 1
    })])])])]
  },
  changeDetection: 0
});
