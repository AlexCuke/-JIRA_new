// Extracted from main; webpack module 63775. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function e(d, M, b, A) {
      var N = {
        s: ["çend sanîye", "çend sanîyeyan"],
        ss: [d + " sanîye", d + " sanîyeyan"],
        m: ["deqîqeyek", "deqîqeyekê"],
        mm: [d + " deqîqe", d + " deqîqeyan"],
        h: ["saetek", "saetekê"],
        hh: [d + " saet", d + " saetan"],
        d: ["rojek", "rojekê"],
        dd: [d + " roj", d + " rojan"],
        w: ["hefteyek", "hefteyekê"],
        ww: [d + " hefte", d + " hefteyan"],
        M: ["mehek", "mehekê"],
        MM: [d + " meh", d + " mehan"],
        y: ["salek", "salekê"],
        yy: [d + " sal", d + " salan"]
      };
      return M ? N[b][0] : N[b][1];
    }
    t.defineLocale("ku-kmr", {
      months: "Rêbendan_Sibat_Adar_Nîsan_Gulan_Hezîran_Tîrmeh_Tebax_Îlon_Cotmeh_Mijdar_Berfanbar".split("_"),
      monthsShort: "Rêb_Sib_Ada_Nîs_Gul_Hez_Tîr_Teb_Îlo_Cot_Mij_Ber".split("_"),
      monthsParseExact: !0,
      weekdays: "Yekşem_Duşem_Sêşem_Çarşem_Pêncşem_În_Şemî".split("_"),
      weekdaysShort: "Yek_Du_Sê_Çar_Pên_În_Şem".split("_"),
      weekdaysMin: "Ye_Du_Sê_Ça_Pê_În_Şe".split("_"),
      meridiem: function (d, M, b) {
        return d < 12 ? b ? "bn" : "BN" : b ? "pn" : "PN";
      },
      meridiemParse: /bn|BN|pn|PN/,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "Do MMMM[a] YYYY[an]",
        LLL: "Do MMMM[a] YYYY[an] HH:mm",
        LLLL: "dddd, Do MMMM[a] YYYY[an] HH:mm",
        ll: "Do MMM[.] YYYY[an]",
        lll: "Do MMM[.] YYYY[an] HH:mm",
        llll: "ddd[.], Do MMM[.] YYYY[an] HH:mm"
      },
      calendar: {
        sameDay: "[Îro di saet] LT [de]",
        nextDay: "[Sibê di saet] LT [de]",
        nextWeek: "dddd [di saet] LT [de]",
        lastDay: "[Duh di saet] LT [de]",
        lastWeek: "dddd[a borî di saet] LT [de]",
        sameElse: "L"
      },
      relativeTime: {
        future: "di %s de",
        past: "berî %s",
        s: e,
        ss: e,
        m: e,
        mm: e,
        h: e,
        hh: e,
        d: e,
        dd: e,
        w: e,
        ww: e,
        M: e,
        MM: e,
        y: e,
        yy: e
      },
      dayOfMonthOrdinalParse: /\d{1,2}(?:y\xea|\xea|\.)/,
      ordinal: function (d, M) {
        var b = M.toLowerCase();
        return b.includes("w") || b.includes("m") ? d + "." : d + function a(d) {
          var M = (d = "" + d).substring(d.length - 1),
            b = d.length > 1 ? d.substring(d.length - 2) : "";
          return 12 == b || 13 == b || "2" != M && "3" != M && "50" != b && "70" != M && "80" != M ? "ê" : "yê";
        }(d);
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  }(i(15439));
});
