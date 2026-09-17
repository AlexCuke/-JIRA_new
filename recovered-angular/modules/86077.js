// Extracted from main; webpack module 86077. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
      a = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
    t.defineLocale("ur", {
      months: e,
      monthsShort: e,
      weekdays: a,
      weekdaysShort: a,
      weekdaysMin: a,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd، D MMMM YYYY HH:mm"
      },
      meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
      isPM: function (d) {
        return "شام" === d;
      },
      meridiem: function (d, M, b) {
        return d < 12 ? "صبح" : "شام";
      },
      calendar: {
        sameDay: "[آج بوقت] LT",
        nextDay: "[کل بوقت] LT",
        nextWeek: "dddd [بوقت] LT",
        lastDay: "[گذشتہ روز بوقت] LT",
        lastWeek: "[گذشتہ] dddd [بوقت] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s بعد",
        past: "%s قبل",
        s: "چند سیکنڈ",
        ss: "%d سیکنڈ",
        m: "ایک منٹ",
        mm: "%d منٹ",
        h: "ایک گھنٹہ",
        hh: "%d گھنٹے",
        d: "ایک دن",
        dd: "%d دن",
        M: "ایک ماہ",
        MM: "%d ماہ",
        y: "ایک سال",
        yy: "%d سال"
      },
      preparse: function (d) {
        return d.replace(/\u060c/g, ",");
      },
      postformat: function (d) {
        return d.replace(/,/g, "،");
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  }(i(15439));
});
