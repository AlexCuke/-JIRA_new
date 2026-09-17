// Extracted from main; webpack module 96474. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    AS: () => Et,
    CV: () => Le,
    Cj: () => A,
    DM: () => B,
    EN: () => a,
    Em: () => j,
    F1: () => Ue,
    Fz: () => fr,
    I_: () => Y,
    Ii: () => Me,
    N4: () => yi,
    PL: () => Mt,
    S$: () => L,
    SY: () => Je,
    Sk: () => fe,
    V5: () => N,
    V6: () => ae,
    Wu: () => G,
    XN: () => t.XN,
    bE: () => Jo,
    cJ: () => d,
    d6: () => m,
    e9: () => ye,
    ez: () => ut,
    gr: () => b,
    jj: () => t.jj,
    k4: () => te,
    k7: () => C,
    kk: () => y,
    n5: () => Ee,
    pn: () => v,
    pq: () => M,
    tI: () => Ii,
    vi: () => I,
    yP: () => n,
    yo: () => je,
    zE: () => O
  });
  var t = i(34102),
    e = i(88062);
  function a(pt) {
    const Dt = pt?.catheter;
    return Dt ? Array.isArray(Dt) ? Dt : Dt.elements ?? [] : [];
  }
  function m(pt) {
    if (!pt) return pt;
    const Dt = pt.catheter;
    return Array.isArray(Dt) ? pt.catheter = {
      elements: Dt
    } : Dt && !Dt.elements && (pt.catheter = {
      elements: []
    }), pt;
  }
  function d(pt) {
    if (!pt) return null;
    const Dt = pt instanceof Date ? pt : new Date(pt);
    return Number.isNaN(Dt.getTime()) ? null : (0, e.Kp)(Dt.toISOString());
  }
  function M(pt) {
    const Dt = pt?.department?.id;
    if (null == Dt) return null;
    const Ht = `${Dt}`.trim();
    return Ht && "undefined" !== Ht && "null" !== Ht ? Ht : null;
  }
  function b(pt) {
    return "Peripheral" === (0, t.jj)(pt);
  }
  function A(pt) {
    return "Urinary" === (0, t.jj)(pt);
  }
  function N(pt) {
    return "Central" === (0, t.jj)(pt);
  }
  function I(pt) {
    if (!pt) return "—";
    const Dt = pt instanceof Date ? pt : new Date(pt);
    return Number.isNaN(Dt.getTime()) ? "—" : new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "short"
    }).format(Dt).replace(".", "");
  }
  function O(pt) {
    if (!pt) return "—";
    const Dt = pt instanceof Date ? pt : new Date(pt);
    if (Number.isNaN(Dt.getTime())) return "—";
    const Dn = "string" == typeof pt && /\+03:00$/.test(pt.trim()) ? Dt : new Date(Dt.getTime() - 108e5);
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Moscow"
    }).format(Dn).replace(".", "");
  }
  function L(pt) {
    if (!pt) return "—";
    const Dt = pt instanceof Date ? pt : new Date(pt);
    return Number.isNaN(Dt.getTime()) ? "—" : new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Moscow"
    }).format(Dt).replace(".", "");
  }
  function C(pt) {
    if (!pt) return "";
    if ("string" == typeof pt) {
      const vt = pt.match(/^(\d{4})-(\d{2})-(\d{2})/);
      if (vt) return `${vt[3]}.${vt[2]}`;
    }
    const Dt = pt instanceof Date ? pt : new Date(pt);
    return Number.isNaN(Dt.getTime()) ? "" : `${String(Dt.getDate()).padStart(2, "0")}.${String(Dt.getMonth() + 1).padStart(2, "0")}`;
  }
  function v(pt) {
    return `${pt || ""}`.split("::")[0].trim();
  }
  const f = "catheter.careDateByCompositionUid",
    E = "catheter.careCompositionByDay";
  function h() {
    try {
      const pt = sessionStorage.getItem(f);
      if (!pt) return {};
      const Dt = JSON.parse(pt);
      return Dt && "object" == typeof Dt ? Dt : {};
    } catch {
      return {};
    }
  }
  function u() {
    try {
      const pt = sessionStorage.getItem(E);
      if (!pt) return {};
      const Dt = JSON.parse(pt);
      return Dt && "object" == typeof Dt ? Dt : {};
    } catch {
      return {};
    }
  }
  function R(pt, Dt) {
    const Ht = `${pt || ""}`.trim(),
      Dn = B(Dt);
    return Ht && Dn ? `${Ht}|${Dn}` : "";
  }
  function B(pt, Dt) {
    if (null == pt || "" === pt) return null;
    if (pt instanceof Date && !Number.isNaN(pt.getTime())) return `${pt.getFullYear()}-${String(pt.getMonth() + 1).padStart(2, "0")}-${String(pt.getDate()).padStart(2, "0")}`;
    if ("string" == typeof pt) {
      const Ht = pt.trim(),
        Dn = Ht.match(/^(\d{4})-(\d{2})-(\d{2})/);
      if (Dn) return `${Dn[1]}-${Dn[2]}-${Dn[3]}`;
      const vt = Ht.match(/^(\d{1,2})\.(\d{1,2})(?:\.(\d{2,4}))?$/);
      if (vt) {
        const li = vt[1].padStart(2, "0"),
          zn = vt[2].padStart(2, "0");
        let $t = vt[3] ? Number(2 === vt[3].length ? `20${vt[3]}` : vt[3]) : Dt ?? new Date().getFullYear();
        return Number.isFinite($t) || ($t = new Date().getFullYear()), `${$t}-${zn}-${li}`;
      }
      const an = new Date(Ht);
      if (!Number.isNaN(an.getTime())) return B(an);
    }
    return null;
  }
  function y(pt, Dt) {
    const Ht = v(pt),
      Dn = B(Dt);
    if (!Ht || !Dn) return;
    const vt = h();
    vt[Ht] = Dn, function x(pt) {
      try {
        sessionStorage.setItem(f, JSON.stringify(pt));
      } catch {}
    }(vt);
  }
  function j(pt, Dt, Ht) {
    const Dn = R(pt, Dt),
      vt = v(Ht);
    if (!Dn || !vt) return;
    const an = u();
    an[Dn] = vt, function T(pt) {
      try {
        sessionStorage.setItem(E, JSON.stringify(pt));
      } catch {}
    }(an), y(vt, Dt);
  }
  function Le(pt) {
    if (!pt) return "";
    const Dn = [pt.protocolId, pt.catheterId, pt.compositionUid, pt.protocolId, pt.catheterId, pt.compositionUid];
    for (const vt of Dn) {
      const an = `${vt ?? ""}`.trim();
      if (an && "undefined" !== an && "null" !== an) return an;
    }
    return "";
  }
  const ke = 3;
  function fe(pt) {
    const Dt = function J(pt) {
      if (!pt) return null;
      const Dt = pt instanceof Date ? pt : new Date(pt);
      return Number.isNaN(Dt.getTime()) ? null : (Date.now() - Dt.getTime()) / 864e5;
    }(pt);
    return null != Dt && Dt > ke;
  }
  function ye(pt) {
    return fe(pt) ? `\u041a\u0430\u0442\u0435\u0442\u0435\u0440 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0431\u043e\u043b\u0435\u0435 ${ke}-\u0445 \u0434\u043d\u0435\u0439` : null;
  }
  function ae(pt) {
    const Dt = pt.deletionTime ?? null,
      Ht = (pt.status || "").toUpperCase();
    return !(Dt || new Set(["DELETED", "REMOVED", "ANNULLED", "CANCELLED"]).has(Ht));
  }
  function Y(pt) {
    const Dt = (pt?.status || "").toUpperCase();
    return "SIGNED" === Dt || "COMPLETED" === Dt;
  }
  function G(pt, Dt) {
    if (null == pt || "" === pt) return "";
    if ("number" == typeof pt && !Number.isFinite(pt)) return "Обработка катетера" === Dt ? "✓" : "";
    const Ht = `${pt}`.trim();
    if (!Ht || "NaN" === Ht) return "Обработка катетера" === Dt ? "✓" : "";
    if ("Отметка о введении гепаринового раствора" === Dt) {
      if ("1" === Ht || "да" === Ht.toLowerCase()) return "Да";
      if ("0" === Ht || "нет" === Ht.toLowerCase()) return "Нет";
    }
    return "Цвет мочи" === Dt && Ht.toLowerCase().includes("откл") ? "Откл" : Ht;
  }
  function te(pt) {
    if (null == pt || "" === pt) return "";
    if ("number" == typeof pt) return Number.isFinite(pt) ? pt : "";
    if ("boolean" == typeof pt) return pt ? "Да" : "Нет";
    const Dt = `${pt}`.trim();
    if (!Dt || "NaN" === Dt) return "";
    const Ht = Dt.match(/^(\d{1,2}):(\d{2})(?::\d{2}(?:\.\d+)?)?$/);
    if (Ht) return `${Ht[1].padStart(2, "0")}:${Ht[2]}`;
    if (/^-?\d+([.,]\d+)?$/.test(Dt)) {
      const Dn = Number(Dt.replace(",", "."));
      return Number.isFinite(Dn) ? Dn : Dt;
    }
    return Dt;
  }
  function be(pt) {
    return C(pt.careDate) || C(function F(pt) {
      const Dt = v(pt);
      return Dt && h()[Dt] || null;
    }(pt.compositionUid)) || C(pt.protocolDate);
  }
  function le(pt) {
    const Ht = pt,
      Dn = pt;
    return be(pt) || C(Ht.observationDate || Dn.observationDate || Ht.lastTreatment || Ht.installDt || Dn.lastTreatment || Dn.installDt || Dn.protocoldate);
  }
  function n(pt) {
    if (!pt) return [];
    const Dt = pt.careRecords ?? pt.CareRecords;
    return Array.isArray(Dt) ? Dt : [];
  }
  function Se(pt) {
    const Dt = n(pt);
    if (!Dt.length || !pt || !A(pt.catheterType) && !N(pt.catheterType)) return Dt;
    const Ht = `${pt.protocolId || pt.compositionUid || ""}`.trim();
    if (!Ht) return Dt;
    const Dn = Dt.filter(vt => {
      const an = `${vt.compositionUid || ""}`.trim();
      return !!an && an !== Ht;
    });
    return Dn.length ? Dn : Dt;
  }
  function We(pt, Dt, Ht) {
    !Dt || null == Ht || "" === Ht || (pt.has(Dt) || pt.set(Dt, []), pt.get(Dt).push(Ht));
  }
  function Re(pt) {
    if (null == pt || "" === pt) return null;
    if ("boolean" == typeof pt) return pt ? "Да" : "Нет";
    const Dt = `${pt}`.trim().toLowerCase();
    return ["true", "1", "да", "yes", "y"].includes(Dt) ? "Да" : ["false", "0", "нет", "no", "n"].includes(Dt) ? "Нет" : `${pt}`.trim();
  }
  function mt(pt, Dt) {
    const Ht = pt.catheterType || pt.catheterType || pt.CateterType,
      Dn = (0, t.XN)(Ht),
      vt = ae(pt),
      an = [],
      li = zn => {
        const $t = Dt.get(zn);
        $t?.size && an.push({
          catheterName: Dn,
          locus: pt.locus,
          parameterName: zn,
          values: Array.from($t.entries()).flatMap(([Mn, Qn]) => Qn.map(In => ({
            date: Mn,
            value: In
          }))),
          active: vt,
          source: pt
        });
      };
    return b(Ht) ? (li("Оценка места Венепункции по шкале флебитов"), li("Обработка катетера"), an) : N(Ht) ? (li("Отметка о введении гепаринового раствора"), li("Обработка катетера"), an) : (li("Воспаление слизистой"), li("Выделения"), li("Цвет мочи"), li("Обработка катетера"), an);
  }
  function ut(pt) {
    return pt?.careCase ? [[pt.careCase.gender, null != pt.careCase.age ? `${pt.careCase.age}` : null, pt.careCase.birthDate ? new Intl.DateTimeFormat("ru-RU").format(new Date(pt.careCase.birthDate)) : null].filter(Boolean).join(", "), pt.careCase.admissionDepartmentName, pt.patientMovement?.wardName, pt.hospitalCard?.fullNumber || pt.hospitalCard?.number].filter(Ht => !!Ht) : [];
  }
  function Et(pt) {
    const Dt = [];
    return pt.forEach(Ht => {
      const Dn = function Rt(pt) {
          const Dt = function qe(pt) {
            const Dt = n(pt);
            return Dt.length ? Dt.reduce((Ht, Dn) => {
              if (!Ht) return Dn;
              const vt = Ht.updated || Ht.protocolDate ? new Date(Ht.updated || Ht.protocolDate || 0).getTime() : 0;
              return (Dn.updated || Dn.protocolDate ? new Date(Dn.updated || Dn.protocolDate || 0).getTime() : 0) >= vt ? Dn : Ht;
            }, Dt[0]) : null;
          }(pt) || {};
          return {
            ...pt,
            ...Dt,
            catheterId: pt.catheterId,
            careCaseId: pt.careCaseId,
            catheterType: pt.catheterType,
            compositionUid: Dt.compositionUid || pt.compositionUid,
            protocolId: Dt.catheterProtocolId || pt.protocolId,
            installDt: pt.installDt,
            locus: pt.locus,
            placeAssessment: Ii(Dt)[0] ?? pt.placeAssessment,
            deletionTime: Dt.deletionTime || pt.deletionTime,
            deletionReason: Dt.deletionReason,
            comment: Dt.comment || pt.comment,
            status: pt.status,
            statusHistory: pt.statusHistory,
            updated: Dt.updated || pt.updated,
            careRecords: pt.careRecords
          };
        }(Ht),
        vt = new Map();
      if (n(Ht).length) {
        const zn = Se(Ht);
        zn.forEach($t => {
          !function st(pt, Dt, Ht, Dn) {
            const vt = be(Ht);
            if (vt && (Ht.treatmentTime || Ht.treatmentVal)) {
              const an = pt.get("Обработка катетера") || new Map(),
                li = te(Ht.treatmentVal || Ht.treatmentTime);
              (an.get(vt) || []).some($t => `${$t}` == `${li}`) || (We(an, vt, li), pt.set("Обработка катетера", an));
            }
          }(vt, 0, $t);
        }), function q(pt, Dt, Ht) {
          const Dn = new Map();
          Ht.forEach(vt => {
            const an = be(vt);
            an && (Dn.has(an) || Dn.set(an, []), Dn.get(an).push(vt));
          }), Dn.forEach((vt, an) => {
            const li = Nn(vt);
            if (li && !b(Dt)) {
              if (N(Dt)) {
                const zn = Re(li.heparinInfo);
                if (zn) {
                  const $t = pt.get("Отметка о введении гепаринового раствора") || new Map();
                  $t.set(an, [zn]), pt.set("Отметка о введении гепаринового раствора", $t);
                }
                return;
              }
              if (null != li.inflammation && "" !== `${li.inflammation}`.trim()) {
                const zn = pt.get("Воспаление слизистой") || new Map();
                zn.set(an, [Re(li.inflammation) || te(li.inflammation)]), pt.set("Воспаление слизистой", zn);
              }
              if (null != li.excretion && "" !== `${li.excretion}`.trim()) {
                const zn = pt.get("Выделения") || new Map();
                zn.set(an, [Re(li.excretion) || te(li.excretion)]), pt.set("Выделения", zn);
              }
              if (li.urineColor) {
                const zn = pt.get("Цвет мочи") || new Map();
                zn.set(an, [te(li.urineColor)]), pt.set("Цвет мочи", zn);
              }
            }
          });
        }(vt, Ht.catheterType, zn), b(Ht.catheterType) && function Pi(pt, Dt) {
          const Ht = new Map();
          Dt.forEach(Dn => {
            const vt = be(Dn);
            vt && (Ht.has(vt) || Ht.set(vt, []), Ht.get(vt).push(Dn));
          }), Ht.forEach((Dn, vt) => {
            const li = Ii(Nn(Dn));
            if (!li.length) return;
            const zn = pt.get("Оценка места Венепункции по шкале флебитов") || new Map();
            li.forEach($t => {
              We(zn, vt, te($t));
            }), pt.set("Оценка места Венепункции по шкале флебитов", zn);
          });
        }(vt, zn);
      } else if (null != Ht.placeAssessment && "" !== `${Ht.placeAssessment}`.trim()) {
        const zn = C(Ht.installDt);
        if (zn && b(Ht.catheterType)) {
          const $t = new Map();
          We($t, zn, te(Ht.placeAssessment)), vt.set("Оценка места Венепункции по шкале флебитов", $t);
        }
      }
      const li = mt(Dn, vt);
      if (!li.length) {
        const zn = C(Ht.installDt);
        zn && li.push({
          catheterName: (0, t.XN)(Ht.catheterType),
          locus: Ht.locus,
          parameterName: "Обработка катетера",
          values: [{
            date: zn,
            value: "—"
          }],
          active: ae(Ht),
          source: Dn
        });
      }
      Dt.push(...li);
    }), Dt;
  }
  function Ue(pt = []) {
    const Dt = new Map();
    pt.forEach(Dn => {
      const vt = function pe(pt) {
        const Dt = pt.catheterId;
        return Dt ? `${Dt}` : pt.protocolId || pt.protocolId || pt.compositionUid || pt.CompositionUid || pt.cuid || `${pt.catheterType || pt.catheterType || pt.CateterType}_${pt.locus || ""}_${pt.installDt || pt.installDt || pt.protocoldate}`;
      }(Dn);
      Dt.has(vt) || Dt.set(vt, []), Dt.get(vt).push(Dn);
    });
    const Ht = [];
    return Dt.forEach(Dn => {
      const vt = Dn[0],
        an = vt,
        li = vt.resolvedType || vt.catheterType || vt.CateterType,
        zn = le(vt),
        $t = new Map(),
        Mn = an.lastMonitoringForm,
        In = (Array.isArray(Mn?.catheterTreatment) ? Mn?.catheterTreatment : Array.isArray(Mn?.treatment) ? Mn?.treatment : []).map(bi => bi?.catheterTreatmentTime).find(bi => null != bi && "" !== `${bi}`.trim()),
        ui = Array.isArray(Mn?.scaleAssessment) ? Mn.scaleAssessment.map(bi => bi?.assessment).find(bi => null != bi && "" !== `${bi}`.trim()) : null;
      if (zn) if (b(li)) {
        const bi = ui ?? an.placeAssessment;
        if (null != bi && "" !== bi) {
          const Xn = new Map();
          We(Xn, zn, te(bi)), $t.set("Оценка места Венепункции по шкале флебитов", Xn);
        }
        const qn = In ?? an.treatmentTime;
        if (qn) {
          const Xn = new Map();
          We(Xn, zn, te(qn)), $t.set("Обработка катетера", Xn);
        }
      } else if (N(li)) {
        const bi = new Map();
        We(bi, zn, "Нет"), $t.set("Отметка о введении гепаринового раствора", bi);
      } else {
        const bi = new Map(),
          qn = Mn?.inflammation ?? an.inflammation;
        null != qn && "" !== qn && (We(bi, zn, te(qn)), $t.set("Воспаление слизистой", bi));
        const Xn = new Map(),
          Yi = Mn?.discharge ?? an.excretion;
        null != Yi && "" !== Yi && (We(Xn, zn, "boolean" == typeof Yi ? Yi ? "Да" : "Нет" : te(Yi)), $t.set("Выделения", Xn));
        const Eo = new Map(),
          Fo = Mn?.urineColor ?? an.urineColorVal ?? an.urineColor;
        null != Fo && "" !== Fo && (We(Eo, zn, te(Fo)), $t.set("Цвет мочи", Eo));
        const br = In ?? an.treatmentTime;
        if (br) {
          const Pr = new Map();
          We(Pr, zn, te(br)), $t.set("Обработка катетера", Pr);
        }
      }
      const To = mt(vt, $t);
      if (!To.length) {
        const bi = le(vt);
        bi && To.push({
          catheterName: (0, t.XN)(li),
          locus: vt.locus,
          parameterName: "Обработка катетера",
          values: [{
            date: bi,
            value: "—"
          }],
          active: ae(vt),
          source: vt
        });
      }
      Ht.push(...To);
    }), Ht;
  }
  function Me(pt) {
    if (!pt) return null;
    const [Dt, Ht] = pt.split(".").map(Number);
    if (!Dt || !Ht) return null;
    const Dn = new Date(new Date().getFullYear(), Ht - 1, Dt);
    return Number.isNaN(Dn.getTime()) ? null : Dn;
  }
  function Ke(pt) {
    if (!pt) return "";
    const Dt = [pt.compositionUid, pt.cuid, pt.CompositionUid];
    for (const Ht of Dt) {
      if (null == Ht) continue;
      const Dn = `${Ht}`.trim();
      if (Dn && "undefined" !== Dn && "null" !== Dn) return Dn;
    }
    return "";
  }
  function Ze(pt) {
    let Dt = 0;
    Ii(pt).length && (Dt += 2), (pt.treatmentTime || pt.treatmentVal) && (Dt += 1), null != pt.inflammation && "" !== `${pt.inflammation}`.trim() && (Dt += 2), null != pt.excretion && "" !== `${pt.excretion}`.trim() && (Dt += 2), pt.urineColor && (Dt += 2), pt.complication && (Dt += 1), pt.extraInformation && (Dt += 1), null != pt.heparinInfo && "" !== `${pt.heparinInfo}`.trim() && (Dt += 2);
    const Ht = pt.updated ? new Date(pt.updated).getTime() : 0;
    return 1e6 * Dt + (Number.isFinite(Ht) ? Ht : 0);
  }
  function Ee(pt, Dt) {
    return pt && Dt ? Se(pt).filter(Ht => be(Ht) === Dt) : [];
  }
  function je(pt, Dt) {
    const Ht = Ee(pt, Dt),
      Dn = `${pt?.protocolId || pt?.compositionUid || pt?.protocolId || pt?.compositionUid || ""}`.trim();
    if (Ht.length) {
      const an = [...Ht].sort((li, zn) => Ze(zn) - Ze(li));
      for (const li of an) {
        const zn = `${li.compositionUid || ""}`.trim();
        if (zn && "undefined" !== zn && "null" !== zn && (!Dn || zn !== Dn)) return zn;
      }
    }
    const vt = function W(pt, Dt) {
      const Ht = R(pt, Dt);
      return Ht ? v(u()[Ht]) : "";
    }(Le(pt), Dt);
    return !vt || Dn && vt === Dn ? "" : vt;
  }
  function Mt(pt, Dt, Ht) {
    return je(pt, Dt) || (!1 === Ht?.allowSourceFallback ? "" : Ke(pt));
  }
  function Je(pt) {
    const Dt = new Set(),
      Ht = [];
    return pt.forEach(Dn => {
      const an = `${te(Dn.treatmentVal || Dn.treatmentTime)}`.trim();
      !an || Dt.has(an) || (Dt.add(an), Ht.push(an));
    }), Ht;
  }
  function Xt(pt) {
    if (!pt) return Number.NEGATIVE_INFINITY;
    const Dt = pt.treatmentTime || pt.treatmentVal;
    if (null == Dt || "" === `${Dt}`.trim()) return Number.NEGATIVE_INFINITY;
    const Ht = `${Dt}`.trim();
    if (Ht.match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{1,2}):(\d{2})(?::(\d{2}))?/)) {
      const li = new Date(Ht);
      if (!Number.isNaN(li.getTime())) return li.getTime();
    }
    const vt = Ht.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
    if (vt) {
      const li = B(pt.careDate) || B(pt.protocolDate) || B(pt.updated),
        zn = li ? new Date(`${li}T00:00:00`) : new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
      return zn.setHours(Number(vt[1]), Number(vt[2]), Number(vt[3] || 0), 0), zn.getTime();
    }
    const an = new Date(Ht);
    return Number.isNaN(an.getTime()) ? Number.NEGATIVE_INFINITY : an.getTime();
  }
  function Nn(pt) {
    return pt?.length ? pt.reduce((Dt, Ht) => {
      const Dn = Xt(Dt),
        vt = Xt(Ht);
      if (vt > Dn) return Ht;
      if (vt === Dn) {
        const an = Dt.updated ? new Date(Dt.updated).getTime() : 0;
        return (Ht.updated ? new Date(Ht.updated).getTime() : 0) >= an ? Ht : Dt;
      }
      return Dt;
    }, pt[0]) : null;
  }
  function Ii(pt) {
    if (!pt) return [];
    const Dt = pt.venipunctureAssessments;
    return Array.isArray(Dt) && Dt.length ? Dt.map(Ht => `${Ht ?? ""}`.trim()).filter(Ht => !!Ht) : null != pt.venipunctureAssessment && "" !== `${pt.venipunctureAssessment}`.trim() ? [`${pt.venipunctureAssessment}`.trim()] : [];
  }
  function yi(pt) {
    return Ii(Nn(pt));
  }
  function Jo(pt) {
    if (!pt) return "";
    const Dt = [],
      Ht = function co(pt) {
        switch ((0, t.jj)(pt)) {
          case "Peripheral":
            return "Периферический в/в катетер";
          case "Central":
            return "Центральный венозный катетер";
          case "Urinary":
            return "Мочевой катетер Фолея";
          default:
            return (0, t.XN)(pt);
        }
      }(pt.resolvedType || pt.catheterType || pt.CateterType);
    Ht && "—" !== Ht && Dt.push(Ht);
    const Dn = `${pt.locus || ""}`.trim();
    if (Dn) {
      const li = Dn.charAt(0).toUpperCase() + Dn.slice(1);
      Dt.push(`\u041c\u0435\u0441\u0442\u043e: ${li}`);
    }
    const vt = pt,
      an = vt.catheterSize ?? vt.catheterParameter;
    return null != an && `${an}`.trim() && Dt.push(`\u0420\u0430\u0437\u043c\u0435\u0440: ${`${an}`.trim()}`), "string" == typeof vt.catheterFoleyType && vt.catheterFoleyType.trim() && Dt.push(`\u0422\u0438\u043f: ${vt.catheterFoleyType.trim()}`), "string" == typeof vt.catheterInfo && vt.catheterInfo.trim() && Dt.push(vt.catheterInfo.trim()), Dt.join("\n");
  }
  function fr(pt, Dt, Ht) {
    if (!pt?.length) return pt || [];
    const Dn = Ke(Dt?.source) || Ke(Dt) || Dt?.compositionUid || "";
    if (!Dn) return pt;
    const vt = Ht.monitoringDate || Me(Dt?.monitoringDate || "") || new Date(),
      li = (Ht.catheterTreatment || Ht.treatment || []).map($t => $t?.catheterTreatmentTime).find($t => !!$t),
      zn = (Ht.scaleAssessment || []).map($t => $t?.assessment).find($t => null != $t && "" !== $t);
    return pt.map($t => {
      if (Ke($t) !== Dn) return $t;
      const Qn = {
        ...$t
      };
      return Qn.lastTreatment = vt, Qn.observationDate = vt, Qn.lastMonitoringForm = {
        ...Ht
      }, li && (Qn.treatmentTime = `${li}`), void 0 !== zn && (Qn.placeAssessment = `${zn}`), null != Ht.inflammation && "" !== `${Ht.inflammation}`.trim() && (Qn.inflammation = `${Ht.inflammation}`), null != Ht.discharge && "" !== `${Ht.discharge}`.trim() && (Qn.excretion = `${Ht.discharge}`), null != Ht.urineColor && "" !== `${Ht.urineColor}`.trim() && (Qn.urineColor = `${Ht.urineColor}`), "annul" === Ht.action && (Qn.status = "ANNULLED"), Qn;
    });
  }
});
