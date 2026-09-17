// Extracted from main; webpack module 69586. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function e(b, A, N, I) {
      var O = {
        m: ["eng Minutt", "enger Minutt"],
        h: ["eng Stonn", "enger Stonn"],
        d: ["een Dag", "engem Dag"],
        M: ["ee Mount", "engem Mount"],
        y: ["ee Joer", "engem Joer"]
      };
      return A ? O[N][0] : O[N][1];
    }
    function d(b) {
      if (b = parseInt(b, 10), isNaN(b)) return !1;
      if (b < 0) return !0;
      if (b < 10) return 4 <= b && b <= 7;
      if (b < 100) {
        var A = b % 10;
        return d(0 === A ? b / 10 : A);
      }
      if (b < 1e4) {
        for (; b >= 10;) b /= 10;
        return d(b);
      }
      return d(b /= 1e3);
    }
    t.defineLocale("lb", {
      months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
      weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm [Auer]",
        LTS: "H:mm:ss [Auer]",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm [Auer]",
        LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
      },
      calendar: {
        sameDay: "[Haut um] LT",
        sameElse: "L",
        nextDay: "[Muer um] LT",
        nextWeek: "dddd [um] LT",
        lastDay: "[Gëschter um] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 2:
            case 4:
              return "[Leschten] dddd [um] LT";
            default:
              return "[Leschte] dddd [um] LT";
          }
        }
      },
      relativeTime: {
        future: function a(b) {
          return d(b.substr(0, b.indexOf(" "))) ? "a " + b : "an " + b;
        },
        past: function m(b) {
          return d(b.substr(0, b.indexOf(" "))) ? "viru " + b : "virun " + b;
        },
        s: "e puer Sekonnen",
        ss: "%d Sekonnen",
        m: e,
        mm: "%d Minutten",
        h: e,
        hh: "%d Stonnen",
        d: e,
        dd: "%d Deeg",
        M: e,
        MM: "%d Méint",
        y: e,
        yy: "%d Joer"
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
