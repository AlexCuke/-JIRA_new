// Extracted from main; webpack module 31977. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function e(m, d, M, b) {
      switch (M) {
        case "s":
          return d ? "хэдхэн секунд" : "хэдхэн секундын";
        case "ss":
          return m + (d ? " секунд" : " секундын");
        case "m":
        case "mm":
          return m + (d ? " минут" : " минутын");
        case "h":
        case "hh":
          return m + (d ? " цаг" : " цагийн");
        case "d":
        case "dd":
          return m + (d ? " өдөр" : " өдрийн");
        case "M":
        case "MM":
          return m + (d ? " сар" : " сарын");
        case "y":
        case "yy":
          return m + (d ? " жил" : " жилийн");
        default:
          return m;
      }
    }
    t.defineLocale("mn", {
      months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
      monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
      monthsParseExact: !0,
      weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
      weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
      weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY оны MMMMын D",
        LLL: "YYYY оны MMMMын D HH:mm",
        LLLL: "dddd, YYYY оны MMMMын D HH:mm"
      },
      meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i,
      isPM: function (m) {
        return "ҮХ" === m;
      },
      meridiem: function (m, d, M) {
        return m < 12 ? "ҮӨ" : "ҮХ";
      },
      calendar: {
        sameDay: "[Өнөөдөр] LT",
        nextDay: "[Маргааш] LT",
        nextWeek: "[Ирэх] dddd LT",
        lastDay: "[Өчигдөр] LT",
        lastWeek: "[Өнгөрсөн] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s дараа",
        past: "%s өмнө",
        s: e,
        ss: e,
        m: e,
        mm: e,
        h: e,
        hh: e,
        d: e,
        dd: e,
        M: e,
        MM: e,
        y: e,
        yy: e
      },
      dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/,
      ordinal: function (m, d) {
        switch (d) {
          case "d":
          case "D":
          case "DDD":
            return m + " өдөр";
          default:
            return m;
        }
      }
    });
  }(i(15439));
});
