// Extracted from main; webpack module 4267. Factory, not an ES module.
((Ae, V, i) => {
  var Dt;
  i.d(V, {
    d: () => pt
  });
  var t = i(97582),
    e = i(36895),
    a = i(9073),
    m = i(93278),
    d = i(19550),
    M = i(32643),
    b = i(92203),
    A = i(87545),
    N = i(22819),
    I = i(3977),
    O = i(50879),
    L = i(56137),
    C = i(24006),
    v = i(5264),
    f = i(39300),
    E = i(95698),
    h = i(63900),
    x = i(39646),
    u = i(54004),
    T = i(85636),
    R = i(23161),
    B = i(90127),
    y = i(94650),
    j = i(44348),
    W = i(91854),
    F = i(59298),
    Le = i(986),
    ke = i(89653),
    J = i(97215),
    fe = i(62289);
  const ye = ["complaintsTextarea"];
  function ae(Ht, Dn) {
    1 & Ht && (y.TgZ(0, "div", 8), y._UZ(1, "span", 9), y.qZA());
  }
  function Y(Ht, Dn) {
    1 & Ht && (y.ynx(0), y.TgZ(1, "div", 10), y._UZ(2, "lu-preloader"), y.qZA(), y.BQk());
  }
  function G(Ht, Dn) {
    if (1 & Ht && (y.ynx(0), y.TgZ(1, "span", 53), y._uU(2), y.ALo(3, "date"), y.qZA(), y.BQk()), 2 & Ht) {
      const vt = y.oxw(4);
      y.xp6(2), y.AsE(" Назначил ", vt.procedureDisplayInfo.doctorName, " ", y.gM2(3, 2, vt.procedureDisplayInfo.assignmentDate, "dd MMM, HH:mm", "", "ru"), " ");
    }
  }
  function te(Ht, Dn) {
    if (1 & Ht && (y.ynx(0), y._UZ(1, "span", 54), y.TgZ(2, "span", 53), y._uU(3), y.ALo(4, "date"), y.qZA(), y.BQk()), 2 & Ht) {
      const vt = y.oxw(4);
      y.xp6(3), y.hij(" Выполнено ", y.gM2(4, 1, vt.procedureDisplayInfo.completedDate, "dd MMM, HH:mm", "", "ru"), " ");
    }
  }
  function pe(Ht, Dn) {
    if (1 & Ht && (y.ynx(0), y._UZ(1, "span", 54), y.TgZ(2, "span", 53), y._uU(3), y.ALo(4, "date"), y.qZA(), y.BQk()), 2 & Ht) {
      const vt = y.oxw(4);
      y.xp6(3), y.hij(" Планово на ", y.gM2(4, 1, vt.procedureDisplayInfo.planningDate, "dd MMM, HH:mm", "", "ru"), " ");
    }
  }
  function be(Ht, Dn) {
    if (1 & Ht && (y.ynx(0), y._UZ(1, "span", 54), y.TgZ(2, "span", 53), y._uU(3), y.qZA(), y.BQk()), 2 & Ht) {
      const vt = y.oxw(4);
      y.xp6(3), y.Oqu(vt.procedureDisplayInfo.description);
    }
  }
  function le(Ht, Dn) {
    if (1 & Ht && (y.ynx(0), y._UZ(1, "span", 54), y.TgZ(2, "span", 53), y._uU(3), y.qZA(), y.BQk()), 2 & Ht) {
      const vt = y.oxw(4);
      y.xp6(3), y.hij("Кабинет ", vt.procedureDisplayInfo.room, "");
    }
  }
  function n(Ht, Dn) {
    if (1 & Ht && (y.ynx(0), y._UZ(1, "span", 54), y.TgZ(2, "span", 53), y._uU(3), y.qZA(), y.BQk()), 2 & Ht) {
      const vt = y.oxw(4);
      y.xp6(3), y.Oqu(vt.procedureDisplayInfo.executorName);
    }
  }
  function Se(Ht, Dn) {
    if (1 & Ht && (y.ynx(0), y.TgZ(1, "div", 52), y.YNc(2, G, 4, 7, "ng-container", 51), y.YNc(3, te, 5, 6, "ng-container", 51), y.YNc(4, pe, 5, 6, "ng-container", 51), y.YNc(5, be, 4, 1, "ng-container", 51), y.YNc(6, le, 4, 1, "ng-container", 51), y.YNc(7, n, 4, 1, "ng-container", 51), y.qZA(), y.BQk()), 2 & Ht) {
      const vt = y.oxw(3);
      y.xp6(2), y.Q6J("ngIf", vt.procedureDisplayInfo.assignmentDate), y.xp6(1), y.Q6J("ngIf", vt.procedureDisplayInfo.completedDate), y.xp6(1), y.Q6J("ngIf", vt.procedureDisplayInfo.planningDate), y.xp6(1), y.Q6J("ngIf", vt.procedureDisplayInfo.description), y.xp6(1), y.Q6J("ngIf", vt.procedureDisplayInfo.room), y.xp6(1), y.Q6J("ngIf", vt.procedureDisplayInfo.executorName);
    }
  }
  function qe(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "lu-expansion-panel", 47)(1, "lu-expansion-panel-header", 48)(2, "span", 49), y.NdJ("click", function (an) {
      return an.stopPropagation();
    }), y._uU(3), y.qZA(), y.TgZ(4, "span", 50), y.NdJ("click", function (an) {
      return an.stopPropagation();
    }), y.YNc(5, Se, 8, 6, "ng-container", 51), y.qZA()()()), 2 & Ht) {
      const vt = y.oxw(2);
      y.xp6(1), y.Q6J("withArrow", !0), y.xp6(2), y.hij("", vt.procedureDisplayInfo.assignmentName, " "), y.xp6(2), y.Q6J("ngIf", vt.procedureDisplayInfo);
    }
  }
  function Rt(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 55)(1, "span"), y._uU(2), y.ALo(3, "date"), y.qZA(), y._UZ(4, "span", 54), y.TgZ(5, "span"), y._uU(6), y.qZA()()), 2 & Ht) {
      const vt = y.oxw(2);
      y.xp6(2), y.Oqu(y.gM2(3, 3, vt.procedureDisplayInfo.currentDay, "dd MMM HH:mm", "", "ru")), y.xp6(4), y.AsE("", vt.procedureDisplayInfo.currentUser, " — ", vt.procedureDisplayInfo.currentUserJobTitle, "");
    }
  }
  function We(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 56)(1, "span", 57), y._uU(2), y.qZA()()), 2 & Ht) {
      const vt = y.oxw(2);
      y.xp6(2), y.hij("", vt.procedureDisplayInfo.assignmentName, " ");
    }
  }
  function Re(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 62)(1, "span"), y._uU(2, "Описание"), y.qZA(), y.TgZ(3, "p"), y._uU(4), y.qZA()()), 2 & Ht) {
      const vt = y.oxw(4);
      let an;
      y.xp6(4), y.Oqu((null == (an = vt.protocolForm.get("description")) ? null : an.value) || "");
    }
  }
  function st(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 62)(1, "span"), y._uU(2, "Заключение"), y.qZA(), y.TgZ(3, "p"), y._uU(4), y.qZA()()), 2 & Ht) {
      const vt = y.oxw(4);
      let an;
      y.xp6(4), y.Oqu((null == (an = vt.protocolForm.get("conclusion")) ? null : an.value) || "");
    }
  }
  function q(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "p"), y._uU(1), y.qZA()), 2 & Ht) {
      const vt = Dn.$implicit;
      y.xp6(1), y.hij(" ", vt, " ");
    }
  }
  function mt(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "p"), y._uU(1), y.qZA()), 2 & Ht) {
      const vt = Dn.$implicit;
      y.xp6(1), y.hij(" ", vt, " ");
    }
  }
  function ut(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 30)(1, "span", 66), y._uU(2, "Лекарства"), y.qZA(), y.YNc(3, mt, 2, 1, "p", 67), y.qZA()), 2 & Ht) {
      const vt = y.oxw(5);
      y.xp6(3), y.Q6J("ngForOf", vt.selectedMedicines);
    }
  }
  function Ct(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 65)(1, "span"), y._uU(2, "Препараты"), y.qZA(), y.TgZ(3, "div", 30)(4, "span", 66), y._uU(5, "Материалы"), y.qZA(), y.YNc(6, q, 2, 1, "p", 67), y.qZA(), y.YNc(7, ut, 4, 1, "div", 68), y.qZA()), 2 & Ht) {
      const vt = y.oxw(4);
      y.xp6(6), y.Q6J("ngForOf", vt.selectedMaterials), y.xp6(1), y.Q6J("ngIf", vt.selectedMedicines.length);
    }
  }
  function Ft(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 61)(1, "div", 62)(2, "span"), y._uU(3, "Жалобы"), y.qZA(), y.TgZ(4, "p"), y._uU(5), y.qZA()(), y.YNc(6, Re, 5, 1, "div", 63), y.YNc(7, st, 5, 1, "div", 63), y.YNc(8, Ct, 8, 2, "div", 64), y.qZA()), 2 & Ht) {
      const vt = y.oxw(3);
      let an, li, zn;
      y.xp6(5), y.Oqu((null == (an = vt.protocolForm.get("complaints")) ? null : an.value) || ""), y.xp6(1), y.Q6J("ngIf", null == (li = vt.protocolForm.get("description")) ? null : li.value), y.xp6(1), y.Q6J("ngIf", null == (zn = vt.protocolForm.get("conclusion")) ? null : zn.value), y.xp6(1), y.Q6J("ngIf", vt.selectedMaterials.length);
    }
  }
  function Et(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 61)(1, "div", 69), y._UZ(2, "div", 70), y.TgZ(3, "p", 71), y._uU(4), y.qZA()()()), 2 & Ht) {
      const vt = y.oxw(3);
      y.xp6(4), y.Oqu(vt.activeFieldLabel);
    }
  }
  function Ue(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 58)(1, "div", 56)(2, "span", 57), y._uU(3), y.qZA()(), y.YNc(4, Ft, 9, 4, "div", 59), y.YNc(5, Et, 5, 1, "ng-template", null, 60, y.W1O), y.qZA()), 2 & Ht) {
      const vt = y.MAs(6),
        an = y.oxw(2);
      let li;
      y.xp6(3), y.hij("", an.procedureDisplayInfo.assignmentName, " "), y.xp6(1), y.Q6J("ngIf", null == (li = an.protocolForm.get("complaints")) ? null : li.value)("ngIfElse", vt);
    }
  }
  function Me(Ht, Dn) {
    if (1 & Ht) {
      const vt = y.EpF();
      y.TgZ(0, "button", 77), y.NdJ("click", function () {
        y.CHM(vt);
        const li = y.oxw(3);
        return y.KtG(li.isDelete = !0);
      }), y._UZ(1, "lu-svg-icon", 78), y._uU(2, " Удалить "), y.qZA();
    }
    2 & Ht && (y.Q6J("color", "red"), y.xp6(1), y.Q6J("size", 24));
  }
  function Ke(Ht, Dn) {
    if (1 & Ht) {
      const vt = y.EpF();
      y.TgZ(0, "div", 72), y.YNc(1, Me, 3, 2, "button", 73), y.TgZ(2, "button", 74), y.NdJ("click", function () {
        y.CHM(vt);
        const li = y.oxw(2);
        return y.KtG(li.onSubmit(!1));
      }), y._uU(3, "Сохранить"), y.qZA(), y.TgZ(4, "button", 75), y.NdJ("click", function () {
        y.CHM(vt);
        const li = y.oxw(2);
        return y.KtG(li.onSubmit(!0));
      }), y._UZ(5, "lu-svg-icon", 76), y._uU(6, " Сохранить и подписать "), y.qZA()();
    }
    if (2 & Ht) {
      const vt = y.oxw(2);
      y.xp6(1), y.Q6J("ngIf", vt.isDeleteBtn), y.xp6(4), y.Q6J("size", 24);
    }
  }
  function Ze(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 62)(1, "span"), y._uU(2, "Описание"), y.qZA(), y.TgZ(3, "p"), y._uU(4), y.qZA()()), 2 & Ht) {
      const vt = y.oxw(4);
      let an;
      y.xp6(4), y.Oqu((null == (an = vt.protocolForm.get("description")) ? null : an.value) || "");
    }
  }
  function Ee(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 62)(1, "span"), y._uU(2, "Заключение"), y.qZA(), y.TgZ(3, "p"), y._uU(4), y.qZA()()), 2 & Ht) {
      const vt = y.oxw(4);
      let an;
      y.xp6(4), y.Oqu((null == (an = vt.protocolForm.get("conclusion")) ? null : an.value) || "");
    }
  }
  function je(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "p"), y._uU(1), y.qZA()), 2 & Ht) {
      const vt = Dn.$implicit;
      y.xp6(1), y.hij(" ", vt, " ");
    }
  }
  function Mt(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "p"), y._uU(1), y.qZA()), 2 & Ht) {
      const vt = Dn.$implicit;
      y.xp6(1), y.hij(" ", vt, " ");
    }
  }
  function Je(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 30)(1, "span", 66), y._uU(2, "Лекарства"), y.qZA(), y.YNc(3, Mt, 2, 1, "p", 67), y.qZA()), 2 & Ht) {
      const vt = y.oxw(5);
      y.xp6(3), y.Q6J("ngForOf", vt.selectedMedicines);
    }
  }
  function Xt(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 65)(1, "span"), y._uU(2, "Препараты"), y.qZA(), y.TgZ(3, "div", 30)(4, "span", 66), y._uU(5, "Материалы"), y.qZA(), y.YNc(6, je, 2, 1, "p", 67), y.qZA(), y.YNc(7, Je, 4, 1, "div", 68), y.qZA()), 2 & Ht) {
      const vt = y.oxw(4);
      y.xp6(6), y.Q6J("ngForOf", vt.selectedMaterials), y.xp6(1), y.Q6J("ngIf", vt.selectedMedicines.length);
    }
  }
  function Nn(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 61)(1, "div", 62)(2, "span"), y._uU(3, "Жалобы"), y.qZA(), y.TgZ(4, "p"), y._uU(5), y.qZA()(), y.YNc(6, Ze, 5, 1, "div", 63), y.YNc(7, Ee, 5, 1, "div", 63), y.YNc(8, Xt, 8, 2, "div", 64), y.qZA()), 2 & Ht) {
      const vt = y.oxw(3);
      let an, li, zn;
      y.xp6(5), y.Oqu((null == (an = vt.protocolForm.get("complaints")) ? null : an.value) || ""), y.xp6(1), y.Q6J("ngIf", null == (li = vt.protocolForm.get("description")) ? null : li.value), y.xp6(1), y.Q6J("ngIf", null == (zn = vt.protocolForm.get("conclusion")) ? null : zn.value), y.xp6(1), y.Q6J("ngIf", vt.selectedMaterials.length);
    }
  }
  function Pi(Ht, Dn) {
    1 & Ht && (y.TgZ(0, "div", 61)(1, "div", 69), y._UZ(2, "div", 70), y.TgZ(3, "p", 71), y._uU(4, "Описание"), y.qZA()()());
  }
  function Ii(Ht, Dn) {
    if (1 & Ht && (y.TgZ(0, "div", 79), y.YNc(1, Nn, 9, 4, "div", 59), y.YNc(2, Pi, 5, 0, "ng-template", null, 60, y.W1O), y.qZA()), 2 & Ht) {
      const vt = y.MAs(3),
        an = y.oxw(2);
      let li;
      y.xp6(1), y.Q6J("ngIf", null == (li = an.protocolForm.get("complaints")) ? null : li.value)("ngIfElse", vt);
    }
  }
  function yi(Ht, Dn) {
    if (1 & Ht) {
      const vt = y.EpF();
      y.TgZ(0, "button", 77), y.NdJ("click", function () {
        y.CHM(vt);
        const li = y.oxw(3);
        return y.KtG(li.isDelete = !0);
      }), y._UZ(1, "lu-svg-icon", 78), y._uU(2, " Удалить "), y.qZA();
    }
    2 & Ht && (y.Q6J("color", "red"), y.xp6(1), y.Q6J("size", 24));
  }
  function co(Ht, Dn) {
    if (1 & Ht) {
      const vt = y.EpF();
      y.TgZ(0, "div", 80), y.YNc(1, yi, 3, 2, "button", 73), y.TgZ(2, "button", 74), y.NdJ("click", function () {
        y.CHM(vt);
        const li = y.oxw(2);
        return y.KtG(li.onSubmit(!1));
      }), y._uU(3, "Сохранить"), y.qZA(), y.TgZ(4, "button", 75), y.NdJ("click", function () {
        y.CHM(vt);
        const li = y.oxw(2);
        return y.KtG(li.onSubmit(!0));
      }), y._UZ(5, "lu-svg-icon", 76), y._uU(6, " Сохранить и подписать "), y.qZA()();
    }
    if (2 & Ht) {
      const vt = y.oxw(2);
      y.xp6(1), y.Q6J("ngIf", vt.isDeleteBtn), y.xp6(4), y.Q6J("size", 24);
    }
  }
  function Jo(Ht, Dn) {
    if (1 & Ht) {
      const vt = y.EpF();
      y.TgZ(0, "div", 11)(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "span"), y._uU(5), y.qZA(), y.TgZ(6, "button", 14), y._UZ(7, "lu-svg-icon", 15), y.qZA()(), y.TgZ(8, "div", 16)(9, "div", 17)(10, "label", 18)(11, "lu-textarea", 19, 20), y.NdJ("focusin", function () {
        y.CHM(vt);
        const li = y.oxw();
        return y.KtG(li.onFieldFocus("complaints"));
      }), y.qZA()()(), y.TgZ(13, "div", 17)(14, "label", 21)(15, "lu-textarea", 22), y.NdJ("focusin", function () {
        y.CHM(vt);
        const li = y.oxw();
        return y.KtG(li.onFieldFocus("description"));
      }), y.qZA()()(), y.TgZ(16, "div", 17)(17, "label", 23)(18, "lu-textarea", 24), y.NdJ("focusin", function () {
        y.CHM(vt);
        const li = y.oxw();
        return y.KtG(li.onFieldFocus("conclusion"));
      }), y.qZA()()()(), y.TgZ(19, "div", 25)(20, "div", 26)(21, "span"), y._uU(22, "Препараты"), y.qZA()(), y.TgZ(23, "div", 27)(24, "div", 28)(25, "span", 29), y._uU(26, "Материалы"), y.qZA(), y.TgZ(27, "div", 30)(28, "lu-checkbox", 31), y._uU(29, "Лейкопластырь гипоаллергенный на нетканной основе"), y.qZA(), y.TgZ(30, "lu-checkbox", 32), y._uU(31, "Бинт марлевый медицинский стерильный 5м х 10см №1х1"), y.qZA(), y.TgZ(32, "lu-checkbox", 33), y._uU(33, "Шприц для гепарина Heparin-Syringe, 30 ml with Luer-Lock"), y.qZA()()(), y.TgZ(34, "div", 34)(35, "span", 29), y._uU(36, "Лекарства"), y.qZA(), y.TgZ(37, "div", 30)(38, "lu-checkbox", 35), y._uU(39, "Бетадин р-р д/наруж 10% фл пласт 120мл №1"), y.qZA(), y.TgZ(40, "lu-checkbox", 36), y._uU(41, "Йод р-р д/наруж. прим. спирт. 5 % 10 мл фл оран стек N 1x1"), y.qZA(), y.TgZ(42, "lu-checkbox", 37), y._uU(43, "Бриллиантовый зеленый р-р д/наруж. прим. спирт. 1 % 25 мл фл N 1x1"), y.qZA()()()()()(), y.TgZ(44, "div", 38)(45, "div", 39), y.YNc(46, qe, 6, 3, "lu-expansion-panel", 40), y.YNc(47, Rt, 7, 8, "div", 41), y.YNc(48, We, 3, 1, "div", 42), y.YNc(49, Ue, 7, 3, "div", 43), y.qZA(), y.YNc(50, Ke, 7, 2, "div", 44), y.qZA(), y.YNc(51, Ii, 4, 2, "div", 45), y.qZA(), y.YNc(52, co, 7, 2, "div", 46), y.qZA();
    }
    if (2 & Ht) {
      const vt = y.oxw();
      y.xp6(2), y.Q6J("formGroup", vt.protocolForm), y.xp6(3), y.Oqu(vt.isTablet ? "Протокол назначения " : "Протокол процедуры или манипуляции"), y.xp6(2), y.Q6J("size", 24), y.xp6(39), y.Q6J("ngIf", vt.procedureDisplayInfo), y.xp6(1), y.Q6J("ngIf", vt.procedureDisplayInfo), y.xp6(1), y.Q6J("ngIf", vt.isTablet && vt.procedureDisplayInfo), y.xp6(1), y.Q6J("ngIf", !vt.isTablet), y.xp6(1), y.Q6J("ngIf", !vt.isTablet), y.xp6(1), y.Q6J("ngIf", vt.isTablet), y.xp6(1), y.Q6J("ngIf", vt.isTablet);
    }
  }
  function fr(Ht, Dn) {
    if (1 & Ht) {
      const vt = y.EpF();
      y.TgZ(0, "div", 81)(1, "div", 82)(2, "div", 83)(3, "p"), y._uU(4, "Удаление протокола"), y.qZA(), y.TgZ(5, "button", 3), y.NdJ("click", function () {
        y.CHM(vt);
        const li = y.oxw();
        return y.KtG(li.isDelete = !1);
      }), y._UZ(6, "lu-svg-icon", 4), y.qZA()(), y.TgZ(7, "div", 84)(8, "p"), y._uU(9, "Вы уверены, что хотите удалить протокол?"), y.qZA()(), y.TgZ(10, "div", 85)(11, "button", 86), y.NdJ("click", function () {
        y.CHM(vt);
        const li = y.oxw();
        return y.KtG(li.isDelete = !1);
      }), y._uU(12, " Отменить "), y.qZA(), y.TgZ(13, "button", 87), y.NdJ("click", function () {
        y.CHM(vt);
        const li = y.oxw();
        return y.KtG(li.onDeleteProtocol());
      }), y._uU(14, " Удалить "), y.qZA()()()();
    }
    2 & Ht && (y.xp6(6), y.Q6J("size", 24), y.xp6(7), y.Q6J("color", "red"));
  }
  let pt = ((Dt = class {
    constructor(Dn, vt, an, li, zn, $t, Mn, Qn, In, ui) {
      this.modalRef = Dn, this.modalData = vt, this.messageService = an, this.fb = li, this.cdr = zn, this.proceduresService = $t, this.pimCompositionService = Mn, this.store = Qn, this.userContextService = In, this.breakpointObserver = ui, this.patientFio = "", this.procedure = "", this.procedureDisplayInfo = null, this.materialsMap = {
        patch: "Лейкопластырь гипоаллергенный на нетканной основе",
        bandage: "Бинт марлевый медицинский стерильный 5м х 10см №1х1",
        syringe: "Шприц для гепарина Heparin-Syringe, 30 ml with Luer-Lock"
      }, this.medicinesMap = {
        betadine: "Бетадин р-р д/наруж 10% фл пласт 120мл №1",
        iodine: "Йод р-р д/наруж. прим. спирт. 5 % 10 мл фл оран стек N 1x1",
        brilliantGreen: "Бриллиантовый зеленый р-р д/наруж. прим. спирт. 1 % 25 мл фл N 1x1"
      }, this.fieldLabelsMap = {
        complaints: "Жалобы",
        description: "Описание",
        conclusion: "Заключение"
      }, this.activeField = "complaints", this.isLoading = !1, this.isLoad = !1, this.isDeleteBtn = !1, this.isDelete = !1, this.isTablet = !1, this.userData = null;
      const To = vt?.data;
      To && (this.patientFio = [To?.careCase?.lastName, To?.careCase?.firstName, To?.careCase?.secondName].filter(Boolean).join(" "), this.procedure = [To?.procedureAssignment?.assignmentCode, To?.procedureAssignment?.assignmentName].filter(Boolean).join(" - ")), this.protocolForm = this.fb.group({
        complaints: [""],
        description: [""],
        conclusion: [""],
        materials: this.fb.group({
          patch: [!1],
          bandage: [!1],
          syringe: [!1]
        }),
        medicines: this.fb.group({
          betadine: [!1],
          iodine: [!1],
          brilliantGreen: [!1]
        })
      });
    }
    ngOnInit() {
      this.breakpointObserver.observe(B.o).subscribe(Dn => this.isTablet = Dn.matches), this.userContextService.getUserContext().pipe((0, f.h)(Dn => !!Dn), (0, v.t)(this)).subscribe(Dn => {
        this.userData = Dn;
      }), this.activateProcedure(), this.restoreDraft();
    }
    get selectedMaterials() {
      const Dn = this.protocolForm.get("materials")?.value ?? {};
      return Object.entries(Dn).filter(([vt, an]) => an).map(([vt]) => this.materialsMap[vt]);
    }
    get selectedMedicines() {
      const Dn = this.protocolForm.get("medicines")?.value ?? {};
      return Object.entries(Dn).filter(([vt, an]) => an).map(([vt]) => this.medicinesMap[vt]);
    }
    get activeFieldLabel() {
      return this.fieldLabelsMap[this.activeField];
    }
    onFieldFocus(Dn) {
      this.activeField !== Dn && (this.activeField = Dn, this.cdr.detectChanges());
    }
    focusComplaintsTextarea() {
      setTimeout(() => {
        this.complaintsTextarea?.contentEditable?.nativeElement?.focus();
      });
    }
    buildProtocolString() {
      const Dn = this.protocolForm.value,
        vt = [];
      Dn.complaints && vt.push(`\u0416\u0430\u043b\u043e\u0431\u044b: ${Dn.complaints}`), Dn.description && vt.push(`\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ${Dn.description}`), Dn.conclusion && vt.push(`\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435: ${Dn.conclusion}`);
      const an = this.selectedMaterials;
      an.length && vt.push(`\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b: ${an.join(", ")}`);
      const li = this.selectedMedicines;
      return li.length && vt.push(`\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430: ${li.join(", ")}`), vt.join(" ");
    }
    get procedureUid() {
      return this.modalData.data.procedureAssignment.assignmentCompositionUid;
    }
    restoreDraft() {
      this.restoreFromFormData() ? this.isDeleteBtn = !0 : this.store.select((0, T.AO)(this.procedureUid)).pipe((0, E.q)(1)).subscribe(Dn => {
        Dn && this.protocolForm.patchValue(Dn);
      });
    }
    normalize(Dn) {
      return Dn.trim().toLowerCase().replace(/\s+/g, " ");
    }
    mapLabelsToKeys(Dn, vt) {
      const an = this.normalize(Dn.join(", ")),
        li = {};
      return Object.keys(vt).forEach(zn => {
        li[zn] = an.includes(this.normalize(vt[zn]));
      }), li;
    }
    restoreFromFormData() {
      const Dn = this.modalData?.formData;
      if (!Dn) return !1;
      const vt = {
        complaints: Dn.complaints ?? "",
        description: Dn.description ?? "",
        conclusion: Dn.conclusion ?? ""
      };
      return Dn.materials && (vt.materials = this.mapLabelsToKeys(Dn.materials, this.materialsMap)), Dn.medicines && (vt.medicines = this.mapLabelsToKeys(Dn.medicines, this.medicinesMap)), this.protocolForm.patchValue(vt), !0;
    }
    onSubmit(Dn) {
      if (!Dn) return this.store.dispatch((0, R.Ng)({
        uid: this.procedureUid,
        draft: this.protocolForm.value
      })), void this.onClose(!0);
      if (this.isLoad) return;
      this.isLoad = !0;
      const vt = this.buildProtocolString(),
        an = this.modalData.data,
        li = {
          time: new Date().toISOString(),
          currentStateValue: "completed",
          currentStateCode: "532",
          careflowStepValue: "Текущая процедура завершена",
          careflowStepCode: "at8888",
          comment: vt
        };
      this.pimCompositionService.getCompositionForCompleteWithProtocol(an, vt, Dn).pipe((0, h.w)(() => this.pimCompositionService.createProcedureDocument(an, li)), (0, h.w)(zn => (this.userData?.employee?.workplace?.id.toString(), zn?.getUid(), new Date().toISOString(), (0, x.of)(!0))), (0, v.t)(this)).subscribe({
        next: () => {
          this.isLoad = !1, this.store.dispatch((0, R.Zg)({
            uid: this.procedureUid
          })), this.messageService.success(`\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0443 \xab${this.procedure}\xbb \u0443 ${this.toShortFio(an?.careCase)} \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0441 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u043c`, {
            marginBottom: 44
          }), this.cdr.detectChanges(), this.modalRef.close(!0);
        },
        error: zn => {
          this.isLoad = !1, this.cdr.detectChanges(), console.error("Ошибка:", zn), this.modalRef.close(!0), this.messageService.error("Не удалось выполнить процедуру");
        }
      });
    }
    activateProcedure() {
      const Dn = {
        assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
        code: this.modalData.data.procedureAssignment?.procedureCode,
        workplaceId: this.userData?.employee?.workplace?.id.toString(),
        doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
        doctorJob: this.userData?.jobTitle?.name,
        updated: new Date().toISOString()
      };
      this.isLoading = !0, this.proceduresService.activateProcedureWithProtocol(Dn).pipe((0, h.w)(() => this.proceduresService.getStatusAssignment(this.modalData.data.procedureAssignment.assignmentCompositionUid)), (0, u.U)(vt => ({
        ...vt,
        procedures: vt.procedures?.filter(an => an.code === Dn.code) ?? []
      })), (0, v.t)(this)).subscribe({
        next: vt => {
          const an = vt.procedures?.[0] ?? null;
          this.procedureDisplayInfo = {
            assignmentName: vt.assignmentName,
            completedDate: an?.completedDate ?? null,
            planningDate: an?.planningDate ?? null,
            description: an?.description ?? null,
            room: an?.room ?? null,
            executorName: an?.executorName ?? null,
            doctorName: vt.doctorName ?? null,
            assignmentDate: vt.assignmentDate ?? null,
            currentDay: new Date().toISOString(),
            currentUser: this.toShortFio(this.userData),
            currentUserJobTitle: this.userData.jobTitle.name
          }, this.isLoading = !1, this.cdr.detectChanges(), this.focusComplaintsTextarea();
        },
        error: () => {
          this.isLoading = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось активировать процедуру"), this.modalRef.close(!1);
        }
      });
    }
    toShortFio(Dn) {
      const {
        lastName: vt,
        firstName: an,
        secondName: li
      } = Dn ?? {};
      return [vt, an ? `${an[0]}.` : "", li ? `${li[0]}.` : ""].filter(Boolean).join(" ");
    }
    onClose(Dn) {
      if (this.isLoading) return;
      const vt = {
        assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
        code: this.modalData.data.procedureAssignment?.procedureCode,
        workplaceId: this.userData?.employee?.workplace?.id.toString(),
        doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
        doctorJob: this.userData?.jobTitle?.name,
        updated: new Date().toISOString()
      };
      this.isLoad = !0, this.proceduresService.deactivateProcedure(vt).pipe((0, v.t)(this)).subscribe({
        next: () => {
          this.isLoad = !1, Dn ? (this.modalRef.close(!0), this.messageService.success("Черновик сохранён")) : (this.modalRef.close(!1), this.cdr.detectChanges());
        },
        error: () => {
          this.isLoad = !1, this.cdr.detectChanges(), this.messageService.error("Не удалось отменить взятие в работу"), this.modalRef.close(!1);
        }
      });
    }
    onDeleteProtocol() {
      if (this.isLoad) return;
      this.isLoad = !0;
      const Dn = {
        assignmentCompositionUid: this.modalData.data.procedureAssignment.assignmentCompositionUid,
        code: this.modalData.data.procedureAssignment?.procedureCode,
        workplaceId: this.userData?.employee?.workplace?.id.toString(),
        doctorName: `${this.userData.lastName} ${this.userData.firstName[0]}.${this.userData.secondName[0]}.`,
        doctorJob: this.userData?.jobTitle?.name,
        updated: new Date().toISOString()
      };
      this.pimCompositionService.getCompositionForCancel(this.modalData.data, null).pipe((0, h.w)(() => this.proceduresService.cancelProcedure(Dn)), (0, v.t)(this)).subscribe({
        next: () => {
          this.isLoad = !1, this.messageService.info(`\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0443 \xab${this.procedure}\xbb \u0443 ${this.toShortFio(this.modalData?.data?.careCase)} \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u043e \u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u043e \u0432 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0435`, {
            marginBottom: 44
          }), this.cdr.detectChanges(), this.modalRef.close(!0);
        },
        error: vt => {
          this.isLoad = !1, this.cdr.detectChanges(), console.error("Ошибка:", vt), this.messageService.error("Не удалось отменить процедуру");
        }
      });
    }
  }).ɵfac = function (vt) {
    return new (vt || Dt)(y.Y36(j.Rn), y.Y36(I.UM), y.Y36(W.Jv), y.Y36(C.qu), y.Y36(y.sBO), y.Y36(F.O), y.Y36(Le.b), y.Y36(ke.yh), y.Y36(J.oL), y.Y36(fe.Yg));
  }, Dt.ɵcmp = y.Xpm({
    type: Dt,
    selectors: [["app-complete-form-with-doc"]],
    viewQuery: function (vt, an) {
      if (1 & vt && y.Gf(ye, 5), 2 & vt) {
        let li;
        y.iGM(li = y.CRH()) && (an.complaintsTextarea = li.first);
      }
    },
    standalone: !0,
    features: [y.jDz],
    decls: 11,
    vars: 6,
    consts: [["class", "loader-wrapper", 4, "ngIf"], [1, "complete-with-doc"], [1, "complete-with-doc__header"], ["lu-button-icon", "", 3, "click"], ["icon", "close", 1, "icon-close", 3, "size"], [4, "ngIf", "ngIfElse"], ["content", ""], ["class", "delete-wrapper", 4, "ngIf"], [1, "loader-wrapper"], [1, "loader"], [1, "complete-form__loader"], [1, "complete-with-doc__body__container"], [1, "complete-with-doc__body__container__left", 3, "formGroup"], [1, "complete-with-doc__body__container__left__title"], ["lu-button-icon-bg", ""], ["icon", "ic_template", 3, "size"], [1, "complete-with-doc__body__container__left__container"], [1, "element"], ["lu-label", "Жалобы"], ["formControlName", "complaints", 3, "focusin"], ["complaintsTextarea", ""], ["lu-label", "Описание"], ["formControlName", "description", 3, "focusin"], ["lu-label", "Заключение"], ["formControlName", "conclusion", 3, "focusin"], [1, "complete-with-doc__body__container__left__footer"], [1, "title"], [1, "container"], ["formGroupName", "materials", 1, "left"], [1, "name"], [1, "item"], ["formControlName", "patch"], ["formControlName", "bandage"], ["formControlName", "syringe"], ["formGroupName", "medicines", 1, "right"], ["formControlName", "betadine"], ["formControlName", "iodine"], ["formControlName", "brilliantGreen"], [1, "complete-with-doc__body__container__right"], [1, "complete-with-doc__body__container__right__content"], ["class", "panel", 4, "ngIf"], ["class", "current-info", 4, "ngIf"], ["class", "procedure-name", 4, "ngIf"], ["class", "panel__body", 4, "ngIf"], ["class", "complete-with-doc__body__container__right__footer", 4, "ngIf"], ["class", "complete-with-doc__body__panel__body", 4, "ngIf"], ["class", "complete-with-doc__body__container__footer", 4, "ngIf"], [1, "panel"], ["color", "transparent", 1, "panel__header", 3, "withArrow"], [1, "bold_span", "title_text", "cursor-def", 3, "click"], [1, "panel__header__content", "cursor-def", 3, "click"], [4, "ngIf"], [1, "procedure-info"], [1, "procedure-info__value"], [1, "procedure-info__dot"], [1, "current-info"], [1, "procedure-name"], [1, "bold_span"], [1, "panel__body"], ["class", "wrapper", 4, "ngIf", "ngIfElse"], ["emptyComplaints", ""], [1, "wrapper"], [1, "wrapper__item"], ["class", "wrapper__item", 4, "ngIf"], ["class", "wrapper__item-with-content", 4, "ngIf"], [1, "wrapper__item-with-content"], ["lu-text", "", "color", "muted"], [4, "ngFor", "ngForOf"], ["class", "item", 4, "ngIf"], [1, "empty"], [1, "empty__border"], [1, "empty__description"], [1, "complete-with-doc__body__container__right__footer"], ["lu-button-outer", "", "class", "", 3, "color", "click", 4, "ngIf"], ["lu-button-outer", "", 1, "", 3, "click"], ["lu-button-raised", "", 1, "", 3, "click"], ["icon", "check-mse", 3, "size"], ["lu-button-outer", "", 1, "", 3, "color", "click"], ["icon", "delete", 3, "size"], [1, "complete-with-doc__body__panel__body"], [1, "complete-with-doc__body__container__footer"], [1, "delete-wrapper"], [1, "delete-wrapper__form"], [1, "delete-wrapper__form__header"], [1, "delete-wrapper__form__body"], [1, "delete-wrapper__form__actions"], ["lu-button-outer", "", 1, "delete-wrapper__form__actionss__button", 3, "click"], ["lu-button-raised", "", 1, "delete-wrapper__form__actions__button", 3, "color", "click"]],
    template: function (vt, an) {
      if (1 & vt && (y.YNc(0, ae, 2, 0, "div", 0), y.TgZ(1, "div", 1)(2, "div", 2)(3, "span"), y._uU(4), y.qZA(), y.TgZ(5, "button", 3), y.NdJ("click", function () {
        return an.onClose();
      }), y._UZ(6, "lu-svg-icon", 4), y.qZA()(), y.YNc(7, Y, 3, 0, "ng-container", 5), y.YNc(8, Jo, 53, 10, "ng-template", null, 6, y.W1O), y.qZA(), y.YNc(10, fr, 15, 2, "div", 7)), 2 & vt) {
        const li = y.MAs(9);
        y.Q6J("ngIf", an.isLoad), y.xp6(4), y.Oqu(an.patientFio), y.xp6(2), y.Q6J("size", 24), y.xp6(1), y.Q6J("ngIf", an.isLoading)("ngIfElse", li), y.xp6(3), y.Q6J("ngIf", an.isDelete);
      }
    },
    dependencies: [e.ez, e.sg, e.O5, e.uU, a.W1, a.mc, m.h, m.q, d.o, d.k, M.aI, M.NZ, O.t, O.y, b.Y, b.z, A.Nu, A.$m, L.e_, L.BN, L.JM, C.UX, C.JJ, C.JL, C.sg, C.u, C.x0, N.c, N.d],
    styles: [".openCompleteWithDoc{margin:8px!important}.complete-with-doc[_ngcontent-%COMP%]{position:relative}.complete-with-doc__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:16px 24px;height:64px;--lu-svg-icon-color: #67bde3;box-shadow:0 1px 2px #00000014,0 4px 8px #00000014}.complete-with-doc__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:20px;line-height:28px}  .complete-with-doc__header .lu-button-icon{--lu-button-hover-text: #CCCCCC !important;--lu-svg-icon-color: #CCCCCC !important}  .complete-with-doc__header .lu-button-icon:hover{--lu-svg-icon-color: #999999 !important;cursor:pointer}.complete-with-doc__body__container[_ngcontent-%COMP%]{display:flex;height:calc(100vh - 72px)}.complete-with-doc__body__container__left[_ngcontent-%COMP%]{flex:0 0 62%;width:62%;padding:24px;line-height:28px;border-right:1px solid rgba(0,0,0,.15)}.complete-with-doc__body__container__left__title[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px}.complete-with-doc__body__container__left__title[_ngcontent-%COMP%]     .lu-button-wrapper{height:32px!important;width:32px!important}.complete-with-doc__body__container__left__title[_ngcontent-%COMP%]     .lu-button-wrapper:hover{border-radius:3px}.complete-with-doc__body__container__left__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:20px;line-height:28px}.complete-with-doc__body__container__left__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;margin-top:24px}.complete-with-doc__body__container__left__container[_ngcontent-%COMP%]     .element lu-floated-border:after, .complete-with-doc__body__container__left__container[_ngcontent-%COMP%]     .element .lu-input-container:after{border-radius:0!important}.complete-with-doc__body__container__left__container[_ngcontent-%COMP%]     .element lu-textarea lu-input-wrapper{min-height:88px!important}.complete-with-doc__body__container__left__container[_ngcontent-%COMP%]     .element lu-textarea lu-input-wrapper .lu-input-container{min-height:88px!important}.complete-with-doc__body__container__left__footer[_ngcontent-%COMP%]{margin-top:24px;padding:16px;display:flex;flex-direction:column;gap:16px;border:1px dashed rgb(204,204,204);border-radius:4px;background:#fafafa}.complete-with-doc__body__container__left__footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{line-height:24px}.complete-with-doc__body__container__left__footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:17px;line-height:24px}.complete-with-doc__body__container__left__footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:16px}.complete-with-doc__body__container__left__footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .complete-with-doc__body__container__left__footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.complete-with-doc__body__container__left__footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:block;height:24px;line-height:24px}.complete-with-doc__body__container__left__footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   lu-checkbox[_ngcontent-%COMP%]:not(:last-child){margin-bottom:8px}.complete-with-doc__body__container__right[_ngcontent-%COMP%]{flex:0 0 38%;width:38%;display:flex;flex-direction:column;justify-content:space-between}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]{padding:24px;flex:1}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   lu-expansion-panel-header[_ngcontent-%COMP%]{background:rgb(242,242,242);padding:0!important;border-radius:4px}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   lu-expansion-panel-header[_ngcontent-%COMP%]     .lu-text{padding:6px 12px!important;min-width:0}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   lu-expansion-panel-header[_ngcontent-%COMP%]     .lu-text-left{display:flex;align-items:start;align-self:stretch;min-width:32px;padding-top:6px;cursor:pointer;--lu-svg-icon-color: rgba(103, 189, 227, 1) !important}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   lu-expansion-panel-header[_ngcontent-%COMP%]     .lu-text-left lu-svg-icon[data-lu-expanded=false][icon=chevron-right]{transform:rotate(270deg)}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   lu-expansion-panel-header[_ngcontent-%COMP%]     .lu-text-left:hover{background:rgba(56,161,214,.1)}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   lu-expansion-panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:20px;margin-bottom:0}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   lu-expansion-panel-header[_ngcontent-%COMP%]   .title_text[_ngcontent-%COMP%]{font-size:13px;font-weight:600;line-height:20px;display:block;cursor:default}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   lu-expansion-panel-header[data-lu-expanded=false][_ngcontent-%COMP%]     .lu-text-left lu-svg-icon{transform:rotate(270deg)}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   lu-expansion-panel-header[data-lu-expanded=false][_ngcontent-%COMP%]     .procedure-info{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   lu-expansion-panel-header[data-lu-expanded=false][_ngcontent-%COMP%]     .procedure-info__value{display:inline}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   lu-expansion-panel-header[data-lu-expanded=false][_ngcontent-%COMP%]     .procedure-info__dot{display:inline-block;vertical-align:middle}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]     lu-expansion-panel-header div{flex-direction:row-reverse;width:100%;--lu-svg-icon-color: #000000}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]     lu-expansion-panel-header div .lu-text{margin-left:0}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .current-info[_ngcontent-%COMP%]{margin-top:16px;display:flex;flex-direction:row;flex-wrap:wrap;line-height:24px;align-items:center}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .current-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#757575;font-weight:400}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .procedure-name[_ngcontent-%COMP%]{margin-top:8px}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .procedure-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:17px;line-height:24px}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{margin-top:24px;display:flex;flex-direction:column;gap:16px}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .wrapper__item[_ngcontent-%COMP%]{line-height:24px}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .wrapper__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:15px;line-height:24px}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .wrapper__item-with-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;line-height:24px}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .wrapper__item-with-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .wrapper__item-with-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{display:flex;flex-direction:row;position:relative;right:8px}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .empty__border[_ngcontent-%COMP%]{width:3px;height:24px;background-color:#fc0;border-radius:4px;margin-right:8px}.complete-with-doc__body__container__right__content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .empty__description[_ngcontent-%COMP%]{display:block;line-height:24px;font-weight:600;font-size:15px;color:#333}.complete-with-doc__body__container__right__footer[_ngcontent-%COMP%]{padding:16px;margin-top:auto;display:flex;flex-direction:row;justify-content:flex-end;gap:16px}.complete-with-doc__body__container__right__footer[_ngcontent-%COMP%]     button[lu-button-outer], .complete-with-doc__body__container__right__footer[_ngcontent-%COMP%]     button[lu-button-raised]{height:40px}.complete-with-doc__body__container__right__footer[_ngcontent-%COMP%]     button[lu-button-outer] .lu-button-wrapper, .complete-with-doc__body__container__right__footer[_ngcontent-%COMP%]     button[lu-button-raised] .lu-button-wrapper{height:40px!important;padding:8px 16px!important;line-height:24px!important}.complete-with-doc__body__container__right__footer[_ngcontent-%COMP%]     button[lu-button-outer] .lu-button-wrapper .lu-button-content, .complete-with-doc__body__container__right__footer[_ngcontent-%COMP%]     button[lu-button-raised] .lu-button-wrapper .lu-button-content{display:none}.complete-with-doc__body__container__right__footer[_ngcontent-%COMP%]     button[lu-button-outer] .lu-button-wrapper .lu-button-text, .complete-with-doc__body__container__right__footer[_ngcontent-%COMP%]     button[lu-button-raised] .lu-button-wrapper .lu-button-text{font-weight:600;font-size:16px}.complete-with-doc__body__container__right__footer[_ngcontent-%COMP%]     button[lu-button-outer]{width:120px}.complete-with-doc__body__container__right__footer[_ngcontent-%COMP%]     button[lu-button-raised]{width:249px}.loader-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:rgba(var(--lu-black-rgb-100),.5);z-index:100}.loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px solid #fff;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.delete-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:rgba(var(--lu-black-rgb-100),.5);z-index:100}.delete-wrapper__form[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;display:flex;flex-direction:column;gap:24px;padding:24px;width:448px}.delete-wrapper__form__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.delete-wrapper__form__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600;font-size:20px;line-height:28px;margin:0}.delete-wrapper__form__header[_ngcontent-%COMP%]     button .lu-button-wrapper{height:24px!important;width:24px!important}.delete-wrapper__form__header[_ngcontent-%COMP%]     button .lu-button-icon{--lu-button-hover-text: #cccccc !important;--lu-svg-icon-color: #cccccc !important}.delete-wrapper__form__body[_ngcontent-%COMP%]{line-height:24px;font-size:15px}.delete-wrapper__form__actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:end;gap:16px}.delete-wrapper__form__actions[_ngcontent-%COMP%]     button[lu-button-outer], .delete-wrapper__form__actions[_ngcontent-%COMP%]     button[lu-button-raised]{height:40px}.delete-wrapper__form__actions[_ngcontent-%COMP%]     button[lu-button-outer] .lu-button-wrapper, .delete-wrapper__form__actions[_ngcontent-%COMP%]     button[lu-button-raised] .lu-button-wrapper{height:40px!important;padding:8px 16px!important;line-height:24px!important}.delete-wrapper__form__actions[_ngcontent-%COMP%]     button[lu-button-outer] .lu-button-wrapper .lu-button-content, .delete-wrapper__form__actions[_ngcontent-%COMP%]     button[lu-button-raised] .lu-button-wrapper .lu-button-content{display:none}.delete-wrapper__form__actions[_ngcontent-%COMP%]     button[lu-button-outer] .lu-button-wrapper .lu-button-text, .delete-wrapper__form__actions[_ngcontent-%COMP%]     button[lu-button-raised] .lu-button-wrapper .lu-button-text{font-weight:600;font-size:16px}.delete-wrapper__form__actions[_ngcontent-%COMP%]     button[lu-button-outer]{width:114px}.delete-wrapper__form__actions[_ngcontent-%COMP%]     button[lu-button-raised]{width:100px}.bold_span[_ngcontent-%COMP%]{font-weight:600;color:#000}.panel__header__content[_ngcontent-%COMP%]{display:flex;flex:1;min-width:0;flex-direction:row!important;color:#757575}.procedure-info[_ngcontent-%COMP%]{display:flex;flex-direction:row!important;flex-wrap:wrap;align-items:center;width:100%;font-size:13px;line-height:20px}.procedure-info__value[_ngcontent-%COMP%]{color:var(--lu-text-primary);white-space:nowrap}.procedure-info__dot[_ngcontent-%COMP%]{display:inline-block;width:3px;height:3px;background:rgba(0,0,0,.15);border-radius:4px;flex:none;margin:0 8px;align-self:center}@media (max-width: 960px){.complete-with-doc__header[_ngcontent-%COMP%]{padding:16px;height:56px}.complete-with-doc__header[_ngcontent-%COMP%]     button .lu-button-wrapper{justify-content:flex-end}.complete-with-doc__header[_ngcontent-%COMP%]     button .lu-button-wrapper lu-svg-icon{justify-content:flex-end}.complete-with-doc__body__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow:auto;margin-top:1px;height:calc(100vh - 144px);gap:0}.complete-with-doc__body__container__left[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:auto;width:100%;border-top:1px solid rgba(0,0,0,.1490196078);border-bottom:1px solid rgba(0,0,0,.1490196078);border-right:none;padding:24px 16px;order:2}.complete-with-doc__body__container__left__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:17px;line-height:24px}.complete-with-doc__body__container__left__footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:column}.complete-with-doc__body__container__right[_ngcontent-%COMP%]{display:flex;flex:auto;width:100%}.complete-with-doc__body__container__right[_ngcontent-%COMP%]   .procedure-name[_ngcontent-%COMP%]{margin-top:8px}.complete-with-doc__body__container__right[_ngcontent-%COMP%]   .procedure-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:17px;line-height:24px}.complete-with-doc__body__container__right[_ngcontent-%COMP%]   .current-info[_ngcontent-%COMP%]{margin-top:16px;display:flex;flex-direction:row;flex-wrap:wrap;line-height:24px;align-items:center}.complete-with-doc__body__container__right[_ngcontent-%COMP%]   .current-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#757575;font-weight:400}.complete-with-doc__body__container__footer[_ngcontent-%COMP%]{padding:16px;margin-top:auto;display:flex;flex-direction:row;justify-content:flex-end;gap:16px}.complete-with-doc__body__container__footer[_ngcontent-%COMP%]     button[lu-button-outer], .complete-with-doc__body__container__footer[_ngcontent-%COMP%]     button[lu-button-raised]{height:40px}.complete-with-doc__body__container__footer[_ngcontent-%COMP%]     button[lu-button-outer] .lu-button-wrapper, .complete-with-doc__body__container__footer[_ngcontent-%COMP%]     button[lu-button-raised] .lu-button-wrapper{height:40px!important;padding:8px 16px!important;line-height:24px!important}.complete-with-doc__body__container__footer[_ngcontent-%COMP%]     button[lu-button-outer] .lu-button-wrapper .lu-button-content, .complete-with-doc__body__container__footer[_ngcontent-%COMP%]     button[lu-button-raised] .lu-button-wrapper .lu-button-content{display:none}.complete-with-doc__body__container__footer[_ngcontent-%COMP%]     button[lu-button-outer] .lu-button-wrapper .lu-button-text, .complete-with-doc__body__container__footer[_ngcontent-%COMP%]     button[lu-button-raised] .lu-button-wrapper .lu-button-text{font-weight:600;font-size:16px}.complete-with-doc__body__container__footer[_ngcontent-%COMP%]     button[lu-button-outer]{width:120px}.complete-with-doc__body__container__footer[_ngcontent-%COMP%]     button[lu-button-raised]{width:249px}.complete-with-doc__body__panel__body[_ngcontent-%COMP%]{order:3;line-height:24px;padding:24px 16px}.complete-with-doc__body__panel__body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:15px;line-height:24px}.complete-with-doc__body__panel__body[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.complete-with-doc__body__panel__body[_ngcontent-%COMP%]   .wrapper__item[_ngcontent-%COMP%]{line-height:24px}.complete-with-doc__body__panel__body[_ngcontent-%COMP%]   .wrapper__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:15px;line-height:24px}.complete-with-doc__body__panel__body[_ngcontent-%COMP%]   .wrapper__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;overflow-wrap:break-word}.complete-with-doc__body__panel__body[_ngcontent-%COMP%]   .wrapper__item-with-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;line-height:24px}.complete-with-doc__body__panel__body[_ngcontent-%COMP%]   .wrapper__item-with-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400}.complete-with-doc__body__panel__body[_ngcontent-%COMP%]   .wrapper__item-with-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}}.cursor-def[_ngcontent-%COMP%]{cursor:default}"]
  }), Dt);
  pt = (0, t.gn)([(0, v.c)()], pt);
});
