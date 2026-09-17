// Extracted from main; webpack module 44799. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
        1: "೧",
        2: "೨",
        3: "೩",
        4: "೪",
        5: "೫",
        6: "೬",
        7: "೭",
        8: "೮",
        9: "೯",
        0: "೦"
      },
      a = {
        "೧": "1",
        "೨": "2",
        "೩": "3",
        "೪": "4",
        "೫": "5",
        "೬": "6",
        "೭": "7",
        "೮": "8",
        "೯": "9",
        "೦": "0"
      };
    t.defineLocale("kn", {
      months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
      monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
      monthsParseExact: !0,
      weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
      weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
      weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm",
        LLLL: "dddd, D MMMM YYYY, A h:mm"
      },
      calendar: {
        sameDay: "[ಇಂದು] LT",
        nextDay: "[ನಾಳೆ] LT",
        nextWeek: "dddd, LT",
        lastDay: "[ನಿನ್ನೆ] LT",
        lastWeek: "[ಕೊನೆಯ] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s ನಂತರ",
        past: "%s ಹಿಂದೆ",
        s: "ಕೆಲವು ಕ್ಷಣಗಳು",
        ss: "%d ಸೆಕೆಂಡುಗಳು",
        m: "ಒಂದು ನಿಮಿಷ",
        mm: "%d ನಿಮಿಷ",
        h: "ಒಂದು ಗಂಟೆ",
        hh: "%d ಗಂಟೆ",
        d: "ಒಂದು ದಿನ",
        dd: "%d ದಿನ",
        M: "ಒಂದು ತಿಂಗಳು",
        MM: "%d ತಿಂಗಳು",
        y: "ಒಂದು ವರ್ಷ",
        yy: "%d ವರ್ಷ"
      },
      preparse: function (d) {
        return d.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function (M) {
          return a[M];
        });
      },
      postformat: function (d) {
        return d.replace(/\d/g, function (M) {
          return e[M];
        });
      },
      meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,
      meridiemHour: function (d, M) {
        return 12 === d && (d = 0), "ರಾತ್ರಿ" === M ? d < 4 ? d : d + 12 : "ಬೆಳಿಗ್ಗೆ" === M ? d : "ಮಧ್ಯಾಹ್ನ" === M ? d >= 10 ? d : d + 12 : "ಸಂಜೆ" === M ? d + 12 : void 0;
      },
      meridiem: function (d, M, b) {
        return d < 4 ? "ರಾತ್ರಿ" : d < 10 ? "ಬೆಳಿಗ್ಗೆ" : d < 17 ? "ಮಧ್ಯಾಹ್ನ" : d < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ";
      },
      dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/,
      ordinal: function (d) {
        return d + "ನೇ";
      },
      week: {
        dow: 0,
        doy: 6
      }
    });
  }(i(15439));
});
