// Extracted from main; webpack module 20944. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
      a = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", e[7], e[8], e[9]];
    function m(b, A, N, I) {
      var O = "";
      switch (N) {
        case "s":
          return I ? "muutaman sekunnin" : "muutama sekunti";
        case "ss":
          O = I ? "sekunnin" : "sekuntia";
          break;
        case "m":
          return I ? "minuutin" : "minuutti";
        case "mm":
          O = I ? "minuutin" : "minuuttia";
          break;
        case "h":
          return I ? "tunnin" : "tunti";
        case "hh":
          O = I ? "tunnin" : "tuntia";
          break;
        case "d":
          return I ? "päivän" : "päivä";
        case "dd":
          O = I ? "päivän" : "päivää";
          break;
        case "M":
          return I ? "kuukauden" : "kuukausi";
        case "MM":
          O = I ? "kuukauden" : "kuukautta";
          break;
        case "y":
          return I ? "vuoden" : "vuosi";
        case "yy":
          O = I ? "vuoden" : "vuotta";
      }
      return function d(b, A) {
        return b < 10 ? A ? a[b] : e[b] : b;
      }(b, I) + " " + O;
    }
    t.defineLocale("fi", {
      months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
      monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
      weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
      weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
      weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD.MM.YYYY",
        LL: "Do MMMM[ta] YYYY",
        LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
        LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
        l: "D.M.YYYY",
        ll: "Do MMM YYYY",
        lll: "Do MMM YYYY, [klo] HH.mm",
        llll: "ddd, Do MMM YYYY, [klo] HH.mm"
      },
      calendar: {
        sameDay: "[tänään] [klo] LT",
        nextDay: "[huomenna] [klo] LT",
        nextWeek: "dddd [klo] LT",
        lastDay: "[eilen] [klo] LT",
        lastWeek: "[viime] dddd[na] [klo] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s päästä",
        past: "%s sitten",
        s: m,
        ss: m,
        m,
        mm: m,
        h: m,
        hh: m,
        d: m,
        dd: m,
        M: m,
        MM: m,
        y: m,
        yy: m
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
