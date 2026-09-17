// Extracted from main; webpack module 64792. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function a(d, M, b) {
      var A = d + " ";
      switch (b) {
        case "ss":
          return A + (1 === d ? "sekunda" : 2 === d || 3 === d || 4 === d ? "sekunde" : "sekundi");
        case "mm":
          return A + (1 === d ? "minuta" : 2 === d || 3 === d || 4 === d ? "minute" : "minuta");
        case "h":
          return "jedan sat";
        case "hh":
          return A + (1 === d ? "sat" : 2 === d || 3 === d || 4 === d ? "sata" : "sati");
        case "dd":
          return A + (1 === d ? "dan" : "dana");
        case "MM":
          return A + (1 === d ? "mjesec" : 2 === d || 3 === d || 4 === d ? "mjeseca" : "mjeseci");
        case "yy":
          return A + (1 === d ? "godina" : 2 === d || 3 === d || 4 === d ? "godine" : "godina");
      }
    }
    t.defineLocale("bs", {
      months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
      monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[u] [nedjelju] [u] LT";
            case 3:
              return "[u] [srijedu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT";
          }
        },
        lastDay: "[jučer u] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
              return "[prošlu] dddd [u] LT";
            case 6:
              return "[prošle] [subote] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[prošli] dddd [u] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "prije %s",
        s: "par sekundi",
        ss: a,
        m: function e(d, M, b, A) {
          if ("m" === b) return M ? "jedna minuta" : A ? "jednu minutu" : "jedne minute";
        },
        mm: a,
        h: a,
        hh: a,
        d: "dan",
        dd: a,
        M: "mjesec",
        MM: a,
        y: "godinu",
        yy: a
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
