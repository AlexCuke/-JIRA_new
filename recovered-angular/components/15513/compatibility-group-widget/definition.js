// Exact compiled component metadata; references belong to modules/15513.js
({
  type: qC,
  selectors: [["compatibility-group-widget"]],
  inputs: {
    widget: "widget",
    formControl: "formControl",
    parentFormGroup: "parentFormGroup"
  },
  standalone: !0,
  features: [e.jDz],
  decls: 7,
  vars: 2,
  consts: [[1, "compatibility-widget"], [1, "compatibility-widget__label"], [1, "compatibility-filter"], ["type", "autocomplete", "placeholder", "Введите или выберите из списка", 3, "formControl", "displayValueFn"], ["compatibilityComboBox", ""], [3, "items", "itemContent", 4, "luData"], [3, "items", "itemContent"], ["compatibilityTemplate", ""], [3, "innerHTML"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0)(1, "span", 1), e._uU(2, "Группа совместимости"), e.qZA(), e.TgZ(3, "div", 2)(4, "lu-combobox-multiple", 3, 4), e.YNc(6, ES, 4, 5, "lu-data-list", 5), e.qZA()()()), 2 & o && (e.xp6(4), e.Q6J("formControl", D.formControl)("displayValueFn", D.displayValue.bind(D)));
  },
  dependencies: [vo.ez, lr.Y, lr.v, ef.X, ef.l, o_.F, o_.J, bg.j, bg.e, _a.X, pr.UX, pr.JJ, pr.oH, Km.n, Cm.u, Cm.g],
  styles: [".compatibility-widget[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.compatibility-filter[_ngcontent-%COMP%]{background:#fff}.option[_ngcontent-%COMP%]{padding:0!important}"]
});
