// Extracted from main; webpack module 66184. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = {
        1: "१",
        2: "२",
        3: "३",
        4: "४",
        5: "५",
        6: "६",
        7: "७",
        8: "८",
        9: "९",
        0: "०"
      },
      a = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
      };
    function m(M, b, A, N) {
      var I = "";
      if (b) switch (A) {
        case "s":
          I = "काही सेकंद";
          break;
        case "ss":
          I = "%d सेकंद";
          break;
        case "m":
          I = "एक मिनिट";
          break;
        case "mm":
          I = "%d मिनिटे";
          break;
        case "h":
          I = "एक तास";
          break;
        case "hh":
          I = "%d तास";
          break;
        case "d":
          I = "एक दिवस";
          break;
        case "dd":
          I = "%d दिवस";
          break;
        case "M":
          I = "एक महिना";
          break;
        case "MM":
          I = "%d महिने";
          break;
        case "y":
          I = "एक वर्ष";
          break;
        case "yy":
          I = "%d वर्षे";
      } else switch (A) {
        case "s":
          I = "काही सेकंदां";
          break;
        case "ss":
          I = "%d सेकंदां";
          break;
        case "m":
          I = "एका मिनिटा";
          break;
        case "mm":
          I = "%d मिनिटां";
          break;
        case "h":
          I = "एका तासा";
          break;
        case "hh":
          I = "%d तासां";
          break;
        case "d":
          I = "एका दिवसा";
          break;
        case "dd":
          I = "%d दिवसां";
          break;
        case "M":
          I = "एका महिन्या";
          break;
        case "MM":
          I = "%d महिन्यां";
          break;
        case "y":
          I = "एका वर्षा";
          break;
        case "yy":
          I = "%d वर्षां";
      }
      return I.replace(/%d/i, M);
    }
    t.defineLocale("mr", {
      months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
      monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
      monthsParseExact: !0,
      weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
      weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
      weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
      longDateFormat: {
        LT: "A h:mm वाजता",
        LTS: "A h:mm:ss वाजता",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm वाजता",
        LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
      },
      calendar: {
        sameDay: "[आज] LT",
        nextDay: "[उद्या] LT",
        nextWeek: "dddd, LT",
        lastDay: "[काल] LT",
        lastWeek: "[मागील] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%sमध्ये",
        past: "%sपूर्वी",
        s: m,
        ss: m,
        m,
        mm: m,
        h: m,
        hh: m,
        d: m,
        dd: m,
        M: m,
        MM: m,
        y: m,
        yy: m
      },
      preparse: function (M) {
        return M.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (b) {
          return a[b];
        });
      },
      postformat: function (M) {
        return M.replace(/\d/g, function (b) {
          return e[b];
        });
      },
      meridiemParse: /\u092a\u0939\u093e\u091f\u0947|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940|\u0930\u093e\u0924\u094d\u0930\u0940/,
      meridiemHour: function (M, b) {
        return 12 === M && (M = 0), "पहाटे" === b || "सकाळी" === b ? M : "दुपारी" === b || "सायंकाळी" === b || "रात्री" === b ? M >= 12 ? M : M + 12 : void 0;
      },
      meridiem: function (M, b, A) {
        return M >= 0 && M < 6 ? "पहाटे" : M < 12 ? "सकाळी" : M < 17 ? "दुपारी" : M < 20 ? "सायंकाळी" : "रात्री";
      },
      week: {
        dow: 0,
        doy: 6
      }
    });
  }(i(15439));
});
