// Extracted from main; webpack module 74645. Factory, not an ES module.
((Ae, V, i) => {
  var zi, Io;
  i.d(V, {
    F: () => Fn
  });
  var t = i(97582),
    e = i(94650),
    a = i(36895),
    m = i(44348),
    d = i(84445),
    M = i(19550),
    b = i(93278),
    A = i(32643),
    N = i(18200),
    I = i(24676),
    O = i(33459),
    L = i(28369),
    C = i(3977),
    v = i(6676),
    f = i(73922),
    E = i(20891),
    h = i(71273),
    x = i(34102),
    u = i(50494),
    T = i(5264),
    R = i(39453),
    B = i(24006),
    y = i(5416),
    j = i(54976),
    W = i(47313),
    F = i(9073),
    Le = i(76500),
    ke = i(85623),
    J = i(13700),
    fe = i(52958),
    ye = i(43150),
    ae = i(62804),
    Y = i(23062),
    G = i(91854),
    te = i(72210),
    pe = i(50879),
    be = i(15439),
    le = i.n(be),
    n = i(34874),
    Se = i(58264),
    qe = i(7047),
    Rt = i(39300),
    We = i(96474),
    Re = i(89556),
    st = i(62289),
    q = i(97215);
  function mt(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 28)(1, "span", 29), e._uU(2), e.qZA(), e.TgZ(3, "div", 30)(4, "label")(5, "lu-input-wrapper", 31), e._UZ(6, "input", 32), e.qZA()()()()), 2 & gi) {
      const Vt = e.oxw();
      e.xp6(2), e.Oqu(Vt.installDateLabel), e.xp6(4), e.Q6J("formControl", Vt.installTimeCtrl);
    }
  }
  function ut(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 28)(1, "span", 29), e._uU(2), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & gi) {
      const Vt = e.oxw();
      e.xp6(2), e.Oqu(Vt.installDateLabel), e.xp6(2), e.Oqu(Vt.installTimeCtrl.value || "—");
    }
  }
  function Ct(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & gi) {
      const Vt = Kt.$implicit;
      e.xp6(1), e.Oqu(Vt);
    }
  }
  function Ft(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "lu-data-list", 41), e.NdJ("action", function () {
        e.CHM(Vt), e.oxw();
        const pi = e.MAs(2),
          xo = e.oxw(3);
        return e.KtG(xo.onAssessmentPicked(pi));
      }), e.YNc(1, Ct, 2, 1, "ng-template", null, 42, e.W1O), e.qZA();
    }
    if (2 & gi) {
      const Vt = e.MAs(2),
        Pn = e.oxw(4);
      e.Q6J("items", Pn.venipunctureLocations)("itemContent", Vt);
    }
  }
  function Et(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "form", 37)(1, "lu-combobox", 38, 39), e.YNc(3, Ft, 3, 2, "lu-data-list", 40), e.qZA()()), 2 & gi) {
      const Vt = e.oxw().$implicit,
        Pn = e.oxw(2);
      e.Q6J("formGroup", Pn.getFormGroup(Vt));
    }
  }
  function Ue(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div"), e.YNc(1, Et, 4, 1, "form", 36), e.qZA()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(1), e.Q6J("ngIf", !Vt.isViewMode);
    }
  }
  function Me(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div")(1, "span"), e._uU(2), e.qZA()()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(2), e.Oqu(Vt.viewScaleAssessments.join(", ") || "—");
    }
  }
  function Ke(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "button", 43), e.NdJ("click", function () {
        e.CHM(Vt);
        const pi = e.oxw(2);
        return e.KtG(pi.addCatheterScaleAssessment());
      }), e.TgZ(1, "div", 44)(2, "span", 45), e._uU(3, "+"), e.qZA(), e.TgZ(4, "span", 46), e._uU(5, "Добавить еще"), e.qZA()()();
    }
  }
  const Ze = function (gi) {
    return {
      "text-color": gi
    };
  };
  function Ee(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 33)(1, "span", 20), e._uU(2, "Оценка места Венепункции по шкале флебитов"), e.qZA(), e.TgZ(3, "div", 23), e.YNc(4, Ue, 2, 1, "div", 24), e.qZA(), e.YNc(5, Me, 3, 1, "div", 34), e.YNc(6, Ke, 6, 0, "button", 35), e.qZA()), 2 & gi) {
      const Vt = e.oxw();
      e.xp6(1), e.Q6J("ngClass", e.VKq(4, Ze, Vt.isViewMode)), e.xp6(3), e.Q6J("ngForOf", Vt.scaleAssessmentFormArray.controls), e.xp6(1), e.Q6J("ngIf", Vt.isViewMode), e.xp6(1), e.Q6J("ngIf", !Vt.isViewMode);
    }
  }
  function je(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "button", 51), e.NdJ("click", function () {
        const xo = e.CHM(Vt).$implicit,
          No = e.oxw(3);
        return e.KtG(No.getControl(No.form, "heparinMark").patchValue(xo));
      }), e._uU(1), e.qZA();
    }
    if (2 & gi) {
      const Vt = Kt.$implicit;
      e.Q6J("value", Vt), e.xp6(1), e.hij(" ", Vt, " ");
    }
  }
  function Mt(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "lu-radio-group", 49)(1, "lu-button-group"), e.YNc(2, je, 2, 2, "button", 50), e.qZA()()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(2), e.Q6J("ngForOf", Vt.yesNoValues);
    }
  }
  function Je(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(1), e.Oqu(Vt.getViewValue("heparinMark"));
    }
  }
  function Xt(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 47)(1, "span", 20), e._uU(2, "Отметка о введении гепаринового раствора"), e.qZA(), e.YNc(3, Mt, 3, 1, "lu-radio-group", 48), e.YNc(4, Je, 2, 1, "span", 34), e.qZA()), 2 & gi) {
      const Vt = e.oxw();
      e.xp6(1), e.Q6J("ngClass", e.VKq(3, Ze, Vt.isViewMode)), e.xp6(2), e.Q6J("ngIf", !Vt.isViewMode), e.xp6(1), e.Q6J("ngIf", !Vt.isPeripheral && !Vt.isUrinary && Vt.isViewMode);
    }
  }
  function Nn(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "button", 51), e.NdJ("click", function () {
        const xo = e.CHM(Vt).$implicit,
          No = e.oxw(3);
        return e.KtG(No.getControl(No.form, "inflammation").patchValue(xo));
      }), e._uU(1), e.qZA();
    }
    if (2 & gi) {
      const Vt = Kt.$implicit;
      e.Q6J("value", Vt), e.xp6(1), e.hij(" ", Vt, " ");
    }
  }
  function Pi(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "lu-radio-group", 56)(1, "lu-button-group"), e.YNc(2, Nn, 2, 2, "button", 50), e.qZA()()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(2), e.Q6J("ngForOf", Vt.yesNoValues);
    }
  }
  function Ii(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "span", 57), e._uU(1), e.qZA()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(1), e.hij(" ", Vt.getViewValue("inflammation"), " ");
    }
  }
  function yi(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "button", 51), e.NdJ("click", function () {
        const xo = e.CHM(Vt).$implicit,
          No = e.oxw(3);
        return e.KtG(No.getControl(No.form, "discharge").patchValue(xo));
      }), e._uU(1), e.qZA();
    }
    if (2 & gi) {
      const Vt = Kt.$implicit;
      e.Q6J("value", Vt), e.xp6(1), e.hij(" ", Vt, " ");
    }
  }
  function co(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "lu-radio-group", 58)(1, "lu-button-group"), e.YNc(2, yi, 2, 2, "button", 50), e.qZA()()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(2), e.Q6J("ngForOf", Vt.yesNoValues);
    }
  }
  function Jo(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "span", 57), e._uU(1), e.qZA()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(1), e.hij(" ", Vt.getViewValue("discharge"), " ");
    }
  }
  const fr = function (gi) {
    return {
      "disabled-urinary-fields": gi
    };
  };
  function pt(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 52)(1, "div")(2, "span", 9), e._uU(3, "Воспаление слизистой"), e.qZA(), e.YNc(4, Pi, 3, 1, "lu-radio-group", 53), e.YNc(5, Ii, 2, 1, "span", 54), e.qZA(), e.TgZ(6, "div")(7, "span", 9), e._uU(8, "Выделения"), e.qZA(), e.YNc(9, co, 3, 1, "lu-radio-group", 55), e.YNc(10, Jo, 2, 1, "span", 54), e.qZA()()), 2 & gi) {
      const Vt = e.oxw();
      e.Q6J("ngClass", e.VKq(7, fr, Vt.isViewMode)), e.xp6(2), e.Q6J("ngClass", e.VKq(9, Ze, Vt.isViewMode)), e.xp6(2), e.Q6J("ngIf", !Vt.isViewMode), e.xp6(1), e.Q6J("ngIf", Vt.isViewMode), e.xp6(2), e.Q6J("ngClass", e.VKq(11, Ze, Vt.isViewMode)), e.xp6(2), e.Q6J("ngIf", !Vt.isViewMode), e.xp6(1), e.Q6J("ngIf", Vt.isViewMode);
    }
  }
  function Dt(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "lu-radio-group", 61)(1, "lu-button-group")(2, "button", 51), e.NdJ("click", function () {
        e.CHM(Vt);
        const pi = e.oxw(2);
        return e.KtG(pi.getControl(pi.form, "urineColor").patchValue("Норма (N)"));
      }), e._uU(3, " Норма (N) "), e.qZA(), e.TgZ(4, "button", 51), e.NdJ("click", function () {
        e.CHM(Vt);
        const pi = e.oxw(2);
        return e.KtG(pi.getControl(pi.form, "urineColor").patchValue("Отклонение (П)"));
      }), e._uU(5, " Отклонение (П) "), e.qZA()()();
    }
    2 & gi && (e.xp6(2), e.Q6J("value", "Норма (N)"), e.xp6(2), e.Q6J("value", "Отклонение (П)"));
  }
  function Ht(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "span", 57), e._uU(1), e.qZA()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(1), e.hij(" ", Vt.getViewValue("urineColor"), " ");
    }
  }
  const Dn = function (gi) {
    return {
      height: gi
    };
  };
  function vt(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 59)(1, "div")(2, "span", 9), e._uU(3, "Цвет мочи"), e.qZA(), e.YNc(4, Dt, 6, 2, "lu-radio-group", 60), e.YNc(5, Ht, 2, 1, "span", 54), e.qZA()()), 2 & gi) {
      const Vt = e.oxw();
      e.Q6J("ngStyle", e.VKq(4, Dn, Vt.isViewMode ? "52px" : "70px")), e.xp6(2), e.Q6J("ngClass", e.VKq(6, Ze, Vt.isViewMode)), e.xp6(2), e.Q6J("ngIf", !Vt.isViewMode), e.xp6(1), e.Q6J("ngIf", Vt.isViewMode);
    }
  }
  function an(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & gi) {
      const Vt = Kt.$implicit;
      e.xp6(1), e.Oqu(Vt);
    }
  }
  function li(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "lu-data-list", 67), e.YNc(1, an, 2, 1, "ng-template", null, 68, e.W1O), e.qZA()), 2 & gi) {
      const Vt = e.MAs(2),
        Pn = e.oxw(3);
      e.Q6J("items", Pn.complicationsOptions)("itemContent", Vt);
    }
  }
  function zn(gi, Kt) {
    1 & gi && (e.TgZ(0, "lu-combobox", 65), e.YNc(1, li, 3, 2, "lu-data-list", 66), e.qZA());
  }
  function $t(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "span", 69), e._uU(1), e.qZA()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(1), e.hij(" ", Vt.getViewValue("complications"), " ");
    }
  }
  function Mn(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 62)(1, "span", 9), e._uU(2, "Осложнения"), e.qZA(), e.YNc(3, zn, 2, 0, "lu-combobox", 63), e.YNc(4, $t, 2, 1, "span", 64), e.qZA()), 2 & gi) {
      const Vt = e.oxw();
      e.xp6(1), e.Q6J("ngClass", e.VKq(3, Ze, Vt.isViewMode)), e.xp6(2), e.Q6J("ngIf", !Vt.isViewMode), e.xp6(1), e.Q6J("ngIf", Vt.isViewMode);
    }
  }
  function Qn(gi, Kt) {
    1 & gi && e._UZ(0, "lu-textarea", 71), 2 & gi && e.Q6J("minRows", 2);
  }
  function In(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "span", 69), e._uU(1), e.qZA()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(1), e.hij(" ", Vt.getViewValue("additionalInformation"), " ");
    }
  }
  function ui(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 62)(1, "span", 9), e._uU(2, "Дополнительные сведения"), e.qZA(), e.YNc(3, Qn, 1, 1, "lu-textarea", 70), e.YNc(4, In, 2, 1, "span", 64), e.qZA()), 2 & gi) {
      const Vt = e.oxw();
      e.xp6(1), e.Q6J("ngClass", e.VKq(3, Ze, Vt.isViewMode)), e.xp6(2), e.Q6J("ngIf", !Vt.isViewMode), e.xp6(1), e.Q6J("ngIf", Vt.isViewMode);
    }
  }
  const To = function (gi) {
    return {
      "delete-button__central": gi
    };
  };
  function bi(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "button", 72), e.NdJ("click", function () {
        e.CHM(Vt);
        const pi = e.oxw();
        return e.KtG(pi.onDeleteCatheter());
      }), e._UZ(1, "lu-svg-icon", 73), e.TgZ(2, "span"), e._uU(3, "Удалить катетер"), e.qZA()();
    }
    if (2 & gi) {
      const Vt = e.oxw();
      e.Q6J("ngClass", e.VKq(2, To, !Vt.isPeripheral && !Vt.isUrinary)), e.xp6(1), e.Q6J("size", 16);
    }
  }
  function qn(gi, Kt) {
    1 & gi && (e.TgZ(0, "lu-form-message", 80), e._uU(1, " Некорректный формат времени, ожидается ЧЧ:ММ (00:00 - 23:59) "), e.qZA());
  }
  function Xn(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 30)(1, "label")(2, "lu-input-wrapper", 31), e._UZ(3, "input", 32), e.YNc(4, qn, 2, 0, "lu-form-message", 79), e.qZA()()()), 2 & gi) {
      const Vt = e.oxw(3);
      e.xp6(3), e.Q6J("formControl", Vt.deletedTimeCtrl), e.xp6(1), e.Q6J("ngIf", Vt.deletedTimeCtrl.touched && Vt.deletedTimeCtrl.hasError("invalidTime"));
    }
  }
  function Yi(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 28)(1, "span", 29), e._uU(2), e.qZA(), e.YNc(3, Xn, 5, 2, "div", 25), e.qZA()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(2), e.Oqu(Vt.deletedDateLabel), e.xp6(1), e.Q6J("ngIf", !Vt.isViewMode);
    }
  }
  function Eo(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 28)(1, "span", 81), e._uU(2), e.qZA()()), 2 & gi) {
      const Vt = e.oxw(2);
      let Pn;
      e.xp6(2), e.Oqu(Vt.formatViewDateTime(null == (Pn = Vt.getControl(Vt.form, "deletedDatetimeSet")) ? null : Pn.value));
    }
  }
  function Fo(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & gi) {
      const Vt = Kt.$implicit;
      e.xp6(1), e.Oqu(Vt);
    }
  }
  function br(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "lu-data-list", 67), e.YNc(1, Fo, 2, 1, "ng-template", null, 83, e.W1O), e.qZA()), 2 & gi) {
      const Vt = e.MAs(2),
        Pn = e.oxw(3);
      e.Q6J("items", Pn.deletedReasons)("itemContent", Vt);
    }
  }
  function Pr(gi, Kt) {
    1 & gi && (e.TgZ(0, "lu-combobox", 82), e.YNc(1, br, 3, 2, "lu-data-list", 66), e.qZA());
  }
  function qo(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 28)(1, "span", 69), e._uU(2), e.qZA()()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(2), e.Oqu(Vt.getViewValue("deletedReason"));
    }
  }
  function Yo(gi, Kt) {
    1 & gi && (e.TgZ(0, "lu-form-message", 80), e._uU(1, " Некорректный формат времени, ожидается ЧЧ:ММ (00:00 - 23:59) "), e.qZA());
  }
  function wr(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 30)(1, "label")(2, "lu-input-wrapper", 31), e._UZ(3, "input", 85), e.YNc(4, Yo, 2, 0, "lu-form-message", 79), e.qZA()()()), 2 & gi) {
      const Vt = e.oxw(3);
      e.xp6(4), e.Q6J("ngIf", Vt.getControl(Vt.form, "catheterCultureTime").touched && Vt.getControl(Vt.form, "catheterCultureTime").hasError("invalidTime"));
    }
  }
  function oo(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 28)(1, "span", 69), e._uU(2), e.qZA()()), 2 & gi) {
      const Vt = e.oxw(3);
      e.xp6(2), e.Oqu(Vt.getViewValue("catheterCultureTime"));
    }
  }
  function Di(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 84)(1, "span", 20), e._uU(2, "Посев катетера"), e.qZA(), e.YNc(3, wr, 5, 1, "div", 25), e.YNc(4, oo, 3, 1, "div", 10), e.qZA()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(1), e.Q6J("ngClass", e.VKq(3, Ze, Vt.isViewMode)), e.xp6(2), e.Q6J("ngIf", !Vt.isViewMode), e.xp6(1), e.Q6J("ngIf", Vt.isViewMode);
    }
  }
  const Ci = function (gi, Kt, Vt, Pn) {
      return {
        "deleted-catheter-fields__assessment-field": gi,
        "deleted-catheter-fields__central": Kt,
        "deleted-size": Vt,
        "deleted-catheter-fields__assessment-field__is-disabled": Pn
      };
    },
    lo = function (gi) {
      return {
        "deleted-catheter-fields__deleted-reason__margin-field": gi
      };
    };
  function jo(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 74)(1, "div", 75)(2, "span", 9), e._uU(3, "Дата и время удаления"), e.qZA(), e.YNc(4, Yi, 4, 2, "div", 10), e.YNc(5, Eo, 3, 1, "div", 10), e.qZA(), e.TgZ(6, "div", 76)(7, "span", 9), e._uU(8, "Причина удаления"), e.qZA(), e.YNc(9, Pr, 2, 0, "lu-combobox", 77), e.YNc(10, qo, 3, 1, "div", 10), e.qZA(), e.YNc(11, Di, 5, 5, "div", 78), e.qZA()), 2 & gi) {
      const Vt = e.oxw();
      e.Q6J("ngClass", e.l5B(9, Ci, Vt.isPeripheral && !Vt.isViewMode, !Vt.isPeripheral && !Vt.isUrinary && !Vt.isViewMode, Vt.isViewMode && (Vt.isPeripheral || Vt.isUrinary), Vt.isViewMode && Vt.isPeripheral)), e.xp6(2), e.Q6J("ngClass", e.VKq(14, Ze, Vt.isViewMode)), e.xp6(2), e.Q6J("ngIf", !Vt.isViewMode), e.xp6(1), e.Q6J("ngIf", Vt.isViewMode), e.xp6(1), e.Q6J("ngClass", e.VKq(16, lo, Vt.isUrinary || Vt.isPeripheral)), e.xp6(1), e.Q6J("ngClass", e.VKq(18, Ze, Vt.isViewMode)), e.xp6(2), e.Q6J("ngIf", !Vt.isViewMode), e.xp6(1), e.Q6J("ngIf", Vt.isViewMode), e.xp6(1), e.Q6J("ngIf", !Vt.isPeripheral && !Vt.isUrinary);
    }
  }
  function Go(gi, Kt) {
    1 & gi && e._UZ(0, "div", 86);
  }
  function ji(gi, Kt) {
    1 & gi && (e.TgZ(0, "lu-form-message", 80), e._uU(1, " Поле обязательно для заполнения "), e.qZA());
  }
  function ti(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "form", 88)(1, "label")(2, "lu-input-wrapper", 31), e._UZ(3, "input", 89), e.qZA(), e.YNc(4, ji, 2, 0, "lu-form-message", 79), e.qZA()()), 2 & gi) {
      const Vt = e.oxw().$implicit,
        Pn = e.oxw();
      let pi;
      e.Q6J("formGroup", Pn.getFormGroup(Vt)), e.xp6(4), e.Q6J("ngIf", (null == (pi = Pn.getFormGroup(Vt).get("catheterTreatmentTime")) ? null : pi.invalid) && (null == (pi = Pn.getFormGroup(Vt).get("catheterTreatmentTime")) ? null : pi.touched));
    }
  }
  function fi(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div"), e.YNc(1, ti, 5, 2, "form", 87), e.qZA()), 2 & gi) {
      const Vt = e.oxw();
      e.xp6(1), e.Q6J("ngIf", !Vt.isViewMode);
    }
  }
  function Fi(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & gi) {
      const Vt = e.oxw(2);
      e.xp6(1), e.Oqu(Vt.viewTreatmentTimes.join(", "));
    }
  }
  function Rn(gi, Kt) {
    1 & gi && e._uU(0, "—");
  }
  function ki(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 30), e.YNc(1, Fi, 2, 1, "span", 90), e.YNc(2, Rn, 1, 0, "ng-template", null, 91, e.W1O), e.qZA()), 2 & gi) {
      const Vt = e.MAs(3),
        Pn = e.oxw();
      e.xp6(1), e.Q6J("ngIf", Pn.viewTreatmentTimes.length)("ngIfElse", Vt);
    }
  }
  function Ei(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "button", 92), e.NdJ("click", function () {
        e.CHM(Vt);
        const pi = e.oxw();
        return e.KtG(pi.addCatheterTreatment());
      }), e.TgZ(1, "div", 44)(2, "span", 93), e._uU(3, "+"), e.qZA(), e.TgZ(4, "span", 94), e._uU(5, "Добавить еще"), e.qZA()()();
    }
  }
  const Wt = function (gi) {
    return {
      "annulation-button": gi
    };
  };
  function Oi(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "button", 100), e.NdJ("click", function () {
        e.CHM(Vt);
        const pi = e.oxw(2);
        return e.KtG(pi.openDeletedDialog());
      }), e._uU(1), e.qZA();
    }
    if (2 & gi) {
      const Vt = e.oxw(2);
      e.Q6J("ngClass", e.VKq(2, Wt, Vt.isTablet)), e.xp6(1), e.hij(" ", Vt.isTablet ? "Аннулировать" : "Аннулировать данные", " ");
    }
  }
  function Ji(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "div", 95), e.YNc(1, Oi, 2, 4, "button", 96), e.TgZ(2, "button", 97), e.NdJ("click", function () {
        e.CHM(Vt);
        const pi = e.oxw();
        return e.KtG(pi.save());
      }), e._uU(3, " Сохранить "), e.qZA(), e.TgZ(4, "button", 98), e.NdJ("click", function () {
        e.CHM(Vt);
        const pi = e.oxw();
        return e.KtG(pi.saveAndSign());
      }), e._UZ(5, "lu-svg-icon", 99), e._uU(6, " Сохранить и подписать "), e.qZA()();
    }
    if (2 & gi) {
      const Vt = e.oxw();
      e.xp6(1), e.Q6J("ngIf", Vt.isAnnulWindowAvailable), e.xp6(4), e.Q6J("size", 24);
    }
  }
  function Ao(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "div", 95)(1, "button", 98), e.NdJ("click", function () {
        e.CHM(Vt);
        const pi = e.oxw();
        return e.KtG(pi.unsign());
      }), e._uU(2, " Снять подпись "), e.qZA()();
    }
  }
  const Sr = function (gi) {
      return {
        "height: 806px": gi
      };
    },
    us = function (gi) {
      return {
        "vertical-border": gi
      };
    };
  let Ps = ((zi = class {
    get isAnnulWindowAvailable() {
      return !this.isViewMode && !this.isDeleted && (this.isUrinary || this.isPeripheral);
    }
    constructor(Kt = (0, e.f3M)(B.qu), Vt, Pn, pi = (0, e.f3M)(G.Jv), xo, No, Ko, Mi) {
      this.fb = Kt, this.modalRef = Vt, this.confirmationModalService = Pn, this.messageService = pi, this.breakpointObserver = xo, this.cdr = No, this.userContext = Ko, this.data = Mi, this.catTypes = x.yR, this.isTablet = !1, this.isViewMode = !1, this.installDateLabel = "—", this.deletedDateLabel = "—", this.typeLabel = "", this.isUrinary = !1, this.isPeripheral = !1, this.isCentral = !1, this.isDeleted = !1, this.isDeletedCatheter = !1, this.currentUser = null, this.installDateCtrl = new B.NI({
        value: null,
        disabled: !0
      }), this.installTimeCtrl = new B.NI({
        value: null
      }), this.deletedDateCtrl = new B.NI(null, [B.kI.required]), this.deletedTimeCtrl = new B.NI(null, [B.kI.required]), this.yesNoValues = ["Нет", "Да"], this.deletedReasons = qe.Yp, this.complicationsOptions = qe.UJ, this.venipunctureLocations = qe.Fz, this.urinaryCatheterFormField = {
        installDatetimeSet: [null],
        catheterTreatment: new B.Oe([]),
        inflammation: [null],
        userAddInflammationInfo: [null],
        discharge: [null],
        userAddDischargeInfo: [null],
        urineColor: [null],
        userAddUrineColorInfo: [null],
        complications: [null],
        additionalInformation: [null],
        addInfoTime: [null],
        userAddInfo: [null],
        deletedDatetimeSet: [null],
        deletedReason: [null],
        userDelete: [null],
        userDeleteCode: [null],
        monitoringDateTime: [null],
        monitoringDate: [null],
        currentUser: [null],
        currentUserCode: [null]
      }, this.peripheralCatheterFormField = {
        installDatetimeSet: [null],
        catheterTreatment: new B.Oe([]),
        scaleAssessment: new B.Oe([]),
        deletedDatetimeSet: [null],
        deletedReason: [null],
        venipunctureLocations: [[]],
        userDelete: [null],
        userDeleteCode: [null],
        monitoringDateTime: [null],
        monitoringDate: [null],
        currentUser: [null],
        currentUserCode: [null]
      }, this.centralCatheterFormField = {
        installDatetimeSet: [null],
        monitoringDate: [null],
        heparinMark: [null],
        userAddHeparinMark: [null],
        catheterTreatment: new B.Oe([]),
        deletedTimeSet: [null],
        deletedDatetimeSet: [null],
        deletedReason: [null],
        userDelete: [null],
        userDeleteCode: [null],
        catheterCultureTime: [null],
        userAddCatheterCultureTime: [null],
        currentUser: [null],
        currentUserCode: [null]
      }, this.urinaryCatheterForm = this.fb.group(this.urinaryCatheterFormField), this.peripheralCatheterForm = this.fb.group(this.peripheralCatheterFormField), this.centralCatheterForm = this.fb.group(this.centralCatheterFormField), this.typeLabel = this.resolveTypeLabel(Mi), this.isUrinary = (0, We.Cj)(this.typeLabel), this.isPeripheral = (0, We.gr)(this.typeLabel), this.isCentral = (0, We.V5)(this.typeLabel) || !this.isUrinary && !this.isPeripheral, this.deletedReasons = this.isUrinary ? qe.sV : this.isCentral ? qe.Dx : qe.Yp, this.isViewMode = !!Mi?.isViewMode, this.form = this.isUrinary ? this.urinaryCatheterForm : this.isPeripheral ? this.peripheralCatheterForm : this.centralCatheterForm, this.userContext.getUserContext().pipe((0, T.t)(this)).subscribe(It => {
        if (this.currentUser = It, !It) return;
        const At = new Se.I(It),
          _n = null != It?.employeeId ? `${It.employeeId}` : null,
          it = this.isUrinary ? _n : At.officialName;
        this.getControl(this.form, "userDelete")?.patchValue(it, {
          emitEvent: !1
        }), this.getControl(this.form, "userDeleteCode")?.patchValue(_n, {
          emitEvent: !1
        });
      });
    }
    ngOnInit() {
      this.ensureDefaultFormRows(), this.applyIncomingData();
    }
    ngAfterViewInit() {
      this.breakpointObserver.observe(R.ok).pipe((0, T.t)(this)).subscribe(Kt => {
        this.isTablet = Kt.matches, this.cdr.markForCheck();
      }), this.deletedDateCtrl.valueChanges.pipe((0, T.t)(this)).subscribe(Kt => {
        this.mergeDeletedDateTime(Kt, this.deletedTimeCtrl.value);
      }), this.deletedTimeCtrl.valueChanges.pipe((0, T.t)(this)).subscribe(Kt => {
        if (!Kt) return;
        const Vt = Kt.split(":")[0],
          Pn = Kt.split(":")[1];
        +Vt > 23 || +Pn > 59 ? (this.deletedTimeCtrl.reset(null, {
          emitEvent: !1
        }), this.deletedTimeCtrl.setErrors({
          invalidTime: !0
        }), this.deletedTimeCtrl.markAsTouched(), this.deletedTimeCtrl.updateValueAndValidity()) : this.mergeDeletedDateTime(this.deletedDateCtrl.value, Kt);
      }), this.cdr.detectChanges();
    }
    ensureDefaultFormRows() {
      this.catheterTreatmentFormArray.length || this.catheterTreatmentFormArray.push(this.createCatheterTreatment()), this.isPeripheral && !this.scaleAssessmentFormArray.length && this.scaleAssessmentFormArray.push(this.createScaleAssessment());
    }
    get catheterTreatmentFormArray() {
      return this.getControl(this.form, "catheterTreatment");
    }
    get scaleAssessmentFormArray() {
      return this.getControl(this.form, "scaleAssessment");
    }
    createCatheterTreatment() {
      return this.fb.group({
        catheterTreatmentTime: [null, B.kI.required],
        userAddCatheterTreatmentTime: [null]
      });
    }
    createScaleAssessment() {
      return this.fb.group({
        assessment: [null],
        userAddAssessment: [null]
      });
    }
    getFormGroup(Kt) {
      return Kt;
    }
    get viewTreatmentTimes() {
      return this.catheterTreatmentFormArray.controls.map(Kt => this.getFormGroup(Kt).get("catheterTreatmentTime")?.value).filter(Kt => !!Kt);
    }
    get viewScaleAssessments() {
      return this.isPeripheral ? this.scaleAssessmentFormArray.controls.map(Kt => this.getFormGroup(Kt).get("assessment")?.value).filter(Kt => null != Kt && "" !== Kt) : [];
    }
    getViewValue(Kt, Vt = "—") {
      const Pn = this.getControl(this.form, Kt)?.value;
      return null == Pn || "" === Pn ? Vt : `${Pn}`;
    }
    extractTimeOnly(Kt) {
      if (!Kt) return null;
      const Pn = `${Kt}`.trim().match(/^(\d{1,2}):(\d{2})/);
      return Pn ? `${Pn[1].padStart(2, "0")}:${Pn[2]}` : null;
    }
    formatViewDateTime(Kt) {
      return (0, We.S$)(Kt);
    }
    addCatheterTreatment() {
      this.catheterTreatmentFormArray.push(this.createCatheterTreatment()), this.cdr.markForCheck();
    }
    addCatheterScaleAssessment() {
      this.scaleAssessmentFormArray.push(this.createScaleAssessment()), this.cdr.markForCheck();
    }
    onDeleteCatheter() {
      this.isDeleted = !0;
      const Kt = new Date();
      this.deletedDateCtrl.setValue(Kt, {
        emitEvent: !1
      }), this.deletedDateLabel = (0, We.vi)(Kt);
      const Vt = le()(Kt).format("HH:mm");
      this.deletedTimeCtrl.setValue(Vt, {
        emitEvent: !1
      }), this.mergeDeletedDateTime(Kt, Vt), this.cdr.markForCheck();
    }
    mergeDeletedDateTime(Kt, Vt) {
      if (!Kt || !Vt) return;
      const [Pn, pi] = Vt.split(":");
      if (void 0 === Pn || void 0 === pi) return;
      const xo = this.getControl(this.form, "deletedDatetimeSet");
      if (!xo) return;
      const No = le()(Kt).hours(+Pn).minutes(+pi).seconds(0).milliseconds(0).toDate();
      xo.setValue(No);
      const Ko = this.getControl(this.form, "deletedTimeSet");
      Ko && Ko.setValue(Vt);
    }
    getControl(Kt, Vt) {
      return (0, n.YV)(Kt, Vt);
    }
    displayFn(Kt) {
      return Kt.name;
    }
    save() {
      this.validateBeforeClose() && this.modalRef.close({
        action: "save",
        type: this.typeLabel,
        ...this.form.getRawValue(),
        monitoringDate: this.getControl(this.form, "monitoringDate")?.value || (0, We.Ii)(this.data?.monitoringDate || ""),
        monitoringDateKey: this.data?.monitoringDate || ""
      });
    }
    saveAndSign() {
      this.validateBeforeClose() && this.modalRef.close({
        action: "sign",
        type: this.typeLabel,
        ...this.form.getRawValue(),
        monitoringDate: this.getControl(this.form, "monitoringDate")?.value || (0, We.Ii)(this.data?.monitoringDate || ""),
        monitoringDateKey: this.data?.monitoringDate || ""
      });
    }
    unsign() {
      this.modalRef.close({
        action: "unsign",
        type: this.typeLabel
      });
    }
    openDeletedDialog() {
      this.confirmationModalService.openDialog({
        title: "Аннулирование данных",
        message: "При аннулировании данных о катетере будут удалены все медицинские записи, созданные по данному катетеру в медкарте пациента. Подтвердить аннулирование?",
        buttonTitle: "Аннулировать",
        cancelButtonTitle: "Отмена",
        size: 512,
        panelClass: "catheter-annul-confirm-modal"
      }).pipe((0, T.t)(this), (0, Rt.h)(Vt => !!Vt)).subscribe(() => {
        this.isDeleted = !0, this.modalRef.close({
          action: "annul",
          type: this.typeLabel
        });
      });
    }
    applyIncomingData() {
      const Kt = this.data?.installDatetimeSet || this.data?.formValue?.installDatetimeSet || this.data?.source?.installDt || this.data?.source?.installDatetimeSet || null;
      if (this.installDateLabel = (0, We.vi)(Kt), Kt) {
        const No = new Date(Kt);
        if (!Number.isNaN(No.getTime())) {
          const Mi = "string" == typeof Kt && /\+03:00$/.test(Kt.trim()) ? le()(No).toDate() : le()(No).subtract(3, "hours").toDate();
          this.installDateCtrl.setValue(Mi, {
            emitEvent: !1
          }), this.installTimeCtrl.setValue(le()(Mi).format("HH:mm"), {
            emitEvent: !1
          }), this.getControl(this.form, "installDatetimeSet")?.setValue(No);
        }
      }
      const Vt = this.data?.formValue;
      Vt && "object" == typeof Vt && this.patchMonitoringFormValue(Vt);
      const Pn = this.data?.source;
      if (Pn) {
        const No = Pn,
          Ko = this.data?.monitoringDate || "",
          Mi = (0, We.n5)(No, Ko),
          At = (0, We.yP)(No).length > 0 ? this.flattenForMonitoringDate(No, Ko) : Pn;
        this.patchFormFromSource(At, Mi);
      }
      const pi = Pn?.lastMonitoringForm;
      pi && "object" == typeof pi && !(0, We.yP)(Pn).length && this.patchMonitoringFormValue(pi);
      const xo = (0, We.Ii)(this.data?.monitoringDate || "");
      xo && this.getControl(this.form, "monitoringDate")?.setValue(xo, {
        emitEvent: !1
      }), this.getControl(this.form, "monitoringDateTime")?.setValue(new Date(), {
        emitEvent: !1
      });
    }
    flattenForMonitoringDate(Kt, Vt) {
      const Pn = (0, We.n5)(Kt, Vt);
      if (!Pn.length) return {
        ...Kt,
        careRecords: Kt.careRecords
      };
      const pi = Pn.reduce((Mi, It) => this.scoreCareRecord(It) >= this.scoreCareRecord(Mi) ? It : Mi),
        xo = Pn.reduce((Mi, It) => {
          const At = {
            ...Mi
          };
          return Object.keys(It).forEach(_n => {
            const it = It[_n];
            null != it && "" !== it && (At[_n] = it);
          }), At;
        }, {
          ...pi
        }),
        No = (0, We.SY)(Pn),
        Ko = (0, We.N4)(Pn);
      return {
        ...Kt,
        ...xo,
        catheterId: Kt.catheterId,
        careCaseId: Kt.careCaseId,
        catheterType: Kt.catheterType,
        compositionUid: xo.compositionUid || pi.compositionUid || Kt.compositionUid,
        protocolId: xo.catheterProtocolId || pi.catheterProtocolId || Kt.protocolId,
        installDt: Kt.installDt,
        locus: Kt.locus,
        placeAssessment: Ko[0] ?? xo.venipunctureAssessment ?? pi.venipunctureAssessment ?? Kt.placeAssessment,
        treatmentTime: No[0] ?? xo.treatmentTime ?? pi.treatmentTime,
        treatmentVal: No[0] ?? xo.treatmentVal ?? pi.treatmentVal,
        deletionTime: xo.deletionTime || pi.deletionTime || Kt.deletionTime,
        deletionReason: xo.deletionReason || pi.deletionReason,
        comment: xo.comment || pi.comment || Kt.comment,
        status: Kt.status,
        updated: xo.updated || pi.updated || Kt.updated,
        careRecords: Kt.careRecords,
        monitoringTreatmentTimes: No,
        monitoringAssessments: Ko
      };
    }
    scoreCareRecord(Kt) {
      let Vt = 0;
      (0, We.tI)(Kt).length && (Vt += 2), (Kt.treatmentTime || Kt.treatmentVal) && (Vt += 1), null != Kt.inflammation && "" !== `${Kt.inflammation}`.trim() && (Vt += 2), null != Kt.excretion && "" !== `${Kt.excretion}`.trim() && (Vt += 2), Kt.urineColor && (Vt += 2), Kt.complication && (Vt += 1), Kt.extraInformation && (Vt += 1), null != Kt.heparinInfo && "" !== `${Kt.heparinInfo}`.trim() && (Vt += 2);
      const Pn = Kt.updated ? new Date(Kt.updated).getTime() : 0;
      return 1e6 * Vt + (Number.isFinite(Pn) ? Pn : 0);
    }
    patchFormFromSource(Kt, Vt = []) {
      if (Kt.deletionTime) {
        const It = new Date(Kt.deletionTime),
          At = this.formatViewDateTime(Kt?.sowing);
        this.isDeletedCatheter = "deleted" === Kt.status, At && this.getControl(this.form, "catheterCultureTime")?.setValue(At), Number.isNaN(It.getTime()) || (this.isDeleted = !0, this.deletedDateLabel = (0, We.vi)(It), this.deletedDateCtrl.setValue(It, {
          emitEvent: !1
        }), this.deletedTimeCtrl.setValue(le()(It).format("HH:mm"), {
          emitEvent: !1
        }), this.getControl(this.form, "deletedDatetimeSet")?.setValue(It));
      }
      if (Kt.deletionReason && this.getControl(this.form, "deletedReason")?.setValue(Kt.deletionReason, {
        emitEvent: !1
      }), !Vt.length) return void this.resetDaySpecificFormFields();
      const Pn = Kt.monitoringTreatmentTimes?.length ? Kt.monitoringTreatmentTimes : (0, We.SY)(Vt),
        pi = Kt.treatmentTime ? [(0, We.k4)(Kt.treatmentTime)] : [],
        xo = Pn.length ? Pn : pi.filter(Boolean);
      xo.length && (this.catheterTreatmentFormArray.clear(), xo.forEach(It => {
        this.catheterTreatmentFormArray.push(this.fb.group({
          catheterTreatmentTime: [It],
          userAddCatheterTreatmentTime: [null]
        }));
      }));
      const No = Kt.monitoringAssessments?.length ? Kt.monitoringAssessments : (0, We.N4)(Vt),
        Ko = null != Kt.placeAssessment && "" !== `${Kt.placeAssessment}`.trim() ? [`${Kt.placeAssessment}`] : [],
        Mi = No.length ? No : Ko;
      if (this.isPeripheral && Mi.length && (this.scaleAssessmentFormArray.clear(), Mi.forEach(It => {
        this.scaleAssessmentFormArray.push(this.fb.group({
          assessment: [It],
          userAddAssessment: [null]
        }));
      })), this.isCentral) {
        const It = this.asYesNoLabel(Kt.heparinInfo);
        It && this.getControl(this.form, "heparinMark")?.setValue(It, {
          emitEvent: !1
        });
      }
      if (this.isUrinary) {
        const It = this.asYesNoLabel(Kt.inflammation),
          At = this.asYesNoLabel(Kt.excretion);
        It && this.getControl(this.form, "inflammation")?.setValue(It, {
          emitEvent: !1
        }), At && this.getControl(this.form, "discharge")?.setValue(At, {
          emitEvent: !1
        }), Kt.urineColor && this.getControl(this.form, "urineColor")?.setValue(Kt.urineColor, {
          emitEvent: !1
        }), Kt.complication && this.getControl(this.form, "complications")?.setValue(Kt.complication, {
          emitEvent: !1
        }), Kt.extraInformation && this.getControl(this.form, "additionalInformation")?.setValue(Kt.extraInformation, {
          emitEvent: !1
        });
      }
    }
    resetDaySpecificFormFields() {
      this.catheterTreatmentFormArray.clear(), this.catheterTreatmentFormArray.push(this.createCatheterTreatment()), this.isPeripheral && (this.scaleAssessmentFormArray.clear(), this.scaleAssessmentFormArray.push(this.createScaleAssessment())), this.isCentral && this.getControl(this.form, "heparinMark")?.setValue(null, {
        emitEvent: !1
      }), this.isUrinary && ["inflammation", "discharge", "urineColor", "complications", "additionalInformation"].forEach(Kt => {
        this.getControl(this.form, Kt)?.setValue(null, {
          emitEvent: !1
        });
      });
    }
    asYesNoLabel(Kt) {
      if (null == Kt || "" === Kt) return null;
      if ("boolean" == typeof Kt) return Kt ? "Да" : "Нет";
      const Vt = `${Kt}`.trim().toLowerCase();
      return ["да", "true", "1", "y", "yes"].includes(Vt) ? "Да" : ["нет", "false", "0", "n", "no"].includes(Vt) ? "Нет" : `${Kt}`;
    }
    resolveTypeLabel(Kt) {
      return "string" == typeof Kt ? Kt : Kt?.type ? Kt.type : (0, We.XN)(Kt?.source?.catheterType || Kt?.source?.CateterType || Kt?.catheterType || Kt?.CateterType);
    }
    validateBeforeClose() {
      if (this.form.markAllAsTouched(), this.isDeleted) {
        const Kt = this.getControl(this.form, "deletedReason")?.value;
        if (!this.deletedDateCtrl.valid || !this.deletedTimeCtrl.valid || !Kt) return this.deletedDateCtrl.markAsTouched(), this.deletedTimeCtrl.markAsTouched(), this.getControl(this.form, "deletedReason")?.markAsTouched(), this.messageService.warning("Обязательные поля не заполнены!"), !1;
        if (this.getControl(this.form, "deletedDatetimeSet")?.value || this.mergeDeletedDateTime(this.deletedDateCtrl.value, this.deletedTimeCtrl.value), !this.getControl(this.form, "userDeleteCode")?.value) return this.messageService.error("Не удалось определить сотрудника для отметки об удалении"), !1;
      }
      return !(!this.validateTreatmentTimesAgainstInstall() || !this.validateCatheterTreatmentTimes());
    }
    validateTreatmentTimesAgainstInstall() {
      const Kt = this.getControl(this.form, "installDatetimeSet")?.value,
        Vt = Kt ? new Date(Kt) : null;
      if (!Vt || Number.isNaN(Vt.getTime())) return !0;
      const Pn = this.getControl(this.form, "monitoringDate")?.value || (0, We.Ii)(this.data?.monitoringDate || "");
      if (!Pn) return !0;
      let pi = !1,
        xo = !1;
      return this.catheterTreatmentFormArray.controls.forEach(No => {
        const Ko = this.getFormGroup(No).get("catheterTreatmentTime");
        if (!Ko) return;
        const Mi = `${Ko.value ?? ""}`.trim();
        if (!Mi) return;
        const [It, At] = Mi.split(":"),
          _n = Number(It),
          it = Number(At);
        void 0 === It || void 0 === At || Number.isNaN(_n) || Number.isNaN(it) || _n > 23 || it > 59 ? pi = !0 : le()(Pn).hours(_n).minutes(it).seconds(0).milliseconds(0).toDate().getTime() < Vt.getTime() && (xo = !0);
      }), pi ? (this.messageService.warning("Некорректный формат времени обработки, ожидается ЧЧ:ММ (00:00 - 23:59)"), !1) : !xo || (this.messageService.warning("Время обработки не может быть раньше времени установки катетера"), !1);
    }
    validateCatheterTreatmentTimes() {
      let Kt = !1;
      return this.catheterTreatmentFormArray.controls.forEach(Vt => {
        const Pn = this.getFormGroup(Vt).get("catheterTreatmentTime");
        Pn && (Pn.markAsTouched(), Pn.updateValueAndValidity(), Pn.invalid && (Kt = !0));
      }), !Kt || (this.messageService.warning("Не указано время обработки катетера"), !1);
    }
    patchMonitoringFormValue(Kt) {
      const {
        catheterTreatment: Vt,
        scaleAssessment: Pn,
        treatment: pi,
        ...xo
      } = Kt;
      this.form.patchValue(xo, {
        emitEvent: !1
      });
      const No = Vt || pi;
      Array.isArray(No) && No.length && (this.catheterTreatmentFormArray.clear(), No.forEach(Ko => {
        this.catheterTreatmentFormArray.push(this.fb.group({
          catheterTreatmentTime: [Ko?.catheterTreatmentTime ?? null],
          userAddCatheterTreatmentTime: [Ko?.userAddCatheterTreatmentTime ?? null]
        }));
      })), this.isPeripheral && Array.isArray(Pn) && Pn.length && (this.scaleAssessmentFormArray.clear(), Pn.forEach(Ko => {
        this.scaleAssessmentFormArray.push(this.fb.group({
          assessment: [Ko?.assessment ?? null],
          userAddAssessment: [Ko?.userAddAssessment ?? null]
        }));
      }));
    }
    onAssessmentPicked(Kt) {
      Promise.resolve().then(() => Kt.dropdown?.close());
    }
  }).ɵfac = function (Vt) {
    return new (Vt || zi)(e.Y36(B.qu), e.Y36(m.Rn), e.Y36(Re.k), e.Y36(G.Jv), e.Y36(st.Yg), e.Y36(e.sBO), e.Y36(q.oL), e.Y36(C.UM));
  }, zi.ɵcmp = e.Xpm({
    type: zi,
    selectors: [["catheter-monitoring"]],
    standalone: !0,
    features: [e.jDz],
    decls: 34,
    vars: 28,
    consts: [[1, "content-dialog-header"], [1, "header-label"], ["lu-button-icon", "", 1, "close-btn", 3, "click"], ["icon", "close", 3, "size"], [1, "expand-panel"], [1, "expand-panel__content", 3, "formGroup"], [1, "content-sizes__row-content"], [1, "expand-panel__main", 3, "ngStyle"], [1, "content-sizes", "content-sizes_install"], [1, "field-label", 3, "ngClass"], ["class", "content-sizes__row", 4, "ngIf"], [1, "expand-panel__row"], ["formArrayName", "scaleAssessment", "class", "expand-panel__field-size__assessment-field", 4, "ngIf"], ["class", "expand-panel__heparin-field", 4, "ngIf"], ["class", "urinary-fields", 3, "ngClass", 4, "ngIf"], ["class", "expand-panel__row", 3, "ngStyle", 4, "ngIf"], ["class", "expand-panel__field-size", 4, "ngIf"], ["lu-button-link", "", "color", "red", "class", "delete-button", 3, "ngClass", "click", 4, "ngIf"], ["class", "deleted-catheter-fields", 3, "ngClass", 4, "ngIf"], ["class", "adaptive-horizontal-border", 4, "ngIf"], [3, "ngClass"], ["formArrayName", "catheterTreatment", 1, "expand-panel__left-content"], [1, "expand-panel__left-content__left-header"], [1, "treatment-row-content"], [4, "ngFor", "ngForOf"], ["class", "form__group time-field-size", 4, "ngIf"], ["lu-button-link", "", "color", "blue", "class", "add-button", 3, "click", 4, "ngIf"], ["class", "action", 4, "ngIf"], [1, "content-sizes__row"], [1, "content-sizes__row__date-field"], [1, "form__group", "time-field-size"], [1, "time-field-size"], ["luInput", "", "luInputString", "", "luMask", "HH:MM", "placeholder", "чч:мм", 1, "time-field-size", 3, "formControl"], ["formArrayName", "scaleAssessment", 1, "expand-panel__field-size__assessment-field"], [4, "ngIf"], ["lu-button-link", "", "color", "blue", "class", "add-button__assessment-field", 3, "click", 4, "ngIf"], ["class", "form__group", 3, "formGroup", 4, "ngIf"], [1, "form__group", 3, "formGroup"], ["type", "autocomplete", "formControlName", "assessment", 1, "expand-panel__field-size__assessment-field__combobox"], ["assessmentCombobox", ""], [3, "items", "itemContent", "action", 4, "luData"], [3, "items", "itemContent", "action"], ["templateScaleAssessment", ""], ["lu-button-link", "", "color", "blue", 1, "add-button__assessment-field", 3, "click"], [1, "add-button__label"], [1, "add-button__label__plus", 2, "margin-left", "-6px"], [2, "margin-left", "-2px"], [1, "expand-panel__heparin-field"], ["formControlName", "heparinMark", "style", "margin-top: 8px; margin-bottom :16px", 4, "ngIf"], ["formControlName", "heparinMark", 2, "margin-top", "8px", "margin-bottom", "16px"], ["lu-segment-button", "", "luSegment", "", 3, "value", "click", 4, "ngFor", "ngForOf"], ["lu-segment-button", "", "luSegment", "", 3, "value", "click"], [1, "urinary-fields", 3, "ngClass"], ["formControlName", "inflammation", "style", "margin-top: 8px; margin-bottom :16px", 4, "ngIf"], ["class", "row-field", 4, "ngIf"], ["formControlName", "discharge", "style", "margin-top: 8px; margin-bottom :16px", 4, "ngIf"], ["formControlName", "inflammation", 2, "margin-top", "8px", "margin-bottom", "16px"], [1, "row-field"], ["formControlName", "discharge", 2, "margin-top", "8px", "margin-bottom", "16px"], [1, "expand-panel__row", 3, "ngStyle"], ["formControlName", "urineColor", "style", "margin-top: 8px; margin-bottom :16px", 4, "ngIf"], ["formControlName", "urineColor", 2, "margin-top", "8px", "margin-bottom", "16px"], [1, "expand-panel__field-size"], ["formControlName", "complications", "placeholder", "Введите или выберите из списка", 4, "ngIf"], ["style", "margin-top: -4px", 4, "ngIf"], ["formControlName", "complications", "placeholder", "Введите или выберите из списка"], [3, "items", "itemContent", 4, "luData"], [3, "items", "itemContent"], ["templateComplication", ""], [2, "margin-top", "-4px"], ["formControlName", "additionalInformation", "class", "expand-panel__field-size__textarea-size", "placeholder", "Введите текст", 3, "minRows", 4, "ngIf"], ["formControlName", "additionalInformation", "placeholder", "Введите текст", 1, "expand-panel__field-size__textarea-size", 3, "minRows"], ["lu-button-link", "", "color", "red", 1, "delete-button", 3, "ngClass", "click"], ["icon", "delete", 3, "size"], [1, "deleted-catheter-fields", 3, "ngClass"], [1, "content-sizes"], [1, "deleted-catheter-fields__deleted-reason", 3, "ngClass"], ["formControlName", "deletedReason", "placeholder", "Введите или выберите из списка", 4, "ngIf"], ["class", "content-sizes__culture-time deleted-catheter-fields__deleted-reason", 4, "ngIf"], ["type", "error", 4, "ngIf"], ["type", "error"], [1, "content-sizes__row", 2, "margin-top", "-4px"], ["formControlName", "deletedReason", "placeholder", "Введите или выберите из списка"], ["templateDeletedReason", ""], [1, "content-sizes__culture-time", "deleted-catheter-fields__deleted-reason"], ["luInput", "", "luInputString", "", "luMask", "HH:MM", "formControlName", "catheterCultureTime", "placeholder", "чч:мм", 1, "time-field-size"], [1, "adaptive-horizontal-border"], ["class", "form__group time-field-size", 3, "formGroup", 4, "ngIf"], [1, "form__group", "time-field-size", 3, "formGroup"], ["luInput", "", "luInputString", "", "luMask", "HH:MM", "formControlName", "catheterTreatmentTime", "placeholder", "чч:мм", 1, "time-field-size"], [4, "ngIf", "ngIfElse"], ["noTreatmentTimes", ""], ["lu-button-link", "", "color", "blue", 1, "add-button", 3, "click"], [1, "add-button__label__plus"], [2, "margin-right", "-11px"], [1, "action"], ["lu-button-outer", "", "size", "medium", "color", "red", 3, "ngClass", "click", 4, "ngIf"], ["lu-button-outer", "", "size", "medium", 3, "click"], ["lu-button-raised", "", "color", "blue", "size", "medium", 3, "click"], ["icon", "check-mse", 3, "size"], ["lu-button-outer", "", "size", "medium", "color", "red", 3, "ngClass", "click"]],
    template: function (Vt, Pn) {
      1 & Vt && (e.TgZ(0, "div", 0)(1, "span", 1), e._uU(2), e.qZA(), e.TgZ(3, "button", 2), e.NdJ("click", function () {
        return Pn.modalRef.close();
      }), e._UZ(4, "lu-svg-icon", 3), e.qZA()(), e.TgZ(5, "div", 4)(6, "form", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "span", 9), e._uU(11, "Дата и время установки"), e.qZA(), e.YNc(12, mt, 7, 2, "div", 10), e.YNc(13, ut, 5, 2, "div", 10), e.qZA(), e.TgZ(14, "div", 11), e.YNc(15, Ee, 7, 6, "div", 12), e.YNc(16, Xt, 5, 5, "div", 13), e.YNc(17, pt, 11, 13, "div", 14), e.qZA(), e.YNc(18, vt, 6, 8, "div", 15), e.YNc(19, Mn, 5, 5, "div", 16), e.YNc(20, ui, 5, 5, "div", 16), e.YNc(21, bi, 4, 4, "button", 17), e.YNc(22, jo, 12, 20, "div", 18), e.YNc(23, Go, 1, 0, "div", 19), e.qZA(), e._UZ(24, "div", 20), e.TgZ(25, "div", 21)(26, "span", 22), e._uU(27, "Обработка катетера"), e.qZA(), e.TgZ(28, "div", 23), e.YNc(29, fi, 2, 1, "div", 24), e.qZA(), e.YNc(30, ki, 4, 2, "div", 25), e.YNc(31, Ei, 6, 0, "button", 26), e.qZA()()(), e.YNc(32, Ji, 7, 2, "div", 27), e.YNc(33, Ao, 3, 0, "div", 27), e.qZA()), 2 & Vt && (e.xp6(2), e.hij(" Наблюдение за ", Pn.isUrinary ? "мочевым" : Pn.isPeripheral ? "периферическим" : "центральным", " катетером "), e.xp6(2), e.Q6J("size", 24), e.xp6(2), e.Q6J("formGroup", Pn.form), e.xp6(2), e.Q6J("ngStyle", e.VKq(22, Sr, !Pn.isTablet)), e.xp6(2), e.Q6J("ngClass", e.VKq(24, Ze, Pn.isViewMode)), e.xp6(2), e.Q6J("ngIf", !Pn.isViewMode), e.xp6(1), e.Q6J("ngIf", Pn.isViewMode), e.xp6(2), e.Q6J("ngIf", Pn.isPeripheral), e.xp6(1), e.Q6J("ngIf", !Pn.isPeripheral && !Pn.isUrinary), e.xp6(1), e.Q6J("ngIf", Pn.isUrinary), e.xp6(1), e.Q6J("ngIf", Pn.isUrinary), e.xp6(1), e.Q6J("ngIf", Pn.isUrinary), e.xp6(1), e.Q6J("ngIf", Pn.isUrinary), e.xp6(1), e.Q6J("ngIf", !Pn.isDeleted && !Pn.isViewMode), e.xp6(1), e.Q6J("ngIf", Pn.isDeleted || Pn.isViewMode), e.xp6(1), e.Q6J("ngIf", Pn.isTablet), e.xp6(1), e.Q6J("ngClass", e.VKq(26, us, !Pn.isTablet)), e.xp6(5), e.Q6J("ngForOf", Pn.catheterTreatmentFormArray.controls), e.xp6(1), e.Q6J("ngIf", Pn.isViewMode), e.xp6(1), e.Q6J("ngIf", !Pn.isViewMode), e.xp6(1), e.Q6J("ngIf", !Pn.isViewMode), e.xp6(1), e.Q6J("ngIf", Pn.isViewMode && !Pn.isDeletedCatheter));
    },
    dependencies: [a.ez, a.mk, a.sg, a.O5, a.PC, y.F, y.w, M.o, M.k, F.W1, F.mc, te.j, v.n, v.m, E.X, E.l, Le.u, Le.g, ke.c, ke.l, J.f, J.L, fe.R, ye.c, ye.H, ae.LA, ae.HY, Y.Ki, Y.Bf, j.y8, j.K2, W.P, W.X, b.h, b.q, B.UX, B._Y, B.Fj, B.JJ, B.JL, B.oH, B.sg, B.u, B.CE, pe.t, pe.y],
    styles: ["@media ((min-width: 600px) and (max-width: 960px)){[_nghost-%COMP%]{display:block;height:100vh;max-height:100vh}}button[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #CCCCCC;margin-left:8px;margin-top:-8px}.close-btn[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #b3b3b3;margin:0}.header-label[_ngcontent-%COMP%]{font-size:20px;font-weight:600;height:28px;color:#333}@media ((min-width: 600px) and (max-width: 960px)){.header-label[_ngcontent-%COMP%]{font-size:17px;height:24px}}.content-sizes[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;width:176px;margin-bottom:24px;font-size:15px}.content-sizes_install[_ngcontent-%COMP%]{width:auto;min-width:176px}.content-sizes__culture-time[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-top:24px}.content-sizes__row-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 0 176px;column-gap:24px;justify-content:start;align-items:start}@media ((min-width: 600px) and (max-width: 960px)){.content-sizes__row-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:16px}}.content-sizes__row[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:16px}.content-sizes__row__date-field[_ngcontent-%COMP%]{min-width:52px;font-size:15px;color:#4d4d4d;white-space:nowrap}.content-sizes__label[_ngcontent-%COMP%]{width:136px!important}.expand-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:24px;height:830px}@media ((min-width: 600px) and (max-width: 960px)){.expand-panel[_ngcontent-%COMP%]{margin:16px 16px 0;height:calc(100vh - 72px);width:calc(100vw - 32px)}}.expand-panel__content[_ngcontent-%COMP%]{gap:16px}@media ((min-width: 600px) and (max-width: 960px)){.expand-panel__content[_ngcontent-%COMP%]{height:calc(100vh - 240px);padding-top:8px;overflow-y:auto;margin-bottom:0}}.expand-panel__main[_ngcontent-%COMP%]{flex:0 0 auto;min-width:0}.expand-panel__left-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;height:806px;margin-left:0;width:176px;flex-shrink:0}@media ((min-width: 600px) and (max-width: 960px)){.expand-panel__left-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;height:auto;width:100%;margin-left:0;margin-top:24px!important}}.expand-panel__left-content__left-header[_ngcontent-%COMP%]{font-size:15px;font-weight:400;color:#757575;height:20px;margin-top:-1px}.expand-panel__left-content[_ngcontent-%COMP%]   .time-field-size[_ngcontent-%COMP%]{width:80px}.expand-panel__heparin-field[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:566px}.expand-panel__row[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:32px;font-size:15px;margin-bottom:24px}.expand-panel__field-size[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;width:566px;margin-bottom:24px}.expand-panel__field-size__textarea-size[_ngcontent-%COMP%]     .lu-input-container{height:64px!important}.expand-panel__field-size__assessment-field[_ngcontent-%COMP%]{width:566px}.expand-panel__field-size__assessment-field__combobox[_ngcontent-%COMP%]{width:172px;margin-top:8px}@media ((min-width: 600px) and (max-width: 960px)){.expand-panel__field-size[_ngcontent-%COMP%]{width:calc(100vw - 48px)}}.content-dialog-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:16px 24px;height:60px;box-shadow:0 1px 4px #00000014}@media ((min-width: 600px) and (max-width: 960px)){.content-dialog-header[_ngcontent-%COMP%]{height:56px;padding:16px}}.catheter-name-content[_ngcontent-%COMP%]{margin-top:8px;padding:16px 256px 16px 16px;background:#F2F2F2;width:100%}.action[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:16px;height:72px;justify-content:flex-end;justify-items:end;margin-top:-8px;margin-right:-8px;align-items:center}.action[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{margin-top:-3px;margin-left:-18px;--lu-svg-icon-color: white}@media ((min-width: 600px) and (max-width: 960px)){.action[_ngcontent-%COMP%]{margin-bottom:0!important;margin-top:2px;margin-left:-16px;border-top:1px solid #E6E6E6;width:100vw;padding-right:16px}}.time-field-size[_ngcontent-%COMP%]{width:80px}.catheter-type[_ngcontent-%COMP%]{height:38px;margin-top:8px}.add-button[_ngcontent-%COMP%]{width:129px;min-width:129px;margin-top:-8px;--lu-button-hover-background: var(--lu-blue-20);--lu-button-hover-text: var(--lu-blue-140);--lu-button-active-background: var(--lu-blue-30);--lu-button-active-text: var(--lu-blue-140)}.add-button[_ngcontent-%COMP%]     .lu-button-wrapper{padding:4px 8px;border-radius:4px}.add-button__assessment-field[_ngcontent-%COMP%]{margin-top:12px;--lu-button-hover-background: var(--lu-blue-20);--lu-button-hover-text: var(--lu-blue-140);--lu-button-active-background: var(--lu-blue-30);--lu-button-active-text: var(--lu-blue-140)}.add-button__assessment-field[_ngcontent-%COMP%]     .lu-button-wrapper{padding:4px 8px;border-radius:4px}@media ((min-width: 600px) and (max-width: 960px)){.add-button__assessment-field[_ngcontent-%COMP%]{margin-top:18px}}.add-button__label[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:12px;font-size:15px;font-weight:400;padding-left:0;margin-top:0;color:inherit}.add-button__label__plus[_ngcontent-%COMP%]{font-size:20px;font-weight:600;margin-left:-8px;color:inherit}.delete-button[_ngcontent-%COMP%]{font-size:14px;font-weight:600;display:flex;flex-direction:row;align-items:center;gap:8px;margin-top:28px;margin-left:-8px;color:#cd3b2b}.delete-button[_ngcontent-%COMP%]     lu-svg-icon{--lu-svg-icon-color: #cd3b2b;margin:0}.delete-button__central[_ngcontent-%COMP%]{margin-top:-16px}.deleted-catheter-fields[_ngcontent-%COMP%]{width:566px;height:100%;box-sizing:border-box;background-color:#f2f2f2;display:flex;flex-direction:column;gap:16px;padding:16px}.deleted-catheter-fields[_ngcontent-%COMP%]   .content-sizes[_ngcontent-%COMP%]{margin-bottom:0}@media ((min-width: 600px) and (max-width: 960px)){.deleted-catheter-fields[_ngcontent-%COMP%]{width:calc(100vw - 48px);height:auto;min-height:192px}}.deleted-catheter-fields__central[_ngcontent-%COMP%]{margin-top:-22px!important}.deleted-catheter-fields__assessment-field[_ngcontent-%COMP%]{gap:16px;height:192px}.deleted-catheter-fields__assessment-field__is-disabled[_ngcontent-%COMP%]{margin-top:24px}.deleted-catheter-fields__deleted-reason[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.deleted-catheter-fields__deleted-reason__margin-field[_ngcontent-%COMP%]{margin-top:0}.adaptive-horizontal-border[_ngcontent-%COMP%]{width:100%;border-top:1px solid #F2F2F2;margin-top:20px}.vertical-border[_ngcontent-%COMP%]{align-self:stretch;border-right:1px solid #F2F2F2;height:auto;min-height:758px;width:0;margin:0}.annulation-button[_ngcontent-%COMP%]{padding-right:18px}.text-color[_ngcontent-%COMP%]{color:#757575;font-size:13px}.field-label[_ngcontent-%COMP%]{color:#757575;font-size:15px;font-weight:400}.deleted-size[_ngcontent-%COMP%]{height:144px}.row-field[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:4px;font-size:15px}.disabled-urinary-fields[_ngcontent-%COMP%]{margin-top:-4px;display:flex;flex-direction:row;gap:24px;height:48px!important}.urinary-fields[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:32px;height:70px}.treatment-row-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:16px;flex-wrap:wrap;width:100%}"]
  }), zi);
  Ps = (0, t.gn)([(0, T.c)()], Ps);
  var hs = i(39646),
    oi = i(95698),
    yo = i(54004),
    Qi = i(70262),
    Qo = i(60515),
    Kr = i(18505),
    _s = i(41396),
    ra = i(44688),
    Or = i(11481),
    Fs = i(30854),
    xa = i(36928),
    rs = i(59250),
    Js = i(70823),
    ho = i(15091),
    uo = i(62104);
  const ri = ["topScroll"],
    Yt = ["datesScroll"],
    jt = ["tableScrollContainer"],
    hn = ["topScrollbar"],
    tn = ["tableContent"],
    di = ["valuesScroll"];
  function Gn(gi, Kt) {
    1 & gi && e._UZ(0, "span", 37);
  }
  function dn(gi, Kt) {
    if (1 & gi && (e.ynx(0), e.YNc(1, Gn, 1, 0, "span", 35), e.TgZ(2, "span", 36), e._uU(3), e.qZA(), e.BQk()), 2 & gi) {
      const Vt = Kt.$implicit,
        Pn = Kt.index;
      e.xp6(1), e.Q6J("ngIf", Pn > 0), e.xp6(2), e.Oqu(Vt);
    }
  }
  function wo(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "div", 38)(1, "div", 39), e.NdJ("click", function () {
        e.CHM(Vt), e.oxw();
        const pi = e.MAs(24);
        return e.oxw().openCatheterDialog("peripheral"), e.KtG(pi.close());
      }), e._uU(2, " Периферический катетер "), e.qZA(), e.TgZ(3, "div", 39), e.NdJ("click", function () {
        e.CHM(Vt), e.oxw();
        const pi = e.MAs(24);
        return e.oxw().openCatheterDialog("urinary"), e.KtG(pi.close());
      }), e._uU(4, " Мочевой катетер "), e.qZA()();
    }
  }
  function Ro(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "lu-chip", 40)(1, "span", 41), e._uU(2), e.qZA()()), 2 & gi) {
      const Vt = Kt.$implicit;
      e.Q6J("value", Vt.value), e.xp6(2), e.Oqu(Vt.label);
    }
  }
  function _r(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 42)(1, "span", 43), e._uU(2), e.ALo(3, "luDateFormatter"), e.qZA(), e.TgZ(4, "span", 44), e._uU(5), e.ALo(6, "luDateFormatter"), e.qZA()()), 2 & gi) {
      const Vt = Kt.$implicit,
        Pn = e.oxw(2);
      e.ekj("date-cell_weekend", Pn.isWeekendDateStr(Vt))("date-cell_highlighted", Pn.isHighlighted(Vt)), e.xp6(2), e.Oqu(e.xi3(3, 6, Pn.parseHeaderDate(Vt), "d MMM")), e.xp6(3), e.Oqu(e.xi3(6, 9, Pn.parseHeaderDate(Vt), "eee"));
    }
  }
  function qr(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "span", 56), e._uU(1), e.qZA()), 2 & gi) {
      const Vt = e.oxw().$implicit;
      let Pn;
      e.xp6(1), e.Oqu(null == (Pn = Vt.source) ? null : Pn.locus);
    }
  }
  function Ts(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 51)(1, "span", 52), e._uU(2, "Удален"), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & gi) {
      const Vt = e.oxw().$implicit,
        Pn = e.oxw(2);
      let pi;
      e.xp6(4), e.Oqu(Pn.formatInstallDate(null == (pi = Vt.source) ? null : pi.deletionTime));
    }
  }
  function js(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 51)(1, "span", 52), e._uU(2, "Посев"), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & gi) {
      const Vt = e.oxw().$implicit,
        Pn = e.oxw(2);
      let pi;
      e.xp6(4), e.Oqu(Pn.formatInstallDate(null == (pi = Vt.source) ? null : pi.sowing));
    }
  }
  function ws(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 63), e._uU(1), e.qZA()), 2 & gi) {
      const Vt = Kt.$implicit,
        Pn = e.oxw(2).$implicit,
        pi = e.oxw(3);
      e.ekj("value-item_deviation", pi.isUrineColorDeviation(Vt, Pn.parameterName)), e.xp6(1), e.hij(" ", pi.formatCellValue(Vt, Pn.parameterName), " ");
    }
  }
  function Us(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "div", 60), e.NdJ("click", function () {
        const pi = e.CHM(Vt),
          xo = pi.index,
          No = pi.$implicit,
          Ko = e.oxw(2).$implicit,
          Mi = e.oxw(2);
        return e.KtG(Mi.openMonitoringFromSheet(Mi.dates[xo], Ko, No));
      }), e.TgZ(1, "div", 61), e.YNc(2, ws, 2, 3, "div", 62), e.qZA()();
    }
    if (2 & gi) {
      const Vt = Kt.$implicit,
        Pn = Kt.index,
        pi = e.oxw(4);
      e.ekj("catheter-date-cell_highlighted", pi.isHighlighted(pi.dates[Pn]))("catheter-date-cell_clickable", !0), e.xp6(2), e.Q6J("ngForOf", Vt);
    }
  }
  function Ws(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 57)(1, "div", 58)(2, "span"), e._uU(3), e.qZA()(), e.YNc(4, Us, 3, 5, "div", 59), e.qZA()), 2 & gi) {
      const Vt = Kt.$implicit;
      e.xp6(3), e.Oqu(Vt.parameterName), e.xp6(1), e.Q6J("ngForOf", Vt.values);
    }
  }
  function sa(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 45)(1, "div", 46)(2, "div", 47)(3, "span", 48), e._uU(4), e.qZA(), e.YNc(5, qr, 2, 1, "span", 49), e.qZA(), e.TgZ(6, "div", 50)(7, "div", 51)(8, "span", 52), e._uU(9, "Установлен"), e.qZA(), e.TgZ(10, "span"), e._uU(11), e.qZA()(), e.YNc(12, Ts, 5, 1, "div", 53), e.YNc(13, js, 5, 1, "div", 53), e.TgZ(14, "div", 51)(15, "span", 52), e._uU(16, "Статус"), e.qZA(), e.TgZ(17, "span"), e._uU(18), e.qZA()()()(), e.TgZ(19, "div", 54), e.YNc(20, Ws, 5, 2, "div", 55), e.qZA()()), 2 & gi) {
      const Vt = Kt.$implicit,
        Pn = e.oxw(2);
      let pi, xo, No, Ko, Mi, It;
      e.xp6(2), e.ekj("catheter-description__time__value_overdue", Pn.isInstallOverdue((null == (pi = Vt.source) ? null : pi.installDt) || (null == (pi = Vt.source) ? null : pi.installDatetimeSet))), e.Q6J("luTooltip", Pn.getInstallOverdueTooltip((null == (xo = Vt.source) ? null : xo.installDt) || (null == (xo = Vt.source) ? null : xo.installDatetimeSet))), e.xp6(2), e.Oqu(Vt.typeLabel), e.xp6(1), e.Q6J("ngIf", null == (No = Vt.source) ? null : No.locus), e.xp6(6), e.Oqu(Pn.formatInstallDate((null == (Ko = Vt.source) ? null : Ko.installDt) || (null == (Ko = Vt.source) ? null : Ko.installDatetimeSet))), e.xp6(1), e.Q6J("ngIf", null == (Mi = Vt.source) ? null : Mi.deletionTime), e.xp6(1), e.Q6J("ngIf", null == (It = Vt.source) ? null : It.sowing), e.xp6(5), e.Oqu(Vt.active ? "Активный" : "Завершенный"), e.xp6(2), e.Q6J("ngForOf", Vt.rows);
    }
  }
  function ha(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.ynx(0), e.TgZ(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "span", 6)(6, "span", 7), e._uU(7), e.qZA(), e._UZ(8, "span", 8)(9, "lu-svg-icon", 9), e.qZA(), e.TgZ(10, "span", 10)(11, "span", 11), e._uU(12, "||"), e.qZA(), e.TgZ(13, "span", 12), e._uU(14, "A"), e.qZA(), e.YNc(15, dn, 4, 2, "ng-container", 13), e.qZA()()(), e.TgZ(16, "div", 14)(17, "button", 15), e.NdJ("click", function () {
        e.CHM(Vt);
        const pi = e.MAs(24);
        return e.KtG(pi.toggle());
      }), e.TgZ(18, "span", 16), e._uU(19, "+"), e.qZA(), e.TgZ(20, "span", 17), e._uU(21, "Установить катетер"), e.qZA(), e._UZ(22, "lu-svg-icon", 18), e.TgZ(23, "lu-dropdown", 19, 20), e.YNc(25, wo, 5, 0, "ng-template", null, 21, e.W1O), e.qZA()(), e.TgZ(27, "button", 22), e.NdJ("click", function () {
        e.CHM(Vt);
        const pi = e.oxw();
        return e.KtG(pi.close());
      }), e._UZ(28, "lu-svg-icon", 23), e.qZA()()(), e._UZ(29, "div", 24), e.TgZ(30, "div", 25)(31, "div", 26)(32, "div", 27)(33, "span", 28), e._uU(34, "Лист наблюдения за катетерами"), e.qZA(), e.TgZ(35, "lu-chips-group", 29), e.YNc(36, Ro, 3, 2, "lu-chip", 30), e.qZA()(), e.TgZ(37, "div", 31), e.YNc(38, _r, 7, 12, "div", 32), e.qZA()(), e.TgZ(39, "div", 33), e.YNc(40, sa, 21, 10, "div", 34), e.qZA()()(), e.BQk();
    }
    if (2 & gi) {
      const Vt = e.MAs(24),
        Pn = e.MAs(26),
        pi = e.oxw();
      e.xp6(7), e.Oqu(null == pi.data || null == pi.data.careCase ? null : pi.data.careCase.fullName), e.xp6(2), e.Q6J("size", 24), e.xp6(6), e.Q6J("ngForOf", pi.patientDescription), e.xp6(7), e.Q6J("size", 16)("luChevronRotate", Vt), e.xp6(1), e.Q6J("content", Pn)("withArrow", !1), e.xp6(5), e.Q6J("size", 24), e.xp6(3), e.Q6J("formGroup", pi.filtersForm), e.xp6(5), e.Q6J("ngForOf", pi.cathetersStatus)("ngForTrackBy", pi.trackByOptionValue), e.xp6(2), e.Q6J("ngForOf", pi.dates), e.xp6(2), e.Q6J("ngForOf", pi.desktopBlocks);
    }
  }
  function ua(gi, Kt) {
    1 & gi && e._UZ(0, "span", 37);
  }
  function da(gi, Kt) {
    if (1 & gi && (e.ynx(0), e.YNc(1, ua, 1, 0, "span", 35), e.TgZ(2, "span", 36), e._uU(3), e.qZA(), e.BQk()), 2 & gi) {
      const Vt = Kt.$implicit,
        Pn = Kt.index;
      e.xp6(1), e.Q6J("ngIf", Pn > 0), e.xp6(2), e.Oqu(Vt);
    }
  }
  function na(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "lu-chip", 40)(1, "span", 41), e._uU(2), e.qZA()()), 2 & gi) {
      const Vt = Kt.$implicit;
      e.Q6J("value", Vt.value), e.xp6(2), e.Oqu(Vt.label);
    }
  }
  function Qs(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 85)(1, "span", 43), e._uU(2), e.ALo(3, "luDateFormatter"), e.qZA(), e.TgZ(4, "span", 44), e._uU(5), e.ALo(6, "luDateFormatter"), e.qZA()()), 2 & gi) {
      const Vt = Kt.$implicit,
        Pn = e.oxw(2);
      e.ekj("date-cell_weekend", Pn.isWeekendDateStr(Vt)), e.xp6(2), e.Oqu(e.xi3(3, 6, Pn.parseHeaderDate(Vt), "d MMM")), e.xp6(2), e.ekj("date-cell_weekend", Pn.isWeekendDateStr(Vt)), e.xp6(1), e.Oqu(e.xi3(6, 9, Pn.parseHeaderDate(Vt), "EE"));
    }
  }
  function ma(gi, Kt) {
    1 & gi && e._UZ(0, "span", 95);
  }
  function Xs(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 91)(1, "span", 52), e._uU(2, "Удален"), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & gi) {
      const Vt = e.oxw().$implicit,
        Pn = e.oxw(2);
      let pi;
      e.xp6(4), e.Oqu(Pn.formatInstallDate(null == (pi = Vt.source) ? null : pi.deletionTime));
    }
  }
  function Ks(gi, Kt) {
    1 & gi && e._UZ(0, "span", 95);
  }
  function Va(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 91)(1, "span", 52), e._uU(2, "Посев"), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & gi) {
      const Vt = e.oxw().$implicit,
        Pn = e.oxw(2);
      let pi;
      e.xp6(4), e.Oqu(Pn.formatInstallDate(null == (pi = Vt.source) ? null : pi.sowing));
    }
  }
  function ba(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 63), e._uU(1), e.qZA()), 2 & gi) {
      const Vt = Kt.$implicit,
        Pn = e.oxw(2).$implicit,
        pi = e.oxw(3);
      e.ekj("value-item_deviation", pi.isUrineColorDeviation(Vt, Pn.parameterName)), e.xp6(1), e.hij(" ", pi.formatCellValue(Vt, Pn.parameterName), " ");
    }
  }
  function qs(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "div", 100), e.NdJ("click", function () {
        const pi = e.CHM(Vt),
          xo = pi.index,
          No = pi.$implicit,
          Ko = e.oxw(2).$implicit,
          Mi = e.oxw(2);
        return e.KtG(Mi.openMonitoringFromSheet(Mi.dates[xo], Ko, No));
      }), e.TgZ(1, "div", 61), e.YNc(2, ba, 2, 3, "div", 62), e.qZA()();
    }
    if (2 & gi) {
      const Vt = Kt.$implicit,
        Pn = Kt.index,
        pi = e.oxw(4);
      e.ekj("highlighted-column", pi.isHighlighted(pi.dates[Pn])), e.xp6(2), e.Q6J("ngForOf", Vt);
    }
  }
  function Ri(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 96)(1, "div", 97), e._uU(2), e.qZA(), e.TgZ(3, "div", 98), e.YNc(4, qs, 3, 3, "div", 99), e.qZA()()), 2 & gi) {
      const Vt = Kt.$implicit;
      e.xp6(2), e.Oqu(Vt.parameterName), e.xp6(2), e.Q6J("ngForOf", Vt.values);
    }
  }
  function $o(gi, Kt) {
    if (1 & gi && (e.TgZ(0, "div", 86)(1, "div", 87)(2, "div", 88), e._UZ(3, "h4", 89), e.TgZ(4, "div", 90)(5, "div", 91)(6, "span", 52), e._uU(7, "Установлен"), e.qZA(), e.TgZ(8, "span"), e._uU(9), e.qZA()(), e.YNc(10, ma, 1, 0, "span", 92), e.YNc(11, Xs, 5, 1, "div", 93), e.YNc(12, Ks, 1, 0, "span", 92), e.YNc(13, Va, 5, 1, "div", 93), e.qZA()()(), e.YNc(14, Ri, 5, 2, "div", 94), e.qZA()), 2 & gi) {
      const Vt = Kt.$implicit,
        Pn = e.oxw(2);
      let pi, xo, No, Ko, Mi, It;
      e.xp6(3), e.ekj("fixed-block-header__value_overdue", Pn.isInstallOverdue((null == (pi = Vt.source) ? null : pi.installDt) || (null == (pi = Vt.source) ? null : pi.installDatetimeSet))), e.Q6J("innerHTML", Vt.title, e.oJD), e.xp6(6), e.Oqu(Pn.formatInstallDate((null == (xo = Vt.source) ? null : xo.installDt) || (null == (xo = Vt.source) ? null : xo.installDatetimeSet))), e.xp6(1), e.Q6J("ngIf", null == (No = Vt.source) ? null : No.deletionTime), e.xp6(1), e.Q6J("ngIf", null == (Ko = Vt.source) ? null : Ko.deletionTime), e.xp6(1), e.Q6J("ngIf", null == (Mi = Vt.source) ? null : Mi.sowing), e.xp6(1), e.Q6J("ngIf", null == (It = Vt.source) ? null : It.sowing), e.xp6(1), e.Q6J("ngForOf", Vt.rows);
    }
  }
  function ci(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "div", 38)(1, "div", 39), e.NdJ("click", function () {
        e.CHM(Vt), e.oxw();
        const pi = e.MAs(42);
        return e.oxw().openCatheterDialog("peripheral"), e.KtG(pi.close());
      }), e._uU(2, " Периферический катетер "), e.qZA(), e.TgZ(3, "div", 39), e.NdJ("click", function () {
        e.CHM(Vt), e.oxw();
        const pi = e.MAs(42);
        return e.oxw().openCatheterDialog("urinary"), e.KtG(pi.close());
      }), e._uU(4, " Мочевой катетер "), e.qZA()();
    }
  }
  function Gi(gi, Kt) {
    if (1 & gi) {
      const Vt = e.EpF();
      e.TgZ(0, "div", 64)(1, "div", 65)(2, "div", 3)(3, "span", 6)(4, "span", 7), e._uU(5), e.qZA(), e._UZ(6, "span", 8)(7, "lu-svg-icon", 9), e.qZA(), e.TgZ(8, "button", 66), e.NdJ("click", function () {
        e.CHM(Vt);
        const pi = e.oxw();
        return e.KtG(pi.close());
      }), e._UZ(9, "lu-svg-icon", 23), e.qZA()()(), e.TgZ(10, "div", 67)(11, "div", 68)(12, "span", 10)(13, "span", 11), e._uU(14, "||"), e.qZA(), e.TgZ(15, "span", 12), e._uU(16, "A"), e.qZA(), e.YNc(17, da, 4, 2, "ng-container", 13), e.qZA()()(), e.TgZ(18, "div", 26)(19, "div", 69)(20, "span", 28), e._uU(21, "Лист наблюдения за катетерами"), e.qZA(), e.TgZ(22, "lu-chips-group", 29), e.YNc(23, na, 3, 2, "lu-chip", 30), e.qZA()()(), e.TgZ(24, "div", 70, 71), e.NdJ("scroll", function (pi) {
        e.CHM(Vt);
        const xo = e.oxw();
        return e.KtG(xo.onTableScroll(pi));
      }), e.TgZ(26, "div", 72, 73), e.NdJ("scroll", function (pi) {
        e.CHM(Vt);
        const xo = e.oxw();
        return e.KtG(xo.onTopScrollbarScroll(pi));
      }), e._UZ(28, "div", 74), e.qZA(), e.TgZ(29, "div", 75, 76)(31, "div", 77), e._UZ(32, "div", 78), e.TgZ(33, "div", 79), e.YNc(34, Qs, 7, 12, "div", 80), e.qZA()(), e.YNc(35, $o, 15, 9, "div", 81), e.qZA()(), e.TgZ(36, "button", 82), e.NdJ("click", function () {
        e.CHM(Vt);
        const pi = e.MAs(42);
        return e.KtG(pi.toggle());
      }), e._UZ(37, "lu-svg-icon", 83), e.TgZ(38, "span", 17), e._uU(39, "Установить катетер"), e.qZA(), e._UZ(40, "lu-svg-icon", 18), e.TgZ(41, "lu-dropdown", 84, 20), e.YNc(43, ci, 5, 0, "ng-template", null, 21, e.W1O), e.qZA()()();
    }
    if (2 & gi) {
      const Vt = e.MAs(42),
        Pn = e.MAs(44),
        pi = e.oxw();
      e.xp6(5), e.Oqu(null == pi.data || null == pi.data.careCase ? null : pi.data.careCase.fullName), e.xp6(2), e.Q6J("size", 24), e.xp6(2), e.Q6J("size", 24), e.xp6(8), e.Q6J("ngForOf", pi.patientDescription), e.xp6(1), e.Q6J("formGroup", pi.filtersForm), e.xp6(5), e.Q6J("ngForOf", pi.cathetersStatus)("ngForTrackBy", pi.trackByOptionValue), e.xp6(5), e.Udp("width", pi.tableContentWidth, "px"), e.xp6(6), e.Q6J("ngForOf", pi.dates), e.xp6(1), e.Q6J("ngForOf", pi.blocks), e.xp6(2), e.Q6J("size", 16), e.xp6(3), e.Q6J("size", 16)("luChevronRotate", Vt), e.xp6(1), e.Q6J("content", Pn)("withArrow", !1)("borderOffset", 8);
    }
  }
  let Fn = ((Io = class {
    constructor(Kt, Vt, Pn, pi, xo, No, Ko, Mi) {
      this._data = Kt, this.modalService = Vt, this.breakpointObserver = Pn, this.sanitizer = pi, this.messageService = xo, this.cdr = No, this.cathetersCompositionService = Ko, this.catheterController = Mi, this.modalRef = (0, e.f3M)(m.Rn), this.catTypes = x.yR, this.isTablet = !1, this.changed = !1, this.dates = [], this.blocks = [], this.allRows = [], this.filteredElements = [], this.totalContentWidth = "100%", this.leftColumnWidth = 180, this.highlightedDates = [], this.apiCatheters = [], this.tableContentWidth = 0, this.isSyncingScroll = !1, this.catheterType = x.yR, this.cathetersStatus = [{
        value: "all",
        label: "Все"
      }, {
        value: "active",
        label: "Активные"
      }, {
        value: "completed",
        label: "Завершенные"
      }], this.filtersForm = new B.cw({
        status: new B.NI(["all"])
      }), this.data = (0, u.yE)(x.QL, Kt);
    }
    ngOnInit() {
      this.breakpointObserver.observe(R.ok).pipe((0, T.t)(this)).subscribe(Kt => {
        this.isTablet = Kt.matches, this.cdr.markForCheck();
      }), this.calculateHighlightDates(), this.loadObservationData(), this.filtersForm.get("status")?.valueChanges.pipe((0, T.t)(this)).subscribe(() => {
        this.applyStatusFilter(), this.cdr.markForCheck();
      });
    }
    ngAfterViewChecked() {
      if (this.tableContent?.nativeElement) {
        const Kt = this.tableContent.nativeElement.scrollWidth;
        this.tableContentWidth !== Kt && setTimeout(() => this.tableContentWidth = Kt, 0);
      }
    }
    onTableScroll(Kt) {
      this.isSyncingScroll || (this.isSyncingScroll = !0, this.topScrollbar?.nativeElement && (this.topScrollbar.nativeElement.scrollLeft = Kt.target.scrollLeft), this.isSyncingScroll = !1);
    }
    onTopScrollbarScroll(Kt) {
      this.isSyncingScroll || (this.isSyncingScroll = !0, this.tableScrollContainer?.nativeElement && (this.tableScrollContainer.nativeElement.scrollLeft = Kt.target.scrollLeft), this.isSyncingScroll = !1);
    }
    resolveSheetCareCaseId() {
      return this.cathetersCompositionService.resolveCareCaseId(this.data) || this.cathetersCompositionService.resolveCareCaseId({
        careCase: this.data?.careCase
      }) || this.cathetersCompositionService.resolveCareCaseId(this._data);
    }
    fetchCathetersByCareCaseId() {
      const Kt = this.resolveSheetCareCaseId();
      return Kt ? this.catheterController.findCathetersByCareCaseId(Kt).pipe((0, oi.q)(1), (0, yo.U)(Vt => Array.isArray(Vt) ? Vt : null), (0, yo.U)(Vt => Vt && Vt.filter(Pn => !this.isFutureInstall(Pn.installDt))), (0, Qi.K)(Vt => (console.warn("[Catheters] FindCathetersByCareCaseId failed, fallback to index", Vt), (0, hs.of)(null)))) : (console.warn("[Catheters] FindCathetersByCareCaseId skipped: careCaseId is empty"), (0, hs.of)(null));
    }
    applyFindItems(Kt) {
      const Vt = () => {
        this.apiCatheters = [];
        const Pn = (0, We.EN)(this.data).filter(pi => !this.isFutureInstall(pi?.installDt));
        this.setRows((0, We.F1)(Pn));
      };
      if (Array.isArray(Kt)) {
        this.apiCatheters = Kt;
        try {
          this.setRows((0, We.AS)(Kt));
        } catch (Pn) {
          return console.error("[Catheters] buildObservationRowsFromApi failed", Pn), void Vt();
        }
        this.cdr.detectChanges();
      } else Vt();
    }
    loadObservationData() {
      this.fetchCathetersByCareCaseId().pipe((0, T.t)(this)).subscribe(Kt => this.applyFindItems(Kt));
    }
    resolveApiSource(Kt) {
      const Vt = Kt.source;
      if (!this.apiCatheters.length) return Kt.source;
      if (Vt?.catheterId) {
        const It = this.apiCatheters.find(At => At.catheterId === Vt.catheterId);
        if (It) return It;
      }
      const Pn = Vt?.protocolId || Vt?.compositionUid || Vt.CompositionUid || Vt.cuid;
      if (Pn) {
        const It = this.apiCatheters.find(At => At.protocolId === Pn || At.compositionUid === Pn);
        if (It) return It;
      }
      const pi = Vt?.installDt || Vt.installDatetimeSet || Vt.protocoldate,
        xo = pi ? new Date(pi).getTime() : NaN,
        No = `${Vt?.locus || ""}`.trim().toLowerCase(),
        Ko = (0, We.jj)(Vt?.catheterType || Vt.CateterType || Kt.typeLabel);
      return this.apiCatheters.find(It => {
        const At = (0, We.jj)(It.catheterType) === Ko,
          _n = `${It.locus || ""}`.trim().toLowerCase() === No,
          it = It.installDt ? new Date(It.installDt).getTime() : NaN,
          _e = Number.isFinite(xo) && Number.isFinite(it) && xo === it;
        return At && _n && _e;
      }) || Kt.source;
    }
    setRows(Kt) {
      this.allRows = Kt, this.applyStatusFilter(), this.cdr.markForCheck();
    }
    resolveStatusFilter() {
      const Kt = this.filtersForm.get("status")?.value,
        Vt = Array.isArray(Kt) ? Kt[0] : Kt;
      return "active" === Vt || "completed" === Vt ? Vt : "all";
    }
    applyStatusFilter() {
      const Kt = this.resolveStatusFilter();
      this.filteredElements = this.allRows.filter(xo => "active" === Kt ? xo.active : "completed" !== Kt || !xo.active);
      const Vt = new Set();
      this.filteredElements.forEach(xo => {
        xo.values.forEach(No => {
          No?.date && Vt.add(No.date);
        }), this.addInstallToEndDateRange(xo, Vt);
      }), this.filteredElements.some(xo => xo.active) && this.highlightedDates.forEach(xo => Vt.add(xo));
      const Pn = new Date().getFullYear(),
        pi = xo => {
          const [No, Ko] = xo.split(".").map(Number);
          return new Date(Pn, Ko - 1, No).getTime();
        };
      this.dates = Array.from(Vt).sort((xo, No) => pi(No) - pi(xo)), this.normalizeTableCells(this.filteredElements);
    }
    addInstallToEndDateRange(Kt, Vt) {
      const Pn = Kt.source,
        pi = Pn?.installDt;
      if (!pi) return;
      const xo = new Date(pi);
      if (Number.isNaN(xo.getTime())) return;
      const No = Kt.active ? new Date() : Pn?.deletionTime || Pn?.lastTreatment || xo,
        Ko = No instanceof Date ? No : new Date(No);
      if (Number.isNaN(Ko.getTime())) return;
      const Mi = new Date(xo.getFullYear(), xo.getMonth(), xo.getDate()),
        It = new Date(Ko.getFullYear(), Ko.getMonth(), Ko.getDate());
      for (; Mi.getTime() <= It.getTime();) {
        const At = String(Mi.getDate()).padStart(2, "0"),
          _n = String(Mi.getMonth() + 1).padStart(2, "0");
        Vt.add(`${At}.${_n}`), Mi.setDate(Mi.getDate() + 1);
      }
    }
    calculateHighlightDates() {
      const Kt = new Date(),
        Vt = new Date();
      Vt.setDate(Kt.getDate() - 1);
      const Pn = pi => `${String(pi.getDate()).padStart(2, "0")}.${String(pi.getMonth() + 1).padStart(2, "0")}`;
      this.highlightedDates = [Pn(Kt), Pn(Vt)];
    }
    isHighlighted(Kt) {
      return this.highlightedDates.includes(Kt);
    }
    normalizeTableCells(Kt) {
      const Vt = new Map();
      Kt.forEach(Pn => {
        const pi = Pn.catheterName || "Неизвестный катетер";
        let xo = Pn.locus || "";
        xo && (xo = xo.charAt(0).toUpperCase() + xo.slice(1));
        const It = [pi, xo, Pn.source.catheterSize ? `${Pn.source.catheterSize}` : ""].filter(gt => !!gt).join(" <span class=\"table-title-dot\">&bull;</span> "),
          At = this.sanitizer.bypassSecurityTrustHtml(It),
          _n = `${pi}_${xo}_${Pn.source?.catheterId || Pn.source?.protocolId || Pn.source?.compositionUid || Pn.source?.cuid || ""}`;
        Vt.has(_n) || Vt.set(_n, {
          title: At,
          typeLabel: pi,
          source: this.resolveSowingForSource(Pn.source),
          active: Pn.active,
          rows: []
        });
        const it = new Map();
        Pn.values.forEach(gt => {
          if (!gt?.date) return;
          it.has(gt.date) || it.set(gt.date, []);
          const ni = (0, We.k4)(gt.value);
          "" === ni || null == ni || it.get(gt.date).push(ni);
        });
        const _e = this.dates.map(gt => it.has(gt) ? it.get(gt) : []);
        Vt.get(_n).rows.push({
          parameterName: Pn.parameterName,
          values: _e
        });
      }), this.blocks = Array.from(Vt.values());
    }
    syncAllScrolls(Kt) {
      const Vt = Kt.target,
        Pn = Vt.scrollLeft;
      this.topScroll?.nativeElement !== Vt && this.topScroll?.nativeElement.scrollLeft !== Pn && (this.topScroll.nativeElement.scrollLeft = Pn), this.datesScroll?.nativeElement !== Vt && this.datesScroll?.nativeElement.scrollLeft !== Pn && (this.datesScroll.nativeElement.scrollLeft = Pn), this.valuesScrollRows.forEach(pi => {
        pi.nativeElement !== Vt && pi.nativeElement.scrollLeft !== Pn && (pi.nativeElement.scrollLeft = Pn);
      });
    }
    get patientDescription() {
      return (0, We.ez)(this.data);
    }
    get desktopBlocks() {
      return this.blocks;
    }
    resolveSowingForSource(Kt) {
      const Vt = Kt;
      if (Vt?.sowing) return Kt;
      const pi = (Array.isArray(Vt?.careRecords) ? Vt.careRecords : []).filter(Ko => !!Ko?.sowing);
      if (!pi.length) return Kt;
      const xo = pi.reduce((Ko, Mi) => {
        const It = Ko.updated ? new Date(Ko.updated).getTime() : 0;
        return (Mi.updated ? new Date(Mi.updated).getTime() : 0) >= It ? Mi : Ko;
      });
      return {
        ...Kt,
        sowing: xo.sowing
      };
    }
    trackByOptionValue(Kt, Vt) {
      return Vt.value;
    }
    formatInstallDate(Kt) {
      return (0, We.zE)(Kt);
    }
    isInstallOverdue(Kt) {
      return (0, We.Sk)(Kt);
    }
    getInstallOverdueTooltip(Kt) {
      return (0, We.e9)(Kt);
    }
    formatCellValue(Kt, Vt) {
      return (0, We.Wu)(Kt, Vt);
    }
    isUrineColorDeviation(Kt, Vt) {
      return "Цвет мочи" === Vt && "Откл" === (0, We.Wu)(Kt, Vt);
    }
    parseHeaderDate(Kt) {
      return (0, We.Ii)(Kt);
    }
    isWeekend(Kt) {
      if (!Kt) return !1;
      const Vt = Kt instanceof Date ? Kt : new Date(Kt);
      if (Number.isNaN(Vt.getTime())) return !1;
      const Pn = Vt.getDay();
      return 0 === Pn || 6 === Pn;
    }
    isWeekendDateStr(Kt) {
      const Vt = this.parseHeaderDate(Kt);
      return !!Vt && this.isWeekend(Vt);
    }
    openMonitoringFromSheet(Kt, Vt, Pn = []) {
      const pi = Kt || this.highlightedDates[0],
        xo = Pn.some(Ko => "" !== Ko && null != Ko),
        No = !!Kt && this.isHighlighted(Kt) && Vt.active && !this.isMonitoringDateBeforeInstall(Kt, Vt);
      !xo && !No || this.openMonitoringWithApiSource(Vt, pi, !No);
    }
    isMonitoringDateBeforeInstall(Kt, Vt) {
      const Pn = Vt?.source,
        pi = Pn?.installDt || Pn?.installDatetimeSet;
      if (!pi || !Kt) return !1;
      const xo = new Date(pi),
        No = (0, We.Ii)(Kt);
      return !(!No || Number.isNaN(xo.getTime())) && new Date(No.getFullYear(), No.getMonth(), No.getDate()).getTime() < new Date(xo.getFullYear(), xo.getMonth(), xo.getDate()).getTime();
    }
    openMonitoringWithApiSource(Kt, Vt, Pn) {
      const pi = No => {
          const Ko = !Pn && Kt.active && !(0, We.I_)(No),
            Mi = (0, We.PL)(No, Vt, {
              allowSourceFallback: (0, We.gr)(Kt.typeLabel)
            });
          this.openCatheterMonitoringDialog({
            type: Kt.typeLabel,
            source: No,
            installDatetimeSet: No?.installDt || No?.installDatetimeSet,
            compositionUid: Mi,
            protocolId: No?.protocolId,
            careCase: this.data?.careCase,
            patientMovement: this.data?.patientMovement,
            monitoringDate: Vt,
            isViewMode: !Ko
          });
        },
        xo = this.resolveApiSource(Kt);
      Array.isArray(xo?.careRecords) ? pi(xo) : this.fetchCathetersByCareCaseId().pipe((0, T.t)(this)).subscribe(No => {
        Array.isArray(No) && (this.apiCatheters = No), pi(this.resolveApiSource(Kt));
      });
    }
    openCatheterDialog(Kt) {
      const Vt = "peripheral" === Kt ? "Периферический" : "Мочевой";
      this.modalService.open(new d.X(_s.V), {
        width: this.isTablet ? "100vw" : "576px",
        disableClose: !0,
        data: {
          ...this.data,
          preferredCatheterName: Vt,
          allowedCatheterTypes: [Vt]
        }
      }).afterClose().pipe((0, T.t)(this)).subscribe(Pn => {
        if (!Pn) return;
        const pi = this.resolveSheetCareCaseId(),
          xo = this.cathetersCompositionService.resolvePatientId({
            careCase: this.data?.careCase
          }) || this.cathetersCompositionService.resolvePatientId(this.data);
        pi && xo ? this.cathetersCompositionService.installCatheter(Pn, pi, xo).pipe((0, Qi.K)(No => (this.messageService.error(this.cathetersCompositionService.formatError(No, "Не удалось сохранить установку катетера")), console.error("catheter install error", No), Qo.E)), (0, Kr.b)(() => this.messageService.success(`\u041a\u0430\u0442\u0435\u0442\u0435\u0440 \xab${Pn.catheterName}\xbb \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d`))).subscribe(() => {
          this.changed = !0, this.loadObservationData();
        }) : this.messageService.error("Не удалось определить пациента для сохранения установки катетера");
      });
    }
    openCatheterMonitoringDialog(Kt) {
      this.modalService.open(new d.X(Ps), {
        width: this.isTablet ? "100vw" : "1252px",
        disableClose: !0,
        data: Kt
      }).afterClose().pipe((0, T.t)(this)).subscribe(Vt => {
        Vt && this.handleMonitoringResult(Vt, Kt);
      });
    }
    handleMonitoringResult(Kt, Vt) {
      const Pn = this.cathetersCompositionService.resolvePatientId(Vt);
      Pn ? this.cathetersCompositionService.handleMonitoringAction(Kt, Vt, Pn).pipe((0, Qi.K)(pi => (this.messageService.error(this.cathetersCompositionService.formatError(pi, {
        save: "Не удалось сохранить данные наблюдения",
        sign: "Не удалось подписать данные наблюдения",
        unsign: "Не удалось снять подпись",
        annul: "Не удалось аннулировать катетер"
      }[Kt?.action || "save"] || "Не удалось выполнить операцию")), console.error("catheter monitoring error", pi), Qo.E)), (0, Kr.b)(() => {
        this.messageService.success({
          save: "Данные наблюдения сохранены",
          sign: "Данные наблюдения подписаны",
          unsign: "Подпись снята",
          annul: "Катетер аннулирован"
        }[Kt?.action || "save"] || "Операция выполнена"), this.data.isListView && (this.changed = !0, this.close());
      })).subscribe(pi => {
        this.applyMonitoringResultLocally(Kt, Vt, pi), this.changed = !0;
      }) : this.messageService.error("Не удалось определить пациента для сохранения данных");
    }
    applyMonitoringResultLocally(Kt, Vt, Pn) {
      const pi = (0, We.pn)(Pn && "function" == typeof Pn.getUid ? Pn.getUid() : Vt?.compositionUid),
        xo = `${Vt?.monitoringDate || Kt?.monitoringDateKey || ""}`.trim() || (0, We.k7)(Kt?.monitoringDate);
      if (pi && xo) {
        const It = Vt?.source || Vt,
          At = (0, We.CV)(It) || `${Vt?.protocolId || Vt?.compositionUid || ""}`.trim();
        (0, We.Em)(At, xo, pi), this.patchApiCatheterCareRecord(It, xo, pi, Kt), Vt.compositionUid = pi;
      }
      const No = (0, We.EN)(this.data),
        Ko = (0, We.Fz)(No, Vt, Kt);
      if (!this.data) return;
      const Mi = this.data.catheter;
      this.data.catheter = Array.isArray(Mi) ? Ko : {
        ...(Mi || {}),
        elements: Ko
      }, this.loadObservationData(), this.cdr.markForCheck();
    }
    patchApiCatheterCareRecord(Kt, Vt, Pn, pi) {
      if (!this.apiCatheters.length || !Kt || !Pn) return;
      const xo = `${Kt.catheterId || ""}`.trim(),
        No = `${Kt.protocolId || Kt.compositionUid || ""}`.trim(),
        Ko = this.apiCatheters.find(ni => !!(xo && ni.catheterId === xo || No && (ni.protocolId === No || ni.compositionUid === No)));
      if (!Ko) return;
      const Mi = (0, We.DM)(Vt) || (0, We.DM)(pi?.monitoringDate) || void 0,
        At = (Array.isArray(pi?.catheterTreatment) ? pi.catheterTreatment : []).map(ni => ni?.catheterTreatmentTime).find(ni => null != ni && "" !== `${ni}`.trim()),
        _n = Array.isArray(pi?.scaleAssessment) ? pi.scaleAssessment.map(ni => ni?.assessment).filter(ni => null != ni && "" !== `${ni}`.trim()).map(ni => `${ni}`) : [],
        it = {
          compositionUid: Pn,
          careDate: Mi,
          treatmentTime: At ? `${At}` : void 0,
          treatmentVal: At ? `${At}` : void 0,
          venipunctureAssessment: _n[0],
          venipunctureAssessments: _n.length ? _n : void 0,
          updated: new Date().toISOString()
        },
        _e = Array.isArray(Ko.careRecords) ? [...Ko.careRecords] : [],
        gt = _e.findIndex(ni => {
          const So = (0, We.pn)(ni.compositionUid),
            Er = (0, We.k7)(ni.careDate);
          return So === Pn || !!Vt && Er === Vt;
        });
      gt >= 0 ? _e[gt] = {
        ..._e[gt],
        ...it
      } : _e.push(it), Ko.careRecords = _e;
    }
    openAdaptiveCatheterMonitoringDialog(Kt, Vt, Pn = []) {
      this.openMonitoringFromSheet(Kt, Vt, Pn);
    }
    close() {
      this.modalRef.close(this.changed);
    }
    isFutureInstall(Kt) {
      if (!Kt) return !1;
      const Vt = Kt instanceof Date ? Kt : new Date(Kt);
      return !Number.isNaN(Vt.getTime()) && Vt.getTime() > Date.now();
    }
  }).ɵfac = function (Vt) {
    return new (Vt || Io)(e.Y36(C.UM), e.Y36(ra.ap), e.Y36(st.Yg), e.Y36(Or.H7), e.Y36(G.Jv), e.Y36(e.sBO), e.Y36(Fs.J), e.Y36(xa.Fd));
  }, Io.ɵcmp = e.Xpm({
    type: Io,
    selectors: [["catheter-card-modal"]],
    viewQuery: function (Vt, Pn) {
      if (1 & Vt && (e.Gf(ri, 5), e.Gf(Yt, 5), e.Gf(jt, 5), e.Gf(hn, 5), e.Gf(tn, 5), e.Gf(di, 5)), 2 & Vt) {
        let pi;
        e.iGM(pi = e.CRH()) && (Pn.topScroll = pi.first), e.iGM(pi = e.CRH()) && (Pn.datesScroll = pi.first), e.iGM(pi = e.CRH()) && (Pn.tableScrollContainer = pi.first), e.iGM(pi = e.CRH()) && (Pn.topScrollbar = pi.first), e.iGM(pi = e.CRH()) && (Pn.tableContent = pi.first), e.iGM(pi = e.CRH()) && (Pn.valuesScrollRows = pi);
      }
    },
    standalone: !0,
    features: [e.jDz],
    decls: 3,
    vars: 2,
    consts: [[4, "ngIf", "ngIfElse"], ["tabletPanel", ""], [1, "appointment-sheet"], [1, "appointment-sheet__header"], [1, "appointment-sheet__header__info"], [1, "appointment-sheet__header__info__row1"], [1, "appointment-sheet__header__info__row1__left"], [1, "full_name"], [1, "middle-dot"], ["icon", "invalid", 3, "size"], [1, "appointment-sheet__header__info__row1__right"], [1, "circle", 2, "background-color", "#F05C46"], [1, "circle", 2, "background-color", "#F28013"], [4, "ngFor", "ngForOf"], [1, "appointment-sheet__header__buttons"], ["lu-button-raised", "", "color", "blue", "luDropdownButton", "", 1, "dropdown-button", 3, "click"], [1, "dropdown-button__plus"], [1, "dropdown-button__label"], ["icon", "chevron-down", "luButtonPostfix", "", 1, "dropdown-button__chevron", 3, "size", "luChevronRotate"], ["panelClass", "install-catheter-dropdown-panel", "positions", "bottom-left", 1, "install-catheter-dropdown", 3, "content", "withArrow"], ["dropdown", ""], ["content", ""], ["lu-button-icon", "", 1, "close-btn", 3, "click"], ["icon", "close", 3, "size"], [1, "appointment-sheet__border"], [1, "appointment-sheet__table-scroll"], [1, "appointment-sheet__table-header", 3, "formGroup"], [1, "appointment-sheet__table-header__filters"], [1, "appointment-sheet__table-header__filters__name"], ["luChipsGroupType", "radio", "formControlName", "status", 1, "chip-container"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "appointment-sheet__table-header__dates"], ["class", "date-cell", 3, "date-cell_weekend", "date-cell_highlighted", 4, "ngFor", "ngForOf"], [1, "appointment-sheet__table-content"], ["class", "appointment-sheet__block", 4, "ngFor", "ngForOf"], ["class", "small-dot", 4, "ngIf"], [1, "patient-description"], [1, "small-dot"], [1, "install-catheter-dropdown__menu"], [1, "install-catheter-dropdown__option", 3, "click"], [3, "value"], ["lu-text", ""], [1, "date-cell"], [1, "date-cell__date"], [1, "date-cell__day"], [1, "appointment-sheet__block"], [1, "catheter-description"], ["positions", "top-left", 1, "catheter-description__info", 3, "luTooltip"], [1, "catheter-description__info__type"], ["class", "catheter-description__info__locus", 4, "ngIf"], [1, "catheter-description__time"], [1, "catheter-description__time__row"], ["lu-text", "", "size", "small", "color", "muted"], ["class", "catheter-description__time__row", 4, "ngIf"], [1, "appointment-sheet__block__rows"], ["class", "appointment-sheet__table-content__row", 4, "ngFor", "ngForOf"], [1, "catheter-description__info__locus"], [1, "appointment-sheet__table-content__row"], [1, "catheter-info"], ["class", "catheter-date-cell", 3, "catheter-date-cell_highlighted", "catheter-date-cell_clickable", "click", 4, "ngFor", "ngForOf"], [1, "catheter-date-cell", 3, "click"], [1, "multi-value-container"], ["class", "value-item", 3, "value-item_deviation", 4, "ngFor", "ngForOf"], [1, "value-item"], [1, "adaptive-header"], [1, "adaptive-header__top"], ["lu-button-icon", "", 1, "close-btn-adaptive", 3, "click"], [1, "adaptive-header__column"], [1, "appointment-sheet__header", 2, "padding-top", "16px"], [1, "appointment-sheet__table-header__adaptive-filters"], [1, "table-scroll-container", 3, "scroll"], ["tableScrollContainer", ""], [1, "top-scrollbar-strip", 3, "scroll"], ["topScrollbar", ""], [1, "top-scrollbar-strip__fake"], [1, "table-content"], ["tableContent", ""], [1, "table-row-group", "header-group", "table-row-group_sticky-top"], [1, "table-left-side", "header-corner", "table-left-side_sticky-left"], [1, "dates-row"], ["class", "cell date-cell", 3, "date-cell_weekend", 4, "ngFor", "ngForOf"], ["class", "table-block-group", 4, "ngFor", "ngForOf"], ["lu-button-raised", "", "color", "blue", "luDropdownButton", "", "size", "medium", 1, "dropdown-button", "tablet-install-button", 3, "click"], ["icon", "plus_small", "luButtonPrefix", "", 3, "size"], ["panelClass", "install-catheter-dropdown-panel", "positions", "top-left", 1, "install-catheter-dropdown", 3, "content", "withArrow", "borderOffset"], [1, "cell", "date-cell"], [1, "table-block-group"], [1, "fixed-block-header-row"], [1, "fixed-block-header"], [3, "innerHTML"], [1, "fixed-block-header__info"], [1, "fixed-block-header__info__pices"], ["class", "table-title-dot", 4, "ngIf"], ["class", "fixed-block-header__info__pices", 4, "ngIf"], ["class", "table-row-group", 4, "ngFor", "ngForOf"], [1, "table-title-dot"], [1, "table-row-group"], [1, "table-left-side", "param-cell", "table-left-side_sticky-left"], [1, "values-row"], ["class", "cell value-cell", 3, "highlighted-column", "click", 4, "ngFor", "ngForOf"], [1, "cell", "value-cell", 3, "click"]],
    template: function (Vt, Pn) {
      if (1 & Vt && (e.YNc(0, ha, 41, 13, "ng-container", 0), e.YNc(1, Gi, 45, 17, "ng-template", null, 1, e.W1O)), 2 & Vt) {
        const pi = e.MAs(2);
        e.Q6J("ngIf", !Pn.isTablet)("ngIfElse", pi);
      }
    },
    dependencies: [a.ez, a.sg, a.O5, M.o, M.k, b.h, b.q, v.n, E.X, A.aI, A.NZ, N.U, N.r, I.m, I.P, O.T, L.B, L.b, h.p, h.c, f.h, F.mc, F.nx, F.zY, rs.$, Js.$, ho.M, uo.G, B.UX, B.JJ, B.JL, B.sg, B.u],
    styles: ["@charset \"UTF-8\";@media ((min-width: 600px) and (max-width: 960px)){[_nghost-%COMP%]{display:block;height:100vh;max-height:100vh}}.appointment-sheet[_ngcontent-%COMP%]{height:calc(100vh - 10px);width:100%;overflow-y:auto;overflow-x:hidden}.appointment-sheet__table-scroll[_ngcontent-%COMP%]{overflow-x:auto;overflow-y:auto;width:100%}.appointment-sheet__border[_ngcontent-%COMP%]{width:100%;border-bottom:1px solid #E6E6E6;height:0}@media ((min-width: 600px) and (max-width: 960px)){.appointment-sheet__border[_ngcontent-%COMP%]{margin-top:6px}}.appointment-sheet[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:40px}.appointment-sheet[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     div{height:100%!important}.appointment-sheet__header[_ngcontent-%COMP%]{height:80px;width:calc(100% - 48px);display:flex;flex-direction:row;justify-content:space-between;align-self:center;justify-self:center}@media ((min-width: 600px) and (max-width: 960px)){.appointment-sheet__header[_ngcontent-%COMP%]{height:48px;width:100%;padding:12px 16px}}.appointment-sheet__header__buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:24px;height:80px;margin-right:8px}.appointment-sheet__header[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]{height:40px;width:auto;min-width:280px;padding:0 16px;font-size:16px;font-weight:600}.appointment-sheet__header[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]     div{height:100%!important}.appointment-sheet__header[_ngcontent-%COMP%]   .dropdown-button__plus[_ngcontent-%COMP%]{margin-right:8px;font-size:20px;font-weight:600}.appointment-sheet__header[_ngcontent-%COMP%]   .dropdown-button__label[_ngcontent-%COMP%]{white-space:nowrap}.appointment-sheet__header[_ngcontent-%COMP%]   .dropdown-button__chevron[_ngcontent-%COMP%]{margin-left:8px}.appointment-sheet__header[_ngcontent-%COMP%]   .dropdown-button__inst-cat-button[_ngcontent-%COMP%]{margin-right:14px;font-size:20px;font-weight:600}.appointment-sheet__header__info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin:12px 24px;justify-content:center}.appointment-sheet__header__info__row1[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:16px}.appointment-sheet__header__info__row1__left[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px;justify-content:flex-start;align-items:center}@media ((min-width: 600px) and (max-width: 960px)){.appointment-sheet__header__info__row1__left[_ngcontent-%COMP%]{height:24px;gap:12px}}.appointment-sheet__header__info__row1__left[_ngcontent-%COMP%]   .middle-dot[_ngcontent-%COMP%]{border-radius:50%;width:8px;height:8px;background-color:#f48673}.appointment-sheet__header__info__row1__left[_ngcontent-%COMP%]   .full_name[_ngcontent-%COMP%]{font-size:20px;font-weight:600}@media ((min-width: 600px) and (max-width: 960px)){.appointment-sheet__header__info__row1__left[_ngcontent-%COMP%]   .full_name[_ngcontent-%COMP%]{font-size:17px;line-height:24px}}.appointment-sheet__header__info__row1__right[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px;justify-content:flex-start;align-items:center}.appointment-sheet__header__info__row1__right[_ngcontent-%COMP%]   .patient-description[_ngcontent-%COMP%]{font-size:15px}.appointment-sheet__header__info__row1__right[_ngcontent-%COMP%]   .small-dot[_ngcontent-%COMP%]{border-radius:50%;width:3px;height:3px;background-color:#0003}.appointment-sheet__header__info__row1__right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{border-radius:50%;height:24px;width:24px;letter-spacing:-1px;color:#fff;font-weight:700;font-size:14px;display:flex;align-content:center;justify-content:center}.appointment-sheet__header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{margin-top:10px;width:49px;height:40px;border-left:1px solid #CCCCCC;padding-left:18px}.appointment-sheet__header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #CCCCCC}.appointment-sheet__header[_ngcontent-%COMP%]   .close-btn-adaptive[_ngcontent-%COMP%]{margin-right:-8px}.appointment-sheet__header[_ngcontent-%COMP%]   .close-btn-adaptive[_ngcontent-%COMP%]     .lu-button-wrapper{justify-content:flex-start;align-items:flex-start;--lu-svg-icon-color: #B3B3B3 !important}.appointment-sheet__header[_ngcontent-%COMP%]   .close-btn-adaptive[_ngcontent-%COMP%]     .lu-button-wrapper lu-svg-icon{align-items:flex-start}.appointment-sheet__header[_ngcontent-%COMP%]   .close-btn-adaptive[_ngcontent-%COMP%]     .lu-button-wrapper:hover{--lu-svg-icon-color: #999999;cursor:pointer}.appointment-sheet__header[_ngcontent-%COMP%]   .close-btn-adaptive[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #CCCCCC}.appointment-sheet__header[_ngcontent-%COMP%]   .close-btn-adaptive[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #999999;cursor:pointer}.appointment-sheet__table-header[_ngcontent-%COMP%]{width:max-content;min-width:100%;height:56px;display:flex;flex-direction:row;flex-wrap:nowrap;position:sticky;top:0;z-index:2;background:#fff}.appointment-sheet__table-header__adaptive-filters[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;align-self:center;justify-self:center;padding-left:16px;border-top:1px solid #E6E6E6;gap:12px}.appointment-sheet__table-header__adaptive-filters[_ngcontent-%COMP%]   .tablet-install-button[_ngcontent-%COMP%]{margin-left:auto;margin-right:16px;width:auto;min-width:160px}.appointment-sheet__table-header__filters[_ngcontent-%COMP%]{flex-shrink:0;position:sticky;left:0;z-index:3;background:#fff;height:100%;width:615px;border-right:1px solid #E4E4E4;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;align-self:center;justify-self:center;padding-left:24px}@media ((min-width: 600px) and (max-width: 960px)){.appointment-sheet__table-header__filters[_ngcontent-%COMP%]{width:180px}}.appointment-sheet__table-header__filters__name[_ngcontent-%COMP%]{font-weight:600;margin-right:24px}.appointment-sheet__table-header__dates[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap}.appointment-sheet__table-header__dates[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]{flex:0 0 72px;width:72px;height:56px;border-right:1px solid #E4E4E4;display:flex;flex-direction:column;gap:2px;align-items:flex-end;justify-content:center;font-size:13px;font-weight:600}.appointment-sheet__table-header__dates[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;width:64px;margin-right:8px;text-align:end}.appointment-sheet__table-header__dates[_ngcontent-%COMP%]   .date-cell_highlighted[_ngcontent-%COMP%]{background-color:#fff8e6}.appointment-sheet__block[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;width:max-content;min-width:100%;align-items:stretch;border-bottom:1px solid #E6E6E6}.appointment-sheet__block[_ngcontent-%COMP%]:first-of-type{border-top:1px solid #E6E6E6}.appointment-sheet__block__rows[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-description[_ngcontent-%COMP%]{width:224px;flex-shrink:0;position:sticky;left:0;z-index:1;display:flex;flex-direction:column;gap:16px;background:#fff;border-right:1px solid #e6e6e6}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-description_spacer[_ngcontent-%COMP%]{visibility:hidden}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-description__info[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:12px}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-description__info__type[_ngcontent-%COMP%], .appointment-sheet__block[_ngcontent-%COMP%]   .catheter-description__info__locus[_ngcontent-%COMP%], .appointment-sheet__block[_ngcontent-%COMP%]   .catheter-description__info__size[_ngcontent-%COMP%]{font-size:15px;padding-left:24px}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-description__info__type_inactive[_ngcontent-%COMP%]{color:#8b2635}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-description__time[_ngcontent-%COMP%]{font-size:13px;display:flex;flex-direction:column;padding-left:24px;padding-bottom:16px}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-description__time__row[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-description__time__value_overdue[_ngcontent-%COMP%]{color:#cd3b2b;font-weight:600}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-info[_ngcontent-%COMP%]{width:390px;border-right:1px solid #E6E6E6;display:flex;flex-shrink:0;flex-direction:column;justify-content:flex-start;align-items:flex-end;padding:12px 20px}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:22px}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-date-cell[_ngcontent-%COMP%]{border-right:1px solid #EBEBEB;min-height:48px;padding:8px 4px;vertical-align:top;flex:0 0 72px;width:72px}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-date-cell_highlighted[_ngcontent-%COMP%]{background-color:#fff8e6}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-date-cell_clickable[_ngcontent-%COMP%]{cursor:pointer}.appointment-sheet__block[_ngcontent-%COMP%]   .catheter-date-cell[_ngcontent-%COMP%]   .value-item_deviation[_ngcontent-%COMP%]{color:#cd3b2b;font-weight:600}.appointment-sheet__table-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:max-content;min-width:100%}.appointment-sheet__table-content__row[_ngcontent-%COMP%]{width:max-content;min-width:100%;height:100%;display:flex;flex-direction:row;flex-wrap:nowrap}.appointment-sheet__table-content__row[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid #E6E6E6}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-description[_ngcontent-%COMP%]{width:224px;border-right:1px solid #E6E6E6;display:flex;flex-shrink:0;flex-direction:column;gap:16px;position:sticky;left:0;z-index:1;background:#fff}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-description_spacer[_ngcontent-%COMP%]{visibility:hidden}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-description__info[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:12px}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-description__info__type[_ngcontent-%COMP%], .appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-description__info__locus[_ngcontent-%COMP%], .appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-description__info__size[_ngcontent-%COMP%]{font-size:15px;padding-left:24px}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-description__info__type_inactive[_ngcontent-%COMP%]{color:#8b2635}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-description__time[_ngcontent-%COMP%]{font-size:13px;display:flex;flex-direction:column;padding-left:24px;padding-bottom:16px}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-description__time__row[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-description__time__value_overdue[_ngcontent-%COMP%]{color:#cd3b2b;font-weight:600}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-info[_ngcontent-%COMP%]{width:390px;flex-shrink:0;position:sticky;left:224px;z-index:1;background:#fff;border-right:1px solid #E6E6E6;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-end;padding:12px 20px}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:22px}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-date-cell[_ngcontent-%COMP%]{border-right:1px solid #EBEBEB;min-height:48px;padding:8px 4px;vertical-align:top;flex:0 0 72px;width:72px}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-date-cell_highlighted[_ngcontent-%COMP%]{background-color:#fff8e6}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-date-cell_clickable[_ngcontent-%COMP%]{cursor:pointer}.appointment-sheet__table-content__row[_ngcontent-%COMP%]   .catheter-date-cell[_ngcontent-%COMP%]   .value-item_deviation[_ngcontent-%COMP%]{color:#cd3b2b;font-weight:600}.chip-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px}.adaptive-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:calc(100vh - 10px);overflow:hidden}.adaptive-header__top[_ngcontent-%COMP%]{width:100vw;box-shadow:0 0 8px #00000014,0 0 2px #00000014;flex-shrink:0}.adaptive-header__column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;margin-top:8px;flex-shrink:0}@media ((min-width: 600px) and (max-width: 960px)){.tablet-install-button[_ngcontent-%COMP%]{position:absolute;right:0;bottom:100px;padding:16px;background:#fff;border-radius:8px 0 0;z-index:3}.tablet-install-button[_ngcontent-%COMP%]     .lu-button-wrapper{width:242px}}.shadow[_ngcontent-%COMP%]{box-shadow:0 2px 4px #0000001a}.table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;border:1px solid #dee2e6;border-radius:8px;background:#fff}.top-scrollbar-container[_ngcontent-%COMP%]{overflow-x:auto;width:100%;height:14px;background:#ffffff;border-bottom:1px solid #dee2e6}.sticky-top-element[_ngcontent-%COMP%]{position:sticky;top:0;z-index:100}.sticky-date-element[_ngcontent-%COMP%]{position:sticky;top:14px;z-index:99}.fake-content[_ngcontent-%COMP%]{height:1px}.table-scroll-container[_ngcontent-%COMP%]{flex:1;min-height:0;max-height:calc(100% - 235px);overflow:auto;position:relative;border:1px solid #dee2e6;border-radius:8px;background:#fff}.top-scrollbar-strip[_ngcontent-%COMP%]{position:sticky;top:0;left:0;z-index:4;overflow-x:auto;overflow-y:hidden;height:16px;width:100%;background:#ffffff;border-bottom:1px solid #dee2e6}.top-scrollbar-strip__fake[_ngcontent-%COMP%]{height:1px}.table-content[_ngcontent-%COMP%]{width:max-content;min-width:100%}.table-row-group[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;border-bottom:1px solid #dee2e6;background:#ffffff}.table-row-group_sticky-top[_ngcontent-%COMP%]{position:sticky;top:14px;z-index:3}.table-row-group_sticky-top[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.table-row-group_sticky-top[_ngcontent-%COMP%]   .date-cell_weekend[_ngcontent-%COMP%]{color:#aa2115}.table-row-group_sticky-top[_ngcontent-%COMP%]   .date-cell_weekend[_ngcontent-%COMP%], .table-row-group[_ngcontent-%COMP%]   .value-item_deviation[_ngcontent-%COMP%]{color:#cd3b2b!important}.table-left-side[_ngcontent-%COMP%]{flex:0 0 180px;width:180px;padding:12px 14px;box-sizing:border-box;font-size:13px;color:#333;border-right:2px solid #dee2e6;display:flex;justify-content:flex-end;align-items:flex-start;background:#ffffff;text-align:right}.table-left-side_sticky-left[_ngcontent-%COMP%]{position:sticky;left:0;z-index:2}.dates-row[_ngcontent-%COMP%], .values-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1;min-height:56px}.table-left-side.header-corner[_ngcontent-%COMP%]{font-weight:600}.table-right-side[_ngcontent-%COMP%]{overflow-x:auto;scrollbar-width:none;display:flex;align-items:stretch}.table-right-side[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.scroll-content[_ngcontent-%COMP%]{display:flex;width:max-content;align-items:stretch}.cell[_ngcontent-%COMP%]{min-width:72px;max-width:72px;padding:8px 2px;text-align:center;border-right:1px solid #dee2e6;box-sizing:border-box;display:flex;align-items:center;justify-content:center;font-size:13px}.multi-value-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;width:100%;justify-content:center}.value-item[_ngcontent-%COMP%]{width:100%;text-align:center}.cell.highlighted-column[_ngcontent-%COMP%]{background-color:#38a1d61a!important}.header-group[_ngcontent-%COMP%]{background-color:#fff;border-bottom:2px solid #dee2e6}@media ((min-width: 600px) and (max-width: 960px)){.header-group[_ngcontent-%COMP%]{border-bottom:none;box-shadow:0 2px 4px #0000001a;max-height:56px}}.header-corner[_ngcontent-%COMP%]{background-color:#fff;color:#333}.date-cell[_ngcontent-%COMP%]{color:#333;font-weight:700}.fixed-block-header-row[_ngcontent-%COMP%]{width:max-content;min-width:100%;border-bottom:1px solid #dee2e6;background:#ffffff;padding:16px 0 0 16px;max-height:72px}.fixed-block-header[_ngcontent-%COMP%]{position:sticky;left:0;z-index:2;width:-moz-fit-content;width:fit-content;max-width:100%;box-sizing:border-box;min-height:56px;display:flex;flex-direction:column}.fixed-block-header.table-left-side_sticky-left[_ngcontent-%COMP%]{position:sticky;left:0;z-index:2}.fixed-block-header__info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.fixed-block-header__info__pices[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;font-size:13px;line-height:20px}.fixed-block-header__value_overdue[_ngcontent-%COMP%]{color:#cd3b2b!important}.fixed-block-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:13px;font-weight:600;color:#333;display:flex;align-items:center;white-space:nowrap}@media ((min-width: 600px) and (max-width: 960px)){.fixed-block-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:15px;line-height:24px}}[_nghost-%COMP%]     .table-title-dot{display:inline-block;width:3px;height:3px;background-color:#0003;border-radius:50%;margin:0 8px;font-size:0;line-height:0;overflow:hidden}.value-cell[_ngcontent-%COMP%]{font-size:15px;color:#212529;cursor:pointer}  .install-catheter-dropdown-panel{margin-top:4px;padding:0;border-radius:4px;box-shadow:0 4px 16px #0000001f;background:#ffffff;overflow:hidden;min-width:280px!important}  .install-catheter-dropdown-panel .install-catheter-dropdown__menu{min-width:280px;padding:4px 0}  .install-catheter-dropdown-panel .install-catheter-dropdown__option,   .install-catheter-dropdown-panel lu-option{display:flex;align-items:center;height:40px;padding:0 16px;font-size:15px;font-weight:400;color:#4d4d4d;white-space:nowrap;cursor:pointer}  .install-catheter-dropdown-panel .install-catheter-dropdown__option:hover,   .install-catheter-dropdown-panel lu-option:hover{background-color:#ecf6fb}"],
    changeDetection: 0
  }), Io);
  Fn = (0, t.gn)([(0, T.c)()], Fn);
});
