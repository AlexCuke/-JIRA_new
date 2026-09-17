// Extracted from main; webpack module 72948. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    P: () => O
  });
  var t = i(63900),
    e = i(66425);
  class a {
    constructor(v) {
      this.medicalEntry = v, this.composition = this.medicalEntry.getRoot().getComposition();
    }
    setInitialValues(v, f) {
      const E = "карта_наблюдения_за_пациентом_со_стомой.карта_наблюдения_за_пациентом_со_стомой",
        h = new Date(f.careStartDate),
        [x, u] = f.careStartTime.split(":").map(Number);
      h.setHours(x, u, 0, 0), this.composition.get(`${E}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0434\u0430\u0442\u0430_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f.\u0434\u0430\u0442\u0430_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f`).setValue((0, e.Z)(h, "yyyy-MM-dd")), this.composition.get(`${E}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0434\u0430\u0442\u0430_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438`).setValue((0, e.Z)(h, "yyyy-MM-dd")), this.composition.get(`${E}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0432\u0440\u0435\u043c\u044f_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438`).setValue((0, e.Z)(h, "HH:mm"));
      const R = `${E}.\u0432\u0438\u0434_\u0441\u0442\u043e\u043c\u044b.\u0432\u0438\u0434_\u0441\u0442\u043e\u043c\u044b`;
      this.composition.get(`${R}.\u0432\u0438\u0434_\u0441\u0442\u043e\u043c\u044b`).setValue(f.stomaType), f.stomaName && this.composition.get(`${R}.\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435_\u0441\u0442\u043e\u043c\u044b`).setValue(f.stomaName), f.stomaSize && this.composition.get(`${R}.\u0440\u0430\u0437\u043c\u0435\u0440`).setValue(f.stomaSize.replace(",", "."));
      const B = `${E}.\u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u043e_\u0432\u0440\u0430\u0447\u0435_\u0438_\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439_\u0441\u0435\u0441\u0442\u0440\u0435`;
      if (f.doctor?.id) {
        const y = this.composition.get(`${B}.\u0444\u0438\u043e_\u0432\u0440\u0430\u0447\u0430.\u0444\u0438\u043e_\u0432\u0440\u0430\u0447\u0430.\u0444\u0438\u043e_\u0432\u0440\u0430\u0447\u0430`);
        y.setValue(f.doctor.fio), y.setCode(f.doctor.id.toString());
      }
      if (f.currentUser?.id) {
        const y = this.composition.get(`${B}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439_\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439_\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439_\u0441\u0435\u0441\u0442\u0440\u044b`),
          j = [f.currentUser?.lastName, f.currentUser?.firstName, f.currentUser?.secondName].filter(Boolean).join(" ");
        y.setValue(j), y.setCode(f.currentUser.id.toString());
      }
      this.setCareCaseId(v), this.setTechnicalInfo(), this.composition.save();
    }
    setCareCaseId(v) {
      this.composition.getContext().get("подробности_контекста.ид_события").setIdentifier({
        id: v,
        assigner: "hospital",
        issuer: "hospital",
        type: "medical-entry"
      });
    }
    setTechnicalInfo() {
      this.composition.get("composer").setValue({
        id: "Hospital",
        namespace: "Hospital",
        scheme: "Hospital",
        name: "Alexander Ziborov"
      });
    }
  }
  var m = i(97215);
  class d {
    constructor(v, f) {
      this.medicalEntry = v, this.store = f, this.basePath = "карта_наблюдения_за_пациентом_со_стомой.карта_наблюдения_за_пациентом_со_стомой", this.clusterPath = {
        bandage: `${this.basePath}.\u0441\u043c\u0435\u043d\u0430_\u043f\u043e\u0432\u044f\u0437\u043a\u0438.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[*]`,
        replacement: `${this.basePath}.\u0447\u0430\u0441\u0442\u0438\u0447\u043d\u0430\u044f_\u0437\u0430\u043c\u0435\u043d\u0430_\u0441\u0438\u0441\u0442\u0435\u043c\u044b.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[*]`,
        treatment: `${this.basePath}.\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430_\u043a\u043e\u0436\u043d\u044b\u0445_\u043f\u043e\u043a\u0440\u043e\u0432\u043e\u0432_\u0432\u043e\u043a\u0440\u0443\u0433_\u0441\u0442\u043e\u043c\u044b.any_event.\u043a\u043e\u0436\u0430[*]`,
        inflammation: `${this.basePath}.\u0432\u043e\u0441\u043f\u0430\u043b\u0435\u043d\u0438\u0435_\u0441\u043b\u0438\u0437\u0438\u0441\u0442\u043e\u0439_\u0432_\u043c\u0435\u0441\u0442\u0435_\u0441\u0442\u043e\u044f\u043d\u0438\u044f_\u0441\u0442\u043e\u043c\u044b.any_event.\u0441\u043b\u0438\u0437\u0438\u0441\u0442\u0430\u044f[*]`,
        excretion: `${this.basePath}.\u043d\u0430\u043b\u0438\u0447\u0438\u0435_\u043e\u0442\u0434\u0435\u043b\u044f\u0435\u043c\u043e\u0433\u043e.\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440[*]`,
        disorder: `${this.basePath}.\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c_\u0441\u0442\u043e\u043c\u044b_\u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0430[*]`,
        complaint: `${this.basePath}.\u0436\u0430\u043b\u043e\u0431\u044b_\u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430.\u0436\u0430\u043b\u043e\u0431\u044b[*]`,
        additionalInfo: `${this.basePath}.\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440[*]`
      }, this.userData = null, this.isNurseJob = !1, this.notModifiedNodes = ["_uid", "_link", "language", "territory", "category", "composer", "context"], this.notModifiedInnerNodes = ["дата_и_время", "language", "encoding"], this.innerCompositionKey = "карта_наблюдения_за_пациентом_со_стомой", this.composition = this.medicalEntry.getRoot().getComposition(), this.store.select(m.S8).subscribe(E => {
        this.userData = E;
        const h = this.userData?.jobTitle?.name?.toLowerCase() ?? "";
        this.isNurseJob = h.includes("медицинская сестра") || h.includes("медицинский брат");
      });
    }
    getCluster(v) {
      return this.medicalEntry.getRoot().getComposition().get(v);
    }
    setValues(v, f, E, h) {
      console.log("ДАННЫЕН В КОМПОЗИЦИИ: ", v, f, E, h), f && this.setLink(f), h && this.clearComposition();
      const x = `${this.basePath}.\u0432\u0438\u0434_\u0441\u0442\u043e\u043c\u044b.\u0432\u0438\u0434_\u0441\u0442\u043e\u043c\u044b`;
      if (this.composition.get(`${x}.\u0432\u0438\u0434_\u0441\u0442\u043e\u043c\u044b`).setValue(v.stoma?.stomaKind), v.stoma.stomaName && this.composition.get(`${x}.\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435_\u0441\u0442\u043e\u043c\u044b`).setValue(v.stoma.stomaName), v.stoma.stomaSize && this.composition.get(`${x}.\u0440\u0430\u0437\u043c\u0435\u0440`).setValue(v.stoma.stomaSize.replace(",", ".")), "create" === E) {
        const B = v.installDate.split("T")[0],
          y = v.installDate.split("T")[1].slice(0, 5);
        this.composition.get(`${this.basePath}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0434\u0430\u0442\u0430_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438`).setValue(B), this.composition.get(`${this.basePath}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0432\u0440\u0435\u043c\u044f_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438`).setValue(y);
      }
      this.composition.get(`${this.basePath}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f.\u0434\u0430\u0442\u0430_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f.\u0434\u0430\u0442\u0430_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f`).setValue(v.observationDate);
      const u = `${this.basePath}.\u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u043e_\u0432\u0440\u0430\u0447\u0435_\u0438_\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439_\u0441\u0435\u0441\u0442\u0440\u0435`,
        T = this.composition.get(`${u}.\u0444\u0438\u043e_\u0432\u0440\u0430\u0447\u0430.\u0444\u0438\u043e_\u0432\u0440\u0430\u0447\u0430.\u0444\u0438\u043e_\u0432\u0440\u0430\u0447\u0430`),
        R = this.composition.get(`${u}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439_\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439_\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439_\u0441\u0435\u0441\u0442\u0440\u044b`);
      this.isNurseJob ? (T.setValue(v.selectedDoctor.name), T.setCode(v.selectedDoctor.id)) : (T.setValue(`${this.userData.lastName} ${this.userData.firstName} ${this.userData.secondName}`), T.setCode(this.userData.employeeId)), R.setValue(`${this.userData.lastName} ${this.userData.firstName} ${this.userData.secondName}`), R.setCode(this.userData.employeeId), this.watchStoma(v), v?.deleteStoma?.check && this.deleteStoma(v), v?.finishStoma?.check && this.finishStoma(v), f && E && this.setCareCaseId(v.careCase), this.composition.save();
    }
    setCareCaseId(v) {
      this.composition.getContext().get("подробности_контекста.ид_события").setIdentifier({
        id: v,
        assigner: "hospital",
        issuer: "hospital",
        type: "medical-entry"
      });
    }
    setLink(v) {
      this.composition.getLinks()?.some(h => h.getValue()?.target === `ehr:compositions/${v}`) || this.composition.addLink().setValue({
        meaning: "Ссылка на протокол",
        type: "EHR",
        target: `ehr:compositions/${v}`
      });
    }
    watchStoma(v) {
      const f = `${this.userData.lastName} ${this.userData.firstName} ${this.userData.secondName}`;
      if (v.bandage?.check && !Array.isArray(v.bandage.details)) {
        const E = this.getCluster(this.clusterPath.bandage);
        E.get("дата_смены_повязки.дата_смены_повязки").setValue(v.observationDate), E.get("дата_смены_повязки.время_смены_повязки").setValue(v.bandage.time), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(f), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (v.bandage?.check && Array.isArray(v.bandage?.details)) for (const E of v.bandage.details) {
        const h = this.getCluster(this.clusterPath.bandage),
          x = E?.дата_смены_повязки?.время_смены_повязки ?? E?.time,
          u = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? f,
          T = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId;
        h.get("дата_смены_повязки.дата_смены_повязки").setValue(v.observationDate), h.get("дата_смены_повязки.время_смены_повязки").setValue(x), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(u), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(T);
      }
      if (v.replacement?.check && !Array.isArray(v.replacement?.details)) {
        const E = this.getCluster(this.clusterPath.replacement);
        E.get("дата_частичной_замены_системы.дата_частичной_замены").setValue(v.observationDate), E.get("дата_частичной_замены_системы.время_частичной_замены").setValue(v.replacement.time), E.get("устройство.устройство").setValue(v.replacement.device), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(f), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (v.replacement?.check && Array.isArray(v.replacement?.details)) for (const E of v.replacement.details) {
        const h = this.getCluster(this.clusterPath.replacement),
          x = E?.дата_частичной_замены_системы?.время_частичной_замены ?? E?.time,
          u = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? f,
          T = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId,
          R = E?.устройство?.устройство ?? null;
        h.get("дата_частичной_замены_системы.дата_частичной_замены").setValue(v.observationDate), h.get("дата_частичной_замены_системы.время_частичной_замены").setValue(x), R && h.get("устройство.устройство").setValue(v.replacement.device), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(u), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(T);
      }
      if (v.treatment?.check && !Array.isArray(v.treatment?.details)) {
        const E = this.getCluster(this.clusterPath.treatment);
        E.get("дата_обработки.дата_обработки").setValue(v.observationDate), E.get("дата_обработки.время_обработки").setValue(v.treatment.time), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(f), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (v.treatment?.check && Array.isArray(v.treatment?.details)) for (const E of v.treatment.details) {
        const h = this.getCluster(this.clusterPath.treatment),
          x = E?.дата_обработки?.время_обработки ?? E?.time,
          u = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? f,
          T = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId;
        h.get("дата_обработки.дата_обработки").setValue(v.observationDate), h.get("дата_обработки.время_обработки").setValue(x), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(u), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(T);
      }
      if (v.inflammation?.check && !Array.isArray(v.inflammation?.details)) {
        const E = this.getCluster(this.clusterPath.inflammation);
        E.get("дата_воспаления.дата_воспаления").setValue(v.observationDate), E.get("дата_воспаления.время_воспаления").setValue(v.inflammation.time), E.get("описание_воспаления").setValue(v.inflammation.desc), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(f), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (v.inflammation?.check && Array.isArray(v.inflammation?.details)) for (const E of v.inflammation.details) {
        const h = this.getCluster(this.clusterPath.inflammation),
          x = E?.дата_воспаления?.время_воспаления ?? E?.time,
          u = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? f,
          T = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId,
          R = E?.описание_воспаления ?? null;
        h.get("дата_воспаления.дата_воспаления").setValue(v.observationDate), h.get("дата_воспаления.время_воспаления").setValue(x), R && h.get("описание_воспаления").setValue(v.inflammation.desc), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(u), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(T);
      }
      if (v.excretion?.check && !Array.isArray(v.excretion?.details)) {
        const E = this.getCluster(this.clusterPath.excretion);
        E.get("дата_отделяемого.дата_отделяемого").setValue(v.observationDate), E.get("дата_отделяемого.время_отделяемого").setValue(v.excretion.time), E.get("отделяемое_из_уретры.характер_отделяемого").setValue(v.excretion.desc), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(f), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (v.excretion?.check && Array.isArray(v.excretion?.details)) for (const E of v.excretion.details) {
        const h = this.getCluster(this.clusterPath.excretion),
          x = E?.дата_отделяемого?.время_отделяемого ?? E?.time,
          u = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? f,
          T = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId,
          R = E?.отделяемое_из_уретры?.характер_отделяемого ?? null;
        h.get("дата_отделяемого.дата_отделяемого").setValue(v.observationDate), h.get("дата_отделяемого.время_отделяемого").setValue(x), R && h.get("отделяемое_из_уретры.характер_отделяемого").setValue(R), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(u), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(T);
      }
      if (v.disorder?.check && !Array.isArray(v.disorder?.details)) {
        const E = this.getCluster(this.clusterPath.disorder);
        E.get("дата.дата_нарушения_функциональности_стомы").setValue(v.observationDate), E.get("дата.время_нарушения_функциональности_стомы").setValue(v.disorder.time), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(f), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (v.disorder?.check && Array.isArray(v.disorder?.details)) for (const E of v.disorder.details) {
        const h = this.getCluster(this.clusterPath.disorder),
          x = E?.дата?.время_нарушения_функциональности_стомы ?? E?.time,
          u = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? f,
          T = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId;
        h.get("дата.дата_нарушения_функциональности_стомы").setValue(v.observationDate), h.get("дата.время_нарушения_функциональности_стомы").setValue(x), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(u), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(T);
      }
      if (v.complaint?.check && !Array.isArray(v.complaint?.details)) {
        const E = this.getCluster(this.clusterPath.complaint);
        E.get("дата_жалобы.дата_жалобы").setValue(v.observationDate), E.get("дата_жалобы.время_жалобы").setValue(v.complaint.time), E.get("описание_жалобы").setValue(v.complaint.desc), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(f), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (v.complaint?.check && Array.isArray(v.complaint?.details)) for (const E of v.complaint.details) {
        const h = this.getCluster(this.clusterPath.complaint),
          x = E?.дата_жалобы?.время_жалобы ?? E?.time,
          u = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? f,
          T = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId,
          R = E?.описание_жалобы ?? null;
        h.get("дата_жалобы.дата_жалобы").setValue(v.observationDate), h.get("дата_жалобы.время_жалобы").setValue(x), R && h.get("описание_жалобы").setValue(v.complaint.desc), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(u), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(T);
      }
      if (v.addInfo?.check && !Array.isArray(v.addInfo?.details)) {
        const E = this.getCluster(this.clusterPath.additionalInfo);
        E.get("дата_и_время.дата_дополнительной_информации").setValue(v.observationDate), E.get("дата_и_время.время_дополнительной_информации").setValue(v.addInfo.time), E.get("описание_дополнительной_информации.описание_дополнительной_информации").setValue(v.addInfo.desc), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(f), E.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(this.userData.employeeId);
      }
      if (v.addInfo?.check && Array.isArray(v.addInfo?.details)) for (const E of v.addInfo.details) {
        const h = this.getCluster(this.clusterPath.additionalInfo),
          x = E?.дата_и_время?.время_дополнительной_информации ?? E?.time,
          u = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.value ?? f,
          T = E?.фио_сотрудника?.фио_сотрудника?.фио_сотрудника?.code ?? this.userData.employeeId,
          R = E?.описание_дополнительной_информации?.описание_дополнительной_информации ?? null;
        h.get("дата_и_время.дата_дополнительной_информации").setValue(v.observationDate), h.get("дата_и_время.время_дополнительной_информации").setValue(x), R && h.get("описание_дополнительной_информации.описание_дополнительной_информации").setValue(v.addInfo.desc), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setValue(u), h.get("фио_сотрудника.фио_сотрудника.фио_сотрудника").setCode(T);
      }
    }
    deleteStoma(v) {
      const f = `${this.basePath}.\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435_\u0441\u0442\u043e\u043c\u044b`,
        E = this.composition.get(`${f}.\u0444\u0438\u043e_\u0432\u0440\u0430\u0447\u0430.\u0444\u0438\u043e_\u0432\u0440\u0430\u0447\u0430`);
      if (this.composition.get(`${f}.\u0434\u0430\u0442\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.\u0434\u0430\u0442\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f`).setValue(v.observationDate), this.composition.get(`${f}.\u0434\u0430\u0442\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.\u0432\u0440\u0435\u043c\u044f_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f`).setValue(v.deleteStoma.time), this.composition.get(`${f}.\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f`).setValue(v.deleteStoma.reason), this.composition.get(`${f}.\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.\u043e\u0441\u043b\u043e\u0436\u043d\u0435\u043d\u0438\u0435`).setValue(v.deleteStoma.complication), this.isNurseJob) {
        const h = this.composition.get(`${f}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`);
        E.setValue(v.selectedDoctor.name), E.setCode(v.selectedDoctor.id), h.setValue(`${this.userData.lastName} ${this.userData.firstName} ${this.userData.secondName}`), h.setCode(this.userData.employeeId);
      } else E.setValue(`${this.userData.lastName} ${this.userData.firstName} ${this.userData.secondName}`), E.setCode(this.userData.employeeId);
    }
    finishStoma(v) {
      const f = `${this.basePath}.\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u043c.any_event`,
        E = `${f}.\u0434\u0430\u0442\u0430_\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f_\u0443\u0445\u043e\u0434\u0430`,
        h = this.composition.get(`${f}.\u0444\u0438\u043e_\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430`);
      this.composition.get(`${E}.\u0434\u0430\u0442\u0430_\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f_\u0443\u0445\u043e\u0434\u0430`).setValue(v.observationDate), this.composition.get(`${E}.\u0432\u0440\u0435\u043c\u044f_\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f_\u0443\u0445\u043e\u0434\u0430`).setValue(v.finishStoma.time), this.composition.get(`${f}.\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439`).setValue(v.finishStoma.comment), h.setValue(`${this.userData.lastName} ${this.userData.firstName} ${this.userData.secondName}`), h.setCode(this.userData.employeeId);
    }
    clearComposition() {
      const v = this.composition.getData();
      v && (Object.keys(v).filter(f => !this.notModifiedNodes.includes(f)).forEach(f => {
        if (f === this.innerCompositionKey) {
          const E = v[f];
          Array.isArray(E) && E[0] && Object.keys(E[0]).filter(h => !this.notModifiedInnerNodes.includes(h)).forEach(h => {
            E[0][h] = [null];
          });
        } else v[f] = [null];
      }), this.composition.save());
    }
  }
  var M = i(94650),
    b = i(80529),
    A = i(41025),
    N = i(40891),
    I = i(89653);
  const L = class {
    constructor(v, f, E, h) {
      this.http = v, this.keycloak = f, this.ehrService = E, this.store = h;
    }
    getEhr(v) {
      return this.ehrService.getEhr(v);
    }
    getComposition(v) {
      return this.http.get(`/ehrGateway/api/rest/v1/composition/${v}`, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`,
          "X-AUTHENTICATION-TOKEN": "YWRtaW4kJCQxMDB8MjAyNS0wNS0wNVQyMTozNzo1My44MTE4MTJ8ODNhODZjOGQ5MDY0ZDc2NDViNjc3YWI3ZTk5YjVjNTc="
        }
      });
    }
    getCompositionNew(v) {
      return this.http.get(`gateway/ehr-db/api/rest/v1/composition/${v}`, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`,
          "X-AUTHENTICATION-TOKEN": "YWRtaW4kJCQxMDB8MjAyNS0wNS0wNVQyMTozNzo1My44MTE4MTJ8ODNhODZjOGQ5MDY0ZDc2NDViNjc3YWI3ZTk5YjVjNTc="
        }
      });
    }
    createStomaObservationCardDocument(v, f, E) {
      return v.createMedicalEntry("card_patient_with_stoma", f).pipe((0, t.w)(h => (new a(h).setInitialValues(f, E), h.save())));
    }
    createStomaChildDocument(v, f, E, h) {
      return v.createMedicalEntry("card_patient_with_stoma", f).pipe((0, t.w)(x => (new d(x, this.store).setValues(E, h, "create"), E?.finishStoma?.check ? (console.log("Из сервиса create: Подписываем композицию", E?.finishStoma?.check), x.sign()) : (console.log("Из сервиса create: Сохраняем композицию", E?.finishStoma?.check), x.save()))));
    }
    updateStomaDocument(v, f, E, h, x) {
      return v.getMedicalEntry(f).pipe((0, t.w)(u => (new d(u, this.store).setValues(E, h, void 0, x), E?.finishStoma?.check ? (console.log("Из сервиса update: Подписываем композицию", E?.finishStoma?.check), u.sign()) : (console.log("Из сервиса update: Сохраняем композицию", E?.finishStoma?.check), u.save()))));
    }
    deleteStomaDocument(v, f) {
      return v.getMedicalEntry(f).pipe((0, t.w)(E => E.delete()));
    }
  };
  let O = L;
  L.ɵfac = function (f) {
    return new (f || L)(M.LFG(b.eN), M.LFG(A.M), M.LFG(N.r), M.LFG(I.yh));
  }, L.ɵprov = M.Yz7({
    token: L,
    factory: L.ɵfac,
    providedIn: "root"
  });
});
