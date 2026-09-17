// Extracted from main; webpack module 97949. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
      words: {
        ss: ["sekunda", "sekunde", "sekundi"],
        m: ["jedan minut", "jednog minuta"],
        mm: ["minut", "minuta", "minuta"],
        h: ["jedan sat", "jednog sata"],
        hh: ["sat", "sata", "sati"],
        d: ["jedan dan", "jednog dana"],
        dd: ["dan", "dana", "dana"],
        M: ["jedan mesec", "jednog meseca"],
        MM: ["mesec", "meseca", "meseci"],
        y: ["jednu godinu", "jedne godine"],
        yy: ["godinu", "godine", "godina"]
      },
      correctGrammaticalCase: function (m, d) {
        return m % 10 >= 1 && m % 10 <= 4 && (m % 100 < 10 || m % 100 >= 20) ? m % 10 == 1 ? d[0] : d[1] : d[2];
      },
      translate: function (m, d, M, b) {
        var N,
          A = e.words[M];
        return 1 === M.length ? "y" === M && d ? "jedna godina" : b || d ? A[0] : A[1] : (N = e.correctGrammaticalCase(m, A), "yy" === M && d && "godinu" === N ? m + " godina" : m + " " + N);
      }
    };
    t.defineLocale("sr", {
      months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
      monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D. M. YYYY.",
        LL: "D. MMMM YYYY.",
        LLL: "D. MMMM YYYY. H:mm",
        LLLL: "dddd, D. MMMM YYYY. H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[u] [nedelju] [u] LT";
            case 3:
              return "[u] [sredu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT";
          }
        },
        lastDay: "[juče u] LT",
        lastWeek: function () {
          return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()];
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "pre %s",
        s: "nekoliko sekundi",
        ss: e.translate,
        m: e.translate,
        mm: e.translate,
        h: e.translate,
        hh: e.translate,
        d: e.translate,
        dd: e.translate,
        M: e.translate,
        MM: e.translate,
        y: e.translate,
        yy: e.translate
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
