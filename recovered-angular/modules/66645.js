// Extracted from main; webpack module 66645. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
    function d(A, N, I, O) {
      var L = function M(A) {
        var N = Math.floor(A % 1e3 / 100),
          I = Math.floor(A % 100 / 10),
          O = A % 10,
          L = "";
        return N > 0 && (L += e[N] + "vatlh"), I > 0 && (L += ("" !== L ? " " : "") + e[I] + "maH"), O > 0 && (L += ("" !== L ? " " : "") + e[O]), "" === L ? "pagh" : L;
      }(A);
      switch (I) {
        case "ss":
          return L + " lup";
        case "mm":
          return L + " tup";
        case "hh":
          return L + " rep";
        case "dd":
          return L + " jaj";
        case "MM":
          return L + " jar";
        case "yy":
          return L + " DIS";
      }
    }
    t.defineLocale("tlh", {
      months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
      monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
      monthsParseExact: !0,
      weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[DaHjaj] LT",
        nextDay: "[wa’leS] LT",
        nextWeek: "LLL",
        lastDay: "[wa’Hu’] LT",
        lastWeek: "LLL",
        sameElse: "L"
      },
      relativeTime: {
        future: function a(A) {
          var N = A;
          return -1 !== A.indexOf("jaj") ? N.slice(0, -3) + "leS" : -1 !== A.indexOf("jar") ? N.slice(0, -3) + "waQ" : -1 !== A.indexOf("DIS") ? N.slice(0, -3) + "nem" : N + " pIq";
        },
        past: function m(A) {
          var N = A;
          return -1 !== A.indexOf("jaj") ? N.slice(0, -3) + "Hu’" : -1 !== A.indexOf("jar") ? N.slice(0, -3) + "wen" : -1 !== A.indexOf("DIS") ? N.slice(0, -3) + "ben" : N + " ret";
        },
        s: "puS lup",
        ss: d,
        m: "wa’ tup",
        mm: d,
        h: "wa’ rep",
        hh: d,
        d: "wa’ jaj",
        dd: d,
        M: "wa’ jar",
        MM: d,
        y: "wa’ DIS",
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
