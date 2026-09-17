// Extracted from main; webpack module 69645. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
        1: "༡",
        2: "༢",
        3: "༣",
        4: "༤",
        5: "༥",
        6: "༦",
        7: "༧",
        8: "༨",
        9: "༩",
        0: "༠"
      },
      a = {
        "༡": "1",
        "༢": "2",
        "༣": "3",
        "༤": "4",
        "༥": "5",
        "༦": "6",
        "༧": "7",
        "༨": "8",
        "༩": "9",
        "༠": "0"
      };
    t.defineLocale("bo", {
      months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
      monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),
      monthsShortRegex: /^(\u0f5f\u0fb3\u0f0b\d{1,2})/,
      monthsParseExact: !0,
      weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
      weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
      weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm",
        LLLL: "dddd, D MMMM YYYY, A h:mm"
      },
      calendar: {
        sameDay: "[དི་རིང] LT",
        nextDay: "[སང་ཉིན] LT",
        nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
        lastDay: "[ཁ་སང] LT",
        lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s ལ་",
        past: "%s སྔན་ལ",
        s: "ལམ་སང",
        ss: "%d སྐར་ཆ།",
        m: "སྐར་མ་གཅིག",
        mm: "%d སྐར་མ",
        h: "ཆུ་ཚོད་གཅིག",
        hh: "%d ཆུ་ཚོད",
        d: "ཉིན་གཅིག",
        dd: "%d ཉིན་",
        M: "ཟླ་བ་གཅིག",
        MM: "%d ཟླ་བ",
        y: "ལོ་གཅིག",
        yy: "%d ལོ"
      },
      preparse: function (d) {
        return d.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function (M) {
          return a[M];
        });
      },
      postformat: function (d) {
        return d.replace(/\d/g, function (M) {
          return e[M];
        });
      },
      meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,
      meridiemHour: function (d, M) {
        return 12 === d && (d = 0), "མཚན་མོ" === M && d >= 4 || "ཉིན་གུང" === M && d < 5 || "དགོང་དག" === M ? d + 12 : d;
      },
      meridiem: function (d, M, b) {
        return d < 4 ? "མཚན་མོ" : d < 10 ? "ཞོགས་ཀས" : d < 17 ? "ཉིན་གུང" : d < 20 ? "དགོང་དག" : "མཚན་མོ";
      },
      week: {
        dow: 0,
        doy: 6
      }
    });
  }(i(15439));
});
