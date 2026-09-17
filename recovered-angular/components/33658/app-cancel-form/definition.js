// Exact compiled component metadata; references belong to modules/33658.js
({
  type: j,
  selectors: [["app-cancel-form"]],
  standalone: !0,
  features: [v.jDz],
  decls: 10,
  vars: 4,
  consts: [["class", "loader-wrapper", 4, "ngIf"], [1, "cancel-form"], [1, "cancel-form__header"], ["lu-button-icon", "", 3, "click"], ["icon", "close", 1, "icon-close", 3, "size"], [4, "ngIf", "ngIfElse"], ["content", ""], [1, "loader-wrapper"], [1, "loader"], [1, "cancel-form__loader"], [1, "cancel-form__content"], [1, "cancel-form__content__title"], [1, "bold_span"], [1, "cancel-form__content__description"], [1, "element", 3, "placeholder", "ngModel", "ngModelChange"], [1, "cancel-form__actions"], ["lu-button-raised", "", 1, "cancel-form__actions__button", 3, "size", "color", "click"]],
  template: function (Le, ke) {
    if (1 & Le && (v.YNc(0, T, 2, 0, "div", 0), v.TgZ(1, "div", 1)(2, "div", 2)(3, "span"), v._uU(4, "Отмена процедуры / манипуляции"), v.qZA(), v.TgZ(5, "button", 3), v.NdJ("click", function () {
      return ke.onClose();
    }), v._UZ(6, "lu-svg-icon", 4), v.qZA()(), v.YNc(7, R, 3, 0, "ng-container", 5), v.YNc(8, B, 17, 6, "ng-template", null, 6, v.W1O), v.qZA()), 2 & Le) {
      const J = v.MAs(9);
      v.Q6J("ngIf", ke.isLoad), v.xp6(6), v.Q6J("size", 24), v.xp6(1), v.Q6J("ngIf", ke.isLoading)("ngIfElse", J);
    }
  },
  dependencies: [e.ez, e.O5, d.W1, d.mc, M.h, M.q, b.o, b.k, m.t, m.y, A.c, A.d, C.u5, C.JJ, C.On],
  styles: [".cancel-form__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;padding:16px 24px 24px}.cancel-form__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:20px;line-height:28px}.cancel-form__header[_ngcontent-%COMP%]     button .lu-button-wrapper{height:24px!important;width:24px!important}  .cancel-form__header .lu-button-icon{--lu-button-hover-text: #CCCCCC !important;--lu-svg-icon-color: #CCCCCC !important}  .cancel-form__header .lu-button-icon:hover{--lu-svg-icon-color: #999999 !important;cursor:pointer}.cancel-form__content[_ngcontent-%COMP%]{padding:0 24px;display:flex;flex-direction:column;gap:16px}.cancel-form__content__title[_ngcontent-%COMP%]{line-height:24px}.cancel-form__content__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:4px}.cancel-form__content__title[_ngcontent-%COMP%]   .bold_span[_ngcontent-%COMP%]{font-weight:600}.cancel-form__content__description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;line-height:24px;margin-bottom:8px}.cancel-form__content[_ngcontent-%COMP%]     lu-textarea lu-input-wrapper{min-height:88px!important}.cancel-form__content[_ngcontent-%COMP%]     lu-textarea lu-input-wrapper .lu-input-container{min-height:88px!important}.cancel-form__actions[_ngcontent-%COMP%]{margin-top:32px;padding:0 24px 16px;display:flex;flex-direction:row;justify-content:end;gap:16px}.cancel-form__actions__button[_ngcontent-%COMP%]{border-radius:3px}  .cancel-form__actions__button .lu-button-wrapper{height:40px!important}.loader-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:rgba(var(--lu-black-rgb-100),.5);z-index:100}.loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px solid #fff;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]
});
