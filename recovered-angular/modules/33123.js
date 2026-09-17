// Extracted from main; webpack module 33123. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    t.defineLocale("si", {
      months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
      monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
      weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
      weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
      weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "a h:mm",
        LTS: "a h:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY MMMM D",
        LLL: "YYYY MMMM D, a h:mm",
        LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
      },
      calendar: {
        sameDay: "[අද] LT[ට]",
        nextDay: "[හෙට] LT[ට]",
        nextWeek: "dddd LT[ට]",
        lastDay: "[ඊයේ] LT[ට]",
        lastWeek: "[පසුගිය] dddd LT[ට]",
        sameElse: "L"
      },
      relativeTime: {
        future: "%sකින්",
        past: "%sකට පෙර",
        s: "තත්පර කිහිපය",
        ss: "තත්පර %d",
        m: "මිනිත්තුව",
        mm: "මිනිත්තු %d",
        h: "පැය",
        hh: "පැය %d",
        d: "දිනය",
        dd: "දින %d",
        M: "මාසය",
        MM: "මාස %d",
        y: "වසර",
        yy: "වසර %d"
      },
      dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,
      ordinal: function (a) {
        return a + " වැනි";
      },
      meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,
      isPM: function (a) {
        return "ප.ව." === a || "පස් වරු" === a;
      },
      meridiem: function (a, m, d) {
        return a > 11 ? d ? "ප.ව." : "පස් වරු" : d ? "පෙ.ව." : "පෙර වරු";
      }
    });
  }(i(15439));
});
