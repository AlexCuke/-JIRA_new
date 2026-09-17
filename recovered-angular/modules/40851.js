// Extracted from main; webpack module 40851. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    t.defineLocale("ka", {
      months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
      monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
      weekdays: {
        standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
        format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
        isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/
      },
      weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
      weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[დღეს] LT[-ზე]",
        nextDay: "[ხვალ] LT[-ზე]",
        lastDay: "[გუშინ] LT[-ზე]",
        nextWeek: "[შემდეგ] dddd LT[-ზე]",
        lastWeek: "[წინა] dddd LT-ზე",
        sameElse: "L"
      },
      relativeTime: {
        future: function (a) {
          return a.replace(/(\u10ec\u10d0\u10db|\u10ec\u10e3\u10d7|\u10e1\u10d0\u10d0\u10d7|\u10ec\u10d4\u10da|\u10d3\u10e6|\u10d7\u10d5)(\u10d8|\u10d4)/, function (m, d, M) {
            return "ი" === M ? d + "ში" : d + M + "ში";
          });
        },
        past: function (a) {
          return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(a) ? a.replace(/(\u10d8|\u10d4)$/, "ის წინ") : /\u10ec\u10d4\u10da\u10d8/.test(a) ? a.replace(/\u10ec\u10d4\u10da\u10d8$/, "წლის წინ") : a;
        },
        s: "რამდენიმე წამი",
        ss: "%d წამი",
        m: "წუთი",
        mm: "%d წუთი",
        h: "საათი",
        hh: "%d საათი",
        d: "დღე",
        dd: "%d დღე",
        M: "თვე",
        MM: "%d თვე",
        y: "წელი",
        yy: "%d წელი"
      },
      dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,
      ordinal: function (a) {
        return 0 === a ? a : 1 === a ? a + "-ლი" : a < 20 || a <= 100 && a % 20 == 0 || a % 100 == 0 ? "მე-" + a : a + "-ე";
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  }(i(15439));
});
