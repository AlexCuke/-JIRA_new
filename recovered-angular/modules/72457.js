// Extracted from main; webpack module 72457. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    function e(m, d, M, b) {
      var A = {
        s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
        ss: [m + " सॅकंडांनी", m + " सॅकंड"],
        m: ["एका मिणटान", "एक मिनूट"],
        mm: [m + " मिणटांनी", m + " मिणटां"],
        h: ["एका वरान", "एक वर"],
        hh: [m + " वरांनी", m + " वरां"],
        d: ["एका दिसान", "एक दीस"],
        dd: [m + " दिसांनी", m + " दीस"],
        M: ["एका म्हयन्यान", "एक म्हयनो"],
        MM: [m + " म्हयन्यानी", m + " म्हयने"],
        y: ["एका वर्सान", "एक वर्स"],
        yy: [m + " वर्सांनी", m + " वर्सां"]
      };
      return b ? A[M][0] : A[M][1];
    }
    t.defineLocale("gom-deva", {
      months: {
        standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
        format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),
        isFormat: /MMMM(\s)+D[oD]?/
      },
      monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
      monthsParseExact: !0,
      weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
      weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
      weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "A h:mm [वाजतां]",
        LTS: "A h:mm:ss [वाजतां]",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY A h:mm [वाजतां]",
        LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
        llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
      },
      calendar: {
        sameDay: "[आयज] LT",
        nextDay: "[फाल्यां] LT",
        nextWeek: "[फुडलो] dddd[,] LT",
        lastDay: "[काल] LT",
        lastWeek: "[फाटलो] dddd[,] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s",
        past: "%s आदीं",
        s: e,
        ss: e,
        m: e,
        mm: e,
        h: e,
        hh: e,
        d: e,
        dd: e,
        M: e,
        MM: e,
        y: e,
        yy: e
      },
      dayOfMonthOrdinalParse: /\d{1,2}(\u0935\u0947\u0930)/,
      ordinal: function (m, d) {
        return "D" === d ? m + "वेर" : m;
      },
      week: {
        dow: 0,
        doy: 3
      },
      meridiemParse: /\u0930\u093e\u0924\u0940|\u0938\u0915\u093e\u0933\u0940\u0902|\u0926\u0928\u092a\u093e\u0930\u093e\u0902|\u0938\u093e\u0902\u091c\u0947/,
      meridiemHour: function (m, d) {
        return 12 === m && (m = 0), "राती" === d ? m < 4 ? m : m + 12 : "सकाळीं" === d ? m : "दनपारां" === d ? m > 12 ? m : m + 12 : "सांजे" === d ? m + 12 : void 0;
      },
      meridiem: function (m, d, M) {
        return m < 4 ? "राती" : m < 12 ? "सकाळीं" : m < 16 ? "दनपारां" : m < 20 ? "सांजे" : "राती";
      }
    });
  }(i(15439));
});
