// Extracted from main; webpack module 17642. Factory, not an ES module.
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
      };
    t.defineLocale("ar-sa", {
      months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
      monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
      weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
      weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /\u0635|\u0645/,
      isPM: function (d) {
        return "م" === d;
      },
      meridiem: function (d, M, b) {
        return d < 12 ? "ص" : "م";
      },
      calendar: {
        sameDay: "[اليوم على الساعة] LT",
        nextDay: "[غدا على الساعة] LT",
        nextWeek: "dddd [على الساعة] LT",
        lastDay: "[أمس على الساعة] LT",
        lastWeek: "dddd [على الساعة] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "في %s",
        past: "منذ %s",
        s: "ثوان",
        ss: "%d ثانية",
        m: "دقيقة",
        mm: "%d دقائق",
        h: "ساعة",
        hh: "%d ساعات",
        d: "يوم",
        dd: "%d أيام",
        M: "شهر",
        MM: "%d أشهر",
        y: "سنة",
        yy: "%d سنوات"
      },
      preparse: function (d) {
        return d.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (M) {
          return a[M];
        }).replace(/\u060c/g, ",");
      },
      postformat: function (d) {
        return d.replace(/\d/g, function (M) {
          return e[M];
        }).replace(/,/g, "،");
      },
      week: {
        dow: 0,
        doy: 6
      }
    });
  }(i(15439));
});
