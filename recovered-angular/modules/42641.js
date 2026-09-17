// Extracted from main; webpack module 42641. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
        1: "૧",
        2: "૨",
        3: "૩",
        4: "૪",
        5: "૫",
        6: "૬",
        7: "૭",
        8: "૮",
        9: "૯",
        0: "૦"
      },
      a = {
        "૧": "1",
        "૨": "2",
        "૩": "3",
        "૪": "4",
        "૫": "5",
        "૬": "6",
        "૭": "7",
        "૮": "8",
        "૯": "9",
        "૦": "0"
      };
    t.defineLocale("gu", {
      months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
      monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
      monthsParseExact: !0,
      weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
      weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
      weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
      longDateFormat: {
        LT: "A h:mm વાગ્યે",
        LTS: "A h:mm:ss વાગ્યે",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm વાગ્યે",
        LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
      },
      calendar: {
        sameDay: "[આજ] LT",
        nextDay: "[કાલે] LT",
        nextWeek: "dddd, LT",
        lastDay: "[ગઇકાલે] LT",
        lastWeek: "[પાછલા] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s મા",
        past: "%s પહેલા",
        s: "અમુક પળો",
        ss: "%d સેકંડ",
        m: "એક મિનિટ",
        mm: "%d મિનિટ",
        h: "એક કલાક",
        hh: "%d કલાક",
        d: "એક દિવસ",
        dd: "%d દિવસ",
        M: "એક મહિનો",
        MM: "%d મહિનો",
        y: "એક વર્ષ",
        yy: "%d વર્ષ"
      },
      preparse: function (d) {
        return d.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function (M) {
          return a[M];
        });
      },
      postformat: function (d) {
        return d.replace(/\d/g, function (M) {
          return e[M];
        });
      },
      meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,
      meridiemHour: function (d, M) {
        return 12 === d && (d = 0), "રાત" === M ? d < 4 ? d : d + 12 : "સવાર" === M ? d : "બપોર" === M ? d >= 10 ? d : d + 12 : "સાંજ" === M ? d + 12 : void 0;
      },
      meridiem: function (d, M, b) {
        return d < 4 ? "રાત" : d < 10 ? "સવાર" : d < 17 ? "બપોર" : d < 20 ? "સાંજ" : "રાત";
      },
      week: {
        dow: 0,
        doy: 6
      }
    });
  }(i(15439));
});
