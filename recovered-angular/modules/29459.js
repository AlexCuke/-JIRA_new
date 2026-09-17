// Extracted from main; webpack module 29459. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function e(m, d, M, b) {
      var A = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [m + " Tage", m + " Tagen"],
        w: ["eine Woche", "einer Woche"],
        M: ["ein Monat", "einem Monat"],
        MM: [m + " Monate", m + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [m + " Jahre", m + " Jahren"]
      };
      return d ? A[M][0] : A[M][1];
    }
    t.defineLocale("de-at", {
      months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
      weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd, D. MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[heute um] LT [Uhr]",
        sameElse: "L",
        nextDay: "[morgen um] LT [Uhr]",
        nextWeek: "dddd [um] LT [Uhr]",
        lastDay: "[gestern um] LT [Uhr]",
        lastWeek: "[letzten] dddd [um] LT [Uhr]"
      },
      relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: "ein paar Sekunden",
        ss: "%d Sekunden",
        m: e,
        mm: "%d Minuten",
        h: e,
        hh: "%d Stunden",
        d: e,
        dd: e,
        w: e,
        ww: "%d Wochen",
        M: e,
        MM: e,
        y: e,
        yy: e
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    });
  }(i(15439));
});
