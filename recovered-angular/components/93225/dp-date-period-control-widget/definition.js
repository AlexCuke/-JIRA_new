// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-date-period-control-widget"]],
  inputs: {
    widget: "widget",
    formControl: "formControl"
  },
  decls: 7,
  vars: 8,
  consts: [[3, "formControl", "startMinDate", "endMinDate", "startMaxDate", "endMaxDate"], ["luCalendarPeriodFieldsDelimiter", "", 2, "margin", "0 var(--lu-base-gutter)"], ["type", "error", 4, "ngIf"], ["type", "error"], ["icon", "warning", 3, "size"]],
  template: function (Pt, Ki) {
    1 & Pt && (t.TgZ(0, "lu-form-field")(1, "lu-calendar-period", 0)(2, "span", 1), t._uU(3, "—"), t.qZA()(), t.YNc(4, Eo, 3, 1, "lu-form-message", 2), t.YNc(5, Fo, 4, 5, "lu-form-message", 2), t.YNc(6, br, 4, 5, "lu-form-message", 2), t.qZA()), 2 & Pt && (t.xp6(1), t.Q6J("formControl", Ki.formControl)("startMinDate", Ki.getStartMinDate())("endMinDate", Ki.getEndMinDate())("startMaxDate", Ki.getStartMaxDate())("endMaxDate", Ki.getEndMaxDate()), t.xp6(3), t.Q6J("ngIf", null == Ki.formControl ? null : Ki.formControl.hasError("periodIsValid")), t.xp6(1), t.Q6J("ngIf", null == Ki.formControl ? null : Ki.formControl.hasError("periodStartMin")), t.xp6(1), t.Q6J("ngIf", null == Ki.formControl ? null : Ki.formControl.hasError("periodEndMin")));
  },
  dependencies: [qe.O5, a.JJ, a.oH, h.Hz, h.lD, ae.l, ke.q, x.F, qe.uU],
  styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     [data-lu-size=small]{--lu-input-width: 128px !important}"],
  changeDetection: 0
});
