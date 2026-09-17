// Extracted from main; webpack module 15943. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    t.defineLocale("mk", {
      months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
      monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
      weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
      weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
      weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[Денес во] LT",
        nextDay: "[Утре во] LT",
        nextWeek: "[Во] dddd [во] LT",
        lastDay: "[Вчера во] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return "[Изминатата] dddd [во] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[Изминатиот] dddd [во] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "за %s",
        past: "пред %s",
        s: "неколку секунди",
        ss: "%d секунди",
        m: "една минута",
        mm: "%d минути",
        h: "еден час",
        hh: "%d часа",
        d: "еден ден",
        dd: "%d дена",
        M: "еден месец",
        MM: "%d месеци",
        y: "една година",
        yy: "%d години"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
      ordinal: function (a) {
        var m = a % 10,
          d = a % 100;
        return 0 === a ? a + "-ев" : 0 === d ? a + "-ен" : d > 10 && d < 20 ? a + "-ти" : 1 === m ? a + "-ви" : 2 === m ? a + "-ри" : 7 === m || 8 === m ? a + "-ми" : a + "-ти";
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  }(i(15439));
});
