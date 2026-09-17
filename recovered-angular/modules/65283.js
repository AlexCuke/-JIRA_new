// Extracted from main; webpack module 65283. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    t.defineLocale("hy-am", {
      months: {
        format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
        standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
      },
      monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
      weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
      weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
      weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY թ.",
        LLL: "D MMMM YYYY թ., HH:mm",
        LLLL: "dddd, D MMMM YYYY թ., HH:mm"
      },
      calendar: {
        sameDay: "[այսօր] LT",
        nextDay: "[վաղը] LT",
        lastDay: "[երեկ] LT",
        nextWeek: function () {
          return "dddd [օրը ժամը] LT";
        },
        lastWeek: function () {
          return "[անցած] dddd [օրը ժամը] LT";
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "%s հետո",
        past: "%s առաջ",
        s: "մի քանի վայրկյան",
        ss: "%d վայրկյան",
        m: "րոպե",
        mm: "%d րոպե",
        h: "ժամ",
        hh: "%d ժամ",
        d: "օր",
        dd: "%d օր",
        M: "ամիս",
        MM: "%d ամիս",
        y: "տարի",
        yy: "%d տարի"
      },
      meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,
      isPM: function (a) {
        return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(a);
      },
      meridiem: function (a) {
        return a < 4 ? "գիշերվա" : a < 12 ? "առավոտվա" : a < 17 ? "ցերեկվա" : "երեկոյան";
      },
      dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,
      ordinal: function (a, m) {
        switch (m) {
          case "DDD":
          case "w":
          case "W":
          case "DDDo":
            return 1 === a ? a + "-ին" : a + "-րդ";
          default:
            return a;
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  }(i(15439));
});
