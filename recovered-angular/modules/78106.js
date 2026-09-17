// Extracted from main; webpack module 78106. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function e(m, d, M, b) {
      var A = m + " ";
      switch (M) {
        case "s":
          return d || b ? "nekaj sekund" : "nekaj sekundami";
        case "ss":
          return A + (1 === m ? d ? "sekundo" : "sekundi" : 2 === m ? d || b ? "sekundi" : "sekundah" : m < 5 ? d || b ? "sekunde" : "sekundah" : "sekund");
        case "m":
          return d ? "ena minuta" : "eno minuto";
        case "mm":
          return A + (1 === m ? d ? "minuta" : "minuto" : 2 === m ? d || b ? "minuti" : "minutama" : m < 5 ? d || b ? "minute" : "minutami" : d || b ? "minut" : "minutami");
        case "h":
          return d ? "ena ura" : "eno uro";
        case "hh":
          return A + (1 === m ? d ? "ura" : "uro" : 2 === m ? d || b ? "uri" : "urama" : m < 5 ? d || b ? "ure" : "urami" : d || b ? "ur" : "urami");
        case "d":
          return d || b ? "en dan" : "enim dnem";
        case "dd":
          return A + (1 === m ? d || b ? "dan" : "dnem" : 2 === m ? d || b ? "dni" : "dnevoma" : d || b ? "dni" : "dnevi");
        case "M":
          return d || b ? "en mesec" : "enim mesecem";
        case "MM":
          return A + (1 === m ? d || b ? "mesec" : "mesecem" : 2 === m ? d || b ? "meseca" : "mesecema" : m < 5 ? d || b ? "mesece" : "meseci" : d || b ? "mesecev" : "meseci");
        case "y":
          return d || b ? "eno leto" : "enim letom";
        case "yy":
          return A + (1 === m ? d || b ? "leto" : "letom" : 2 === m ? d || b ? "leti" : "letoma" : m < 5 ? d || b ? "leta" : "leti" : d || b ? "let" : "leti");
      }
    }
    t.defineLocale("sl", {
      months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
      monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
      weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
      weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD. MM. YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danes ob] LT",
        nextDay: "[jutri ob] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v] [nedeljo] [ob] LT";
            case 3:
              return "[v] [sredo] [ob] LT";
            case 6:
              return "[v] [soboto] [ob] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[v] dddd [ob] LT";
          }
        },
        lastDay: "[včeraj ob] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[prejšnjo] [nedeljo] [ob] LT";
            case 3:
              return "[prejšnjo] [sredo] [ob] LT";
            case 6:
              return "[prejšnjo] [soboto] [ob] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[prejšnji] dddd [ob] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "čez %s",
        past: "pred %s",
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
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    });
  }(i(15439));
});
