// Extracted from main; webpack module 1605. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
      a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
      m = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^pa\u017a/i, /^lis/i, /^gru/i];
    function d(A) {
      return A % 10 < 5 && A % 10 > 1 && ~~(A / 10) % 10 != 1;
    }
    function M(A, N, I) {
      var O = A + " ";
      switch (I) {
        case "ss":
          return O + (d(A) ? "sekundy" : "sekund");
        case "m":
          return N ? "minuta" : "minutę";
        case "mm":
          return O + (d(A) ? "minuty" : "minut");
        case "h":
          return N ? "godzina" : "godzinę";
        case "hh":
          return O + (d(A) ? "godziny" : "godzin");
        case "ww":
          return O + (d(A) ? "tygodnie" : "tygodni");
        case "MM":
          return O + (d(A) ? "miesiące" : "miesięcy");
        case "yy":
          return O + (d(A) ? "lata" : "lat");
      }
    }
    t.defineLocale("pl", {
      months: function (A, N) {
        return A ? /D MMMM/.test(N) ? a[A.month()] : e[A.month()] : e;
      },
      monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
      monthsParse: m,
      longMonthsParse: m,
      shortMonthsParse: m,
      weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
      weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
      weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Dziś o] LT",
        nextDay: "[Jutro o] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[W niedzielę o] LT";
            case 2:
              return "[We wtorek o] LT";
            case 3:
              return "[W środę o] LT";
            case 6:
              return "[W sobotę o] LT";
            default:
              return "[W] dddd [o] LT";
          }
        },
        lastDay: "[Wczoraj o] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[W zeszłą niedzielę o] LT";
            case 3:
              return "[W zeszłą środę o] LT";
            case 6:
              return "[W zeszłą sobotę o] LT";
            default:
              return "[W zeszły] dddd [o] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "%s temu",
        s: "kilka sekund",
        ss: M,
        m: M,
        mm: M,
        h: M,
        hh: M,
        d: "1 dzień",
        dd: "%d dni",
        w: "tydzień",
        ww: M,
        M: "miesiąc",
        MM: M,
        y: "rok",
        yy: M
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
