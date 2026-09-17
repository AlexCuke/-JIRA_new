// Extracted from main; webpack module 83431. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Ch: () => Rr,
    Gu: () => kc,
    ZJ: () => yr,
    dk: () => Gt,
    nC: () => La,
    p9: () => Kl,
    rz: () => Wl,
    xI: () => so,
    z5: () => mn
  });
  var t = i(36895),
    e = i(94650),
    a = i(71273),
    m = i(62104),
    d = i(44348),
    M = i(93278),
    b = i(9073),
    A = i(32643),
    N = i(59250),
    I = i(19550),
    L = (i(52306), i(3977)),
    C = i(52125);
  const v = ["*"],
    T = ["modal"],
    R = ["modalButtons"];
  function B(_t, Tn) {
    if (1 & _t && e._UZ(0, "lu-svg-icon", 12), 2 & _t) {
      const Ge = e.oxw();
      e.Tol(Ge.modalData.buttons.confirm.icon.cssClass), e.Q6J("icon", Ge.modalData.buttons.confirm.icon.name)("size", Ge.modalData.buttons.confirm.icon.size || 24);
    }
  }
  function Je(_t, Tn) {
    if (1 & _t && (e.TgZ(0, "h3", 11), e._uU(1), e.ALo(2, "fullName"), e.qZA()), 2 & _t) {
      const Ge = e.oxw();
      e.xp6(1), e.Oqu(e.lcZ(2, 1, Ge.userFullName));
    }
  }
  function Xt(_t, Tn) {
    if (1 & _t && e._UZ(0, "hl-profile-item", 12), 2 & _t) {
      const Ge = e.oxw();
      e.Q6J("description", null == Ge.userInfo || null == Ge.userInfo.jobTitle ? null : Ge.userInfo.jobTitle.name);
    }
  }
  function Nn(_t, Tn) {
    if (1 & _t && e._UZ(0, "hl-profile-item", 13), 2 & _t) {
      const Ge = e.oxw();
      e.Q6J("description", null == Ge.userInfo || null == Ge.userInfo.department ? null : Ge.userInfo.department.fullName);
    }
  }
  function Pi(_t, Tn) {
    if (1 & _t) {
      const Ge = e.EpF();
      e.TgZ(0, "div", 14)(1, "button", 15), e.NdJ("click", function () {
        e.CHM(Ge);
        const Zo = e.oxw();
        return e.KtG(Zo.onChangeProfile());
      }), e._UZ(2, "lu-svg-icon", 16), e._uU(3, " Сменить профиль "), e.qZA(), e.TgZ(4, "button", 17), e.NdJ("click", function () {
        e.CHM(Ge);
        const Zo = e.oxw();
        return e.KtG(Zo.onChangePassword());
      }), e._UZ(5, "lu-svg-icon", 18), e._uU(6, " Сменить пароль "), e.qZA()();
    }
    2 & _t && (e.xp6(2), e.Q6J("size", 24), e.xp6(3), e.Q6J("size", 24));
  }
  function Ii(_t, Tn) {
    if (1 & _t && (e.TgZ(0, "div", 8), e._uU(1), e.qZA()), 2 & _t) {
      const Ge = e.oxw();
      e.xp6(1), e.Oqu(Ge.user);
    }
  }
  function yi(_t, Tn) {
    if (1 & _t && (e.TgZ(0, "div", 9), e._uU(1), e.qZA()), 2 & _t) {
      const Ge = e.oxw();
      e.xp6(1), e.Oqu(Ge.role);
    }
  }
  function co(_t, Tn) {
    1 & _t && e.Hsn(0);
  }
  const Jo = function () {
    return ["bottom-right", "bottom-left"];
  };
  let mn = (() => {
      class _t {
        constructor(Ge, Vi, Zo) {
          this.luModalRef = Ge, this.changeDetectorRef = Vi, this.modalData = Zo, this.sizeModal = "default-size";
        }
        ngAfterViewInit() {
          const Ge = this.modal?.nativeElement,
            Vi = this.modalButtons?.nativeElement;
          Ge && (Ge.offsetHeight > 248 && (this.sizeModal = "large-size"), Ge.offsetHeight < 221 && (this.sizeModal = "small-size"), Vi && Vi.offsetWidth + 48 > Ge.offsetWidth && (this.sizeModal = "large-size")), this.changeDetectorRef.detectChanges();
        }
        onClose() {
          this.luModalRef.close();
        }
        onConfirm() {
          this.luModalRef.close(!0);
        }
        onDecline() {
          this.luModalRef.close(!1);
        }
      }
      return _t.ɵfac = function (Ge) {
        return new (Ge || _t)(e.Y36(d.Rn), e.Y36(e.sBO), e.Y36(L.UM));
      }, _t.ɵcmp = e.Xpm({
        type: _t,
        selectors: [["hl-confirm-modal"]],
        viewQuery: function (Ge, Vi) {
          if (1 & Ge && (e.Gf(T, 5), e.Gf(R, 5)), 2 & Ge) {
            let Zo;
            e.iGM(Zo = e.CRH()) && (Vi.modal = Zo.first), e.iGM(Zo = e.CRH()) && (Vi.modalButtons = Zo.first);
          }
        },
        decls: 16,
        vars: 14,
        consts: [[1, "lu-modal", "dialog", "default-size"], ["modal", ""], [1, "lu-modal-header"], [1, "lu-modal-header-title"], ["icon", "close", 1, "button-close", 3, "size", "click"], [1, "lu-modal-body"], [1, "lu-modal-footer"], [1, "lu-modal-buttons"], ["modalButtons", ""], ["lu-button-outer", "", 3, "size", "color", "click"], ["lu-button-raised", "", 3, "size", "color", "click"], ["luButtonPrefix", "", 3, "icon", "size", "class", 4, "ngIf"], ["luButtonPrefix", "", 3, "icon", "size"]],
        template: function (Ge, Vi) {
          1 & Ge && (e.TgZ(0, "div", 0, 1)(2, "div", 2)(3, "div", 3), e._uU(4), e.TgZ(5, "lu-svg-icon", 4), e.NdJ("click", function () {
            return Vi.onClose();
          }), e.qZA()()(), e.TgZ(6, "div", 5), e._uU(7), e.qZA(), e.TgZ(8, "div", 6)(9, "div", 7, 8)(11, "button", 9), e.NdJ("click", function () {
            return Vi.onDecline();
          }), e._uU(12), e.qZA(), e.TgZ(13, "button", 10), e.NdJ("click", function () {
            return Vi.onConfirm();
          }), e.YNc(14, B, 1, 4, "lu-svg-icon", 11), e._uU(15), e.qZA()()()()), 2 & Ge && (e.ekj("small-size", "small-size" === Vi.sizeModal)("large-size", "large-size" === Vi.sizeModal), e.xp6(4), e.hij(" ", Vi.modalData.title, " "), e.xp6(1), e.Q6J("size", 24), e.xp6(2), e.Oqu(Vi.modalData.body), e.xp6(4), e.Q6J("size", Vi.modalData.buttons.close.size || "medium")("color", Vi.modalData.buttons.close.color || "default"), e.xp6(1), e.hij(" ", Vi.modalData.buttons.close.name, " "), e.xp6(1), e.Q6J("size", Vi.modalData.buttons.confirm.size || "medium")("color", Vi.modalData.buttons.confirm.color || "default"), e.xp6(1), e.Q6J("ngIf", Vi.modalData.buttons.confirm.icon), e.xp6(1), e.hij(" ", Vi.modalData.buttons.confirm.name, " "));
        },
        dependencies: [t.O5, M.q, b.mc, b.nx],
        styles: [".default-size[_ngcontent-%COMP%]{width:512px}.small-size[_ngcontent-%COMP%]{width:448px}.large-size[_ngcontent-%COMP%]{width:576px}.lu-modal-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.button-close[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: var(--lu-primary) !important}.lu-modal-body[_ngcontent-%COMP%]{overflow-wrap:break-word}"],
        changeDetection: 0
      }), _t;
    })(),
    Kl = (() => {
      class _t {}
      return _t.ɵfac = function (Ge) {
        return new (Ge || _t)();
      }, _t.ɵcmp = e.Xpm({
        type: _t,
        selectors: [["hl-dot-divider"]],
        decls: 2,
        vars: 0,
        consts: [[1, "dot-divider"]],
        template: function (Ge, Vi) {
          1 & Ge && (e.TgZ(0, "span", 0), e._uU(1, "•"), e.qZA());
        },
        styles: [".dot-divider[_ngcontent-%COMP%]{color:var(--lu-black-20)}"],
        changeDetection: 0
      }), _t;
    })(),
    Wl = (() => {
      class _t {}
      return _t.ɵfac = function (Ge) {
        return new (Ge || _t)();
      }, _t.ɵmod = e.oAB({
        type: _t
      }), _t.ɵinj = e.cJS({
        imports: [t.ez]
      }), _t;
    })(),
    La = (() => {
      class _t {}
      return _t.ɵfac = function (Ge) {
        return new (Ge || _t)();
      }, _t.ɵcmp = e.Xpm({
        type: _t,
        selectors: [["hl-help-info-item"]],
        decls: 4,
        vars: 1,
        consts: [[1, "help-info"], ["icon", "info", 1, "info-icon", "help-info__icon", 3, "size"], [1, "info-title"]],
        template: function (Ge, Vi) {
          1 & Ge && (e.TgZ(0, "div", 0), e._UZ(1, "lu-svg-icon", 1), e.TgZ(2, "span", 2), e._uU(3, "Справка"), e.qZA()()), 2 & Ge && (e.xp6(1), e.Q6J("size", 16));
        },
        dependencies: [M.q],
        styles: ["[_nghost-%COMP%]{display:flex;flex-shrink:0;cursor:default}@media (max-width: 760px){[_nghost-%COMP%]{width:40px;justify-content:center}}.help-info[_ngcontent-%COMP%]{display:flex;align-items:center}.help-info__icon[_ngcontent-%COMP%]{margin-right:8px}@media (max-width: 760px){.help-info__icon[_ngcontent-%COMP%]{margin-right:0}}.info-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-white)}@media (max-width: 760px){.info-title[_ngcontent-%COMP%]{display:none}}"],
        changeDetection: 0
      }), _t;
    })(),
    kc = (() => {
      class _t {}
      return _t.ɵfac = function (Ge) {
        return new (Ge || _t)();
      }, _t.ɵmod = e.oAB({
        type: _t
      }), _t.ɵinj = e.cJS({
        imports: [t.ez, M.h]
      }), _t;
    })(),
    Vn = (() => {
      class _t {
        constructor() {
          this.lastItem = !1;
        }
      }
      return _t.ɵfac = function (Ge) {
        return new (Ge || _t)();
      }, _t.ɵcmp = e.Xpm({
        type: _t,
        selectors: [["hl-profile-item"]],
        inputs: {
          lastItem: "lastItem",
          title: "title",
          description: "description"
        },
        decls: 5,
        vars: 2,
        consts: [[1, "profile-item"], ["lu-text", "", "size", "small", "color", "muted"], ["lu-text", "", "size", "normal"]],
        template: function (Ge, Vi) {
          1 & Ge && (e.TgZ(0, "div", 0)(1, "span", 1), e._uU(2), e.qZA(), e.TgZ(3, "span", 2), e._uU(4), e.qZA()()), 2 & Ge && (e.xp6(2), e.Oqu(Vi.title), e.xp6(2), e.Oqu(Vi.description));
        },
        dependencies: [A.NZ],
        styles: [".profile-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:16px}"],
        changeDetection: 0
      }), _t;
    })(),
    Gt = (() => {
      class _t {
        constructor() {
          this.logout = new e.vpe(), this.changeProfile = new e.vpe(), this.changePassword = new e.vpe();
        }
        get isSimpleUser() {
          return function Ut(_t) {
            return void 0 !== _t && _t > -1;
          }(this.userInfo?.id);
        }
        ngOnChanges() {
          this.userFullName = {
            firstName: this.userInfo?.firstName,
            lastName: this.userInfo?.lastName,
            secondName: this.userInfo?.secondName
          };
        }
        onLogout() {
          this.logout.emit();
        }
        onChangeProfile() {
          this.changeProfile.emit();
        }
        onChangePassword() {
          this.changePassword.emit();
        }
      }
      return _t.ɵfac = function (Ge) {
        return new (Ge || _t)();
      }, _t.ɵcmp = e.Xpm({
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
      }), _t;
    })(),
    xi = (() => {
      class _t {}
      return _t.ɵfac = function (Ge) {
        return new (Ge || _t)();
      }, _t.ɵmod = e.oAB({
        type: _t
      }), _t.ɵinj = e.cJS({
        imports: [t.ez, A.aI]
      }), _t;
    })(),
    so = (() => {
      class _t {}
      return _t.ɵfac = function (Ge) {
        return new (Ge || _t)();
      }, _t.ɵmod = e.oAB({
        type: _t
      }), _t.ɵinj = e.cJS({
        imports: [t.ez, M.h, I.o, A.aI, xi, b.W1, C.AB]
      }), _t;
    })(),
    yr = (() => {
      class _t {
        constructor() {
          this.user = "", this.role = "";
        }
      }
      return _t.ɵfac = function (Ge) {
        return new (Ge || _t)();
      }, _t.ɵcmp = e.Xpm({
        type: _t,
        selectors: [["hl-user-info-item"]],
        inputs: {
          user: "user",
          role: "role"
        },
        ngContentSelectors: v,
        decls: 9,
        vars: 7,
        consts: [["luDropdownButton", "", 1, "user-info-container", 3, "click"], [1, "user-info-content"], ["class", "user-info-title", 4, "ngIf"], ["class", "user-info-subtitle", 4, "ngIf"], ["icon", "chevron-down", "luButtonPostfix", "", 1, "user-info-container__suffix", "chevron-icon", 3, "size", "luChevronRotate"], ["panelClass", "user-info-dropdown", 3, "content", "positions"], ["dropdown", ""], ["content", ""], [1, "user-info-title"], [1, "user-info-subtitle"]],
        template: function (Ge, Vi) {
          if (1 & Ge) {
            const Zo = e.EpF();
            e.F$t(), e.TgZ(0, "div", 0), e.NdJ("click", function () {
              e.CHM(Zo);
              const pa = e.MAs(6);
              return e.KtG(pa.toggle());
            }), e.TgZ(1, "div", 1), e.YNc(2, Ii, 2, 1, "div", 2), e.YNc(3, yi, 2, 1, "div", 3), e.qZA(), e._UZ(4, "lu-svg-icon", 4), e.TgZ(5, "lu-dropdown", 5, 6), e.YNc(7, co, 1, 0, "ng-template", null, 7, e.W1O), e.qZA()();
          }
          if (2 & Ge) {
            const Zo = e.MAs(6),
              Zr = e.MAs(8);
            e.xp6(2), e.Q6J("ngIf", Vi.user), e.xp6(1), e.Q6J("ngIf", Vi.role), e.xp6(1), e.Q6J("size", 16)("luChevronRotate", Zo), e.xp6(1), e.Q6J("content", Zr)("positions", e.DdM(6, Jo));
          }
        },
        dependencies: [t.O5, M.q, N.$, a.c, m.G],
        styles: ["[_nghost-%COMP%]{display:flex;flex-shrink:0;cursor:default;position:relative}  .user-info-dropdown{width:516px;margin-right:-23px;margin-top:6px;--lu-overlay-border: rgba(255, 255, 255, 1)}  .user-info-dropdown .lu-overlay-content{display:flex;flex-direction:column;align-items:center;border-radius:0 0 0 4px;box-shadow:0 0 1px #00000047,0 4px 8px #00000014,0 12px 24px #0000001f}.user-info-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-shrink:0}.user-info-container__suffix[_ngcontent-%COMP%]{margin-left:16px}@media (max-width: 760px){.user-info-container__suffix[_ngcontent-%COMP%]{margin-left:10px}}.user-info-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-shrink:0}@media (max-width: 760px){.user-info-content[_ngcontent-%COMP%]{max-width:90px}}@media (max-width: 760px){.user-info-title[_ngcontent-%COMP%], .user-info-subtitle[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}}.user-info-title[_ngcontent-%COMP%]{font-weight:600;font-size:15px;line-height:24px;color:var(--lu-white)}.user-info-subtitle[_ngcontent-%COMP%]{font-weight:600;font-size:11px;line-height:18px;color:var(--lu-blue-40)}.chevron-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-white)}"],
        changeDetection: 0
      }), _t;
    })(),
    Rr = (() => {
      class _t {}
      return _t.ɵfac = function (Ge) {
        return new (Ge || _t)();
      }, _t.ɵmod = e.oAB({
        type: _t
      }), _t.ɵinj = e.cJS({
        imports: [t.ez, M.h, N.J, a.p, m.V]
      }), _t;
    })();
});
