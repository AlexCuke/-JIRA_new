// Exact compiled component metadata; references belong to modules/32428.js
({
  type: Et,
  selectors: [["lu-tab-header-item"]],
  hostVars: 1,
  hostBindings: function (Me, Ke) {
    1 & Me && t.NdJ("click", function (Ee) {
      return Ke.clickEvent(Ee);
    }), 2 & Me && t.uIk("data-lu-selected", Ke.isSelected);
  },
  inputs: {
    index: "index",
    selectedIndex: "selectedIndex",
    content: "content",
    tab: "tab"
  },
  outputs: {
    selectedIndexChange: "selectedIndexChange",
    changeContent: "changeContent"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "polymorpheusOutlet"]],
  template: function (Me, Ke) {
    1 & Me && t.YNc(0, Y, 2, 1, "ng-container", 0), 2 & Me && t.Q6J("polymorpheusOutlet", Ke.content);
  },
  dependencies: [O.Li],
  styles: ["[_nghost-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);position:relative;display:flex;justify-content:center;align-items:center;cursor:pointer;user-select:none;margin-right:calc(var(--lu-base-gutter) * 4);white-space:nowrap;--lu-font-weight: 600;--lu-line-height: 48px;--lu-text-color: var(--lu-primary-hover)}[_nghost-%COMP%]:hover:not([data-lu-selected=true]){--lu-text-color: var(--lu-primary-active)}[data-lu-selected=true][_nghost-%COMP%]{--lu-text-color: var(--lu-black-80);--lu-badge-background: var(--lu-black-10);--lu-badge-text: var(--lu-black-54)}"],
  changeDetection: 0
});
