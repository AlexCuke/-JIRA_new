// Extracted from main; webpack module 56540. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
    function a(M, b, A, N) {
      var I = M;
      switch (A) {
        case "s":
          return N || b ? "néhány másodperc" : "néhány másodperce";
        case "ss":
          return I + (N || b) ? " másodperc" : " másodperce";
        case "m":
          return "egy" + (N || b ? " perc" : " perce");
        case "mm":
          return I + (N || b ? " perc" : " perce");
        case "h":
          return "egy" + (N || b ? " óra" : " órája");
        case "hh":
          return I + (N || b ? " óra" : " órája");
        case "d":
          return "egy" + (N || b ? " nap" : " napja");
        case "dd":
          return I + (N || b ? " nap" : " napja");
        case "M":
          return "egy" + (N || b ? " hónap" : " hónapja");
        case "MM":
          return I + (N || b ? " hónap" : " hónapja");
        case "y":
          return "egy" + (N || b ? " év" : " éve");
        case "yy":
          return I + (N || b ? " év" : " éve");
      }
      return "";
    }
    function m(M) {
      return (M ? "" : "[múlt] ") + "[" + e[this.day()] + "] LT[-kor]";
    }
    t.defineLocale("hu", {
      months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
      monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
      weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
      weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "YYYY.MM.DD.",
        LL: "YYYY. MMMM D.",
        LLL: "YYYY. MMMM D. H:mm",
        LLLL: "YYYY. MMMM D., dddd H:mm"
      },
      meridiemParse: /de|du/i,
      isPM: function (M) {
        return "u" === M.charAt(1).toLowerCase();
      },
      meridiem: function (M, b, A) {
        return M < 12 ? !0 === A ? "de" : "DE" : !0 === A ? "du" : "DU";
      },
      calendar: {
        sameDay: "[ma] LT[-kor]",
        nextDay: "[holnap] LT[-kor]",
        nextWeek: function () {
          return m.call(this, !0);
        },
        lastDay: "[tegnap] LT[-kor]",
        lastWeek: function () {
          return m.call(this, !1);
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "%s múlva",
        past: "%s",
        s: a,
        ss: a,
        m: a,
        mm: a,
        h: a,
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
