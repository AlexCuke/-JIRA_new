// Extracted from main; webpack module 50802. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    _: () => b,
    h: () => M
  });
  var t = i(71764),
    e = i.n(t),
    a = i(98115);
  const d = (A, N) => {
      const I = N.split(".");
      let O = A;
      for (const L of I) {
        if (!O[L]) {
          O = "";
          break;
        }
        Array.isArray(O[L]) && (O = O[L][0], L.includes("время") && "string" == typeof O && (O = O.split(":").slice(0, 2).join(":"))), "string" == typeof O[L] && (O = O[L]), "number" == typeof O[L] && (O = O[L].toString());
      }
      return O;
    },
    M = A => a.UK.reduce((I, O) => {
      const L = ((A, N) => {
        const I = N.split(".");
        let O = A,
          L = 0;
        for (const C of I) {
          if (!O[C]) {
            O = null;
            break;
          }
          O = Array.isArray(O[C]) && L != I.length - 1 ? O[C][0] : O[C], L++;
        }
        return O;
      })(A.composition, O.path);
      if (L) if ("nutrition" === O.group || "nutritionWater" === O.group) {
        const C = L.map(E => ({
            time: d(E, O.time),
            empId: d(E, O.fractionalEmpId),
            empFio: d(E, O.fractionalEmpFio),
            value: d(E, O.fractionalValue)
          })).filter(E => E.time),
          v = L.map(E => ({
            startTime: d(E, O.startTime),
            endTime: d(E, O.endTime),
            empId: d(E, O.longEmpId),
            empFio: d(E, O.longEmpFio),
            value: d(E, O.longValue)
          })).filter(E => E.startTime),
          f = {
            group: O.group,
            label: O.label
          };
        C.length && (f.fractional = C), v.length && (f.long = v), ("fractional" in f || "long" in f) && I.push(f);
      } else {
        const C = L.map(v => {
          const f = {
            time: d(v, O.time),
            empId: d(v, O.empId),
            empFio: d(v, O.empFio)
          };
          return O.desc && (f.desc = d(v, O.desc)), O.size && (f.size = d(v, O.size)), O.reason && (f.reason = d(v, O.reason)), O.complication && (f.complication = d(v, O.complication)), O.comment && (f.comment = d(v, O.comment)), f;
        });
        I.push({
          group: O.group,
          label: O.label,
          events: C
        });
      }
      return I;
    }, []),
    b = (A, N, I, O, L, C) => {
      const v = O.find(f => e()(f.observationDate).format(a.nC) === e()(C).format(a.nC));
      return {
        isRoot: e()(I).format(a.nC) === e()(C).format(a.nC),
        protocolId: N,
        careCaseId: A,
        observationDate: e()(C).format(a.nC),
        installDate: e()(I).format(a.nC),
        childComposition: v ? v.compositionId : null,
        replacement: {
          check: L.replacement.check,
          time: L.replacement.time,
          size: L.replacement.size
        },
        nasalTreatment: {
          check: L.nasalTreatment.check,
          time: L.nasalTreatment.time
        },
        inflammation: {
          check: L.inflammation.check,
          time: L.inflammation.time,
          desc: L.inflammation.desc
        },
        bandage: {
          check: L.bandage.check,
          time: L.bandage.time
        },
        complaint: {
          check: L.complaint.check,
          time: L.complaint.time,
          desc: L.complaint.desc
        },
        addInfo: {
          check: L.addInfo.check,
          time: L.addInfo.time,
          desc: L.addInfo.desc
        },
        nutrition: {
          check: L.nutrition.check,
          nutrientName: L.nutrition.nutrientName,
          fractional: {
            check: "fractional" === L.nutrition.nutrientType,
            time: L.nutrition.fractionalTime,
            value: L.nutrition.fractionalValue
          },
          long: {
            check: "long" === L.nutrition.nutrientType,
            startTime: L.nutrition.longStartTime,
            endTime: L.nutrition.longEndTime,
            value: L.nutrition.longValue
          }
        },
        nutritionWater: {
          check: L.nutritionWater.check,
          fractional: {
            check: "fractional" === L.nutritionWater.nutrientTypeWater,
            time: L.nutritionWater.fractionalTime,
            value: L.nutritionWater.fractionalValue
          },
          long: {
            check: "long" === L.nutritionWater.nutrientTypeWater,
            startTime: L.nutritionWater.longStartTime,
            endTime: L.nutritionWater.longEndTime,
            value: L.nutritionWater.longValue
          }
        },
        deleteTube: {
          check: L.deleteTube.check,
          time: L.deleteTube.time,
          reason: L.deleteTube.reason,
          complication: L.deleteTube.complication
        },
        finishTube: {
          check: L.finishTube.check,
          time: L.finishTube.time,
          comment: L.finishTube.comment
        }
      };
    };
});
