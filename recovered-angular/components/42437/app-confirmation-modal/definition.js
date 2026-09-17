// Exact compiled component metadata; references belong to modules/42437.js
({
  type: ki,
  selectors: [["app-confirmation-modal"]],
  hostBindings: function (Oi, Ji) {
    1 & Oi && e.NdJ("keyup.esc", function () {
      return Ji.onKeyUp();
    }, !1, e.Jf7);
  },
  standalone: !0,
  features: [e.jDz],
  decls: 8,
  vars: 7,
  consts: [[1, "btn-wrapper"], ["lu-button-outer", "", 3, "size", "color", "click"], ["lu-button-raised", "", 3, "size", "color", "click"]],
  template: function (Oi, Ji) {
    1 & Oi && (e.ynx(0), e.TgZ(1, "p"), e._uU(2), e.qZA(), e.TgZ(3, "div", 0)(4, "button", 1), e.NdJ("click", function () {
      return Ji.modalRef.close();
    }), e._uU(5), e.qZA(), e.TgZ(6, "button", 2), e.NdJ("click", function () {
      return Ji.modalRef.close(!0);
    }), e._uU(7), e.qZA()(), e.BQk()), 2 & Oi && (e.xp6(2), e.hij(" ", Ji.data.message, ""), e.xp6(2), e.Q6J("size", "medium")("color", "blue"), e.xp6(1), e.hij(" ", Ji.buttonNo ? Ji.buttonNo : "Нет", " "), e.xp6(1), e.Q6J("size", "medium")("color", "red"), e.xp6(1), e.hij(" ", Ji.buttonYes ? Ji.buttonYes : "Да", " "));
  },
  dependencies: [st.ez, Ke.W1, Ke.mc],
  styles: ["[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px}[_nghost-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;justify-content:end}"]
});
