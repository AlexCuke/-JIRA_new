// Extracted from main; webpack module 59635. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
      a = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
    function m(b) {
      return b > 1 && b < 5;
    }
    function d(b, A, N, I) {
      var O = b + " ";
      switch (N) {
        case "s":
          return A || I ? "pár sekúnd" : "pár sekundami";
        case "ss":
          return A || I ? O + (m(b) ? "sekundy" : "sekúnd") : O + "sekundami";
        case "m":
          return A ? "minúta" : I ? "minútu" : "minútou";
        case "mm":
          return A || I ? O + (m(b) ? "minúty" : "minút") : O + "minútami";
        case "h":
          return A ? "hodina" : I ? "hodinu" : "hodinou";
        case "hh":
          return A || I ? O + (m(b) ? "hodiny" : "hodín") : O + "hodinami";
        case "d":
          return A || I ? "deň" : "dňom";
        case "dd":
          return A || I ? O + (m(b) ? "dni" : "dní") : O + "dňami";
        case "M":
          return A || I ? "mesiac" : "mesiacom";
        case "MM":
          return A || I ? O + (m(b) ? "mesiace" : "mesiacov") : O + "mesiacmi";
        case "y":
          return A || I ? "rok" : "rokom";
        case "yy":
          return A || I ? O + (m(b) ? "roky" : "rokov") : O + "rokmi";
      }
    }
    t.defineLocale("sk", {
      months: e,
      monthsShort: a,
      weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
      weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
      weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[dnes o] LT",
        nextDay: "[zajtra o] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v nedeľu o] LT";
            case 1:
            case 2:
              return "[v] dddd [o] LT";
            case 3:
              return "[v stredu o] LT";
            case 4:
              return "[vo štvrtok o] LT";
            case 5:
              return "[v piatok o] LT";
            case 6:
              return "[v sobotu o] LT";
          }
        },
        lastDay: "[včera o] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[minulú nedeľu o] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[minulý] dddd [o] LT";
            case 3:
              return "[minulú stredu o] LT";
            case 6:
              return "[minulú sobotu o] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "pred %s",
        s: d,
        ss: d,
        m: d,
        mm: d,
        h: d,
        hh: d,
        d,
        dd: d,
        M: d,
        MM: d,
        y: d,
        yy: d
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
