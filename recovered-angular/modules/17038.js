// Extracted from main; webpack module 17038. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
        1: "١",
        2: "٢",
        3: "٣",
        4: "٤",
        5: "٥",
        6: "٦",
        7: "٧",
        8: "٨",
        9: "٩",
        0: "٠"
      },
      a = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
      },
      m = function (N) {
        return 0 === N ? 0 : 1 === N ? 1 : 2 === N ? 2 : N % 100 >= 3 && N % 100 <= 10 ? 3 : N % 100 >= 11 ? 4 : 5;
      },
      d = {
        s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
        m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
        h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
        d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
        M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
        y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
      },
      M = function (N) {
        return function (I, O, L, C) {
          var v = m(I),
            f = d[N][m(I)];
          return 2 === v && (f = f[O ? 0 : 1]), f.replace(/%d/i, I);
        };
      },
      b = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    t.defineLocale("ar", {
      months: b,
      monthsShort: b,
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
      isPM: function (N) {
        return "م" === N;
      },
      meridiem: function (N, I, O) {
        return N < 12 ? "ص" : "م";
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
        s: M("s"),
        ss: M("s"),
        m: M("m"),
        mm: M("m"),
        h: M("h"),
        hh: M("h"),
        d: M("d"),
        dd: M("d"),
        M: M("M"),
        MM: M("M"),
        y: M("y"),
        yy: M("y")
      },
      preparse: function (N) {
        return N.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (I) {
          return a[I];
        }).replace(/\u060c/g, ",");
      },
      postformat: function (N) {
        return N.replace(/\d/g, function (I) {
          return e[I];
        }).replace(/,/g, "،");
      },
      week: {
        dow: 6,
        doy: 12
      }
    });
  }(i(15439));
});
