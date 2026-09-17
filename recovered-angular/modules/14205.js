// Extracted from main; webpack module 14205. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function e(d) {
      return d % 100 == 11 || d % 10 != 1;
    }
    function a(d, M, b, A) {
      var N = d + " ";
      switch (b) {
        case "s":
          return M || A ? "nokkrar sekúndur" : "nokkrum sekúndum";
        case "ss":
          return e(d) ? N + (M || A ? "sekúndur" : "sekúndum") : N + "sekúnda";
        case "m":
          return M ? "mínúta" : "mínútu";
        case "mm":
          return e(d) ? N + (M || A ? "mínútur" : "mínútum") : M ? N + "mínúta" : N + "mínútu";
        case "hh":
          return e(d) ? N + (M || A ? "klukkustundir" : "klukkustundum") : N + "klukkustund";
        case "d":
          return M ? "dagur" : A ? "dag" : "degi";
        case "dd":
          return e(d) ? M ? N + "dagar" : N + (A ? "daga" : "dögum") : M ? N + "dagur" : N + (A ? "dag" : "degi");
        case "M":
          return M ? "mánuður" : A ? "mánuð" : "mánuði";
        case "MM":
          return e(d) ? M ? N + "mánuðir" : N + (A ? "mánuði" : "mánuðum") : M ? N + "mánuður" : N + (A ? "mánuð" : "mánuði");
        case "y":
          return M || A ? "ár" : "ári";
        case "yy":
          return e(d) ? N + (M || A ? "ár" : "árum") : N + (M || A ? "ár" : "ári");
      }
    }
    t.defineLocale("is", {
      months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
      monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
      weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
      weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
      weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] H:mm",
        LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
      },
      calendar: {
        sameDay: "[í dag kl.] LT",
        nextDay: "[á morgun kl.] LT",
        nextWeek: "dddd [kl.] LT",
        lastDay: "[í gær kl.] LT",
        lastWeek: "[síðasta] dddd [kl.] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "eftir %s",
        past: "fyrir %s síðan",
        s: a,
        ss: a,
        m: a,
        mm: a,
        h: "klukkustund",
        hh: a,
        d: a,
        dd: a,
        M: a,
        MM: a,
        y: a,
        yy: a
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
