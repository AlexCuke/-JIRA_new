// Extracted from main; webpack module 98075. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    HV: () => a,
    VG: () => M,
    v0: () => m,
    ze: () => d
  });
  var t = i(69879),
    e = i(91455);
  function a(b) {
    if (null == b || "" === b) return null;
    const A = "number" == typeof b ? b : Number(b);
    return Number.isFinite(A) ? A : null;
  }
  function m(b, A) {
    const N = (0, e.mw)(b),
      I = (0, e.iY)(b);
    if ("weight" === A) {
      const O = N.weight;
      if (null != O && "" !== O) return O;
      const L = (0, t.vt)(b);
      if (null != L) return L;
    }
    if ("hr" === A) {
      const O = I.hr ?? I.pulse ?? I.heartRate;
      if (null != O && "" !== O) return O;
    }
    if ("rr" === A) {
      const O = I.rr ?? I.respiratoryRate;
      if (null != O && "" !== O) return O;
    }
    if ("sys" === A) {
      const O = I.sys ?? I.systolicPressure;
      if (null != O && "" !== O) return O;
    }
    if ("dia" === A) {
      const O = I.dia ?? I.diastolicPressure;
      if (null != O && "" !== O) return O;
    }
    if ("sp" === A) {
      const O = I.sp ?? I.spo2;
      if (null != O && "" !== O) return O;
    }
    if ("oxygenation" === A) {
      const O = I.oxygenation ?? I.demandOxygen;
      if (null != O && "" !== O) return O;
    }
    return N[A] ?? I[A] ?? null;
  }
  function d(b) {
    const A = (0, e.iY)(b),
      N = (0, e.mw)(b),
      I = A.temperature;
    if (null != I && "" !== I) return a(I);
    const O = N.temperature;
    if (null != O && "" !== O) return a(String(O).replace(",", "."));
    const L = N.temperatureMorning,
      C = N.temperatureEvening,
      v = new Date().getHours();
    return a(v >= 6 && v < 18 ? L ?? C : C ?? L);
  }
  function M(b) {
    if (null == b || "" === b) return "—";
    const A = String(b).replace(".", ",");
    return A.includes(",") ? A : `${A},0`;
  }
});
