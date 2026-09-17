// Extracted from main; webpack module 73766. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(Et, Ue) {
    if (void 0 !== Et.one && 1 === Ue) return Et.one;
    var Me = Ue % 10,
      Ke = Ue % 100;
    return 1 === Me && 11 !== Ke ? Et.singularNominative.replace("{{count}}", String(Ue)) : Me >= 2 && Me <= 4 && (Ke < 10 || Ke > 20) ? Et.singularGenitive.replace("{{count}}", String(Ue)) : Et.pluralGenitive.replace("{{count}}", String(Ue));
  }
  function e(Et) {
    return function (Ue, Me) {
      return null != Me && Me.addSuffix ? Me.comparison && Me.comparison > 0 ? Et.future ? t(Et.future, Ue) : "через " + t(Et.regular, Ue) : Et.past ? t(Et.past, Ue) : t(Et.regular, Ue) + " назад" : t(Et.regular, Ue);
    };
  }
  i.r(V), i.d(V, {
    default: () => Ft
  });
  var a = {
    lessThanXSeconds: e({
      regular: {
        one: "меньше секунды",
        singularNominative: "меньше {{count}} секунды",
        singularGenitive: "меньше {{count}} секунд",
        pluralGenitive: "меньше {{count}} секунд"
      },
      future: {
        one: "меньше, чем через секунду",
        singularNominative: "меньше, чем через {{count}} секунду",
        singularGenitive: "меньше, чем через {{count}} секунды",
        pluralGenitive: "меньше, чем через {{count}} секунд"
      }
    }),
    xSeconds: e({
      regular: {
        singularNominative: "{{count}} секунда",
        singularGenitive: "{{count}} секунды",
        pluralGenitive: "{{count}} секунд"
      },
      past: {
        singularNominative: "{{count}} секунду назад",
        singularGenitive: "{{count}} секунды назад",
        pluralGenitive: "{{count}} секунд назад"
      },
      future: {
        singularNominative: "через {{count}} секунду",
        singularGenitive: "через {{count}} секунды",
        pluralGenitive: "через {{count}} секунд"
      }
    }),
    halfAMinute: function (Ue, Me) {
      return null != Me && Me.addSuffix ? Me.comparison && Me.comparison > 0 ? "через полминуты" : "полминуты назад" : "полминуты";
    },
    lessThanXMinutes: e({
      regular: {
        one: "меньше минуты",
        singularNominative: "меньше {{count}} минуты",
        singularGenitive: "меньше {{count}} минут",
        pluralGenitive: "меньше {{count}} минут"
      },
      future: {
        one: "меньше, чем через минуту",
        singularNominative: "меньше, чем через {{count}} минуту",
        singularGenitive: "меньше, чем через {{count}} минуты",
        pluralGenitive: "меньше, чем через {{count}} минут"
      }
    }),
    xMinutes: e({
      regular: {
        singularNominative: "{{count}} минута",
        singularGenitive: "{{count}} минуты",
        pluralGenitive: "{{count}} минут"
      },
      past: {
        singularNominative: "{{count}} минуту назад",
        singularGenitive: "{{count}} минуты назад",
        pluralGenitive: "{{count}} минут назад"
      },
      future: {
        singularNominative: "через {{count}} минуту",
        singularGenitive: "через {{count}} минуты",
        pluralGenitive: "через {{count}} минут"
      }
    }),
    aboutXHours: e({
      regular: {
        singularNominative: "около {{count}} часа",
        singularGenitive: "около {{count}} часов",
        pluralGenitive: "около {{count}} часов"
      },
      future: {
        singularNominative: "приблизительно через {{count}} час",
        singularGenitive: "приблизительно через {{count}} часа",
        pluralGenitive: "приблизительно через {{count}} часов"
      }
    }),
    xHours: e({
      regular: {
        singularNominative: "{{count}} час",
        singularGenitive: "{{count}} часа",
        pluralGenitive: "{{count}} часов"
      }
    }),
    xDays: e({
      regular: {
        singularNominative: "{{count}} день",
        singularGenitive: "{{count}} дня",
        pluralGenitive: "{{count}} дней"
      }
    }),
    aboutXWeeks: e({
      regular: {
        singularNominative: "около {{count}} недели",
        singularGenitive: "около {{count}} недель",
        pluralGenitive: "около {{count}} недель"
      },
      future: {
        singularNominative: "приблизительно через {{count}} неделю",
        singularGenitive: "приблизительно через {{count}} недели",
        pluralGenitive: "приблизительно через {{count}} недель"
      }
    }),
    xWeeks: e({
      regular: {
        singularNominative: "{{count}} неделя",
        singularGenitive: "{{count}} недели",
        pluralGenitive: "{{count}} недель"
      }
    }),
    aboutXMonths: e({
      regular: {
        singularNominative: "около {{count}} месяца",
        singularGenitive: "около {{count}} месяцев",
        pluralGenitive: "около {{count}} месяцев"
      },
      future: {
        singularNominative: "приблизительно через {{count}} месяц",
        singularGenitive: "приблизительно через {{count}} месяца",
        pluralGenitive: "приблизительно через {{count}} месяцев"
      }
    }),
    xMonths: e({
      regular: {
        singularNominative: "{{count}} месяц",
        singularGenitive: "{{count}} месяца",
        pluralGenitive: "{{count}} месяцев"
      }
    }),
    aboutXYears: e({
      regular: {
        singularNominative: "около {{count}} года",
        singularGenitive: "около {{count}} лет",
        pluralGenitive: "около {{count}} лет"
      },
      future: {
        singularNominative: "приблизительно через {{count}} год",
        singularGenitive: "приблизительно через {{count}} года",
        pluralGenitive: "приблизительно через {{count}} лет"
      }
    }),
    xYears: e({
      regular: {
        singularNominative: "{{count}} год",
        singularGenitive: "{{count}} года",
        pluralGenitive: "{{count}} лет"
      }
    }),
    overXYears: e({
      regular: {
        singularNominative: "больше {{count}} года",
        singularGenitive: "больше {{count}} лет",
        pluralGenitive: "больше {{count}} лет"
      },
      future: {
        singularNominative: "больше, чем через {{count}} год",
        singularGenitive: "больше, чем через {{count}} года",
        pluralGenitive: "больше, чем через {{count}} лет"
      }
    }),
    almostXYears: e({
      regular: {
        singularNominative: "почти {{count}} год",
        singularGenitive: "почти {{count}} года",
        pluralGenitive: "почти {{count}} лет"
      },
      future: {
        singularNominative: "почти через {{count}} год",
        singularGenitive: "почти через {{count}} года",
        pluralGenitive: "почти через {{count}} лет"
      }
    })
  };
  var M = i(58990);
  const O = {
    date: (0, M.Z)({
      formats: {
        full: "EEEE, d MMMM y 'г.'",
        long: "d MMMM y 'г.'",
        medium: "d MMM y 'г.'",
        short: "dd.MM.y"
      },
      defaultWidth: "full"
    }),
    time: (0, M.Z)({
      formats: {
        full: "H:mm:ss zzzz",
        long: "H:mm:ss z",
        medium: "H:mm:ss",
        short: "H:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, M.Z)({
      formats: {
        any: "{{date}}, {{time}}"
      },
      defaultWidth: "any"
    })
  };
  var L = i(40833),
    C = i(74697);
  function v(Et, Ue, Me) {
    (0, L.Z)(2, arguments);
    var Ke = (0, C.Z)(Et, Me),
      Ze = (0, C.Z)(Ue, Me);
    return Ke.getTime() === Ze.getTime();
  }
  var f = ["воскресенье", "понедельник", "вторник", "среду", "четверг", "пятницу", "субботу"];
  function h(Et) {
    var Ue = f[Et];
    return 2 === Et ? "'во " + Ue + " в' p" : "'в " + Ue + " в' p";
  }
  var u = {
    lastWeek: function (Ue, Me, Ke) {
      var Ze = Ue.getUTCDay();
      return v(Ue, Me, Ke) ? h(Ze) : function E(Et) {
        var Ue = f[Et];
        switch (Et) {
          case 0:
            return "'в прошлое " + Ue + " в' p";
          case 1:
          case 2:
          case 4:
            return "'в прошлый " + Ue + " в' p";
          case 3:
          case 5:
          case 6:
            return "'в прошлую " + Ue + " в' p";
        }
      }(Ze);
    },
    yesterday: "'вчера в' p",
    today: "'сегодня в' p",
    tomorrow: "'завтра в' p",
    nextWeek: function (Ue, Me, Ke) {
      var Ze = Ue.getUTCDay();
      return v(Ue, Me, Ke) ? h(Ze) : function x(Et) {
        var Ue = f[Et];
        switch (Et) {
          case 0:
            return "'в следующее " + Ue + " в' p";
          case 1:
          case 2:
          case 4:
            return "'в следующий " + Ue + " в' p";
          case 3:
          case 5:
          case 6:
            return "'в следующую " + Ue + " в' p";
        }
      }(Ze);
    },
    other: "P"
  };
  var B = i(34380);
  const ae = {
    ordinalNumber: function (Ue, Me) {
      var Ke = Number(Ue),
        Ze = Me?.unit;
      return Ke + ("date" === Ze ? "-е" : "week" === Ze || "minute" === Ze || "second" === Ze ? "-я" : "-й");
    },
    era: (0, B.Z)({
      values: {
        narrow: ["до н.э.", "н.э."],
        abbreviated: ["до н. э.", "н. э."],
        wide: ["до нашей эры", "нашей эры"]
      },
      defaultWidth: "wide"
    }),
    quarter: (0, B.Z)({
      values: {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
        wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
      },
      defaultWidth: "wide",
      argumentCallback: function (Ue) {
        return Ue - 1;
      }
    }),
    month: (0, B.Z)({
      values: {
        narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
        abbreviated: ["янв.", "фев.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."],
        wide: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
      },
      defaultWidth: "wide",
      formattingValues: {
        narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
        abbreviated: ["янв.", "фев.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."],
        wide: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
      },
      defaultFormattingWidth: "wide"
    }),
    day: (0, B.Z)({
      values: {
        narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
        short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
        wide: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
      },
      defaultWidth: "wide"
    }),
    dayPeriod: (0, B.Z)({
      values: {
        narrow: {
          am: "ДП",
          pm: "ПП",
          midnight: "полн.",
          noon: "полд.",
          morning: "утро",
          afternoon: "день",
          evening: "веч.",
          night: "ночь"
        },
        abbreviated: {
          am: "ДП",
          pm: "ПП",
          midnight: "полн.",
          noon: "полд.",
          morning: "утро",
          afternoon: "день",
          evening: "веч.",
          night: "ночь"
        },
        wide: {
          am: "ДП",
          pm: "ПП",
          midnight: "полночь",
          noon: "полдень",
          morning: "утро",
          afternoon: "день",
          evening: "вечер",
          night: "ночь"
        }
      },
      defaultWidth: "any",
      formattingValues: {
        narrow: {
          am: "ДП",
          pm: "ПП",
          midnight: "полн.",
          noon: "полд.",
          morning: "утра",
          afternoon: "дня",
          evening: "веч.",
          night: "ночи"
        },
        abbreviated: {
          am: "ДП",
          pm: "ПП",
          midnight: "полн.",
          noon: "полд.",
          morning: "утра",
          afternoon: "дня",
          evening: "веч.",
          night: "ночи"
        },
        wide: {
          am: "ДП",
          pm: "ПП",
          midnight: "полночь",
          noon: "полдень",
          morning: "утра",
          afternoon: "дня",
          evening: "вечера",
          night: "ночи"
        }
      },
      defaultFormattingWidth: "wide"
    })
  };
  var Y = i(98480);
  const Ft = {
    code: "ru",
    formatDistance: function (Ue, Me, Ke) {
      return a[Ue](Me, Ke);
    },
    formatLong: O,
    formatRelative: function (Ue, Me, Ke, Ze) {
      var Ee = u[Ue];
      return "function" == typeof Ee ? Ee(Me, Ke, Ze) : Ee;
    },
    localize: ae,
    match: {
      ordinalNumber: (0, i(941).Z)({
        matchPattern: /^(\d+)(-?(\u0435|\u044f|\u0439|\u043e\u0435|\u044c\u0435|\u0430\u044f|\u044c\u044f|\u044b\u0439|\u043e\u0439|\u0438\u0439|\u044b\u0439))?/i,
        parsePattern: /\d+/i,
        valueCallback: function (Ue) {
          return parseInt(Ue, 10);
        }
      }),
      era: (0, Y.Z)({
        matchPatterns: {
          narrow: /^((\u0434\u043e )?\u043d\.?\s?\u044d\.?)/i,
          abbreviated: /^((\u0434\u043e )?\u043d\.?\s?\u044d\.?)/i,
          wide: /^(\u0434\u043e \u043d\u0430\u0448\u0435\u0439 \u044d\u0440\u044b|\u043d\u0430\u0448\u0435\u0439 \u044d\u0440\u044b|\u043d\u0430\u0448\u0430 \u044d\u0440\u0430)/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          any: [/^\u0434/i, /^\u043d/i]
        },
        defaultParseWidth: "any"
      }),
      quarter: (0, Y.Z)({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^[1234](-?[\u044b\u043e\u0438]?\u0439?)? \u043a\u0432.?/i,
          wide: /^[1234](-?[\u044b\u043e\u0438]?\u0439?)? \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          any: [/1/i, /2/i, /3/i, /4/i]
        },
        defaultParseWidth: "any",
        valueCallback: function (Ue) {
          return Ue + 1;
        }
      }),
      month: (0, Y.Z)({
        matchPatterns: {
          narrow: /^[\u044f\u0444\u043c\u0430\u0438\u0441\u043e\u043d\u0434]/i,
          abbreviated: /^(\u044f\u043d\u0432|\u0444\u0435\u0432|\u043c\u0430\u0440\u0442?|\u0430\u043f\u0440|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]?|\u0438\u044e\u043b[\u044c\u044f]?|\u0430\u0432\u0433|\u0441\u0435\u043d\u0442?|\u043e\u043a\u0442|\u043d\u043e\u044f\u0431?|\u0434\u0435\u043a)\.?/i,
          wide: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043b[\u044c\u044f]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f])/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [/^\u044f/i, /^\u0444/i, /^\u043c/i, /^\u0430/i, /^\u043c/i, /^\u0438/i, /^\u0438/i, /^\u0430/i, /^\u0441/i, /^\u043e/i, /^\u043d/i, /^\u044f/i],
          any: [/^\u044f/i, /^\u0444/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f/i, /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432/i, /^\u0441/i, /^\u043e/i, /^\u043d/i, /^\u0434/i]
        },
        defaultParseWidth: "any"
      }),
      day: (0, Y.Z)({
        matchPatterns: {
          narrow: /^[\u0432\u043f\u0441\u0447]/i,
          short: /^(\u0432\u0441|\u0432\u043e|\u043f\u043d|\u043f\u043e|\u0432\u0442|\u0441\u0440|\u0447\u0442|\u0447\u0435|\u043f\u0442|\u043f\u044f|\u0441\u0431|\u0441\u0443)\.?/i,
          abbreviated: /^(\u0432\u0441\u043a|\u0432\u043e\u0441|\u043f\u043d\u0434|\u043f\u043e\u043d|\u0432\u0442\u0440|\u0432\u0442\u043e|\u0441\u0440\u0434|\u0441\u0440\u0435|\u0447\u0442\u0432|\u0447\u0435\u0442|\u043f\u0442\u043d|\u043f\u044f\u0442|\u0441\u0443\u0431).?/i,
          wide: /^(\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c[\u0435\u044f]|\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a\u0430?|\u0432\u0442\u043e\u0440\u043d\u0438\u043a\u0430?|\u0441\u0440\u0435\u0434[\u0430\u044b]|\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430?|\u043f\u044f\u0442\u043d\u0438\u0446[\u0430\u044b]|\u0441\u0443\u0431\u0431\u043e\u0442[\u0430\u044b])/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [/^\u0432/i, /^\u043f/i, /^\u0432/i, /^\u0441/i, /^\u0447/i, /^\u043f/i, /^\u0441/i],
          any: [/^\u0432[\u043e\u0441]/i, /^\u043f[\u043e\u043d]/i, /^\u0432/i, /^\u0441\u0440/i, /^\u0447/i, /^\u043f[\u044f\u0442]/i, /^\u0441[\u0443\u0431]/i]
        },
        defaultParseWidth: "any"
      }),
      dayPeriod: (0, Y.Z)({
        matchPatterns: {
          narrow: /^([\u0434\u043f]\u043f|\u043f\u043e\u043b\u043d\.?|\u043f\u043e\u043b\u0434\.?|\u0443\u0442\u0440[\u043e\u0430]|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u043e\u0447[\u044c\u0438])/i,
          abbreviated: /^([\u0434\u043f]\u043f|\u043f\u043e\u043b\u043d\.?|\u043f\u043e\u043b\u0434\.?|\u0443\u0442\u0440[\u043e\u0430]|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u043e\u0447[\u044c\u0438])/i,
          wide: /^([\u0434\u043f]\u043f|\u043f\u043e\u043b\u043d\u043e\u0447\u044c|\u043f\u043e\u043b\u0434\u0435\u043d\u044c|\u0443\u0442\u0440[\u043e\u0430]|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430?|\u043d\u043e\u0447[\u044c\u0438])/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          any: {
            am: /^\u0434\u043f/i,
            pm: /^\u043f\u043f/i,
            midnight: /^\u043f\u043e\u043b\u043d/i,
            noon: /^\u043f\u043e\u043b\u0434/i,
            morning: /^\u0443/i,
            afternoon: /^\u0434[\u0435\u043d]/i,
            evening: /^\u0432/i,
            night: /^\u043d/i
          }
        },
        defaultParseWidth: "any"
      })
    },
    options: {
      weekStartsOn: 1,
      firstWeekContainsDate: 1
    }
  };
});
