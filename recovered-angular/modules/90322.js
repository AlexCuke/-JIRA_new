// Extracted from main; webpack module 90322. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    t.defineLocale("bg", {
      months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
      monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
      weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
      weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
      weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[Днес в] LT",
        nextDay: "[Утре в] LT",
        nextWeek: "dddd [в] LT",
        lastDay: "[Вчера в] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return "[Миналата] dddd [в] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[Миналия] dddd [в] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "след %s",
        past: "преди %s",
        s: "няколко секунди",
        ss: "%d секунди",
        m: "минута",
        mm: "%d минути",
        h: "час",
        hh: "%d часа",
        d: "ден",
        dd: "%d дена",
        w: "седмица",
        ww: "%d седмици",
        M: "месец",
        MM: "%d месеца",
        y: "година",
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
