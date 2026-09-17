// Extracted from main; webpack module 77908. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    t.defineLocale("zh-cn", {
      months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
      weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
      weekdaysMin: "日_一_二_三_四_五_六".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY年M月D日",
        LLL: "YYYY年M月D日Ah点mm分",
        LLLL: "YYYY年M月D日ddddAh点mm分",
        l: "YYYY/M/D",
        ll: "YYYY年M月D日",
        lll: "YYYY年M月D日 HH:mm",
        llll: "YYYY年M月D日dddd HH:mm"
      },
      meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
      meridiemHour: function (a, m) {
        return 12 === a && (a = 0), "凌晨" === m || "早上" === m || "上午" === m ? a : "下午" === m || "晚上" === m ? a + 12 : a >= 11 ? a : a + 12;
      },
      meridiem: function (a, m, d) {
        var M = 100 * a + m;
        return M < 600 ? "凌晨" : M < 900 ? "早上" : M < 1130 ? "上午" : M < 1230 ? "中午" : M < 1800 ? "下午" : "晚上";
      },
      calendar: {
        sameDay: "[今天]LT",
        nextDay: "[明天]LT",
        nextWeek: function (a) {
          return a.week() !== this.week() ? "[下]dddLT" : "[本]dddLT";
        },
        lastDay: "[昨天]LT",
        lastWeek: function (a) {
          return this.week() !== a.week() ? "[上]dddLT" : "[本]dddLT";
        },
        sameElse: "L"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/,
      ordinal: function (a, m) {
        switch (m) {
          case "d":
          case "D":
          case "DDD":
            return a + "日";
          case "M":
            return a + "月";
          case "w":
          case "W":
            return a + "周";
          default:
            return a;
        }
      },
      relativeTime: {
        future: "%s后",
        past: "%s前",
        s: "几秒",
        ss: "%d 秒",
        m: "1 分钟",
        mm: "%d 分钟",
        h: "1 小时",
        hh: "%d 小时",
        d: "1 天",
        dd: "%d 天",
        w: "1 周",
        ww: "%d 周",
        M: "1 个月",
        MM: "%d 个月",
        y: "1 年",
        yy: "%d 年"
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  }(i(15439));
});
