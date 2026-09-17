// Extracted from main; webpack module 47322. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
        standalone: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
        format: "ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split("_"),
        isFormat: /DD?[o.]?(\[[^\[\]]*\]|\s)+MMMM/
      },
      a = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
      m = [/^led/i, /^\xfano/i, /^b\u0159e/i, /^dub/i, /^kv\u011b/i, /^(\u010dvn|\u010derven$|\u010dervna)/i, /^(\u010dvc|\u010dervenec|\u010dervence)/i, /^srp/i, /^z\xe1\u0159/i, /^\u0159\xedj/i, /^lis/i, /^pro/i],
      d = /^(leden|\xfanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\xe1\u0159\xed|\u0159\xedjen|listopad|prosinec|led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i;
    function M(N) {
      return N > 1 && N < 5 && 1 != ~~(N / 10);
    }
    function b(N, I, O, L) {
      var C = N + " ";
      switch (O) {
        case "s":
          return I || L ? "pár sekund" : "pár sekundami";
        case "ss":
          return I || L ? C + (M(N) ? "sekundy" : "sekund") : C + "sekundami";
        case "m":
          return I ? "minuta" : L ? "minutu" : "minutou";
        case "mm":
          return I || L ? C + (M(N) ? "minuty" : "minut") : C + "minutami";
        case "h":
          return I ? "hodina" : L ? "hodinu" : "hodinou";
        case "hh":
          return I || L ? C + (M(N) ? "hodiny" : "hodin") : C + "hodinami";
        case "d":
          return I || L ? "den" : "dnem";
        case "dd":
          return I || L ? C + (M(N) ? "dny" : "dní") : C + "dny";
        case "M":
          return I || L ? "měsíc" : "měsícem";
        case "MM":
          return I || L ? C + (M(N) ? "měsíce" : "měsíců") : C + "měsíci";
        case "y":
          return I || L ? "rok" : "rokem";
        case "yy":
          return I || L ? C + (M(N) ? "roky" : "let") : C + "lety";
      }
    }
    t.defineLocale("cs", {
      months: e,
      monthsShort: a,
      monthsRegex: d,
      monthsShortRegex: d,
      monthsStrictRegex: /^(leden|ledna|\xfanora|\xfanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\xe1\u0159\xed|\u0159\xedjen|\u0159\xedjna|listopadu|listopad|prosinec|prosince)/i,
      monthsShortStrictRegex: /^(led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i,
      monthsParse: m,
      longMonthsParse: m,
      shortMonthsParse: m,
      weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
      weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
      weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm",
        l: "D. M. YYYY"
      },
      calendar: {
        sameDay: "[dnes v] LT",
        nextDay: "[zítra v] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v neděli v] LT";
            case 1:
            case 2:
              return "[v] dddd [v] LT";
            case 3:
              return "[ve středu v] LT";
            case 4:
              return "[ve čtvrtek v] LT";
            case 5:
              return "[v pátek v] LT";
            case 6:
              return "[v sobotu v] LT";
          }
        },
        lastDay: "[včera v] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[minulou neděli v] LT";
            case 1:
            case 2:
              return "[minulé] dddd [v] LT";
            case 3:
              return "[minulou středu v] LT";
            case 4:
            case 5:
              return "[minulý] dddd [v] LT";
            case 6:
              return "[minulou sobotu v] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "před %s",
        s: b,
        ss: b,
        m: b,
        mm: b,
        h: b,
        hh: b,
        d: b,
        dd: b,
        M: b,
        MM: b,
        y: b,
        yy: b
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
