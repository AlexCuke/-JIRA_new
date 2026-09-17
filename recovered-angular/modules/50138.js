// Extracted from main; webpack module 50138. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    o: () => E
  });
  var t = i(77372),
    e = i(15525),
    a = i(97582),
    m = i(52306),
    d = i(18505),
    M = i(63900),
    b = i(50727),
    A = i(80675),
    N = i(98129);
  class I extends N.U {
    constructor(x) {
      super("user-context", x);
    }
  }
  let C = (() => {
    class h {
      constructor(u, T, R) {
        this.userInfo$ = u, this.settingsApi = T, this.medicalOrganizationService = R, this.settingsRepository = new I(this.settingsApi), this.initUserInfo();
      }
      getCommitter() {
        return {
          committerId: this.userInfo.userId,
          committerName: this.userInfo.userName
        };
      }
      getDoctorId() {
        return this.userInfo.userId;
      }
      getEmployeeId() {
        return this.userInfo.employeeId;
      }
      getWorkplaceId() {
        return this.userInfo.workplaceId;
      }
      getOrganizationId() {
        return this.userInfo.organizationId;
      }
      getOrganizationName() {
        return this.userInfo.organizationName;
      }
      getAssignmentExecutor() {
        return isNaN(Number(this.userInfo?.workplaceId)) ? {
          executorId: this.userInfo?.workplaceId,
          executorName: this.userInfo?.userName
        } : {
          executorId: Number(this.userInfo?.workplaceId),
          executorName: this.userInfo?.userName
        };
      }
      getDepartmentName() {
        return this.userInfo.departmentName;
      }
      getDepartmentId() {
        return this.userInfo.departmentId;
      }
      getPosition() {
        return this.userInfo.userPosition;
      }
      getRightCodes() {
        return this.userInfo.rightCodes;
      }
      getLogin() {
        return this.userInfo.login;
      }
      prepareCompositionContext(u, T) {
        u.getComposition().getLanguage()?.setCode(this.settings.openEHRLanguage ?? "ru"), u.getComposition().getTerritory()?.setCode(this.settings.openEHRTerritory ?? "RU");
        const R = new A.mS(u.getComposition().getContext());
        u.getComposition().getComposer()?.setValue({
          name: this.userInfo.userName,
          id: this.userInfo.userId,
          namespace: "local",
          scheme: "local"
        }), R.подробности_контекста().ид_события().getIdentifier().id || R.подробности_контекста().ид_события().setIdentifier(T.careCaseId), R.подробности_контекста().автор_информации().идентификатор_исполнения_должности_медработника().setIdentifier({
          assigner: this.userInfo.workplaceId,
          id: this.userInfo.identity,
          issuer: "Issuer",
          type: "Prescription"
        }), R.подробности_контекста().автор_информации().наименование_должности().setValue(this.userInfo.userPosition), R.подробности_контекста().автор_информации().наименование_структурного_подразделения().setValue(this.userInfo.departmentName), R.подробности_контекста().автор_информации().наименование_юридического_лица().setValue(this.userInfo.organizationName);
        const B = R.подробности_контекста().структура_медицинской_организации(),
          y = B.length > 0 ? B[0] : R.подробности_контекста().createструктура_медицинской_организации();
        y.ид_объекта().setIdentifier({
          id: this.userInfo.organizationId,
          issuer: "Issuer",
          assigner: "-",
          type: "Prescription"
        }), y.наименование().setValue(this.userInfo.organizationName), y.тип_объекта().setCode((this.organization.fields && this.organization.fields.idendifiers?.match("openEHROrganizationType\":\"(.*?)\"") || [])[1] || A.s5), this.setPlace(R), R.подробности_контекста().ид_документа().find(W => W.getIdentifier().id === u.getMedicalEntry().getUid()) || R.подробности_контекста().createид_документа().setIdentifier({
          assigner: "-",
          id: u.getMedicalEntry().getUid(),
          issuer: "Issuer",
          type: "MedicalEntry"
        }), this.setAddressMO(R), this.setAddInfo(R), R.setting().setCode(this.settings.openEHRSettingCode), R.setting().setValue(this.settings.openEHRSettingValue);
      }
      getSignTags() {
        return [{
          tag: "sign",
          value: this.getSignTagValue(),
          aqlPath: "/"
        }];
      }
      getSignTagValue(u) {
        const T = function L(h) {
            const x = new Date(h);
            return x.setTime(x.getTime() + 108e5), x.toISOString();
          }(new Date()),
          R = u ? `|${u}` : "",
          B = `${this.userInfo.userName}|${this.userInfo.userPosition}|${T}|${this.getWorkplaceId()}${R}`;
        return JSON.stringify({
          [this.userInfo.snils || ""]: B
        });
      }
      initUserInfo() {
        return this.userInfo$.pipe((0, d.b)(u => this.userInfo = u)).pipe((0, M.w)(() => this.settingsRepository.getSetting("default"))).pipe((0, d.b)(u => this.settings = u)).pipe((0, M.w)(() => this.medicalOrganizationService.getMedicalOrganizationQuery())).pipe((0, d.b)(u => this.organization = u)).subscribe(() => {});
      }
      setPlace(u) {
        const T = u.подробности_контекста().информация_о_месте_cобытия(),
          R = T.length > 0 ? T[0] : u.подробности_контекста().createинформация_о_месте_cобытия(),
          B = (this.organization.fields && this.organization.fields.idendifiers?.match("openEhrSettlement\":\"(.*?)\"") || [])[1] || A.mx;
        R.событие_произошло().setCode((this.organization.fields && this.organization.fields.idendifiers?.match("openEHREventPlaceType\":\"(.*?)\"") || [])[1] || A.zv), R.субъект_рф().setValue(this.organization.address.lpuAddrSub || ""), R.муниципальный_район_городской_округ().setValue(this.organization.address.lpuAddrReg || ""), R.поселение().setValue(B), R.улица().setValue(this.organization.address.lpuAddrStreet || "");
      }
      setAddressMO(u) {
        const T = u.подробности_контекста().адрес_медицинской_организации(),
          R = (this.organization.fields && this.organization.fields.idendifiers?.match("openEhrSettlement\":\"(.*?)\"") || [])[1];
        T.субъект_рф().setValue(this.organization.address.lpuAddrSub || ""), T.муниципальный_район_городской_округ().setValue(this.organization.address.lpuAddrReg || ""), R && T.населенный_пункт().setValue(R), T.улица().setValue(this.organization.address.lpuAddrStreet), T.номер_здания_сооружения().номер_дома().setValue(this.organization.address.lpuAddrNum);
      }
      setAddInfo(u) {
        const T = u.подробности_контекста().дополнительная_информация(),
          R = (this.organization.fields && this.organization.fields.idendifiers?.match("openEHRServiceCondition\":\"(.*?)\"") || [])[1];
        if (this.organization.fields) {
          const B = (this.organization.fields.idendifiers?.match("openEHRServiceType\":\"(.*?)\"") || [])[1];
          B && T.виды_медицинской_помощи().setCode(B);
          const y = (this.organization.fields.idendifiers?.match("openEHRServiceProfile\":\"(.*?)\"") || [])[1];
          y && T.профиль_медицинской_помощи().setCode(y);
          const j = (this.organization.fields.idendifiers?.match("openEHRServiceForm\":\"(.*?)\"") || [])[1];
          j && T.форма_оказания_медицинской_помощи().setCode(j);
        }
        T.условия_оказания_медицинской_помощи().setCode(R || A.vS);
      }
    }
    return (0, a.gn)([(0, m.k)(), (0, a.w6)("design:type", Function), (0, a.w6)("design:paramtypes", []), (0, a.w6)("design:returntype", b.w0)], h.prototype, "initUserInfo", null), h;
  })();
  var v = i(94650),
    f = i(10885);
  let E = (() => {
    class h {
      constructor(u, T, R) {
        this.user = u, this.settingsApi = T, this.medicalOrganizationService = R, this.userContext = new C(this.user.getUserInfo$(), T, R);
      }
      getContext() {
        return this.userContext;
      }
    }
    return h.ɵfac = function (u) {
      return new (u || h)(v.LFG(e.J), v.LFG(f.p), v.LFG(t.LR));
    }, h.ɵprov = v.Yz7({
      token: h,
      factory: h.ɵfac,
      providedIn: "root"
    }), h;
  })();
});
