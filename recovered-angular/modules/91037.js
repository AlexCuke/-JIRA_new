// Extracted from main; webpack module 91037. Factory, not an ES module.
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
      m = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
    t.defineLocale("ku", {
      months: m,
      monthsShort: m,
      weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
      weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
      weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      meridiemParse: /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c|\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc/,
      isPM: function (M) {
        return /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(M);
      },
      meridiem: function (M, b, A) {
        return M < 12 ? "به‌یانی" : "ئێواره‌";
      },
      calendar: {
        sameDay: "[ئه‌مرۆ كاتژمێر] LT",
        nextDay: "[به‌یانی كاتژمێر] LT",
        nextWeek: "dddd [كاتژمێر] LT",
        lastDay: "[دوێنێ كاتژمێر] LT",
        lastWeek: "dddd [كاتژمێر] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "له‌ %s",
        past: "%s",
        s: "چه‌ند چركه‌یه‌ك",
        ss: "چركه‌ %d",
        m: "یه‌ك خوله‌ك",
        mm: "%d خوله‌ك",
        h: "یه‌ك كاتژمێر",
        hh: "%d كاتژمێر",
        d: "یه‌ك ڕۆژ",
        dd: "%d ڕۆژ",
        M: "یه‌ك مانگ",
        MM: "%d مانگ",
        y: "یه‌ك ساڵ",
        yy: "%d ساڵ"
      },
      preparse: function (M) {
        return M.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (b) {
          return a[b];
        }).replace(/\u060c/g, ",");
      },
      postformat: function (M) {
        return M.replace(/\d/g, function (b) {
          return e[b];
        }).replace(/,/g, "،");
      },
      week: {
        dow: 6,
        doy: 12
      }
    });
  }(i(15439));
});
