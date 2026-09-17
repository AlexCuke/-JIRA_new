// Extracted from main; webpack module 51213. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
      1: "-inci",
      5: "-inci",
      8: "-inci",
      70: "-inci",
      80: "-inci",
      2: "-nci",
      7: "-nci",
      20: "-nci",
      50: "-nci",
      3: "-üncü",
      4: "-üncü",
      100: "-üncü",
      6: "-ncı",
      9: "-uncu",
      10: "-uncu",
      30: "-uncu",
      60: "-ıncı",
      90: "-ıncı"
    };
    t.defineLocale("az", {
      months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
      monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
      weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
      weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
      weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[bugün saat] LT",
        nextDay: "[sabah saat] LT",
        nextWeek: "[gələn həftə] dddd [saat] LT",
        lastDay: "[dünən] LT",
        lastWeek: "[keçən həftə] dddd [saat] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s sonra",
        past: "%s əvvəl",
        s: "bir neçə saniyə",
        ss: "%d saniyə",
        m: "bir dəqiqə",
        mm: "%d dəqiqə",
        h: "bir saat",
        hh: "%d saat",
        d: "bir gün",
        dd: "%d gün",
        M: "bir ay",
        MM: "%d ay",
        y: "bir il",
        yy: "%d il"
      },
      meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,
      isPM: function (m) {
        return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(m);
      },
      meridiem: function (m, d, M) {
        return m < 4 ? "gecə" : m < 12 ? "səhər" : m < 17 ? "gündüz" : "axşam";
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
      ordinal: function (m) {
        if (0 === m) return m + "-ıncı";
        var d = m % 10;
        return m + (e[d] || e[m % 100 - d] || e[m >= 100 ? 100 : null]);
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  }(i(15439));
});
