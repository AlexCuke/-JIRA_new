// Extracted from main; webpack module 33658. Factory, not an ES module.
((Ae, V, i) => {
  var j;
  i.d(V, {
    i: () => y
  });
  var t = i(97582),
    e = i(36895),
    a = i(3977),
    m = i(50879),
    d = i(9073),
    M = i(93278),
    b = i(19550),
    A = i(22819),
    N = i(5264),
    I = i(39300),
    O = i(95698),
    L = i(63900),
    C = i(24006),
    v = i(94650),
    f = i(44348),
    E = i(91854),
    h = i(59298),
    x = i(97215),
    u = i(986);
  function T(W, F) {
    1 & W && (v.TgZ(0, "div", 7), v._UZ(1, "span", 8), v.qZA());
  }
  function R(W, F) {
    1 & W && (v.ynx(0), v.TgZ(1, "div", 9), v._UZ(2, "lu-preloader"), v.qZA(), v.BQk());
  }
  function B(W, F) {
    if (1 & W) {
      const Le = v.EpF();
      v.TgZ(0, "div", 10)(1, "div", 11)(2, "p")(3, "span", 12), v._uU(4, "Пациент:"), v.qZA(), v._uU(5), v.qZA(), v.TgZ(6, "p")(7, "span", 12), v._uU(8, "Процедура:"), v.qZA(), v._uU(9), v.qZA()(), v.TgZ(10, "div", 13)(11, "span"), v._uU(12, "Причина отмены"), v.qZA(), v.TgZ(13, "lu-textarea", 14), v.NdJ("ngModelChange", function (J) {
        v.CHM(Le);
        const fe = v.oxw();
        return v.KtG(fe.cancelReason = J);
      }), v.qZA()()(), v.TgZ(14, "div", 15)(15, "button", 16), v.NdJ("click", function () {
        v.CHM(Le);
        const J = v.oxw();
        return v.KtG(J.onSubmit());
      }), v._uU(16, " Отменить "), v.qZA()();
    }
    if (2 & W) {
      const Le = v.oxw();
      v.xp6(5), v.hij(" ", Le.patientFio, ""), v.xp6(4), v.hij(" ", Le.procedure, ""), v.xp6(4), v.Q6J("placeholder", "Комментарий")("ngModel", Le.cancelReason), v.xp6(2), v.Q6J("size", "medium")("color", "red");
    }
  }
  let y = ((j = class {
    constructor(F, Le, ke, J, fe, ye, ae) {
      this.modalRef = F, this.modalData = Le, this.messageService = ke, this.proceduresService = J, this.cdr = fe, this.userContextService = ye, this.pimCompositionService = ae, this.patientFio = "", this.procedure = "", this.cancelReason = null, this.isLoad = !1, this.isLoading = !1, this.userData = null;
      const Y = Le?.data;
      Y && (this.patientFio = [Y?.careCase?.lastName, Y?.careCase?.firstName, Y?.careCase?.secondName].filter(Boolean).join(" "), this.procedure = [Y?.procedureAssignment?.assignmentCode, Y?.procedureAssignment?.assignmentName].filter(Boolean).join(" - "));
    }
    ngOnInit() {
      this.userContextService.getUserContext().pipe((0, I.h)(F => !!F), (0, O.q)(1), (0, N.t)(this)).subscribe(F => {
        this.userData = F, this.markAsCancelling(F);
      });
    }
    onSubmit() {
      if (this.isLoad) return;
      this.isLoad = !0;
      const F = {
        assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
        code: this.modalData.data.procedureAssignment?.procedureCode,
        workplaceId: this.userData?.employee?.workplace?.id.toString(),
        doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
        doctorJob: this.userData?.jobTitle?.name,
        description: this.cancelReason,
        updated: new Date().toISOString()
      };
      this.pimCompositionService.getCompositionForCancel(this.modalData.data, this.cancelReason).pipe((0, L.w)(() => this.proceduresService.cancelProcedure(F)), (0, N.t)(this)).subscribe({
        next: () => {
          this.isLoad = !1, this.messageService.info(`\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0443 \xab${this.procedure}\xbb \u0443 ${this.toShortFio(this.modalData?.data?.careCase)} \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u043e \u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u043e \u0432 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0435`, {
            marginBottom: 44
          }), this.cdr.detectChanges(), this.modalRef.close(!0);
        },
        error: Le => {
          this.isLoad = !1, this.cdr.detectChanges(), console.error("Ошибка:", Le), this.messageService.error("Не удалось отменить процедуру");
        }
      });
    }
    markAsCancelling(F) {
      const {
          procedureAssignment: Le
        } = this.modalData.data,
        ke = [F.lastName, F.firstName, F.secondName].filter(Boolean).join(" "),
        J = !!Le.executorName && Le.executorName === ke,
        fe = {
          assignmentCompositionUid: Le.assignmentCompositionUid,
          code: Le?.procedureCode,
          workplaceId: F?.employee?.workplace?.id.toString(),
          doctorName: `${F.lastName} ${F.firstName[0]}.${F.secondName[0]}.`,
          doctorJob: F?.jobTitle?.name,
          byExecutor: J,
          updated: new Date().toISOString()
        };
      this.isLoading = !0, this.proceduresService.markProcedureAsCancelling(fe).pipe((0, N.t)(this)).subscribe({
        next: () => {
          this.isLoading = !1, this.cdr.detectChanges();
        },
        error: () => {
          this.isLoading = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось начать отмену процедуры"), this.modalRef.close(!1);
        }
      });
    }
    toShortFio(F) {
      const {
        lastName: Le,
        firstName: ke,
        secondName: J
      } = F ?? {};
      return [Le, ke ? `${ke[0]}.` : "", J ? `${J[0]}.` : ""].filter(Boolean).join(" ");
    }
    onClose() {
      if (this.isLoading || this.isLoad) return;
      const F = {
        assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
        code: this.modalData.data.procedureAssignment?.procedureCode,
        workplaceId: this.userData?.employee?.workplace?.id.toString(),
        doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
        doctorJob: this.userData?.jobTitle?.name,
        updated: new Date().toISOString()
      };
      this.isLoad = !0, this.proceduresService.unMarkProcedureAsCancelling(F).pipe((0, N.t)(this)).subscribe({
        next: () => {
          this.isLoad = !1, this.modalRef.close(!1), this.cdr.detectChanges();
        },
        error: () => {
          this.isLoad = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось отменить процедуру"), this.modalRef.close(!1);
        }
      });
    }
  }).ɵfac = function (Le) {
    return new (Le || j)(v.Y36(f.Rn), v.Y36(a.UM), v.Y36(E.Jv), v.Y36(h.O), v.Y36(v.sBO), v.Y36(x.oL), v.Y36(u.b));
  }, j.ɵcmp = v.Xpm({
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
  }), j);
  y = (0, t.gn)([(0, N.c)()], y);
});
