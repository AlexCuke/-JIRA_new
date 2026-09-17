// Extracted from main; webpack module 92400. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
      ss: "sekundė_sekundžių_sekundes",
      m: "minutė_minutės_minutę",
      mm: "minutės_minučių_minutes",
      h: "valanda_valandos_valandą",
      hh: "valandos_valandų_valandas",
      d: "diena_dienos_dieną",
      dd: "dienos_dienų_dienas",
      M: "mėnuo_mėnesio_mėnesį",
      MM: "mėnesiai_mėnesių_mėnesius",
      y: "metai_metų_metus",
      yy: "metai_metų_metus"
    };
    function m(N, I, O, L) {
      return I ? M(O)[0] : L ? M(O)[1] : M(O)[2];
    }
    function d(N) {
      return N % 10 == 0 || N > 10 && N < 20;
    }
    function M(N) {
      return e[N].split("_");
    }
    function b(N, I, O, L) {
      var C = N + " ";
      return 1 === N ? C + m(0, I, O[0], L) : I ? C + (d(N) ? M(O)[1] : M(O)[0]) : L ? C + M(O)[1] : C + (d(N) ? M(O)[1] : M(O)[2]);
    }
    t.defineLocale("lt", {
      months: {
        format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
        standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
      },
      monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
      weekdays: {
        format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
        standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
        isFormat: /dddd HH:mm/
      },
      weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
      weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY [m.] MMMM D [d.]",
        LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
        LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
        l: "YYYY-MM-DD",
        ll: "YYYY [m.] MMMM D [d.]",
        lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
        llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
      },
      calendar: {
        sameDay: "[Šiandien] LT",
        nextDay: "[Rytoj] LT",
        nextWeek: "dddd LT",
        lastDay: "[Vakar] LT",
        lastWeek: "[Praėjusį] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "po %s",
        past: "prieš %s",
        s: function a(N, I, O, L) {
          return I ? "kelios sekundės" : L ? "kelių sekundžių" : "kelias sekundes";
        },
        ss: b,
        m,
        mm: b,
        h: m,
        hh: b,
        d: m,
        dd: b,
        M: m,
        MM: b,
        y: m,
        yy: b
      },
      dayOfMonthOrdinalParse: /\d{1,2}-oji/,
      ordinal: function (N) {
        return N + "-oji";
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  }(i(15439));
});
