// Extracted from main; webpack module 56470. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    N: () => Io
  });
  var t = i(61135),
    e = i(77579),
    a = i(39300),
    m = i(82722),
    d = i(84445),
    M = i(15861),
    b = i(36895),
    A = i(87545),
    N = i(76500),
    I = i(93278),
    O = i(49267),
    L = i(92203),
    C = i(23062),
    v = i(13207),
    f = i(85171),
    E = i(13700),
    h = i(43150),
    x = i(62804),
    u = i(85623),
    T = i(15091),
    R = i(9073),
    B = i(70823),
    y = i(3977),
    j = i(72210),
    W = i(6676),
    F = i(50879),
    Le = i(82409),
    ke = i(80668),
    J = i(56137),
    fe = i(24006),
    ye = i(20891),
    ae = i(71764),
    Y = i.n(ae),
    G = i(83905),
    te = i(82805),
    pe = i(95698),
    be = i(97215);
  const le = Mi => (Mi || "").trim().toLowerCase(),
    n = Mi => {
      if (!Mi) return "";
      const It = Mi.trim().split(/\s+/),
        [At, _n, it] = It;
      return At ? [At, (_n ? `${_n[0]}.` : "") + (it ? `${it[0]}.` : "")].filter(Boolean).join(" ") : "";
    },
    qe = Mi => Mi?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? "",
    Rt = Mi => n(qe(Mi)),
    We = (Mi, It) => Mi.source ? (Array.isArray(Mi.source) ? Mi.source : [Mi.source]).map((_n, it) => {
      const _e = Mi.getEmployeeRaw ? Mi.getEmployeeRaw(_n) : qe(_n),
        gt = Mi.getEmployee ? Mi.getEmployee(_n) : n(_e),
        ni = le(_e);
      return {
        type: Mi.type,
        title: Mi.title,
        date: Mi.getDate(_n),
        time: Mi.getTime(_n),
        employee: gt,
        isAuthor: It === ni,
        sourceIndex: it,
        ...(Mi.extra ? Mi.extra(_n) : {})
      };
    }).filter(_n => _n.date || _n.time) : [];
  var Re = i(851),
    st = i(73252),
    q = i(94650);
  const gi = class {};
  let mt = gi;
  gi.ɵfac = function (At) {
    return new (At || gi)();
  }, gi.ɵcmp = q.Xpm({
    type: gi,
    selectors: [["app-info-icon"]],
    standalone: !0,
    features: [q.jDz],
    decls: 2,
    vars: 0,
    consts: [["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M8 3C7.448 3 7 3.448 7 4.001C7 4.553 7.448 5 8 5C8.552 5 9 4.553 9 4.001C9 3.448 8.552 3 8 3ZM7 7V12C7 12.55 7.45 13 8 13C8.55 13 9 12.55 9 12V7C9 6.45 8.55 6 8 6C7.45 6 7 6.45 7 7ZM8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM8 1C11.86 1 15 4.141 15 8C15 11.859 11.86 15 8 15C4.14 15 1 11.859 1 8C1 4.141 4.14 1 8 1Z", "fill", "currentColor"]],
    template: function (At, _n) {
      1 & At && (q.O4$(), q.TgZ(0, "svg", 0), q._UZ(1, "path", 1), q.qZA());
    },
    styles: ["[_nghost-%COMP%]{display:flex}"]
  });
  const Kt = class {};
  let ut = Kt;
  Kt.ɵfac = function (At) {
    return new (At || Kt)();
  }, Kt.ɵcmp = q.Xpm({
    type: Kt,
    selectors: [["app-chevron-down-icon"]],
    standalone: !0,
    features: [q.jDz],
    decls: 2,
    vars: 0,
    consts: [["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.62473 5.21917C4.19347 4.87416 3.56418 4.94408 3.21917 5.37534C2.87416 5.8066 2.94408 6.4359 3.37534 6.78091L7.37534 10.7809C7.74056 11.0731 8.25951 11.0731 8.62473 10.7809L12.6247 6.78091C13.056 6.4359 13.1259 5.8066 12.7809 5.37534C12.4359 4.94408 11.8066 4.87416 11.3753 5.21917L8.00004 8.71941L4.62473 5.21917Z", "fill", "currentColor"]],
    template: function (At, _n) {
      1 & At && (q.O4$(), q.TgZ(0, "svg", 0), q._UZ(1, "path", 1), q.qZA());
    },
    styles: ["[_nghost-%COMP%]{display:flex}"]
  });
  const Vt = class {};
  let Ct = Vt;
  Vt.ɵfac = function (At) {
    return new (At || Vt)();
  }, Vt.ɵcmp = q.Xpm({
    type: Vt,
    selectors: [["app-delete-event-icon"]],
    standalone: !0,
    features: [q.jDz],
    decls: 2,
    vars: 0,
    consts: [["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.29537 14.2785C7.90154 14.6723 7.90154 15.3108 8.29537 15.7046C8.68919 16.0985 9.3277 16.0985 9.72153 15.7046L12 13.4262L14.2785 15.7046C14.6723 16.0985 15.3108 16.0985 15.7046 15.7046C16.0985 15.3108 16.0985 14.6723 15.7046 14.2785L13.4262 12L15.7046 9.72153C16.0985 9.3277 16.0985 8.68919 15.7046 8.29537C15.3108 7.90154 14.6723 7.90154 14.2785 8.29537L12 10.5738L9.72153 8.29537C9.3277 7.90154 8.68919 7.90154 8.29537 8.29537C7.90154 8.68919 7.90154 9.3277 8.29537 9.72153L10.5738 12L8.29537 14.2785Z", "fill", "currentColor"]],
    template: function (At, _n) {
      1 & At && (q.O4$(), q.TgZ(0, "svg", 0), q._UZ(1, "path", 1), q.qZA());
    },
    styles: ["[_nghost-%COMP%]{display:flex}"]
  });
  const Pn = class {};
  let Ft = Pn;
  Pn.ɵfac = function (At) {
    return new (At || Pn)();
  }, Pn.ɵmod = q.oAB({
    type: Pn
  }), Pn.ɵinj = q.cJS({
    imports: [b.ez, J.e_, ut, Ct]
  });
  var Et = i(763),
    Ue = i(44348),
    Me = i(68983),
    Ke = i(91854),
    Ze = i(44688),
    Ee = i(59194),
    je = i(40891),
    Mt = i(89653),
    Je = i(97710),
    Xt = i(17489),
    Nn = i(63900);
  class Pi {
    constructor(It, At) {
      this.compositionEntry = It, this.store = At, this.basePath = "карта_наблюдения_за_пациентом_со_стомой.карта_наблюдения_за_пациентом_со_стомой", this.clusterPath = {
        bandage: `${this.basePath}.\u0441\u043c\u0435\u043d\u0430_\u043f\u043e\u0432\u044f\u0437\u043a\u0438.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[*]`,
        replacement: `${this.basePath}.\u0447\u0430\u0441\u0442\u0438\u0447\u043d\u0430\u044f_\u0437\u0430\u043c\u0435\u043d\u0430_\u0441\u0438\u0441\u0442\u0435\u043c\u044b.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[*]`,
        treatment: `${this.basePath}.\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430_\u043a\u043e\u0436\u043d\u044b\u0445_\u043f\u043e\u043a\u0440\u043e\u0432\u043e\u0432_\u0432\u043e\u043a\u0440\u0443\u0433_\u0441\u0442\u043e\u043c\u044b.any_event.\u043a\u043e\u0436\u0430[*]`,
        inflammation: `${this.basePath}.\u0432\u043e\u0441\u043f\u0430\u043b\u0435\u043d\u0438\u0435_\u0441\u043b\u0438\u0437\u0438\u0441\u0442\u043e\u0439_\u0432_\u043c\u0435\u0441\u0442\u0435_\u0441\u0442\u043e\u044f\u043d\u0438\u044f_\u0441\u0442\u043e\u043c\u044b.any_event.\u0441\u043b\u0438\u0437\u0438\u0441\u0442\u0430\u044f[*]`,
        excretion: `${this.basePath}.\u043d\u0430\u043b\u0438\u0447\u0438\u0435_\u043e\u0442\u0434\u0435\u043b\u044f\u0435\u043c\u043e\u0433\u043e.\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440[*]`,
        disorder: `${this.basePath}.\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c_\u0441\u0442\u043e\u043c\u044b_\u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0430[*]`,
        complaint: `${this.basePath}.\u0436\u0430\u043b\u043e\u0431\u044b_\u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430.\u0436\u0430\u043b\u043e\u0431\u044b[*]`,
        additionalInfo: `${this.basePath}.\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440[*]`
      }, this.userData = null, this.isNurseJob = !1, this.notModifiedNodes = ["_uid", "_link", "language", "territory", "category", "composer", "context"], this.notModifiedInnerNodes = ["дата_и_время", "language", "encoding"], this.innerCompositionKey = "карта_наблюдения_за_пациентом_со_стомой", this.composition = this.compositionEntry.getComposition(), this.store.select(be.S8).subscribe(_n => {
        this.userData = _n;
        const it = this.userData?.jobTitle?.name?.toLowerCase() ?? "";
        this.isNurseJob = it.includes("медицинская сестра") || it.includes("медицинский брат");
      });
    }
    getCluster(It) {
      return this.composition.get(It);
    }
    setValues(It, At, _n, it) {
      console.log("ДАННЫЕН В КОМПОЗИЦИИ: ", It, At, _n, it), At && this.setLink(At), it && this.clearComposition();
      const _e = `${this.basePath}.\u0432\u0438\u0434_\u0441\u0442\u043e\u043c\u044b.\u0432\u0438\u0434_\u0441\u0442\u043e\u043c\u044b`;
      if (this.composition.get(`${_e}.\u0432\u0438\u0434_\u0441\u0442\u043e\u043c\u044b`).setValue(It.stoma?.stomaKind), It.stoma.stomaName && this.composition.get(`${_e}.\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435_\u0441\u0442\u043e\u043c\u044b`).setValue(It.stoma.stomaName), It.stoma.stomaSize && this.composition.get(`${_e}.\u0440\u0430\u0437\u043c\u0435\u0440`).setValue(It.stoma.stomaSize.replace(",", ".")), "create" === _n) {
        const Er = It.installDate.split("T")[0],
          Br = It.installDate.split("T")[1].slice(0, 5);
        this.composition.get(`${this.basePath}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0434\u0430\u0442\u0430_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438`).setValue(Er), this.composition.get(`${this.basePath}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0432\u0440\u0435\u043c\u044f_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438`).setValue(Br);
      }
      this.composition.get(`${this.basePath}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0434\u0430\u0442\u0430_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f.\u0434\u0430\u0442\u0430_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f`).setValue(It.observationDate);
      const gt = `${this.basePath}.\u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u043e_\u0432\u0440\u0430\u0447\u0435_\u0438_\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439_\u0441\u0435\u0441\u0442\u0440\u0435`,
        ni = this.composition.get(`${gt}.\u0444\u0438\u043e_\u0432\u0440\u0430\u0447\u0430.\u0444\u0438\u043e_\u0432\u0440\u0430\u0447\u0430.\u0444\u0438\u043e_\u0432\u0440\u0430\u0447\u0430`),
        So = this.composition.get(`${gt}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439_\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439_\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439_\u0441\u0435\u0441\u0442\u0440\u044b`);
      this.isNurseJob ? (ni.setValue(It.selectedDoctor.name), ni.setCode(It.selectedDoctor.id)) : (ni.setValue(`${this.userData.lastName} ${this.userData.firstName} ${this.userData.secondName}`), ni.setCode(this.userData.employeeId)), So.setValue(`${this.userData.lastName} ${this.userData.firstName} ${this.userData.secondName}`), So.setCode(this.userData.employeeId), this.watchStoma(It), It?.deleteStoma?.check && this.deleteStoma(It), It?.finishStoma?.check && this.finishStoma(It), console.log("PARENTUID^", At), At && this.setCareCaseId(It.careCaseId), console.log("Композиция итоговая: ", this.composition), this.composition.save();
    }
    setCareCaseId(It) {
      this.composition.getContext().get("подробности_контекста.ид_события").setIdentifier({
        id: It,
        assigner: "hospital",
        issuer: "hospital",
        type: "medical-entry"
      });
    }
    setLink(It) {
      this.composition.getLinks()?.some(it => it.getValue()?.target === `ehr:compositions/${It}`) || this.composition.addLink().setValue({
        meaning: "Ссылка на протокол",
        type: "EHR",
        target: `ehr:compositions/${It}`
      });
    }
    watchStoma(It) {
      const At = `${this.userData.lastName} ${this.userData.firstName} ${this.userData.secondName}`;
      if (It.bandage?.check && !Array.isArray(It.bandage.details)) {
        const _n = this.getCluster(this.clusterPath.bandage);
        _n.get("дата_смены_повязки.дата_смены_повязки").setValue(It.observationDate), _n.get("дата_смены_повязки.время_смены_повязки").setValue(It.bandage.time), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(At), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (It.bandage?.check && Array.isArray(It.bandage?.details)) for (const _n of It.bandage.details) {
        const it = this.getCluster(this.clusterPath.bandage),
          _e = _n?.дата_смены_повязки?.время_смены_повязки ?? _n?.time,
          gt = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? At,
          ni = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId;
        it.get("дата_смены_повязки.дата_смены_повязки").setValue(It.observationDate), it.get("дата_смены_повязки.время_смены_повязки").setValue(_e), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(gt), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(ni);
      }
      if (It.replacement?.check && !Array.isArray(It.replacement?.details)) {
        const _n = this.getCluster(this.clusterPath.replacement);
        _n.get("дата_частичной_замены_системы.дата_частичной_замены").setValue(It.observationDate), _n.get("дата_частичной_замены_системы.время_частичной_замены").setValue(It.replacement.time), _n.get("устройство.устройство").setValue(It.replacement.device), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(At), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (It.replacement?.check && Array.isArray(It.replacement?.details)) for (const _n of It.replacement.details) {
        const it = this.getCluster(this.clusterPath.replacement),
          _e = _n?.дата_частичной_замены_системы?.время_частичной_замены ?? _n?.time,
          gt = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? At,
          ni = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId,
          So = _n?.устройство?.устройство ?? null;
        it.get("дата_частичной_замены_системы.дата_частичной_замены").setValue(It.observationDate), it.get("дата_частичной_замены_системы.время_частичной_замены").setValue(_e), So && it.get("устройство.устройство").setValue(It.replacement.device), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(gt), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(ni);
      }
      if (It.treatment?.check && !Array.isArray(It.treatment?.details)) {
        const _n = this.getCluster(this.clusterPath.treatment);
        _n.get("дата_обработки.дата_обработки").setValue(It.observationDate), _n.get("дата_обработки.время_обработки").setValue(It.treatment.time), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(At), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (It.treatment?.check && Array.isArray(It.treatment?.details)) for (const _n of It.treatment.details) {
        const it = this.getCluster(this.clusterPath.treatment),
          _e = _n?.дата_обработки?.время_обработки ?? _n?.time,
          gt = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? At,
          ni = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId;
        it.get("дата_обработки.дата_обработки").setValue(It.observationDate), it.get("дата_обработки.время_обработки").setValue(_e), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(gt), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(ni);
      }
      if (It.inflammation?.check && !Array.isArray(It.inflammation?.details)) {
        const _n = this.getCluster(this.clusterPath.inflammation);
        _n.get("дата_воспаления.дата_воспаления").setValue(It.observationDate), _n.get("дата_воспаления.время_воспаления").setValue(It.inflammation.time), _n.get("описание_воспаления").setValue(It.inflammation.desc), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(At), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (It.inflammation?.check && Array.isArray(It.inflammation?.details)) for (const _n of It.inflammation.details) {
        const it = this.getCluster(this.clusterPath.inflammation),
          _e = _n?.дата_воспаления?.время_воспаления ?? _n?.time,
          gt = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? At,
          ni = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId,
          So = _n?.описание_воспаления ?? null;
        it.get("дата_воспаления.дата_воспаления").setValue(It.observationDate), it.get("дата_воспаления.время_воспаления").setValue(_e), So && it.get("описание_воспаления").setValue(It.inflammation.desc), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(gt), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(ni);
      }
      if (It.excretion?.check && !Array.isArray(It.excretion?.details)) {
        const _n = this.getCluster(this.clusterPath.excretion);
        _n.get("дата_отделяемого.дата_отделяемого").setValue(It.observationDate), _n.get("дата_отделяемого.время_отделяемого").setValue(It.excretion.time), _n.get("отделяемое_из_уретры.характер_отделяемого").setValue(It.excretion.desc), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(At), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (It.excretion?.check && Array.isArray(It.excretion?.details)) for (const _n of It.excretion.details) {
        const it = this.getCluster(this.clusterPath.excretion),
          _e = _n?.дата_отделяемого?.время_отделяемого ?? _n?.time,
          gt = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? At,
          ni = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId,
          So = _n?.отделяемое_из_уретры?.характер_отделяемого ?? null;
        it.get("дата_отделяемого.дата_отделяемого").setValue(It.observationDate), it.get("дата_отделяемого.время_отделяемого").setValue(_e), So && it.get("отделяемое_из_уретры.характер_отделяемого").setValue(So), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(gt), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(ni);
      }
      if (It.disorder?.check && !Array.isArray(It.disorder?.details)) {
        const _n = this.getCluster(this.clusterPath.disorder);
        _n.get("дата.дата_нарушения_функциональности_стомы").setValue(It.observationDate), _n.get("дата.время_нарушения_функциональности_стомы").setValue(It.disorder.time), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(At), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (It.disorder?.check && Array.isArray(It.disorder?.details)) for (const _n of It.disorder.details) {
        const it = this.getCluster(this.clusterPath.disorder),
          _e = _n?.дата?.время_нарушения_функциональности_стомы ?? _n?.time,
          gt = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? At,
          ni = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId;
        it.get("дата.дата_нарушения_функциональности_стомы").setValue(It.observationDate), it.get("дата.время_нарушения_функциональности_стомы").setValue(_e), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(gt), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(ni);
      }
      if (It.complaint?.check && !Array.isArray(It.complaint?.details)) {
        const _n = this.getCluster(this.clusterPath.complaint);
        _n.get("дата_жалобы.дата_жалобы").setValue(It.observationDate), _n.get("дата_жалобы.время_жалобы").setValue(It.complaint.time), _n.get("описание_жалобы").setValue(It.complaint.desc), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(At), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (It.complaint?.check && Array.isArray(It.complaint?.details)) for (const _n of It.complaint.details) {
        const it = this.getCluster(this.clusterPath.complaint),
          _e = _n?.дата_жалобы?.время_жалобы ?? _n?.time,
          gt = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? At,
          ni = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId,
          So = _n?.описание_жалобы ?? null;
        it.get("дата_жалобы.дата_жалобы").setValue(It.observationDate), it.get("дата_жалобы.время_жалобы").setValue(_e), So && it.get("описание_жалобы").setValue(It.complaint.desc), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(gt), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(ni);
      }
      if (It.addInfo?.check && !Array.isArray(It.addInfo?.details)) {
        const _n = this.getCluster(this.clusterPath.additionalInfo);
        _n.get("дата_и_время.дата_дополнительной_информации").setValue(It.observationDate), _n.get("дата_и_время.время_дополнительной_информации").setValue(It.addInfo.time), _n.get("описание_дополнительной_информации.описание_дополнительной_информации").setValue(It.addInfo.desc), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(At), _n.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (It.addInfo?.check && Array.isArray(It.addInfo?.details)) for (const _n of It.addInfo.details) {
        const it = this.getCluster(this.clusterPath.additionalInfo),
          _e = _n?.дата_и_время?.время_дополнительной_информации ?? _n?.time,
          gt = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? At,
          ni = _n?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId,
          So = _n?.описание_дополнительной_информации?.описание_дополнительной_информации ?? null;
        it.get("дата_и_время.дата_дополнительной_информации").setValue(It.observationDate), it.get("дата_и_время.время_дополнительной_информации").setValue(_e), So && it.get("описание_дополнительной_информации.описание_дополнительной_информации").setValue(It.addInfo.desc), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(gt), it.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(ni);
      }
    }
    deleteStoma(It) {
      const At = `${this.basePath}.\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435_\u0441\u0442\u043e\u043c\u044b`,
        _n = this.composition.get(`${At}.\u0444\u0438\u043e_\u0432\u0440\u0430\u0447\u0430.\u0444\u0438\u043e_\u0432\u0440\u0430\u0447\u0430`);
      if (this.composition.get(`${At}.\u0434\u0430\u0442\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.\u0434\u0430\u0442\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f`).setValue(It.observationDate), this.composition.get(`${At}.\u0434\u0430\u0442\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.\u0432\u0440\u0435\u043c\u044f_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f`).setValue(It.deleteStoma.time), this.composition.get(`${At}.\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f`).setValue(It.deleteStoma.reason), this.composition.get(`${At}.\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.\u043e\u0441\u043b\u043e\u0436\u043d\u0435\u043d\u0438\u0435`).setValue(It.deleteStoma.complication), this.isNurseJob) {
        const it = this.composition.get(`${At}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`);
        _n.setValue(It.selectedDoctor.name), _n.setCode(It.selectedDoctor.id), it.setValue(`${this.userData.lastName} ${this.userData.firstName} ${this.userData.secondName}`), it.setCode(this.userData.employeeId);
      } else _n.setValue(`${this.userData.lastName} ${this.userData.firstName} ${this.userData.secondName}`), _n.setCode(this.userData.employeeId);
    }
    finishStoma(It) {
      console.log("Попали в завершение стомы: ", It.finishStoma);
      const At = `${this.basePath}.\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u043c.any_event`,
        _n = `${At}.\u0434\u0430\u0442\u0430_\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f_\u0443\u0445\u043e\u0434\u0430`,
        it = this.composition.get(`${At}.\u0444\u0438\u043e_\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430`);
      this.composition.get(`${_n}.\u0434\u0430\u0442\u0430_\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f_\u0443\u0445\u043e\u0434\u0430`).setValue(It.observationDate), this.composition.get(`${_n}.\u0432\u0440\u0435\u043c\u044f_\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f_\u0443\u0445\u043e\u0434\u0430`).setValue(It.finishStoma.time), this.composition.get(`${At}.\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439`).setValue(It.finishStoma.comment), it.setValue(`${this.userData.lastName} ${this.userData.firstName} ${this.userData.secondName}`), it.setCode(this.userData.employeeId);
    }
    clearComposition() {
      const It = this.composition.getData();
      It && (Object.keys(It).filter(At => !this.notModifiedNodes.includes(At)).forEach(At => {
        if (At === this.innerCompositionKey) {
          const _n = It[At];
          Array.isArray(_n) && _n[0] && Object.keys(_n[0]).filter(it => !this.notModifiedInnerNodes.includes(it)).forEach(it => {
            _n[0][it] = [null];
          });
        } else It[At] = [null];
      }), this.composition.save());
    }
  }
  const pi = class {
    constructor(It, At) {
      this.ehrService = It, this.store = At;
    }
    saveStoma(It, At) {
      return this.ehrService.getEhr(At).pipe((0, Nn.w)(_n => this._resolveStrategy(_n, It)));
    }
    _resolveStrategy(It, At) {
      return Y()(At.observationDate).isSame(Y()(At.installDate).format("YYYY-MM-DD"), "day") ? this._updateRoot(It, At) : It.getMedicalEntry(At.protocolId).pipe((0, Nn.w)(it => {
        const gt = it.getChildren().find(ni => {
          try {
            const So = ni.getComposition().get("карта_наблюдения_за_пациентом_со_стомой.карта_наблюдения_за_пациентом_со_стомой.дата_и_время.дата_наблюдения.дата_наблюдения").getValue();
            return Y()(So.toDate()).isSame(Y()(At.observationDate), "day");
          } catch {
            return !1;
          }
        });
        return this._updateOrCreateChild(It, it, At, gt);
      }));
    }
    _updateRoot(It, At) {
      return It.getMedicalEntry(At.protocolId).pipe((0, Nn.w)(_n => (new Pi(_n.getRoot(), this.store).setValues(At, void 0, void 0, !1), this._saveOrSign(_n, At))));
    }
    _updateOrCreateChild(It, At, _n, it) {
      return it ? (new Pi(it, this.store).setValues(_n, At.getUid(), void 0, !1), _n.finishStoma?.check ? At.sign() : it.getMedicalEntry().save()) : It.createMedicalEntry("card_patient_with_stoma", _n.careCaseId).pipe((0, Nn.w)(_e => (new Pi(_e.getRoot(), this.store).setValues(_n, At.getUid(), "create", !1), At.attachComposition(_e.getRoot().getBaseClass(_e.getRoot().getType())), this._saveOrSign(At, _n))));
    }
    _saveOrSign(It, At) {
      return At.finishStoma?.check ? It.sign() : It.save();
    }
    deleteEventFromComposition(It, At, _n, it) {
      return this.ehrService.getEhr(It).pipe((0, Nn.w)(_e => _e.getMedicalEntry(_n).pipe((0, Nn.w)(gt => {
        const So = gt.getChildren().find(Br => this._compareUids(Br.getUid(), At));
        return So ? this.hasCareActivities(it) ? (new Pi(So, this.store).setValues(it, _n, void 0, !0), So.getMedicalEntry().save()) : (gt.deleteEntity(So.getUid()), gt.save()) : (new Pi(gt.getRoot(), this.store).setValues(it, void 0, void 0, !0), gt.save());
      }))));
    }
    _compareUids(It, At) {
      return It.split("::")[0] === At.split("::")[0];
    }
    unSignStoma(It, At, _n) {
      return this.ehrService.getEhr(It).pipe((0, Nn.w)(it => it.getMedicalEntry(_n).pipe((0, Nn.w)(_e => {
        const gt = (0, Xt.cloneDeep)(At),
          ni = gt.stoma.stomaCareMarks ?? [],
          So = ni.find(vr => "finishTime" in vr);
        gt.stoma.stomaCareMarks = ni.filter(vr => !("finishTime" in vr));
        const Er = So?.compositionId ? _e.getChildren().find(vr => this._compareUids(vr.getUid(), So.compositionId)) : void 0;
        return Er ? this.hasCareActivities(gt) ? (new Pi(Er, this.store).setValues(gt, _n, void 0, !0), Er.getMedicalEntry().save()) : (_e.deleteEntity(Er.getUid()), _e.save()) : (new Pi(_e.getRoot(), this.store).setValues(gt, void 0, void 0, !0), _e.save());
      }))));
    }
    hasCareActivities(It) {
      return [It.bandage, It.replacement, It.treatment, It.inflammation, It.excretion, It.disorder, It.complaint, It.addInfo, It.deleteStoma, It.finishStoma].some(At => At?.check);
    }
  };
  let co = pi;
  pi.ɵfac = function (At) {
    return new (At || pi)(q.LFG(je.r), q.LFG(Mt.yh));
  }, pi.ɵprov = q.Yz7({
    token: pi,
    factory: pi.ɵfac,
    providedIn: "root"
  });
  var Jo = i(72948),
    fr = i(62642),
    pt = i(39841),
    Dt = i(71884),
    Ht = i(54004),
    Dn = i(90127),
    vt = i(62289),
    an = i(40470);
  function li(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 17), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw().$implicit;
      q.xp6(1), q.Oqu(At.desc);
    }
  }
  function zn(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 17), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw().$implicit;
      q.xp6(1), q.Oqu(At.device);
    }
  }
  function $t(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 17), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw().$implicit;
      q.xp6(1), q.Oqu(At.reason);
    }
  }
  function Mn(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 17), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw().$implicit;
      q.xp6(1), q.Oqu(At.complication);
    }
  }
  function Qn(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 17), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw().$implicit;
      q.xp6(1), q.Oqu(At.comment);
    }
  }
  function In(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "app-delete-event-icon", 18), q.NdJ("click", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw(4);
        return q.KtG(_e.openDeleteStomaCareMarks(it, _e.getOriginalIndex(it)));
      }), q.qZA();
    }
  }
  function ui(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "span", 14), q._uU(4), q.qZA()(), q.YNc(5, li, 2, 1, "div", 15), q.YNc(6, zn, 2, 1, "div", 15), q.YNc(7, $t, 2, 1, "div", 15), q.YNc(8, Mn, 2, 1, "div", 15), q.YNc(9, Qn, 2, 1, "div", 15), q.qZA(), q.YNc(10, In, 1, 0, "app-delete-event-icon", 16), q.qZA()), 2 & Mi) {
      const At = It.$implicit,
        _n = q.oxw(4);
      q.ekj("has-desc", At.desc || At.device || At.reason || At.complication || At.comment), q.xp6(4), q.AsE(" ", (null == At.time ? null : At.time.slice(0, 5)) || "", " ", At.employee, " "), q.xp6(1), q.Q6J("ngIf", At.desc), q.xp6(1), q.Q6J("ngIf", At.device), q.xp6(1), q.Q6J("ngIf", At.reason), q.xp6(1), q.Q6J("ngIf", At.complication), q.xp6(1), q.Q6J("ngIf", At.comment), q.xp6(1), q.Q6J("ngIf", !_n.isSigned && At.isAuthor);
    }
  }
  function To(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 8)(1, "div", 9), q.YNc(2, ui, 11, 10, "div", 10), q.qZA()()), 2 & Mi) {
      const At = q.oxw().$implicit;
      q.xp6(2), q.Q6J("ngForOf", At.items);
    }
  }
  function bi(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 5)(1, "div", 6), q.NdJ("click", function () {
        const _e = q.CHM(At).index,
          gt = q.oxw(2);
        return q.KtG(gt.eventToggle(_e));
      }), q._uU(2), q._UZ(3, "app-chevron-down-icon"), q.qZA(), q.YNc(4, To, 3, 1, "div", 7), q.qZA();
    }
    if (2 & Mi) {
      const At = It.$implicit,
        _n = It.index,
        it = q.oxw(2);
      q.xp6(1), q.ekj("open", it.eventState[_n]), q.xp6(1), q.AsE(" ", At.title, " (", it.stomaName || "", ") "), q.xp6(2), q.Q6J("ngIf", it.eventState[_n]);
    }
  }
  function qn(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 3), q.YNc(1, bi, 5, 5, "div", 4), q.qZA()), 2 & Mi) {
      const At = q.oxw();
      q.xp6(1), q.Q6J("ngForOf", At.groupedEventsList);
    }
  }
  const xo = class {
    constructor(It, At, _n, it, _e, gt, ni, So) {
      this.cdr = It, this.composition = At, this.confirmationModalService = _n, this.messageService = it, this.store = _e, this.stomaNewCompositionService = gt, this.breakpointObserver = ni, this.stomaNotificationService = So, this.parentSigned = !1, this.updateStomaItem = new q.vpe(), this.isEventLoad = new q.vpe(), this.eventsChanged = new q.vpe(), this.destroy$ = new e.x(), this.card = null, this.eventsList = [], this.eventState = {}, this.isSigned = !1, this.compositionSigned = !1, this.events = !1, this.event = {
        0: !1,
        1: !1
      }, this.isTablet = !1, this.isLoad = !1, this.compositionId$ = new t.X(null);
    }
    ngOnInit() {
      this.breakpointObserver.observe(Dn.o).subscribe(It => this.isTablet = It.matches), (0, pt.a)([this.compositionId$, this.store.select(be.S8), this.store.select(Re.j3)]).pipe((0, Dt.x)(), (0, m.R)(this.destroy$), (0, a.h)(([It, At, _n]) => !!It && !!At && !!_n), (0, Nn.w)(([It, At, _n]) => this.composition.getCompositionNew(It).pipe((0, Ht.U)(it => ({
        composition: it,
        user: At,
        patient: _n
      }))))).subscribe(({
        composition: It,
        user: At,
        patient: _n
      }) => {
        this.currentUser = At, this.patient = _n, this.handleComposition(It);
      });
    }
    handleComposition(It) {
      const At = this.parseOpenEhr(It),
        _n = At?.composition?.карта_наблюдения_за_пациентом_со_стомой?.карта_наблюдения_за_пациентом_со_стомой;
      this.card = At;
      const it = It?.tags?.find(_e => "sign" === _e.tag);
      if (this.compositionSigned = !!it?.value, this.isSigned = this.parentSigned || this.compositionSigned, this.eventsList = this.mapStomaEvents(_n, this.currentUser), this.eventsList) {
        const _e = _n?.сведения_о_враче_и_медицинской_сестре?.фио_врача?.фио_врача?.фио_врача ?? _n?.сведения_о_враче_и_медицинской_сестре?.фио_медицинской_сестры?.фио_медицинской_сестры?.фио_медицинской_сестры;
        this.updateStomaItem.emit({
          eventsList: this.eventsList,
          selectDoc: {
            selectDoctor: {
              id: _e?.code,
              name: _e?.value
            }
          },
          currentCareMark: this.compositionId,
          payload: this.buildUnSignPayload()
        });
      }
    }
    ngOnChanges(It) {
      It.compositionId && this.compositionId$.next(this.compositionId), It.parentSigned && (this.isSigned = this.parentSigned || this.compositionSigned);
    }
    mapStomaEvents(It, At) {
      const _n = le([At?.lastName, At?.firstName, At?.secondName].filter(Boolean).join(" "));
      return [{
        type: "bandage",
        title: "Смена повязки",
        source: It?.смена_повязки?.подробности_о_процедуре,
        getDate: _e => _e?.дата_смены_повязки?.дата_смены_повязки,
        getTime: _e => _e?.дата_смены_повязки?.время_смены_повязки,
        getEmployee: Rt
      }, {
        type: "replace",
        title: "Частичная замена системы",
        source: It?.частичная_замена_системы?.подробности_о_процедуре,
        getDate: _e => _e?.дата_частичной_замены_системы?.дата_частичной_замены,
        getTime: _e => _e?.дата_частичной_замены_системы?.время_частичной_замены,
        getEmployee: Rt,
        extra: _e => ({
          device: _e?.устройство?.устройство
        })
      }, {
        type: "treatment",
        title: "Обработка кожных покровов",
        source: It?.обработка_кожных_покровов_вокруг_стомы?.any_event?.кожа,
        getDate: _e => _e?.дата_обработки?.дата_обработки,
        getTime: _e => _e?.дата_обработки?.время_обработки,
        getEmployee: Rt
      }, {
        type: "inflammation",
        title: "Воспаление слизистой в месте стояния стомы",
        source: It?.воспаление_слизистой_в_месте_стояния_стомы?.any_event?.слизистая,
        getDate: _e => _e?.дата_воспаления?.дата_воспаления,
        getTime: _e => _e?.дата_воспаления?.время_воспаления,
        getEmployee: Rt,
        extra: _e => ({
          desc: _e?.описание_воспаления
        })
      }, {
        type: "excretion",
        title: "Наличие отделяемого",
        source: It?.наличие_отделяемого?.контейнер,
        getDate: _e => _e?.дата_отделяемого?.дата_отделяемого,
        getTime: _e => _e?.дата_отделяемого?.время_отделяемого,
        getEmployee: Rt,
        extra: _e => ({
          desc: _e?.отделяемое_из_уретры?.характер_отделяемого
        })
      }, {
        type: "disorder",
        title: "Функциональность стомы нарушена",
        source: It?.функциональность_стомы_нарушена,
        getDate: _e => _e?.дата?.дата_нарушения_функциональности_стомы,
        getTime: _e => _e?.дата?.время_нарушения_функциональности_стомы,
        getEmployee: Rt
      }, {
        type: "complaint",
        title: "Жалобы пациента",
        source: It?.жалобы_пациента?.жалобы,
        getDate: _e => _e?.дата_жалобы?.дата_жалобы,
        getTime: _e => _e?.дата_жалобы?.время_жалобы,
        getEmployee: Rt,
        extra: _e => ({
          desc: _e?.описание_жалобы
        })
      }, {
        type: "addInfo",
        title: "Дополнительная информация",
        source: It?.контейнер,
        getDate: _e => _e?.дата_и_время?.дата_дополнительной_информации,
        getTime: _e => _e?.дата_и_время?.время_дополнительной_информации,
        getEmployee: Rt,
        extra: _e => ({
          desc: _e?.описание_дополнительной_информации?.описание_дополнительной_информации
        })
      }, {
        type: "deleteStoma",
        title: "Закрытие стомы",
        source: It?.удаление_стомы,
        getDate: _e => _e?.дата_удаления?.дата_удаления,
        getTime: _e => _e?.дата_удаления?.время_удаления,
        getEmployee: _e => n(this.getClosureAuthor(_e)),
        getEmployeeRaw: _e => this.getClosureAuthor(_e),
        extra: _e => ({
          reason: _e?.причина_удаления?.причина_удаления,
          complication: _e?.причина_удаления?.осложнение
        })
      }, {
        type: "finish",
        title: "Завершение ухода",
        source: It?.завершение_ухода_за_пациентом?.any_event,
        getDate: _e => _e?.дата_завершения_ухода?.дата_завершения_ухода,
        getTime: _e => _e?.дата_завершения_ухода?.время_завершения_ухода,
        getEmployee: Rt,
        extra: _e => ({
          comment: _e?.комментарий
        })
      }].flatMap(_e => We(_e, _n));
    }
    getClosureAuthor(It) {
      return It?.фио_медсестры?.фио_медсестры?.фио_медсестры?.value ?? It?.фио_медсестры?.фио_медсестры?.value ?? It?.фио_врача?.фио_врача?.фио_врача?.value ?? It?.фио_врача?.фио_врача?.value ?? "";
    }
    eventsToggle() {
      this.events = !this.events;
    }
    eventToggle(It) {
      this.eventState = {
        ...this.eventState,
        [It]: !this.eventState[It]
      };
    }
    deleteEvent(It, At) {
      var _n = this;
      return (0, M.Z)(function* () {
        const it = _n.buildUpdatePayload(_n.eventsList, At);
        if (it) try {
          yield (0, G.z)(_n.stomaNewCompositionService.deleteEventFromComposition(_n.card.ehrId, _n.compositionId, _n.protocolId, it));
        } catch (_e) {
          console.error("Ошибка при удалении отметки:", _e);
        }
      })();
    }
    parseOpenEhr(It) {
      if (Array.isArray(It)) return 1 === It.length ? this.parseOpenEhr(It[0]) : It.map(At => this.parseOpenEhr(At));
      if (It && "object" == typeof It) {
        const At = {};
        for (const _n of Object.keys(It)) {
          const it = It[_n];
          _n.startsWith("|") ? At[_n.substring(1)] = this.parseOpenEhr(it) : At[_n] = this.parseOpenEhr(it);
        }
        return "value" in At && 1 === Object.keys(At).length ? At.value : At;
      }
      return It;
    }
    buildUpdatePayload(It, At) {
      const _n = It[At];
      if (!_n) return null;
      const it = this.card?.composition?.карта_наблюдения_за_пациентом_со_стомой?.карта_наблюдения_за_пациентом_со_стомой,
        _e = structuredClone(it),
        {
          type: ni,
          sourceIndex: So
        } = _n,
        Er = {
          bandage: {
            block: "смена_повязки",
            arrayPath: ["подробности_о_процедуре"]
          },
          replace: {
            block: "частичная_замена_системы",
            arrayPath: ["подробности_о_процедуре"]
          },
          treatment: {
            block: "обработка_кожных_покровов_вокруг_стомы",
            arrayPath: ["any_event", "кожа"]
          },
          inflammation: {
            block: "воспаление_слизистой_в_месте_стояния_стомы",
            arrayPath: ["any_event", "слизистая"]
          },
          excretion: {
            block: "наличие_отделяемого",
            arrayPath: ["контейнер"]
          },
          disorder: {
            block: "функциональность_стомы_нарушена",
            arrayPath: []
          },
          complaint: {
            block: "жалобы_пациента",
            arrayPath: ["жалобы"]
          },
          addInfo: {
            block: "контейнер",
            arrayPath: []
          }
        }[ni];
      if (Er) {
        const {
          block: zr,
          arrayPath: ks
        } = Er;
        let aa = _e?.[zr];
        if (!aa) return null;
        for (let ul = 0; ul < ks.length - 1; ul++) aa = aa?.[ks[ul]];
        const Ka = ks[ks.length - 1],
          ja = ks.length ? aa?.[Ka] : aa;
        if (Array.isArray(ja)) {
          const ul = ja.filter((Ln, en) => en !== So);
          0 === ul.length ? delete _e[zr] : ks.length ? aa[Ka] = ul : _e[zr] = ul;
        } else delete _e[zr];
      } else "deleteStoma" === ni ? delete _e.удаление_стомы : "finish" === ni && delete _e.завершение_ухода_за_пациентом;
      const Br = (zr, ks) => {
          if (!zr) return null;
          const aa = Array.isArray(zr) ? zr : [zr];
          return aa.reduce((Ka, ja) => {
            const ul = ks(Ka),
              Ln = ks(ja);
            return ul ? Ln && Ln > ul ? ja : Ka : ja;
          }, aa[0]);
        },
        vr_replacement = () => Br(_e?.частичная_замена_системы?.подробности_о_процедуре, zr => zr?.дата_частичной_замены_системы?.время_частичной_замены),
        vr_inflammation = () => Br(_e?.воспаление_слизистой_в_месте_стояния_стомы?.any_event?.слизистая, zr => zr?.дата_воспаления?.время_воспаления),
        vr_excretion = () => Br(_e?.наличие_отделяемого?.контейнер, zr => zr?.дата_отделяемого?.время_отделяемого),
        vr_complaint = () => Br(_e?.жалобы_пациента?.жалобы, zr => zr?.дата_жалобы?.время_жалобы),
        vr_addInfo = () => Br(_e?.контейнер, zr => zr?.дата_и_время?.время_дополнительной_информации);
      return {
        protocolId: this.protocolId ?? null,
        careCaseId: this.patient?.careCaseId ?? null,
        ehr: this.card?.ehrId ?? null,
        installDate: _e?.дата_и_время?.дата_и_время?.дата_установки,
        observationDate: _e?.дата_и_время?.дата_наблюдения?.дата_наблюдения,
        stoma: {
          stomaKind: _e?.вид_стомы?.вид_стомы?.вид_стомы,
          stomaSize: _e?.вид_стомы?.вид_стомы?.размер,
          stomaName: _e?.вид_стомы?.вид_стомы?.название_стомы
        },
        bandage: _e?.смена_повязки ? {
          check: !0,
          time: Br(_e?.смена_повязки?.подробности_о_процедуре, zr => zr?.дата_смены_повязки?.время_смены_повязки)?.дата_смены_повязки?.время_смены_повязки,
          details: (() => {
            const zr = _e.смена_повязки?.подробности_о_процедуре;
            return null == zr ? null : Array.isArray(zr) ? zr : [zr];
          })()
        } : null,
        replacement: _e?.частичная_замена_системы ? {
          check: !0,
          time: vr_replacement()?.дата_частичной_замены_системы?.время_частичной_замены?.slice(0, 5) ?? null,
          device: vr_replacement()?.устройство?.устройство ?? null,
          details: (() => {
            const zr = _e.частичная_замена_системы?.подробности_о_процедуре;
            return null == zr ? null : Array.isArray(zr) ? zr : [zr];
          })()
        } : null,
        treatment: _e?.обработка_кожных_покровов_вокруг_стомы ? {
          check: !0,
          time: Br(_e?.обработка_кожных_покровов_вокруг_стомы?.any_event?.кожа, zr => zr?.дата_обработки?.время_обработки)?.дата_обработки?.время_обработки?.slice(0, 5) ?? null,
          details: (() => {
            const zr = _e.обработка_кожных_покровов_вокруг_стомы?.any_event?.кожа;
            return null == zr ? null : Array.isArray(zr) ? zr : [zr];
          })()
        } : null,
        inflammation: _e?.воспаление_слизистой_в_месте_стояния_стомы ? {
          check: !0,
          time: vr_inflammation()?.дата_воспаления?.время_воспаления?.slice(0, 5) ?? null,
          desc: vr_inflammation()?.описание_воспаления ?? null,
          details: (() => {
            const zr = _e.воспаление_слизистой_в_месте_стояния_стомы?.any_event?.слизистая;
            return null == zr ? null : Array.isArray(zr) ? zr : [zr];
          })()
        } : null,
        excretion: _e?.наличие_отделяемого ? {
          check: !0,
          time: vr_excretion()?.дата_отделяемого?.время_отделяемого?.slice(0, 5) ?? null,
          desc: vr_excretion()?.отделяемое_из_уретры?.характер_отделяемого ?? null,
          details: (() => {
            const zr = _e.наличие_отделяемого?.контейнер;
            return null == zr ? null : Array.isArray(zr) ? zr : [zr];
          })()
        } : null,
        disorder: _e?.функциональность_стомы_нарушена ? {
          check: !0,
          time: Br(_e?.функциональность_стомы_нарушена, zr => zr?.дата?.время_нарушения_функциональности_стомы)?.дата?.время_нарушения_функциональности_стомы?.slice(0, 5) ?? null,
          details: (() => {
            const zr = _e?.функциональность_стомы_нарушена;
            return null == zr ? null : Array.isArray(zr) ? zr : [zr];
          })()
        } : null,
        complaint: _e?.жалобы_пациента ? {
          check: !0,
          time: vr_complaint()?.дата_жалобы?.время_жалобы?.slice(0, 5) ?? null,
          desc: vr_complaint()?.описание_жалобы ?? null,
          details: (() => {
            const zr = _e.жалобы_пациента?.жалобы;
            return null == zr ? null : Array.isArray(zr) ? zr : [zr];
          })()
        } : null,
        addInfo: _e?.контейнер ? {
          check: !0,
          time: vr_addInfo()?.дата_и_время?.время_дополнительной_информации?.slice(0, 5) ?? null,
          desc: vr_addInfo()?.описание_дополнительной_информации?.описание_дополнительной_информации ?? null,
          details: (() => {
            const zr = _e?.контейнер;
            return null == zr ? null : Array.isArray(zr) ? zr : [zr];
          })()
        } : null,
        deleteStoma: _e?.удаление_стомы ? {
          check: !0,
          time: _e.удаление_стомы?.дата_удаления?.время_удаления?.slice(0, 5) ?? null,
          reason: _e.удаление_стомы?.причина_удаления?.причина_удаления ?? null,
          complication: _e.удаление_стомы?.причина_удаления?.осложнение ?? null
        } : null,
        finishStoma: _e?.завершение_ухода_за_пациентом ? {
          check: !0,
          time: _e.завершение_ухода_за_пациентом?.any_event?.дата_завершения_ухода?.время_завершения_ухода?.slice(0, 5) ?? null,
          comment: _e.завершение_ухода_за_пациентом?.any_event?.комментарий ?? null
        } : null,
        selectedDoctor: {
          name: _e?.сведения_о_враче_и_медицинской_сестре?.фио_врача?.фио_врача?.фио_врача?.value,
          id: _e?.сведения_о_враче_и_медицинской_сестре?.фио_врача?.фио_врача?.фио_врача?.code
        }
      };
    }
    openDeleteStomaCareMarks(It, At) {
      var _n = this;
      const it = It?.time ? `\u0432 ${It.time.slice(0, 5)}` : "";
      this.confirmationModalService.openDialog({
        message: `\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \xab${It?.title}\xbb ${It?.date || ""} ${it}?`,
        cancelButtonTitle: "Отменить",
        buttonTitle: "Удалить",
        title: "Удаление отметки"
      }).subscribe((0, M.Z)(function* () {
        try {
          _n.onIsLoad(!0), yield _n.deleteEvent(It, At), _n.eventsChanged.emit();
        } catch (gt) {
          _n.onIsLoad(!1), console.error(gt);
        }
      }));
    }
    getOriginalIndex(It) {
      return this.eventsList.indexOf(It);
    }
    get groupedEventsList() {
      const It = new Map();
      for (const At of this.eventsList) {
        const _n = At.type;
        It.has(_n) || It.set(_n, {
          key: _n,
          title: At.title,
          items: []
        }), It.get(_n).items.push(At);
      }
      return Array.from(It.values());
    }
    buildUnSignPayload() {
      const It = this.card?.composition?.карта_наблюдения_за_пациентом_со_стомой?.карта_наблюдения_за_пациентом_со_стомой;
      if (!It) return null;
      const At = structuredClone(It);
      return delete At.завершение_ухода_за_пациентом, this.buildPayloadFromCard(At);
    }
    buildPayloadFromCard(It) {
      const At = (_e, gt) => {
          if (!_e) return null;
          const ni = Array.isArray(_e) ? _e : [_e];
          return ni.reduce((So, Er) => {
            const Br = gt(So),
              vr = gt(Er);
            return Br ? vr && vr > Br ? Er : So : Er;
          }, ni[0]);
        },
        _n = _e => null == _e ? null : Array.isArray(_e) ? _e : [_e],
        it_replacement = () => At(It?.частичная_замена_системы?.подробности_о_процедуре, _e => _e?.дата_частичной_замены_системы?.время_частичной_замены),
        it_inflammation = () => At(It?.воспаление_слизистой_в_месте_стояния_стомы?.any_event?.слизистая, _e => _e?.дата_воспаления?.время_воспаления),
        it_excretion = () => At(It?.наличие_отделяемого?.контейнер, _e => _e?.дата_отделяемого?.время_отделяемого),
        it_complaint = () => At(It?.жалобы_пациента?.жалобы, _e => _e?.дата_жалобы?.время_жалобы),
        it_addInfo = () => At(It?.контейнер, _e => _e?.дата_и_время?.время_дополнительной_информации);
      return {
        bandage: It?.смена_повязки ? {
          check: !0,
          time: At(It?.смена_повязки?.подробности_о_процедуре, _e => _e?.дата_смены_повязки?.время_смены_повязки)?.дата_смены_повязки?.время_смены_повязки,
          details: _n(It.смена_повязки?.подробности_о_процедуре)
        } : null,
        replacement: It?.частичная_замена_системы ? {
          check: !0,
          time: it_replacement()?.дата_частичной_замены_системы?.время_частичной_замены?.slice(0, 5) ?? null,
          device: it_replacement()?.устройство?.устройство ?? null,
          details: _n(It.частичная_замена_системы?.подробности_о_процедуре)
        } : null,
        treatment: It?.обработка_кожных_покровов_вокруг_стомы ? {
          check: !0,
          time: At(It?.обработка_кожных_покровов_вокруг_стомы?.any_event?.кожа, _e => _e?.дата_обработки?.время_обработки)?.дата_обработки?.время_обработки?.slice(0, 5) ?? null,
          details: _n(It.обработка_кожных_покровов_вокруг_стомы?.any_event?.кожа)
        } : null,
        inflammation: It?.воспаление_слизистой_в_месте_стояния_стомы ? {
          check: !0,
          time: it_inflammation()?.дата_воспаления?.время_воспаления?.slice(0, 5) ?? null,
          desc: it_inflammation()?.описание_воспаления ?? null,
          details: _n(It.воспаление_слизистой_в_месте_стояния_стомы?.any_event?.слизистая)
        } : null,
        excretion: It?.наличие_отделяемого ? {
          check: !0,
          time: it_excretion()?.дата_отделяемого?.время_отделяемого?.slice(0, 5) ?? null,
          desc: it_excretion()?.отделяемое_из_уретры?.характер_отделяемого ?? null,
          details: _n(It.наличие_отделяемого?.контейнер)
        } : null,
        disorder: It?.функциональность_стомы_нарушена ? {
          check: !0,
          time: At(It?.функциональность_стомы_нарушена, _e => _e?.дата?.время_нарушения_функциональности_стомы)?.дата?.время_нарушения_функциональности_стомы?.slice(0, 5) ?? null,
          details: _n(It.функциональность_стомы_нарушена)
        } : null,
        complaint: It?.жалобы_пациента ? {
          check: !0,
          time: it_complaint()?.дата_жалобы?.время_жалобы?.slice(0, 5) ?? null,
          desc: it_complaint()?.описание_жалобы ?? null,
          details: _n(It.жалобы_пациента?.жалобы)
        } : null,
        addInfo: It?.контейнер ? {
          check: !0,
          time: it_addInfo()?.дата_и_время?.время_дополнительной_информации?.slice(0, 5) ?? null,
          desc: it_addInfo()?.описание_дополнительной_информации?.описание_дополнительной_информации ?? null,
          details: _n(It.контейнер)
        } : null,
        deleteStoma: It?.удаление_стомы ? {
          check: !0,
          time: It.удаление_стомы?.дата_удаления?.время_удаления?.slice(0, 5) ?? null,
          reason: It.удаление_стомы?.причина_удаления?.причина_удаления ?? null,
          complication: It.удаление_стомы?.причина_удаления?.осложнение ?? null
        } : null,
        finishStoma: It?.завершение_ухода_за_пациентом ? {
          check: !0,
          time: It.завершение_ухода_за_пациентом?.any_event?.дата_завершения_ухода?.время_завершения_ухода?.slice(0, 5) ?? null,
          comment: It.завершение_ухода_за_пациентом?.any_event?.комментарий ?? null
        } : null,
        selectedDoctor: {
          name: It?.сведения_о_враче_и_медицинской_сестре?.фио_врача?.фио_врача?.фио_врача?.value,
          id: It?.сведения_о_враче_и_медицинской_сестре?.фио_врача?.фио_врача?.фио_врача?.code
        }
      };
    }
    onIsLoad(It) {
      this.isEventLoad.emit(It);
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
  };
  let Xn = xo;
  function Yi(Mi, It) {
    1 & Mi && (q.TgZ(0, "div", 17), q._UZ(1, "span", 18), q.qZA());
  }
  xo.ɵfac = function (At) {
    return new (At || xo)(q.Y36(q.sBO), q.Y36(Jo.P), q.Y36(fr.k), q.Y36(Ke.Jv), q.Y36(Mt.yh), q.Y36(co), q.Y36(vt.Yg), q.Y36(an.L));
  }, xo.ɵcmp = q.Xpm({
    type: xo,
    selectors: [["app-stoma-events"]],
    inputs: {
      compositionId: "compositionId",
      stomaName: "stomaName",
      protocolId: "protocolId",
      parentSigned: "parentSigned"
    },
    outputs: {
      updateStomaItem: "updateStomaItem",
      isEventLoad: "isEventLoad",
      eventsChanged: "eventsChanged"
    },
    features: [q.TTD],
    decls: 5,
    vars: 3,
    consts: [[1, "stoma-events"], [1, "stoma-events__header", 3, "click"], ["class", "stoma-events__body", 4, "ngIf"], [1, "stoma-events__body"], ["class", "event", 4, "ngFor", "ngForOf"], [1, "event"], [1, "event__header", 3, "click"], ["class", "event__body", 4, "ngIf"], [1, "event__body"], [1, "event__items-row"], ["class", "event__item", 3, "has-desc", 4, "ngFor", "ngForOf"], [1, "event__item"], [1, "event__item__wrapper"], [1, "event__item-header"], [1, "event__item-title"], ["class", "event__item-desc", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "event__item-desc"], [3, "click"]],
    template: function (At, _n) {
      1 & At && (q.TgZ(0, "div", 0)(1, "div", 1), q.NdJ("click", function () {
        return _n.eventsToggle();
      }), q._uU(2, " События за текущие сутки "), q._UZ(3, "app-chevron-down-icon"), q.qZA(), q.YNc(4, qn, 2, 1, "div", 2), q.qZA()), 2 & At && (q.xp6(1), q.ekj("open", _n.events), q.xp6(3), q.Q6J("ngIf", _n.events));
    },
    dependencies: [b.sg, b.O5, ut, Ct],
    styles: [".stoma-events[_ngcontent-%COMP%]{padding:12px;border:1px dashed #ccc;border-radius:4px;background-color:#fff}.stoma-events__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;line-height:24px;font-weight:600;color:#000;cursor:pointer}.stoma-events__header[_ngcontent-%COMP%]   app-chevron-down-icon[_ngcontent-%COMP%]{color:#67bde3}.stoma-events__header.open[_ngcontent-%COMP%]   app-chevron-down-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.stoma-events__body[_ngcontent-%COMP%]{margin-top:8px;font-size:15px;color:#333;display:flex;flex-direction:column;gap:8px}.event[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.event__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;cursor:pointer}.event__header[_ngcontent-%COMP%]   app-chevron-down-icon[_ngcontent-%COMP%]{color:#67bde3}.event__header[_ngcontent-%COMP%]   app-chevron-down-icon[_ngcontent-%COMP%]:hover{color:#2c8dc4!important}.event__header.open[_ngcontent-%COMP%]   app-chevron-down-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.event__item[_ngcontent-%COMP%]{display:flex;align-items:start;flex-direction:row;justify-content:space-between;gap:4px;width:-moz-fit-content;width:fit-content;font-size:13px;color:#333;border-radius:4px;background-color:#38a1d61a}.event__item[_ngcontent-%COMP%]   app-delete-event-icon[_ngcontent-%COMP%]{height:100%}.event__item[_ngcontent-%COMP%]:hover{background-color:#38a1d61a}.event__item[_ngcontent-%COMP%]:hover   app-delete-event-icon[_ngcontent-%COMP%]{color:#f05c46!important}.event__item[_ngcontent-%COMP%]:active{background-color:#38a1d633}.event__item[_ngcontent-%COMP%]:active   app-delete-event-icon[_ngcontent-%COMP%]{background-color:#fde4df!important;color:#f05c46!important;border-radius:0 4px 4px 0}.event__item__wrapper[_ngcontent-%COMP%]{padding:2px 0 2px 8px}.event__item-header[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;gap:4px;line-height:20px}.event__item-title[_ngcontent-%COMP%]{flex:1}.event__item-desc[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:break-word;line-height:20px}.event__items-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.event[_ngcontent-%COMP%]   app-delete-event-icon[_ngcontent-%COMP%]{color:#b3b3b3;cursor:pointer}  .lu-message-container-wrapper{padding-right:16px!important}  .lu-message-container-wrapper lu-message:before{opacity:1!important}"],
    changeDetection: 0
  });
  const Eo = function () {
    return ["bottom-right"];
  };
  function Fo(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 19)(1, "div", 20), q._uU(2), q.qZA(), q.TgZ(3, "p")(4, "span"), q._uU(5), q.ALo(6, "date"), q.qZA(), q._UZ(7, "span", 21), q.TgZ(8, "span"), q._uU(9), q.qZA(), q._UZ(10, "span", 21), q.TgZ(11, "span", 22), q._uU(12), q.qZA()()()), 2 & Mi) {
      const At = q.oxw();
      q.xp6(2), q.lnq(" ", At.patientInfo.lastName, " ", At.patientInfo.firstName, " ", At.patientInfo.secondName, " "), q.xp6(3), q.lnq(" ", At.patientInfo.gender, ", ", At.patientInfo.age, " лет, ", q.xi3(6, 10, At.patientInfo.birthDate, "dd.MM.yyyy"), " "), q.xp6(4), q.hij("МК ", At.patientInfo.medCard, ""), q.xp6(2), q.Q6J("luTooltip", At.patientInfo.dept)("positions", q.DdM(13, Eo)), q.xp6(1), q.Oqu(At.patientInfo.dept);
    }
  }
  function br(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._UZ(1, "lu-svg-icon", 24), q._uU(2, " Обязательное поле "), q.qZA()), 2 & Mi && (q.xp6(1), q.Q6J("size", 24));
  }
  function Pr(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._UZ(1, "lu-svg-icon", 24), q._uU(2), q.ALo(3, "luDateFormatter"), q.qZA()), 2 & Mi) {
      const At = q.oxw();
      q.xp6(1), q.Q6J("size", 24), q.xp6(1), q.hij(" Дата должна быть равна или меньше ", q.xi3(3, 2, At.maxDate, "dd.MM.yyyy"), " ");
    }
  }
  function qo(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._UZ(1, "lu-svg-icon", 24), q._uU(2), q.ALo(3, "luDateFormatter"), q.qZA()), 2 & Mi) {
      const At = q.oxw();
      q.xp6(1), q.Q6J("size", 24), q.xp6(1), q.hij(" Дата должна быть равна или больше ", q.xi3(3, 2, At.minDate, "dd.MM.yyyy"), " ");
    }
  }
  function Yo(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "button", 44), q.NdJ("click", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.openDeleteStomaModal(it));
      }), q._uU(1, " Удалить "), q.qZA();
    }
    2 & Mi && q.Q6J("size", "medium")("color", "red");
  }
  function wr(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "button", 44), q.NdJ("click", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.onUnSign(it));
      }), q._uU(1, " Снять подпись "), q.qZA();
    }
    2 & Mi && q.Q6J("size", "medium")("color", "blue");
  }
  function oo(Mi, It) {
    if (1 & Mi && (q.ynx(0), q._UZ(1, "span", 21), q.TgZ(2, "span"), q._uU(3), q.qZA(), q.BQk()), 2 & Mi) {
      const At = q.oxw().$implicit;
      q.xp6(3), q.hij("Название стомы: ", At.stomaName, "");
    }
  }
  function Di(Mi, It) {
    if (1 & Mi && (q.ynx(0), q._UZ(1, "span", 21), q.TgZ(2, "span"), q._uU(3), q.ALo(4, "date"), q.ALo(5, "date"), q.qZA(), q.BQk()), 2 & Mi) {
      const At = q.oxw().$implicit;
      q.xp6(3), q.AsE(" Уход завершен: ", q.xi3(4, 2, At.finishDate, "dd.MM.yyyy"), ", ", q.xi3(5, 5, At.finishDate, "HH:mm"), " ");
    }
  }
  function Ci(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 45)(1, "div", 46)(2, "lu-replacement-message"), q._UZ(3, "lu-svg-icon", 47), q._uU(4), q.qZA()()()), 2 & Mi) {
      const At = q.oxw().$implicit;
      q.xp6(3), q.Q6J("size", 24), q.xp6(1), q.AsE(" Отсутствует информация по уходу за ", At.stomaKind, " за ", At.missingDaysLabel, ". ");
    }
  }
  function lo(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div"), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw(3);
      q.xp6(1), q.Oqu(At.hintText);
    }
  }
  function jo(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "app-info-icon", 48), q.YNc(1, lo, 2, 1, "ng-template", null, 49, q.W1O), q.qZA()), 2 & Mi) {
      const At = q.MAs(2);
      q.Q6J("luTooltip", At)("withArrow", !1)("borderOffset", -4)("positions", "top-left");
    }
  }
  function Go(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 50), q._UZ(1, "app-info-icon"), q.TgZ(2, "span", 51), q._uU(3), q.qZA()()), 2 & Mi) {
      const At = q.oxw(2);
      q.xp6(3), q.Oqu(At.hintText);
    }
  }
  function ji(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._uU(1, "Обязательное поле "), q.qZA());
  }
  function ti(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 52)(1, "label", 53)(2, "lu-input-wrapper")(3, "input", 54), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.bandage.time = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()(), q.YNc(4, ji, 2, 0, "lu-form-message", 11), q.qZA()();
    }
    if (2 & Mi) {
      const At = q.oxw().$implicit,
        _n = q.oxw();
      q.xp6(3), q.Q6J("ngModel", At.watchForm.bandage.time), q.xp6(1), q.Q6J("ngIf", _n.fieldHasError(At, "bandage", "time"));
    }
  }
  function fi(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div"), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw(3);
      q.xp6(1), q.Oqu(At.hintText);
    }
  }
  function Fi(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "app-info-icon", 48), q.YNc(1, fi, 2, 1, "ng-template", null, 49, q.W1O), q.qZA()), 2 & Mi) {
      const At = q.MAs(2);
      q.Q6J("luTooltip", At)("withArrow", !1)("borderOffset", -4)("positions", "top-left");
    }
  }
  function Rn(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 50), q._UZ(1, "app-info-icon"), q.TgZ(2, "span", 51), q._uU(3), q.qZA()()), 2 & Mi) {
      const At = q.oxw(2);
      q.xp6(3), q.Oqu(At.hintText);
    }
  }
  function ki(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._uU(1, "Обязательное поле "), q.qZA());
  }
  function Ei(Mi, It) {
    if (1 & Mi && (q._UZ(0, "span", 60), q.ALo(1, "luHighlight")), 2 & Mi) {
      const At = It.$implicit;
      q.oxw(2);
      const _n = q.MAs(7);
      q.Q6J("innerHTML", q.xi3(1, 1, At, _n.searchText), q.oJD);
    }
  }
  function Wt(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "lu-data-list", 58), q.ALo(1, "luFilterByText"), q.YNc(2, Ei, 2, 4, "ng-template", null, 59, q.W1O), q.qZA()), 2 & Mi) {
      const At = q.MAs(3);
      q.oxw();
      const _n = q.MAs(7),
        it = q.oxw().$implicit;
      q.Q6J("items", q.xi3(1, 2, it.repDeviceData.options, _n.searchText))("itemContent", At);
    }
  }
  function Oi(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._uU(1, "Обязательное поле "), q.qZA());
  }
  function Ji(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 52)(1, "label", 53)(2, "lu-input-wrapper")(3, "input", 54), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.replacement.time = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()(), q.YNc(4, ki, 2, 0, "lu-form-message", 11), q.qZA(), q.TgZ(5, "label", 9)(6, "lu-combobox", 55, 56), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.replacement.device = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.YNc(8, Wt, 4, 5, "lu-data-list", 57), q.qZA(), q.YNc(9, Oi, 2, 0, "lu-form-message", 11), q.qZA()();
    }
    if (2 & Mi) {
      const At = q.oxw().$implicit,
        _n = q.oxw();
      q.xp6(3), q.Q6J("ngModel", At.watchForm.replacement.time), q.xp6(1), q.Q6J("ngIf", _n.fieldHasError(At, "replacement", "time")), q.xp6(2), q.Q6J("clearButton", !1)("ngModel", At.watchForm.replacement.device), q.xp6(3), q.Q6J("ngIf", _n.fieldHasError(At, "replacement", "device"));
    }
  }
  function Ao(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div"), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw(3);
      q.xp6(1), q.Oqu(At.hintText);
    }
  }
  function Sr(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "app-info-icon", 48), q.YNc(1, Ao, 2, 1, "ng-template", null, 49, q.W1O), q.qZA()), 2 & Mi) {
      const At = q.MAs(2);
      q.Q6J("luTooltip", At)("withArrow", !1)("borderOffset", -4)("positions", "top-left");
    }
  }
  function us(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 50), q._UZ(1, "app-info-icon"), q.TgZ(2, "span", 51), q._uU(3), q.qZA()()), 2 & Mi) {
      const At = q.oxw(2);
      q.xp6(3), q.Oqu(At.hintText);
    }
  }
  function Ps(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._uU(1, "Обязательное поле "), q.qZA());
  }
  function hs(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 52)(1, "label", 53)(2, "lu-input-wrapper")(3, "input", 54), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.treatment.time = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()(), q.YNc(4, Ps, 2, 0, "lu-form-message", 11), q.qZA()();
    }
    if (2 & Mi) {
      const At = q.oxw().$implicit,
        _n = q.oxw();
      q.xp6(3), q.Q6J("ngModel", At.watchForm.treatment.time), q.xp6(1), q.Q6J("ngIf", _n.fieldHasError(At, "treatment", "time"));
    }
  }
  function oi(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div"), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw(3);
      q.xp6(1), q.Oqu(At.hintText);
    }
  }
  function yo(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "app-info-icon", 48), q.YNc(1, oi, 2, 1, "ng-template", null, 49, q.W1O), q.qZA()), 2 & Mi) {
      const At = q.MAs(2);
      q.Q6J("luTooltip", At)("withArrow", !1)("borderOffset", -4)("positions", "top-left");
    }
  }
  function Qi(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 50), q._UZ(1, "app-info-icon"), q.TgZ(2, "span", 51), q._uU(3), q.qZA()()), 2 & Mi) {
      const At = q.oxw(2);
      q.xp6(3), q.Oqu(At.hintText);
    }
  }
  function Qo(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._uU(1, "Обязательное поле "), q.qZA());
  }
  function Kr(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 52)(1, "label", 53)(2, "lu-input-wrapper")(3, "input", 54), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.inflammation.time = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()(), q.YNc(4, Qo, 2, 0, "lu-form-message", 11), q.qZA(), q.TgZ(5, "label", 61)(6, "lu-textarea", 62), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.inflammation.desc = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()()();
    }
    if (2 & Mi) {
      const At = q.oxw().$implicit,
        _n = q.oxw();
      q.xp6(3), q.Q6J("ngModel", At.watchForm.inflammation.time), q.xp6(1), q.Q6J("ngIf", _n.fieldHasError(At, "inflammation", "time")), q.xp6(2), q.Q6J("minRows", 3)("ngModel", At.watchForm.inflammation.desc);
    }
  }
  function _s(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div"), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw(3);
      q.xp6(1), q.Oqu(At.hintText);
    }
  }
  function ra(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "app-info-icon", 48), q.YNc(1, _s, 2, 1, "ng-template", null, 49, q.W1O), q.qZA()), 2 & Mi) {
      const At = q.MAs(2);
      q.Q6J("luTooltip", At)("withArrow", !1)("borderOffset", -4)("positions", "top-left");
    }
  }
  function Or(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 50), q._UZ(1, "app-info-icon"), q.TgZ(2, "span", 51), q._uU(3), q.qZA()()), 2 & Mi) {
      const At = q.oxw(2);
      q.xp6(3), q.Oqu(At.hintText);
    }
  }
  function Fs(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._uU(1, "Обязательное поле "), q.qZA());
  }
  function xa(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 52)(1, "label", 53)(2, "lu-input-wrapper")(3, "input", 54), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.excretion.time = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()(), q.YNc(4, Fs, 2, 0, "lu-form-message", 11), q.qZA(), q.TgZ(5, "label", 63)(6, "lu-input-wrapper")(7, "input", 64), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.excretion.desc = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()()()();
    }
    if (2 & Mi) {
      const At = q.oxw().$implicit,
        _n = q.oxw();
      q.xp6(3), q.Q6J("ngModel", At.watchForm.excretion.time), q.xp6(1), q.Q6J("ngIf", _n.fieldHasError(At, "excretion", "time")), q.xp6(3), q.Q6J("ngModel", At.watchForm.excretion.desc);
    }
  }
  function rs(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div"), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw(3);
      q.xp6(1), q.Oqu(At.hintText);
    }
  }
  function Js(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "app-info-icon", 48), q.YNc(1, rs, 2, 1, "ng-template", null, 49, q.W1O), q.qZA()), 2 & Mi) {
      const At = q.MAs(2);
      q.Q6J("luTooltip", At)("withArrow", !1)("borderOffset", -4)("positions", "top-left");
    }
  }
  function ho(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 50), q._UZ(1, "app-info-icon"), q.TgZ(2, "span", 51), q._uU(3), q.qZA()()), 2 & Mi) {
      const At = q.oxw(2);
      q.xp6(3), q.Oqu(At.hintText);
    }
  }
  function uo(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._uU(1, "Обязательное поле "), q.qZA());
  }
  function ri(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 52)(1, "label", 53)(2, "lu-input-wrapper")(3, "input", 54), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.disorder.time = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()(), q.YNc(4, uo, 2, 0, "lu-form-message", 11), q.qZA()();
    }
    if (2 & Mi) {
      const At = q.oxw().$implicit,
        _n = q.oxw();
      q.xp6(3), q.Q6J("ngModel", At.watchForm.disorder.time), q.xp6(1), q.Q6J("ngIf", _n.fieldHasError(At, "disorder", "time"));
    }
  }
  function Yt(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div"), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw(3);
      q.xp6(1), q.Oqu(At.hintText);
    }
  }
  function jt(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "app-info-icon", 48), q.YNc(1, Yt, 2, 1, "ng-template", null, 49, q.W1O), q.qZA()), 2 & Mi) {
      const At = q.MAs(2);
      q.Q6J("luTooltip", At)("withArrow", !1)("borderOffset", -4)("positions", "top-left");
    }
  }
  function hn(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 50), q._UZ(1, "app-info-icon"), q.TgZ(2, "span", 51), q._uU(3), q.qZA()()), 2 & Mi) {
      const At = q.oxw(2);
      q.xp6(3), q.Oqu(At.hintText);
    }
  }
  function tn(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._uU(1, "Обязательное поле "), q.qZA());
  }
  function di(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 52)(1, "label", 53)(2, "lu-input-wrapper")(3, "input", 54), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.complaint.time = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()(), q.YNc(4, tn, 2, 0, "lu-form-message", 11), q.qZA(), q.TgZ(5, "label", 65)(6, "lu-textarea", 62), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.complaint.desc = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()()();
    }
    if (2 & Mi) {
      const At = q.oxw().$implicit,
        _n = q.oxw();
      q.xp6(3), q.Q6J("ngModel", At.watchForm.complaint.time), q.xp6(1), q.Q6J("ngIf", _n.fieldHasError(At, "complaint", "time")), q.xp6(2), q.Q6J("minRows", 3)("ngModel", At.watchForm.complaint.desc);
    }
  }
  function Gn(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div"), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw(3);
      q.xp6(1), q.Oqu(At.hintText);
    }
  }
  function dn(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "app-info-icon", 48), q.YNc(1, Gn, 2, 1, "ng-template", null, 49, q.W1O), q.qZA()), 2 & Mi) {
      const At = q.MAs(2);
      q.Q6J("luTooltip", At)("withArrow", !1)("borderOffset", -4)("positions", "top-left");
    }
  }
  function wo(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 50), q._UZ(1, "app-info-icon"), q.TgZ(2, "span", 51), q._uU(3), q.qZA()()), 2 & Mi) {
      const At = q.oxw(2);
      q.xp6(3), q.Oqu(At.hintText);
    }
  }
  function Ro(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._uU(1, "Обязательное поле "), q.qZA());
  }
  function _r(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 52)(1, "label", 53)(2, "lu-input-wrapper")(3, "input", 54), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.addInfo.time = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()(), q.YNc(4, Ro, 2, 0, "lu-form-message", 11), q.qZA(), q.TgZ(5, "label", 66)(6, "lu-textarea", 62), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.addInfo.desc = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()()();
    }
    if (2 & Mi) {
      const At = q.oxw().$implicit,
        _n = q.oxw();
      q.xp6(3), q.Q6J("ngModel", At.watchForm.addInfo.time), q.xp6(1), q.Q6J("ngIf", _n.fieldHasError(At, "addInfo", "time")), q.xp6(2), q.Q6J("minRows", 3)("ngModel", At.watchForm.addInfo.desc);
    }
  }
  function qr(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div"), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw(3);
      q.xp6(1), q.Oqu(At.hintText);
    }
  }
  function Ts(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "app-info-icon", 48), q.YNc(1, qr, 2, 1, "ng-template", null, 49, q.W1O), q.qZA()), 2 & Mi) {
      const At = q.MAs(2);
      q.Q6J("luTooltip", At)("withArrow", !1)("borderOffset", -4)("positions", "top-left");
    }
  }
  function js(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 50), q._UZ(1, "app-info-icon"), q.TgZ(2, "span", 51), q._uU(3), q.qZA()()), 2 & Mi) {
      const At = q.oxw(2);
      q.xp6(3), q.Oqu(At.hintText);
    }
  }
  function ws(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._uU(1, "Обязательное поле "), q.qZA());
  }
  function Us(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._uU(1, "Обязательное поле "), q.qZA());
  }
  function Ws(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._uU(1, "Обязательное поле "), q.qZA());
  }
  function sa(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 52)(1, "label", 53)(2, "lu-input-wrapper")(3, "input", 54), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.deleteStoma.time = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()(), q.YNc(4, ws, 2, 0, "lu-form-message", 11), q.qZA(), q.TgZ(5, "label", 67)(6, "lu-input-wrapper")(7, "input", 64), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.deleteStoma.reason = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()(), q.YNc(8, Us, 2, 0, "lu-form-message", 11), q.qZA(), q.TgZ(9, "label", 68)(10, "lu-input-wrapper")(11, "input", 64), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.deleteStoma.complication = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()(), q.YNc(12, Ws, 2, 0, "lu-form-message", 11), q.qZA()();
    }
    if (2 & Mi) {
      const At = q.oxw().$implicit,
        _n = q.oxw();
      q.xp6(3), q.Q6J("ngModel", At.watchForm.deleteStoma.time), q.xp6(1), q.Q6J("ngIf", _n.fieldHasError(At, "deleteStoma", "time")), q.xp6(3), q.Q6J("ngModel", At.watchForm.deleteStoma.reason), q.xp6(1), q.Q6J("ngIf", _n.fieldHasError(At, "deleteStoma", "reason")), q.xp6(3), q.Q6J("ngModel", At.watchForm.deleteStoma.complication), q.xp6(1), q.Q6J("ngIf", _n.fieldHasError(At, "deleteStoma", "complication"));
    }
  }
  function ha(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div"), q._uU(1), q.qZA()), 2 & Mi) {
      const At = q.oxw(4);
      q.xp6(1), q.Oqu(At.hintText);
    }
  }
  function ua(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "app-info-icon", 70), q.YNc(1, ha, 2, 1, "ng-template", null, 49, q.W1O), q.qZA()), 2 & Mi) {
      const At = q.MAs(2);
      q.Q6J("luTooltip", At)("withArrow", !1)("borderOffset", -4);
    }
  }
  function da(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "div", 50), q._UZ(1, "app-info-icon"), q.TgZ(2, "span", 51), q._uU(3), q.qZA()()), 2 & Mi) {
      const At = q.oxw(3);
      q.xp6(3), q.Oqu(At.hintText);
    }
  }
  function na(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._uU(1, "Обязательное поле "), q.qZA());
  }
  function Qs(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 52)(1, "label", 53)(2, "lu-input-wrapper")(3, "input", 54), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw(2).$implicit;
        return q.KtG(_e.watchForm.finishStoma.time = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw(2).$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()(), q.YNc(4, na, 2, 0, "lu-form-message", 11), q.qZA(), q.TgZ(5, "label", 71)(6, "lu-input-wrapper")(7, "input", 64), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw(2).$implicit;
        return q.KtG(_e.watchForm.finishStoma.comment = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw(2).$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.qZA()()()();
    }
    if (2 & Mi) {
      const At = q.oxw(2).$implicit,
        _n = q.oxw();
      q.xp6(3), q.Q6J("ngModel", At.watchForm.finishStoma.time), q.xp6(1), q.Q6J("ngIf", _n.fieldHasError(At, "finishStoma", "time")), q.xp6(3), q.Q6J("ngModel", At.watchForm.finishStoma.comment);
    }
  }
  function ma(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 36)(1, "div", 37)(2, "lu-checkbox", 38), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.finishStoma.check = it);
      })("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit,
          gt = q.oxw();
        return q.KtG(gt.onCheck(it, "finishStoma", _e));
      }), q._uU(3, " Завершить уход за пациентом "), q.qZA(), q.YNc(4, ua, 3, 3, "app-info-icon", 69), q.YNc(5, da, 4, 1, "div", 40), q.qZA(), q.YNc(6, Qs, 8, 3, "div", 41), q.qZA();
    }
    if (2 & Mi) {
      const At = q.oxw().$implicit,
        _n = q.oxw();
      q.xp6(2), q.Q6J("color", "blue")("ngModel", At.watchForm.finishStoma.check)("disabled", !!At.signed), q.xp6(2), q.Q6J("ngIf", _n.hasEvent(At, "finishStoma") && !_n.isTablet), q.xp6(1), q.Q6J("ngIf", _n.hasEvent(At, "finishStoma") && _n.isTablet), q.xp6(1), q.Q6J("ngIf", At.watchForm.finishStoma.check && !At.signed);
    }
  }
  const Xs = function (Mi, It, At) {
    return [Mi, It, At];
  };
  function Ks(Mi, It) {
    if (1 & Mi && (q._UZ(0, "span", 60), q.ALo(1, "luHighlight")), 2 & Mi) {
      const At = It.$implicit;
      q.oxw(2);
      const _n = q.MAs(7);
      q.Q6J("innerHTML", q.xi3(1, 1, q.kEZ(4, Xs, At.fio || (null == At.selectDoctor ? null : At.selectDoctor.name), null == At.jobTitle ? null : At.jobTitle.name, null == At.department ? null : At.department.name).join(", "), _n.searchText), q.oJD);
    }
  }
  function Va(Mi, It) {
    if (1 & Mi && (q.TgZ(0, "lu-data-list", 58), q.ALo(1, "luFilterByText"), q.YNc(2, Ks, 2, 8, "ng-template", null, 74, q.W1O), q.qZA()), 2 & Mi) {
      const At = q.MAs(3);
      q.oxw();
      const _n = q.MAs(7),
        it = q.oxw(2);
      q.Q6J("items", q.xi3(1, 2, it.doctorList, _n.searchText))("itemContent", At);
    }
  }
  function ba(Mi, It) {
    1 & Mi && (q.TgZ(0, "lu-form-message", 23), q._UZ(1, "lu-svg-icon", 24), q._uU(2, " Обязательное поле "), q.qZA()), 2 & Mi && (q.xp6(1), q.Q6J("size", 24));
  }
  function qs(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div")(1, "span", 8), q._uU(2, "Согласовано с врачом "), q.TgZ(3, "span"), q._uU(4, "*"), q.qZA()(), q.TgZ(5, "label", 9)(6, "lu-combobox", 72, 73), q.NdJ("ngModelChange", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit;
        return q.KtG(_e.watchForm.selectedDoctor = it);
      })("ngModelChange", function () {
        q.CHM(At);
        const it = q.oxw().$implicit,
          _e = q.oxw();
        return q.KtG(_e.markDirty(it));
      }), q.YNc(8, Va, 4, 5, "lu-data-list", 57), q.qZA(), q.YNc(9, ba, 3, 1, "lu-form-message", 11), q.qZA()();
    }
    if (2 & Mi) {
      const At = q.oxw().$implicit,
        _n = q.oxw();
      q.xp6(6), q.Q6J("ngModel", At.watchForm.selectedDoctor)("displayValueFn", _n.displayDoctor)("disabled", !!At.signed), q.xp6(3), q.Q6J("ngIf", _n.doctorHasError(At));
    }
  }
  function Ri(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "app-stoma-events", 75), q.NdJ("updateStomaItem", function (it) {
        q.CHM(At);
        const _e = q.oxw().$implicit,
          gt = q.oxw();
        return q.KtG(gt.updateStomaItem(it, _e));
      })("isEventLoad", function (it) {
        q.CHM(At);
        const _e = q.oxw(2);
        return q.KtG(_e.onEventCheckLoad(it));
      })("eventsChanged", function () {
        q.CHM(At);
        const it = q.oxw(2);
        return q.KtG(it.onEventsChanged());
      }), q.qZA();
    }
    if (2 & Mi) {
      const At = q.oxw().$implicit;
      q.Q6J("compositionId", At.todayCompositionId)("protocolId", At.protocolId)("stomaName", At.stomaKind)("parentSigned", At.signed);
    }
  }
  function $o(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 25), q.YNc(1, Yo, 2, 2, "button", 26), q.YNc(2, wr, 2, 2, "button", 26), q.TgZ(3, "lu-expansion-panel", 27)(4, "lu-expansion-panel-header", 28)(5, "span", 29), q.NdJ("click", function (it) {
        return it.stopPropagation();
      }), q.TgZ(6, "span", 30), q._uU(7), q.qZA(), q.TgZ(8, "span", 31)(9, "span"), q._uU(10), q.qZA(), q._UZ(11, "span", 21), q.TgZ(12, "span"), q._uU(13), q.qZA(), q.YNc(14, oo, 4, 1, "ng-container", 32), q.qZA(), q.TgZ(15, "span", 33)(16, "span"), q._uU(17), q.ALo(18, "date"), q.ALo(19, "date"), q.qZA(), q.YNc(20, Di, 6, 8, "ng-container", 32), q.qZA()()(), q.YNc(21, Ci, 5, 3, "div", 34), q.TgZ(22, "div", 35)(23, "div")(24, "div", 36)(25, "div", 37)(26, "lu-checkbox", 38), q.NdJ("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit;
        return q.KtG(gt.watchForm.bandage.check = it);
      })("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit,
          ni = q.oxw();
        return q.KtG(ni.onCheck(it, "bandage", gt));
      }), q._uU(27, " Смена повязки "), q.qZA(), q.YNc(28, jo, 3, 4, "app-info-icon", 39), q.YNc(29, Go, 4, 1, "div", 40), q.qZA(), q.YNc(30, ti, 5, 2, "div", 41), q.qZA(), q.TgZ(31, "div", 36)(32, "div", 37)(33, "lu-checkbox", 38), q.NdJ("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit;
        return q.KtG(gt.watchForm.replacement.check = it);
      })("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit,
          ni = q.oxw();
        return q.KtG(ni.onCheck(it, "replacement", gt));
      }), q._uU(34, " Частичная замена системы "), q.qZA(), q.YNc(35, Fi, 3, 4, "app-info-icon", 39), q.YNc(36, Rn, 4, 1, "div", 40), q.qZA(), q.YNc(37, Ji, 10, 5, "div", 41), q.qZA(), q.TgZ(38, "div", 36)(39, "div", 37)(40, "lu-checkbox", 38), q.NdJ("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit;
        return q.KtG(gt.watchForm.treatment.check = it);
      })("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit,
          ni = q.oxw();
        return q.KtG(ni.onCheck(it, "treatment", gt));
      }), q._uU(41, " Обработка кожных покровов вокруг стомы "), q.qZA(), q.YNc(42, Sr, 3, 4, "app-info-icon", 39), q.YNc(43, us, 4, 1, "div", 40), q.qZA(), q.YNc(44, hs, 5, 2, "div", 41), q.qZA(), q.TgZ(45, "div", 36)(46, "div", 37)(47, "lu-checkbox", 38), q.NdJ("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit;
        return q.KtG(gt.watchForm.inflammation.check = it);
      })("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit,
          ni = q.oxw();
        return q.KtG(ni.onCheck(it, "inflammation", gt));
      }), q._uU(48, " Воспаление слизистой в месте стояния стомы "), q.qZA(), q.YNc(49, yo, 3, 4, "app-info-icon", 39), q.YNc(50, Qi, 4, 1, "div", 40), q.qZA(), q.YNc(51, Kr, 7, 4, "div", 41), q.qZA(), q.TgZ(52, "div", 36)(53, "div", 37)(54, "lu-checkbox", 38), q.NdJ("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit;
        return q.KtG(gt.watchForm.excretion.check = it);
      })("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit,
          ni = q.oxw();
        return q.KtG(ni.onCheck(it, "excretion", gt));
      }), q._uU(55, " Наличие отделяемого "), q.qZA(), q.YNc(56, ra, 3, 4, "app-info-icon", 39), q.YNc(57, Or, 4, 1, "div", 40), q.qZA(), q.YNc(58, xa, 8, 3, "div", 41), q.qZA(), q.TgZ(59, "div", 36)(60, "div", 37)(61, "lu-checkbox", 38), q.NdJ("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit;
        return q.KtG(gt.watchForm.disorder.check = it);
      })("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit,
          ni = q.oxw();
        return q.KtG(ni.onCheck(it, "disorder", gt));
      }), q._uU(62, " Функциональность стомы нарушена "), q.qZA(), q.YNc(63, Js, 3, 4, "app-info-icon", 39), q.YNc(64, ho, 4, 1, "div", 40), q.qZA(), q.YNc(65, ri, 5, 2, "div", 41), q.qZA(), q.TgZ(66, "div", 36)(67, "div", 37)(68, "lu-checkbox", 38), q.NdJ("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit;
        return q.KtG(gt.watchForm.complaint.check = it);
      })("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit,
          ni = q.oxw();
        return q.KtG(ni.onCheck(it, "complaint", gt));
      }), q._uU(69, " Жалобы пациента "), q.qZA(), q.YNc(70, jt, 3, 4, "app-info-icon", 39), q.YNc(71, hn, 4, 1, "div", 40), q.qZA(), q.YNc(72, di, 7, 4, "div", 41), q.qZA(), q.TgZ(73, "div", 36)(74, "div", 37)(75, "lu-checkbox", 38), q.NdJ("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit;
        return q.KtG(gt.watchForm.addInfo.check = it);
      })("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit,
          ni = q.oxw();
        return q.KtG(ni.onCheck(it, "addInfo", gt));
      }), q._uU(76, " Дополнительная информация "), q.qZA(), q.YNc(77, dn, 3, 4, "app-info-icon", 39), q.YNc(78, wo, 4, 1, "div", 40), q.qZA(), q.YNc(79, _r, 7, 4, "div", 41), q.qZA(), q.TgZ(80, "div", 36)(81, "div", 37)(82, "lu-checkbox", 38), q.NdJ("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit;
        return q.KtG(gt.watchForm.deleteStoma.check = it);
      })("ngModelChange", function (it) {
        const gt = q.CHM(At).$implicit,
          ni = q.oxw();
        return q.KtG(ni.onCheck(it, "deleteStoma", gt));
      }), q._uU(83, " Закрытие стомы "), q.qZA(), q.YNc(84, Ts, 3, 4, "app-info-icon", 39), q.YNc(85, js, 4, 1, "div", 40), q.qZA(), q.YNc(86, sa, 13, 6, "div", 41), q.qZA(), q.YNc(87, ma, 7, 6, "div", 42), q.qZA(), q.YNc(88, qs, 10, 4, "div", 32), q.YNc(89, Ri, 1, 4, "app-stoma-events", 43), q.qZA()()();
    }
    if (2 & Mi) {
      const At = It.$implicit,
        _n = q.oxw();
      q.xp6(1), q.Q6J("ngIf", _n.canDeleteStoma(At)), q.xp6(1), q.Q6J("ngIf", _n.canUnsign(At)), q.xp6(1), q.ekj("has-warning", At.hasMissingDays && At.watchForm.finishStoma.check), q.Q6J("expanded", At.protocolId === _n.expandedProtocolId), q.xp6(1), q.Q6J("withArrow", !0), q.xp6(3), q.hij("Карта наблюдения за пациентом с ", At.stomaKind, ""), q.xp6(3), q.hij("Вид стомы: ", At.stomaKind, ""), q.xp6(3), q.hij(" Размер: ", At.stomaSize, ""), q.xp6(1), q.Q6J("ngIf", At.stomaName), q.xp6(3), q.AsE(" Начало ухода: ", q.Dn7(18, 73, At.installDate, "dd.MM.yyyy", "UTC"), ", ", q.Dn7(19, 77, At.installDate, "HH:mm", "UTC"), " "), q.xp6(3), q.Q6J("ngIf", At.finishDate), q.xp6(1), q.Q6J("ngIf", At.hasMissingDays && At.watchForm.finishStoma.check && !At.signed), q.xp6(1), q.ekj("disabled-block", At.signed), q.xp6(4), q.Q6J("color", "blue")("ngModel", At.watchForm.bandage.check)("disabled", !!At.signed), q.xp6(2), q.Q6J("ngIf", _n.hasEvent(At, "bandage") && !_n.isTablet), q.xp6(1), q.Q6J("ngIf", _n.hasEvent(At, "bandage") && _n.isTablet), q.xp6(1), q.Q6J("ngIf", At.watchForm.bandage.check && !At.signed), q.xp6(3), q.Q6J("color", "blue")("ngModel", At.watchForm.replacement.check)("disabled", !!At.signed), q.xp6(2), q.Q6J("ngIf", _n.hasEvent(At, "replacement") && !_n.isTablet), q.xp6(1), q.Q6J("ngIf", _n.hasEvent(At, "replacement") && _n.isTablet), q.xp6(1), q.Q6J("ngIf", At.watchForm.replacement.check && !At.signed), q.xp6(3), q.Q6J("color", "blue")("ngModel", At.watchForm.treatment.check)("disabled", !!At.signed), q.xp6(2), q.Q6J("ngIf", _n.hasEvent(At, "treatment") && !_n.isTablet), q.xp6(1), q.Q6J("ngIf", _n.hasEvent(At, "treatment") && _n.isTablet), q.xp6(1), q.Q6J("ngIf", At.watchForm.treatment.check && !At.signed), q.xp6(3), q.Q6J("color", "blue")("ngModel", At.watchForm.inflammation.check)("disabled", !!At.signed), q.xp6(2), q.Q6J("ngIf", _n.hasEvent(At, "inflammation") && !_n.isTablet), q.xp6(1), q.Q6J("ngIf", _n.hasEvent(At, "inflammation") && _n.isTablet), q.xp6(1), q.Q6J("ngIf", At.watchForm.inflammation.check && !At.signed), q.xp6(3), q.Q6J("color", "blue")("ngModel", At.watchForm.excretion.check)("disabled", !!At.signed), q.xp6(2), q.Q6J("ngIf", _n.hasEvent(At, "excretion") && !_n.isTablet), q.xp6(1), q.Q6J("ngIf", _n.hasEvent(At, "excretion") && _n.isTablet), q.xp6(1), q.Q6J("ngIf", At.watchForm.excretion.check && !At.signed), q.xp6(3), q.Q6J("color", "blue")("ngModel", At.watchForm.disorder.check)("disabled", !!At.signed), q.xp6(2), q.Q6J("ngIf", _n.hasEvent(At, "disorder") && !_n.isTablet), q.xp6(1), q.Q6J("ngIf", _n.hasEvent(At, "disorder") && _n.isTablet), q.xp6(1), q.Q6J("ngIf", At.watchForm.disorder.check && !At.signed), q.xp6(3), q.Q6J("color", "blue")("ngModel", At.watchForm.complaint.check)("disabled", !!At.signed), q.xp6(2), q.Q6J("ngIf", _n.hasEvent(At, "complaint") && !_n.isTablet), q.xp6(1), q.Q6J("ngIf", _n.hasEvent(At, "complaint") && _n.isTablet), q.xp6(1), q.Q6J("ngIf", At.watchForm.complaint.check && !At.signed), q.xp6(3), q.Q6J("color", "blue")("ngModel", At.watchForm.addInfo.check)("disabled", !!At.signed), q.xp6(2), q.Q6J("ngIf", _n.hasEvent(At, "addInfo") && !_n.isTablet), q.xp6(1), q.Q6J("ngIf", _n.hasEvent(At, "addInfo") && _n.isTablet), q.xp6(1), q.Q6J("ngIf", At.watchForm.addInfo.check && !At.signed), q.xp6(3), q.Q6J("color", "blue")("ngModel", At.watchForm.deleteStoma.check)("disabled", !!At.signed), q.xp6(2), q.Q6J("ngIf", _n.hasEvent(At, "deleteStoma") && !_n.isTablet), q.xp6(1), q.Q6J("ngIf", _n.hasEvent(At, "deleteStoma") && _n.isTablet), q.xp6(1), q.Q6J("ngIf", At.watchForm.deleteStoma.check && !At.signed), q.xp6(1), q.Q6J("ngIf", _n.canFinish(At)), q.xp6(1), q.Q6J("ngIf", !_n.isDoctor), q.xp6(1), q.Q6J("ngIf", At.todayCompositionId && At.todayEvents.length);
    }
  }
  function ci(Mi, It) {
    if (1 & Mi) {
      const At = q.EpF();
      q.TgZ(0, "div", 76)(1, "button", 77), q.NdJ("click", function () {
        q.CHM(At);
        const it = q.oxw();
        return q.KtG(it.onSave());
      }), q._uU(2), q.qZA()();
    }
    if (2 & Mi) {
      const At = q.oxw();
      q.xp6(1), q.Q6J("size", "medium")("color", "blue")("disabled", At.isLoad), q.xp6(1), q.hij("", At.saveText, " ");
    }
  }
  const Gi = new Set(["bandage", "replace", "treatment", "inflammation", "excretion", "disorder", "complaint", "addInfo", "deleteStoma"]),
    Fn = (Mi = 3e3) => (0, G.z)((0, te.H)(Mi)),
    No = class {
      constructor(It, At, _n, it, _e, gt, ni, So, Er, Br, vr, zr, ks) {
        this.modalRef = It, this.modalData = At, this.messageService = _n, this.luValidators = it, this.patientService = _e, this.ehrService = gt, this.cdr = ni, this.store = So, this.employeesService = Er, this.stomaNewCompositionService = Br, this.compositionService = vr, this.confirmationModalService = zr, this.modalService = ks, this.maxDate = new Date(), this.minDate = new Date(1900, 0, 1), this.hintText = "Уже было проведено сегодня", this.dateControl = new fe.NI(new Date(), [fe.kI.required, this.luValidators.dateMax(this.maxDate)]), this.patientInfo = null, this.stomaList = [], this.doctorList = [], this.isDoctor = !1, this.isTablet = !1, this.isLoad = !1, this.showValidationErrors = !1, this.expandedProtocolId = null, this.sourceStomas = [], this.actualPatientEhrId = null, this.destroy$ = new e.x();
      }
      ngOnInit() {
        var It = this;
        this.modalData.stream$.pipe((0, m.R)(this.destroy$)).subscribe({
          next: At => {
            if (At && (!this.currentEntityId || this.currentEntityId === At?.actionData.entityId)) {
              this.patientInfo = At.selectedPatient, this.isTablet = !!At.isTablet, this.currentUser = At.currentUser, this.sourceStomas = (At?.actionData?.data?.stomas?.elements ?? []).map(it => ({
                ...it,
                stomaCareMarks: [...(it.stomaCareMarks ?? [])]
              }));
              const _n = At?.actionData?.data?.stomas?.minInstallDate ?? this.sourceStomas.map(it => it.installDate).filter(Boolean).sort()[0];
              _n && (this.minDate = new Date(_n)), this.dateControl.setValidators([fe.kI.required, this.luValidators.dateMin(this.minDate), this.luValidators.dateMax(this.maxDate)]), this.dateControl.updateValueAndValidity({
                emitEvent: !1
              }), this.currentEntityId || this.dateControl.setValue(Y()(At.dateRangeWidgetValue).format("YYYY-MM-DD"), {
                emitEvent: !1
              }), this.currentEntityId = At?.actionData.entityId, this.initialize();
            }
          }
        }), this.dateControl.valueChanges.pipe((0, m.R)(this.destroy$)).subscribe(function () {
          var At = (0, M.Z)(function* (_n) {
            It.store.dispatch((0, st.rr)({
              observationWatchDate: _n
            })), It.dateControl.valid && (yield It.loadStomas());
          });
          return function (_n) {
            return At.apply(this, arguments);
          };
        }());
      }
      ngOnDestroy() {
        this.destroy$.next(), this.destroy$.complete();
      }
      triggerReloadTargetList() {
        const {
          $stream: It,
          targetList: At
        } = this.modalData.refresh;
        It && At && It.next(At);
      }
      initialize() {
        var It = this;
        return (0, M.Z)(function* () {
          try {
            const At = yield (0, G.z)(It.store.select(be.S8).pipe((0, a.h)(Boolean), (0, pe.q)(1)));
            It.currentUser = It.currentUser ?? At;
            const _n = It.currentUser?.jobTitle?.name?.toLowerCase() ?? "";
            It.isDoctor = _n.includes("врач"), yield It.loadDoctors(), yield It.loadStomas();
          } catch (At) {
            console.error("Не удалось инициализировать карту наблюдения:", At), It.messageService.error("Не удалось загрузить карту наблюдения", {
              marginBottom: 44
            });
          }
        })();
      }
      loadDoctors() {
        var It = this;
        return (0, M.Z)(function* () {
          It.isLoad = !0;
          const At = yield (0, G.z)(It.store.select(Re.pe).pipe((0, pe.q)(1))),
            _n = At?.length ? At : (yield (0, G.z)(It.employeesService.getEmployeesList(It.currentUser.department.id))).employees;
          It.doctorList = _n.filter(it => {
            const _e = it?.jobTitle?.name?.toLowerCase() ?? "";
            return !(_e.includes("сестра") || _e.includes("брат"));
          }), At?.length || It.store.dispatch((0, st.EB)({
            doctorList: It.doctorList
          })), It.isLoad = !1;
        })();
      }
      loadStomas() {
        var It = this;
        return (0, M.Z)(function* () {
          const At = It.selectedDate;
          It.isLoad = !0, It.showValidationErrors = !1;
          const _n = It.sourceStomas.filter(it => It.isStomaVisibleOnDate(it, At)).map(it => It.createCard(it)).sort((it, _e) => Y()(_e.installDate).valueOf() - Y()(it.installDate).valueOf());
          try {
            if (!It.actualPatientEhrId) {
              const gt = yield (0, G.z)(It.patientService.findPatientInfo(It.patientInfo.actualPatientId));
              It.actualPatientEhrId = gt?.ehrId ?? null;
            }
            if (!It.actualPatientEhrId) throw new Error("Не найден ehrId пациента.");
            const it = yield (0, G.z)(It.ehrService.getEhr(It.actualPatientEhrId));
            (yield Promise.all(_n.map(gt => (0, G.z)(it.getMedicalEntry(gt.protocolId))))).forEach(gt => It.applyCompositionData(_n, gt)), It.stomaList = _n, It.expandedProtocolId = _n.some(gt => gt.protocolId === It.expandedProtocolId) ? It.expandedProtocolId : _n[0]?.protocolId ?? null;
          } catch (it) {
            console.error("Не удалось загрузить данные ухода:", it), It.stomaList = _n, It.messageService.error("Не удалось загрузить события ухода", {
              marginBottom: 44
            });
          } finally {
            It.isLoad = !1, It.cdr.markForCheck();
          }
        })();
      }
      createCard(It) {
        const At = this.getRepDeviceByStomaKind(It.stomaKind),
          _n = It.stomaCareMarks?.find(it => !!it.finishTime);
        return {
          ...It,
          careCaseId: It.careCaseId ?? this.patientInfo?.careCaseId,
          signed: !!It.signed,
          finishDate: It.finishDate ?? (_n ? `${_n.observationDate}T${_n.finishTime ?? "00:00"}` : void 0),
          repDeviceData: At,
          watchForm: this.createEmptyWatch(At.value),
          todayEvents: [],
          todayCompositionId: null,
          careDates: new Set(),
          signatureDate: _n?.observationDate ?? null,
          unsignPayload: null,
          currentCareMark: null,
          compositionLoaded: !1,
          hasMissingDays: !1,
          missingDaysLabel: "",
          hasCareMarks: It.stomaCareMarks ?? []
        };
      }
      applyCompositionData(It, At) {
        const _n = At.getUid(),
          it = It.find(gt => this.compareUids(gt.protocolId, _n));
        it && (it.signed = !!At.getRoot().getTags()?.some(gt => "sign" === gt.tag), it.compositionLoaded = !0, [At.getRoot(), ...At.getChildren()].forEach(gt => {
          const ni = gt.getComposition().getData()?.карта_наблюдения_за_пациентом_со_стомой?.[0],
            So = this.parseOpenEhr(ni),
            Er = So?.дата_и_время?.дата_наблюдения?.дата_наблюдения;
          if (!Er) return;
          const Br = this.mapStomaEvents(So, gt.getUid(), this.currentUser);
          Br.some(zr => Gi.has(zr.type)) && it.careDates.add(Y()(Er).format("YYYY-MM-DD"));
          const vr = Br.find(zr => "finish" === zr.type);
          vr && (it.signatureDate = Y()(Er).format("YYYY-MM-DD"), it.finishDate = `${it.signatureDate}T${vr.time ?? "00:00"}`), Y()(Er).isSame(Y()(this.selectedDate), "day") && (it.todayEvents = Br, it.todayCompositionId = gt.getUid());
        }), it.signed && it.todayEvents.length && (it.watchForm = this.createWatchFromEvents(it.todayEvents, it.repDeviceData?.value ?? "")));
      }
      isStomaVisibleOnDate(It, At) {
        if (Y()(It.installDate).isAfter(Y()(At), "day")) return !1;
        const it = It.stomaCareMarks?.find(gt => !!gt.finishTime),
          _e = It.finishDate ?? it?.observationDate;
        return !_e || !Y()(_e).isBefore(Y()(At), "day");
      }
      createWatchFromEvents(It, At) {
        const _n = this.createEmptyWatch(At),
          it = _e => It.find(gt => gt.type === _e);
        return _n.bandage = {
          check: !!it("bandage"),
          time: it("bandage")?.time ?? null
        }, _n.replacement = {
          check: !!it("replace"),
          time: it("replace")?.time ?? null,
          device: it("replace")?.device ?? At
        }, _n.treatment = {
          check: !!it("treatment"),
          time: it("treatment")?.time ?? null
        }, _n.inflammation = {
          check: !!it("inflammation"),
          time: it("inflammation")?.time ?? null,
          desc: it("inflammation")?.desc ?? ""
        }, _n.excretion = {
          check: !!it("excretion"),
          time: it("excretion")?.time ?? null,
          desc: it("excretion")?.desc ?? ""
        }, _n.disorder = {
          check: !!it("disorder"),
          time: it("disorder")?.time ?? null
        }, _n.complaint = {
          check: !!it("complaint"),
          time: it("complaint")?.time ?? null,
          desc: it("complaint")?.desc ?? ""
        }, _n.addInfo = {
          check: !!it("addInfo"),
          time: it("addInfo")?.time ?? null,
          desc: it("addInfo")?.desc ?? ""
        }, _n.deleteStoma = {
          check: !!it("deleteStoma"),
          time: it("deleteStoma")?.time ?? null,
          reason: it("deleteStoma")?.reason ?? "",
          complication: it("deleteStoma")?.complication ?? ""
        }, _n.finishStoma = {
          check: !!it("finish"),
          time: it("finish")?.time ?? null,
          comment: it("finish")?.comment ?? ""
        }, _n;
      }
      get selectedDate() {
        return Y()(this.dateControl.value).format("YYYY-MM-DD");
      }
      get saveText() {
        return this.stomaList.some(It => !It.signed && It.watchForm.finishStoma.check) ? "Сохранить и подписать" : "Сохранить";
      }
      get hasEditableStomas() {
        return this.stomaList.some(It => !It.signed);
      }
      hasEvent(It, At) {
        const _n = "replacement" === At ? "replace" : "finishStoma" === At ? "finish" : At;
        return It.todayEvents.some(it => it.type === _n);
      }
      canUnsign(It) {
        return !!It.signed;
      }
      canDeleteStoma(It) {
        return !It.signed && It.compositionLoaded && !It.stomaCareMarks?.length && 0 === It.careDates.size;
      }
      canFinish(It) {
        return !It.stomaCareMarks.find(_n => _n.observationDate > this.selectedDate);
      }
      markDirty(It) {
        It.signed || (this.showValidationErrors = !1);
      }
      onCheck(It, At, _n) {
        if (_n.signed) return;
        const it = _n.watchForm;
        it[At].time = It ? Y()().format("HH:mm") : null, It || ("replacement" === At && (it.replacement.device = _n.repDeviceData?.value ?? ""), ("inflammation" === At || "excretion" === At || "complaint" === At || "addInfo" === At) && (it[At].desc = ""), "deleteStoma" === At && (it.deleteStoma.reason = "", it.deleteStoma.complication = ""), "finishStoma" === At && (it.finishStoma.comment = "")), "finishStoma" === At && It && this.updateMissingDays(_n), this.showValidationErrors = !1;
      }
      fieldHasError(It, At, _n) {
        if (!this.showValidationErrors || !It.watchForm[At].check) return !1;
        const it = It.watchForm[At][_n];
        return "time" === _n ? !this.isValidTime(it) : !String(it ?? "").trim();
      }
      doctorHasError(It) {
        return this.showValidationErrors && !this.isDoctor && this.hasAnySelectedActivity(It.watchForm) && !It.watchForm.selectedDoctor;
      }
      isValidTime(It) {
        if (!It || !/^\d{2}:\d{2}$/.test(It)) return !1;
        const [At, _n] = It.split(":").map(Number);
        return At >= 0 && At < 24 && _n >= 0 && _n < 60;
      }
      isCardValid(It) {
        const At = It.watchForm,
          it = ["bandage", "replacement", "treatment", "inflammation", "excretion", "disorder", "complaint", "addInfo", "deleteStoma", "finishStoma"].every(So => !At[So].check || this.isValidTime(At[So].time)),
          _e = !At.replacement.check || !!At.replacement.device?.trim(),
          gt = !At.deleteStoma.check || !!At.deleteStoma.reason?.trim() && !!At.deleteStoma.complication?.trim();
        return it && _e && gt && (this.isDoctor || !!At.selectedDoctor);
      }
      hasAnyCareActivity(It) {
        return [It.bandage, It.replacement, It.treatment, It.inflammation, It.excretion, It.disorder, It.complaint, It.addInfo, It.deleteStoma].some(At => At.check);
      }
      hasAnySelectedActivity(It) {
        return this.hasAnyCareActivity(It) || It.finishStoma.check;
      }
      getMissingDays(It) {
        const At = new Set(It.careDates);
        this.hasAnyCareActivity(It.watchForm) && At.add(this.selectedDate);
        const _n = [];
        let it = Y()(It.installDate).startOf("day");
        const _e = Y()(this.selectedDate).startOf("day");
        for (; it.isBefore(_e, "day") || it.isSame(_e, "day");) {
          const gt = it.format("YYYY-MM-DD");
          At.has(gt) || _n.push(gt), it = it.add(1, "day");
        }
        return _n;
      }
      updateMissingDays(It) {
        const At = this.getMissingDays(It);
        It.hasMissingDays = At.length > 0, It.missingDaysLabel = this.declineDays(At.length);
      }
      onSave() {
        var It = this;
        return (0, M.Z)(function* () {
          const At = It.stomaList.filter(_e => !_e.signed && It.hasAnySelectedActivity(_e.watchForm));
          if (!At.length) return void It.messageService.info("Данные для сохранения отсутствуют", {
            marginBottom: 44
          });
          if (At.some(_e => !_e.compositionLoaded)) return void It.messageService.error("Дождитесь загрузки данных ухода и повторите попытку", {
            marginBottom: 44
          });
          if (It.showValidationErrors = !0, It.dateControl.invalid || At.some(_e => !It.isCardValid(_e))) return It.messageService.error("Заполните обязательные поля", {
            marginBottom: 44
          }), void It.cdr.markForCheck();
          const _n = At.filter(_e => _e.watchForm.finishStoma.check);
          for (const _e of _n) {
            const gt = new Set(_e.careDates);
            if (It.hasAnyCareActivity(_e.watchForm) && gt.add(It.selectedDate), !gt.size) return It.updateMissingDays(_e), It.messageService.error("Невозможно подписать карту: отметки ухода отсутствуют за весь период", {
              marginBottom: 44
            }), void It.cdr.markForCheck();
          }
          const it = _n.map(_e => ({
            stoma: _e,
            missingDays: It.getMissingDays(_e)
          })).filter(_e => _e.missingDays.length > 0);
          if (it.forEach(({
            stoma: _e,
            missingDays: gt
          }) => {
            _e.hasMissingDays = !0, _e.missingDaysLabel = It.declineDays(gt.length);
          }), it.length) {
            const gt = {
              title: "Подписание карты наблюдения",
              message: `\u0415\u0441\u0442\u044c \u0434\u043d\u0438 \u0431\u0435\u0437 \u043e\u0442\u043c\u0435\u0442\u043e\u043a \u0443\u0445\u043e\u0434\u0430 (${it.map(({
                stoma: So,
                missingDays: Er
              }) => `${So.stomaKind}: ${It.declineDays(Er.length)}`).join("; ")}). \u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u0434\u043d\u0438 \u0438\u043b\u0438 \u043f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u0430\u0440\u0442\u0443 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e.`,
              cancelButtonTitle: "Заполнить",
              buttonTitle: "Подписать"
            };
            if (!(yield (0, G.z)(It.confirmationModalService.openDialog(gt, !0)))) return;
          }
          It.isLoad = !0;
          try {
            for (const _e of At) yield (0, G.z)(It.stomaNewCompositionService.saveStoma(It.buildPayload(_e), It.actualPatientEhrId));
            yield Fn(), It.triggerReloadTargetList(), yield Fn(), _n.length ? (_n.forEach(_e => It.markAsSignedLocally(_e)), yield It.loadStomas(), It.messageService.success("Данные по уходу подписаны", {
              marginBottom: 44
            })) : (It.messageService.success("Данные по уходу сохранены", {
              marginBottom: 44
            }), It.modalRef.close(!0));
          } catch (_e) {
            console.error("Ошибка сохранения карты наблюдения:", _e), It.messageService.error("Не удалось сохранить данные по уходу", {
              marginBottom: 44
            });
          } finally {
            It.isLoad = !1, It.cdr.markForCheck();
          }
        })();
      }
      buildPayload(It) {
        const At = It.watchForm,
          _n = _e => _e.check ? _e : null,
          it = this.isDoctor ? {
            id: this.currentUser.employeeId,
            name: [this.currentUser.lastName, this.currentUser.firstName, this.currentUser.secondName].filter(Boolean).join(" ")
          } : {
            id: At.selectedDoctor?.id ?? At.selectedDoctor?.employeeId ?? "",
            name: At.selectedDoctor?.fio ?? At.selectedDoctor?.name ?? ""
          };
        return {
          protocolId: It.protocolId,
          careCaseId: It.careCaseId ?? this.patientInfo.careCaseId,
          installDate: It.installDate,
          observationDate: this.selectedDate,
          stoma: It,
          selectedDoctor: it,
          bandage: _n({
            ...At.bandage
          }),
          replacement: _n({
            ...At.replacement
          }),
          treatment: _n({
            ...At.treatment
          }),
          inflammation: _n({
            ...At.inflammation
          }),
          excretion: _n({
            ...At.excretion
          }),
          disorder: _n({
            ...At.disorder
          }),
          complaint: _n({
            ...At.complaint
          }),
          addInfo: _n({
            ...At.addInfo
          }),
          deleteStoma: _n({
            ...At.deleteStoma
          }),
          finishStoma: _n({
            ...At.finishStoma
          })
        };
      }
      markAsSignedLocally(It) {
        const At = It.watchForm.finishStoma.time ?? "00:00",
          _n = this.sourceStomas.find(it => this.compareUids(it.protocolId, It.protocolId));
        _n && (_n.signed = !0, _n.finishDate = `${this.selectedDate}T${At}`, _n.stomaCareMarks = [...(_n.stomaCareMarks ?? []).filter(it => !it.finishTime), {
          compositionId: It.todayCompositionId ?? It.protocolId,
          observationDate: this.selectedDate,
          finishTime: At
        }]), It.signed = !0, It.signatureDate = this.selectedDate, It.finishDate = `${this.selectedDate}T${At}`;
      }
      openAddStomaModal() {
        var It = this;
        return (0, M.Z)(function* () {
          It.store.dispatch((0, st.cf)({
            modal: "AddStomaModalComponent"
          }));
          const At = It.modalService.open(new d.X(Et.z), {
              panelClass: It.isTablet ? "full-screen-modal" : void 0,
              width: It.isTablet ? "100vw" : void 0,
              height: It.isTablet ? "100vh" : void 0,
              data: {
                patientInfo: It.patientInfo,
                date: It.dateControl.value
              }
            }),
            _n = yield (0, G.z)(At.afterClose(), {
              defaultValue: null
            });
          _n?.protocolId && (It.sourceStomas = [_n, ...It.sourceStomas], It.expandedProtocolId = _n.protocolId, yield It.loadStomas());
        })();
      }
      openDeleteStomaModal(It) {
        var At = this;
        return (0, M.Z)(function* () {
          const _n = 1 === At.sourceStomas.length,
            it = _n ? {
              title: "Удаление карты наблюдения",
              message: "Карта наблюдения будет удалена вместе с пациентом из Списка ухода. Удалить пациента из Списка ухода?",
              cancelButtonTitle: "Отменить",
              buttonTitle: "Удалить"
            } : {
              title: "Удаление карты наблюдения",
              message: `\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u041a\u0430\u0440\u0442\u0443 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0437\u0430 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u043c \u0441\u043e \u0441\u0442\u043e\u043c\u043e\u0439 (${It.stomaKind})?`,
              cancelButtonTitle: "Отменить",
              buttonTitle: "Удалить"
            };
          if (yield (0, G.z)(At.confirmationModalService.openDialog(it, !0))) {
            At.isLoad = !0;
            try {
              if (!At.actualPatientEhrId) throw new Error("Не найден ehrId пациента.");
              const gt = yield (0, G.z)(At.compositionService.getEhr(At.actualPatientEhrId));
              yield (0, G.z)(At.compositionService.deleteStomaDocument(gt, It.protocolId)), At.sourceStomas = At.sourceStomas.filter(ni => !At.compareUids(ni.protocolId, It.protocolId)), At.triggerReloadTargetList(), At.messageService.info("Карта наблюдения удалена", {
                marginBottom: 44
              }), _n ? At.modalRef.close(!0) : yield At.loadStomas();
            } catch (gt) {
              console.error("Ошибка удаления карты наблюдения:", gt), At.messageService.error("Не удалось удалить карту наблюдения", {
                marginBottom: 44
              });
            } finally {
              At.isLoad = !1, At.cdr.markForCheck();
            }
          }
        })();
      }
      updateStomaItem(It, At) {
        At.todayEvents = It.eventsList ?? [], At.currentCareMark = It.currentCareMark;
        const _n = It.payload?.selectedDoctor;
        At.unsignPayload = It.payload ? {
          ...It.payload,
          selectedDoctor: _n?.name ? _n : It.selectDoc?.selectDoctor ?? null
        } : null, this.cdr.markForCheck();
      }
      onEventsChanged() {
        var It = this;
        return (0, M.Z)(function* () {
          It.isLoad = !0, It.triggerReloadTargetList(), yield Fn(), yield It.loadStomas(), It.cdr.markForCheck(), It.isLoad = !1;
        })();
      }
      onEventCheckLoad(It) {
        this.isLoad = It;
      }
      onUnSign(It) {
        var At = this;
        return (0, M.Z)(function* () {
          if (!At.canUnsign(It)) return;
          if (!It.unsignPayload || !At.actualPatientEhrId) return void At.messageService.error("Данные для снятия подписи ещё не загружены", {
            marginBottom: 44
          });
          const _n = {
            ...It.unsignPayload,
            protocolId: It.protocolId,
            careCaseId: It.careCaseId ?? At.patientInfo.careCaseId,
            installDate: It.installDate,
            observationDate: At.selectedDate,
            currentCareMark: It.currentCareMark,
            stoma: {
              protocolId: It.protocolId,
              stomaKind: It.stomaKind,
              stomaName: It.stomaName,
              stomaCareMarks: It.stomaCareMarks ?? [],
              stomaKindId: It.stomaKindId,
              installDate: It.installDate,
              sign: It.signed,
              employeeId: It.employeeId,
              stomaSize: It.stomaSize,
              careCaseId: It.careCaseId ?? At.patientInfo.careCaseId,
              updated: It.updated
            }
          };
          At.isLoad = !0;
          try {
            yield (0, G.z)(At.stomaNewCompositionService.unSignStoma(At.actualPatientEhrId, _n, It.protocolId));
            const it = At.sourceStomas.find(_e => At.compareUids(_e.protocolId, It.protocolId));
            it && (it.signed = !1, it.finishDate = void 0, it.stomaCareMarks = (it.stomaCareMarks ?? []).filter(_e => !_e.finishTime)), yield Fn(5e3), At.triggerReloadTargetList(), yield Fn(), yield At.loadStomas(), At.messageService.success("Подпись снята", {
              marginBottom: 44
            });
          } catch (it) {
            console.error("Ошибка при снятии подписи:", it), At.messageService.error("Не удалось снять подпись", {
              marginBottom: 44
            });
          } finally {
            At.isLoad = !1, At.cdr.markForCheck();
          }
        })();
      }
      displayDoctor(It) {
        return It ? [It?.fio ?? It?.name ?? It?.selectDoctor?.name, It?.jobTitle?.name, It?.department?.name].filter(Boolean).join(", ") : "";
      }
      trackByProtocolId(It, At) {
        return At.protocolId;
      }
      closeModal() {
        this.modalRef.close(!1);
      }
      mapStomaEvents(It, At, _n) {
        const it = le([_n?.lastName, _n?.firstName, _n?.secondName].filter(Boolean).join(" "));
        return [{
          type: "bandage",
          title: "Смена повязки",
          source: It?.смена_повязки?.подробности_о_процедуре,
          getDate: gt => gt?.дата_смены_повязки?.дата_смены_повязки,
          getTime: gt => gt?.дата_смены_повязки?.время_смены_повязки,
          getEmployee: Rt
        }, {
          type: "replace",
          title: "Частичная замена системы",
          source: It?.частичная_замена_системы?.подробности_о_процедуре,
          getDate: gt => gt?.дата_частичной_замены_системы?.дата_частичной_замены,
          getTime: gt => gt?.дата_частичной_замены_системы?.время_частичной_замены,
          getEmployee: Rt,
          extra: gt => ({
            device: gt?.устройство?.устройство
          })
        }, {
          type: "treatment",
          title: "Обработка кожных покровов",
          source: It?.обработка_кожных_покровов_вокруг_стомы?.any_event?.кожа,
          getDate: gt => gt?.дата_обработки?.дата_обработки,
          getTime: gt => gt?.дата_обработки?.время_обработки,
          getEmployee: Rt
        }, {
          type: "inflammation",
          title: "Воспаление слизистой в месте стояния стомы",
          source: It?.воспаление_слизистой_в_месте_стояния_стомы?.any_event?.слизистая,
          getDate: gt => gt?.дата_воспаления?.дата_воспаления,
          getTime: gt => gt?.дата_воспаления?.время_воспаления,
          getEmployee: Rt,
          extra: gt => ({
            desc: gt?.описание_воспаления
          })
        }, {
          type: "excretion",
          title: "Наличие отделяемого",
          source: It?.наличие_отделяемого?.контейнер,
          getDate: gt => gt?.дата_отделяемого?.дата_отделяемого,
          getTime: gt => gt?.дата_отделяемого?.время_отделяемого,
          getEmployee: Rt,
          extra: gt => ({
            desc: gt?.отделяемое_из_уретры?.характер_отделяемого
          })
        }, {
          type: "disorder",
          title: "Функциональность стомы нарушена",
          source: It?.функциональность_стомы_нарушена,
          getDate: gt => gt?.дата?.дата_нарушения_функциональности_стомы,
          getTime: gt => gt?.дата?.время_нарушения_функциональности_стомы,
          getEmployee: Rt
        }, {
          type: "complaint",
          title: "Жалобы пациента",
          source: It?.жалобы_пациента?.жалобы,
          getDate: gt => gt?.дата_жалобы?.дата_жалобы,
          getTime: gt => gt?.дата_жалобы?.время_жалобы,
          getEmployee: Rt,
          extra: gt => ({
            desc: gt?.описание_жалобы
          })
        }, {
          type: "addInfo",
          title: "Дополнительная информация",
          source: It?.контейнер,
          getDate: gt => gt?.дата_и_время?.дата_дополнительной_информации,
          getTime: gt => gt?.дата_и_время?.время_дополнительной_информации,
          getEmployee: Rt,
          extra: gt => ({
            desc: gt?.описание_дополнительной_информации?.описание_дополнительной_информации
          })
        }, {
          type: "deleteStoma",
          title: "Закрытие стомы",
          source: It?.удаление_стомы,
          getDate: gt => gt?.дата_удаления?.дата_удаления,
          getTime: gt => gt?.дата_удаления?.время_удаления,
          getEmployee: gt => n(this.getClosureAuthor(gt)),
          getEmployeeRaw: gt => this.getClosureAuthor(gt),
          extra: gt => ({
            reason: gt?.причина_удаления?.причина_удаления,
            complication: gt?.причина_удаления?.осложнение
          })
        }, {
          type: "finish",
          title: "Завершение ухода",
          source: It?.завершение_ухода_за_пациентом?.any_event,
          getDate: gt => gt?.дата_завершения_ухода?.дата_завершения_ухода,
          getTime: gt => gt?.дата_завершения_ухода?.время_завершения_ухода,
          getEmployee: Rt,
          extra: gt => ({
            comment: gt?.комментарий
          })
        }].flatMap(gt => We(gt, it)).map(gt => ({
          ...gt,
          compositionId: At
        }));
      }
      parseOpenEhr(It) {
        if (Array.isArray(It)) return 1 === It.length ? this.parseOpenEhr(It[0]) : It.map(At => this.parseOpenEhr(At));
        if (It && "object" == typeof It) {
          const At = {};
          return Object.keys(It).forEach(_n => {
            At[_n.startsWith("|") ? _n.substring(1) : _n] = this.parseOpenEhr(It[_n]);
          }), "value" in At && 1 === Object.keys(At).length ? At.value : At;
        }
        return It;
      }
      getClosureAuthor(It) {
        return It?.фио_медсестры?.фио_медсестры?.фио_медсестры?.value ?? It?.фио_медсестры?.фио_медсестры?.value ?? It?.фио_врача?.фио_врача?.фио_врача?.value ?? It?.фио_врача?.фио_врача?.value ?? "";
      }
      createEmptyWatch(It = "") {
        return {
          bandage: {
            check: !1,
            time: null
          },
          replacement: {
            check: !1,
            time: null,
            device: It
          },
          treatment: {
            check: !1,
            time: null
          },
          inflammation: {
            check: !1,
            time: null,
            desc: ""
          },
          excretion: {
            check: !1,
            time: null,
            desc: ""
          },
          disorder: {
            check: !1,
            time: null
          },
          complaint: {
            check: !1,
            time: null,
            desc: ""
          },
          addInfo: {
            check: !1,
            time: null,
            desc: ""
          },
          deleteStoma: {
            check: !1,
            time: null,
            reason: "",
            complication: ""
          },
          finishStoma: {
            check: !1,
            time: null,
            comment: ""
          },
          selectedDoctor: null
        };
      }
      declineDays(It) {
        const At = Math.abs(It) % 100,
          _n = At % 10;
        return At > 10 && At < 20 ? `${It} \u0434\u043d\u0435\u0439` : _n > 1 && _n < 5 ? `${It} \u0434\u043d\u044f` : 1 === _n ? `${It} \u0434\u0435\u043d\u044c` : `${It} \u0434\u043d\u0435\u0439`;
      }
      compareUids(It, At) {
        return It?.split("::")[0] === At?.split("::")[0];
      }
      getRepDeviceByStomaKind(It) {
        const At = ["Калоприемник", "Мочеприемник", "Дренажная трубка", "Трахеостомическая трубка", "Гастростомическая трубка", "Нефростомическая трубка", "Цистостомическая трубка"];
        switch (It?.toLowerCase()) {
          case "колостома":
            return {
              value: "Калоприемник",
              options: ["Калоприемник"]
            };
          case "цистостома (эпицистостома)":
            return {
              value: "Мочеприемник",
              options: ["Мочеприемник"]
            };
          case "трахеостома":
            return {
              value: "Трахеостомическая трубка",
              options: ["Трахеостомическая трубка"]
            };
          case "гастростома":
            return {
              value: "Гастростомическая трубка",
              options: ["Гастростомическая трубка"]
            };
          default:
            return {
              value: "Калоприемник",
              options: At
            };
        }
      }
    };
  let zi = No;
  No.ɵfac = function (At) {
    return new (At || No)(q.Y36(Ue.Rn), q.Y36(y.UM), q.Y36(Ke.Jv), q.Y36(Me.X), q.Y36(Ee.e), q.Y36(je.r), q.Y36(q.sBO), q.Y36(Mt.yh), q.Y36(Je.M), q.Y36(co), q.Y36(Jo.P), q.Y36(fr.k), q.Y36(Ze.ap));
  }, No.ɵcmp = q.Xpm({
    type: No,
    selectors: [["lib-stoma-card-modal"]],
    standalone: !0,
    features: [q.jDz],
    decls: 23,
    vars: 16,
    consts: [[1, "stoma-card-modal__content"], ["class", "loader-wrapper", 4, "ngIf"], [1, "stoma-card-modal__heading"], ["class", "stoma-card-modal__patient-info", 4, "ngIf"], ["icon", "close", 3, "size", "click"], [1, "stoma-card-modal__body"], [1, "stoma-card-modal__change-date"], [1, "form__group", "form__group--date"], [1, "form__group-label"], ["lu-label", ""], [3, "formControl", "minDate", "maxDate"], ["type", "error", 4, "ngIf"], ["lu-button-link", "", 1, "add-stoma", 3, "size", "color", "disabled", "click"], ["icon", "plus", "luButtonPrefix", "", 3, "size"], [1, "wrap"], ["class", "stoma-watch-wrapper", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "stoma-card-modal__footer", 4, "ngIf"], [1, "loader-wrapper"], [1, "loader"], [1, "stoma-card-modal__patient-info"], [1, "patient-fio"], [1, "dot"], [1, "dept", 3, "luTooltip", "positions"], ["type", "error"], ["icon", "warning", 3, "size"], [1, "stoma-watch-wrapper"], ["lu-button-link", "", "class", "delete-stoma", 3, "size", "color", "click", 4, "ngIf"], [1, "stoma-watch", 3, "expanded"], [1, "stoma-watch__header", 3, "withArrow"], [1, "stoma-watch__title", 3, "click"], [1, "stoma-name"], [1, "stoma-kind"], [4, "ngIf"], [1, "stoma-date"], ["class", "warning-wrapper", 4, "ngIf"], [1, "stoma-watch__body"], [1, "form__group"], [1, "stoma-watch__check-wrap"], [3, "color", "ngModel", "disabled", "ngModelChange"], ["panelClass", "iconClass", 3, "luTooltip", "withArrow", "borderOffset", "positions", 4, "ngIf"], ["class", "info-with-text", 4, "ngIf"], ["class", "stoma-watch__content", 4, "ngIf"], ["class", "form__group", 4, "ngIf"], [3, "compositionId", "protocolId", "stomaName", "parentSigned", "updateStomaItem", "isEventLoad", "eventsChanged", 4, "ngIf"], ["lu-button-link", "", 1, "delete-stoma", 3, "size", "color", "click"], [1, "warning-wrapper"], [1, "warning"], ["icon", "attention", 3, "size"], ["panelClass", "iconClass", 3, "luTooltip", "withArrow", "borderOffset", "positions"], ["longText", ""], [1, "info-with-text"], [1, "info-with-text__label"], [1, "stoma-watch__content"], ["lu-label", "Время", 1, "time"], ["luInput", "", "luInputString", "", "luMask", "HH:MM", 3, "ngModel", "ngModelChange"], ["type", "autocomplete", 3, "clearButton", "ngModel", "ngModelChange"], ["combobox_stomaType", ""], [3, "items", "itemContent", 4, "luData"], [3, "items", "itemContent"], ["stomaTypeTemplate", ""], [3, "innerHTML"], ["lu-label", "Описание воспаления"], [3, "minRows", "ngModel", "ngModelChange"], ["lu-label", "Характер отделяемого"], ["luInput", "", "luInputString", "", 3, "ngModel", "ngModelChange"], ["lu-label", "Описание жалобы"], ["lu-label", "Описание доп.информации"], ["lu-label", "Причина закрытия стомы"], ["lu-label", "Осложнение"], [3, "luTooltip", "withArrow", "borderOffset", 4, "ngIf"], [3, "luTooltip", "withArrow", "borderOffset"], ["lu-label", "Комментарий"], ["type", "autocomplete", 3, "ngModel", "displayValueFn", "disabled", "ngModelChange"], ["combobox_doctor", ""], ["itemContent_doctor", ""], [3, "compositionId", "protocolId", "stomaName", "parentSigned", "updateStomaItem", "isEventLoad", "eventsChanged"], [1, "stoma-card-modal__footer"], ["lu-button-raised", "", 3, "size", "color", "disabled", "click"]],
    template: function (At, _n) {
      1 & At && (q.TgZ(0, "div", 0), q.YNc(1, Yi, 2, 0, "div", 1), q.TgZ(2, "div", 2), q.YNc(3, Fo, 13, 14, "div", 3), q.TgZ(4, "lu-svg-icon", 4), q.NdJ("click", function () {
        return _n.closeModal();
      }), q.qZA()(), q.TgZ(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "span", 8), q._uU(9, "Дата ухода "), q.TgZ(10, "span"), q._uU(11, "*"), q.qZA()(), q.TgZ(12, "label", 9), q._UZ(13, "lu-calendar-stepper", 10), q.YNc(14, br, 3, 1, "lu-form-message", 11), q.YNc(15, Pr, 4, 5, "lu-form-message", 11), q.YNc(16, qo, 4, 5, "lu-form-message", 11), q.qZA()(), q.TgZ(17, "button", 12), q.NdJ("click", function () {
        return _n.openAddStomaModal();
      }), q._UZ(18, "lu-svg-icon", 13), q._uU(19, " Добавить стому "), q.qZA()(), q.TgZ(20, "div", 14), q.YNc(21, $o, 90, 81, "div", 15), q.qZA()(), q.YNc(22, ci, 3, 4, "div", 16), q.qZA()), 2 & At && (q.xp6(1), q.Q6J("ngIf", _n.isLoad), q.xp6(2), q.Q6J("ngIf", _n.patientInfo), q.xp6(1), q.Q6J("size", 24), q.xp6(9), q.Q6J("formControl", _n.dateControl)("minDate", _n.minDate)("maxDate", _n.maxDate), q.xp6(1), q.Q6J("ngIf", _n.dateControl.hasError("required")), q.xp6(1), q.Q6J("ngIf", _n.dateControl.hasError("dateMax")), q.xp6(1), q.Q6J("ngIf", _n.dateControl.hasError("dateMin")), q.xp6(1), q.Q6J("size", "medium")("color", "blue")("disabled", _n.dateControl.invalid || _n.isLoad), q.xp6(1), q.Q6J("size", 16), q.xp6(3), q.Q6J("ngForOf", _n.stomaList)("ngForTrackBy", _n.trackByProtocolId), q.xp6(1), q.Q6J("ngIf", _n.hasEditableStomas));
    },
    dependencies: [b.ez, b.sg, b.O5, b.uU, fe.u5, fe.Fj, fe.JJ, fe.On, fe.UX, fe.oH, ye.X, ye.l, j.j, W.n, W.m, A.Nu, A.$m, N.u, N.g, I.h, I.q, O.F, O.J, L.Y, L.z, C.Ki, C.Bf, v.X, f.j, f.e, E.f, E.L, h.c, h.H, x.LA, x.HY, F.t, F.y, Le.x, Le.I, u.c, u.l, ke.M0, ke.dj, T.N, T.M, R.W1, R.mc, R.nx, B.i, B.$, J.e_, J.BN, J.JM, mt, Ft, Xn],
    styles: [".stoma-card-modal__content[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;height:100%}.stoma-card-modal__heading[_ngcontent-%COMP%]{display:flex;align-items:center;padding:12px 24px;box-shadow:0 4px 8px #00000014,0 1px 2px #00000014;flex-shrink:0}.stoma-card-modal__heading[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc;cursor:pointer}.stoma-card-modal__heading[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}.stoma-card-modal__patient-info[_ngcontent-%COMP%]{flex-grow:1}.stoma-card-modal__patient-info[_ngcontent-%COMP%]   .patient-fio[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#000}.stoma-card-modal__patient-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:6px}.stoma-card-modal__patient-info[_ngcontent-%COMP%]   .dept[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:410px;flex-shrink:1}.stoma-card-modal__body[_ngcontent-%COMP%]{padding:24px 24px 0;flex:1;overflow-y:auto}.stoma-card-modal__footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:16px;padding:16px 24px;flex-shrink:0}.stoma-card-modal__change-date[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between}.add-stoma[_ngcontent-%COMP%]{margin-top:36px;padding:4px 0}.add-stoma[lu-button-link][_ngcontent-%COMP%]{font-weight:600}  .add-stoma{--lu-button-text: #2C8DC4 !important}.form__group--date[_ngcontent-%COMP%]     lu-calendar-next .lu-button-wrapper lu-svg-icon svg, .form__group--date[_ngcontent-%COMP%]     lu-calendar-previous .lu-button-wrapper lu-svg-icon svg{transform:scale(.67)!important;transform-origin:center!important}.form__group--date[_ngcontent-%COMP%]     lu-calendar-stepper lu-calendar-field-host{--lu-input-width: 220px !important}.form__group--date[_ngcontent-%COMP%]   [data-lu-control-state=error][_ngcontent-%COMP%]{padding-bottom:24px}.form__group--date[_ngcontent-%COMP%]   [data-lu-control-state=error][_ngcontent-%COMP%]   lu-form-message[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:max-content}.wrap[_ngcontent-%COMP%]{height:calc(100% - 88px);overflow:auto}.stoma-watch-wrapper[_ngcontent-%COMP%]{position:relative;border:1px solid #e6e6e6;border-radius:4px;display:flex;flex-direction:column;overflow:hidden}.stoma-watch-wrapper[_ngcontent-%COMP%]:not(:last-child){margin-bottom:16px}.stoma-watch-wrapper[_ngcontent-%COMP%]   .delete-stoma[_ngcontent-%COMP%]{position:absolute;top:4px;right:32px;z-index:1}.stoma-watch-wrapper[_ngcontent-%COMP%]   .delete-stoma[_ngcontent-%COMP%]   .lu-button-content[_ngcontent-%COMP%]{display:none}.stoma-watch-wrapper[_ngcontent-%COMP%]     .delete-stoma>div:nth-child(1)>span:nth-child(3){min-width:12px!important}.stoma-watch__header[_ngcontent-%COMP%]{padding:0 8px;background:#f2f2f2;display:flex;align-items:stretch}.stoma-watch__header[_ngcontent-%COMP%]     .lu-text-left{display:flex;align-items:flex-start;align-self:stretch;padding:5px 4px;border-radius:4px;margin-right:-8px;min-width:32px;cursor:pointer;transition:background .2s}.stoma-watch__header[_ngcontent-%COMP%]     .lu-text-left:hover{background:#dbf2fa}.stoma-watch__header[_ngcontent-%COMP%]     .lu-text{padding:6px 0!important}.stoma-watch__header[_ngcontent-%COMP%]     .lu-text{padding:6px 0}.stoma-watch__title[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:0!important;padding-right:73px;font-size:13px;color:#757575;line-height:20px;cursor:default}.stoma-watch__title[_ngcontent-%COMP%]   .stoma-name[_ngcontent-%COMP%]{font-size:15px;font-weight:600;line-height:24px;color:#333}.stoma-watch__title[_ngcontent-%COMP%]   .stoma-kind[_ngcontent-%COMP%], .stoma-watch__title[_ngcontent-%COMP%]   .stoma-date[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.stoma-watch__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;padding:16px;background:#fafafa}@media (max-width: 600px){.stoma-watch__body[_ngcontent-%COMP%]   .form__group[_ngcontent-%COMP%]:not(:last-child){margin-bottom:16px;border-bottom:1px solid #d9d9d9}}.stoma-watch[_ngcontent-%COMP%]   .disabled-block[_ngcontent-%COMP%]{background:#f2f2f2}.stoma-watch__check-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.stoma-watch__check-wrap[_ngcontent-%COMP%]     lu-checkbox[data-lu-checked=false][data-lu-disabled=true] .lu-checkbox{background-color:#f2f2f2!important}.stoma-watch__check-wrap[_ngcontent-%COMP%]   app-info-icon[_ngcontent-%COMP%]{color:#b3b3b3}@media (max-width: 600px){.stoma-watch__check-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:normal;gap:4px;padding-bottom:12px}.stoma-watch__check-wrap[_ngcontent-%COMP%]   app-info-icon[_ngcontent-%COMP%]{color:#38a1d6}.stoma-watch__check-wrap[_ngcontent-%COMP%]   .info-with-text[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:8px;color:#38a1d6}}@media (min-width: 600px) and (max-width: 960px){.stoma-watch__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding:8px 0 16px 24px!important}.stoma-watch__content[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{width:112px}}.stoma-watch__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding:8px 0 0 24px}.stoma-watch__content[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{width:112px}.stoma-watch[_ngcontent-%COMP%]   .warning-wrapper[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;padding:12px 16px 16px;background:#fafafa}.stoma-watch[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{background-color:#ffefd3;padding:12px;border-radius:3px;position:static}.stoma-watch[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]     .lu-form-message{color:#000c!important}.stoma-watch[_ngcontent-%COMP%]   .stoma-watch.has-warning[_ngcontent-%COMP%]   .stoma-watch__header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:20;background:#f2f2f2}.stoma-watch[_ngcontent-%COMP%]   .stoma-watch.has-warning[_ngcontent-%COMP%]   .warning-wrapper[_ngcontent-%COMP%]{top:56px;z-index:15}.loader-wrapper[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:rgba(var(--lu-black-rgb-100),.5);z-index:100}.loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px solid #fff;border-bottom-color:transparent;border-radius:50%;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{to{transform:rotate(360deg)}}"]
  });
  const Ko = class {
    constructor(It) {
      this.modalService = It, this.dataStream$ = new t.X(null), this.refreshStream$ = new t.X(null), this.modalDestroy$ = null;
    }
    registry(It) {
      this.config = It;
    }
    openModal(It, At, _n, it, _e, gt) {
      if (!this.config) return void console.error("[StomaCardModalHelper]: Ошибка открытия модального окна, отсутствует конфиг.");
      if (this.config.list !== gt) return void console.error(`[StomaCardModalHelper]: \u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430, \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433, \u0442\u0435\u043a\u0443\u0449\u0438\u0439 - ${this.config.list} \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f ${gt}`);
      const ni = this.config.getListComponent();
      ni ? (this.modalDestroy$ && (this.modalDestroy$.next(), this.modalDestroy$.complete()), this.modalDestroy$ = new e.x(), this.refreshStream$.pipe((0, a.h)(Er => Er === this.config.list), (0, m.R)(this.modalDestroy$), (0, m.R)(this.config.destroy$)).subscribe(() => {
        this.config.customReloadListFn ? this.config.customReloadListFn() : ni.onReload();
      }), ni.model$.pipe((0, m.R)(this.modalDestroy$), (0, m.R)(this.config.destroy$)).subscribe(Er => this.handleListChange(Er)), this.cacheData = {
        currentEntityId: It.entityId,
        currentIsTablet: _n,
        currentUserInfo: it,
        currentPatient: _e,
        currentDateRangeWidgetValue: At
      }, this.updateDataStreamIfChanged({
        currentUser: this.cacheData.currentUserInfo,
        selectedPatient: this.cacheData.currentPatient,
        dateRangeWidgetValue: At || new Date(),
        isTablet: this.cacheData.currentIsTablet,
        actionData: It
      }), this.modalService.open(new d.X(zi), {
        data: {
          stream$: this.dataStream$,
          refresh: {
            $stream: this.refreshStream$,
            targetList: gt
          }
        },
        panelClass: [_n ? "full-screen-modal" : void 0, "stoma-card-modal"].filter(Boolean),
        width: "768px",
        maxWidth: "100%",
        height: "calc(100% - (48px + 36px))"
      }).afterClose().subscribe(() => {
        this.modalDestroy$.next(), this.modalDestroy$.complete(), this.cacheData = void 0, this.dataStream$.next(null), this.refreshStream$.next(null);
      })) : console.warn(`[StomaCardModalHelper]: \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ${this.config.list} (\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043d\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d)`);
    }
    handleListChange(It) {
      const At = It?.state?.list?.data?.items?.find(it => it.entityId === this.cacheData?.currentEntityId);
      At && this.updateDataStreamIfChanged({
        actionData: At,
        selectedPatient: this.cacheData.currentPatient,
        dateRangeWidgetValue: this.cacheData.currentDateRangeWidgetValue,
        isTablet: this.cacheData.currentIsTablet,
        currentUser: this.cacheData.currentUserInfo
      });
    }
    updateDataStreamIfChanged(It) {
      const At = this.dataStream$.getValue();
      At && (At.dateRangeWidgetValue ? Y()(At.dateRangeWidgetValue).format("YYYY-MM-DD") : null) === (It.dateRangeWidgetValue ? Y()(It.dateRangeWidgetValue).format("YYYY-MM-DD") : null) && At.selectedPatient?.actualPatientId === It.selectedPatient?.actualPatientId && At.currentUser?.id === It.currentUser?.id && At.isTablet === It.isTablet && (0, Xt.isEqual)(At.actionData?.data?.stomas, It.actionData?.data?.stomas) || this.dataStream$.next(It);
    }
  };
  let Io = Ko;
  Ko.ɵfac = function (At) {
    return new (At || Ko)(q.LFG(Ze.ap));
  }, Ko.ɵprov = q.Yz7({
    token: Ko,
    factory: Ko.ɵfac,
    providedIn: "root"
  });
});
