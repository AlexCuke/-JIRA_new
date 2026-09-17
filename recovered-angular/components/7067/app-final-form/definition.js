// Exact compiled component metadata; references belong to modules/7067.js
({
  type: R,
  selectors: [["app-final-form"]],
  standalone: !0,
  features: [O.jDz],
  decls: 10,
  vars: 4,
  consts: [[1, "final-form"], [1, "final-form__header"], [1, "title"], ["lu-button-icon", "", 3, "click"], ["icon", "close", 1, "icon-close", 3, "size"], [4, "ngIf", "ngIfElse"], ["content", ""], ["class", "loader-wrapper", 4, "ngIf"], [1, "complete-form__loader"], [1, "final-form__body"], [1, "final-form__body__description"], [1, "bold_span"], [1, "final-form__body__text"], [1, "final-form__actions"], ["lu-button-outer", "", 1, "final-form__actions__button", 3, "size", "click"], ["lu-button-raised", "", 1, "final-form__actions__button", "submitBtn", 3, "size", "click"], ["icon", "check-mse", 3, "size"], [1, "loader-wrapper"], [1, "loader"]],
  template: function (j, W) {
    if (1 & j && (O.TgZ(0, "div", 0)(1, "div", 1)(2, "span", 2), O._uU(3, "Финализация курса"), O.qZA(), O.TgZ(4, "button", 3), O.NdJ("click", function () {
      return W.onClose();
    }), O._UZ(5, "lu-svg-icon", 4), O.qZA()(), O.YNc(6, h, 3, 0, "ng-container", 5), O.YNc(7, x, 25, 17, "ng-template", null, 6, O.W1O), O.qZA(), O.YNc(9, u, 2, 0, "div", 7)), 2 & j) {
      const F = O.MAs(8);
      O.xp6(5), O.Q6J("size", 24), O.xp6(1), O.Q6J("ngIf", W.isLoading)("ngIfElse", F), O.xp6(3), O.Q6J("ngIf", W.isLoad);
    }
  },
  dependencies: [e.ez, e.O5, e.uU, a.W1, a.mc, m.h, m.q, d.o, d.k, M.c, M.d],
  styles: [".final-form[_ngcontent-%COMP%]{padding:24px;display:flex;flex-direction:column}.final-form__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;margin-bottom:24px;align-items:center;line-height:28px}.final-form__header[_ngcontent-%COMP%]     button{width:28px;height:28px}.final-form__header[_ngcontent-%COMP%]     button .lu-button-wrapper{height:38px;width:38px}.final-form__header[_ngcontent-%COMP%]     button lu-svg-icon{justify-content:flex-start;align-items:flex-start}.final-form__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:20px;line-height:28px}  .final-form__header .lu-button-icon{--lu-button-hover-text: #CCCCCC !important;--lu-svg-icon-color: #CCCCCC !important}  .final-form__header .lu-button-icon:hover{--lu-svg-icon-color: #999999 !important;cursor:pointer}.final-form__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;margin-bottom:32px}.final-form__body__description[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:24px}.final-form__body__description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.final-form__body__description[_ngcontent-%COMP%]   .bold_span[_ngcontent-%COMP%]{font-weight:600}.final-form__actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;gap:16px}.final-form__actions[_ngcontent-%COMP%]   .submitBtn[_ngcontent-%COMP%]     .lu-button-wrapper>*:first-child{display:none}.loader-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:rgba(var(--lu-black-rgb-100),.5);z-index:100}.loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px solid #fff;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]
});
