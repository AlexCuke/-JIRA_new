// Extracted from main; webpack module 21028. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    z: () => M
  });
  var t = i(3977),
    e = i(94650),
    a = i(44348),
    m = i(9073),
    d = i(78437);
  const b = class {
    constructor(N, I) {
      this.modalRef = N, this.data = I, this.title = I.title, this.message = I.message;
    }
    onCancel() {
      this.modalRef.close();
    }
    onDelete() {
      this.modalRef.close(!0);
    }
  };
  let M = b;
  b.ɵfac = function (I) {
    return new (I || b)(e.Y36(a.Rn), e.Y36(t.UM));
  }, b.ɵcmp = e.Xpm({
    type: b,
    selectors: [["app-delete-modal"]],
    decls: 8,
    vars: 6,
    consts: [[3, "title"], [1, "btn-wrapper"], ["lu-button-outer", "", 3, "size", "color", "click"], ["lu-button-raised", "", 3, "size", "color", "click"]],
    template: function (I, O) {
      1 & I && (e.TgZ(0, "common-modal-wrapper", 0)(1, "p"), e._uU(2), e.qZA(), e.TgZ(3, "div", 1)(4, "button", 2), e.NdJ("click", function () {
        return O.onCancel();
      }), e._uU(5, "Отменить"), e.qZA(), e.TgZ(6, "button", 3), e.NdJ("click", function () {
        return O.onDelete();
      }), e._uU(7, "Удалить"), e.qZA()()()), 2 & I && (e.Q6J("title", O.title), e.xp6(2), e.Oqu(O.message), e.xp6(2), e.Q6J("size", "medium")("color", "blue"), e.xp6(2), e.Q6J("size", "medium")("color", "red"));
    },
    dependencies: [m.mc, d.$],
    styles: ["[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{width:400px}[_nghost-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:end;gap:16px}"]
  });
});
