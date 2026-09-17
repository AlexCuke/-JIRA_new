// Extracted from main; webpack module 78437. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    $: () => d
  });
  var t = i(94650),
    e = i(44348),
    a = i(93278);
  const M = class {
    constructor(A) {
      this.modalRef = A, this.title = "", this.onClose = () => this.modalRef.close();
    }
  };
  let d = M;
  M.ɵfac = function (N) {
    return new (N || M)(t.Y36(e.Rn));
  }, M.ɵcmp = t.Xpm({
    type: M,
    selectors: [["common-modal-wrapper"]],
    inputs: {
      title: "title",
      onClose: "onClose"
    },
    ngContentSelectors: ["*"],
    decls: 7,
    vars: 2,
    consts: [[1, "lu-modal", "dialog"], [1, "lu-modal-header"], [1, "lu-modal-header-title"], ["icon", "close", 1, "icon-margin", 3, "size", "click"], [1, "lu-modal-body"]],
    template: function (N, I) {
      1 & N && (t.F$t(), t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), t._uU(3), t.TgZ(4, "lu-svg-icon", 3), t.NdJ("click", function () {
        return I.onClose();
      }), t.qZA()()(), t.TgZ(5, "div", 4), t.Hsn(6), t.qZA()()), 2 & N && (t.xp6(3), t.hij(" ", I.title, " "), t.xp6(1), t.Q6J("size", 24));
    },
    dependencies: [a.q],
    styles: ["@media (min-width: 600px) and (max-width: 960px){  .cdk-global-overlay-wrapper:has(.full-screen-modal) .lu-modal{padding:0}  .cdk-global-overlay-wrapper:has(.full-screen-modal) .lu-modal .lu-modal-header-title{padding:16px;height:56px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 4px 8px #00000014,0 1px 2px #00000014}  .cdk-global-overlay-wrapper:has(.full-screen-modal) .lu-modal .lu-modal-body{padding:0 16px}}.lu-modal.dialog[_ngcontent-%COMP%]{min-width:448px}.icon-margin[_ngcontent-%COMP%]{margin-right:-8px;margin-top:-8px}"],
    changeDetection: 0
  });
});
