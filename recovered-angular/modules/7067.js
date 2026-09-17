// Extracted from main; webpack module 7067. Factory, not an ES module.
((Ae, V, i) => {
  var R;
  i.d(V, {
    a: () => T
  });
  var t = i(97582),
    e = i(36895),
    a = i(9073),
    m = i(93278),
    d = i(19550),
    M = i(22819),
    b = i(3977),
    A = i(5264),
    N = i(39300),
    I = i(63900),
    O = i(94650),
    L = i(44348),
    C = i(91854),
    v = i(59298),
    f = i(986),
    E = i(97215);
  function h(B, y) {
    1 & B && (O.ynx(0), O.TgZ(1, "div", 8), O._UZ(2, "lu-preloader"), O.qZA(), O.BQk());
  }
  function x(B, y) {
    if (1 & B) {
      const j = O.EpF();
      O.TgZ(0, "div", 9)(1, "div", 10)(2, "p")(3, "span", 11), O._uU(4, "Пациент:"), O.qZA(), O._uU(5), O.qZA(), O.TgZ(6, "p")(7, "span", 11), O._uU(8, "Процедура:"), O.qZA(), O._uU(9), O.qZA(), O.TgZ(10, "p")(11, "span", 11), O._uU(12, "Период курса:"), O.qZA(), O._uU(13), O.ALo(14, "date"), O.ALo(15, "date"), O.qZA()(), O.TgZ(16, "div", 12)(17, "span"), O._uU(18, "Назначение будет подписано и отмечено выполненным."), O.qZA()()(), O.TgZ(19, "div", 13)(20, "button", 14), O.NdJ("click", function () {
        O.CHM(j);
        const F = O.oxw();
        return O.KtG(F.onClose());
      }), O._uU(21, " Отменить "), O.qZA(), O.TgZ(22, "button", 15), O.NdJ("click", function () {
        O.CHM(j);
        const F = O.oxw();
        return O.KtG(F.onSubmit());
      }), O._UZ(23, "lu-svg-icon", 16), O._uU(24, " Финализировать курс "), O.qZA()();
    }
    if (2 & B) {
      const j = O.oxw();
      O.xp6(5), O.hij(" ", j.patientFio, ""), O.xp6(4), O.hij(" ", j.procedure, ""), O.xp6(4), O.AsE(" ", O.gM2(14, 7, null == j.modalData || null == j.modalData.data ? null : j.modalData.data.courseStart, "dd MMM", "", "ru"), " – ", O.gM2(15, 12, null == j.modalData || null == j.modalData.data ? null : j.modalData.data.courseEnd, "dd MMM", "", "ru"), " "), O.xp6(7), O.Q6J("size", "medium"), O.xp6(2), O.Q6J("size", "medium"), O.xp6(1), O.Q6J("size", 24);
    }
  }
  function u(B, y) {
    1 & B && (O.TgZ(0, "div", 17), O._UZ(1, "span", 18), O.qZA());
  }
  let T = ((R = class {
    constructor(y, j, W, F, Le, ke, J) {
      this.modalRef = y, this.modalData = j, this.messageService = W, this.proceduresService = F, this.pimCompositionService = Le, this.cdr = ke, this.userContextService = J, this.patientFio = "", this.procedure = "", this.userData = null, this.isLoading = !1, this.isLoad = !1;
      const fe = j?.data;
      fe && (this.patientFio = [fe?.careCase?.lastName, fe?.careCase?.firstName, fe?.careCase?.secondName].filter(Boolean).join(" "), this.procedure = [fe?.procedureAssignment?.assignmentCode, fe?.procedureAssignment?.assignmentName].filter(Boolean).join(" - "));
    }
    ngOnInit() {
      this.userContextService.getUserContext().pipe((0, N.h)(y => !!y), (0, A.t)(this)).subscribe(y => {
        this.userData = y;
      }), this.markAssigment();
    }
    markAssigment() {
      const y = {
        assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
        workplaceId: this.userData?.employee?.workplace?.id.toString(),
        doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
        doctorJob: this.userData?.jobTitle?.name,
        updated: new Date().toISOString()
      };
      this.isLoading = !0, this.proceduresService.markProcedureAssignmentAsFinishing(y).pipe((0, A.t)(this)).subscribe({
        next: () => {
          this.isLoading = !1, this.cdr.detectChanges();
        },
        error: j => {
          this.isLoading = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось отметить назначение как финализируемое"), console.error("Ошибка ", j), this.modalRef.close(!1);
        }
      });
    }
    onClose() {
      if (this.isLoad) return;
      const y = {
        assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
        workplaceId: this.userData?.employee?.workplace?.id.toString(),
        doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
        doctorJob: this.userData?.jobTitle?.name,
        updated: new Date().toISOString()
      };
      this.isLoad = !0, this.proceduresService.unMarkProcedureAssignmentAsFinishing(y).pipe((0, A.t)(this)).subscribe({
        next: () => {
          this.isLoad = !1, this.modalRef.close(!0), this.cdr.detectChanges();
        },
        error: () => {
          this.isLoad = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось cнять отметку с назначения как финализируемое"), this.modalRef.close(!1);
        }
      });
    }
    onSubmit() {
      if (this.isLoad) return;
      this.isLoad = !0;
      const y = this.modalData.data;
      this.pimCompositionService.getCompostionForFinaly(y).pipe((0, I.w)(j => {
        const W = {
          assignmentCompositionUid: y.procedureAssignment.assignmentCompositionUid,
          workplaceId: this.userData?.employee?.workplace?.id.toString(),
          doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
          doctorJob: this.userData?.jobTitle?.name,
          resultCompositionUid: j?.getUid(),
          updated: new Date().toISOString(),
          completed: new Date().toISOString()
        };
        return this.proceduresService.completeProcedureAssignment(W);
      }), (0, A.t)(this)).subscribe({
        next: () => {
          this.isLoad = !1, this.messageService.success(`\u041a\u0443\u0440\u0441 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440 \xab${this.procedure}\xbb \u0443 ${this.toShortFio(y?.careCase)} \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0444\u0438\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d`, {
            marginBottom: 44
          }), this.cdr.detectChanges(), this.modalRef.close(!0);
        },
        error: j => {
          this.isLoad = !1, this.cdr.detectChanges(), console.error(j), this.modalRef.close(!0), this.messageService.error("Не удалось финализировать курс назначения", {
            marginBottom: 44
          });
        }
      });
    }
    toShortFio(y) {
      const {
        lastName: j,
        firstName: W,
        secondName: F
      } = y ?? {};
      return [j, W ? `${W[0]}.` : "", F ? `${F[0]}.` : ""].filter(Boolean).join(" ");
    }
  }).ɵfac = function (j) {
    return new (j || R)(O.Y36(L.Rn), O.Y36(b.UM), O.Y36(C.Jv), O.Y36(v.O), O.Y36(f.b), O.Y36(O.sBO), O.Y36(E.oL));
  }, R.ɵcmp = O.Xpm({
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
  }), R);
  T = (0, t.gn)([(0, A.c)()], T);
});
