// Exact compiled component metadata; references belong to modules/15513.js
({
  type: A0,
  selectors: [["age-range-custom-widget"]],
  inputs: {
    widget: "widget",
    formControl: "formControl",
    parentFormGroup: "parentFormGroup"
  },
  standalone: !0,
  features: [e.jDz],
  decls: 9,
  vars: 2,
  consts: [[1, "age-range-custom-widget"], ["lu-label", "Возраст", 3, "formGroup"], [1, "age-range-custom-widget__inputs-container"], [1, "age-range-custom-widget__min-input-wrapper"], ["formControlName", "min", "luInput", "", "luInputNumber", "", "maxlength", "3"], [1, "age-range-custom-widget__inputs-divider"], [1, "age-range-custom-widget__max-input-wrapper"], ["formControlName", "max", "luInput", "", "luInputNumber", "", "maxlength", "3"], ["type", "error", 4, "ngIf"], ["type", "error"], ["icon", "warning", 3, "size"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0)(1, "label", 1)(2, "div", 2)(3, "lu-input-wrapper", 3), e._UZ(4, "input", 4), e.qZA(), e._UZ(5, "span", 5), e.TgZ(6, "lu-input-wrapper", 6), e._UZ(7, "input", 7), e.qZA()(), e.YNc(8, AL, 3, 1, "lu-form-message", 8), e.qZA()()), 2 & o && (e.xp6(1), e.Q6J("formGroup", D.agePeriodFormGroup), e.xp6(7), e.Q6J("ngIf", D.agePeriodFormGroup.hasError("invalidRange")));
  },
  dependencies: [vo.ez, vo.O5, Oa.h, Oa.q, oh.c, oh.l, Ju.LA, Ju.HY, id.f, id.L, ih.Y, ih.z, pr.UX, pr.Fj, pr.JJ, pr.JL, pr.nD, pr.sg, pr.u, go.Ki],
  styles: ["@charset \"UTF-8\";.age-range-custom-widget__inputs-container[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;align-items:center}.age-range-custom-widget__min-input-wrapper[_ngcontent-%COMP%], .age-range-custom-widget__max-input-wrapper[_ngcontent-%COMP%]{width:80px}.age-range-custom-widget__inputs-divider[_ngcontent-%COMP%]{color:#999;font-size:15px;line-height:24px;font-weight:400;letter-spacing:0%;padding-left:8px;padding-right:8px}.age-range-custom-widget__inputs-divider[_ngcontent-%COMP%]:before{content:var(--age-range-custom-widget-divider-symbol, \"\\2014\")}"],
  changeDetection: 0
});
