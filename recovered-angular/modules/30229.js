// Extracted from main; webpack module 30229. Factory, not an ES module.
((Ae, V, i) => {
  var Fi;
  i.d(V, {
    W: () => fi
  });
  var t = i(97582),
    e = i(24006),
    a = i(5264),
    m = i(71764),
    d = i.n(m),
    M = i(82722),
    b = i(39300),
    A = i(28746),
    N = i(77579),
    I = i(39841),
    O = i(63900),
    L = i(60515),
    C = i(4128),
    v = i(84445),
    f = i(3977),
    E = i(77015),
    h = i(88062),
    x = i(20166),
    u = i(98115),
    T = i(21028),
    R = i(34364),
    B = i(99036),
    y = i(50802),
    j = i(29991),
    W = i.n(j),
    F = i(94650),
    Le = i(73453),
    ke = i(44688),
    J = i(91854),
    fe = i(89653),
    ye = i(68983),
    ae = i(44348);
  const Y = ["heading"];
  function G(Rn, ki) {
    if (1 & Rn && (F.ynx(0), F._UZ(1, "span", 15), F.TgZ(2, "span"), F._uU(3), F.qZA(), F.BQk()), 2 & Rn) {
      const Ei = F.oxw(2);
      F.xp6(3), F.hij("МК ", Ei.patientInfo.cardNumber, "");
    }
  }
  function te(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div")(1, "div", 14), F._uU(2), F.qZA(), F.TgZ(3, "p")(4, "span"), F._uU(5), F.qZA(), F.YNc(6, G, 4, 1, "ng-container", 3), F._UZ(7, "span", 15), F.TgZ(8, "span"), F._uU(9), F.qZA()()()), 2 & Rn) {
      const Ei = F.oxw();
      F.xp6(2), F.Oqu(Ei.patientInfo.fio), F.xp6(3), F.lnq("", Ei.patientInfo.gender, ", ", Ei.patientInfo.age, " лет, ", Ei.patientInfo.birthDate, ""), F.xp6(1), F.Q6J("ngIf", Ei.patientInfo.cardNumber), F.xp6(3), F.Oqu(Ei.patientInfo.deptName);
    }
  }
  function pe(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function be(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2), F.ALo(3, "luDateFormatter"), F.qZA()), 2 & Rn) {
      const Ei = F.oxw();
      F.xp6(1), F.Q6J("size", 24), F.xp6(1), F.hij(" Дата должна быть равна или меньше ", F.xi3(3, 2, Ei.maxDate, "dd.MM.yyyy"), " ");
    }
  }
  function le(Rn, ki) {
    if (1 & Rn) {
      const Ei = F.EpF();
      F.TgZ(0, "div", 42), F.NdJ("click", function () {
        F.CHM(Ei);
        const Oi = F.oxw().index,
          Ji = F.oxw();
        return F.KtG(Ji.onDeleteTube(Oi));
      }), F._uU(1, "Удалить"), F.qZA();
    }
  }
  function n(Rn, ki) {
    if (1 & Rn && (F.ynx(0), F._UZ(1, "span", 15), F.TgZ(2, "div"), F._uU(3), F.ALo(4, "date"), F.ALo(5, "date"), F.qZA(), F.BQk()), 2 & Rn) {
      const Ei = F.oxw().index,
        Wt = F.oxw();
      F.xp6(3), F.AsE("Уход завершен: ", F.xi3(4, 2, null == Wt.tubesData[Ei] || null == Wt.tubesData[Ei].tubeInfo ? null : Wt.tubesData[Ei].tubeInfo.finishDate, "dd.MM.yyyy"), ", ", F.xi3(5, 5, null == Wt.tubesData[Ei] || null == Wt.tubesData[Ei].tubeInfo ? null : Wt.tubesData[Ei].tubeInfo.finishDate, "HH:mm"), "");
    }
  }
  function Se(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 43), F._UZ(1, "lu-svg-icon", 44), F.TgZ(2, "p"), F._uU(3), F._UZ(4, "br"), F._uU(5, " Отметьте уход и подпишите документ. "), F.qZA()()), 2 & Rn) {
      const Ei = F.oxw().index,
        Wt = F.oxw();
      F.xp6(1), F.Q6J("size", 24), F.xp6(2), F.hij(" Отсутствует информация по уходу за назогастральным зондом за ", Wt.observationWarning[Ei].missedDays.join(", "), " ");
    }
  }
  function qe(Rn, ki) {
    1 & Rn && F._UZ(0, "app-tube-event-hint");
  }
  function Rt(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function We(Rn, ki) {
    if (1 & Rn && (F._UZ(0, "span", 54), F.ALo(1, "luHighlight")), 2 & Rn) {
      const Ei = ki.$implicit;
      F.oxw(2);
      const Wt = F.MAs(17);
      F.Q6J("innerHTML", F.xi3(1, 1, Ei, Wt.searchText), F.oJD);
    }
  }
  function Re(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "lu-data-list", 52), F.ALo(1, "luFilterByText"), F.YNc(2, We, 2, 4, "ng-template", null, 53, F.W1O), F.qZA()), 2 & Rn) {
      const Ei = F.MAs(3);
      F.oxw();
      const Wt = F.MAs(17),
        Oi = F.oxw(2);
      F.Q6J("items", F.xi3(1, 2, Oi.tubes, Wt.searchText))("itemContent", Ei);
    }
  }
  function st(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function q(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 45)(1, "div", 46)(2, "span", 8), F._uU(3, "Время "), F.TgZ(4, "span"), F._uU(5, "*"), F.qZA()(), F.TgZ(6, "label", 9)(7, "lu-input-wrapper"), F._UZ(8, "input", 47), F.qZA(), F.YNc(9, Rt, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(10, "div", 48)(11, "span", 8), F._uU(12, "Размер зонда "), F.TgZ(13, "span"), F._uU(14, "*"), F.qZA()(), F.TgZ(15, "label", 9)(16, "lu-combobox", 49, 50), F.YNc(18, Re, 4, 5, "lu-data-list", 51), F.qZA(), F.YNc(19, st, 3, 1, "lu-form-message", 11), F.qZA()()()), 2 & Rn) {
      const Ei = F.oxw().index,
        Wt = F.oxw();
      F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "replacement.time").hasError("required")), F.xp6(7), F.Q6J("clearButton", !1), F.xp6(3), F.Q6J("ngIf", Wt.getControl(Ei, "replacement.size").hasError("required"));
    }
  }
  function mt(Rn, ki) {
    1 & Rn && F._UZ(0, "app-tube-event-hint");
  }
  function ut(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function Ct(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 45)(1, "div", 46)(2, "span", 8), F._uU(3, "Время "), F.TgZ(4, "span"), F._uU(5, "*"), F.qZA()(), F.TgZ(6, "label", 9)(7, "lu-input-wrapper"), F._UZ(8, "input", 47), F.qZA(), F.YNc(9, ut, 3, 1, "lu-form-message", 11), F.qZA()()()), 2 & Rn) {
      const Ei = F.oxw().index,
        Wt = F.oxw();
      F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "nasalTreatment.time").hasError("required"));
    }
  }
  function Ft(Rn, ki) {
    1 & Rn && F._UZ(0, "app-tube-event-hint");
  }
  function Et(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function Ue(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function Me(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 45)(1, "div", 46)(2, "span", 8), F._uU(3, "Время "), F.TgZ(4, "span"), F._uU(5, "*"), F.qZA()(), F.TgZ(6, "label", 9)(7, "lu-input-wrapper"), F._UZ(8, "input", 47), F.qZA(), F.YNc(9, Et, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(10, "div", 55)(11, "span", 8), F._uU(12, "Описание воспаления "), F.TgZ(13, "span"), F._uU(14, "*"), F.qZA()(), F.TgZ(15, "label", 9)(16, "lu-input-wrapper"), F._UZ(17, "input", 56), F.qZA(), F.YNc(18, Ue, 3, 1, "lu-form-message", 11), F.qZA()()()), 2 & Rn) {
      const Ei = F.oxw().index,
        Wt = F.oxw();
      F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "inflammation.time").hasError("required")), F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "inflammation.desc").hasError("required"));
    }
  }
  function Ke(Rn, ki) {
    1 & Rn && F._UZ(0, "app-tube-event-hint");
  }
  function Ze(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function Ee(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 45)(1, "div", 46)(2, "span", 8), F._uU(3, "Время "), F.TgZ(4, "span"), F._uU(5, "*"), F.qZA()(), F.TgZ(6, "label", 9)(7, "lu-input-wrapper"), F._UZ(8, "input", 47), F.qZA(), F.YNc(9, Ze, 3, 1, "lu-form-message", 11), F.qZA()()()), 2 & Rn) {
      const Ei = F.oxw().index,
        Wt = F.oxw();
      F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "bandage.time").hasError("required"));
    }
  }
  function je(Rn, ki) {
    1 & Rn && F._UZ(0, "app-tube-event-hint");
  }
  function Mt(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function Je(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function Xt(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 45)(1, "div", 46)(2, "span", 8), F._uU(3, "Время "), F.TgZ(4, "span"), F._uU(5, "*"), F.qZA()(), F.TgZ(6, "label", 9)(7, "lu-input-wrapper"), F._UZ(8, "input", 47), F.qZA(), F.YNc(9, Mt, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(10, "div", 55)(11, "span", 8), F._uU(12, "Описание жалобы "), F.TgZ(13, "span"), F._uU(14, "*"), F.qZA()(), F.TgZ(15, "label", 9)(16, "lu-input-wrapper"), F._UZ(17, "input", 56), F.qZA(), F.YNc(18, Je, 3, 1, "lu-form-message", 11), F.qZA()()()), 2 & Rn) {
      const Ei = F.oxw().index,
        Wt = F.oxw();
      F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "complaint.time").hasError("required")), F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "complaint.desc").hasError("required"));
    }
  }
  function Nn(Rn, ki) {
    1 & Rn && F._UZ(0, "app-tube-event-hint");
  }
  function Pi(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function Ii(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function yi(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 45)(1, "div", 46)(2, "span", 8), F._uU(3, "Время "), F.TgZ(4, "span"), F._uU(5, "*"), F.qZA()(), F.TgZ(6, "label", 9)(7, "lu-input-wrapper"), F._UZ(8, "input", 47), F.qZA(), F.YNc(9, Pi, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(10, "div", 55)(11, "span", 8), F._uU(12, "Описание "), F.TgZ(13, "span"), F._uU(14, "*"), F.qZA()(), F.TgZ(15, "label", 9)(16, "lu-input-wrapper"), F._UZ(17, "input", 56), F.qZA(), F.YNc(18, Ii, 3, 1, "lu-form-message", 11), F.qZA()()()), 2 & Rn) {
      const Ei = F.oxw().index,
        Wt = F.oxw();
      F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "addInfo.time").hasError("required")), F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "addInfo.desc").hasError("required"));
    }
  }
  function co(Rn, ki) {
    1 & Rn && F._UZ(0, "app-tube-event-hint");
  }
  function Jo(Rn, ki) {
    if (1 & Rn && (F._UZ(0, "span", 54), F.ALo(1, "luHighlight")), 2 & Rn) {
      const Ei = ki.$implicit;
      F.oxw(2);
      const Wt = F.MAs(8);
      F.Q6J("innerHTML", F.xi3(1, 1, Ei, Wt.searchText), F.oJD);
    }
  }
  function fr(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "lu-data-list", 52), F.ALo(1, "luFilterByText"), F.YNc(2, Jo, 2, 4, "ng-template", null, 67, F.W1O), F.qZA()), 2 & Rn) {
      const Ei = F.MAs(3);
      F.oxw();
      const Wt = F.MAs(8),
        Oi = F.oxw(2);
      F.Q6J("items", F.xi3(1, 2, Oi.nutrient, Wt.searchText))("itemContent", Ei);
    }
  }
  function pt(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function Dt(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function Ht(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function Dn(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 68)(1, "div", 46)(2, "span", 8), F._uU(3, "Время "), F.TgZ(4, "span"), F._uU(5, "*"), F.qZA()(), F.TgZ(6, "label", 9)(7, "lu-input-wrapper"), F._UZ(8, "input", 69), F.qZA(), F.YNc(9, Dt, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(10, "div", 46)(11, "span", 8), F._uU(12, "Объем "), F.TgZ(13, "span"), F._uU(14, "*"), F.qZA()(), F.TgZ(15, "label", 9)(16, "lu-input-wrapper"), F._UZ(17, "input", 70), F.qZA(), F.YNc(18, Ht, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(19, "span", 71), F._uU(20, "мл"), F.qZA()()), 2 & Rn) {
      const Ei = F.oxw(2).index,
        Wt = F.oxw();
      F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "nutrition.fractionalTime").hasError("required")), F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "nutrition.fractionalValue").hasError("required"));
    }
  }
  function vt(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function an(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function li(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Длительность питания менее часа "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function zn(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function $t(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 68)(1, "div", 46)(2, "span", 8), F._uU(3, "Период "), F.TgZ(4, "span"), F._uU(5, "*"), F.qZA()(), F.TgZ(6, "label", 9)(7, "lu-input-wrapper"), F._UZ(8, "input", 72), F.qZA(), F.YNc(9, vt, 3, 1, "lu-form-message", 11), F.qZA()(), F._UZ(10, "span", 73), F.TgZ(11, "div", 46)(12, "span", 74), F._uU(13, "Период "), F.TgZ(14, "span"), F._uU(15, "*"), F.qZA()(), F.TgZ(16, "label", 9)(17, "lu-input-wrapper"), F._UZ(18, "input", 75), F.qZA(), F.YNc(19, an, 3, 1, "lu-form-message", 11), F.YNc(20, li, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(21, "div", 46)(22, "span", 8), F._uU(23, "Объем "), F.TgZ(24, "span"), F._uU(25, "*"), F.qZA()(), F.TgZ(26, "label", 9)(27, "lu-input-wrapper"), F._UZ(28, "input", 76), F.qZA(), F.YNc(29, zn, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(30, "span", 71), F._uU(31, "мл"), F.qZA()()), 2 & Rn) {
      const Ei = F.oxw(2).index,
        Wt = F.oxw();
      F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "nutrition.longStartTime").hasError("required")), F.xp6(8), F.ekj("short-period-error", Wt.getControl(Ei, "nutrition.longEndTime").hasError("shortPeriod")), F.xp6(2), F.Q6J("ngIf", Wt.getControl(Ei, "nutrition.longEndTime").hasError("required")), F.xp6(1), F.Q6J("ngIf", Wt.getControl(Ei, "nutrition.longEndTime").hasError("shortPeriod")), F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "nutrition.longValue").hasError("required"));
    }
  }
  function Mn(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 57)(1, "div", 58)(2, "span", 8), F._uU(3, "Питательная смесь "), F.TgZ(4, "span"), F._uU(5, "*"), F.qZA()(), F.TgZ(6, "label", 9)(7, "lu-combobox", 59, 60), F.YNc(9, fr, 4, 5, "lu-data-list", 51), F.qZA(), F.YNc(10, pt, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(11, "div", 61)(12, "label", 62), F._UZ(13, "input", 63), F.TgZ(14, "span"), F._uU(15, "Дробное введение"), F.qZA()(), F.YNc(16, Dn, 21, 2, "div", 64), F.qZA(), F.TgZ(17, "div", 65)(18, "label", 62), F._UZ(19, "input", 66), F.TgZ(20, "span"), F._uU(21, "Длительное, капельное введение"), F.qZA()(), F.YNc(22, $t, 32, 6, "div", 64), F.qZA()()), 2 & Rn) {
      const Ei = F.oxw().index,
        Wt = F.oxw();
      F.xp6(7), F.Q6J("clearButton", !1), F.xp6(3), F.Q6J("ngIf", Wt.getControl(Ei, "nutrition.nutrientName").hasError("required")), F.xp6(2), F.ekj("radio--error", Wt.getControl(Ei, "nutrition.nutrientType").hasError("required")), F.xp6(4), F.Q6J("ngIf", "fractional" === Wt.getControl(Ei, "nutrition").value.nutrientType), F.xp6(2), F.ekj("radio--error", Wt.getControl(Ei, "nutrition.nutrientType").hasError("required")), F.xp6(4), F.Q6J("ngIf", "long" === Wt.getControl(Ei, "nutrition").value.nutrientType);
    }
  }
  function Qn(Rn, ki) {
    1 & Rn && F._UZ(0, "app-tube-event-hint");
  }
  function In(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function ui(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function To(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 68)(1, "div", 46)(2, "span", 8), F._uU(3, "Время "), F.TgZ(4, "span"), F._uU(5, "*"), F.qZA()(), F.TgZ(6, "label", 9)(7, "lu-input-wrapper"), F._UZ(8, "input", 69), F.qZA(), F.YNc(9, In, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(10, "div", 46)(11, "span", 8), F._uU(12, "Объем "), F.TgZ(13, "span"), F._uU(14, "*"), F.qZA()(), F.TgZ(15, "label", 9)(16, "lu-input-wrapper"), F._UZ(17, "input", 70), F.qZA(), F.YNc(18, ui, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(19, "span", 71), F._uU(20, "мл"), F.qZA()()), 2 & Rn) {
      const Ei = F.oxw(2).index,
        Wt = F.oxw();
      F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "nutritionWater.fractionalTime").hasError("required")), F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "nutritionWater.fractionalValue").hasError("required"));
    }
  }
  function bi(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function qn(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function Xn(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Длительность питания менее часа "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function Yi(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function Eo(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 68)(1, "div", 46)(2, "span", 8), F._uU(3, "Период "), F.TgZ(4, "span"), F._uU(5, "*"), F.qZA()(), F.TgZ(6, "label", 9)(7, "lu-input-wrapper"), F._UZ(8, "input", 72), F.qZA(), F.YNc(9, bi, 3, 1, "lu-form-message", 11), F.qZA()(), F._UZ(10, "span", 73), F.TgZ(11, "div", 46)(12, "span", 74), F._uU(13, "Период "), F.TgZ(14, "span"), F._uU(15, "*"), F.qZA()(), F.TgZ(16, "label", 9)(17, "lu-input-wrapper"), F._UZ(18, "input", 75), F.qZA(), F.YNc(19, qn, 3, 1, "lu-form-message", 11), F.YNc(20, Xn, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(21, "div", 46)(22, "span", 8), F._uU(23, "Объем "), F.TgZ(24, "span"), F._uU(25, "*"), F.qZA()(), F.TgZ(26, "label", 9)(27, "lu-input-wrapper"), F._UZ(28, "input", 76), F.qZA(), F.YNc(29, Yi, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(30, "span", 71), F._uU(31, "мл"), F.qZA()()), 2 & Rn) {
      const Ei = F.oxw(2).index,
        Wt = F.oxw();
      F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "nutritionWater.longStartTime").hasError("required")), F.xp6(8), F.ekj("short-period-error", Wt.getControl(Ei, "nutritionWater.longEndTime").hasError("shortPeriod")), F.xp6(2), F.Q6J("ngIf", Wt.getControl(Ei, "nutritionWater.longEndTime").hasError("required")), F.xp6(1), F.Q6J("ngIf", Wt.getControl(Ei, "nutritionWater.longEndTime").hasError("shortPeriod")), F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "nutritionWater.longValue").hasError("required"));
    }
  }
  function Fo(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 57)(1, "div", 61)(2, "label", 62), F._UZ(3, "input", 77), F.TgZ(4, "span"), F._uU(5, "Дробное введение"), F.qZA()(), F.YNc(6, To, 21, 2, "div", 64), F.qZA(), F.TgZ(7, "div", 65)(8, "label", 62), F._UZ(9, "input", 78), F.TgZ(10, "span"), F._uU(11, "Длительное, капельное введение"), F.qZA()(), F.YNc(12, Eo, 32, 6, "div", 64), F.qZA()()), 2 & Rn) {
      const Ei = F.oxw().index,
        Wt = F.oxw();
      F.xp6(2), F.ekj("radio--error", Wt.getControl(Ei, "nutritionWater.nutrientTypeWater").hasError("required")), F.xp6(4), F.Q6J("ngIf", "fractional" === Wt.getControl(Ei, "nutritionWater").value.nutrientTypeWater), F.xp6(2), F.ekj("radio--error", Wt.getControl(Ei, "nutritionWater.nutrientTypeWater").hasError("required")), F.xp6(4), F.Q6J("ngIf", "long" === Wt.getControl(Ei, "nutritionWater").value.nutrientTypeWater);
    }
  }
  function br(Rn, ki) {
    1 & Rn && F._UZ(0, "app-tube-event-hint");
  }
  function Pr(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function qo(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 45)(1, "div", 46)(2, "span", 8), F._uU(3, "Время "), F.TgZ(4, "span"), F._uU(5, "*"), F.qZA()(), F.TgZ(6, "label", 9)(7, "lu-input-wrapper"), F._UZ(8, "input", 47), F.qZA(), F.YNc(9, Pr, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(10, "div", 55)(11, "label", 79)(12, "lu-input-wrapper"), F._UZ(13, "input", 80), F.qZA()()(), F.TgZ(14, "div", 55)(15, "label", 81)(16, "lu-input-wrapper"), F._UZ(17, "input", 82), F.qZA()()()()), 2 & Rn) {
      const Ei = F.oxw().index,
        Wt = F.oxw();
      F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "deleteTube.time").hasError("required"));
    }
  }
  function Yo(Rn, ki) {
    1 & Rn && F._UZ(0, "app-tube-event-hint");
  }
  function wr(Rn, ki) {
    1 & Rn && (F.TgZ(0, "lu-form-message", 16), F._UZ(1, "lu-svg-icon", 17), F._uU(2, " Обязательное поле "), F.qZA()), 2 & Rn && (F.xp6(1), F.Q6J("size", 24));
  }
  function oo(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 45)(1, "div", 46)(2, "span", 8), F._uU(3, "Время "), F.TgZ(4, "span"), F._uU(5, "*"), F.qZA()(), F.TgZ(6, "label", 9)(7, "lu-input-wrapper"), F._UZ(8, "input", 47), F.qZA(), F.YNc(9, wr, 3, 1, "lu-form-message", 11), F.qZA()(), F.TgZ(10, "div", 55)(11, "label", 84)(12, "lu-input-wrapper"), F._UZ(13, "input", 85), F.qZA()()()()), 2 & Rn) {
      const Ei = F.oxw(2).index,
        Wt = F.oxw();
      F.xp6(9), F.Q6J("ngIf", Wt.getControl(Ei, "finishTube.time").hasError("required"));
    }
  }
  function Di(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "div", 83)(1, "div", 28)(2, "lu-checkbox", 29), F._uU(3, "Завершить уход за пациентом"), F.qZA(), F.YNc(4, Yo, 1, 0, "app-tube-event-hint", 3), F.qZA(), F.YNc(5, oo, 14, 1, "div", 30), F.qZA()), 2 & Rn) {
      const Ei = F.oxw().index,
        Wt = F.oxw();
      F.xp6(2), F.Q6J("color", "blue"), F.xp6(2), F.Q6J("ngIf", Wt.isEventHint("finishTube", Ei)), F.xp6(1), F.Q6J("ngIf", Wt.getControl(Ei, "finishTube").value.check && !Wt.isFinishedTube(Ei));
    }
  }
  function Ci(Rn, ki) {
    if (1 & Rn) {
      const Ei = F.EpF();
      F.TgZ(0, "app-tube-events", 86), F.NdJ("changeLoad", function (Oi) {
        F.CHM(Ei);
        const Ji = F.oxw(2);
        return F.KtG(Ji.changeLoad(Oi));
      }), F.qZA();
    }
    if (2 & Rn) {
      const Ei = F.oxw().index,
        Wt = F.oxw();
      F.Q6J("isSign", Wt.isFinishedTube(Ei))("tubeData", Wt.tubesData[Ei])("observationDate", Wt.dateControl.value)("patientId", Wt.selectedPatient.careCase.actualPatientId);
    }
  }
  function lo(Rn, ki) {
    if (1 & Rn && (F.TgZ(0, "lu-expansion-panel", 18)(1, "lu-expansion-panel-header", 19)(2, "div", 20)(3, "div", 21)(4, "div", 22), F._uU(5, "Карта наблюдения за назогастральным зондом"), F.qZA(), F.YNc(6, le, 2, 0, "div", 23), F.qZA(), F.TgZ(7, "div"), F._uU(8), F.qZA(), F.TgZ(9, "div", 24)(10, "div"), F._uU(11), F.ALo(12, "date"), F.ALo(13, "date"), F.qZA(), F.YNc(14, n, 6, 8, "ng-container", 3), F.qZA()()(), F.TgZ(15, "div", 25), F.YNc(16, Se, 6, 2, "div", 26), F.TgZ(17, "div", 27)(18, "div", 28)(19, "lu-checkbox", 29), F._uU(20, "Замена зонда"), F.qZA(), F.YNc(21, qe, 1, 0, "app-tube-event-hint", 3), F.qZA(), F.YNc(22, q, 20, 3, "div", 30), F.qZA(), F.TgZ(23, "div", 31)(24, "div", 28)(25, "lu-checkbox", 29), F._uU(26, "Обработка носовых ходов"), F.qZA(), F.YNc(27, mt, 1, 0, "app-tube-event-hint", 3), F.qZA(), F.YNc(28, Ct, 10, 1, "div", 30), F.qZA(), F.TgZ(29, "div", 32)(30, "div", 28)(31, "lu-checkbox", 29), F._uU(32, "Воспаление слизистой оболочки"), F.qZA(), F.YNc(33, Ft, 1, 0, "app-tube-event-hint", 3), F.qZA(), F.YNc(34, Me, 19, 2, "div", 30), F.qZA(), F.TgZ(35, "div", 33)(36, "div", 28)(37, "lu-checkbox", 29), F._uU(38, "Смена повязки для фиксации зонда"), F.qZA(), F.YNc(39, Ke, 1, 0, "app-tube-event-hint", 3), F.qZA(), F.YNc(40, Ee, 10, 1, "div", 30), F.qZA(), F.TgZ(41, "div", 34)(42, "div", 28)(43, "lu-checkbox", 29), F._uU(44, "Жалобы пациента"), F.qZA(), F.YNc(45, je, 1, 0, "app-tube-event-hint", 3), F.qZA(), F.YNc(46, Xt, 19, 2, "div", 30), F.qZA(), F.TgZ(47, "div", 35)(48, "div", 28)(49, "lu-checkbox", 29), F._uU(50, "Дополнительная информация"), F.qZA(), F.YNc(51, Nn, 1, 0, "app-tube-event-hint", 3), F.qZA(), F.YNc(52, yi, 19, 2, "div", 30), F.qZA(), F.TgZ(53, "div", 36)(54, "div", 28)(55, "lu-checkbox", 29), F._uU(56, "Энтеральное питание (смесь)"), F.qZA(), F.YNc(57, co, 1, 0, "app-tube-event-hint", 3), F.qZA(), F.YNc(58, Mn, 23, 8, "div", 37), F.qZA(), F.TgZ(59, "div", 38)(60, "div", 28)(61, "lu-checkbox", 29), F._uU(62, "Энтеральное питание (вода)"), F.qZA(), F.YNc(63, Qn, 1, 0, "app-tube-event-hint", 3), F.qZA(), F.YNc(64, Fo, 13, 6, "div", 37), F.qZA(), F.TgZ(65, "div", 39)(66, "div", 28)(67, "lu-checkbox", 29), F._uU(68, "Удаление зонда"), F.qZA(), F.YNc(69, br, 1, 0, "app-tube-event-hint", 3), F.qZA(), F.YNc(70, qo, 18, 1, "div", 30), F.qZA(), F.YNc(71, Di, 6, 3, "div", 40), F.YNc(72, Ci, 1, 4, "app-tube-events", 41), F.qZA()()), 2 & Rn) {
      const Ei = ki.$implicit,
        Wt = ki.index,
        Oi = F.oxw();
      F.Q6J("expanded", 0 === Wt)("formGroup", Ei), F.xp6(1), F.Q6J("withArrow", !0), F.xp6(5), F.Q6J("ngIf", null == Oi.tubesData[Wt] ? null : Oi.tubesData[Wt].allowDeleteCard), F.xp6(2), F.hij("Размер зонда: ", null == Oi.tubesData[Wt] || null == Oi.tubesData[Wt].tubeInfo ? null : Oi.tubesData[Wt].tubeInfo.tubeSize, ""), F.xp6(3), F.AsE("Дата установки: ", F.xi3(12, 40, null == Oi.tubesData[Wt] || null == Oi.tubesData[Wt].tubeInfo ? null : Oi.tubesData[Wt].tubeInfo.installDate, "dd.MM.yyyy"), ", ", F.xi3(13, 43, null == Oi.tubesData[Wt] || null == Oi.tubesData[Wt].tubeInfo ? null : Oi.tubesData[Wt].tubeInfo.installDate, "HH:mm"), ""), F.xp6(3), F.Q6J("ngIf", null == Oi.tubesData[Wt] || null == Oi.tubesData[Wt].tubeInfo ? null : Oi.tubesData[Wt].tubeInfo.finishDate), F.xp6(1), F.ekj("signed", Oi.isFinishedTube(Wt)), F.xp6(1), F.Q6J("ngIf", null == Oi.observationWarning || null == Oi.observationWarning[Wt] ? null : Oi.observationWarning[Wt].state), F.xp6(3), F.Q6J("color", "blue"), F.xp6(2), F.Q6J("ngIf", Oi.isEventHint("replacement", Wt)), F.xp6(1), F.Q6J("ngIf", Oi.getControl(Wt, "replacement").value.check && !Oi.isFinishedTube(Wt)), F.xp6(3), F.Q6J("color", "blue"), F.xp6(2), F.Q6J("ngIf", Oi.isEventHint("nasalTreatment", Wt)), F.xp6(1), F.Q6J("ngIf", Oi.getControl(Wt, "nasalTreatment").value.check && !Oi.isFinishedTube(Wt)), F.xp6(3), F.Q6J("color", "blue"), F.xp6(2), F.Q6J("ngIf", Oi.isEventHint("inflammation", Wt)), F.xp6(1), F.Q6J("ngIf", Oi.getControl(Wt, "inflammation").value.check && !Oi.isFinishedTube(Wt)), F.xp6(3), F.Q6J("color", "blue"), F.xp6(2), F.Q6J("ngIf", Oi.isEventHint("bandage", Wt)), F.xp6(1), F.Q6J("ngIf", Oi.getControl(Wt, "bandage").value.check && !Oi.isFinishedTube(Wt)), F.xp6(3), F.Q6J("color", "blue"), F.xp6(2), F.Q6J("ngIf", Oi.isEventHint("complaint", Wt)), F.xp6(1), F.Q6J("ngIf", Oi.getControl(Wt, "complaint").value.check && !Oi.isFinishedTube(Wt)), F.xp6(3), F.Q6J("color", "blue"), F.xp6(2), F.Q6J("ngIf", Oi.isEventHint("addInfo", Wt)), F.xp6(1), F.Q6J("ngIf", Oi.getControl(Wt, "addInfo").value.check && !Oi.isFinishedTube(Wt)), F.xp6(3), F.Q6J("color", "blue"), F.xp6(2), F.Q6J("ngIf", Oi.isEventHint("nutrition", Wt)), F.xp6(1), F.Q6J("ngIf", Oi.getControl(Wt, "nutrition").value.check && !Oi.isFinishedTube(Wt)), F.xp6(3), F.Q6J("color", "blue"), F.xp6(2), F.Q6J("ngIf", Oi.isEventHint("nutritionWater", Wt)), F.xp6(1), F.Q6J("ngIf", Oi.getControl(Wt, "nutritionWater").value.check && !Oi.isFinishedTube(Wt)), F.xp6(3), F.Q6J("color", "blue"), F.xp6(2), F.Q6J("ngIf", Oi.isEventHint("deleteTube", Wt)), F.xp6(1), F.Q6J("ngIf", Oi.getControl(Wt, "deleteTube").value.check && !Oi.isFinishedTube(Wt)), F.xp6(1), F.Q6J("ngIf", Oi.tubesData[Wt].visibleFinish), F.xp6(1), F.Q6J("ngIf", Oi.tubesData[Wt].groupedEvents.length);
    }
  }
  function jo(Rn, ki) {
    if (1 & Rn) {
      const Ei = F.EpF();
      F.TgZ(0, "button", 89), F.NdJ("click", function () {
        F.CHM(Ei);
        const Oi = F.oxw(2);
        return F.KtG(Oi.onSave());
      }), F._uU(1), F.qZA();
    }
    if (2 & Rn) {
      const Ei = F.oxw(2);
      F.Q6J("disabled", (null == Ei.observationWarning || null == Ei.observationWarning[0] ? null : Ei.observationWarning[0].state) || Ei.dateControl.invalid)("size", "medium")("color", "blue"), F.xp6(1), F.hij(" ", Ei.isFinishChecked ? "Подписать" : "Сохранить", " ");
    }
  }
  function Go(Rn, ki) {
    if (1 & Rn) {
      const Ei = F.EpF();
      F.TgZ(0, "button", 90), F.NdJ("click", function () {
        F.CHM(Ei);
        const Oi = F.oxw(2);
        return F.KtG(Oi.onUnSign());
      }), F._uU(1, " Снять подпись "), F.qZA();
    }
    2 & Rn && F.Q6J("size", "medium")("color", "blue");
  }
  function ji(Rn, ki) {
    if (1 & Rn && (F.ynx(0), F.YNc(1, jo, 2, 4, "button", 87), F.YNc(2, Go, 2, 2, "button", 88), F.BQk()), 2 & Rn) {
      const Ei = F.oxw();
      F.xp6(1), F.Q6J("ngIf", !Ei.allowUnSign(0)), F.xp6(1), F.Q6J("ngIf", Ei.allowUnSign(0));
    }
  }
  function ti(Rn, ki) {
    1 & Rn && F._UZ(0, "app-loader");
  }
  d().extend(W());
  let fi = ((Fi = class {
    constructor(ki, Ei, Wt, Oi, Ji, Ao, Sr, us, Ps) {
      this.compositionService = ki, this.modalService = Ei, this.messageService = Wt, this.store = Oi, this.fb = Ji, this.cdr = Ao, this.luValidators = Sr, this.modalRef = us, this.modalData = Ps, this.resetForm$ = new N.x(), this.tubesData = [], this.isLoading = !1, this.heightBody = "", this.tubes = u.fW, this.nutrient = [], this.patientInfo = null, this.observationWarning = [], this.minDate = new Date(), this.maxDate = new Date(), this.dateControl = new e.NI(new Date(), [e.kI.required, this.luValidators.dateMax(this.maxDate)]), this.tubeObservationForm = this.fb.array([]), this.store.dispatch(E.gA.getTerminology({
        request: [{
          featureKey: "nutrient_list",
          terminologyName: "dictionaries:babyformula"
        }]
      }));
    }
    ngOnInit() {
      (0, I.a)({
        careCaseId: this.store.select(B._0),
        tubeList: this.store.select(B.YT),
        observationDateCard: this.store.select(B.OZ)
      }).pipe((0, a.t)(this), (0, O.w)(({
        careCaseId: ki,
        tubeList: Ei,
        observationDateCard: Wt
      }) => {
        this.tubeObservationForm = this.fb.array([]), this.dateControl.setValue(new Date(Wt), {
          emitEvent: !1
        });
        const Oi = Ei.find(({
          careCase: Ji
        }) => Ji.careCaseId === ki);
        if (Oi) {
          this.selectedPatient = Oi, this.patientInfo = {
            fio: [Oi.careCase.lastName, Oi.careCase.firstName, Oi.careCase.secondName].join(" "),
            gender: Oi.careCase.genderName[0].toUpperCase(),
            age: (0, h.Kp)(Oi.careCase.birthDate) || 0,
            birthDate: d()(Oi.careCase.birthDate).format(u.UV),
            cardNumber: Oi.hospitalCard ? Oi.hospitalCard.number : "",
            deptName: Oi.patientMovement.departmentName
          };
          const Ji = Oi.nasogastric.elements.filter(Ao => d()(Ao.installDate).startOf("day").isSameOrBefore(d()(Wt).startOf("day")));
          return this.tubesData = this.sortTubes(Ji).map(Ao => {
            this.addFormGroup();
            const Sr = new Date(Ao.installDate),
              us = Ao.finishDate ? new Date(Ao.finishDate) : new Date();
            return (!this.minDate || Sr < this.minDate) && (this.minDate = Sr), (!this.maxDate || us > this.maxDate) && (this.maxDate = us), {
              protocolId: Ao.protocolId,
              allowDeleteCard: !Ao.nasogastricCareMarks.length,
              isSignedCard: !!Ao.sign || !!Ao.nasogastricCareMarks.find(Ps => "finishTime" in Ps),
              visibleFinish: this.calcIsVisibleFinish(Ao),
              tubeInfo: {
                installDate: new Date(Ao.installDate),
                finishDate: Ao.finishDate ? new Date(Ao.finishDate) : void 0,
                tubeSize: Ao.actualSize
              },
              rawCareMarks: Ao.nasogastricCareMarks,
              groupedEvents: []
            };
          }), this.store.dispatch((0, R.N1)(Oi)), this.getEventsGrouped(this.tubesData, Wt);
        }
        return L.E;
      })).subscribe(ki => {
        this.hardResetForm(), this.setEvents(ki);
      }), this.dateControl.valueChanges.pipe((0, a.t)(this)).subscribe(ki => {
        this.store.dispatch((0, R.AR)({
          observationDateCard: ki
        }));
      }), this.store.select(E.Tb.selectTerminologyItem("dictionaries:babyformula", "nutrient_list")).subscribe(({
        status: ki,
        data: Ei
      }) => {
        "SUCCESS" === ki && (this.nutrient = Ei.filter(({
          age: Wt
        }) => (0, x.uB)(+this.patientInfo?.age).includes(+Wt)).map(({
          name: Wt
        }) => Wt), this.cdr.markForCheck());
      });
    }
    ngAfterViewInit() {
      this.heightBody = `calc(100% - ${this.heading.nativeElement.clientHeight}px - 72px)`;
    }
    ngOnDestroy() {
      this.resetForm$.next(), this.resetForm$.complete(), this.store.dispatch((0, R.PF)()), this.store.dispatch((0, R.N1)(null)), this.store.dispatch((0, R.lR)(""));
    }
    calcIsVisibleFinish(ki) {
      if (ki.finishDate) return d()(this.dateControl.value).isSame(ki.finishDate, "day");
      const Ei = ki.nasogastricCareMarks.find(Oi => "finishTime" in Oi);
      return Ei ? d()(this.dateControl.value).isSame(d()(Ei.observationDate), "day") : !ki.nasogastricCareMarks.some(Oi => d()(Oi.observationDate).isAfter(d()(this.dateControl.value), "day"));
    }
    getEventsGrouped(ki, Ei) {
      const Wt = ki.map(Oi => this.compositionService.getEvents(Oi.rawCareMarks, Ei));
      return (0, C.D)(Wt);
    }
    sortTubes(ki) {
      return [...ki].sort((Ei, Wt) => {
        const Oi = !!Ei.finishDate,
          Ji = !!Wt.finishDate;
        return !Oi && Ji ? -1 : Oi && !Ji ? 1 : Oi && Ji ? new Date(Wt.finishDate).getTime() - new Date(Ei.finishDate).getTime() : 0;
      });
    }
    addFormGroup() {
      this.tubeObservationForm.push(this.fb.group({
        replacement: this.fb.group({
          check: [!1],
          time: [""],
          size: [""]
        }),
        nasalTreatment: this.fb.group({
          check: [!1],
          time: [""]
        }),
        inflammation: this.fb.group({
          check: [!1],
          time: [""],
          desc: [""]
        }),
        bandage: this.fb.group({
          check: [!1],
          time: [""]
        }),
        complaint: this.fb.group({
          check: [!1],
          time: [""],
          desc: [""]
        }),
        addInfo: this.fb.group({
          check: [!1],
          time: [""],
          desc: [""]
        }),
        nutrition: this.fb.group({
          check: [!1],
          nutrientName: [""],
          nutrientType: [""],
          fractionalTime: [""],
          fractionalValue: [""],
          longStartTime: [""],
          longEndTime: [""],
          longValue: [""],
          nutrition: ["nutrient"]
        }),
        nutritionWater: this.fb.group({
          check: [!1],
          nutrientTypeWater: [""],
          fractionalTime: [""],
          fractionalValue: [""],
          longStartTime: [""],
          longEndTime: [""],
          longValue: [""],
          nutrition: ["water"]
        }),
        deleteTube: this.fb.group({
          check: [!1],
          time: [""],
          reason: [""],
          complication: [""]
        }),
        finishTube: this.fb.group({
          check: [!1],
          time: [""],
          comment: [""]
        })
      }));
    }
    isEventHint(ki, Ei) {
      if ("nutritionWater" === ki || "nutrition" === ki) {
        const Wt = this.tubesData[Ei].groupedEvents.find(({
          group: Oi
        }) => Oi === ki);
        return !!Wt?.fractional || !!Wt?.long;
      }
      return !!this.tubesData[Ei].groupedEvents.find(({
        group: Wt
      }) => Wt === ki);
    }
    getControl(ki, Ei) {
      const Wt = this.tubeObservationForm.at(ki);
      return Wt && Wt.get(Ei) || null;
    }
    get isFinishChecked() {
      return this.getControl(0, "finishTube").value.check;
    }
    allowUnSign(ki) {
      const Ei = this.tubesData[ki].groupedEvents.find(Wt => "finishTube" === Wt.group);
      return this.tubesData[ki].isSignedCard || !!Ei;
    }
    isVisibleActions(ki) {
      const Ei = this.tubesData[ki]?.rawCareMarks.find(Ji => "finishTime" in Ji),
        Wt = this.tubesData[ki].tubeInfo.finishDate,
        Oi = this.selectedPatient.nasogastric.elements.find(Ji => {
          if (!Ji.finishDate || !Ji.nasogastricCareMarks?.find(Ao => Ao.finishTime)) return Ji;
        });
      return Oi ? Oi.protocolId === this.tubesData[ki].protocolId : !Wt && !Ei || this.getLatestFinishedTube(this.selectedPatient.nasogastric.elements).protocolId === this.tubesData[ki].protocolId;
    }
    getLatestFinishedTube(ki) {
      let Ei = null,
        Wt = null;
      return ki.forEach(Oi => {
        let Ji = null;
        if (Oi.finishDate) Ji = Oi.finishDate;else {
          const Ao = Oi.nasogastricCareMarks?.find(Sr => Sr.finishTime);
          Ao && Ao.observationDate && (Ji = `${Ao.observationDate}T${Ao.finishTime}`);
        }
        if (Ji) {
          const Ao = new Date(Ji);
          (!Ei || Ao > Ei) && (Ei = Ao, Wt = Oi);
        }
      }), Wt;
    }
    isFinishedTube(ki) {
      const Ei = this.tubesData[ki].groupedEvents.find(Wt => "finishTube" === Wt.group);
      return this.tubesData[ki].isSignedCard || !!Ei;
    }
    setEvents(ki) {
      this.tubesData = this.tubesData.map((Ei, Wt) => {
        const Oi = {
          ...Ei,
          groupedEvents: ki[Wt] || []
        };
        return (Oi.groupedEvents.some(({
          group: Ao
        }) => "finishTube" === Ao) || Oi.isSignedCard) && Oi.groupedEvents.forEach(({
          group: Ao
        }) => {
          this.getControl(Wt, `${Ao}.check`).setValue(!0);
        }), Oi;
      }), this.cdr.markForCheck();
    }
    subscribeCheckControl() {
      const ki = ["replacement", "nasalTreatment", "inflammation", "bandage", "complaint", "addInfo", "deleteTube", "finishTube"];
      this.tubeObservationForm.controls.forEach((Ei, Wt) => {
        ki.forEach(Oi => {
          this.getControl(Wt, `${Oi}.check`).valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Ji => {
            if (this.getControl(Wt, Oi).patchValue({
              time: Ji ? d()().format(u.nf) : ""
            }), Ji) {
              if ("finishTube" === Oi) {
                const Ao = d()(this.tubesData[Wt].tubeInfo.installDate).startOf("day"),
                  Sr = d()(this.dateControl.value).startOf("day"),
                  us = Sr.diff(Ao, "day");
                if (this.tubesData[Wt].rawCareMarks.length != us + 1) {
                  const Ps = [];
                  let hs = Ao;
                  for (; hs.isBefore(Sr) || hs.isSame(Sr);) this.tubesData[Wt].rawCareMarks.find(yo => d()(yo.observationDate).startOf("day").isSame(d()(hs))) || Ps.push(hs.format(u.UV)), hs = hs.add(1, "day");
                  Ps.length && (this.observationWarning[Wt] = {
                    state: !0,
                    missedDays: Ps
                  });
                }
              }
            } else "replacement" === Oi && this.getControl(Wt, Oi).patchValue({
              size: ""
            }), ("inflammation" === Oi || "complaint" === Oi || "addInfo" === Oi) && this.getControl(Wt, Oi).patchValue({
              desc: ""
            }), "deleteTube" === Oi && this.getControl(Wt, Oi).patchValue({
              reason: "",
              complication: ""
            }), "finishTube" === Oi && (this.getControl(Wt, Oi).patchValue({
              comment: ""
            }), this.observationWarning[Wt] = {
              state: !1,
              missedDays: []
            });
          });
        });
      });
    }
    subscribeNutritionControl() {
      this.tubeObservationForm.controls.forEach((ki, Ei) => {
        this.getControl(Ei, "nutrition.check").valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Wt => {
          if (!Wt.check) {
            const Oi = {
              nutrientName: "",
              nutrientType: "",
              fractionalTime: "",
              fractionalValue: "",
              longStartTime: "",
              longEndTime: "",
              longValue: ""
            };
            this.getControl(Ei, "nutrition").patchValue(Oi, {
              emitEvent: !1
            });
          }
        }), this.getControl(Ei, "nutritionWater.check").valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Wt => {
          if (!Wt.check) {
            const Oi = {
              nutrientTypeWater: "",
              fractionalTime: "",
              fractionalValue: "",
              longStartTime: "",
              longEndTime: "",
              longValue: ""
            };
            this.getControl(Ei, "nutritionWater").patchValue(Oi, {
              emitEvent: !1
            });
          }
        }), this.getControl(Ei, "nutrition.nutrientType").valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Wt => {
          let Oi = {};
          "fractional" === Wt && (Oi = {
            fractionalTime: d()().format(u.nf),
            longStartTime: "",
            longEndTime: "",
            longValue: ""
          }), "long" === Wt && (Oi = {
            fractionalTime: "",
            fractionalValue: "",
            longStartTime: d()().format(u.nf),
            longEndTime: d()().add(1, "hour").format(u.nf)
          }), this.getControl(Ei, "nutrition").patchValue(Oi, {
            emitEvent: !1
          });
        }), this.getControl(Ei, "nutritionWater.nutrientTypeWater").valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Wt => {
          let Oi = {};
          "fractional" === Wt && (Oi = {
            fractionalTime: d()().format(u.nf),
            longStartTime: "",
            longEndTime: "",
            longValue: ""
          }), "long" === Wt && (Oi = {
            fractionalTime: "",
            fractionalValue: "",
            longStartTime: d()().format(u.nf),
            longEndTime: d()().add(1, "hour").format(u.nf)
          }), this.getControl(Ei, "nutritionWater").patchValue(Oi, {
            emitEvent: !1
          });
        }), ["fractionalValue", "longValue"].forEach(Wt => {
          this.getControl(Ei, `nutrition.${Wt}`).valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Oi => {
            let Ji = {};
            "fractionalValue" === Wt && +Oi > 500 && (Ji = {
              fractionalValue: "500"
            }), "longValue" === Wt && +Oi > 2e3 && (Ji = {
              longValue: "2000"
            }), this.getControl(Ei, "nutrition").patchValue(Ji, {
              emitEvent: !1
            });
          }), this.getControl(Ei, `nutritionWater.${Wt}`).valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Oi => {
            let Ji = {};
            "fractionalValue" === Wt && +Oi > 500 && (Ji = {
              fractionalValue: "500"
            }), "longValue" === Wt && +Oi > 2e3 && (Ji = {
              longValue: "2000"
            }), this.getControl(Ei, "nutritionWater").patchValue(Ji, {
              emitEvent: !1
            });
          });
        });
      });
    }
    validateFormGroups() {
      let ki = !0;
      ["replacement", "nasalTreatment", "inflammation", "bandage", "complaint", "addInfo", "deleteTube", "finishTube"].forEach(oi => {
        this.getControl(0, `${oi}.check`).value && !this.getControl(0, `${oi}.time`).value && (this.getControl(0, `${oi}.time`).setErrors({
          required: !0
        }), ki = !1), "replacement" === oi && this.getControl(0, `${oi}.check`).value && !this.getControl(0, `${oi}.size`).value && (this.getControl(0, `${oi}.size`).setErrors({
          required: !0
        }), ki = !1), ("inflammation" === oi || "complaint" === oi || "addInfo" === oi) && this.getControl(0, `${oi}.check`).value && !this.getControl(0, `${oi}.desc`).value && (this.getControl(0, `${oi}.desc`).setErrors({
          required: !0
        }), ki = !1);
      });
      const Wt = this.getControl(0, "nutrition").value,
        Oi = "fractional" === Wt.nutrientType,
        Ji = "long" === Wt.nutrientType,
        Ao = (0, x.DY)(Wt.longStartTime, Wt.longEndTime);
      Wt.check && !Wt.nutrientType && (this.getControl(0, "nutrition.nutrientType").setErrors({
        required: !0
      }), this.messageService.error("Выберите способ введения"), ki = !1), Wt.check && !Wt.nutrientName && (this.getControl(0, "nutrition.nutrientName").setErrors({
        required: !0
      }), ki = !1), Oi && !Wt.fractionalTime && (this.getControl(0, "nutrition.fractionalTime").setErrors({
        required: !0
      }), ki = !1), Oi && !Wt.fractionalValue && (this.getControl(0, "nutrition.fractionalValue").setErrors({
        required: !0
      }), ki = !1), Ji && !Wt.longStartTime && (this.getControl(0, "nutrition.longStartTime").setErrors({
        required: !0
      }), ki = !1), Ji && !Wt.longEndTime && (this.getControl(0, "nutrition.longEndTime").setErrors({
        required: !0
      }), ki = !1), Ji && !Wt.longValue && (this.getControl(0, "nutrition.longValue").setErrors({
        required: !0
      }), ki = !1), Ji && Wt.longStartTime && Wt.longEndTime && !Ao && (this.getControl(0, "nutrition.longEndTime").setErrors({
        shortPeriod: !0
      }), ki = !1);
      const Sr = this.getControl(0, "nutritionWater").value,
        us = "fractional" === Sr.nutrientTypeWater,
        Ps = "long" === Sr.nutrientTypeWater,
        hs = (0, x.DY)(Sr.longStartTime, Sr.longEndTime);
      Sr.check && !Sr.nutrientTypeWater && (this.getControl(0, "nutritionWater.nutrientTypeWater").setErrors({
        required: !0
      }), this.messageService.error("Выберите способ введения"), ki = !1), us && !Sr.fractionalTime && (this.getControl(0, "nutritionWater.fractionalTime").setErrors({
        required: !0
      }), ki = !1), us && !Sr.fractionalValue && (this.getControl(0, "nutritionWater.fractionalValue").setErrors({
        required: !0
      }), ki = !1), Ps && !Sr.longStartTime && (this.getControl(0, "nutritionWater.longStartTime").setErrors({
        required: !0
      }), ki = !1), Ps && !Sr.longEndTime && (this.getControl(0, "nutritionWater.longEndTime").setErrors({
        required: !0
      }), ki = !1), Ps && !Sr.longValue && (this.getControl(0, "nutritionWater.longValue").setErrors({
        required: !0
      }), ki = !1), Ps && Sr.longStartTime && Sr.longEndTime && !hs && (this.getControl(0, "nutritionWater.longEndTime").setErrors({
        shortPeriod: !0
      }), ki = !1);
      for (let oi of [Wt, Sr]) {
        const yo = (0, x.Bg)(oi, this.tubesData[0].rawCareMarks);
        if (yo) {
          this.messageService.warning(yo), ki = !1;
          break;
        }
      }
      return ki;
    }
    onCloseCard() {
      this.modalRef && this.modalRef.close(!1);
    }
    onDeleteTube(ki) {
      this.modalService.open(new v.X(T.z), {
        panelClass: "delete-modal",
        data: {
          title: "Удаление карты наблюдения",
          message: "Карта наблюдения будет удалена вместе с пациентом из Списка ухода. Удалить пациента из Списка ухода?"
        }
      }).beforeClose().pipe((0, b.h)(Wt => !!Wt), (0, O.w)(() => {
        this.isLoading = !0;
        const Wt = this.tubesData[ki].protocolId;
        return this.compositionService.getEhrByPatientId(this.selectedPatient.careCase.actualPatientId).pipe((0, O.w)(Oi => this.compositionService.deleteTubeDocument(Oi, Wt)));
      }), (0, A.x)(() => {
        this.isLoading = !1;
      })).subscribe({
        next: () => {
          this.messageService.success("Карта наблюдения успешно удалена"), this.onCloseCard(), setTimeout(() => {
            this.store.dispatch((0, R.Rc)(!0));
          }, 5e3);
        },
        error: Wt => {
          console.error(Wt);
        }
      });
    }
    onSave() {
      const ki = {
        ...this.tubeObservationForm.at(0).value
      };
      if (!Object.values(ki).some(({
        check: Ji
      }) => Ji)) return this.messageService.info("Данные для сохранения отсутствуют", {
        marginBottom: 44
      }), !1;
      if (!this.validateFormGroups()) return !1;
      this.isLoading = !0;
      const Wt = d()(this.dateControl.value).isSame(this.tubesData[0].tubeInfo.installDate, "day"),
        Oi = (0, y._)(this.selectedPatient.careCase.careCaseId, this.tubesData[0].protocolId, this.tubesData[0].tubeInfo.installDate, this.tubesData[0].rawCareMarks, this.tubeObservationForm.at(0).value, this.dateControl.value);
      this.compositionService.getEhrByPatientId(this.selectedPatient.careCase.actualPatientId).pipe((0, O.w)(Ji => Wt ? (console.log("updateTubeDocument", Oi), this.compositionService.updateTubeDocument({
        ehr: Ji,
        uid: Oi.protocolId,
        data: Oi
      })) : Oi.childComposition ? (console.log("updateTubeChildDocument", Oi), this.compositionService.updateTubeChildDocument(Ji, Oi)) : (console.log("createTubeChildDocument", Oi), this.compositionService.createTubeChildDocument(Ji, Oi))), (0, A.x)(() => {
        this.isLoading = !1;
      })).subscribe({
        next: () => {
          this.onCloseCard(), this.messageService.success("Данные по уходу сохранены", {
            marginBottom: 44
          }), setTimeout(() => {
            this.store.dispatch((0, R.Rc)(!0));
          }, 5e3);
        },
        error: Ji => {
          console.error(Ji);
        }
      });
    }
    onUnSign() {
      const ki = (0, y._)(this.selectedPatient.careCase.careCaseId, this.tubesData[0].protocolId, this.tubesData[0].tubeInfo.installDate, this.tubesData[0].rawCareMarks, this.tubeObservationForm.at(0).value, this.dateControl.value);
      this.isLoading = !0, this.compositionService.getEhrByPatientId(this.selectedPatient.careCase.actualPatientId).pipe((0, O.w)(Ei => this.compositionService.unSignTubeDocument(Ei, ki, ki.childComposition, ki.protocolId))).subscribe({
        next: () => {
          setTimeout(() => {
            this.messageService.success("Подпись снята"), this.hardResetForm(), this.store.dispatch((0, R.Rc)(!0)), this.isLoading = !1;
          }, 3e3);
        },
        error: Ei => {
          this.isLoading = !1, console.error(Ei);
        }
      });
    }
    hardResetForm() {
      this.resetForm$.next(), this.subscribeCheckControl(), this.subscribeNutritionControl();
      const ki = ["replacement", "nasalTreatment", "inflammation", "bandage", "complaint", "addInfo", "deleteTube", "finishTube", "nutrition", "nutritionWater"];
      this.tubeObservationForm.controls.forEach((Ei, Wt) => {
        ki.forEach(Oi => {
          this.getControl(Wt, `${Oi}.check`)?.setValue(!1);
          const Ji = this.getControl(Wt, Oi);
          Ji && (Ji.setErrors(null), Object.keys(Ji.controls).forEach(Ao => {
            Ji.get(Ao)?.setErrors(null);
          }));
        }), this.getControl(Wt, "nutrition").patchValue({
          nutrition: "nutrient"
        }, {
          emitEvent: !1
        }), this.getControl(Wt, "nutritionWater").patchValue({
          nutrition: "water"
        }, {
          emitEvent: !1
        }), this.observationWarning[Wt] = {
          state: !1,
          missedDays: []
        }, this.tubeObservationForm.at(Wt).markAsPristine(), this.tubeObservationForm.at(Wt).markAsUntouched();
      }), this.tubeObservationForm.markAsPristine(), this.tubeObservationForm.markAsUntouched();
    }
    changeLoad(ki) {
      this.isLoading = ki;
    }
  }).ɵfac = function (Ei) {
    return new (Ei || Fi)(F.Y36(Le.P), F.Y36(ke.ap), F.Y36(J.Jv), F.Y36(fe.yh), F.Y36(e.qu), F.Y36(F.sBO), F.Y36(ye.X), F.Y36(ae.Rn), F.Y36(f.UM));
  }, Fi.ɵcmp = F.Xpm({
    type: Fi,
    selectors: [["app-tube-card"]],
    viewQuery: function (Ei, Wt) {
      if (1 & Ei && F.Gf(Y, 5), 2 & Ei) {
        let Oi;
        F.iGM(Oi = F.CRH()) && (Wt.heading = Oi.first);
      }
    },
    decls: 20,
    vars: 14,
    consts: [[1, "tube-card"], [1, "tube-card__heading"], ["heading", ""], [4, "ngIf"], ["icon", "close", 3, "size", "click"], [1, "tube-card__body"], [1, "tube-card__body-container"], [1, "observation-date"], [1, "form__group-label"], ["lu-label", ""], [3, "formControl", "minDate", "maxDate"], ["type", "error", 4, "ngIf"], ["class", "observation", 3, "expanded", "formGroup", 4, "ngFor", "ngForOf"], [1, "tube-card__footer"], [1, "fio"], [1, "dot"], ["type", "error"], ["icon", "warning", 3, "size"], [1, "observation", 3, "expanded", "formGroup"], [1, "observation__heading", 3, "withArrow"], [1, "observation__heading-info"], [1, "first-row"], [1, "title"], ["class", "tube-delete", 3, "click", 4, "ngIf"], [1, "date"], [1, "observation__details"], ["class", "warning", 4, "ngIf"], ["formGroupName", "replacement", 1, "form__group"], [1, "observation__check-wrapper"], ["formControlName", "check", 3, "color"], ["class", "observation__content", 4, "ngIf"], ["formGroupName", "nasalTreatment", 1, "form__group"], ["formGroupName", "inflammation", 1, "form__group"], ["formGroupName", "bandage", 1, "form__group"], ["formGroupName", "complaint", 1, "form__group"], ["formGroupName", "addInfo", 1, "form__group"], ["formGroupName", "nutrition", 1, "form__group"], ["class", "observation__content nutrient", 4, "ngIf"], ["formGroupName", "nutritionWater", 1, "form__group"], ["formGroupName", "deleteTube", 1, "form__group"], ["class", "form__group", "formGroupName", "finishTube", 4, "ngIf"], [3, "isSign", "tubeData", "observationDate", "patientId", "changeLoad", 4, "ngIf"], [1, "tube-delete", 3, "click"], [1, "warning"], ["icon", "attention", 3, "size"], [1, "observation__content"], [1, "time"], ["luInput", "", "luInputString", "", "luMask", "HH:MM", "formControlName", "time"], [1, "size"], ["type", "autocomplete", "placeholder", "", "formControlName", "size", 3, "clearButton"], ["comboboxSize", ""], [3, "items", "itemContent", 4, "luData"], [3, "items", "itemContent"], ["tubeTemplate", ""], [3, "innerHTML"], [1, "desc"], ["luInput", "", "luInputString", "", "formControlName", "desc"], [1, "observation__content", "nutrient"], [1, "nutrient__name"], ["type", "autocomplete", "placeholder", "", "formControlName", "nutrientName", 3, "clearButton"], ["comboboxNutrientName", ""], [1, "nutrient__fractional"], [1, "radio"], ["type", "radio", "name", "nutrientType", "value", "fractional", "formControlName", "nutrientType"], ["class", "radio-content", 4, "ngIf"], [1, "nutrient__long"], ["type", "radio", "name", "nutrientType", "value", "long", "formControlName", "nutrientType"], ["nutrientTemplate", ""], [1, "radio-content"], ["luInput", "", "luInputString", "", "luMask", "HH:MM", "formControlName", "fractionalTime"], ["luInput", "", "luInputNumber", "", "formControlName", "fractionalValue", "maxlength", "3"], [1, "unit"], ["luInput", "", "luInputString", "", "luMask", "HH:MM", "formControlName", "longStartTime"], [1, "delimiter"], [1, "form__group-label", 2, "visibility", "hidden"], ["luInput", "", "luInputString", "", "luMask", "HH:MM", "formControlName", "longEndTime"], ["luInput", "", "luInputNumber", "", "formControlName", "longValue", "maxlength", "4"], ["type", "radio", "name", "nutrientTypeWater", "value", "fractional", "formControlName", "nutrientTypeWater"], ["type", "radio", "name", "nutrientTypeWater", "value", "long", "formControlName", "nutrientTypeWater"], ["lu-label", "Причина удаления"], ["luInput", "", "luInputString", "", "formControlName", "reason"], ["lu-label", "Осложнение"], ["luInput", "", "luInputString", "", "formControlName", "complication"], ["formGroupName", "finishTube", 1, "form__group"], ["lu-label", "Комментарий"], ["luInput", "", "luInputString", "", "formControlName", "comment"], [3, "isSign", "tubeData", "observationDate", "patientId", "changeLoad"], ["lu-button-raised", "", 3, "disabled", "size", "color", "click", 4, "ngIf"], ["lu-button-raised", "", 3, "size", "color", "click", 4, "ngIf"], ["lu-button-raised", "", 3, "disabled", "size", "color", "click"], ["lu-button-raised", "", 3, "size", "color", "click"]],
    template: function (Ei, Wt) {
      1 & Ei && (F.TgZ(0, "div", 0)(1, "div", 1, 2), F.YNc(3, te, 10, 6, "div", 3), F.TgZ(4, "lu-svg-icon", 4), F.NdJ("click", function () {
        return Wt.onCloseCard();
      }), F.qZA()(), F.TgZ(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "span", 8), F._uU(9, "Дата ухода "), F.TgZ(10, "span"), F._uU(11, "*"), F.qZA()(), F.TgZ(12, "label", 9), F._UZ(13, "lu-calendar-stepper", 10), F.YNc(14, pe, 3, 1, "lu-form-message", 11), F.YNc(15, be, 4, 5, "lu-form-message", 11), F.qZA()(), F.YNc(16, lo, 73, 46, "lu-expansion-panel", 12), F.qZA()(), F.TgZ(17, "div", 13), F.YNc(18, ji, 3, 2, "ng-container", 3), F.qZA()(), F.YNc(19, ti, 1, 0, "app-loader", 3)), 2 & Ei && (F.xp6(3), F.Q6J("ngIf", Wt.patientInfo), F.xp6(1), F.Q6J("size", 24), F.xp6(1), F.Udp("height", Wt.heightBody)("max-height", Wt.heightBody), F.xp6(8), F.Q6J("formControl", Wt.dateControl)("minDate", Wt.minDate)("maxDate", Wt.maxDate), F.xp6(1), F.Q6J("ngIf", Wt.dateControl.hasError("required")), F.xp6(1), F.Q6J("ngIf", Wt.dateControl.hasError("dateMax")), F.xp6(1), F.Q6J("ngForOf", Wt.tubeObservationForm.controls), F.xp6(2), F.Q6J("ngIf", Wt.isVisibleActions(0)), F.xp6(1), F.Q6J("ngIf", Wt.isLoading));
    },
    styles: ["[_nghost-%COMP%]{display:block;height:100%}[_nghost-%COMP%]     app-loader .loader-wrapper{transform:none;top:0;right:0;left:auto}@media (min-width: 992px){[_nghost-%COMP%]     app-loader .loader-wrapper{top:-48px}}.tube-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.tube-card__heading[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:12px 16px;box-shadow:0 4px 8px #00000014,0 1px 2px #00000014}@media (min-width: 992px){.tube-card__heading[_ngcontent-%COMP%]{padding:12px 24px}}.tube-card__heading[_ngcontent-%COMP%]   .fio[_ngcontent-%COMP%]{font-size:17px;font-weight:600;color:#000;line-height:24px}@media (min-width: 992px){.tube-card__heading[_ngcontent-%COMP%]   .fio[_ngcontent-%COMP%]{font-size:20px;line-height:28px}}.tube-card__heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:6px}.tube-card__heading[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc;cursor:pointer}.tube-card__heading[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}.tube-card__body[_ngcontent-%COMP%]{flex-grow:1;padding-top:16px}@media (min-width: 992px){.tube-card__body[_ngcontent-%COMP%]{padding-top:24px}}.tube-card__body-container[_ngcontent-%COMP%]{padding:0 16px;height:100%;overflow:auto}@media (min-width: 992px){.tube-card__body-container[_ngcontent-%COMP%]{padding:0 24px}}.tube-card__body[_ngcontent-%COMP%]   .observation-date[_ngcontent-%COMP%]{margin-bottom:16px}.tube-card__body[_ngcontent-%COMP%]   .observation-date[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.tube-card__body[_ngcontent-%COMP%]   .observation-date[_ngcontent-%COMP%]     lu-calendar-field-host{--lu-input-width: 220px}.tube-card__body[_ngcontent-%COMP%]   .observation[_ngcontent-%COMP%]{border-radius:4px;border:1px solid #e6e6e6;overflow:hidden;margin-bottom:8px}.tube-card__body[_ngcontent-%COMP%]   .observation__heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;padding:4.4px 15px;border-bottom:1px solid #e6e6e6;background-color:#f2f2f2}.tube-card__body[_ngcontent-%COMP%]   .observation__heading-info[_ngcontent-%COMP%]{font-size:13px;color:#757575;line-height:20px}.tube-card__body[_ngcontent-%COMP%]   .observation__heading-info[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:nowrap;margin-right:8px}.tube-card__body[_ngcontent-%COMP%]   .observation__heading-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#333;line-height:24px}.tube-card__body[_ngcontent-%COMP%]   .observation__heading-info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:4px}.tube-card__body[_ngcontent-%COMP%]   .observation__heading[_ngcontent-%COMP%]   .tube-delete[_ngcontent-%COMP%]{font-size:15px;color:#f05c46;transition:.3s ease;cursor:pointer}.tube-card__body[_ngcontent-%COMP%]   .observation__heading[_ngcontent-%COMP%]   .tube-delete[_ngcontent-%COMP%]:hover{color:#ce3c2c}.tube-card__body[_ngcontent-%COMP%]   .observation[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{display:flex;align-items:flex-start;margin-bottom:12px;padding:12px;gap:8px;font-size:13px;color:#000c;background-color:#ffefd3;border-radius:4px;line-height:1.539}@media (min-width: 992px){.tube-card__body[_ngcontent-%COMP%]   .observation[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{margin-bottom:8px}}.tube-card__body[_ngcontent-%COMP%]   .observation__details[_ngcontent-%COMP%]{padding:15px;background:#fafafa}@media (max-width: 960px){.tube-card__body[_ngcontent-%COMP%]   .observation__details[_ngcontent-%COMP%]   .form__group[_ngcontent-%COMP%]:not(:last-child){padding-bottom:15px;margin-bottom:12px;border-bottom:1px solid #d9d9d9}}.tube-card__body[_ngcontent-%COMP%]   .observation__details.signed[_ngcontent-%COMP%]   .observation__check-wrapper[_ngcontent-%COMP%]{pointer-events:none}.tube-card__body[_ngcontent-%COMP%]   .observation__details.signed[_ngcontent-%COMP%]     .lu-checkbox{opacity:.4}.tube-card__body[_ngcontent-%COMP%]   .observation__check-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:4px 8px}.tube-card__body[_ngcontent-%COMP%]   .observation__content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px 16px;margin:8px 0 0 24px}.tube-card__body[_ngcontent-%COMP%]   .observation__content[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{width:112px}.tube-card__body[_ngcontent-%COMP%]   .observation__content[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]     .lu-form-messages{width:max-content}.tube-card__body[_ngcontent-%COMP%]   .observation__content[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]{width:192px}.tube-card__body[_ngcontent-%COMP%]   .observation__content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{width:100%}.tube-card__body[_ngcontent-%COMP%]   .observation__content.nutrient[_ngcontent-%COMP%]{row-gap:12px}.tube-card__body[_ngcontent-%COMP%]   .observation__content.nutrient[_ngcontent-%COMP%]   .nutrient__name[_ngcontent-%COMP%], .tube-card__body[_ngcontent-%COMP%]   .observation__content.nutrient[_ngcontent-%COMP%]   .nutrient__fractional[_ngcontent-%COMP%], .tube-card__body[_ngcontent-%COMP%]   .observation__content.nutrient[_ngcontent-%COMP%]   .nutrient__long[_ngcontent-%COMP%]{width:100%}.tube-card__body[_ngcontent-%COMP%]   .observation__content.nutrient[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;width:-moz-fit-content;width:fit-content;cursor:pointer}.tube-card__body[_ngcontent-%COMP%]   .observation__content.nutrient[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:16px;height:16px;border:1px solid #999;border-radius:50%;cursor:pointer;appearance:none}.tube-card__body[_ngcontent-%COMP%]   .observation__content.nutrient[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked{border-color:#38a1d6;border-width:5px}.tube-card__body[_ngcontent-%COMP%]   .observation__content.nutrient[_ngcontent-%COMP%]   .radio--error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-color:#e14c39}.tube-card__body[_ngcontent-%COMP%]   .observation__content.nutrient[_ngcontent-%COMP%]   .radio-content[_ngcontent-%COMP%]{position:relative;display:flex;align-items:flex-start;gap:8px;margin-top:8px}.tube-card__body[_ngcontent-%COMP%]   .observation__content.nutrient[_ngcontent-%COMP%]   .delimiter[_ngcontent-%COMP%]{margin-top:53px;width:15px;border-bottom:1px solid #999}.tube-card__body[_ngcontent-%COMP%]   .observation__content.nutrient[_ngcontent-%COMP%]   .short-period-error[_ngcontent-%COMP%]    +.lu-form-messages{position:absolute;top:42px;right:0;margin-top:0}.tube-card__body[_ngcontent-%COMP%]   .observation__content.nutrient[_ngcontent-%COMP%]   .short-period-error[_ngcontent-%COMP%]    +.lu-form-messages lu-form-message{font-size:13px}.tube-card__body[_ngcontent-%COMP%]   .observation__content.nutrient[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{margin-top:44px;font-size:13px}.tube-card__footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:16px;padding:16px}@media (min-width: 992px){.tube-card__footer[_ngcontent-%COMP%]{padding:16px 24px}}"]
  }), Fi);
  fi = (0, t.gn)([(0, a.c)()], fi);
});
