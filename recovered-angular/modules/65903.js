// Extracted from main; webpack module 65903. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
        1: "১",
        2: "২",
        3: "৩",
        4: "৪",
        5: "৫",
        6: "৬",
        7: "৭",
        8: "৮",
        9: "৯",
        0: "০"
      },
      a = {
        "১": "1",
        "২": "2",
        "৩": "3",
        "৪": "4",
        "৫": "5",
        "৬": "6",
        "৭": "7",
        "৮": "8",
        "৯": "9",
        "০": "0"
      };
    t.defineLocale("bn-bd", {
      months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
      monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
      weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
      weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
      weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
      longDateFormat: {
        LT: "A h:mm সময়",
        LTS: "A h:mm:ss সময়",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm সময়",
        LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
      },
      calendar: {
        sameDay: "[আজ] LT",
        nextDay: "[আগামীকাল] LT",
        nextWeek: "dddd, LT",
        lastDay: "[গতকাল] LT",
        lastWeek: "[গত] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s পরে",
        past: "%s আগে",
        s: "কয়েক সেকেন্ড",
        ss: "%d সেকেন্ড",
        m: "এক মিনিট",
        mm: "%d মিনিট",
        h: "এক ঘন্টা",
        hh: "%d ঘন্টা",
        d: "এক দিন",
        dd: "%d দিন",
        M: "এক মাস",
        MM: "%d মাস",
        y: "এক বছর",
        yy: "%d বছর"
      },
      preparse: function (d) {
        return d.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function (M) {
          return a[M];
        });
      },
      postformat: function (d) {
        return d.replace(/\d/g, function (M) {
          return e[M];
        });
      },
      meridiemParse: /\u09b0\u09be\u09a4|\u09ad\u09cb\u09b0|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be|\u09b0\u09be\u09a4/,
      meridiemHour: function (d, M) {
        return 12 === d && (d = 0), "রাত" === M ? d < 4 ? d : d + 12 : "ভোর" === M || "সকাল" === M ? d : "দুপুর" === M ? d >= 3 ? d : d + 12 : "বিকাল" === M || "সন্ধ্যা" === M ? d + 12 : void 0;
      },
      meridiem: function (d, M, b) {
        return d < 4 ? "রাত" : d < 6 ? "ভোর" : d < 12 ? "সকাল" : d < 15 ? "দুপুর" : d < 18 ? "বিকাল" : d < 20 ? "সন্ধ্যা" : "রাত";
      },
      week: {
        dow: 0,
        doy: 6
      }
    });
  }(i(15439));
});
