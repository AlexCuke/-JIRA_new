// Extracted from main; webpack module 32349. Factory, not an ES module.
(function (Ae, V, i) {
  !function (t) {
    "use strict";

    t.defineLocale("lo", {
      months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
      monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
      weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
      weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
      weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "ວັນdddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,
      isPM: function (a) {
        return "ຕອນແລງ" === a;
      },
      meridiem: function (a, m, d) {
        return a < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
      },
      calendar: {
        sameDay: "[ມື້ນີ້ເວລາ] LT",
        nextDay: "[ມື້ອື່ນເວລາ] LT",
        nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
        lastDay: "[ມື້ວານນີ້ເວລາ] LT",
        lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ອີກ %s",
        past: "%sຜ່ານມາ",
        s: "ບໍ່ເທົ່າໃດວິນາທີ",
        ss: "%d ວິນາທີ",
        m: "1 ນາທີ",
        mm: "%d ນາທີ",
        h: "1 ຊົ່ວໂມງ",
        hh: "%d ຊົ່ວໂມງ",
        d: "1 ມື້",
        dd: "%d ມື້",
        M: "1 ເດືອນ",
        MM: "%d ເດືອນ",
        y: "1 ປີ",
        yy: "%d ປີ"
      },
      dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/,
      ordinal: function (a) {
        return "ທີ່" + a;
      }
    });
  }(i(15439));
});
