// Exact compiled component metadata; references belong to modules/6998.js
({
  type: x,
  selectors: [["", "lu-action-message", ""]],
  inputs: {
    message: ["lu-action-message", "message"],
    linkContent: "linkContent"
  },
  outputs: {
    action: "action"
  },
  features: [d.TTD],
  attrs: I,
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "lu-message-link-wrapper", 3, "click", 4, "ngIf"], [1, "lu-message-link-wrapper", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "lu-message-link"]],
  template: function (T, R) {
    1 & T && d.YNc(0, v, 3, 2, "ng-container", 0), 2 & T && d.Q6J("ngForOf", R.messageParts);
  },
  dependencies: [A.sg, A.O5, N.Li],
  styles: ["[_nghost-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color)}.lu-message-link[_ngcontent-%COMP%]{display:inline-block;max-height:var(--lu-line-height);border-bottom:1px dashed;color:var(--lu-primary);cursor:pointer}.lu-message-link[_ngcontent-%COMP%]:link, .lu-message-link[_ngcontent-%COMP%]:visited{color:var(--lu-primary)}.lu-message-link[_ngcontent-%COMP%]:hover{color:var(--lu-primary-active);text-decoration:none}"],
  changeDetection: 0
});
