// Extracted from main; webpack module 69801. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
      0: "-ум",
      1: "-ум",
      2: "-юм",
      3: "-юм",
      4: "-ум",
      5: "-ум",
      6: "-ум",
      7: "-ум",
      8: "-ум",
      9: "-ум",
      10: "-ум",
      12: "-ум",
      13: "-ум",
      20: "-ум",
      30: "-юм",
      40: "-ум",
      50: "-ум",
      60: "-ум",
      70: "-ум",
      80: "-ум",
      90: "-ум",
      100: "-ум"
    };
    t.defineLocale("tg", {
      months: {
        format: "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split("_"),
        standalone: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_")
      },
      monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
      weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
      weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
      weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Имрӯз соати] LT",
        nextDay: "[Фардо соати] LT",
        lastDay: "[Дирӯз соати] LT",
        nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
        lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "баъди %s",
        past: "%s пеш",
        s: "якчанд сония",
        m: "як дақиқа",
        mm: "%d дақиқа",
        h: "як соат",
        hh: "%d соат",
        d: "як рӯз",
        dd: "%d рӯз",
        M: "як моҳ",
        MM: "%d моҳ",
        y: "як сол",
        yy: "%d сол"
      },
      meridiemParse: /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/,
      meridiemHour: function (m, d) {
        return 12 === m && (m = 0), "шаб" === d ? m < 4 ? m : m + 12 : "субҳ" === d ? m : "рӯз" === d ? m >= 11 ? m : m + 12 : "бегоҳ" === d ? m + 12 : void 0;
      },
      meridiem: function (m, d, M) {
        return m < 4 ? "шаб" : m < 11 ? "субҳ" : m < 16 ? "рӯз" : m < 19 ? "бегоҳ" : "шаб";
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/,
      ordinal: function (m) {
        return m + (e[m] || e[m % 10] || e[m >= 100 ? 100 : null]);
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  }(i(15439));
});
