// Extracted from main; webpack module 52502. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = function (b) {
        return 0 === b ? 0 : 1 === b ? 1 : 2 === b ? 2 : b % 100 >= 3 && b % 100 <= 10 ? 3 : b % 100 >= 11 ? 4 : 5;
      },
      a = {
        s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
        m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
        h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
        d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
        M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
        y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
      },
      m = function (b) {
        return function (A, N, I, O) {
          var L = e(A),
            C = a[b][e(A)];
          return 2 === L && (C = C[N ? 0 : 1]), C.replace(/%d/i, A);
        };
      },
      d = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    t.defineLocale("ar-dz", {
      months: d,
      monthsShort: d,
      weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
      weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/‏M/‏YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /\u0635|\u0645/,
      isPM: function (b) {
        return "م" === b;
      },
      meridiem: function (b, A, N) {
        return b < 12 ? "ص" : "م";
      },
      calendar: {
        sameDay: "[اليوم عند الساعة] LT",
        nextDay: "[غدًا عند الساعة] LT",
        nextWeek: "dddd [عند الساعة] LT",
        lastDay: "[أمس عند الساعة] LT",
        lastWeek: "dddd [عند الساعة] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "بعد %s",
        past: "منذ %s",
        s: m("s"),
        ss: m("s"),
        m: m("m"),
        mm: m("m"),
        h: m("h"),
        hh: m("h"),
        d: m("d"),
        dd: m("d"),
        M: m("M"),
        MM: m("M"),
        y: m("y"),
        yy: m("y")
      },
      postformat: function (b) {
        return b.replace(/,/g, "،");
      },
      week: {
        dow: 0,
        doy: 4
      }
    });
  }(i(15439));
});
