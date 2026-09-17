// Extracted from main; webpack module 56417. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹",
        0: "۰"
      },
      a = {
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        "۰": "0"
      };
    t.defineLocale("fa", {
      months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
      monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
      weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
      weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
      weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,
      isPM: function (d) {
        return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(d);
      },
      meridiem: function (d, M, b) {
        return d < 12 ? "قبل از ظهر" : "بعد از ظهر";
      },
      calendar: {
        sameDay: "[امروز ساعت] LT",
        nextDay: "[فردا ساعت] LT",
        nextWeek: "dddd [ساعت] LT",
        lastDay: "[دیروز ساعت] LT",
        lastWeek: "dddd [پیش] [ساعت] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "در %s",
        past: "%s پیش",
        s: "چند ثانیه",
        ss: "%d ثانیه",
        m: "یک دقیقه",
        mm: "%d دقیقه",
        h: "یک ساعت",
        hh: "%d ساعت",
        d: "یک روز",
        dd: "%d روز",
        M: "یک ماه",
        MM: "%d ماه",
        y: "یک سال",
        yy: "%d سال"
      },
      preparse: function (d) {
        return d.replace(/[\u06f0-\u06f9]/g, function (M) {
          return a[M];
        }).replace(/\u060c/g, ",");
      },
      postformat: function (d) {
        return d.replace(/\d/g, function (M) {
          return e[M];
        }).replace(/,/g, "،");
      },
      dayOfMonthOrdinalParse: /\d{1,2}\u0645/,
      ordinal: "%dم",
      week: {
        dow: 6,
        doy: 12
      }
    });
  }(i(15439));
});
