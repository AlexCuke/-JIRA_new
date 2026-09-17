// Exact compiled component metadata; references belong to modules/13207.js
({
  type: f,
  selectors: [["lu-option"]],
  hostVars: 5,
  hostBindings: function (x, u) {
    1 & x && e.NdJ("click", function () {
      return u.selectByUser();
    })("keydown.enter", function () {
      return u.selectByUser();
    })("blur", function () {
      return u.blurEvent();
    }), 2 & x && e.uIk("data-lu-size", u.size)("data-lu-hovered", u.hovered)("data-lu-option-state", u.state)("tabIndex", u.tabIndex)("data-lu-selected", u.isSelected);
  },
  inputs: {
    selectable: "selectable",
    size: "size",
    index: "index"
  },
  outputs: {
    onClick: "onClick",
    hover: "hover",
    blur: "blur"
  },
  features: [e._Bn([{
    provide: m.BU,
    useExisting: v
  }, {
    provide: M.qE,
    useExisting: v
  }]), e.qOj],
  ngContentSelectors: ["*"],
  decls: 1,
  vars: 0,
  template: function (x, u) {
    1 & x && (e.F$t(), e.Hsn(0));
  },
  styles: ["[_nghost-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);position:relative;display:block;flex-direction:row;cursor:pointer;width:100%;padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 2);--lu-line-height: 22px;--lu-option-hover: rgba(var(--lu-primary-rgb), .1);--lu-option-selected: rgba(var(--lu-primary-rgb), .2);--lu-option-disabled: rgba(0, 0, 0, .05);margin:var(--lu-option-margin)}[_nghost-%COMP%]:before{position:absolute;content:\"\";left:0;top:0;width:100%;height:100%;background-color:transparent;z-index:0}[_nghost-%COMP%]:hover:before, [_nghost-%COMP%]:focus:before, [data-lu-hovered=true][_nghost-%COMP%]:before{background-color:var(--lu-option-hover)}[disabled][_nghost-%COMP%]{background:var(--lu-option-disabled);pointer-events:none;--lu-text-color: rgba(51, 51, 51, .4)}[data-lu-selected=true][_nghost-%COMP%]{background-color:var(--lu-option-selected)}[data-lu-size=small][_nghost-%COMP%]{padding:5px calc(var(--lu-base-gutter) * 2)}[data-lu-option-state=error][_nghost-%COMP%]{background-color:rgba(var(--lu-red-rgb-100),.3)}[data-lu-option-state=warning][_nghost-%COMP%]{background-color:rgba(var(--lu-orange-rgb-100),.3)}"],
  changeDetection: 0
});
