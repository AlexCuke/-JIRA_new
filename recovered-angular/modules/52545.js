// Extracted from main; webpack module 52545. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function e(m, d, M, b) {
      var A = {
        s: ["thoddea sekondamni", "thodde sekond"],
        ss: [m + " sekondamni", m + " sekond"],
        m: ["eka mintan", "ek minut"],
        mm: [m + " mintamni", m + " mintam"],
        h: ["eka voran", "ek vor"],
        hh: [m + " voramni", m + " voram"],
        d: ["eka disan", "ek dis"],
        dd: [m + " disamni", m + " dis"],
        M: ["eka mhoinean", "ek mhoino"],
        MM: [m + " mhoineamni", m + " mhoine"],
        y: ["eka vorsan", "ek voros"],
        yy: [m + " vorsamni", m + " vorsam"]
      };
      return b ? A[M][0] : A[M][1];
    }
    t.defineLocale("gom-latn", {
      months: {
        standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
        format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
        isFormat: /MMMM(\s)+D[oD]?/
      },
      monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
      weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
      weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "A h:mm [vazta]",
        LTS: "A h:mm:ss [vazta]",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY A h:mm [vazta]",
        LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
        llll: "ddd, D MMM YYYY, A h:mm [vazta]"
      },
      calendar: {
        sameDay: "[Aiz] LT",
        nextDay: "[Faleam] LT",
        nextWeek: "[Fuddlo] dddd[,] LT",
        lastDay: "[Kal] LT",
        lastWeek: "[Fattlo] dddd[,] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s",
        past: "%s adim",
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
      dayOfMonthOrdinalParse: /\d{1,2}(er)/,
      ordinal: function (m, d) {
        return "D" === d ? m + "er" : m;
      },
      week: {
        dow: 0,
        doy: 3
      },
      meridiemParse: /rati|sokallim|donparam|sanje/,
      meridiemHour: function (m, d) {
        return 12 === m && (m = 0), "rati" === d ? m < 4 ? m : m + 12 : "sokallim" === d ? m : "donparam" === d ? m > 12 ? m : m + 12 : "sanje" === d ? m + 12 : void 0;
      },
      meridiem: function (m, d, M) {
        return m < 4 ? "rati" : m < 12 ? "sokallim" : m < 16 ? "donparam" : m < 20 ? "sanje" : "rati";
      }
    });
  }(i(15439));
});
