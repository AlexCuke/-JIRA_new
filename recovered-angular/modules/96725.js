// Extracted from main; webpack module 96725. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function e(m, d, M, b) {
      var A = {
        s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
        ss: [m + "sekundi", m + "sekundit"],
        m: ["ühe minuti", "üks minut"],
        mm: [m + " minuti", m + " minutit"],
        h: ["ühe tunni", "tund aega", "üks tund"],
        hh: [m + " tunni", m + " tundi"],
        d: ["ühe päeva", "üks päev"],
        M: ["kuu aja", "kuu aega", "üks kuu"],
        MM: [m + " kuu", m + " kuud"],
        y: ["ühe aasta", "aasta", "üks aasta"],
        yy: [m + " aasta", m + " aastat"]
      };
      return d ? A[M][2] ? A[M][2] : A[M][1] : b ? A[M][0] : A[M][1];
    }
    t.defineLocale("et", {
      months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
      monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
      weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
      weekdaysShort: "P_E_T_K_N_R_L".split("_"),
      weekdaysMin: "P_E_T_K_N_R_L".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[Täna,] LT",
        nextDay: "[Homme,] LT",
        nextWeek: "[Järgmine] dddd LT",
        lastDay: "[Eile,] LT",
        lastWeek: "[Eelmine] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s pärast",
        past: "%s tagasi",
        s: e,
        ss: e,
        m: e,
        mm: e,
        h: e,
        hh: e,
        d: e,
        dd: "%d päeva",
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
