// Extracted from main; webpack module 45020. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function e(f, E, h) {
      return f + " " + function d(f, E) {
        return 2 === E ? function M(f) {
          var E = {
            m: "v",
            b: "v",
            d: "z"
          };
          return void 0 === E[f.charAt(0)] ? f : E[f.charAt(0)] + f.substring(1);
        }(f) : f;
      }({
        mm: "munutenn",
        MM: "miz",
        dd: "devezh"
      }[h], f);
    }
    function m(f) {
      return f > 9 ? m(f % 10) : f;
    }
    var b = [/^gen/i, /^c[\u02bc\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
      A = /^(genver|c[\u02bc\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[\u02bc\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
      C = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
    t.defineLocale("br", {
      months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
      monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
      weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
      weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
      weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
      weekdaysParse: C,
      fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[\u02bc\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
      shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
      minWeekdaysParse: C,
      monthsRegex: A,
      monthsShortRegex: A,
      monthsStrictRegex: /^(genver|c[\u02bc\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
      monthsShortStrictRegex: /^(gen|c[\u02bc\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
      monthsParse: b,
      longMonthsParse: b,
      shortMonthsParse: b,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [a viz] MMMM YYYY",
        LLL: "D [a viz] MMMM YYYY HH:mm",
        LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Hiziv da] LT",
        nextDay: "[Warcʼhoazh da] LT",
        nextWeek: "dddd [da] LT",
        lastDay: "[Decʼh da] LT",
        lastWeek: "dddd [paset da] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "a-benn %s",
        past: "%s ʼzo",
        s: "un nebeud segondennoù",
        ss: "%d eilenn",
        m: "ur vunutenn",
        mm: e,
        h: "un eur",
        hh: "%d eur",
        d: "un devezh",
        dd: e,
        M: "ur miz",
        MM: e,
        y: "ur bloaz",
        yy: function a(f) {
          switch (m(f)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
              return f + " bloaz";
            default:
              return f + " vloaz";
          }
        }
      },
      dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
      ordinal: function (f) {
        return f + (1 === f ? "añ" : "vet");
      },
      week: {
        dow: 1,
        doy: 4
      },
      meridiemParse: /a.m.|g.m./,
      isPM: function (f) {
        return "g.m." === f;
      },
      meridiem: function (f, E, h) {
        return f < 12 ? "a.m." : "g.m.";
      }
    });
  }(i(15439));
});
