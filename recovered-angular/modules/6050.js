// Extracted from main; webpack module 6050. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    t.defineLocale("ug-cn", {
      months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
      monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
      weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
      weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
      weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
        LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
        LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
      },
      meridiemParse: /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/,
      meridiemHour: function (a, m) {
        return 12 === a && (a = 0), "يېرىم كېچە" === m || "سەھەر" === m || "چۈشتىن بۇرۇن" === m ? a : "چۈشتىن كېيىن" === m || "كەچ" === m ? a + 12 : a >= 11 ? a : a + 12;
      },
      meridiem: function (a, m, d) {
        var M = 100 * a + m;
        return M < 600 ? "يېرىم كېچە" : M < 900 ? "سەھەر" : M < 1130 ? "چۈشتىن بۇرۇن" : M < 1230 ? "چۈش" : M < 1800 ? "چۈشتىن كېيىن" : "كەچ";
      },
      calendar: {
        sameDay: "[بۈگۈن سائەت] LT",
        nextDay: "[ئەتە سائەت] LT",
        nextWeek: "[كېلەركى] dddd [سائەت] LT",
        lastDay: "[تۆنۈگۈن] LT",
        lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s كېيىن",
        past: "%s بۇرۇن",
        s: "نەچچە سېكونت",
        ss: "%d سېكونت",
        m: "بىر مىنۇت",
        mm: "%d مىنۇت",
        h: "بىر سائەت",
        hh: "%d سائەت",
        d: "بىر كۈن",
        dd: "%d كۈن",
        M: "بىر ئاي",
        MM: "%d ئاي",
        y: "بىر يىل",
        yy: "%d يىل"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/,
      ordinal: function (a, m) {
        switch (m) {
          case "d":
          case "D":
          case "DDD":
            return a + "-كۈنى";
          case "w":
          case "W":
            return a + "-ھەپتە";
          default:
            return a;
        }
      },
      preparse: function (a) {
        return a.replace(/\u060c/g, ",");
      },
      postformat: function (a) {
        return a.replace(/,/g, "،");
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  }(i(15439));
});
