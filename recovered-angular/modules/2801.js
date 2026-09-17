// Extracted from main; webpack module 2801. Factory, not an ES module.
((Ae, V, i) => {
  var x;
  i.d(V, {
    v: () => h
  });
  var t = i(97582),
    e = i(94650),
    a = i(3977),
    m = i(9073),
    d = i(93278),
    M = i(19550),
    b = i(36895),
    A = i(59298),
    N = i(5264),
    I = i(97215),
    O = i(39300),
    L = i(44348),
    C = i(91854),
    v = i(33116);
  function f(u, T) {
    if (1 & u) {
      const R = e.EpF();
      e.TgZ(0, "button", 10), e.NdJ("click", function () {
        e.CHM(R);
        const y = e.oxw();
        return e.KtG(y.modalRef.close());
      }), e._uU(1, " Отменить "), e.qZA();
    }
    2 & u && e.Q6J("size", "medium");
  }
  function E(u, T) {
    1 & u && (e.TgZ(0, "div", 11), e._UZ(1, "span", 12), e.qZA());
  }
  let h = ((x = class {
    constructor(T, R, B, y) {
      switch (this.modalRef = T, this.modalData = R, this.messageService = B, this.proceduresReloadService = y, this.title = "", this.description = "", this.patientFio = "", this.isCancelBtn = !1, this.isLoad = !1, this.userData = null, this.proceduresService = (0, e.f3M)(A.O), this.cdr = (0, e.f3M)(e.sBO), this.userContextService = (0, e.f3M)(I.oL), this.patientFio = [this.modalData.data?.careCase?.lastName, this.modalData.data?.careCase?.firstName, this.modalData.data?.careCase?.secondName].filter(Boolean).join(" "), R.actionName) {
        case "confirm_sowing":
          this.title = "Подтверждение посева", this.description = "Подтвердить необходимость передачи информации о посеве врачу?", this.isCancelBtn = !0;
          break;
        case "cancel_sowing":
          this.title = "Снятие отметки о посеве", this.description = "Подтвердить отмену передачи информации о посеве врачу?";
      }
    }
    ngOnInit() {
      this.userContextService.getUserContext().pipe((0, O.h)(T => !!T), (0, N.t)(this)).subscribe(T => {
        this.userData = T;
      });
    }
    onSubmit() {
      if (this.isLoad || !this.userData) return;
      this.isLoad = !0;
      const T = {
          assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
          code: this.modalData.data.procedureAssignment.procedureCode,
          workplaceId: this.userData.employee?.workplace?.id.toString(),
          doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
          doctorJob: this.userData?.jobTitle?.name,
          updated: new Date().toISOString()
        },
        R = "confirm_sowing" === this.modalData.actionName;
      (R ? this.proceduresService.markProcedureDressing({
        ...T,
        procedureDressing: "посев"
      }) : this.proceduresService.unmarkProcedureDressing(T)).pipe((0, N.t)(this)).subscribe({
        next: () => {
          this.isLoad = !1, this.modalRef.close(!0), this.messageService.success(R ? `\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u043e\u0441\u0435\u0432\u0430\n            \u0443 ${this.toShortFio(this.modalData?.data?.careCase)} \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u0432\u0440\u0430\u0447\u0443` : `\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u043e\u0441\u0435\u0432\u0430\n            \u0443 ${this.toShortFio(this.modalData?.data?.careCase)} \u0441\u043d\u044f\u0442\u0430`, {
            marginBottom: 44
          }), this.proceduresReloadService.reload(), this.cdr.detectChanges();
        },
        error: () => {
          this.isLoad = !1, this.modalRef.close(!1), this.messageService.error("Ошибка при изменении отметки о посеве", {
            marginBottom: 44
          }), this.cdr.detectChanges();
        }
      });
    }
    toShortFio(T) {
      const {
        lastName: R,
        firstName: B,
        secondName: y
      } = T ?? {};
      return [R, B ? `${B[0]}.` : "", y ? `${y[0]}.` : ""].filter(Boolean).join(" ");
    }
  }).ɵfac = function (R) {
    return new (R || x)(e.Y36(L.Rn), e.Y36(a.UM), e.Y36(C.Jv), e.Y36(v.j));
  }, x.ɵcmp = e.Xpm({
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
  }), x);
  h = (0, t.gn)([(0, N.c)()], h);
});
