// Extracted from main; webpack module 3460. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    t.defineLocale("el", {
      monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
      monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
      months: function (m, d) {
        return m ? "string" == typeof d && /D/.test(d.substring(0, d.indexOf("MMMM"))) ? this._monthsGenitiveEl[m.month()] : this._monthsNominativeEl[m.month()] : this._monthsNominativeEl;
      },
      monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
      weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
      weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
      weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
      meridiem: function (m, d, M) {
        return m > 11 ? M ? "μμ" : "ΜΜ" : M ? "πμ" : "ΠΜ";
      },
      isPM: function (m) {
        return "μ" === (m + "").toLowerCase()[0];
      },
      meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i,
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendarEl: {
        sameDay: "[Σήμερα {}] LT",
        nextDay: "[Αύριο {}] LT",
        nextWeek: "dddd [{}] LT",
        lastDay: "[Χθες {}] LT",
        lastWeek: function () {
          return 6 === this.day() ? "[το προηγούμενο] dddd [{}] LT" : "[την προηγούμενη] dddd [{}] LT";
        },
        sameElse: "L"
      },
      calendar: function (m, d) {
        var M = this._calendarEl[m],
          b = d && d.hours();
        return function e(m) {
          return typeof Function < "u" && m instanceof Function || "[object Function]" === Object.prototype.toString.call(m);
        }(M) && (M = M.apply(d)), M.replace("{}", b % 12 == 1 ? "στη" : "στις");
      },
      relativeTime: {
        future: "σε %s",
        past: "%s πριν",
        s: "λίγα δευτερόλεπτα",
        ss: "%d δευτερόλεπτα",
        m: "ένα λεπτό",
        mm: "%d λεπτά",
        h: "μία ώρα",
        hh: "%d ώρες",
        d: "μία μέρα",
        dd: "%d μέρες",
        M: "ένας μήνας",
        MM: "%d μήνες",
        y: "ένας χρόνος",
        yy: "%d χρόνια"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\u03b7/,
      ordinal: "%dη",
      week: {
        dow: 1,
        doy: 4
      }
    });
  }(i(15439));
});
