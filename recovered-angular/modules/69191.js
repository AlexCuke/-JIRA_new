// Extracted from main; webpack module 69191. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function a(d, M, b) {
      return "m" === b ? M ? "хвіліна" : "хвіліну" : "h" === b ? M ? "гадзіна" : "гадзіну" : d + " " + function e(d, M) {
        var b = d.split("_");
        return M % 10 == 1 && M % 100 != 11 ? b[0] : M % 10 >= 2 && M % 10 <= 4 && (M % 100 < 10 || M % 100 >= 20) ? b[1] : b[2];
      }({
        ss: M ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
        mm: M ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
        hh: M ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
        dd: "дзень_дні_дзён",
        MM: "месяц_месяцы_месяцаў",
        yy: "год_гады_гадоў"
      }[b], +d);
    }
    t.defineLocale("be", {
      months: {
        format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
        standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
      },
      monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
      weekdays: {
        format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
        standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
        isFormat: /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/
      },
      weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
      weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY г.",
        LLL: "D MMMM YYYY г., HH:mm",
        LLLL: "dddd, D MMMM YYYY г., HH:mm"
      },
      calendar: {
        sameDay: "[Сёння ў] LT",
        nextDay: "[Заўтра ў] LT",
        lastDay: "[Учора ў] LT",
        nextWeek: function () {
          return "[У] dddd [ў] LT";
        },
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return "[У мінулую] dddd [ў] LT";
            case 1:
            case 2:
            case 4:
              return "[У мінулы] dddd [ў] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "праз %s",
        past: "%s таму",
        s: "некалькі секунд",
        m: a,
        mm: a,
        h: a,
        hh: a,
        d: "дзень",
        dd: a,
        M: "месяц",
        MM: a,
        y: "год",
        yy: a
      },
      meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
      isPM: function (d) {
        return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(d);
      },
      meridiem: function (d, M, b) {
        return d < 4 ? "ночы" : d < 12 ? "раніцы" : d < 17 ? "дня" : "вечара";
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
      ordinal: function (d, M) {
        switch (M) {
          case "M":
          case "d":
          case "DDD":
          case "w":
          case "W":
            return d % 10 != 2 && d % 10 != 3 || d % 100 == 12 || d % 100 == 13 ? d + "-ы" : d + "-і";
          case "D":
            return d + "-га";
          default:
            return d;
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  }(i(15439));
});
