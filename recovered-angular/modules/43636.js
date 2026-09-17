// Extracted from main; webpack module 43636. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    t.defineLocale("te", {
      months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
      monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
      monthsParseExact: !0,
      weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
      weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
      weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm",
        LLLL: "dddd, D MMMM YYYY, A h:mm"
      },
      calendar: {
        sameDay: "[నేడు] LT",
        nextDay: "[రేపు] LT",
        nextWeek: "dddd, LT",
        lastDay: "[నిన్న] LT",
        lastWeek: "[గత] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s లో",
        past: "%s క్రితం",
        s: "కొన్ని క్షణాలు",
        ss: "%d సెకన్లు",
        m: "ఒక నిమిషం",
        mm: "%d నిమిషాలు",
        h: "ఒక గంట",
        hh: "%d గంటలు",
        d: "ఒక రోజు",
        dd: "%d రోజులు",
        M: "ఒక నెల",
        MM: "%d నెలలు",
        y: "ఒక సంవత్సరం",
        yy: "%d సంవత్సరాలు"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\u0c35/,
      ordinal: "%dవ",
      meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,
      meridiemHour: function (a, m) {
        return 12 === a && (a = 0), "రాత్రి" === m ? a < 4 ? a : a + 12 : "ఉదయం" === m ? a : "మధ్యాహ్నం" === m ? a >= 10 ? a : a + 12 : "సాయంత్రం" === m ? a + 12 : void 0;
      },
      meridiem: function (a, m, d) {
        return a < 4 ? "రాత్రి" : a < 10 ? "ఉదయం" : a < 17 ? "మధ్యాహ్నం" : a < 20 ? "సాయంత్రం" : "రాత్రి";
      },
      week: {
        dow: 0,
        doy: 6
      }
    });
  }(i(15439));
});
