// Extracted from main; webpack module 32525. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
      a = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
    t.defineLocale("sd", {
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
        sameDay: "[اڄ] LT",
        nextDay: "[سڀاڻي] LT",
        nextWeek: "dddd [اڳين هفتي تي] LT",
        lastDay: "[ڪالهه] LT",
        lastWeek: "[گزريل هفتي] dddd [تي] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s پوء",
        past: "%s اڳ",
        s: "چند سيڪنڊ",
        ss: "%d سيڪنڊ",
        m: "هڪ منٽ",
        mm: "%d منٽ",
        h: "هڪ ڪلاڪ",
        hh: "%d ڪلاڪ",
        d: "هڪ ڏينهن",
        dd: "%d ڏينهن",
        M: "هڪ مهينو",
        MM: "%d مهينا",
        y: "هڪ سال",
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
