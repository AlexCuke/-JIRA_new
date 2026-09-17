// Exact compiled component metadata; references belong to modules/91854.js
({
  type: le,
  selectors: [["lu-message"]],
  hostVars: 4,
  hostBindings: function (Se, qe) {
    1 & Se && t.WFA("@messageAnimation.start", function (We) {
      return qe.animationEventChange(We);
    })("@messageAnimation.done", function (We) {
      return qe.animationEventChange(We);
    }), 2 & Se && (t.uIk("data-test-role", qe.dataTestRole)("data-test-role-type", qe.type)("data-lu-message-type", qe.type), t.d8E("@messageAnimation", qe.state));
  },
  decls: 2,
  vars: 2,
  consts: [["class", "lu-message-wrapper", 4, "ngIf"], [4, "ngIf"], [1, "lu-message-wrapper"], [1, "lu-message-close", 3, "mousedown"], ["icon", "close", "size", "24"], ["class", "lu-message-title", 4, "ngIf"], [1, "lu-message-text", 3, "lu-action-message", "linkContent", "action"], ["linkContent", ""], ["class", "lu-message-buttons", 4, "ngIf"], [1, "lu-message-title"], [1, "lu-message-link", 3, "id"], [1, "lu-message-buttons"], ["lu-button", "", 3, "click", 4, "ngFor", "ngForOf"], ["lu-button", "", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function (Se, qe) {
    1 & Se && (t.YNc(0, Le, 8, 4, "div", 0), t.YNc(1, fe, 2, 3, "ng-container", 1)), 2 & Se && (t.Q6J("ngIf", qe.isMessageString), t.xp6(1), t.Q6J("ngIf", !qe.isMessageString));
  },
  dependencies: [e.sg, e.O5, a.q, N.Li, m.mc, d.xY],
  styles: ["[_nghost-%COMP%]{--lu-text-color: var(--lu-white);--lu-button-background: transparent;--lu-button-text: var(--lu-white);--lu-button-border: var(--lu-white);--lu-button-hover-background: var(--lu-white);--lu-button-hover-text: var(--lu-black-80);--lu-button-active-background: var(--lu-button-hover-background);--lu-button-active-text: var(--lu-button-hover-text);position:relative;display:flex;width:400px;margin-bottom:var(--lu-base-gutter);align-items:center;font-size:15px;line-height:24px}[_nghost-%COMP%]:before{background-color:var(--lu-black-80)}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]:hover   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.8}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.3;--lu-svg-icon-color: var(--lu-white)}[_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]{cursor:pointer;color:var(--lu-yellow-100);text-decoration:underline}[_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]:hover{color:var(--lu-yellow-140)}[_nghost-%COMP%]:before{position:absolute;content:\"\";width:100%;height:100%;z-index:-1;opacity:.92}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]{padding:calc(var(--lu-base-gutter) * 3);padding-right:48px}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-title[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);font-weight:600;margin-bottom:var(--lu-base-gutter)}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-text[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color)}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-buttons[_ngcontent-%COMP%]{display:flex;margin-top:calc(var(--lu-base-gutter) * 2)}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]{position:absolute;right:0;top:0;bottom:0;cursor:pointer}[_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   lu-svg-icon[icon=close][_ngcontent-%COMP%]{width:40px;height:40px;margin-right:var(--lu-base-gutter);margin-top:var(--lu-base-gutter)}[data-lu-message-type=success][_nghost-%COMP%]{--lu-text-color: var(--lu-white);--lu-button-background: transparent;--lu-button-text: var(--lu-white);--lu-button-border: var(--lu-white);--lu-button-hover-background: var(--lu-white);--lu-button-hover-text: var(--lu-green-120);--lu-button-active-background: var(--lu-button-hover-background);--lu-button-active-text: var(--lu-button-hover-text)}[data-lu-message-type=success][_nghost-%COMP%]:before{background-color:var(--lu-green-120)}[data-lu-message-type=success][_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]:hover   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.8}[data-lu-message-type=success][_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.3;--lu-svg-icon-color: var(--lu-white)}[data-lu-message-type=success][_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]{cursor:pointer;color:var(--lu-yellow-100);text-decoration:underline}[data-lu-message-type=success][_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]:hover{color:var(--lu-yellow-140)}[data-lu-message-type=warning][_nghost-%COMP%]{--lu-text-color: var(--lu-black-80);--lu-button-background: transparent;--lu-button-text: var(--lu-black-80);--lu-button-border: var(--lu-black-80);--lu-button-hover-background: var(--lu-black-80);--lu-button-hover-text: var(--lu-white);--lu-button-active-background: var(--lu-button-hover-background);--lu-button-active-text: var(--lu-button-hover-text)}[data-lu-message-type=warning][_nghost-%COMP%]:before{background-color:var(--lu-yellow-120)}[data-lu-message-type=warning][_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]:hover   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.4}[data-lu-message-type=warning][_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.15;--lu-svg-icon-color: var(--lu-black-80)}[data-lu-message-type=warning][_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]{cursor:pointer;color:var(--lu-teal-100);text-decoration:underline}[data-lu-message-type=warning][_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]:hover{color:var(--lu-teal-140)}[data-lu-message-type=error][_nghost-%COMP%]{--lu-text-color: var(--lu-white);--lu-button-background: transparent;--lu-button-text: var(--lu-white);--lu-button-border: var(--lu-white);--lu-button-hover-background: var(--lu-white);--lu-button-hover-text: var(--lu-red-120);--lu-button-active-background: var(--lu-button-hover-background);--lu-button-active-text: var(--lu-button-hover-text)}[data-lu-message-type=error][_nghost-%COMP%]:before{background-color:var(--lu-red-120)}[data-lu-message-type=error][_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]:hover   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.8}[data-lu-message-type=error][_nghost-%COMP%]   .lu-message-wrapper[_ngcontent-%COMP%]   .lu-message-close[_ngcontent-%COMP%]   lu-svg-icon[icon=close][_ngcontent-%COMP%]{opacity:.3;--lu-svg-icon-color: var(--lu-white)}[data-lu-message-type=error][_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]{cursor:pointer;color:var(--lu-yellow-100);text-decoration:underline}[data-lu-message-type=error][_nghost-%COMP%]   .lu-message-link[_ngcontent-%COMP%]:hover{color:var(--lu-yellow-140)}"],
  data: {
    animation: [(0, I.X$)("messageAnimation", [(0, I.eR)("* => enter", [(0, I.oB)({
      transform: "translateX(100%)",
      height: "0px",
      "margin-bottom": "0",
      opacity: 0
    }), (0, I.jt)("250ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, I.oB)({
      transform: "translateX(0%)",
      height: "*",
      "margin-bottom": "*",
      opacity: 1
    }))]), (0, I.eR)("* => exit", [(0, I.oB)({
      transform: "translateX(0%)",
      height: "*",
      "margin-bottom": "*",
      opacity: 1
    }), (0, I.jt)("250ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, I.oB)({
      transform: "translateX(100%)",
      height: "0px",
      "margin-bottom": "0",
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
