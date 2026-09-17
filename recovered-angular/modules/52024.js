// Extracted from main; webpack module 52024. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
        1: "၁",
        2: "၂",
        3: "၃",
        4: "၄",
        5: "၅",
        6: "၆",
        7: "၇",
        8: "၈",
        9: "၉",
        0: "၀"
      },
      a = {
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        "၀": "0"
      };
    t.defineLocale("my", {
      months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
      monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
      weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
      weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
      weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[ယနေ.] LT [မှာ]",
        nextDay: "[မနက်ဖြန်] LT [မှာ]",
        nextWeek: "dddd LT [မှာ]",
        lastDay: "[မနေ.က] LT [မှာ]",
        lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
        sameElse: "L"
      },
      relativeTime: {
        future: "လာမည့် %s မှာ",
        past: "လွန်ခဲ့သော %s က",
        s: "စက္ကန်.အနည်းငယ်",
        ss: "%d စက္ကန့်",
        m: "တစ်မိနစ်",
        mm: "%d မိနစ်",
        h: "တစ်နာရီ",
        hh: "%d နာရီ",
        d: "တစ်ရက်",
        dd: "%d ရက်",
        M: "တစ်လ",
        MM: "%d လ",
        y: "တစ်နှစ်",
        yy: "%d နှစ်"
      },
      preparse: function (d) {
        return d.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function (M) {
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
