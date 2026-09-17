// Extracted from main; webpack module 20166. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Bg: () => N,
    DY: () => A,
    YM: () => M,
    uB: () => b
  });
  var t = i(71764),
    e = i.n(t),
    a = i(90274),
    m = i.n(a),
    d = i(98115);
  e().extend(m());
  const M = () => {
      const I = /^([01]\d|2[0-3]):([0-5]\d)$/;
      return O => {
        const L = O.value;
        return L ? I.test(L) ? null : {
          invalidTime: !0
        } : null;
      };
    },
    b = I => {
      const O = [];
      return I > 0 && O.push(0), I > 1 && O.push(1), I > 18 && O.push(2), I > 0 && I < 18 && O.push(3), I > 1 && I < 18 && O.push(4), I > 0 && I < 1 && O.push(5), O;
    },
    A = (I, O) => {
      const L = e()(I, d.nf);
      return e()(O, d.nf).diff(L, "minute") >= 60;
    },
    N = (I, O) => {
      const L = O.find(({
          group: u
        }) => "nutrient" === I.nutrition ? "nutrition" === u : "nutritionWater" === u),
        C = "nutrient" === I.nutrition ? "fractional" === I?.nutrientType : "fractional" === I?.nutrientTypeWater,
        v = "nutrient" === I.nutrition ? "long" === I?.nutrientType : "long" === I?.nutrientTypeWater;
      let f = "";
      const E = "Дробное введение",
        h = "Длительное, капельное введение",
        x = "nutrient" === I.nutrition ? I?.nutrientName : "Вода";
      if (I.check && L) {
        if (C && L.fractional) {
          const u = L.fractional.find(({
            time: T
          }) => I.fractionalTime === T);
          u && (f = `\u041d\u0430 \u044d\u0442\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0430 \u043e \u043f\u0438\u0442\u0430\u043d\u0438\u0438. ${E}: ${u.time} ${x}.`);
        }
        if (C && L.long) {
          const u = L.long.find(({
            startTime: T,
            endTime: R
          }) => I.fractionalTime >= T && I.fractionalTime <= R);
          u && (f = `\u041d\u0430 \u044d\u0442\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0430 \u043e \u043f\u0438\u0442\u0430\u043d\u0438\u0438. ${h}: ${u.startTime} - ${u.endTime} ${x}.`);
        }
        if (v && L.long) {
          const u = L.long.find(({
            startTime: T,
            endTime: R
          }) => I.longStartTime === T && I.longEndTime === R);
          u && (f = `\u041d\u0430 \u044d\u0442\u043e\u0442 \u043f\u0435\u0440\u0438\u043e\u0434 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0430 \u043e \u043f\u0438\u0442\u0430\u043d\u0438\u0438. ${h}: ${u.startTime} - ${u.endTime} ${x}.`);
        }
        if (v && L.long) {
          const u = L.long.find(({
            startTime: T,
            endTime: R
          }) => I.longStartTime > T && I.longStartTime < R || I.longEndTime > T && I.longEndTime < R || T > I.longStartTime && T < I.longEndTime || R > I.longStartTime && R < I.longEndTime);
          u && (f = `\u041d\u0430 \u0447\u0430\u0441\u0442\u044c \u043f\u0435\u0440\u0438\u043e\u0434\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0430 \u043e \u043f\u0438\u0442\u0430\u043d\u0438\u0438. ${h}: ${u.startTime} - ${u.endTime} ${x}.`);
        }
        if (v && L.fractional) {
          const u = L.fractional.find(({
            time: T
          }) => I.longStartTime <= T && I.longEndTime >= T);
          u && (f = `\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0435\u0440\u0438\u043e\u0434\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0430 \u043e \u043f\u0438\u0442\u0430\u043d\u0438\u0438. ${E}: ${u.time} ${x}.`);
        }
      }
      return f;
    };
});
