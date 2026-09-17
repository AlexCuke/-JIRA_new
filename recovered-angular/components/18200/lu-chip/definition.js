// Exact compiled component metadata; references belong to modules/18200.js
({
  type: f,
  selectors: [["lu-chip"]],
  viewQuery: function (x, u) {
    if (1 & x && t.Gf(O, 5, t.SBq), 2 & x) {
      let T;
      t.iGM(T = t.CRH()) && (u.input = T.first);
    }
  },
  hostVars: 1,
  hostBindings: function (x, u) {
    2 & x && t.uIk("lu-background-theme", u.backgroundTheme);
  },
  inputs: {
    type: "type",
    uncheckable: "uncheckable",
    preventDeselect: "preventDeselect",
    name: "name",
    disabled: "disabled",
    checked: "checked",
    value: "value",
    backgroundTheme: "backgroundTheme"
  },
  outputs: {
    change: "change",
    touched: "touched",
    click: "click"
  },
  features: [t._Bn([{
    provide: a.JU,
    useExisting: (0, t.Gpc)(() => v),
    multi: !0
  }])],
  ngContentSelectors: ["*"],
  decls: 3,
  vars: 5,
  consts: [["data-test-role", "title", 1, "lu-chip", 3, "click"], ["class", "lu-chip-input", "data-test-role", "input", 3, "disabled", "type", "name", "value", "checked", "click", "change", 4, "ngIf"], ["data-test-role", "input", 1, "lu-chip-input", 3, "disabled", "type", "name", "value", "checked", "click", "change"], ["input", ""]],
  template: function (x, u) {
    1 & x && (t.F$t(), t.TgZ(0, "label", 0), t.NdJ("click", function (R) {
      return u.onClick(), R.stopPropagation();
    }), t.Hsn(1), t.YNc(2, L, 2, 5, "input", 1), t.qZA()), 2 & x && (t.ekj("checked", u.checked)("disabled", u.isDisabled), t.xp6(2), t.Q6J("ngIf", "button" !== u.type));
  },
  dependencies: [e.O5],
  styles: ["[lu-background-theme=gray][_nghost-%COMP%]{--lu-chip-background: #FFFFFF;--lu-chip-background-hover: var(--lu-chip-background);--lu-chip-background-active: var(--lu-chip-background);--lu-chip-background-disabled: rgb(255, 255, 255);--lu-chip-color-hover: #1D8585;--lu-chip-color-active: #157171}[_nghost-%COMP%]{display:flex;min-width:40px;min-height:32px;max-height:64px;-webkit-appearance:none;margin-bottom:auto;word-break:break-word}.lu-chip[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;height:100%;cursor:pointer;user-select:none;padding:4px 12px;background:var(--lu-chip-background);border-radius:16px;gap:8px;color:var(--lu-chip-color)}.lu-chip[_ngcontent-%COMP%]     lu-svg-icon{vertical-align:middle}.lu-chip[_ngcontent-%COMP%]:hover{background:var(--lu-chip-background-hover);color:var(--lu-chip-color-hover)}.lu-chip[_ngcontent-%COMP%]:active{background:var(--lu-chip-background-active);color:var(--lu-chip-color-active)}.lu-chip.checked[_ngcontent-%COMP%]{background:var(--lu-chip-background-checked);color:var(--lu-chip-color-checked)}.lu-chip.disabled[_ngcontent-%COMP%]{background:var(--lu-chip-background-disabled);color:var(--lu-chip-color-disabled);cursor:auto;--lu-svg-icon-color: var(--lu-chip-icon-color-disabled)}.lu-chip-input[_ngcontent-%COMP%]{display:none}"],
  changeDetection: 0
});
