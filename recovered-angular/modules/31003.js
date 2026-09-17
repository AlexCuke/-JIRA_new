// Extracted from main; webpack module 31003. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    t.defineLocale("ja", {
      eras: [{
        since: "2019-05-01",
        offset: 1,
        name: "令和",
        narrow: "㋿",
        abbr: "R"
      }, {
        since: "1989-01-08",
        until: "2019-04-30",
        offset: 1,
        name: "平成",
        narrow: "㍻",
        abbr: "H"
      }, {
        since: "1926-12-25",
        until: "1989-01-07",
        offset: 1,
        name: "昭和",
        narrow: "㍼",
        abbr: "S"
      }, {
        since: "1912-07-30",
        until: "1926-12-24",
        offset: 1,
        name: "大正",
        narrow: "㍽",
        abbr: "T"
      }, {
        since: "1873-01-01",
        until: "1912-07-29",
        offset: 6,
        name: "明治",
        narrow: "㍾",
        abbr: "M"
      }, {
        since: "0001-01-01",
        until: "1873-12-31",
        offset: 1,
        name: "西暦",
        narrow: "AD",
        abbr: "AD"
      }, {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "紀元前",
        narrow: "BC",
        abbr: "BC"
      }],
      eraYearOrdinalRegex: /(\u5143|\d+)\u5e74/,
      eraYearOrdinalParse: function (a, m) {
        return "元" === m[1] ? 1 : parseInt(m[1] || a, 10);
      },
      months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
      weekdaysShort: "日_月_火_水_木_金_土".split("_"),
      weekdaysMin: "日_月_火_水_木_金_土".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY年M月D日",
        LLL: "YYYY年M月D日 HH:mm",
        LLLL: "YYYY年M月D日 dddd HH:mm",
        l: "YYYY/MM/DD",
        ll: "YYYY年M月D日",
        lll: "YYYY年M月D日 HH:mm",
        llll: "YYYY年M月D日(ddd) HH:mm"
      },
      meridiemParse: /\u5348\u524d|\u5348\u5f8c/i,
      isPM: function (a) {
        return "午後" === a;
      },
      meridiem: function (a, m, d) {
        return a < 12 ? "午前" : "午後";
      },
      calendar: {
        sameDay: "[今日] LT",
        nextDay: "[明日] LT",
        nextWeek: function (a) {
          return a.week() !== this.week() ? "[来週]dddd LT" : "dddd LT";
        },
        lastDay: "[昨日] LT",
        lastWeek: function (a) {
          return this.week() !== a.week() ? "[先週]dddd LT" : "dddd LT";
        },
        sameElse: "L"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\u65e5/,
      ordinal: function (a, m) {
        switch (m) {
          case "y":
            return 1 === a ? "元年" : a + "年";
          case "d":
          case "D":
          case "DDD":
            return a + "日";
          default:
            return a;
        }
      },
      relativeTime: {
        future: "%s後",
        past: "%s前",
        s: "数秒",
        ss: "%d秒",
        m: "1分",
        mm: "%d分",
        h: "1時間",
        hh: "%d時間",
        d: "1日",
        dd: "%d日",
        M: "1ヶ月",
        MM: "%dヶ月",
        y: "1年",
        yy: "%d年"
      }
    });
  }(i(15439));
});
