// Extracted from main; webpack module 256. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function a(m, d, M, b) {
      var A = {
        s: ["viensas secunds", "'iensas secunds"],
        ss: [m + " secunds", m + " secunds"],
        m: ["'n míut", "'iens míut"],
        mm: [m + " míuts", m + " míuts"],
        h: ["'n þora", "'iensa þora"],
        hh: [m + " þoras", m + " þoras"],
        d: ["'n ziua", "'iensa ziua"],
        dd: [m + " ziuas", m + " ziuas"],
        M: ["'n mes", "'iens mes"],
        MM: [m + " mesen", m + " mesen"],
        y: ["'n ar", "'iens ar"],
        yy: [m + " ars", m + " ars"]
      };
      return b || d ? A[M][0] : A[M][1];
    }
    t.defineLocale("tzl", {
      months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
      monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
      weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
      weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
      weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM [dallas] YYYY",
        LLL: "D. MMMM [dallas] YYYY HH.mm",
        LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
      },
      meridiemParse: /d\'o|d\'a/i,
      isPM: function (m) {
        return "d'o" === m.toLowerCase();
      },
      meridiem: function (m, d, M) {
        return m > 11 ? M ? "d'o" : "D'O" : M ? "d'a" : "D'A";
      },
      calendar: {
        sameDay: "[oxhi à] LT",
        nextDay: "[demà à] LT",
        nextWeek: "dddd [à] LT",
        lastDay: "[ieiri à] LT",
        lastWeek: "[sür el] dddd [lasteu à] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "osprei %s",
        past: "ja%s",
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
