// Extracted from main; webpack module 39659. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    var e = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
      a = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
    t.defineLocale("dv", {
      months: e,
      monthsShort: e,
      weekdays: a,
      weekdaysShort: a,
      weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/M/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /\u0789\u0786|\u0789\u078a/,
      isPM: function (d) {
        return "މފ" === d;
      },
      meridiem: function (d, M, b) {
        return d < 12 ? "މކ" : "މފ";
      },
      calendar: {
        sameDay: "[މިއަދު] LT",
        nextDay: "[މާދަމާ] LT",
        nextWeek: "dddd LT",
        lastDay: "[އިއްޔެ] LT",
        lastWeek: "[ފާއިތުވި] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ތެރޭގައި %s",
        past: "ކުރިން %s",
        s: "ސިކުންތުކޮޅެއް",
        ss: "d% ސިކުންތު",
        m: "މިނިޓެއް",
        mm: "މިނިޓު %d",
        h: "ގަޑިއިރެއް",
        hh: "ގަޑިއިރު %d",
        d: "ދުވަހެއް",
        dd: "ދުވަސް %d",
        M: "މަހެއް",
        MM: "މަސް %d",
        y: "އަހަރެއް",
        yy: "އަހަރު %d"
      },
      preparse: function (d) {
        return d.replace(/\u060c/g, ",");
      },
      postformat: function (d) {
        return d.replace(/,/g, "،");
      },
      week: {
        dow: 7,
        doy: 12
      }
    });
  }(i(15439));
});
