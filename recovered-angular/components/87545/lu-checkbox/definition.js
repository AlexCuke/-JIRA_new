// Exact compiled component metadata; references belong to modules/87545.js
({
  type: x,
  selectors: [["lu-checkbox"]],
  contentQueries: function (T, R, B) {
    if (1 & T && t.Suo(B, f, 5), 2 & T) {
      let y;
      t.iGM(y = t.CRH()) && (R.description = y.first);
    }
  },
  hostVars: 1,
  hostBindings: function (T, R) {
    2 & T && t.uIk("data-lu-color", R.color);
  },
  inputs: {
    inputId: "inputId",
    color: "color",
    checked: "checked",
    ignoreTextClick: "ignoreTextClick"
  },
  features: [t._Bn([{
    provide: m.BU,
    useExisting: x
  }]), t.qOj],
  ngContentSelectors: v,
  decls: 12,
  vars: 11,
  consts: [[1, "lu-checkbox-wrapper"], ["data-test-role", "input", 1, "lu-checkbox"], ["type", "checkbox", 3, "id", "disabled", "luChecked", "tabIndex", "luCheckedChange", "blur"], ["icon", "line-checkbox", 4, "ngIf"], ["icon", "checkbox", 4, "ngIf"], [1, "lu-checkbox-content"], [1, "lu-checkbox-icons", 3, "click"], ["luElementRef", "", "data-test-role", "title", 1, "lu-checkbox-text", 3, "click"], ["textElement", "elementRef"], ["class", "lu-checkbox-description", 4, "ngIf"], ["icon", "line-checkbox"], ["icon", "checkbox"], [1, "lu-checkbox-description"]],
  template: function (T, R) {
    if (1 & T && (t.F$t(C), t.TgZ(0, "label", 0)(1, "div", 1)(2, "input", 2), t.NdJ("luCheckedChange", function () {
      return R.toggle();
    })("blur", function () {
      return R.onTouched();
    }), t.qZA(), t.YNc(3, I, 1, 0, "lu-svg-icon", 3), t.YNc(4, O, 1, 0, "lu-svg-icon", 4), t.qZA(), t.TgZ(5, "div", 5)(6, "span", 6), t.NdJ("click", function (y) {
      return R.onTextClick(y);
    }), t.Hsn(7), t.qZA(), t.TgZ(8, "div", 7, 8), t.NdJ("click", function (y) {
      return R.onTextClick(y);
    }), t.Hsn(10, 1), t.YNc(11, L, 2, 0, "div", 9), t.qZA()()()), 2 & T) {
      const B = t.MAs(9);
      t.xp6(1), t.ekj("with-margin", !!B.nativeElement.textContent), t.xp6(1), t.Q6J("id", R.inputId)("disabled", R.disabled)("luChecked", R.checked)("tabIndex", -1), t.xp6(1), t.Q6J("ngIf", R.isIntermediate), t.xp6(1), t.Q6J("ngIf", R.checked), t.xp6(4), t.ekj("-is-click-ignored", R.ignoreTextClick), t.xp6(3), t.Q6J("ngIf", R.description);
    }
  },
  dependencies: [M.O5, b.q, A._, N.n],
  styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:inline-flex;align-items:flex-start;flex-direction:column;font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color)}[_nghost-%COMP%]:not(:last-of-type){margin-bottom:var(--lu-list-element-vertical-space);margin-right:var(--lu-list-element-horizontal-space)}[_nghost-%COMP%]:hover:not([data-lu-checked=true]){--lu-border: var(--lu-border-hover)}[_nghost-%COMP%]:not([data-lu-disabled=true])   .lu-checkbox-wrapper[_ngcontent-%COMP%]{cursor:pointer}[data-lu-checked=true][_nghost-%COMP%]   .lu-checkbox[_ngcontent-%COMP%]{background-color:var(--lu-checkbox-color);border-color:var(--lu-checkbox-color)}[data-lu-intermediate=true][_nghost-%COMP%]   .lu-checkbox[_ngcontent-%COMP%]{border-color:var(--lu-checkbox-color)}[data-lu-disabled=true][data-lu-checked=true][_nghost-%COMP%]   .lu-checkbox[_ngcontent-%COMP%], [data-lu-disabled=true][data-lu-intermediate=true][_nghost-%COMP%]   .lu-checkbox[_ngcontent-%COMP%]{opacity:.4}[data-lu-disabled=true][data-lu-checked=false][_nghost-%COMP%]{--lu-checkbox-color: var(--lu-black-5);--lu-border: var(--lu-black-20);--lu-primary-text: var(--lu-black-40)}[data-lu-disabled=true][data-lu-checked=false][_nghost-%COMP%]   .lu-checkbox-icons[_ngcontent-%COMP%]{opacity:.4}[data-lu-color=teal][_nghost-%COMP%]{--lu-checkbox-color: var(--lu-teal-100)}[data-lu-color=teal][_nghost-%COMP%]   lu-svg-icon[icon=line-checkbox][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-teal-100)}[data-lu-color=yellow][_nghost-%COMP%]{--lu-checkbox-color: var(--lu-yellow-100)}[data-lu-color=yellow][_nghost-%COMP%]   lu-svg-icon[icon=line-checkbox][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-yellow-100)}[data-lu-color=blue][_nghost-%COMP%]{--lu-checkbox-color: var(--lu-blue-100)}[data-lu-color=blue][_nghost-%COMP%]   lu-svg-icon[icon=line-checkbox][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-blue-100)}[data-lu-color=red][_nghost-%COMP%]{--lu-checkbox-color: var(--lu-red-100)}[data-lu-color=red][_nghost-%COMP%]   lu-svg-icon[icon=line-checkbox][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-red-100)}[data-lu-color=red][_nghost-%COMP%]   .lu-checkbox[_ngcontent-%COMP%]{border-color:var(--lu-red-100);--lu-input-border-size: 2px}[data-lu-color=orange][_nghost-%COMP%]{--lu-checkbox-color: var(--lu-orange-100)}[data-lu-color=orange][_nghost-%COMP%]   lu-svg-icon[icon=line-checkbox][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-orange-100)}[data-lu-color=orange][_nghost-%COMP%]   .lu-checkbox[_ngcontent-%COMP%]{border-color:var(--lu-orange-100);--lu-input-border-size: 2px}[data-lu-color=green][_nghost-%COMP%]{--lu-checkbox-color: var(--lu-green-100)}[data-lu-color=green][_nghost-%COMP%]   lu-svg-icon[icon=line-checkbox][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-green-100)}[data-lu-color=black][_nghost-%COMP%]{--lu-checkbox-color: var(--lu-black-100)}[data-lu-color=black][_nghost-%COMP%]   lu-svg-icon[icon=line-checkbox][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-100)}[data-lu-color=purple][_nghost-%COMP%]{--lu-checkbox-color: var(--lu-purple-100)}[data-lu-color=purple][_nghost-%COMP%]   lu-svg-icon[icon=line-checkbox][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-purple-100)}input[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;width:1px;outline:0}.lu-checkbox-wrapper[_ngcontent-%COMP%]{display:flex}.lu-checkbox[_ngcontent-%COMP%]{position:relative;width:calc(var(--lu-base-gutter) * 2);height:calc(var(--lu-base-gutter) * 2);border:var(--lu-input-border-size) solid;border-color:var(--lu-border);flex:0 0 calc(var(--lu-base-gutter) * 2);background-color:var(--lu-base);transition:background-color var(--lu-transition);box-sizing:border-box}.lu-checkbox[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{position:absolute;left:calc(var(--lu-input-border-size) * -1);top:calc(var(--lu-input-border-size) * -1)}.lu-checkbox.with-margin[_ngcontent-%COMP%]{margin:calc(var(--lu-base-gutter) / 2) 0}.lu-checkbox-content[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.lu-checkbox-icons[_ngcontent-%COMP%]{display:flex;margin-left:var(--lu-base-gutter);margin-top:calc(var(--lu-base-gutter) / 2)}.lu-checkbox-icons[_ngcontent-%COMP%]:empty{display:none}.lu-checkbox-text[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.lu-checkbox-text.-is-click-ignored[_ngcontent-%COMP%]{cursor:auto}.lu-checkbox-text[_ngcontent-%COMP%]:empty{display:none}.lu-checkbox-description[_ngcontent-%COMP%]{font-size:13px;line-height:20px;color:var(--lu-muted-text)}"],
  data: {
    animation: [a.Hl]
  },
  changeDetection: 0
});
