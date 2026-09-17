// Exact compiled component metadata; references belong to modules/32366.js
({
  type: j,
  selectors: [["lu-toggle"]],
  viewQuery: function (Le, ke) {
    if (1 & Le && (e.Gf(u, 7), e.Gf(T, 7)), 2 & Le) {
      let J;
      e.iGM(J = e.CRH()) && (ke.wrapper = J.first), e.iGM(J = e.CRH()) && (ke.circle = J.first);
    }
  },
  hostVars: 1,
  hostBindings: function (Le, ke) {
    2 & Le && e.uIk("data-lu-dragging", ke.dragging);
  },
  inputs: {
    label: "label"
  },
  features: [e._Bn([{
    provide: v.BU,
    useExisting: y
  }]), e.qOj],
  decls: 5,
  vars: 1,
  consts: [[1, "lu-toggle-wrapper", 3, "click"], ["wrapper", ""], [1, "lu-toggle-circle"], ["circle", ""], ["class", "lu-label", 3, "click", 4, "ngIf"], [1, "lu-label", 3, "click"], [4, "polymorpheusOutlet"]],
  template: function (Le, ke) {
    1 & Le && (e.TgZ(0, "div", 0, 1), e.NdJ("click", function () {
      return ke.toggle();
    }), e._UZ(2, "div", 2, 3), e.qZA(), e.YNc(4, B, 2, 1, "span", 4)), 2 & Le && (e.xp6(4), e.Q6J("ngIf", ke.label));
  },
  dependencies: [h.O5, x.Li],
  styles: ["@charset \"UTF-8\";[_ngcontent-%COMP%]:root{--lu-base-gutter: 8px;--lu-font: Open Sans, Segoe UI, Helvetica Neue, sans-serif;--lu-font-size: 15px;--lu-font-weight: normal;--lu-line-height: 24px;--lu-transition: .1s;--lu-text-color: var(--lu-primary-text);--lu-list-element-horizontal-space: 0;--lu-list-element-vertical-space: 0;--lu-disabled-background: var(--lu-black-5);--lu-base: #fff;--lu-border: var(--lu-black-40);--lu-border-hover: var(--lu-black-54);--lu-focus: var(--lu-special);--lu-error: var(--lu-red-100);--lu-warning: var(--lu-orange-100);--lu-floated-border: transparent;--lu-primary: var(--lu-teal-100);--lu-primary-rgb: var(--lu-teal-rgb-100);--lu-primary-text: var(--lu-black-80);--lu-primary-hover: var(--lu-teal-120);--lu-primary-active: var(--lu-teal-140);--lu-muted-text: var(--lu-black-54);--lu-divider: var(--lu-black-10);--lu-overlay-background: var(--lu-base);--lu-overlay-border: var(--lu-border);--lu-input-text-align: left;--lu-input-width: 100%;--lu-input-height: 40px;--lu-input-border-size: 1px;--lu-input-border-color: var(--lu-border);--lu-input-border-hover-color: var(--lu-border-hover);--lu-input-background-color: var(--lu-white);--lu-input-padding-left: calc(var(--lu-base-gutter) * 2);--lu-input-padding-right: calc(var(--lu-base-gutter) * 2);--lu-input-cursor: auto;--lu-button-background: transparent;--lu-button-text: var(--lu-primary);--lu-button-border: transparent;--lu-button-hover-background: rgba(var(--lu-primary-rgb), .2);--lu-button-hover-text: var(--lu-primary-hover);--lu-button-hover-border: transparent;--lu-button-active-background: rgba(var(--lu-primary-rgb), .3);--lu-button-active-text: var(--lu-primary-active);--lu-button-active-border: transparent;--lu-button-align: center;--lu-button-border-radius: 0;--lu-preloader-color: var(--lu-primary);--lu-preloader-background: rgba(255, 255, 255, .9);--lu-checkbox-color: var(--lu-primary);--lu-radio-color: var(--lu-primary);--lu-list-size: 100%;--lu-form-message-color: var(--lu-black-54);--lu-tag-background: var(--lu-black-40);--lu-tag-text: var(--lu-white);--lu-tag-border: var(--lu-black-40);--lu-tree-node-indent: 24px;--lu-tree-indent-color: var(--lu-black-20);--lu-tree-indent-hover-color: var(--lu-black-54);--lu-text-left-width: auto;--lu-text-right-width: auto;--lu-fade-color: var(--lu-base);--lu-chip-background: var(--lu-teal-10);--lu-chip-background-hover: var(--lu-teal-20);--lu-chip-background-active: var(--lu-teal-30);--lu-chip-background-checked: var(--lu-yellow-60);--lu-chip-background-disabled: rgb(242, 242, 242);--lu-chip-color: #333333;--lu-chip-color-hover: #0E5E5E;--lu-chip-color-active: #084D4D;--lu-chip-color-checked: var(--lu-chip-color);--lu-chip-color-disabled: #999999;--lu-chip-icon-color-disabled: rgb(179, 179, 179);--lu-progress-bar-height: 12px}[_nghost-%COMP%]   .lu-toggle-wrapper[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:middle;width:40px;height:22px;border-radius:24px;background-color:var(--lu-black-40);cursor:pointer;transition:background-color var(--lu-transition)}[_nghost-%COMP%]   .lu-toggle-wrapper[_ngcontent-%COMP%]   .lu-toggle-circle[_ngcontent-%COMP%]{position:absolute;left:3px;top:3px;height:calc(var(--lu-base-gutter) * 2);width:calc(var(--lu-base-gutter) * 2);border-radius:50%;background-color:var(--lu-base);user-select:none;transition:transform var(--lu-transition)}[data-lu-checked=true][_nghost-%COMP%]   .lu-toggle-wrapper[_ngcontent-%COMP%]{background-color:var(--lu-primary)}[data-lu-dragging=true][_nghost-%COMP%]{cursor:grabbing}[data-lu-dragging=true][_nghost-%COMP%]   .lu-toggle-wrapper[_ngcontent-%COMP%]{pointer-events:none}[data-lu-disabled=true][_nghost-%COMP%]   .lu-toggle-wrapper[_ngcontent-%COMP%]{background-color:var(--lu-black-15);cursor:unset}[data-lu-disabled=true][data-lu-checked=true][_nghost-%COMP%]   .lu-toggle-wrapper[_ngcontent-%COMP%]{background-color:var(--lu-black-40)}[_nghost-%COMP%]   .lu-label[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter);font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color)}"],
  changeDetection: 0
});
