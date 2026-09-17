// Extracted from main; webpack module 52872. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
      words: {
        ss: ["секунда", "секунде", "секунди"],
        m: ["један минут", "једног минута"],
        mm: ["минут", "минута", "минута"],
        h: ["један сат", "једног сата"],
        hh: ["сат", "сата", "сати"],
        d: ["један дан", "једног дана"],
        dd: ["дан", "дана", "дана"],
        M: ["један месец", "једног месеца"],
        MM: ["месец", "месеца", "месеци"],
        y: ["једну годину", "једне године"],
        yy: ["годину", "године", "година"]
      },
      correctGrammaticalCase: function (m, d) {
        return m % 10 >= 1 && m % 10 <= 4 && (m % 100 < 10 || m % 100 >= 20) ? m % 10 == 1 ? d[0] : d[1] : d[2];
      },
      translate: function (m, d, M, b) {
        var N,
          A = e.words[M];
        return 1 === M.length ? "y" === M && d ? "једна година" : b || d ? A[0] : A[1] : (N = e.correctGrammaticalCase(m, A), "yy" === M && d && "годину" === N ? m + " година" : m + " " + N);
      }
    };
    t.defineLocale("sr-cyrl", {
      months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
      monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
      monthsParseExact: !0,
      weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
      weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
      weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D. M. YYYY.",
        LL: "D. MMMM YYYY.",
        LLL: "D. MMMM YYYY. H:mm",
        LLLL: "dddd, D. MMMM YYYY. H:mm"
      },
      calendar: {
        sameDay: "[данас у] LT",
        nextDay: "[сутра у] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[у] [недељу] [у] LT";
            case 3:
              return "[у] [среду] [у] LT";
            case 6:
              return "[у] [суботу] [у] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[у] dddd [у] LT";
          }
        },
        lastDay: "[јуче у] LT",
        lastWeek: function () {
          return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()];
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "за %s",
        past: "пре %s",
        s: "неколико секунди",
        ss: e.translate,
        m: e.translate,
        mm: e.translate,
        h: e.translate,
        hh: e.translate,
        d: e.translate,
        dd: e.translate,
        M: e.translate,
        MM: e.translate,
        y: e.translate,
        yy: e.translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    });
  }(i(15439));
});
