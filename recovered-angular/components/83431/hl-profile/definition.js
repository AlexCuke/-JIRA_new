// Exact compiled component metadata; references belong to modules/83431.js
({
  type: _t,
  selectors: [["hl-profile"]],
  inputs: {
    userInfo: "userInfo"
  },
  outputs: {
    logout: "logout",
    changeProfile: "changeProfile",
    changePassword: "changePassword"
  },
  features: [e.TTD],
  decls: 13,
  vars: 6,
  consts: [[1, "profile-wrapper"], [1, "profile-header-wrapper", "profile__header"], [1, "profile-header-title"], ["lu-text", "", "size", "small", 1, "profile-header-title-text", "profile-header-title-text__organization"], ["lu-text", "", 4, "ngIf"], ["lu-button", "", "color", "red", 1, "__exit-button", 3, "click"], ["icon", "exit", "luButtonPrefix", "", 3, "size"], ["title", "Должность", 3, "description", 4, "ngIf"], ["title", "Отделение", 3, "description", 4, "ngIf"], [1, "profile-divider"], ["class", "profile-wrapper-actions", 4, "ngIf"], ["lu-text", ""], ["title", "Должность", 3, "description"], ["title", "Отделение", 3, "description"], [1, "profile-wrapper-actions"], ["lu-button-outer", "", 1, "profile-button", "profile-button__change-profile", 3, "click"], ["icon", "doctor", "luButtonPrefix", "", 3, "size"], ["lu-button", "", 1, "profile-button", "profile-button__change-profile", 3, "click"], ["icon", "locked", "luButtonPrefix", "", 3, "size"]],
  template: function (Ge, Vi) {
    1 & Ge && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3), e._uU(4), e.qZA(), e.YNc(5, Je, 3, 3, "h3", 4), e.qZA(), e.TgZ(6, "button", 5), e.NdJ("click", function () {
      return Vi.onLogout();
    }), e._UZ(7, "lu-svg-icon", 6), e._uU(8, " Выйти "), e.qZA()(), e.YNc(9, Xt, 1, 1, "hl-profile-item", 7), e.YNc(10, Nn, 1, 1, "hl-profile-item", 8), e._UZ(11, "div", 9), e.YNc(12, Pi, 7, 2, "div", 10), e.qZA()), 2 & Ge && (e.xp6(4), e.hij(" ", null == Vi.userInfo || null == Vi.userInfo.subordination ? null : Vi.userInfo.subordination.shortName, " "), e.xp6(1), e.Q6J("ngIf", Vi.userFullName), e.xp6(2), e.Q6J("size", 24), e.xp6(2), e.Q6J("ngIf", null == Vi.userInfo || null == Vi.userInfo.jobTitle ? null : Vi.userInfo.jobTitle.name), e.xp6(1), e.Q6J("ngIf", null == Vi.userInfo || null == Vi.userInfo.department ? null : Vi.userInfo.department.fullName), e.xp6(2), e.Q6J("ngIf", Vi.isSimpleUser));
  },
  dependencies: [t.O5, M.q, A.NZ, Vn, b.mc, b.nx, C.kA],
  styles: [".profile__header[_ngcontent-%COMP%]{margin-bottom:calc(var(--lu-base-gutter) * 2)}.profile-divider[_ngcontent-%COMP%]{height:1px;background-color:var(--lu-black-10)}.profile-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:calc(var(--lu-base-gutter) * 64.5);padding:calc(var(--lu-base-gutter) * 3)}.profile-wrapper[_ngcontent-%COMP%]     .lu-button-wrapper{height:calc(var(--lu-base-gutter) * 5)!important;border-radius:3px}.profile-wrapper[_ngcontent-%COMP%]     .lu-button-text{margin-top:calc(var(--lu-base-gutter) * .5)!important}.__exit-button[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * -1.25)}.profile-button[_ngcontent-%COMP%]{width:calc(var(--lu-base-gutter) * 25.5)}.profile-button__change-profile[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 3.125)}.profile-header-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start}.profile-header-title-text__organization[_ngcontent-%COMP%]{margin-bottom:var(--lu-base-gutter)}.profile-wrapper-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],
  changeDetection: 0
});
