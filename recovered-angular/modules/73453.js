// Extracted from main; webpack module 73453. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    P: () => W,
    z: () => F
  });
  var t = i(71764),
    e = i.n(t),
    a = i(63900),
    m = i(39646),
    d = i(50802),
    M = i(95698);
  class b {
    constructor(ye, ae, Y) {
      this.medicalEntry = ye, this.userContext = ae, this.existingChild = Y, this.basePath = "карта_наблюдения_за_пациентом_с_назогастральным_зондом", this.tubePath = `${this.basePath}.\u043a\u0430\u0440\u0442\u0430_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f_\u0437\u0430_\u043d\u0430\u0437\u043e\u0433\u0430\u0441\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u043c_\u0437\u043e\u043d\u0434\u043e\u043c`, this.clusterPath = {
        replacement: `${this.tubePath}.\u0437\u0430\u043c\u0435\u043d\u0430_\u0437\u043e\u043d\u0434\u0430[*]`,
        nasalTreatment: `${this.tubePath}.\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430_\u043d\u043e\u0441\u043e\u0432\u044b\u0445_\u0445\u043e\u0434\u043e\u0432[*]`,
        inflammation: `${this.tubePath}.\u0432\u043e\u0441\u043f\u0430\u043b\u0435\u043d\u0438\u0435_\u0441\u043b\u0438\u0437\u0438\u0441\u0442\u043e\u0439_\u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438[*]`,
        bandage: `${this.tubePath}.\u0441\u043c\u0435\u043d\u0430_\u043f\u043e\u0432\u044f\u0437\u043a\u0438_\u0434\u043b\u044f_\u0444\u0438\u043a\u0441\u0430\u0446\u0438\u0438_\u0437\u043e\u043d\u0434\u0430[*]`,
        complaint: `${this.tubePath}.\u0436\u0430\u043b\u043e\u0431\u044b_\u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430[*]`,
        additionalInfo: `${this.tubePath}.\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f_\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f[*]`,
        nutrition: `${this.tubePath}.\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b_\u044d\u043d\u0442\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e_\u043f\u0438\u0442\u0430\u043d\u0438\u044f.\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b_\u044d\u043d\u0442\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e_\u043f\u0438\u0442\u0430\u043d\u0438\u044f[*]`
      }, this.userData = {
        empFio: "",
        empId: ""
      }, ye && (this.composition = this.medicalEntry.getRoot().getComposition()), Y && (this.composition = this.existingChild.getComposition()), this.userContext.getUserContext().pipe((0, M.q)(1)).subscribe(G => {
        this.userData = {
          empFio: `${G.lastName} ${G.firstName} ${G.secondName}`,
          empId: G.employeeId.toString()
        };
      });
    }
    getCluster(ye) {
      return this.composition.get(ye);
    }
    setValues(ye, ...ae) {
      const [Y = !1, G] = ae;
      Y && (this.setLink(G), this.setCareCaseId(ye.careCaseId)), this.composition.get(`${this.tubePath}.\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f.\u0434\u0430\u0442\u0430.\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f`).setValue(ye.observationDate), this.watchTube(ye), this.deleteTube(ye), this.finishTube(ye), Y && this.setCareCaseId(ye.careCaseId), this.composition.save();
    }
    setCareCaseId(ye) {
      this.composition.getContext().get("подробности_контекста.ид_события").setIdentifier({
        id: ye,
        assigner: "hospital",
        issuer: "hospital",
        type: "medical-entry"
      });
    }
    setLink(ye) {
      this.composition.addLink().setValue({
        meaning: "Ссылка на протокол",
        type: "EHR",
        target: `ehr:compositions/${ye}`
      });
    }
    watchTube(ye) {
      if (ye.replacement.check) {
        const ae = this.getCluster(this.clusterPath.replacement),
          Y = "подробности_о_процедуре";
        ae.get(`${Y}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0437\u0430\u043c\u0435\u043d\u044b_\u0437\u043e\u043d\u0434\u0430.\u0434\u0430\u0442\u0430_\u0437\u0430\u043c\u0435\u043d\u044b_\u0437\u043e\u043d\u0434\u0430`).setValue(ye.observationDate), ae.get(`${Y}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0437\u0430\u043c\u0435\u043d\u044b_\u0437\u043e\u043d\u0434\u0430.\u0432\u0440\u0435\u043c\u044f_\u0437\u0430\u043c\u0435\u043d\u044b_\u0437\u043e\u043d\u0434\u0430`).setValue(ye.replacement.time), ae.get(`${Y}.\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e.\u0440\u0430\u0437\u043c\u0435\u0440_\u0437\u043e\u043d\u0434\u0430`).setValue(ye.replacement.size), ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(this.userData.empFio), ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(this.userData.empId);
      }
      if (ye.nasalTreatment.check) {
        const ae = this.getCluster(this.clusterPath.nasalTreatment),
          Y = "подробности_о_процедуре";
        ae.get(`${Y}.\u0434\u0430\u0442\u0430_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438.\u0434\u0430\u0442\u0430_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438`).setValue(ye.observationDate), ae.get(`${Y}.\u0434\u0430\u0442\u0430_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438.\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438`).setValue(ye.nasalTreatment.time), ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(this.userData.empFio), ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(this.userData.empId);
      }
      if (ye.inflammation.check) {
        const ae = this.getCluster(this.clusterPath.inflammation),
          Y = "любое_событие.слизистая",
          G = `${Y}.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435`;
        ae.get(`${G}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438.\u0434\u0430\u0442\u0430_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438`).setValue(ye.observationDate), ae.get(`${G}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438.\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438`).setValue(ye.inflammation.time), ae.get(`${Y}.\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435_\u0432\u043e\u0441\u043f\u0430\u043b\u0435\u043d\u0438\u044f`).setValue(ye.inflammation.desc), ae.get(`${G}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(this.userData.empFio), ae.get(`${G}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(this.userData.empId);
      }
      if (ye.bandage.check) {
        const ae = this.getCluster(this.clusterPath.bandage),
          Y = "подробности_о_процедуре";
        ae.get(`${Y}.\u0434\u0430\u0442\u0430_\u0441\u043c\u0435\u043d\u044b_\u043f\u043e\u0432\u044f\u0437\u043a\u0438.\u0434\u0430\u0442\u0430_\u0441\u043c\u0435\u043d\u044b_\u043f\u043e\u0432\u044f\u0437\u043a\u0438`).setValue(ye.observationDate), ae.get(`${Y}.\u0434\u0430\u0442\u0430_\u0441\u043c\u0435\u043d\u044b_\u043f\u043e\u0432\u044f\u0437\u043a\u0438.\u0432\u0440\u0435\u043c\u044f_\u0441\u043c\u0435\u043d\u044b_\u043f\u043e\u0432\u044f\u0437\u043a\u0438`).setValue(ye.bandage.time), ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(this.userData.empFio), ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(this.userData.empId);
      }
      if (ye.complaint.check) {
        const ae = this.getCluster(this.clusterPath.complaint),
          Y = "любое_событие";
        ae.get(`${Y}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0436\u0430\u043b\u043e\u0431\u044b.\u0434\u0430\u0442\u0430_\u0436\u0430\u043b\u043e\u0431\u044b`).setValue(ye.observationDate), ae.get(`${Y}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0436\u0430\u043b\u043e\u0431\u044b.\u0432\u0440\u0435\u043c\u044f_\u0436\u0430\u043b\u043e\u0431\u044b`).setValue(ye.complaint.time), ae.get(`${Y}.\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435_\u0436\u0430\u043b\u043e\u0431\u044b.\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435_\u0436\u0430\u043b\u043e\u0431\u044b`).setValue(ye.complaint.desc), ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(this.userData.empFio), ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(this.userData.empId);
      }
      if (ye.addInfo.check) {
        const ae = this.getCluster(this.clusterPath.additionalInfo),
          Y = "любое_событие",
          G = `${Y}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439_\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438`,
          te = `${Y}.\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435_\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439_\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438.\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435_\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439_\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438`;
        ae.get(`${G}.\u0434\u0430\u0442\u0430_\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439_\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438`).setValue(ye.observationDate), ae.get(`${G}.\u0432\u0440\u0435\u043c\u044f_\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439_\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438`).setValue(ye.addInfo.time), ae.get(te).setValue(ye.addInfo.desc), ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(this.userData.empFio), ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(this.userData.empId);
      }
      if (ye.nutrition.check || ye.nutritionWater.check) {
        const ae = this.getCluster(this.clusterPath.nutrition);
        if (ae.get("любое_событие.энтеральное_питание.наименование_питательной_смеси").setValue(ye.nutrition.nutrientName), ye.nutrition.fractional.check || ye.nutritionWater.fractional.check) {
          const Y = "любое_событие.энтеральное_питание.дробное_введение";
          ye.nutrition.fractional.value && (ae.get(`${Y}.\u0434\u0440\u043e\u0431\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435.\u0432\u0440\u0435\u043c\u044f_\u0434\u0440\u043e\u0431\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f.\u0432\u0440\u0435\u043c\u044f_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setValue(ye.nutrition.fractional.time), ae.get(`${Y}.\u0434\u0440\u043e\u0431\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435.\u0434\u0440\u043e\u0431\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setMagnitude(+ye.nutrition.fractional.value), ae.get(`${Y}.\u0434\u0440\u043e\u0431\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435.\u0434\u0440\u043e\u0431\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setUnit("ml")), ye.nutritionWater.fractional.value && (ae.get(`${Y}.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u0440\u043e\u0431\u043d\u043e\u0435.\u0432\u0440\u0435\u043c\u044f_\u0434\u0440\u043e\u0431\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u0432\u043e\u0434\u044b.\u0432\u0440\u0435\u043c\u044f_\u0434\u0440\u043e\u0431\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u0432\u043e\u0434\u044b`).setValue(ye.nutritionWater.fractional.time), ae.get(`${Y}.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u0440\u043e\u0431\u043d\u043e\u0435.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u0440\u043e\u0431\u043d\u043e\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setMagnitude(+ye.nutritionWater.fractional.value), ae.get(`${Y}.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u0440\u043e\u0431\u043d\u043e\u0435.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u0440\u043e\u0431\u043d\u043e\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setUnit("ml")), ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(this.userData.empFio), ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(this.userData.empId);
        }
        if (ye.nutrition.long.check || ye.nutritionWater.long.check) {
          const Y = "любое_событие.энтеральное_питание.длительное_капельное_введение";
          if (ye.nutrition.long.value) {
            const G = `${Y}.\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435_\u043a\u0430\u043f\u0435\u043b\u044c\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435`,
              te = ae.get(`${G}.\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435_\u043a\u0430\u043f\u0435\u043b\u044c\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`);
            ae.get(`${G}.\u0441.\u0432\u0440\u0435\u043c\u044f_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e_\u043a\u0430\u043f\u0435\u043b\u044c\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u0441`).setValue(ye.nutrition.long.startTime), ae.get(`${G}.\u043f\u043e.\u0432\u0440\u0435\u043c\u044f_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e_\u043a\u0430\u043f\u0435\u043b\u044c\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u043f\u043e`).setValue(ye.nutrition.long.endTime), te.setMagnitude(+ye.nutrition.long.value), te.setUnit("ml");
          }
          if (ye.nutritionWater.long.value) {
            const G = `${Y}.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435`;
            ae.get(`${G}.\u0441.\u0432\u0440\u0435\u043c\u044f_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u0432\u043e\u0434\u044b_\u0441`).setValue(ye.nutritionWater.long.startTime), ae.get(`${G}.\u043f\u043e.\u0432\u0440\u0435\u043c\u044f_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u0432\u043e\u0434\u044b_\u043f\u043e`).setValue(ye.nutritionWater.long.endTime), ae.get(`${G}.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setMagnitude(+ye.nutritionWater.long.value), ae.get(`${G}.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setUnit("ml");
          }
          ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(this.userData.empFio), ae.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(this.userData.empId);
        }
      }
    }
    deleteTube(ye) {
      if (ye.deleteTube.check) {
        const ae = `${this.basePath}.\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435_\u0437\u043e\u043d\u0434\u0430.\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435_\u0437\u043e\u043d\u0434\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435`;
        this.composition.get(`${ae}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.\u0434\u0430\u0442\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f`).setValue(ye.observationDate), this.composition.get(`${ae}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.\u0432\u0440\u0435\u043c\u044f_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f`).setValue(ye.deleteTube.time), this.composition.get(`${ae}.\u043e\u0441\u043b\u043e\u0436\u043d\u0435\u043d\u0438\u0435.\u043e\u0441\u043b\u043e\u0436\u043d\u0435\u043d\u0438\u0435`).setValue(ye.deleteTube.complication), this.composition.get(`${ae}.\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f`).setValue(ye.deleteTube.reason), this.composition.get(`${ae}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(this.userData.empFio), this.composition.get(`${ae}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(this.userData.empId);
      }
    }
    finishTube(ye) {
      if (ye.finishTube.check) {
        const ae = `${this.tubePath}.\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u043c.\u043b\u044e\u0431\u043e\u0435_\u0441\u043e\u0431\u044b\u0442\u0438\u0435`,
          Y = `${ae}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f_\u0443\u0445\u043e\u0434\u0430`,
          G = this.composition.get(`${ae}.\u0444\u0438\u043e_\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`);
        this.composition.get(`${Y}.\u0434\u0430\u0442\u0430_\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f_\u0443\u0445\u043e\u0434\u0430`).setValue(ye.observationDate), this.composition.get(`${Y}.\u0432\u0440\u0435\u043c\u044f_\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f_\u0443\u0445\u043e\u0434\u0430`).setValue(ye.finishTube.time), this.composition.get(`${ae}.\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439`).setValue(ye.finishTube.comment), G.setValue(this.userData.empFio), G.setCode(this.userData.empId);
      }
    }
  }
  var A = i(98115),
    N = i(17489);
  class I {
    constructor(ye, ae) {
      this.compositonEntry = ye, this.store = ae, this.ev = [], this.basePath = "карта_наблюдения_за_пациентом_с_назогастральным_зондом", this.tubePath = `${this.basePath}.\u043a\u0430\u0440\u0442\u0430_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f_\u0437\u0430_\u043d\u0430\u0437\u043e\u0433\u0430\u0441\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u043c_\u0437\u043e\u043d\u0434\u043e\u043c`, this.clusterPath = {
        replacement: `${this.tubePath}.\u0437\u0430\u043c\u0435\u043d\u0430_\u0437\u043e\u043d\u0434\u0430[*]`,
        nasalTreatment: `${this.tubePath}.\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430_\u043d\u043e\u0441\u043e\u0432\u044b\u0445_\u0445\u043e\u0434\u043e\u0432[*]`,
        inflammation: `${this.tubePath}.\u0432\u043e\u0441\u043f\u0430\u043b\u0435\u043d\u0438\u0435_\u0441\u043b\u0438\u0437\u0438\u0441\u0442\u043e\u0439_\u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438[*]`,
        bandage: `${this.tubePath}.\u0441\u043c\u0435\u043d\u0430_\u043f\u043e\u0432\u044f\u0437\u043a\u0438_\u0434\u043b\u044f_\u0444\u0438\u043a\u0441\u0430\u0446\u0438\u0438_\u0437\u043e\u043d\u0434\u0430[*]`,
        complaint: `${this.tubePath}.\u0436\u0430\u043b\u043e\u0431\u044b_\u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430[*]`,
        additionalInfo: `${this.tubePath}.\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f_\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f[*]`,
        nutrition: `${this.tubePath}.\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b_\u044d\u043d\u0442\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e_\u043f\u0438\u0442\u0430\u043d\u0438\u044f.\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b_\u044d\u043d\u0442\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e_\u043f\u0438\u0442\u0430\u043d\u0438\u044f[*]`
      }, this.composition = this.compositonEntry.getComposition();
    }
    setDeleteValues(ye, ae, Y) {
      const G = "['любое_событие'][0]['энтеральное_питание'][0]['наименование_питательной_смеси']",
        te = "['любое_событие'][0]['энтеральное_питание'][0]['дробное_введение'][0]['дробное_введение']",
        pe = "['любое_событие'][0]['энтеральное_питание'][0]['длительное_капельное_введение'][0]['длительное_капельное_введение']",
        be = "['любое_событие'][0]['энтеральное_питание'][0]['дробное_введение'][0]['введение_воды_дробное']",
        le = "['любое_событие'][0]['энтеральное_питание'][0]['длительное_капельное_введение'][0]['введение_воды_длительное']",
        n = A.UK.find(({
          group: Se
        }) => Se === ye);
      if ("replacement" === ye && this.composition.getMany(n.path)[Y].delete(), "nasalTreatment" === ye && this.composition.getMany(n.path)[Y].delete(), "inflammation" === ye && this.composition.getMany(n.path)[Y].delete(), "bandage" === ye && this.composition.getMany(n.path)[Y].delete(), "complaint" === ye && this.composition.getMany(n.path)[Y].delete(), "addInfo" === ye && this.composition.getMany(n.path)[Y].delete(), "nutrition" === ye) {
        if (ae.time) {
          const Se = this.composition.getMany(n.path),
            qe = Se[Y].getData();
          (0, N.get)(qe, be) || (0, N.get)(qe, le) ? ((0, N.set)(qe, G, [null]), (0, N.set)(qe, te, [null])) : Se[Y].delete();
        }
        if (ae.startTime) {
          const Se = this.composition.getMany(n.path),
            qe = Se[Y].getData();
          (0, N.get)(qe, be) || (0, N.get)(qe, le) ? ((0, N.set)(qe, G, [null]), (0, N.set)(qe, pe, [null])) : Se[Y].delete();
        }
      }
      if ("nutritionWater" === ye) {
        if (ae.time) {
          const Se = this.composition.getMany(n.path),
            qe = Se[Y].getData();
          (0, N.get)(qe, te) || (0, N.get)(qe, pe) ? (0, N.set)(qe, be, [null]) : Se[Y].delete();
        }
        if (ae.startTime) {
          const Se = this.composition.getMany(n.path),
            qe = Se[Y].getData();
          (0, N.get)(qe, te) || (0, N.get)(qe, pe) ? (0, N.set)(qe, le, [null]) : Se[Y].delete();
        }
      }
      "deleteTube" === ye && this.composition.getMany(n.path)[Y].delete(), "finishTube" === ye && this.composition.getMany(n.path)[Y].delete(), this.composition.save();
    }
    getCluster(ye) {
      return this.composition.get(ye);
    }
    reWrightNutrition(ye) {
      const ae = this.composition.getMany(ye.path);
      console.log(ae, "many"), console.log(this.ev, "ev");
      const Y = this.ev.filter(G => "nutrition" === G.group || "nutritionWater" === G.group);
      ae.forEach(G => {
        console.log(G, "m"), G.delete();
      }), Y.forEach(G => {
        "nutrition" === G.group && (G.fractional && G.fractional.forEach(te => {
          const pe = this.getCluster(this.clusterPath.nutrition),
            be = "любое_событие.энтеральное_питание.дробное_введение";
          pe.get(`${be}.\u0434\u0440\u043e\u0431\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435.\u0432\u0440\u0435\u043c\u044f_\u0434\u0440\u043e\u0431\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f.\u0432\u0440\u0435\u043c\u044f_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setValue(te.time), pe.get(`${be}.\u0434\u0440\u043e\u0431\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435.\u0434\u0440\u043e\u0431\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setMagnitude(+te.value), pe.get(`${be}.\u0434\u0440\u043e\u0431\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435.\u0434\u0440\u043e\u0431\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setUnit("ml"), pe.get(`${be}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(te.empFio), pe.get(`${be}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(te.empId);
        }), G.long && G.long.forEach(te => {
          const pe = this.getCluster(this.clusterPath.nutrition),
            be = "любое_событие.энтеральное_питание.длительное_капельное_введение",
            le = `${be}.\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435_\u043a\u0430\u043f\u0435\u043b\u044c\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435`,
            n = pe.get(`${le}.\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435_\u043a\u0430\u043f\u0435\u043b\u044c\u043d\u043e\u0435_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`);
          pe.get(`${le}.\u0441.\u0432\u0440\u0435\u043c\u044f_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e_\u043a\u0430\u043f\u0435\u043b\u044c\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u0441`).setValue(te.startTime), pe.get(`${le}.\u043f\u043e.\u0432\u0440\u0435\u043c\u044f_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e_\u043a\u0430\u043f\u0435\u043b\u044c\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u043f\u043e`).setValue(te.endTime), n.setMagnitude(+te.value), n.setUnit("ml"), pe.get(`${be}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(te.empFio), pe.get(`${be}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(te.empId);
        })), "nutritionWater" === G.group && (G.fractional && G.fractional.forEach(te => {
          const pe = this.getCluster(this.clusterPath.nutrition),
            be = "любое_событие.энтеральное_питание.дробное_введение";
          pe.get(`${be}.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u0440\u043e\u0431\u043d\u043e\u0435.\u0432\u0440\u0435\u043c\u044f_\u0434\u0440\u043e\u0431\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u0432\u043e\u0434\u044b.\u0432\u0440\u0435\u043c\u044f_\u0434\u0440\u043e\u0431\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u0432\u043e\u0434\u044b`).setValue(te.time), pe.get(`${be}.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u0440\u043e\u0431\u043d\u043e\u0435.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u0440\u043e\u0431\u043d\u043e\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setMagnitude(+te.value), pe.get(`${be}.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u0440\u043e\u0431\u043d\u043e\u0435.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u0440\u043e\u0431\u043d\u043e\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setUnit("ml"), pe.get(`${be}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(te.empFio), pe.get(`${be}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(te.empId);
        }), G.long && G.long.forEach(te => {
          const pe = this.getCluster(this.clusterPath.nutrition),
            be = "любое_событие.энтеральное_питание.длительное_капельное_введение",
            le = `${be}.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435`;
          pe.get(`${le}.\u0441.\u0432\u0440\u0435\u043c\u044f_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u0432\u043e\u0434\u044b_\u0441`).setValue(te.startTime), pe.get(`${le}.\u043f\u043e.\u0432\u0440\u0435\u043c\u044f_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f_\u0432\u043e\u0434\u044b_\u043f\u043e`).setValue(te.endTime), pe.get(`${le}.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setMagnitude(+te.value), pe.get(`${le}.\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0432\u043e\u0434\u044b_\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435.\u043e\u0431\u044a\u0451\u043c_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f`).setUnit("ml"), pe.get(`${be}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(te.empFio), pe.get(`${be}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(te.empId);
        }));
      });
    }
  }
  class O {
    constructor(ye) {
      this.medicalEntry = ye, this.composition = this.medicalEntry.getRoot().getComposition();
    }
    setInitialValues(ye, ae) {
      const Y = "карта_наблюдения_за_пациентом_с_назогастральным_зондом.установка_зонда.установка_зонда.подробности_о_процедуре";
      this.composition.get(`${Y}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438.\u0434\u0430\u0442\u0430_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438`).setValue(ae.date), this.composition.get(`${Y}.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438.\u0432\u0440\u0435\u043c\u044f_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438`).setValue(ae.time), this.composition.get(`${Y}.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e\u0431_\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.\u0440\u0430\u0437\u043c\u0435\u0440_\u0437\u043e\u043d\u0434\u0430`).setValue(ae.tubeSize), this.composition.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setValue(ae.empFio), this.composition.get(`${Y}.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b.\u0444\u0438\u043e_\u043c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u044b`).setCode(ae.empId), this.setCareCaseId(ye), this.setComposerInfo(), this.composition.save();
    }
    setCareCaseId(ye) {
      this.composition.getContext().get("подробности_контекста.ид_события").setIdentifier({
        id: ye,
        assigner: "Tube",
        issuer: "Tube",
        type: "medical-entry"
      });
    }
    setComposerInfo() {
      this.composition.get("composer").setValue({
        id: "Tube",
        namespace: "Tube",
        scheme: "Tube",
        name: "Alexander Ziborov"
      });
    }
  }
  class L {
    constructor(ye, ae) {
      this.rootCompositionEntry = ye, this.existingChild = ae, ye && (this.composition = this.rootCompositionEntry.getComposition()), ae && (this.composition = this.existingChild.getComposition());
    }
    setUnSignValues() {
      this.composition.getMany("карта_наблюдения_за_пациентом_с_назогастральным_зондом.карта_наблюдения_за_назогастральным_зондом.завершение_ухода_за_пациентом")[0].delete(), this.composition.save();
    }
  }
  var C = i(94650),
    v = i(80529),
    f = i(57759),
    E = i(80188);
  class h {
    static getValue(ye) {
      return (window.env || {})[ye];
    }
  }
  const x = {
      realm: h.getValue("apiKeycloakRealm"),
      url: h.getValue("apiKeycloakUrl"),
      clientId: h.getValue("apiKeycloakClientId"),
      tokenMinValidityTime: h.getValue("apiKeycloakTokenMinValidityTime")
    },
    Le = class {
      constructor() {
        this.keycloak = new f.Z(x);
      }
      initPromise() {
        return this.keycloak.init({
          onLoad: "login-required",
          checkLoginIframe: !1
        }).then(ye => (console.log("Keycloak инициализирован, authenticated:", ye, "token:", this.keycloak.token), ye)).catch(ye => {
          throw console.error("Ошибка инициализации Keycloak:", ye), ye;
        });
      }
      get token() {
        return this.keycloak.token;
      }
      get refreshToken() {
        return this.keycloak.refreshToken;
      }
      get isAuthorized() {
        return !!this.keycloak.authenticated;
      }
      updateToken() {
        return this.keycloak.updateToken(-1).then(() => {
          if (!this.keycloak.token) throw new Error("No token available after update");
          return this.keycloak.token;
        }).catch(() => {
          throw this.keycloak.login(), new Error("Token update failed, redirecting to login");
        });
      }
      logout() {
        return (0, E.D)(this.keycloak.logout({
          redirectUri: window.location.origin
        }));
      }
    };
  let u = Le;
  Le.ɵfac = function (ae) {
    return new (ae || Le)();
  }, Le.ɵprov = C.Yz7({
    token: Le,
    factory: Le.ɵfac,
    providedIn: "root"
  });
  var T = i(40891),
    R = i(97215),
    B = i(25748),
    y = i(89653);
  const j = "карта_наблюдения_за_пациентом_с_назогастральным_зондом.карта_наблюдения_за_назогастральным_зондом.день_наблюдения.дата.день_наблюдения",
    ke = class {
      constructor(ye, ae, Y, G, te, pe) {
        this.http = ye, this.keycloak = ae, this.ehrService = Y, this.userContext = G, this.patientService = te, this.store = pe;
      }
      getCompositionByUid(ye) {
        return this.http.get(`gateway/ehr-db/api/rest/v1/composition/${ye}`, {
          headers: {
            accept: "application/json",
            authorization: `Bearer ${this.keycloak.token}`,
            "X-AUTHENTICATION-TOKEN": "YWRtaW4kJCQxMDB8MjAyNi0wNi0xNVQxMDowMToyNC41MjczMjZ8MmYxYzlmMzc4ZGNmZWQ4YjE5ZWUzZjdjN2Y2NWYzZDg="
          }
        });
      }
      getEvents(ye, ae) {
        const Y = ye.find(G => e()(G?.observationDate).isSame(e()(ae), "day"));
        return Y ? this.getCompositionByUid(Y.compositionId).pipe((0, a.w)(G => {
          const te = (0, d.h)(G);
          return (0, m.of)(te);
        })) : (0, m.of)([]);
      }
      getEhrByPatientId(ye) {
        return this.patientService.getPatientQuery(ye).pipe((0, a.w)(ae => this.ehrService.getEhr(ae.ehrId)));
      }
      createTubeDocument(ye, ae, Y) {
        return ye.createMedicalEntry("card_patient_with_nasogastric_tube", ae).pipe((0, a.w)(G => (new O(G).setInitialValues(ae, Y), G.save())));
      }
      createTubeChildDocument(ye, ae) {
        return ye.getMedicalEntry(ae.protocolId).pipe((0, a.w)(Y => ye.createMedicalEntry("card_patient_with_nasogastric_tube", ae.careCaseId).pipe((0, a.w)(G => (new b(G, this.userContext).setValues(ae, !0, Y.getUid()), Y.attachComposition(G.getRoot().getBaseClass(G.getRoot().getType())), ae.finishTube.check ? Y.sign() : Y.save())))));
      }
      updateTubeChildDocument(ye, ae) {
        return ye.getMedicalEntry(ae.protocolId).pipe((0, a.w)(Y => {
          const te = Y.getChildren().find(pe => this._compareUids(ae.childComposition, pe.getUid()));
          return te ? (new b(void 0, this.userContext, te).setValues(ae), ae.finishTube.check ? Y.sign() : te.getMedicalEntry().save()) : (console.error("Не удалось найти дочернюю композицию", ae.childComposition), (0, m.of)(null));
        }));
      }
      updateTubeDocument({
        ehr: ye,
        uid: ae,
        data: Y
      }) {
        return ye.getMedicalEntry(ae).pipe((0, a.w)(te => (new b(te, this.userContext).setValues(Y), Y.finishTube.check ? te.sign() : te.save())));
      }
      deleteEventDocument(ye) {
        const {
          ehr: ae,
          uid: Y,
          group: G,
          event: te,
          eventIndex: pe,
          rootUid: be,
          isLastEvent: le
        } = ye;
        return console.log("DATA", ye), ae.getMedicalEntry(be).pipe((0, a.w)(n => {
          if (console.log("deleteEventDocument", ye), console.log("IS ROOT", this._compareUids(Y, be)), this._compareUids(Y, be)) return new I(n.getRoot(), this.store).setDeleteValues(G, te, pe), n.save();
          const qe = n.getChildren().find(Rt => this._compareUids(Rt.getUid(), Y));
          return console.log("existingChild", qe), qe ? le ? (n.deleteEntity(Y), n.save()) : (new I(qe, this.store).setDeleteValues(G, te, pe), qe.getMedicalEntry().save()) : (0, m.of)(null);
        }));
      }
      _compareUids(ye, ae) {
        return ye.split("::")[0] === ae.split("::")[0];
      }
      deleteTubeDocument(ye, ae) {
        return ye.getMedicalEntry(ae).pipe((0, a.w)(Y => Y.delete()));
      }
      signTubeDocument(ye, ae, Y) {
        return ye.getMedicalEntry(Y.protocolId).pipe((0, a.w)(G => {
          if (Y.isRoot) return new b(G, this.userContext).setValues(Y), G.sign();
          {
            const pe = G.getChildren().find(be => {
              const le = be.getComposition().get(j).getValue();
              return e()(le.toDate()).isSame(e()(Y.observationDate), "day");
            });
            if (pe) {
              const be = pe.getMedicalEntry();
              return new b(be, this.userContext).setValues(Y), Y.finishTube.check ? G.sign() : be.save();
            }
            return (0, m.of)(null);
          }
        }));
      }
      unSignTubeDocument(ye, ae, Y, G) {
        return ye.getMedicalEntry(G).pipe((0, a.w)(te => {
          if (ae.isRoot) return new L(te.getRoot()).setUnSignValues(), te.save();
          {
            const be = te.getChildren().find(le => {
              const n = le.getComposition().get(j).getValue();
              return e()(n.toDate()).isSame(e()(ae.observationDate), "day");
            });
            return be ? (new L(void 0, be).setUnSignValues(), te.save()) : (0, m.of)(null);
          }
        }));
      }
    };
  let W = ke;
  ke.ɵfac = function (ae) {
    return new (ae || ke)(C.LFG(v.eN), C.LFG(u), C.LFG(T.r), C.LFG(R.oL), C.LFG(B.e6), C.LFG(y.yh));
  }, ke.ɵprov = C.Yz7({
    token: ke,
    factory: ke.ɵfac,
    providedIn: "root"
  });
  const J = class {
    constructor(ye, ae) {
      this.http = ye, this.keycloak = ae;
    }
    getPatients(ye) {
      const ae = [{
        bool: {
          must: [{
            exists: {
              field: "data.careCase"
            }
          }, {
            exists: {
              field: "data.patientMovement"
            }
          }, {
            bool: {
              must_not: [{
                exists: {
                  field: "data.patientMovement.endTime"
                }
              }]
            }
          }]
        }
      }, {
        bool: {
          should: [{
            bool: {
              must_not: [{
                exists: {
                  field: "data.nasogastric"
                }
              }]
            }
          }, {
            bool: {
              must: [{
                exists: {
                  field: "data.nasogastric"
                }
              }, {
                bool: {
                  should: [{
                    bool: {
                      must_not: [{
                        nested: {
                          path: "data.nasogastric.elements",
                          query: {
                            exists: {
                              field: "data.nasogastric.elements.protocolId"
                            }
                          }
                        }
                      }]
                    }
                  }, {
                    bool: {
                      must: [{
                        nested: {
                          path: "data.nasogastric.elements",
                          query: {
                            exists: {
                              field: "data.nasogastric.elements.protocolId"
                            }
                          },
                          ignore_unmapped: !1
                        }
                      }, {
                        bool: {
                          must_not: [{
                            nested: {
                              path: "data.nasogastric.elements",
                              query: {
                                bool: {
                                  must_not: [{
                                    exists: {
                                      field: "data.nasogastric.elements.finishDate"
                                    }
                                  }]
                                }
                              }
                            }
                          }]
                        }
                      }]
                    }
                  }],
                  minimum_should_match: 1
                }
              }]
            }
          }],
          minimum_should_match: 1
        }
      }];
      return ye && ae.push({
        term: {
          "data.patientMovement.departmentId": {
            value: ye
          }
        }
      }), this.http.post("/gateway/patient-list/api/v1/index/profile-nurse-task-list", {
        searchParams: {
          body: {
            size: 500,
            track_total_hits: !0,
            query: {
              bool: {
                must: ae
              }
            },
            from: 0
          }
        }
      }, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    mappedPatients(ye) {
      return ye.map(ae => ({
        careCaseId: ae.careCase.careCaseId,
        departmentId: ae.patientMovement.departmentId,
        hospitalCardNumber: ae.hospitalCard ? ae.hospitalCard.fullNumber : "",
        patientBirthDate: ae.careCase.birthDate,
        patientFio: [ae.careCase.lastName, ae.careCase.firstName, ae.careCase.secondName].join(" "),
        patientId: ae.careCase.actualPatientId
      }));
    }
  };
  let F = J;
  J.ɵfac = function (ae) {
    return new (ae || J)(C.LFG(v.eN), C.LFG(u));
  }, J.ɵprov = C.Yz7({
    token: J,
    factory: J.ɵfac,
    providedIn: "root"
  });
});
