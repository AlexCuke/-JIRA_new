// Exact compiled component metadata; references belong to modules/32619.js
({
  type: L,
  selectors: [["lu-radio"]],
  hostVars: 2,
  hostBindings: function (v, f) {
    2 & v && t.uIk("data-lu-color", f.color)("is-dashed", f.isDashed);
  },
  inputs: {
    color: "color",
    ignoreTextClick: "ignoreTextClick",
    isDashed: "isDashed",
    inputId: "inputId"
  },
  features: [t._Bn([{
    provide: a.BU,
    useExisting: L
  }]), t.qOj],
  ngContentSelectors: A,
  decls: 11,
  vars: 6,
  consts: [[1, "lu-radio-wrapper"], ["data-test-role", "input", 1, "lu-radio"], ["type", "radio", 3, "id", "disabled", "luChecked", "tabIndex", "luCheckedChange", "blur"], [1, "lu-radio-content"], [1, "lu-radio-icons", 3, "click"], [1, "lu-radio-text", 3, "click"], ["data-test-role", "title"], [1, "lu-radio-description"]],
  template: function (v, f) {
    1 & v && (t.F$t(b), t.TgZ(0, "label", 0)(1, "div", 1)(2, "input", 2), t.NdJ("luCheckedChange", function () {
      return f.toggle();
    })("blur", function () {
      return f.onTouched();
    }), t.qZA()(), t.TgZ(3, "div", 3)(4, "span", 4), t.NdJ("click", function (h) {
      return f.onTextClick(h);
    }), t.Hsn(5), t.qZA(), t.TgZ(6, "div", 5), t.NdJ("click", function (h) {
      return f.onTextClick(h);
    }), t.TgZ(7, "span", 6), t.Hsn(8, 1), t.qZA(), t.TgZ(9, "div", 7), t.Hsn(10, 2), t.qZA()()()()), 2 & v && (t.xp6(2), t.Q6J("id", f.inputId)("disabled", f.disabled)("luChecked", f.checked)("tabIndex", -1), t.xp6(4), t.ekj("-is-click-ignored", f.ignoreTextClick));
  },
  dependencies: [d._],
  styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:inline-flex;align-items:flex-start;flex-direction:column;font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color)}[_nghost-%COMP%]:not(:last-of-type){margin-bottom:var(--lu-list-element-vertical-space);margin-right:var(--lu-list-element-horizontal-space)}[_nghost-%COMP%]:hover:not([data-lu-checked=true]){--lu-border: var(--lu-border-hover)}[_nghost-%COMP%]:not([data-lu-disabled=true])   .lu-radio-wrapper[_ngcontent-%COMP%]{cursor:pointer}[data-lu-checked=true][is-dashed=true][_nghost-%COMP%]   .lu-radio-content[_ngcontent-%COMP%]{border-bottom:none;color:var(--lu-text-color)}[data-lu-checked=true][_nghost-%COMP%]   .lu-radio[_ngcontent-%COMP%]{border-width:5px;border-color:var(--lu-radio-color)}[data-lu-checked=true][_nghost-%COMP%]   .lu-radio-content[_ngcontent-%COMP%]{border-bottom:none;color:var(--lu-text-color)}[is-dashed=true][_nghost-%COMP%]{flex-direction:row}[is-dashed=true][_nghost-%COMP%]   .lu-radio[_ngcontent-%COMP%]{display:none}[is-dashed=true][_nghost-%COMP%]   .lu-radio-content[_ngcontent-%COMP%]{border-bottom:1px dashed var(--lu-radio-color);color:var(--lu-radio-color);margin-right:var(--lu-list-element-horizontal-space)}[is-dashed=true][_nghost-%COMP%]   .lu-radio-text[_ngcontent-%COMP%]{margin-left:0}[is-dashed=true][_nghost-%COMP%]:not(:last-of-type):after{content:\" / \"}[data-lu-intermediate=true][_nghost-%COMP%]   .lu-radio[_ngcontent-%COMP%]{border-color:var(--lu-radio-color)}[data-lu-disabled=true][data-lu-checked=true][_nghost-%COMP%]   .lu-radio[_ngcontent-%COMP%], [data-lu-disabled=true][data-lu-intermediate=true][_nghost-%COMP%]   .lu-radio[_ngcontent-%COMP%]{opacity:.4}[data-lu-disabled=true][data-lu-checked=false][_nghost-%COMP%]{--lu-radio-color: var(--lu-black-5);--lu-border: var(--lu-black-20);--lu-primary-text: var(--lu-black-40)}[data-lu-disabled=true][data-lu-checked=false][_nghost-%COMP%]   .lu-radio-icons[_ngcontent-%COMP%]{opacity:.4}[data-lu-color=teal][_nghost-%COMP%]{--lu-radio-color: var(--lu-teal-100)}[data-lu-color=teal][_nghost-%COMP%]   lu-svg-icon[icon=line-radio][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-teal-100)}[data-lu-color=yellow][_nghost-%COMP%]{--lu-radio-color: var(--lu-yellow-100)}[data-lu-color=yellow][_nghost-%COMP%]   lu-svg-icon[icon=line-radio][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-yellow-100)}[data-lu-color=blue][_nghost-%COMP%]{--lu-radio-color: var(--lu-blue-100)}[data-lu-color=blue][_nghost-%COMP%]   lu-svg-icon[icon=line-radio][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-blue-100)}[data-lu-color=red][_nghost-%COMP%]{--lu-radio-color: var(--lu-red-100)}[data-lu-color=red][_nghost-%COMP%]   lu-svg-icon[icon=line-radio][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-red-100)}[data-lu-color=red][_nghost-%COMP%]   .lu-radio[_ngcontent-%COMP%]{border-color:var(--lu-red-100);--lu-input-border-size: 2px}[data-lu-color=orange][_nghost-%COMP%]{--lu-radio-color: var(--lu-orange-100)}[data-lu-color=orange][_nghost-%COMP%]   lu-svg-icon[icon=line-radio][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-orange-100)}[data-lu-color=orange][_nghost-%COMP%]   .lu-radio[_ngcontent-%COMP%]{border-color:var(--lu-orange-100);--lu-input-border-size: 2px}[data-lu-color=green][_nghost-%COMP%]{--lu-radio-color: var(--lu-green-100)}[data-lu-color=green][_nghost-%COMP%]   lu-svg-icon[icon=line-radio][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-green-100)}[data-lu-color=black][_nghost-%COMP%]{--lu-radio-color: var(--lu-black-100)}[data-lu-color=black][_nghost-%COMP%]   lu-svg-icon[icon=line-radio][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-100)}[data-lu-color=purple][_nghost-%COMP%]{--lu-radio-color: var(--lu-purple-100)}[data-lu-color=purple][_nghost-%COMP%]   lu-svg-icon[icon=line-radio][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-purple-100)}input[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;width:1px;outline:0}.lu-radio-wrapper[_ngcontent-%COMP%]{display:flex}.lu-radio[_ngcontent-%COMP%]{position:relative;width:calc(var(--lu-base-gutter) * 2);height:calc(var(--lu-base-gutter) * 2);border:var(--lu-input-border-size) solid;border-color:var(--lu-border);border-radius:50%;margin:calc(var(--lu-base-gutter) / 2) 0;flex:0 0 calc(var(--lu-base-gutter) * 2);background-color:var(--lu-base);transition:border var(--lu-transition);box-sizing:border-box}.lu-radio[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{position:absolute;left:calc(var(--lu-input-border-size) * -1);top:calc(var(--lu-input-border-size) * -1)}.lu-radio-content[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.lu-radio-icons[_ngcontent-%COMP%]{display:flex;margin-left:var(--lu-base-gutter);margin-top:calc(var(--lu-base-gutter) / 2)}.lu-radio-icons[_ngcontent-%COMP%]:empty{display:none}.lu-radio-text[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.lu-radio-text.-is-click-ignored[_ngcontent-%COMP%]{cursor:auto}.lu-radio-text[_ngcontent-%COMP%]:empty{display:none}.lu-radio-description[_ngcontent-%COMP%]{font-size:13px;line-height:20px;color:var(--lu-muted-text)}"],
  changeDetection: 0
});
