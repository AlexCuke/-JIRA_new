// Extracted from main; webpack module 7458. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function e(m, d, M) {
      var b = m + " ";
      switch (M) {
        case "ss":
          return b + (1 === m ? "sekunda" : 2 === m || 3 === m || 4 === m ? "sekunde" : "sekundi");
        case "m":
          return d ? "jedna minuta" : "jedne minute";
        case "mm":
          return b + (1 === m ? "minuta" : 2 === m || 3 === m || 4 === m ? "minute" : "minuta");
        case "h":
          return d ? "jedan sat" : "jednog sata";
        case "hh":
          return b + (1 === m ? "sat" : 2 === m || 3 === m || 4 === m ? "sata" : "sati");
        case "dd":
          return b + (1 === m ? "dan" : "dana");
        case "MM":
          return b + (1 === m ? "mjesec" : 2 === m || 3 === m || 4 === m ? "mjeseca" : "mjeseci");
        case "yy":
          return b + (1 === m ? "godina" : 2 === m || 3 === m || 4 === m ? "godine" : "godina");
      }
    }
    t.defineLocale("hr", {
      months: {
        format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
        standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
      },
      monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "Do MMMM YYYY",
        LLL: "Do MMMM YYYY H:mm",
        LLLL: "dddd, Do MMMM YYYY H:mm"
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
              return "[prošlu] [nedjelju] [u] LT";
            case 3:
              return "[prošlu] [srijedu] [u] LT";
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
        ss: e,
        m: e,
        mm: e,
        h: e,
        hh: e,
        d: "dan",
        dd: e,
        M: "mjesec",
        MM: e,
        y: "godinu",
        yy: e
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
