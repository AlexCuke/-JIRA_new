// Extracted from main; webpack module 30854. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    J: () => F
  });
  var t = i(21777),
    e = i(62843),
    a = i(18505),
    m = i(54004),
    d = i(63900),
    M = i(49770),
    b = i(70262),
    A = i(39646),
    N = i(49151),
    I = i(71822);
  class O extends N.I {
    constructor(J) {
      super(), this.compositionEntry = J, this.basePath = "лист_постановки_и_наблюдения_за_периферическим_катетером", this._peripheralCatheterPathSettings = {
        installDatetimeSet: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.time`,
          type: I._t
        },
        installDateTime: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438`,
          type: I._t
        },
        catheterName: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u043a\u0430\u0442\u0435\u0442\u0435\u0440.\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435_\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430`,
          type: I.Vd
        },
        catheterLocus: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u043c\u0435\u0441\u0442\u043e_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043c\u0435\u0441\u0442\u043e_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430`,
          type: I.Vd
        },
        peripheralCatheterSize: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u043a\u0430\u0442\u0435\u0442\u0435\u0440.\u043d\u043e\u043c\u0435\u0440_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430`,
          type: I.Vd
        },
        currentUser: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430`,
          type: I.aG
        },
        currentUserCode: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430`,
          type: I.aG,
          setMethodName: "setCode"
        }
      }, this.composition = this.compositionEntry.getComposition(), this.pathsSettingsMap = {
        peripheral: this._peripheralCatheterPathSettings
      };
    }
  }
  class L extends N.I {
    constructor(J) {
      super(), this.compositionEntry = J, this.basePath = "лист_постановки_и_наблюдения_за_мочевым_катетером_фолея", this._urinaryCatheterPathSettings = {
        installDatetimeSet: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.time`,
          type: I._t
        },
        installDateTime: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438`,
          type: I._t
        },
        urinaryCatheterType: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u043a\u0430\u0442\u0435\u0442\u0435\u0440.\u0442\u0438\u043f_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430`,
          type: I.Vd
        },
        urinaryCatheterSize: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u043a\u0430\u0442\u0435\u0442\u0435\u0440.\u0440\u0430\u0437\u043c\u0435\u0440_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430`,
          type: I.Vd
        },
        currentUser: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a`,
          type: I.aG
        },
        currentUserCode: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a`,
          type: I.aG,
          setMethodName: "setCode"
        }
      }, this.composition = this.compositionEntry.getComposition(), this.pathsSettingsMap = {
        urinary: this._urinaryCatheterPathSettings
      };
    }
  }
  class C extends N.I {
    constructor(J) {
      super(), this.compositionEntry = J, this.basePath = "протокол_катетеризации", this._centralInstallPathSettings = {
        installDatetimeSet: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438`,
          type: I._t
        },
        catheterName: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430`,
          type: I.Vd
        },
        vesselType: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u0442\u0438\u043f_\u0441\u043e\u0441\u0443\u0434\u0430.\u0442\u0438\u043f_\u0441\u043e\u0441\u0443\u0434\u0430`,
          type: I.Vd
        },
        localization: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u0442\u0438\u043f_\u0441\u043e\u0441\u0443\u0434\u0430.\u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f`,
          type: I.Vd
        },
        catheterSize: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u0440\u0430\u0437\u043c\u0435\u0440_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b`,
          type: I.SH,
          setMethodName: "setMagnitude"
        },
        catheterUnit: {
          path: `${this.basePath}.\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u0440\u0430\u0437\u043c\u0435\u0440_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b`,
          type: I.SH,
          setMethodName: "setUnit"
        }
      }, this.composition = this.compositionEntry.getComposition(), this.pathsSettingsMap = {
        central: this._centralInstallPathSettings
      };
    }
  }
  var v = i(15439),
    f = i.n(v);
  class E extends N.I {
    constructor(J) {
      super(), this.compositionEntry = J, this.basePath = "лист_постановки_и_наблюдения_за_периферическим_катетером", this.dateClusterPathPrefix = `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430`, this._peripheralMonitoringCatheterPathSettings = {
        deletedDatetimeSet: {
          path: `${this.basePath}.\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f`,
          type: I._t
        },
        deletedReason: {
          path: `${this.basePath}.\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430`,
          type: I.Vd
        },
        userDelete: {
          path: `${this.basePath}.\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430`,
          type: I.aG
        },
        userDeleteCode: {
          path: `${this.basePath}.\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430`,
          type: I.aG,
          setMethodName: "setCode"
        },
        monitoringDateTime: {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.time`,
          type: I._t
        },
        monitoringDate: {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430[0].\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f.\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f`,
          type: I.p7
        },
        "scaleAssessment[*].assessment": {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430[0].\u043e\u0446\u0435\u043d\u043a\u0430_\u043c\u0435\u0441\u0442\u0430_\u0432\u0435\u043d\u0435\u043f\u0443\u043d\u043a\u0446\u0438\u0438_\u043f\u043e_\u0448\u043a\u0430\u043b\u0435_\u0444\u043b\u0435\u0431\u0438\u0442\u043e\u0432[*].\u043e\u0446\u0435\u043d\u043a\u0430_\u043c\u0435\u0441\u0442\u0430_\u0432\u0435\u043d\u0435\u043f\u0443\u043d\u043a\u0446\u0438\u0438_\u043f\u043e_\u0448\u043a\u0430\u043b\u0435_\u0444\u043b\u0435\u0431\u0438\u0442\u043e\u0432`,
          type: I.Vd
        },
        "scaleAssessment[*].userAddAssessment": {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430[0].\u043e\u0446\u0435\u043d\u043a\u0430_\u043c\u0435\u0441\u0442\u0430_\u0432\u0435\u043d\u0435\u043f\u0443\u043d\u043a\u0446\u0438\u0438_\u043f\u043e_\u0448\u043a\u0430\u043b\u0435_\u0444\u043b\u0435\u0431\u0438\u0442\u043e\u0432[*].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430_\u043e\u0446\u0435\u043d\u043a\u0430_\u043c\u0435\u0441\u0442\u0430_\u0432\u0435\u043d\u0435\u043f\u0443\u043d\u043a\u0446\u0438\u0438`,
          type: I.Vd
        },
        "catheterTreatment[*].catheterTreatmentTime": {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430[0].\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430[*].\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438.\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430`,
          type: I.Gl
        },
        "catheterTreatment[*].userAddCatheterTreatmentTime": {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430[0].\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430[*].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430`,
          type: I.Vd
        }
      }, this.composition = this.compositionEntry.getComposition(), this.pathsSettingsMap = {
        peripheral: this._peripheralMonitoringCatheterPathSettings
      };
    }
    setValues(J, fe, ye, ae) {
      const Y = J?.monitoringDate,
        G = this.resolveMonitoringDateClusterIndex(Y);
      this.applyMonitoringDateClusterIndex(G), this.ensureMonitoringDateCluster(G, Y);
      const {
        monitoringDate: te,
        ...pe
      } = J;
      super.setValues({
        ...pe,
        monitoringDate: this.toCareDateString(Y)
      }, fe, ye, ae);
    }
    toCareDateString(J) {
      const fe = this.toCalendarDate(J);
      return fe ? `${fe.getFullYear()}-${String(fe.getMonth() + 1).padStart(2, "0")}-${String(fe.getDate()).padStart(2, "0")}` : null;
    }
    toCalendarDate(J) {
      if (null == J) return null;
      if (f().isMoment(J)) return J.isValid() ? J.toDate() : null;
      if (J instanceof Date && !Number.isNaN(J.getTime())) return new Date(J.getFullYear(), J.getMonth(), J.getDate());
      if ("string" == typeof J && J.trim()) {
        const fe = J.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
        if (fe) return new Date(Number(fe[1]), Number(fe[2]) - 1, Number(fe[3]));
        const ye = new Date(J);
        return Number.isNaN(ye.getTime()) ? null : new Date(ye.getFullYear(), ye.getMonth(), ye.getDate());
      }
      return null;
    }
    ensureMonitoringDateCluster(J, fe) {
      const ye = this.toCareDateString(fe);
      if (ye) try {
        this.composition.get(`${this.dateClusterPathPrefix}[${J}].\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f.\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f`).setValue(ye), this.composition.save();
      } catch (ae) {
        console.warn("[Catheters] Failed to init peripheral monitoring date cluster:", ae);
      }
    }
    resolveMonitoringDateClusterIndex(J) {
      const fe = this.toCalendarDate(J) || new Date();
      let ye = 0;
      for (; ye < 100;) {
        const Y = this.readClusterDay(`${this.dateClusterPathPrefix}[${ye}].\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f.\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f`);
        if (null === Y || this.isSameCalendarDay(Y, fe)) return ye;
        ye += 1;
      }
      return ye;
    }
    readClusterDay(J) {
      try {
        const fe = this.composition.get(J)?.getValue();
        return this.toCalendarDate(fe);
      } catch {
        return null;
      }
    }
    applyMonitoringDateClusterIndex(J) {
      const fe = this.pathsSettingsMap.peripheral;
      Object.keys(fe).forEach(ye => {
        fe[ye].path = fe[ye].path.replace(/\.\u0434\u0430\u0442\u0430\[\d+\]\./, `.\u0434\u0430\u0442\u0430[${J}].`);
      });
    }
    isSameCalendarDay(J, fe) {
      return J.getFullYear() === fe.getFullYear() && J.getMonth() === fe.getMonth() && J.getDate() === fe.getDate();
    }
  }
  class h extends N.I {
    constructor(J) {
      super(), this.compositionEntry = J, this.basePath = "лист_постановки_и_наблюдения_за_мочевым_катетером_фолея", this.dateClusterPath = `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430`, this._urinaryMonitoringCatheterPathSettings = {
        deletedDatetimeSet: {
          path: `${this.basePath}.\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.\u0434\u0430\u0442\u0430_\u0438_\u0432\u0440\u0435\u043c\u044f_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f`,
          type: I._t
        },
        deletedReason: {
          path: `${this.basePath}.\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f`,
          type: I.Vd
        },
        userDelete: {
          path: `${this.basePath}.\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a`,
          type: I.aG
        },
        userDeleteCode: {
          path: `${this.basePath}.\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u043e_\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a`,
          type: I.aG,
          setMethodName: "setCode"
        },
        monitoringDateTime: {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.time`,
          type: I._t
        },
        monitoringDate: {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430.\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f.\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f`,
          type: I.p7
        },
        currentUser: {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a`,
          type: I.Vd
        },
        "treatment[*].catheterTreatmentTime": {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430.\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430[*].\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438.\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430`,
          type: I.Gl
        },
        "treatment[*].userAddCatheterTreatmentTime": {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430.\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430[*].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430`,
          type: I.Vd
        },
        inflammation: {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430.\u0432\u043e\u0441\u043f\u0430\u043b\u0435\u043d\u0438\u044f_\u0441\u043b\u0438\u0437\u0438\u0441\u0442\u043e\u0439.\u0432\u043e\u0441\u043f\u0430\u043b\u0435\u043d\u0438\u044f_\u0441\u043b\u0438\u0437\u0438\u0441\u0442\u043e\u0439`,
          type: I.Vd
        },
        userAddInflammationInfo: {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430.\u0432\u043e\u0441\u043f\u0430\u043b\u0435\u043d\u0438\u044f_\u0441\u043b\u0438\u0437\u0438\u0441\u0442\u043e\u0439.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a_\u0432\u043e\u0441\u043f\u0430\u043b\u0435\u043d\u0438\u044f_\u0441\u043b\u0438\u0437\u0438\u0441\u0442\u043e\u0439`,
          type: I.Vd
        },
        discharge: {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430.\u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f.\u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f`,
          type: I.Vd
        },
        userAddDischargeInfo: {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430.\u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a_\u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f`,
          type: I.Vd
        },
        urineColor: {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430.\u0446\u0432\u0435\u0442_\u043c\u043e\u0447\u0438.\u0446\u0432\u0435\u0442_\u043c\u043e\u0447\u0438`,
          type: I.Vd
        },
        userAddUrineColorInfo: {
          path: `${this.basePath}.\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0434\u0430\u0442\u0430.\u0446\u0432\u0435\u0442_\u043c\u043e\u0447\u0438.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a_\u0446\u0432\u0435\u0442_\u043c\u043e\u0447\u0438`,
          type: I.Vd
        },
        addInfoTime: {
          path: `${this.basePath}.\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f_\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.\u043b\u044e\u0431\u043e\u0435_\u0441\u043e\u0431\u044b\u0442\u0438\u0435[0].time`,
          type: I.Gl
        },
        complications: {
          path: `${this.basePath}.\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f_\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.\u043b\u044e\u0431\u043e\u0435_\u0441\u043e\u0431\u044b\u0442\u0438\u0435[0].\u043e\u0441\u043b\u043e\u0436\u043d\u0435\u043d\u0438\u044f.\u043e\u0441\u043b\u043e\u0436\u043d\u0435\u043d\u0438\u044f`,
          type: I.Vd
        },
        additionalInformation: {
          path: `${this.basePath}.\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f_\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.\u043b\u044e\u0431\u043e\u0435_\u0441\u043e\u0431\u044b\u0442\u0438\u0435[0].\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435_\u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f`,
          type: I.Vd
        },
        userAddInfo: {
          path: `${this.basePath}.\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f_\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.\u043b\u044e\u0431\u043e\u0435_\u0441\u043e\u0431\u044b\u0442\u0438\u0435[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a`,
          type: I.Vd
        }
      }, this.composition = this.compositionEntry.getComposition(), this.pathsSettingsMap = {
        urinary: this._urinaryMonitoringCatheterPathSettings
      };
    }
    setValues(J, fe, ye, ae) {
      this.ensureMonitoringDate(J?.monitoringDate), super.setValues({
        ...J,
        monitoringDate: this.toCareDateString(J?.monitoringDate)
      }, fe, ye, ae);
    }
    ensureMonitoringDate(J) {
      const fe = this.toCareDateString(J);
      if (fe) try {
        this.composition.get(`${this.dateClusterPath}.\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f.\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f`).setValue(fe), this.composition.save();
      } catch (ye) {
        console.warn("[Catheters] Failed to init urinary monitoring date:", ye);
      }
    }
    toCareDateString(J) {
      const fe = this.toCalendarDate(J);
      return fe ? `${fe.getFullYear()}-${String(fe.getMonth() + 1).padStart(2, "0")}-${String(fe.getDate()).padStart(2, "0")}` : null;
    }
    toCalendarDate(J) {
      if (null == J) return null;
      if (f().isMoment(J)) return J.isValid() ? J.toDate() : null;
      if (J instanceof Date && !Number.isNaN(J.getTime())) return new Date(J.getFullYear(), J.getMonth(), J.getDate());
      if ("string" == typeof J && J.trim()) {
        const fe = J.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
        if (fe) return new Date(Number(fe[1]), Number(fe[2]) - 1, Number(fe[3]));
        const ye = new Date(J);
        return Number.isNaN(ye.getTime()) ? null : new Date(ye.getFullYear(), ye.getMonth(), ye.getDate());
      }
      return null;
    }
  }
  class x extends N.I {
    constructor(J) {
      super(), this.compositionEntry = J, this.basePath = "протокол_ухода_за_центральным_катетером", this.dayDatePath = `${this.basePath}.\u0434\u0430\u0442\u0430[0].\u0434\u0430\u0442\u0430[0].\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f`, this._centralMonitoringCatheterPathSettings = {
        monitoringDate: {
          path: `${this.basePath}.\u0434\u0430\u0442\u0430[0].\u0434\u0430\u0442\u0430[0].\u0434\u0435\u043d\u044c_\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f`,
          type: I.p7
        },
        "catheterTreatment[*].treatmentDateTime": {
          path: `${this.basePath}.\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438.any_event[*].time`,
          type: I._t
        },
        "catheterTreatment[*].catheterTreatmentTime": {
          path: `${this.basePath}.\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438.any_event[*].\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438.\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438.\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438`,
          type: I.Gl
        },
        "catheterTreatment[*].userAddCatheterTreatmentTime": {
          path: `${this.basePath}.\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438.any_event[*].\u0432\u0440\u0435\u043c\u044f_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430_\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430`,
          type: I.Vd
        },
        heparinMark: {
          path: `${this.basePath}.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.any_event[0].\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u043e\u0442\u043c\u0435\u0442\u043a\u0430_\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0438_\u0433\u0435\u043f\u0430\u0440\u0438\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e_\u0440\u0430\u0441\u0442\u0432\u043e\u0440\u0430.\u043e\u0442\u043c\u0435\u0442\u043a\u0430_\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0438_\u0433\u0435\u043f\u0430\u0440\u0438\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e_\u0440\u0430\u0441\u0442\u0432\u043e\u0440\u0430`,
          type: I._c
        },
        userAddHeparinMark: {
          path: `${this.basePath}.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.any_event[0].\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u043e\u0442\u043c\u0435\u0442\u043a\u0430_\u043e_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0438_\u0433\u0435\u043f\u0430\u0440\u0438\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e_\u0440\u0430\u0441\u0442\u0432\u043e\u0440\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430_\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435_\u0440\u0430\u0441\u0442\u0432\u043e\u0440\u0430`,
          type: I.Vd
        },
        deletedTimeSet: {
          path: `${this.basePath}.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.any_event[0].\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0432\u0440\u0435\u043c\u044f_\u0438_\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u0432\u0440\u0435\u043c\u044f_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u0432\u0440\u0435\u043c\u044f_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430`,
          type: I.Gl
        },
        deletedReason: {
          path: `${this.basePath}.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.any_event[0].\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0432\u0440\u0435\u043c\u044f_\u0438_\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430`,
          type: I.Vd
        },
        userDelete: {
          path: `${this.basePath}.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.any_event[0].\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0432\u0440\u0435\u043c\u044f_\u0438_\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435`,
          type: I.aG
        },
        userDeleteCode: {
          path: `${this.basePath}.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.any_event[0].\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0432\u0440\u0435\u043c\u044f_\u0438_\u043f\u0440\u0438\u0447\u0438\u043d\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430_\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435`,
          type: I.aG,
          setMethodName: "setCode"
        },
        catheterCultureTime: {
          path: `${this.basePath}.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.any_event[0].\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0432\u0440\u0435\u043c\u044f_\u043f\u043e\u0441\u0435\u0432\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430.\u0432\u0440\u0435\u043c\u044f_\u043f\u043e\u0441\u0435\u0432\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430`,
          type: I.Gl
        },
        userAddCatheterCultureTime: {
          path: `${this.basePath}.\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.any_event[0].\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438_\u0443\u0445\u043e\u0434\u0430_\u0437\u0430_\u043a\u0430\u0442\u0435\u0442\u0435\u0440\u043e\u043c.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430_\u043f\u043e\u0441\u0435\u0432[0].\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430.\u0444\u0438\u043e_\u043c\u0435\u0434\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430_\u043f\u043e\u0441\u0435\u0432`,
          type: I.Vd
        }
      }, this.composition = this.compositionEntry.getComposition(), this.pathsSettingsMap = {
        peripheral: this._centralMonitoringCatheterPathSettings
      };
    }
    setValues(J, fe, ye, ae) {
      this.ensureMonitoringDate(J?.monitoringDate), super.setValues({
        ...J,
        monitoringDate: this.toCareDateString(J?.monitoringDate)
      }, fe, ye, ae);
    }
    ensureMonitoringDate(J) {
      const fe = this.toCareDateString(J);
      if (fe) try {
        this.composition.get(this.dayDatePath).setValue(fe), this.composition.save();
      } catch (ye) {
        console.warn("[Catheters] Failed to init central monitoring date:", ye);
      }
    }
    toCareDateString(J) {
      const fe = this.toCalendarDate(J);
      return fe ? `${fe.getFullYear()}-${String(fe.getMonth() + 1).padStart(2, "0")}-${String(fe.getDate()).padStart(2, "0")}` : null;
    }
    toCalendarDate(J) {
      if (null == J) return null;
      if (f().isMoment(J)) return J.isValid() ? J.toDate() : null;
      if (J instanceof Date && !Number.isNaN(J.getTime())) return new Date(J.getFullYear(), J.getMonth(), J.getDate());
      if ("string" == typeof J && J.trim()) {
        const fe = J.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
        if (fe) return new Date(Number(fe[1]), Number(fe[2]) - 1, Number(fe[3]));
        const ye = new Date(J);
        return Number.isNaN(ye.getTime()) ? null : new Date(ye.getFullYear(), ye.getMonth(), ye.getDate());
      }
      return null;
    }
  }
  var u = i(96474),
    T = i(94650),
    R = i(15394),
    B = i(25748),
    y = i(24810);
  const W_peripheral = {
      code: "catheter-peripheral",
      name: "Лист постановки и наблюдения за периферическим катетером",
      templateId: "openEHR-EHR-COMPOSITION.t_observation_peripheral_catheter_list.v1"
    },
    W_urinary = {
      code: "t_observation_urinary_catheter_list",
      name: "Лист постановки и наблюдения за мочевым катетером",
      templateId: "openEHR-EHR-COMPOSITION.t_observation_urinary_catheter_list.v1"
    },
    W_centralInstall = {
      code: "catheter-central-install",
      name: "Протокол катетеризации",
      templateId: "openEHR-EHR-COMPOSITION.t_catheterization_of_the_central_vein.v0"
    },
    W_centralCare = {
      code: "catheter-central-care",
      name: "Протокол ухода за центральным катетером",
      templateId: "openEHR-EHR-COMPOSITION.t_central_line_care.v1"
    },
    Le = class {
      constructor(J, fe, ye) {
        this.compositionsBaseService = J, this.patientService = fe, this.careCaseService = ye;
      }
      installCatheter(J, fe, ye, ae) {
        const Y = J?.catheterName || "";
        return (0, u.gr)(Y) ? this.installPeripheral(J, fe, ye, ae) : (0, u.Cj)(Y) ? this.installUrinary(J, fe, ye, ae) : (0, u.V5)(Y) ? this.installCentral(J, fe, ye, ae) : (0, e._)(() => new Error(`\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u0442\u0438\u043f \u043a\u0430\u0442\u0435\u0442\u0435\u0440\u0430: ${Y}`));
      }
      handleMonitoringAction(J, fe, ye, ae) {
        const Y = J?.action || "save",
          G = (0, u.XN)(J?.type || fe?.type),
          te = this.resolveCareCaseId(fe) || void 0,
          pe = this.enrichMonitoringPayload(J, fe),
          be = this.resolveMonitoringDateKey(pe, fe),
          le = this.resolveParentProtocolId(fe),
          n = fe?.source || fe,
          Se = le || this.resolveCompositionUid(fe),
          qe = (0, u.yo)(n, be),
          Rt = `${fe?.compositionUid || ""}`.trim(),
          We = (0, u.CV)(n) || Se || te || "",
          Re = (0, u.gr)(G) ? qe || Se || Rt : qe;
        let st;
        return st = "unsign" === Y ? this.unsignMonitoring(Re || Se || Rt, ye, te) : "annul" === Y ? this.annulMonitoring(Re || Se || Rt, ye, te) : "sign" === Y ? Re ? this.persistMonitoring(Re, ye, te, pe, G, ae, le, "sign") : (0, u.V5)(G) ? this.createCentralMonitoringDay(ye, te, pe, ae, le, !0) : (0, u.Cj)(G) ? this.createUrinaryMonitoringDay(ye, te, pe, ae, le, !0) : (0, e._)(() => new Error("Не найдена композиция для подписания наблюдения")) : Re ? this.persistMonitoring(Re, ye, te, pe, G, ae, le, "save") : (0, u.V5)(G) ? this.createCentralMonitoringDay(ye, te, pe, ae, le, !1) : (0, u.Cj)(G) ? this.createUrinaryMonitoringDay(ye, te, pe, ae, le, !1) : (0, e._)(() => new Error("Не найдена композиция для сохранения наблюдения")), st.pipe((0, a.b)(q => {
          if ("annul" === Y || "unsign" === Y) return;
          const mt = q && "function" == typeof q.getUid ? q.getUid() : Re || fe?.compositionUid || "";
          (0, u.kk)(mt, pe.monitoringDate || be), (0, u.Em)(We, pe.monitoringDate || be, mt);
        }));
      }
      formatError(J, fe) {
        return J instanceof Error && J.message ? J.message : J?.error?.message || J?.message || fe;
      }
      installPeripheral(J, fe, ye, ae) {
        return this.createAndSign(ye, fe, W_peripheral, Y => {
          const G = new O(Y.getRoot());
          this.safeSetInitialValues(G, fe, ae), G.setValues(this.mapPeripheralInstall(J), "peripheral");
        }).pipe((0, m.U)(Y => ({
          catheterName: J.catheterName,
          compositionUid: Y.getUid()
        })));
      }
      installUrinary(J, fe, ye, ae) {
        return this.createAndSign(ye, fe, W_urinary, Y => {
          const G = new L(Y.getRoot());
          this.safeSetInitialValues(G, fe, ae), G.setValues(this.mapUrinaryInstall(J), "urinary");
        }).pipe((0, m.U)(Y => ({
          catheterName: J.catheterName,
          compositionUid: Y.getUid()
        })));
      }
      installCentral(J, fe, ye, ae) {
        let Y;
        return this.createAndSign(ye, fe, W_centralInstall, G => {
          const te = new C(G.getRoot());
          this.safeSetInitialValues(te, fe, ae), te.setValues(this.mapCentralInstall(J), "central");
        }).pipe((0, d.w)(G => (Y = G.getUid(), this.createAndSign(ye, fe, W_centralCare, te => {
          const pe = new x(te.getRoot());
          this.safeSetInitialValues(pe, fe, ae);
          const be = J.installDatetimeSet instanceof Date ? J.installDatetimeSet : J.installDatetimeSet ? new Date(J.installDatetimeSet) : new Date();
          pe.setValues({
            monitoringDate: be,
            installDatetimeSet: J.installDatetimeSet
          }, "peripheral", Y, "create");
        }))), (0, m.U)(G => ({
          catheterName: J.catheterName,
          compositionUid: G.getUid(),
          protocolId: Y
        })));
      }
      persistMonitoring(J, fe, ye, ae, Y, G, te, pe) {
        return this.withComposition(J, fe, ye, be => (this.applyMonitoringValues(be, ae, Y, G, te), "sign" === pe || be.status() === t.j.SIGNED ? be.sign() : be.save()));
      }
      saveMonitoring(J, fe, ye, ae, Y, G, te) {
        return this.persistMonitoring(J, fe, ye, ae, Y, G, te, "save");
      }
      signMonitoring(J, fe, ye, ae, Y, G, te) {
        return this.persistMonitoring(J, fe, ye, ae, Y, G, te, "sign");
      }
      createCentralMonitoringDay(J, fe, ye, ae, Y, G = !1) {
        if (!fe) return (0, e._)(() => new Error("Не указан careCaseId для создания наблюдения"));
        if (!Y) return (0, e._)(() => new Error("Не указан идентификатор протокола катетеризации (protocolId)"));
        const te = pe => {
          const be = new x(pe.getRoot());
          this.safeSetInitialValues(be, fe, ae), be.setValues(this.mapCentralMonitoring(ye), "peripheral", Y, "create");
        };
        return G ? this.createAndSign(J, fe, W_centralCare, te) : this.createAndSave(J, fe, W_centralCare, te);
      }
      createUrinaryMonitoringDay(J, fe, ye, ae, Y, G = !1) {
        if (!fe) return (0, e._)(() => new Error("Не указан careCaseId для создания наблюдения"));
        if (!Y) return (0, e._)(() => new Error("Не указан идентификатор родительской композиции (protocolId)"));
        const te = pe => {
          const be = new h(pe.getRoot());
          this.safeSetInitialValues(be, fe, ae), be.setValues(this.mapUrinaryMonitoring(ye), "urinary", Y, "create");
        };
        return G ? this.createAndSign(J, fe, W_urinary, te) : this.createAndSave(J, fe, W_urinary, te);
      }
      resolveParentProtocolId(J) {
        const fe = J?.source,
          ae = [J?.protocolId, fe?.protocolId, J?.compositionUid, fe?.compositionUid, fe?.cuid, J?.compositionUid, J?.cuid];
        for (const Y of ae) {
          if (null == Y) continue;
          const G = `${Y}`.trim();
          if (G && "undefined" !== G && "null" !== G) return G;
        }
        return "";
      }
      resolveMonitoringDateKey(J, fe) {
        const ye = (0, u.k7)(J?.monitoringDate);
        if (ye) return ye;
        const ae = `${fe?.monitoringDate || ""}`.trim();
        return ae.includes(".") ? 5 === ae.length ? ae : (0, u.k7)(this.parseMonitoringDate(ae)) : (0, u.k7)(this.parseMonitoringDate(ae)) || ae;
      }
      unsignMonitoring(J, fe, ye) {
        return this.withComposition(J, fe, ye, ae => "function" == typeof ae.unsign ? ae.unsign() : ae.save());
      }
      annulMonitoring(J, fe, ye) {
        return this.withComposition(J, fe, ye, ae => ae.delete());
      }
      createAndSave(J, fe, ye, ae) {
        return this.createAndPersist(J, fe, ye, ae, "save");
      }
      createAndSign(J, fe, ye, ae) {
        return this.createAndPersist(J, fe, ye, ae, "sign");
      }
      createAndPersist(J, fe, ye, ae, Y) {
        const G = function j(ke) {
          return {
            code: ke.code,
            name: ke.name,
            templateId: ke.templateId,
            active: !0,
            allowCreate: !0
          };
        }(ye);
        return this.getEhrForPatient(J, fe).pipe((0, d.w)(te => te.createMedicalEntry(G.code, fe, G)), (0, d.w)(te => (0, M.P)(() => {
          try {
            ae(te);
          } catch (pe) {
            return console.error("[Catheters] fill composition failed", {
              template: ye,
              error: pe
            }), (0, e._)(() => pe);
          }
          return "sign" === Y ? te.sign() : te.save();
        })), (0, b.K)(te => (console.error("[Catheters] createAndPersist failed", {
          patientId: J,
          careCaseId: fe,
          template: ye,
          mode: Y,
          error: te
        }), (0, e._)(() => te))));
      }
      withComposition(J, fe, ye, ae) {
        return J ? this.getEhrForPatient(fe, ye).pipe((0, d.w)(Y => Y.getMedicalEntry(J)), (0, d.w)(Y => (0, M.P)(() => ae(Y))), (0, b.K)(Y => (console.error("[Catheters] withComposition failed", {
          compositionUid: J,
          patientId: fe,
          careCaseId: ye,
          error: Y
        }), (0, e._)(() => Y)))) : (0, e._)(() => new Error("Не указан идентификатор композиции"));
      }
      getEhrForPatient(J, fe) {
        return this.resolvePatientEhrId(J, fe).pipe((0, d.w)(ye => ye ? this.compositionsBaseService.getEhr(ye) : (0, e._)(() => new Error("У пациента не найден ehrId"))));
      }
      resolvePatientEhrId(J, fe) {
        return this.patientService.getPatientQuery(J).pipe((0, d.w)(ye => ye?.ehrId ? (0, A.of)(ye.ehrId) : this.resolveEhrIdViaCareCase(fe, J)), (0, b.K)(ye => fe ? this.resolveEhrIdViaCareCase(fe, J).pipe((0, b.K)(() => (0, e._)(() => ye))) : (0, e._)(() => ye)));
      }
      resolveEhrIdViaCareCase(J, fe) {
        return J ? this.careCaseService.getCareCaseQuery(J).pipe((0, d.w)(ye => {
          const ae = this.resolvePatientId({
            careCase: ye
          }) || fe;
          return ae ? ae === fe ? (0, e._)(() => new Error(`\u0423 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 ${fe} \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ehrId`)) : this.patientService.getPatientQuery(ae).pipe((0, m.U)(Y => Y?.ehrId || "")) : (0, e._)(() => new Error("Не удалось определить patientId из обращения"));
        })) : (0, e._)(() => new Error(`\u0423 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 ${fe} \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ehrId`));
      }
      safeSetInitialValues(J, fe, ye) {
        try {
          J.setInitialValues(fe, {
            owner: ye
          });
        } catch (ae) {
          console.warn("[Catheters] setInitialValues skipped:", ae);
        }
      }
      applyMonitoringValues(J, fe, ye, ae, Y) {
        const G = this.resolveMonitoringCalendarDate(fe.monitoringDate),
          te = {
            ...fe,
            monitoringDate: G,
            monitoringDateTime: new Date(),
            owner: ae
          };
        (0, u.gr)(ye) ? new E(J.getRoot()).setValues(this.mapPeripheralMonitoring(te), "peripheral") : (0, u.Cj)(ye) ? new h(J.getRoot()).setValues(this.mapUrinaryMonitoring(te), "urinary", Y) : new x(J.getRoot()).setValues(this.mapCentralMonitoring(te), "peripheral", Y);
      }
      resolveCompositionUid(J) {
        const fe = J?.source,
          ae = [J?.compositionUid, fe?.compositionUid, fe?.cuid, fe?.CompositionUid, J?.compositionUid, J?.cuid, J?.CompositionUid];
        for (const Y of ae) {
          if (null == Y) continue;
          const G = `${Y}`.trim();
          if (G && "undefined" !== G && "null" !== G) return G;
        }
        return "";
      }
      enrichMonitoringPayload(J, fe) {
        const ae = `${fe?.monitoringDate || J?.monitoringDateKey || ""}`.trim(),
          Y = this.resolveMonitoringCalendarDate(ae || J?.monitoringDate);
        return {
          ...J,
          monitoringDate: Y,
          monitoringDateTime: new Date()
        };
      }
      parseMonitoringDate(J) {
        if (J instanceof Date && !Number.isNaN(J.getTime())) return new Date(J.getFullYear(), J.getMonth(), J.getDate());
        if (J && "object" == typeof J && "function" == typeof J.toDate) try {
          const fe = J.toDate();
          if (fe instanceof Date && !Number.isNaN(fe.getTime())) return new Date(fe.getFullYear(), fe.getMonth(), fe.getDate());
        } catch {}
        if ("string" == typeof J) {
          const fe = J.trim();
          if (fe.includes(".")) {
            const [Y, G] = fe.split(".").map(Number);
            if (Y && G) {
              const te = new Date(new Date().getFullYear(), G - 1, Y);
              return Number.isNaN(te.getTime()) ? null : te;
            }
          }
          const ye = fe.match(/^(\d{4})-(\d{2})-(\d{2})/);
          if (ye) return new Date(Number(ye[1]), Number(ye[2]) - 1, Number(ye[3]));
          const ae = new Date(fe);
          if (!Number.isNaN(ae.getTime())) return new Date(ae.getFullYear(), ae.getMonth(), ae.getDate());
        }
        return null;
      }
      resolveMonitoringCalendarDate(J) {
        return this.parseMonitoringDate(J) || new Date();
      }
      normalizeTreatmentEntries(J) {
        return Array.isArray(J) ? J.map(fe => fe && "object" == typeof fe ? fe : null).filter(fe => !!fe).filter(fe => null != fe.catheterTreatmentTime && "" !== `${fe.catheterTreatmentTime}`.trim()) : [];
      }
      resolvePatientId(J) {
        const fe = J?.careCase,
          ae = [fe?.actualPatientId, fe?.patientId, fe?.patient && "object" == typeof fe.patient ? fe.patient.id : null, J?.actualPatientId, J?.patientId];
        for (const Y of ae) {
          if (null == Y) continue;
          const G = `${Y}`.trim();
          if (G && "undefined" !== G && "null" !== G) return G;
        }
        return null;
      }
      resolveCareCaseId(J) {
        const fe = J?.careCase,
          ae = J?.data,
          Y = ae?.careCase,
          G = [fe?.careCaseId, fe?.id, fe?.CareCaseId, J?.careCaseId, J?.CareCaseId, J?.id, Y?.careCaseId, Y?.id, ae?.careCaseId];
        for (const te of G) {
          if (null == te) continue;
          const pe = `${te}`.trim();
          if (pe && "undefined" !== pe && "null" !== pe) return pe;
        }
        return null;
      }
      normalizeEhrTerminologyValue(J) {
        if (null == J) return null;
        const fe = `${J}`.trim();
        return fe ? fe.toLowerCase() : null;
      }
      mapPeripheralInstall(J) {
        const fe = J.installDatetimeSet;
        return {
          installDatetimeSet: fe,
          installDateTime: fe,
          catheterName: J.catheterName || "Периферический",
          catheterLocus: this.normalizeEhrTerminologyValue(J.peripheralCatheter?.catheterLocus),
          peripheralCatheterSize: J.peripheralCatheter?.peripheralCatheterSize,
          currentUser: J.currentUser,
          currentUserCode: J.currentUserCode
        };
      }
      mapUrinaryInstall(J) {
        const fe = J.installDatetimeSet,
          ye = J.urinaryCatheter || {};
        return {
          installDatetimeSet: fe,
          installDateTime: fe,
          urinaryCatheterType: this.normalizeEhrTerminologyValue(ye.urinaryCatheterType ?? J.urinaryCatheterType),
          urinaryCatheterSize: this.asNonEmptyString(ye.urinaryCatheterSize ?? J.urinaryCatheterSize),
          currentUser: J.currentUser,
          currentUserCode: J.currentUserCode
        };
      }
      asNonEmptyString(J) {
        return null == J || "" === J ? null : `${J}`.trim() || null;
      }
      mapCentralInstall(J) {
        return {
          installDatetimeSet: J.installDatetimeSet,
          catheterName: J.catheterName || "Центральный",
          vesselType: J.centralCatheter?.vesselType,
          localization: J.centralCatheter?.localization,
          catheterSize: J.centralCatheter?.catheterSize,
          catheterUnit: J.centralCatheter?.catheterUnit || "G"
        };
      }
      mapPeripheralMonitoring(J) {
        const fe = J.owner || J.currentUser,
          ye = !(!J.deletedDatetimeSet && !J.deletedReason),
          ae = this.normalizeTreatmentEntries(J.catheterTreatment).map(G => ({
            ...G,
            userAddCatheterTreatmentTime: G.userAddCatheterTreatmentTime || fe
          })),
          Y = (J.scaleAssessment || []).filter(G => null != G?.assessment && "" !== `${G.assessment}`.trim()).map(G => ({
            ...G,
            userAddAssessment: G.userAddAssessment || fe
          }));
        return {
          monitoringDate: J.monitoringDate,
          monitoringDateTime: J.monitoringDateTime,
          catheterTreatment: ae,
          scaleAssessment: Y,
          deletedDatetimeSet: ye ? J.deletedDatetimeSet : null,
          deletedReason: ye ? this.normalizeDeletionReason(J.deletedReason) : null,
          userDelete: ye ? J.userDelete : null,
          userDeleteCode: ye ? J.userDeleteCode : null,
          owner: fe
        };
      }
      mapUrinaryMonitoring(J) {
        const fe = J.owner || J.currentUser,
          ye = this.normalizeTreatmentEntries(J.treatment || J.catheterTreatment).map(G => ({
            ...G,
            userAddCatheterTreatmentTime: G.userAddCatheterTreatmentTime || fe
          })),
          ae = !(!J.deletedDatetimeSet && !J.deletedReason),
          Y = this.asNonEmptyString(J.userDeleteCode) || this.asNonEmptyString(J.currentUserCode);
        return {
          monitoringDate: J.monitoringDate,
          monitoringDateTime: J.monitoringDateTime,
          currentUser: fe,
          treatment: ye,
          inflammation: this.normalizeYesNoEhrValue(J.inflammation),
          userAddInflammationInfo: fe,
          discharge: this.normalizeYesNoEhrValue(J.discharge),
          userAddDischargeInfo: fe,
          urineColor: this.normalizeUrineColorEhrValue(J.urineColor),
          userAddUrineColorInfo: fe,
          deletedReason: ae ? this.normalizeDeletionReason(J.deletedReason) : null,
          deletedDatetimeSet: ae ? J.deletedDatetimeSet : null,
          userDelete: ae ? Y : null,
          userDeleteCode: ae ? Y : null,
          complications: this.normalizeEhrTerminologyValue(J.complications),
          additionalInformation: J.additionalInformation,
          userAddInfo: fe,
          owner: fe
        };
      }
      mapCentralMonitoring(J) {
        const fe = J.owner || J.currentUser,
          ye = !!(J.deletedTimeSet || J.deletedDatetimeSet || J.deletedReason);
        return {
          monitoringDate: J.monitoringDate,
          monitoringDateTime: J.monitoringDateTime,
          heparinMark: this.yesNoToBoolean(J.heparinMark),
          catheterTreatment: this.normalizeTreatmentEntries(J.catheterTreatment).map(ae => ({
            ...ae,
            treatmentDateTime: ae.treatmentDateTime || J.monitoringDateTime || new Date(),
            userAddCatheterTreatmentTime: ae.userAddCatheterTreatmentTime || fe
          })),
          deletedReason: ye ? this.normalizeCentralDeletionReason(J.deletedReason) : null,
          userDelete: ye ? J.userDelete : null,
          userDeleteCode: ye ? J.userDeleteCode : null,
          deletedTimeSet: ye ? J.deletedTimeSet : null,
          deletedDatetimeSet: ye ? J.deletedDatetimeSet : null,
          catheterCultureTime: ye ? J.catheterCultureTime : null,
          owner: fe
        };
      }
      yesNoToBoolean(J) {
        return "boolean" == typeof J ? J : "Да" === J || "да" === J || "Нет" !== J && "нет" !== J && null;
      }
      normalizeYesNoEhrValue(J) {
        return !0 === J || "Да" === J || "да" === J ? "да" : !1 === J || "Нет" === J || "нет" === J ? "нет" : "string" == typeof J && J.trim() ? J.trim().toLowerCase() : null;
      }
      normalizeUrineColorEhrValue(J) {
        if (null == J || "" === J) return null;
        const fe = `${J}`.trim().toLowerCase();
        return fe.startsWith("норма") ? "норма" : fe.startsWith("отклон") ? "отклонение" : fe;
      }
      normalizeDeletionReason(J) {
        return this.normalizeEhrTerminologyValue(J);
      }
      normalizeCentralDeletionReason(J) {
        const fe = this.normalizeEhrTerminologyValue(J);
        return fe ? {
          "отсутствие необходимости в дальнейшем нахождении": "отсутствие необходимости в дальнейшем нахождении",
          "болезненность, гиперемия, отёк": "болезненность, гиперемия, отёк",
          "болезненность, гиперемия, отек": "болезненность, гиперемия, отёк",
          "плановая замена": "плановая замена",
          "удалён пациентом": "удалён пациентом",
          "удален пациентом": "удалён пациентом",
          другое: "другое"
        }[fe] ?? null : null;
      }
    };
  let F = Le;
  Le.ɵfac = function (fe) {
    return new (fe || Le)(T.LFG(R.W), T.LFG(B.e6), T.LFG(y.lb));
  }, Le.ɵprov = T.Yz7({
    token: Le,
    factory: Le.ɵfac,
    providedIn: "root"
  });
});
