// Extracted from main; webpack module 37944. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
        1: "੧",
        2: "੨",
        3: "੩",
        4: "੪",
        5: "੫",
        6: "੬",
        7: "੭",
        8: "੮",
        9: "੯",
        0: "੦"
      },
      a = {
        "੧": "1",
        "੨": "2",
        "੩": "3",
        "੪": "4",
        "੫": "5",
        "੬": "6",
        "੭": "7",
        "੮": "8",
        "੯": "9",
        "੦": "0"
      };
    t.defineLocale("pa-in", {
      months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
      monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
      weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
      weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
      weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
      longDateFormat: {
        LT: "A h:mm ਵਜੇ",
        LTS: "A h:mm:ss ਵਜੇ",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
        LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
      },
      calendar: {
        sameDay: "[ਅਜ] LT",
        nextDay: "[ਕਲ] LT",
        nextWeek: "[ਅਗਲਾ] dddd, LT",
        lastDay: "[ਕਲ] LT",
        lastWeek: "[ਪਿਛਲੇ] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s ਵਿੱਚ",
        past: "%s ਪਿਛਲੇ",
        s: "ਕੁਝ ਸਕਿੰਟ",
        ss: "%d ਸਕਿੰਟ",
        m: "ਇਕ ਮਿੰਟ",
        mm: "%d ਮਿੰਟ",
        h: "ਇੱਕ ਘੰਟਾ",
        hh: "%d ਘੰਟੇ",
        d: "ਇੱਕ ਦਿਨ",
        dd: "%d ਦਿਨ",
        M: "ਇੱਕ ਮਹੀਨਾ",
        MM: "%d ਮਹੀਨੇ",
        y: "ਇੱਕ ਸਾਲ",
        yy: "%d ਸਾਲ"
      },
      preparse: function (d) {
        return d.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function (M) {
          return a[M];
        });
      },
      postformat: function (d) {
        return d.replace(/\d/g, function (M) {
          return e[M];
        });
      },
      meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,
      meridiemHour: function (d, M) {
        return 12 === d && (d = 0), "ਰਾਤ" === M ? d < 4 ? d : d + 12 : "ਸਵੇਰ" === M ? d : "ਦੁਪਹਿਰ" === M ? d >= 10 ? d : d + 12 : "ਸ਼ਾਮ" === M ? d + 12 : void 0;
      },
      meridiem: function (d, M, b) {
        return d < 4 ? "ਰਾਤ" : d < 10 ? "ਸਵੇਰ" : d < 17 ? "ਦੁਪਹਿਰ" : d < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ";
      },
      week: {
        dow: 0,
        doy: 6
      }
    });
  }(i(15439));
});
