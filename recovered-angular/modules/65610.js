// Extracted from main; webpack module 65610. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function a(b, A, N) {
      return "m" === N ? A ? "хвилина" : "хвилину" : "h" === N ? A ? "година" : "годину" : b + " " + function e(b, A) {
        var N = b.split("_");
        return A % 10 == 1 && A % 100 != 11 ? N[0] : A % 10 >= 2 && A % 10 <= 4 && (A % 100 < 10 || A % 100 >= 20) ? N[1] : N[2];
      }({
        ss: A ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
        mm: A ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
        hh: A ? "година_години_годин" : "годину_години_годин",
        dd: "день_дні_днів",
        MM: "місяць_місяці_місяців",
        yy: "рік_роки_років"
      }[N], +b);
    }
    function d(b) {
      return function () {
        return b + "о" + (11 === this.hours() ? "б" : "") + "] LT";
      };
    }
    t.defineLocale("uk", {
      months: {
        format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
        standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
      },
      monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
      weekdays: function m(b, A) {
        var N = {
          nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
          accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
          genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
        };
        return !0 === b ? N.nominative.slice(1, 7).concat(N.nominative.slice(0, 1)) : b ? N[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(A) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(A) ? "genitive" : "nominative"][b.day()] : N.nominative;
      },
      weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
      weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY р.",
        LLL: "D MMMM YYYY р., HH:mm",
        LLLL: "dddd, D MMMM YYYY р., HH:mm"
      },
      calendar: {
        sameDay: d("[Сьогодні "),
        nextDay: d("[Завтра "),
        lastDay: d("[Вчора "),
        nextWeek: d("[У] dddd ["),
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return d("[Минулої] dddd [").call(this);
            case 1:
            case 2:
            case 4:
              return d("[Минулого] dddd [").call(this);
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "за %s",
        past: "%s тому",
        s: "декілька секунд",
        ss: a,
        m: a,
        mm: a,
        h: "годину",
        hh: a,
        d: "день",
        dd: a,
        M: "місяць",
        MM: a,
        y: "рік",
        yy: a
      },
      meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
      isPM: function (b) {
        return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(b);
      },
      meridiem: function (b, A, N) {
        return b < 4 ? "ночі" : b < 12 ? "ранку" : b < 17 ? "дня" : "вечора";
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
      ordinal: function (b, A) {
        switch (A) {
          case "M":
          case "d":
          case "DDD":
          case "w":
          case "W":
            return b + "-й";
          case "D":
            return b + "-го";
          default:
            return b;
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  }(i(15439));
});
