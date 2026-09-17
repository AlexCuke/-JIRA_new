// Extracted from main; webpack module 19339. Factory, not an ES module.
((Ae, V, i) => {
  var B;
  i.d(V, {
    y: () => R
  });
  var t = i(97582),
    e = i(94650),
    a = i(3977),
    m = i(9073),
    d = i(93278),
    M = i(19550),
    b = i(32643),
    A = i(22819),
    N = i(36895),
    I = i(5264),
    O = i(59298),
    L = i(986),
    C = i(39300),
    v = i(63900),
    f = i(97215),
    E = i(44348),
    h = i(91854);
  function x(y, j) {
    1 & y && (e.TgZ(0, "div", 7), e._UZ(1, "span", 8), e.qZA());
  }
  function u(y, j) {
    1 & y && (e.ynx(0), e.TgZ(1, "div", 9), e._UZ(2, "lu-preloader"), e.qZA(), e.BQk());
  }
  function T(y, j) {
    if (1 & y) {
      const W = e.EpF();
      e.TgZ(0, "div", 10)(1, "div", 11)(2, "p")(3, "span", 12), e._uU(4, "Пациент:"), e.qZA(), e._uU(5), e.qZA(), e.TgZ(6, "p")(7, "span", 12), e._uU(8, "Процедура:"), e.qZA(), e._uU(9), e.qZA()(), e.TgZ(10, "div", 13)(11, "span"), e._uU(12, "Процедура будет отмечена выполненной."), e.qZA()()(), e.TgZ(13, "div", 14)(14, "button", 15), e.NdJ("click", function () {
        e.CHM(W);
        const Le = e.oxw();
        return e.KtG(Le.onClose());
      }), e._uU(15, " Отменить "), e.qZA(), e.TgZ(16, "button", 16), e.NdJ("click", function () {
        e.CHM(W);
        const Le = e.oxw();
        return e.KtG(Le.onSubmit());
      }), e._UZ(17, "lu-svg-icon", 17), e._uU(18, " Выполнить "), e.qZA()();
    }
    if (2 & y) {
      const W = e.oxw();
      e.xp6(5), e.hij(" ", W.patientFio, ""), e.xp6(4), e.hij(" ", W.procedure, ""), e.xp6(5), e.Q6J("disabled", W.isLoad || W.isLoading), e.xp6(2), e.Q6J("disabled", W.isLoad || W.isLoading), e.xp6(1), e.Q6J("size", 24);
    }
  }
  let R = ((B = class {
    constructor(j, W, F) {
      this.modalRef = j, this.modalData = W, this.messageService = F, this.patientFio = "", this.procedure = "", this.isLoading = !1, this.isLoad = !1, this.userData = null, this.proceduresService = (0, e.f3M)(O.O), this.cdr = (0, e.f3M)(e.sBO), this.pimCompositionService = (0, e.f3M)(L.b), this.userContextService = (0, e.f3M)(f.oL);
      const Le = W?.data;
      Le && (this.patientFio = [Le?.careCase?.lastName, Le?.careCase?.firstName, Le?.careCase?.secondName].filter(Boolean).join(" "), this.procedure = [Le?.procedureAssignment?.assignmentCode, Le?.procedureAssignment?.assignmentName].filter(Boolean).join(" - "));
    }
    ngOnInit() {
      this.userContextService.getUserContext().pipe((0, C.h)(j => !!j), (0, I.t)(this)).subscribe(j => {
        this.userData = j;
      }), this.activateProcedure();
    }
    activateProcedure() {
      const j = {
        assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
        code: this.modalData.data.procedureAssignment?.procedureCode,
        workplaceId: this.userData?.employee?.workplace?.id.toString(),
        doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
        doctorJob: this.userData?.jobTitle?.name,
        updated: new Date().toISOString()
      };
      this.isLoading = !0, this.proceduresService.activateProcedure(j).pipe((0, I.t)(this)).subscribe({
        next: () => {
          this.isLoading = !1, this.cdr.detectChanges();
        },
        error: () => {
          this.isLoading = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось активировать процедуру"), this.modalRef.close(!1);
        }
      });
    }
    onSubmit() {
      this.isLoad || (this.isLoad = !0, this.pimCompositionService.getCompositionForComplete(this.modalData.data).pipe((0, v.w)(j => {
        const W = {
          assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
          code: this.modalData.data.procedureAssignment?.procedureCode,
          workplaceId: this.userData?.employee?.workplace?.id.toString(),
          doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
          doctorJob: this.userData?.jobTitle?.name,
          resultCompositionUid: j?.getUid(),
          description: null,
          procedureDressing: this.modalData?.data?.procedureAssignment?.procedureDressing ?? null,
          updated: new Date().toISOString()
        };
        return this.proceduresService.completeProcedure(W);
      }), (0, I.t)(this)).subscribe({
        next: () => {
          this.isLoad = !1, this.messageService.success(`\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0443 \xab${this.procedure}\xbb \u0443 ${this.toShortFio(this.modalData?.data?.careCase)} \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u043e \u0432 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0435`, {
            marginBottom: 44
          }), this.cdr.detectChanges(), this.modalRef.close(!0);
        },
        error: j => {
          this.isLoad = !1, this.cdr.detectChanges(), console.error("Ошибка:", j), this.messageService.error("Не удалось выполнить процедуру");
        }
      }));
    }
    toShortFio(j) {
      const {
        lastName: W,
        firstName: F,
        secondName: Le
      } = j ?? {};
      return [W, F ? `${F[0]}.` : "", Le ? `${Le[0]}.` : ""].filter(Boolean).join(" ");
    }
    onClose() {
      if (this.isLoading) return;
      const j = {
        assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
        code: this.modalData.data.procedureAssignment?.procedureCode,
        workplaceId: this.userData?.employee?.workplace?.id.toString(),
        doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
        doctorJob: this.userData?.jobTitle?.name,
        updated: new Date().toISOString()
      };
      this.isLoad = !0, this.proceduresService.deactivateProcedure(j).pipe((0, I.t)(this)).subscribe({
        next: () => {
          this.isLoad = !1, this.modalRef.close(!1), this.cdr.detectChanges();
        },
        error: () => {
          this.isLoad = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось отменить взятие в работу"), this.modalRef.close(!1);
        }
      });
    }
  }).ɵfac = function (W) {
    return new (W || B)(e.Y36(E.Rn), e.Y36(a.UM), e.Y36(h.Jv));
  }, B.ɵcmp = e.Xpm({
    type: B,
    selectors: [["app-complete-form"]],
    standalone: !0,
    features: [e.jDz],
    decls: 10,
    vars: 4,
    consts: [["class", "loader-wrapper", 4, "ngIf"], [1, "complete-form"], [1, "complete-form__header"], ["lu-button-icon", "", 3, "click"], ["icon", "close", 1, "icon-close", 3, "size"], [4, "ngIf", "ngIfElse"], ["content", ""], [1, "loader-wrapper"], [1, "loader"], [1, "complete-form__loader"], [1, "complete-form__content"], [1, "complete-form__content__title"], [1, "bold_span"], [1, "complete-form__content__description"], [1, "complete-form__actions"], ["lu-button-outer", "", 1, "complete-form__actions__button", 3, "disabled", "click"], ["lu-button-raised", "", 1, "complete-form__actions__button", 3, "disabled", "click"], ["icon", "check-mse", 3, "size"]],
    template: function (W, F) {
      if (1 & W && (e.YNc(0, x, 2, 0, "div", 0), e.TgZ(1, "div", 1)(2, "div", 2)(3, "span"), e._uU(4, "Выполнение процедуры или манипуляции"), e.qZA(), e.TgZ(5, "button", 3), e.NdJ("click", function () {
        return F.onClose();
      }), e._UZ(6, "lu-svg-icon", 4), e.qZA()(), e.YNc(7, u, 3, 0, "ng-container", 5), e.YNc(8, T, 19, 5, "ng-template", null, 6, e.W1O), e.qZA()), 2 & W) {
        const Le = e.MAs(9);
        e.Q6J("ngIf", F.isLoad), e.xp6(6), e.Q6J("size", 24), e.xp6(1), e.Q6J("ngIf", F.isLoading)("ngIfElse", Le);
      }
    },
    dependencies: [N.ez, N.O5, m.W1, m.mc, d.h, d.q, M.o, M.k, b.aI, A.c, A.d],
    styles: [".complete-form[_ngcontent-%COMP%]{padding:24px}.complete-form__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.complete-form__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:20px;line-height:28px}.complete-form__header[_ngcontent-%COMP%]     .lu-button-wrapper{align-items:flex-start}.complete-form__header[_ngcontent-%COMP%]     .lu-button-wrapper .lu-button-icon{width:auto;height:auto}.complete-form__loader[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;flex:1}  .complete-form__header .lu-button-icon{--lu-button-hover-text: #CCCCCC !important;--lu-svg-icon-color: #CCCCCC !important}  .complete-form__header .lu-button-icon:hover{--lu-svg-icon-color: #999999 !important;cursor:pointer}.complete-form__content[_ngcontent-%COMP%]{margin-top:24px;display:flex;flex-direction:column;gap:16px}.complete-form__content__title[_ngcontent-%COMP%]{line-height:24px}.complete-form__content__title[_ngcontent-%COMP%]   .bold_span[_ngcontent-%COMP%]{font-weight:600}.complete-form__content__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.complete-form__actions[_ngcontent-%COMP%]{margin-top:32px;display:flex;flex-direction:row;justify-content:end;gap:16px}.complete-form__actions[_ngcontent-%COMP%]     button[lu-button-outer], .complete-form__actions[_ngcontent-%COMP%]     button[lu-button-raised]{height:40px}.complete-form__actions[_ngcontent-%COMP%]     button[lu-button-outer] .lu-button-wrapper, .complete-form__actions[_ngcontent-%COMP%]     button[lu-button-raised] .lu-button-wrapper{height:40px!important;padding:8px 16px!important;line-height:24px!important}.complete-form__actions[_ngcontent-%COMP%]     button[lu-button-outer] .lu-button-wrapper .lu-button-content, .complete-form__actions[_ngcontent-%COMP%]     button[lu-button-raised] .lu-button-wrapper .lu-button-content{display:none}.complete-form__actions[_ngcontent-%COMP%]     button[lu-button-outer] .lu-button-wrapper .lu-button-text, .complete-form__actions[_ngcontent-%COMP%]     button[lu-button-raised] .lu-button-wrapper .lu-button-text{font-weight:600;font-size:16px}.complete-form__actions[_ngcontent-%COMP%]     button[lu-button-outer]{width:114px}.complete-form__actions[_ngcontent-%COMP%]     button[lu-button-raised]{width:149px}.loader-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:rgba(var(--lu-black-rgb-100),.5);z-index:100}.loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px solid #fff;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]
  }), B);
  R = (0, t.gn)([(0, I.c)()], R);
});
