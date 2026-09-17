// Extracted from main; webpack module 53343. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
        1: "១",
        2: "២",
        3: "៣",
        4: "៤",
        5: "៥",
        6: "៦",
        7: "៧",
        8: "៨",
        9: "៩",
        0: "០"
      },
      a = {
        "១": "1",
        "២": "2",
        "៣": "3",
        "៤": "4",
        "៥": "5",
        "៦": "6",
        "៧": "7",
        "៨": "8",
        "៩": "9",
        "០": "0"
      };
    t.defineLocale("km", {
      months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
      monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
      weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
      weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
      weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,
      isPM: function (d) {
        return "ល្ងាច" === d;
      },
      meridiem: function (d, M, b) {
        return d < 12 ? "ព្រឹក" : "ល្ងាច";
      },
      calendar: {
        sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
        nextDay: "[ស្អែក ម៉ោង] LT",
        nextWeek: "dddd [ម៉ោង] LT",
        lastDay: "[ម្សិលមិញ ម៉ោង] LT",
        lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%sទៀត",
        past: "%sមុន",
        s: "ប៉ុន្មានវិនាទី",
        ss: "%d វិនាទី",
        m: "មួយនាទី",
        mm: "%d នាទី",
        h: "មួយម៉ោង",
        hh: "%d ម៉ោង",
        d: "មួយថ្ងៃ",
        dd: "%d ថ្ងៃ",
        M: "មួយខែ",
        MM: "%d ខែ",
        y: "មួយឆ្នាំ",
        yy: "%d ឆ្នាំ"
      },
      dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/,
      ordinal: "ទី%d",
      preparse: function (d) {
        return d.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, function (M) {
          return a[M];
        });
      },
      postformat: function (d) {
        return d.replace(/\d/g, function (M) {
          return e[M];
        });
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  }(i(15439));
});
