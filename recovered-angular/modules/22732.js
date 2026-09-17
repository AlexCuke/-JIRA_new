// Extracted from main; webpack module 22732. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
        1: "௧",
        2: "௨",
        3: "௩",
        4: "௪",
        5: "௫",
        6: "௬",
        7: "௭",
        8: "௮",
        9: "௯",
        0: "௦"
      },
      a = {
        "௧": "1",
        "௨": "2",
        "௩": "3",
        "௪": "4",
        "௫": "5",
        "௬": "6",
        "௭": "7",
        "௮": "8",
        "௯": "9",
        "௦": "0"
      };
    t.defineLocale("ta", {
      months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
      monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
      weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
      weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
      weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, HH:mm",
        LLLL: "dddd, D MMMM YYYY, HH:mm"
      },
      calendar: {
        sameDay: "[இன்று] LT",
        nextDay: "[நாளை] LT",
        nextWeek: "dddd, LT",
        lastDay: "[நேற்று] LT",
        lastWeek: "[கடந்த வாரம்] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s இல்",
        past: "%s முன்",
        s: "ஒரு சில விநாடிகள்",
        ss: "%d விநாடிகள்",
        m: "ஒரு நிமிடம்",
        mm: "%d நிமிடங்கள்",
        h: "ஒரு மணி நேரம்",
        hh: "%d மணி நேரம்",
        d: "ஒரு நாள்",
        dd: "%d நாட்கள்",
        M: "ஒரு மாதம்",
        MM: "%d மாதங்கள்",
        y: "ஒரு வருடம்",
        yy: "%d ஆண்டுகள்"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/,
      ordinal: function (d) {
        return d + "வது";
      },
      preparse: function (d) {
        return d.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, function (M) {
          return a[M];
        });
      },
      postformat: function (d) {
        return d.replace(/\d/g, function (M) {
          return e[M];
        });
      },
      meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,
      meridiem: function (d, M, b) {
        return d < 2 ? " யாமம்" : d < 6 ? " வைகறை" : d < 10 ? " காலை" : d < 14 ? " நண்பகல்" : d < 18 ? " எற்பாடு" : d < 22 ? " மாலை" : " யாமம்";
      },
      meridiemHour: function (d, M) {
        return 12 === d && (d = 0), "யாமம்" === M ? d < 2 ? d : d + 12 : "வைகறை" === M || "காலை" === M || "நண்பகல்" === M && d >= 10 ? d : d + 12;
      },
      week: {
        dow: 0,
        doy: 6
      }
    });
  }(i(15439));
});
