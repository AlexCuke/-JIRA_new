// Exact compiled component metadata; references belong to modules/2801.js
({
  type: x,
  selectors: [["app-confirm-form"]],
  standalone: !0,
  features: [e.jDz],
  decls: 15,
  vars: 7,
  consts: [[1, "confirm-form"], [1, "confirm-form__header"], ["lu-button-icon", "", 3, "click"], ["icon", "close", 1, "icon-close", 3, "size"], [1, "confirm-form__content"], [1, "confirm-form__content__title"], [1, "confirm-form__actions"], ["lu-button-outer", "", "class", "confirm-form__actions__button", 3, "size", "click", 4, "ngIf"], ["lu-button-raised", "", 1, "confirm-form__actions__button", 3, "size", "click"], ["class", "loader-wrapper", 4, "ngIf"], ["lu-button-outer", "", 1, "confirm-form__actions__button", 3, "size", "click"], [1, "loader-wrapper"], [1, "loader"]],
  template: function (R, B) {
    1 & R && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "span"), e._uU(3), e.qZA(), e.TgZ(4, "button", 2), e.NdJ("click", function () {
      return B.modalRef.close();
    }), e._UZ(5, "lu-svg-icon", 3), e.qZA()(), e.TgZ(6, "div", 4)(7, "div", 5)(8, "span"), e._uU(9), e.qZA()()(), e.TgZ(10, "div", 6), e.YNc(11, f, 2, 1, "button", 7), e.TgZ(12, "button", 8), e.NdJ("click", function () {
      return B.onSubmit();
    }), e._uU(13), e.qZA()()(), e.YNc(14, E, 2, 0, "div", 9)), 2 & R && (e.xp6(3), e.Oqu(B.title), e.xp6(2), e.Q6J("size", 24), e.xp6(4), e.Oqu(B.description), e.xp6(2), e.Q6J("ngIf", B.isCancelBtn), e.xp6(1), e.Q6J("size", "medium"), e.xp6(1), e.hij(" ", B.isCancelBtn ? "Подтвердить" : "Подтвердить отмену", " "), e.xp6(1), e.Q6J("ngIf", B.isLoad));
  },
  dependencies: [b.ez, b.O5, m.W1, m.mc, d.h, d.q, M.o, M.k],
  styles: [".confirm-form__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;padding:24px}.confirm-form__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:20px;line-height:28px}.confirm-form__header[_ngcontent-%COMP%]     button .lu-button-wrapper{height:24px!important;width:24px!important}  .confirm-form__header .lu-button-icon{--lu-button-hover-text: #CCCCCC !important;--lu-svg-icon-color: #CCCCCC !important}  .confirm-form__header .lu-button-icon:hover{--lu-svg-icon-color: #999999 !important;cursor:pointer}.confirm-form__content[_ngcontent-%COMP%]{padding:0 24px;display:flex;flex-direction:column;gap:16px}.confirm-form__content__title[_ngcontent-%COMP%]{line-height:24px}.confirm-form__content__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:4px}.confirm-form__content__title[_ngcontent-%COMP%]   .bold_span[_ngcontent-%COMP%]{font-weight:600}.confirm-form__content__description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;line-height:24px;margin-bottom:8px}.confirm-form__content[_ngcontent-%COMP%]     lu-textarea lu-input-wrapper{min-height:88px!important}.confirm-form__content[_ngcontent-%COMP%]     lu-textarea lu-input-wrapper .lu-input-container{min-height:88px!important}.confirm-form__actions[_ngcontent-%COMP%]{padding:24px;display:flex;flex-direction:row;justify-content:end;gap:16px}.confirm-form__actions__button[_ngcontent-%COMP%]{border-radius:3px}  .confirm-form__actions__button .lu-button-wrapper{height:40px!important}.loader-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:rgba(var(--lu-black-rgb-100),.5);z-index:100}.loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px solid #fff;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]
});
