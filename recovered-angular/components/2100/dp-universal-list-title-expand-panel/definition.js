// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-title-expand-panel"]],
  inputs: {
    viewData: "viewData",
    formGroupBuilder: "formGroupBuilder"
  },
  outputs: {
    changeFilter: "changeFilter"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "expand-panel-toggle"], ["luInputWrapperBefore", "", 1, "expand-panel-toggle-icon", 3, "icon", "size", "click"], [1, "expand-panel__content", "expand-panel-content", 3, "expanded", "content", "formGroup"], ["content", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngSwitch"], ["class", "expand-panel-text-control", 4, "ngSwitchCase"], [1, "expand-panel-text-control"], ["luInput", "", "luInputString", "", 3, "placeholder", "formControlName"], ["luInputWrapperAfter", "", 1, "empty-form-control-icon", 3, "ngClass", "icon", "size", "click"]],
  template: function (z, De) {
    1 & z && t.YNc(0, xt, 6, 5, "ng-container", 0), 2 & z && t.Q6J("ngIf", De.formGroup && De.viewData.widgets.length > 0);
  },
  dependencies: [b.mk, b.sg, b.O5, b.RF, b.n9, L.q, u.HY, u.kH, u.Fj, T.L, R.H, A.Fj, A.JJ, A.JL, A.sg, A.u, B.G],
  styles: ["[_nghost-%COMP%]{display:flex;align-items:center}.expand-panel-content[_ngcontent-%COMP%]{width:100%}.expand-panel__content[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.expand-panel-toggle[_ngcontent-%COMP%]{width:40px;display:flex;justify-content:center}.empty-form-control-icon[_ngcontent-%COMP%], .expand-panel-toggle-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-blue-100)}.reset-form-control[_ngcontent-%COMP%]{cursor:pointer;--lu-svg-icon-color: var(--lu-black-40)}.reset-form-control[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: var(--lu-black-80)}.search-input[_ngcontent-%COMP%]{width:500px}  .expand-panel-text-control .lu-input-container:after,   lu-floated-border:after{border-radius:calc(var(--lu-base-gutter) * .5)}"],
  changeDetection: 0
});
