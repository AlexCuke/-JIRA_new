// Extracted from main; webpack module 95811. Factory, not an ES module.
(function (Ae, V, i) {
  Ae.exports = function (t) {
    "use strict";

    var a = function e(C) {
        return C && "object" == typeof C && "default" in C ? C : {
          default: C
        };
      }(t),
      m = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
      d = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
      M = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
      b = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),
      A = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function N(C, v, f) {
      var E, h;
      return "m" === f ? v ? "минута" : "минуту" : C + " " + (E = +C, h = {
        mm: v ? "минута_минуты_минут" : "минуту_минуты_минут",
        hh: "час_часа_часов",
        dd: "день_дня_дней",
        MM: "месяц_месяца_месяцев",
        yy: "год_года_лет"
      }[f].split("_"), E % 10 == 1 && E % 100 != 11 ? h[0] : E % 10 >= 2 && E % 10 <= 4 && (E % 100 < 10 || E % 100 >= 20) ? h[1] : h[2]);
    }
    var I = function (C, v) {
      return A.test(v) ? m[C.month()] : d[C.month()];
    };
    I.s = d, I.f = m;
    var O = function (C, v) {
      return A.test(v) ? M[C.month()] : b[C.month()];
    };
    O.s = b, O.f = M;
    var L = {
      name: "ru",
      weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
      weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"),
      weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
      months: I,
      monthsShort: O,
      weekStart: 1,
      yearStart: 4,
      formats: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY г.",
        LLL: "D MMMM YYYY г., H:mm",
        LLLL: "dddd, D MMMM YYYY г., H:mm"
      },
      relativeTime: {
        future: "через %s",
        past: "%s назад",
        s: "несколько секунд",
        m: N,
        mm: N,
        h: "час",
        hh: N,
        d: "день",
        dd: N,
        M: "месяц",
        MM: N,
        y: "год",
        yy: N
      },
      ordinal: function (C) {
        return C;
      },
      meridiem: function (C) {
        return C < 4 ? "ночи" : C < 12 ? "утра" : C < 17 ? "дня" : "вечера";
      }
    };
    return a.default.locale(L, null, !0), L;
  }(i(71764));
});
