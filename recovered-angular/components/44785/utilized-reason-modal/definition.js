// Exact compiled component metadata; references belong to modules/44785.js
({
  type: Vh,
  selectors: [["utilized-reason-modal"]],
  decls: 16,
  vars: 5,
  consts: [[1, "modal"], [1, "modal__inner"], [1, "modal__header"], ["icon", "close", 3, "size", "click"], [1, "modal__body"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal__action"], ["lu-button-raised", "", "color", "red", 3, "disabled", "click"], ["icon", "delete", 3, "size"], [3, "value"]],
  template: function (k, ce) {
    1 & k && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span"), n._uU(4, "Утилизация инъекции"), n.qZA(), n.TgZ(5, "lu-svg-icon", 3), n.NdJ("click", function () {
      return ce.modalRef.close();
    }), n.qZA()(), n.TgZ(6, "div", 4)(7, "span"), n._uU(8, "Укажите причину утилизации"), n.qZA(), n.TgZ(9, "lu-radio-group", 5), n.NdJ("ngModelChange", function (Tt) {
      return ce.selectedReason = Tt;
    }), n.YNc(10, bu, 2, 2, "lu-radio", 6), n.qZA()(), n.TgZ(11, "div", 7)(12, "button", 8), n.NdJ("click", function () {
      return ce.modalRef.close(ce.selectedReason);
    }), n._UZ(13, "lu-svg-icon", 9), n.TgZ(14, "span"), n._uU(15, "Утилизировать"), n.qZA()()()()()), 2 & k && (n.xp6(5), n.Q6J("size", 24), n.xp6(4), n.Q6J("ngModel", ce.selectedReason), n.xp6(1), n.Q6J("ngForOf", ce.reasons), n.xp6(2), n.Q6J("disabled", !ce.selectedReason), n.xp6(1), n.Q6J("size", 24));
  },
  dependencies: [Di.sg, vr.JJ, vr.On, Ks.mc, Vl.wH, Ci.q, Bc.K2],
  styles: [".modal[_ngcontent-%COMP%]{height:324px;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.modal__inner[_ngcontent-%COMP%]{height:276px;width:464px;margin:24px}.modal__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:28px}.modal__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;font-weight:600}.modal__header[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc;cursor:pointer}.modal__header[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}.modal__body[_ngcontent-%COMP%]{margin-top:24px;display:flex;flex-direction:column;gap:8px}.modal__body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px;font-weight:600}.modal__action[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;margin-top:32px}.modal__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:182px;height:40px!important;display:flex;flex-direction:row;justify-content:flex-start}.modal__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .lu-button-wrapper{height:40px!important;width:182px!important;display:flex;flex-direction:row;justify-content:flex-start}.modal__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .lu-button-content{display:none}.modal__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.modal__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{height:40px;width:40px}"]
});
