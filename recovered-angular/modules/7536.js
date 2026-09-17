// Extracted from main; webpack module 7536. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    t.defineLocale("he", {
      months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
      monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
      weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
      weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
      weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [ב]MMMM YYYY",
        LLL: "D [ב]MMMM YYYY HH:mm",
        LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
        l: "D/M/YYYY",
        ll: "D MMM YYYY",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd, D MMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[היום ב־]LT",
        nextDay: "[מחר ב־]LT",
        nextWeek: "dddd [בשעה] LT",
        lastDay: "[אתמול ב־]LT",
        lastWeek: "[ביום] dddd [האחרון בשעה] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "בעוד %s",
        past: "לפני %s",
        s: "מספר שניות",
        ss: "%d שניות",
        m: "דקה",
        mm: "%d דקות",
        h: "שעה",
        hh: function (a) {
          return 2 === a ? "שעתיים" : a + " שעות";
        },
        d: "יום",
        dd: function (a) {
          return 2 === a ? "יומיים" : a + " ימים";
        },
        M: "חודש",
        MM: function (a) {
          return 2 === a ? "חודשיים" : a + " חודשים";
        },
        y: "שנה",
        yy: function (a) {
          return 2 === a ? "שנתיים" : a % 10 == 0 && 10 !== a ? a + " שנה" : a + " שנים";
        }
      },
      meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,
      isPM: function (a) {
        return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(a);
      },
      meridiem: function (a, m, d) {
        return a < 5 ? "לפנות בוקר" : a < 10 ? "בבוקר" : a < 12 ? d ? "לפנה\"צ" : "לפני הצהריים" : a < 18 ? d ? "אחה\"צ" : "אחרי הצהריים" : "בערב";
      }
    });
  }(i(15439));
});
