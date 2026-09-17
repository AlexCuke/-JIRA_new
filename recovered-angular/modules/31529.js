// Extracted from main; webpack module 31529. Factory, not an ES module.
((Ae, V, i) => {
  var tn;
  i.d(V, {
    z: () => hn
  });
  var Je,
    t = i(97582),
    e = i(94650),
    a = i(50494),
    m = i(24006),
    d = i(63900),
    M = i(70262),
    b = i(60515),
    A = i(18505),
    N = i(4128),
    I = i(62843),
    O = i(39646),
    L = i(39300),
    C = i(95698),
    v = i(54004),
    f = i(89188),
    E = i(5264),
    h = i(73745),
    x = i(39453),
    u = i(3977),
    T = i(35314),
    R = i(4760),
    B = i(44726),
    y = i(64463),
    j = i(69879),
    W = i(628),
    F = i(47639),
    Le = i(91455),
    ke = i(87219),
    J = i(44348),
    fe = i(92203),
    ye = i(62804),
    ae = i(13700),
    Y = i(43150),
    G = i(23062),
    te = i(85623),
    pe = i(93278),
    be = i(24676),
    le = i(18200),
    n = i(33459),
    Se = i(28369),
    qe = i(70823),
    Rt = i(9073),
    We = i(19550),
    Re = i(32643),
    st = i(15091),
    q = i(15394),
    mt = i(21846),
    ut = i(89653),
    Ct = i(62289),
    Ft = i(91854),
    Et = i(36895),
    Ue = i(54976),
    Me = i(47313),
    Ke = i(5416),
    Ze = i(16160),
    Ee = i(57387),
    je = i(16311),
    Mt = i(89302);
  const Xt = ["footerMenu"];
  function Nn(di, Gn) {
    if (1 & di) {
      const dn = e.EpF();
      e.TgZ(0, "div")(1, "div", 17, 18)(3, "div", 19), e._uU(4), e.qZA(), e.TgZ(5, "lu-svg-icon", 20), e.NdJ("click", function () {
        e.CHM(dn);
        const Ro = e.oxw();
        return e.KtG(Ro.closeModalFormAlone());
      }), e.qZA()()();
    }
    if (2 & di) {
      const dn = e.oxw();
      e.xp6(4), e.Oqu(dn.fullName), e.xp6(1), e.Q6J("size", 24);
    }
  }
  function Pi(di, Gn) {
    if (1 & di) {
      const dn = e.EpF();
      e.TgZ(0, "button", 21), e.NdJ("click", function (Ro) {
        return e.CHM(dn), e.oxw().onCancelPanel(), e.KtG(Ro.stopPropagation());
      }), e._UZ(1, "lu-svg-icon", 22), e.qZA();
    }
    2 & di && (e.xp6(1), e.Q6J("size", 16));
  }
  function Ii(di, Gn) {
    1 & di && e._UZ(0, "span", 28);
  }
  function yi(di, Gn) {
    if (1 & di && (e.TgZ(0, "span", 25), e._uU(1), e.qZA()), 2 & di) {
      const dn = e.oxw(2);
      e.xp6(1), e.hij("", dn.ownerInitials, " — Медсестра");
    }
  }
  function co(di, Gn) {
    if (1 & di && (e.TgZ(0, "span", 23)(1, "span", 24), e._uU(2, "Оценена в"), e.qZA(), e.TgZ(3, "span", 25), e._uU(4), e.ALo(5, "luDateFormatter"), e.qZA(), e.YNc(6, Ii, 1, 0, "span", 26), e.YNc(7, yi, 2, 1, "span", 27), e.qZA()), 2 & di) {
      const dn = e.oxw();
      e.xp6(4), e.Oqu(e.xi3(5, 3, dn.assessmentTime, "HH:mm")), e.xp6(2), e.Q6J("ngIf", null == dn.scalesValue || null == dn.scalesValue.news2 ? null : dn.scalesValue.news2.owner), e.xp6(1), e.Q6J("ngIf", null == dn.scalesValue || null == dn.scalesValue.news2 ? null : dn.scalesValue.news2.owner);
    }
  }
  function Jo(di, Gn) {
    1 & di && (e.TgZ(0, "lu-form-message", 56), e._UZ(1, "lu-svg-icon", 57), e._uU(2, " Обязательное поле "), e.qZA()), 2 & di && (e.xp6(1), e.Q6J("size", 24));
  }
  function fr(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 58), e._UZ(1, "app-back-round-icon"), e.TgZ(2, "span"), e._uU(3), e.qZA(), e._UZ(4, "span", 59), e.TgZ(5, "span"), e._uU(6), e.qZA()()), 2 & di) {
      const dn = e.oxw(2);
      e.xp6(3), e.Oqu(null == dn.oldNews2Value ? null : dn.oldNews2Value.rr), e.xp6(3), e.Oqu(dn.formatDate(null == dn.oldNews2Value ? null : dn.oldNews2Value.rrTime));
    }
  }
  function pt(di, Gn) {
    1 & di && (e.TgZ(0, "lu-form-message", 56), e._UZ(1, "lu-svg-icon", 57), e._uU(2, " Обязательное поле "), e.qZA()), 2 & di && (e.xp6(1), e.Q6J("size", 24));
  }
  function Dt(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 58), e._UZ(1, "app-back-round-icon"), e.TgZ(2, "span"), e._uU(3), e.qZA(), e._UZ(4, "span", 59), e.TgZ(5, "span"), e._uU(6), e.qZA()()), 2 & di) {
      const dn = e.oxw(2);
      e.xp6(2), e.ekj("form__group-desc__value_danger", dn.isOldValueDanger("sp", null == dn.oldNews2Value ? null : dn.oldNews2Value.sp)), e.xp6(1), e.Oqu(null == dn.oldNews2Value ? null : dn.oldNews2Value.sp), e.xp6(3), e.Oqu(dn.formatDate(null == dn.oldNews2Value ? null : dn.oldNews2Value.spTime));
    }
  }
  function Ht(di, Gn) {
    1 & di && (e.TgZ(0, "lu-form-message", 56), e._UZ(1, "lu-svg-icon", 57), e._uU(2, " Обязательное поле "), e.qZA()), 2 & di && (e.xp6(1), e.Q6J("size", 24));
  }
  function Dn(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 58), e._UZ(1, "app-back-round-icon"), e.TgZ(2, "span"), e._uU(3), e.qZA(), e._UZ(4, "span", 59), e.TgZ(5, "span"), e._uU(6), e.qZA()()), 2 & di) {
      const dn = e.oxw(2);
      e.xp6(3), e.Oqu(null == dn.oldNews2Value ? null : dn.oldNews2Value.oxygenation), e.xp6(3), e.Oqu(dn.formatDate(null == dn.oldNews2Value ? null : dn.oldNews2Value.oxygenationTime));
    }
  }
  function vt(di, Gn) {
    if (1 & di && (e.TgZ(0, "lu-chip", 64), e._uU(1), e.qZA()), 2 & di) {
      const dn = Gn.$implicit;
      e.Q6J("value", dn.toLowerCase()), e.xp6(1), e.hij(" ", dn, " ");
    }
  }
  function an(di, Gn) {
    1 & di && (e.TgZ(0, "lu-form-message", 65), e._UZ(1, "lu-svg-icon", 57), e._uU(2, " Обязательное поле "), e.qZA()), 2 & di && (e.xp6(1), e.Q6J("size", 24));
  }
  function li(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 60)(1, "span", 61), e._uU(2, "Устройство инсуффляции кислорода "), e.TgZ(3, "span"), e._uU(4, "*"), e.qZA()(), e.TgZ(5, "div", 30)(6, "lu-chips-group", 62), e.YNc(7, vt, 2, 2, "lu-chip", 63), e.qZA()(), e.YNc(8, an, 3, 1, "lu-form-message", 52), e.qZA()), 2 & di) {
      const dn = e.oxw(2);
      e.xp6(7), e.Q6J("ngForOf", dn.oxygenationList), e.xp6(1), e.Q6J("ngIf", dn.showValidationErrors && dn.getNEWS2Ctrl("oxygenationDevice").hasError("required"));
    }
  }
  function zn(di, Gn) {
    1 & di && (e.TgZ(0, "lu-form-message", 56), e._UZ(1, "lu-svg-icon", 57), e._uU(2, " Обязательное поле "), e.qZA()), 2 & di && (e.xp6(1), e.Q6J("size", 24));
  }
  function $t(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 58), e._UZ(1, "app-back-round-icon"), e.TgZ(2, "span"), e._uU(3), e.qZA(), e._UZ(4, "span", 59), e.TgZ(5, "span"), e._uU(6), e.qZA()()), 2 & di) {
      const dn = e.oxw(2);
      e.xp6(2), e.ekj("form__group-desc__value_danger", dn.isOldValueDanger("temperature", null == dn.oldNews2Value ? null : dn.oldNews2Value.temperature)), e.xp6(1), e.Oqu(null == dn.oldNews2Value ? null : dn.oldNews2Value.temperature), e.xp6(3), e.Oqu(dn.formatDate(null == dn.oldNews2Value ? null : dn.oldNews2Value.temperatureTime));
    }
  }
  function Mn(di, Gn) {
    1 & di && (e.TgZ(0, "lu-form-message", 56), e._UZ(1, "lu-svg-icon", 57), e._uU(2, " Обязательное поле "), e.qZA()), 2 & di && (e.xp6(1), e.Q6J("size", 24));
  }
  function Qn(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 58), e._UZ(1, "app-back-round-icon"), e.TgZ(2, "span"), e._uU(3), e.qZA(), e._UZ(4, "span", 59), e.TgZ(5, "span"), e._uU(6), e.qZA()()), 2 & di) {
      const dn = e.oxw(2);
      e.xp6(2), e.ekj("form__group-desc__value_danger", dn.isOldValueDanger("sys", null == dn.oldNews2Value ? null : dn.oldNews2Value.sys)), e.xp6(1), e.Oqu(null == dn.oldNews2Value ? null : dn.oldNews2Value.sys), e.xp6(3), e.Oqu(dn.formatDate(null == dn.oldNews2Value ? null : dn.oldNews2Value.sysTime));
    }
  }
  function In(di, Gn) {
    1 & di && (e.TgZ(0, "lu-form-message", 56), e._UZ(1, "lu-svg-icon", 57), e._uU(2, " Обязательное поле "), e.qZA()), 2 & di && (e.xp6(1), e.Q6J("size", 24));
  }
  function ui(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 58), e._UZ(1, "app-back-round-icon"), e.TgZ(2, "span"), e._uU(3), e.qZA(), e._UZ(4, "span", 59), e.TgZ(5, "span"), e._uU(6), e.qZA()()), 2 & di) {
      const dn = e.oxw(2);
      e.xp6(2), e.ekj("form__group-desc__value_danger", dn.isOldValueDanger("dia", null == dn.oldNews2Value ? null : dn.oldNews2Value.dia)), e.xp6(1), e.Oqu(null == dn.oldNews2Value ? null : dn.oldNews2Value.dia), e.xp6(3), e.Oqu(dn.formatDate(null == dn.oldNews2Value ? null : dn.oldNews2Value.sysTime));
    }
  }
  function To(di, Gn) {
    1 & di && (e.TgZ(0, "lu-form-message", 56), e._UZ(1, "lu-svg-icon", 57), e._uU(2, " Обязательное поле "), e.qZA()), 2 & di && (e.xp6(1), e.Q6J("size", 24));
  }
  function bi(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 58), e._UZ(1, "app-back-round-icon"), e.TgZ(2, "span"), e._uU(3), e.qZA(), e._UZ(4, "span", 59), e.TgZ(5, "span"), e._uU(6), e.qZA()()), 2 & di) {
      const dn = e.oxw(2);
      e.xp6(3), e.Oqu(null == dn.oldNews2Value ? null : dn.oldNews2Value.hr), e.xp6(3), e.Oqu(dn.formatDate(null == dn.oldNews2Value ? null : dn.oldNews2Value.hrTime));
    }
  }
  function qn(di, Gn) {
    if (1 & di) {
      const dn = e.EpF();
      e.TgZ(0, "lu-chip", 66), e.NdJ("blur", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw(2);
        return e.KtG(_r.countPoints(Ro, "consciousness"));
      }), e._uU(1), e.qZA();
    }
    if (2 & di) {
      const dn = Gn.$implicit,
        wo = Gn.index;
      e.Q6J("value", dn)("tabindex", wo), e.xp6(1), e.hij(" ", dn, " ");
    }
  }
  function Xn(di, Gn) {
    1 & di && (e.TgZ(0, "lu-form-message", 65), e._UZ(1, "lu-svg-icon", 57), e._uU(2, " Обязательное поле "), e.qZA()), 2 & di && (e.xp6(1), e.Q6J("size", 24));
  }
  function Yi(di, Gn) {
    if (1 & di) {
      const dn = e.EpF();
      e.TgZ(0, "div", 67), e.NdJ("click", function () {
        e.CHM(dn);
        const Ro = e.oxw(2);
        return e.KtG(Ro.toggleAddInfo());
      }), e._UZ(1, "app-plus-icon"), e._uU(2, " Добавить дополнительные данные "), e.qZA();
    }
  }
  function Eo(di, Gn) {
    1 & di && (e.TgZ(0, "lu-form-message", 65), e._UZ(1, "lu-svg-icon", 57), e._uU(2, " Обязательное поле "), e.qZA()), 2 & di && (e.xp6(1), e.Q6J("size", 24));
  }
  function Fo(di, Gn) {
    if (1 & di) {
      const dn = e.EpF();
      e.TgZ(0, "div", 87)(1, "label", 88)(2, "lu-radio-group", 89)(3, "lu-button-group")(4, "button", 90), e.NdJ("click", function () {
        e.CHM(dn);
        const Ro = e.oxw(3);
        return e.KtG(Ro.getForm004Ctrl("bath").patchValue(!0));
      }), e._uU(5, " Да "), e.qZA(), e.TgZ(6, "button", 90), e.NdJ("click", function () {
        e.CHM(dn);
        const Ro = e.oxw(3);
        return e.KtG(Ro.getForm004Ctrl("bath").patchValue(!1));
      }), e._uU(7, " Нет "), e.qZA()()()(), e.TgZ(8, "label", 91)(9, "lu-radio-group", 92)(10, "lu-button-group")(11, "button", 93), e.NdJ("click", function () {
        e.CHM(dn);
        const Ro = e.oxw(3);
        return e.KtG(Ro.getForm004Ctrl("linen").patchValue("да"));
      }), e._uU(12, " Да "), e.qZA(), e.TgZ(13, "button", 94), e.NdJ("click", function () {
        e.CHM(dn);
        const Ro = e.oxw(3);
        return e.KtG(Ro.getForm004Ctrl("linen").patchValue("нет"));
      }), e._uU(14, " Нет "), e.qZA()()()()();
    }
    2 & di && (e.xp6(4), e.Q6J("value", !0), e.xp6(2), e.Q6J("value", !1));
  }
  function br(di, Gn) {
    1 & di && (e.TgZ(0, "lu-form-message", 65), e._UZ(1, "lu-svg-icon", 57), e._uU(2, " Обязательное поле "), e.qZA()), 2 & di && (e.xp6(1), e.Q6J("size", 24));
  }
  function Pr(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 58), e._UZ(1, "app-back-round-icon"), e.TgZ(2, "span"), e._uU(3), e.qZA(), e._UZ(4, "span", 59), e.TgZ(5, "span"), e._uU(6), e.qZA()()), 2 & di) {
      const dn = e.oxw(3);
      e.xp6(3), e.Oqu(dn.oldForm004Value.pediculosis), e.xp6(3), e.Oqu(dn.formatDate(null == dn.oldForm004Value ? null : dn.oldForm004Value.pediculosisTime));
    }
  }
  function qo(di, Gn) {
    1 & di && (e.TgZ(0, "lu-form-message", 56), e._UZ(1, "lu-svg-icon", 57), e._uU(2, " Обязательное поле "), e.qZA()), 2 & di && (e.xp6(1), e.Q6J("size", 24));
  }
  function Yo(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 58), e._UZ(1, "app-back-round-icon"), e.TgZ(2, "span"), e._uU(3), e.qZA(), e._UZ(4, "span", 59), e.TgZ(5, "span"), e._uU(6), e.qZA()()), 2 & di) {
      const dn = e.oxw(3);
      e.xp6(3), e.Oqu(null == dn.oldAnthropometryValue ? null : dn.oldAnthropometryValue.weight), e.xp6(3), e.Oqu(dn.formatDate(null == dn.oldAnthropometryValue ? null : dn.oldAnthropometryValue.weightTime));
    }
  }
  function wr(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 58), e._UZ(1, "app-back-round-icon"), e.TgZ(2, "span"), e._uU(3), e.qZA(), e._UZ(4, "span", 59), e.TgZ(5, "span"), e._uU(6), e.qZA()()), 2 & di) {
      const dn = e.oxw(4);
      e.xp6(3), e.Oqu(null == dn.oldForm004Value ? null : dn.oldForm004Value.liquid), e.xp6(3), e.Oqu(dn.formatDate(null == dn.oldForm004Value ? null : dn.oldForm004Value.liquidTime));
    }
  }
  function oo(di, Gn) {
    if (1 & di) {
      const dn = e.EpF();
      e.TgZ(0, "div", 31)(1, "label", 95)(2, "lu-input-wrapper")(3, "input", 96), e.NdJ("input", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw(3);
        return e.KtG(_r.setForm004Integer(Ro, "liquid"));
      })("blur", function () {
        e.CHM(dn);
        const Ro = e.oxw(3);
        return e.KtG(Ro.fixValues());
      }), e.qZA()()(), e.YNc(4, wr, 7, 2, "div", 36), e.qZA();
    }
    if (2 & di) {
      const dn = e.oxw(3);
      e.xp6(4), e.Q6J("ngIf", !(null == dn.oldForm004Value || !dn.oldForm004Value.liquid));
    }
  }
  function Di(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 58), e._UZ(1, "app-back-round-icon"), e.TgZ(2, "span"), e._uU(3), e.qZA(), e._UZ(4, "span", 59), e.TgZ(5, "span"), e._uU(6), e.qZA()()), 2 & di) {
      const dn = e.oxw(4);
      e.xp6(3), e.Oqu(null == dn.oldForm004Value ? null : dn.oldForm004Value.urine), e.xp6(3), e.Oqu(dn.formatDate(null == dn.oldForm004Value ? null : dn.oldForm004Value.urineTime));
    }
  }
  function Ci(di, Gn) {
    if (1 & di) {
      const dn = e.EpF();
      e.TgZ(0, "div", 31)(1, "label", 97)(2, "lu-input-wrapper")(3, "input", 98), e.NdJ("input", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw(3);
        return e.KtG(_r.setDecimal(Ro, "urine"));
      }), e.qZA()()(), e.YNc(4, Di, 7, 2, "div", 36), e.qZA();
    }
    if (2 & di) {
      const dn = e.oxw(3);
      e.xp6(4), e.Q6J("ngIf", !(null == dn.oldForm004Value || !dn.oldForm004Value.urine));
    }
  }
  function lo(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 58), e._UZ(1, "app-back-round-icon"), e.TgZ(2, "span"), e._uU(3), e.qZA(), e._UZ(4, "span", 59), e.TgZ(5, "span"), e._uU(6), e.qZA()()), 2 & di) {
      const dn = e.oxw(4);
      e.xp6(3), e.Oqu(null == dn.oldForm004Value ? null : dn.oldForm004Value.feces), e.xp6(3), e.Oqu(dn.formatDate(null == dn.oldForm004Value ? null : dn.oldForm004Value.fecesTime));
    }
  }
  function jo(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 58), e._UZ(1, "app-back-round-icon"), e.TgZ(2, "span"), e._uU(3), e.qZA(), e._UZ(4, "span", 59), e.TgZ(5, "span"), e._uU(6), e.qZA()()), 2 & di) {
      const dn = e.oxw(4);
      e.xp6(3), e.Oqu(null == dn.oldForm004Value ? null : dn.oldForm004Value.phlegm), e.xp6(3), e.Oqu(dn.formatDate(null == dn.oldForm004Value ? null : dn.oldForm004Value.phlegmTime));
    }
  }
  function Go(di, Gn) {
    if (1 & di) {
      const dn = e.EpF();
      e.TgZ(0, "div", 30)(1, "div", 45)(2, "label", 99)(3, "lu-input-wrapper")(4, "input", 100), e.NdJ("input", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw(3);
        return e.KtG(_r.setForm004Integer(Ro, "feces"));
      })("blur", function () {
        e.CHM(dn);
        const Ro = e.oxw(3);
        return e.KtG(Ro.fixValues());
      }), e.qZA()()(), e.YNc(5, lo, 7, 2, "div", 36), e.qZA(), e.TgZ(6, "div", 31)(7, "label", 101)(8, "lu-input-wrapper")(9, "input", 102), e.NdJ("input", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw(3);
        return e.KtG(_r.setDecimal(Ro, "phlegm"));
      }), e.qZA()()(), e.YNc(10, jo, 7, 2, "div", 36), e.qZA()();
    }
    if (2 & di) {
      const dn = e.oxw(3);
      e.xp6(5), e.Q6J("ngIf", !(null == dn.oldForm004Value || !dn.oldForm004Value.feces)), e.xp6(5), e.Q6J("ngIf", !(null == dn.oldForm004Value || !dn.oldForm004Value.phlegm));
    }
  }
  const ji = function (di) {
    return {
      "adaptive-chip": di
    };
  };
  function ti(di, Gn) {
    if (1 & di) {
      const dn = e.EpF();
      e.TgZ(0, "form", 68)(1, "app-close-icon", 69), e.NdJ("click", function () {
        e.CHM(dn);
        const Ro = e.oxw(2);
        return e.KtG(Ro.toggleAddInfo());
      }), e.qZA(), e.TgZ(2, "div", 70)(3, "span", 32), e._uU(4, "Транспортабельность "), e.TgZ(5, "span"), e._uU(6, "*"), e.qZA()(), e.TgZ(7, "lu-chips-group", 71)(8, "lu-chip", 72), e._uU(9, "Может идти "), e.qZA(), e.TgZ(10, "lu-chip", 73), e._uU(11, "Сидя"), e.qZA(), e.TgZ(12, "lu-chip", 74), e._uU(13, "Лежа"), e.qZA()(), e.YNc(14, Eo, 3, 1, "lu-form-message", 52), e.qZA(), e.YNc(15, Fo, 15, 2, "div", 75), e.TgZ(16, "div", 76)(17, "span", 32), e._uU(18, "Педикулез "), e.TgZ(19, "span"), e._uU(20, "*"), e.qZA()(), e.TgZ(21, "lu-chips-group", 77)(22, "lu-chip", 78), e._uU(23, "Выявлен"), e.qZA(), e.TgZ(24, "lu-chip", 79), e._uU(25, "Был выявлен ранее"), e.qZA(), e.TgZ(26, "lu-chip", 80), e._uU(27, "Обработка проведена"), e.qZA(), e.TgZ(28, "lu-chip", 81), e._uU(29, "Не выявлен"), e.qZA(), e.TgZ(30, "lu-chip", 82), e._uU(31, "Не проверен"), e.qZA()(), e.YNc(32, br, 3, 1, "lu-form-message", 52), e.YNc(33, Pr, 7, 2, "div", 36), e.qZA(), e.TgZ(34, "div", 30)(35, "form", 83)(36, "span", 32), e._uU(37, "Вес, кг "), e.TgZ(38, "span"), e._uU(39, "*"), e.qZA()(), e.TgZ(40, "label", 33)(41, "lu-input-wrapper"), e._UZ(42, "input", 84), e.qZA(), e.YNc(43, qo, 3, 1, "lu-form-message", 35), e.qZA(), e.YNc(44, Yo, 7, 2, "div", 36), e.qZA(), e.YNc(45, oo, 5, 1, "div", 85), e.YNc(46, Ci, 5, 1, "div", 85), e.qZA(), e.YNc(47, Go, 11, 2, "div", 86), e.qZA();
    }
    if (2 & di) {
      const dn = e.oxw(2);
      e.Q6J("formGroup", dn.form004Form), e.xp6(8), e.Q6J("ngClass", e.VKq(14, ji, dn.isTablet)), e.xp6(6), e.Q6J("ngIf", dn.showValidationErrors && dn.getForm004Ctrl("transportability").hasError("required")), e.xp6(1), e.Q6J("ngIf", !dn.isOpenFromCheckList), e.xp6(17), e.Q6J("ngIf", dn.showValidationErrors && dn.getForm004Ctrl("pediculosis").hasError("required")), e.xp6(1), e.Q6J("ngIf", !(null == dn.oldForm004Value || !dn.oldForm004Value.pediculosis)), e.xp6(2), e.Q6J("formGroup", dn.anthropometryForm), e.xp6(7), e.Q6J("luMask", dn.masks.number)("maskPlaceholder", !1), e.xp6(1), e.Q6J("ngIf", dn.showValidationErrors && dn.getAnthropometryCtrl("weight").hasError("required")), e.xp6(1), e.Q6J("ngIf", !(null == dn.oldAnthropometryValue || !dn.oldAnthropometryValue.weight)), e.xp6(1), e.Q6J("ngIf", !dn.isOpenFromCheckList), e.xp6(1), e.Q6J("ngIf", !dn.isOpenFromCheckList), e.xp6(1), e.Q6J("ngIf", !dn.isOpenFromCheckList);
    }
  }
  const fi = function (di) {
    return {
      "padding-top": di
    };
  };
  function Fi(di, Gn) {
    if (1 & di) {
      const dn = e.EpF();
      e.TgZ(0, "form", 29)(1, "div", 30)(2, "div", 31)(3, "span", 32), e._uU(4, "ЧДД, движений/мин "), e.TgZ(5, "span"), e._uU(6, "*"), e.qZA()(), e.TgZ(7, "label", 33)(8, "lu-input-wrapper")(9, "input", 34), e.NdJ("input", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw();
        return e.KtG(_r.setInteger(Ro, "rr"));
      })("blur", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw();
        return e.KtG(_r.countPoints(Ro, "rr"));
      }), e.qZA()(), e.YNc(10, Jo, 3, 1, "lu-form-message", 35), e.qZA(), e.YNc(11, fr, 7, 2, "div", 36), e.qZA(), e.TgZ(12, "div", 31)(13, "span", 32), e._uU(14, "SpO2, % "), e.TgZ(15, "span"), e._uU(16, "*"), e.qZA()(), e.TgZ(17, "label", 33)(18, "lu-input-wrapper")(19, "input", 37), e.NdJ("input", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw();
        return e.KtG(_r.setInteger(Ro, "sp"));
      })("blur", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw();
        return e.KtG(_r.countPoints(Ro, "sp"));
      }), e.qZA()(), e.YNc(20, pt, 3, 1, "lu-form-message", 35), e.qZA(), e.YNc(21, Dt, 7, 4, "div", 36), e.qZA(), e.TgZ(22, "div", 31)(23, "span", 38), e._uU(24, "Потребность в кислороде, л./мин "), e.TgZ(25, "span"), e._uU(26, "*"), e.qZA()(), e.TgZ(27, "label", 33)(28, "lu-input-wrapper")(29, "input", 39), e.NdJ("input", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw();
        return e.KtG(_r.setInteger(Ro, "oxygenation"));
      })("blur", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw();
        return e.KtG(_r.countPoints(Ro, "oxygenation"));
      }), e.qZA()(), e.YNc(30, Ht, 3, 1, "lu-form-message", 35), e.qZA(), e.YNc(31, Dn, 7, 2, "div", 36), e.qZA(), e._UZ(32, "div", 40), e.YNc(33, li, 9, 2, "div", 41), e._UZ(34, "div", 40), e.TgZ(35, "div", 31)(36, "span", 42), e._uU(37, "Температура, °C "), e.TgZ(38, "span"), e._uU(39, "*"), e.qZA()(), e.TgZ(40, "label", 33)(41, "lu-input-wrapper")(42, "input", 43), e.NdJ("input", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw();
        return e.KtG(_r.setTemperature(Ro));
      })("blur", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw();
        return e.KtG(_r.countPoints(Ro, "temperature"));
      }), e.qZA()(), e.YNc(43, zn, 3, 1, "lu-form-message", 35), e.qZA(), e.YNc(44, $t, 7, 4, "div", 36), e.qZA(), e.TgZ(45, "div", 31)(46, "span", 42), e._uU(47, "АД (в), мм.рт.ст. "), e.TgZ(48, "span"), e._uU(49, "*"), e.qZA()(), e.TgZ(50, "label", 33)(51, "lu-input-wrapper")(52, "input", 44), e.NdJ("input", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw();
        return e.KtG(_r.setInteger(Ro, "sys"));
      })("blur", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw();
        return e.KtG(_r.countPoints(Ro, "sys"));
      }), e.qZA()(), e.YNc(53, Mn, 3, 1, "lu-form-message", 35), e.qZA(), e.YNc(54, Qn, 7, 4, "div", 36), e.qZA(), e.TgZ(55, "div", 45)(56, "span", 42), e._uU(57, "АД (н), мм.рт.ст."), e.qZA(), e.TgZ(58, "label", 33)(59, "lu-input-wrapper")(60, "input", 46), e.NdJ("input", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw();
        return e.KtG(_r.setInteger(Ro, "dia"));
      })("blur", function () {
        e.CHM(dn);
        const Ro = e.oxw();
        return e.KtG(Ro.fixValues());
      }), e.qZA()(), e.YNc(61, In, 3, 1, "lu-form-message", 35), e.qZA(), e.YNc(62, ui, 7, 4, "div", 36), e.qZA(), e.TgZ(63, "div", 47)(64, "span", 32), e._uU(65, "ЧСС, уд/мин "), e.TgZ(66, "span"), e._uU(67, "*"), e.qZA()(), e.TgZ(68, "label", 33)(69, "lu-input-wrapper")(70, "input", 48), e.NdJ("input", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw();
        return e.KtG(_r.setInteger(Ro, "hr"));
      })("blur", function (Ro) {
        e.CHM(dn);
        const _r = e.oxw();
        return e.KtG(_r.countPoints(Ro, "hr"));
      }), e.qZA()(), e.YNc(71, To, 3, 1, "lu-form-message", 35), e.qZA(), e.YNc(72, bi, 7, 2, "div", 36), e.qZA()(), e.TgZ(73, "div", 49)(74, "span", 32), e._uU(75, "Уровень сознания "), e.TgZ(76, "span"), e._uU(77, "*"), e.qZA()(), e.TgZ(78, "lu-chips-group", 50), e.YNc(79, qn, 2, 3, "lu-chip", 51), e.qZA(), e.YNc(80, Xn, 3, 1, "lu-form-message", 52), e.qZA(), e.TgZ(81, "div", 53), e.YNc(82, Yi, 3, 0, "div", 54), e.YNc(83, ti, 48, 16, "form", 55), e.qZA()();
    }
    if (2 & di) {
      const dn = e.oxw();
      e.Q6J("formGroup", dn.news2Form), e.xp6(10), e.Q6J("ngIf", dn.showValidationErrors && dn.getNEWS2Ctrl("rr").hasError("required")), e.xp6(1), e.Q6J("ngIf", !(null == dn.oldNews2Value || !dn.oldNews2Value.rr)), e.xp6(9), e.Q6J("ngIf", dn.showValidationErrors && dn.getNEWS2Ctrl("sp").hasError("required")), e.xp6(1), e.Q6J("ngIf", !(null == dn.oldNews2Value || !dn.oldNews2Value.sp)), e.xp6(9), e.Q6J("ngIf", dn.showValidationErrors && dn.getNEWS2Ctrl("oxygenation").hasError("required")), e.xp6(1), e.Q6J("ngIf", !(null == dn.oldNews2Value || !dn.oldNews2Value.oxygenation) || 0 === (null == dn.oldNews2Value ? null : dn.oldNews2Value.oxygenation)), e.xp6(2), e.Q6J("ngIf", dn.isShowOxygenationDevices), e.xp6(9), e.Q6J("luMask", dn.masks.temperature)("maskPlaceholder", !1), e.xp6(1), e.Q6J("ngIf", dn.showValidationErrors && dn.getNEWS2Ctrl("temperature").hasError("required")), e.xp6(1), e.Q6J("ngIf", !(null == dn.oldNews2Value || !dn.oldNews2Value.temperature)), e.xp6(9), e.Q6J("ngIf", dn.showValidationErrors && dn.getNEWS2Ctrl("sys").hasError("required")), e.xp6(1), e.Q6J("ngIf", !(null == dn.oldNews2Value || !dn.oldNews2Value.sys)), e.xp6(7), e.Q6J("ngIf", dn.showValidationErrors && dn.getNEWS2Ctrl("dia").hasError("required")), e.xp6(1), e.Q6J("ngIf", !(null == dn.oldNews2Value || !dn.oldNews2Value.dia)), e.xp6(1), e.Q6J("ngStyle", e.VKq(23, fi, dn.isShowOxygenationDevices ? "4px" : "8px")), e.xp6(8), e.Q6J("ngIf", dn.showValidationErrors && dn.getNEWS2Ctrl("hr").hasError("required")), e.xp6(1), e.Q6J("ngIf", !(null == dn.oldNews2Value || !dn.oldNews2Value.hr)), e.xp6(7), e.Q6J("ngForOf", dn.consciousnessList), e.xp6(1), e.Q6J("ngIf", dn.showValidationErrors && dn.getNEWS2Ctrl("consciousness").hasError("required")), e.xp6(2), e.Q6J("ngIf", !dn.addInfo), e.xp6(1), e.Q6J("ngIf", dn.addInfo);
    }
  }
  function Rn(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 111)(1, "span", 24), e._uU(2), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & di) {
      const dn = Gn.$implicit,
        wo = e.oxw(2);
      e.ekj("width", "Потребность в кислороде, л./мин" === dn.label), e.xp6(2), e.Oqu(dn.label), e.xp6(1), e.ekj("news2-view-form__value_danger", dn.isDanger), e.xp6(1), e.Oqu(wo.formatViewValue(dn.value));
    }
  }
  function ki(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 112)(1, "span", 24), e._uU(2), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & di) {
      const dn = Gn.ngIf,
        wo = e.oxw(2);
      e.xp6(2), e.Oqu(dn.label), e.xp6(2), e.Oqu(wo.formatViewValue(dn.value));
    }
  }
  function Ei(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 111)(1, "span", 24), e._uU(2), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & di) {
      const dn = Gn.$implicit,
        wo = e.oxw(2);
      e.ekj("width", "АД (н), мм.рт.ст." === dn.label), e.xp6(2), e.Oqu(dn.label), e.xp6(1), e.ekj("news2-view-form__value_danger", dn.isDanger), e.xp6(1), e.Oqu(wo.formatViewValue(dn.value));
    }
  }
  function Wt(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 113)(1, "span", 24), e._uU(2), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & di) {
      const dn = Gn.ngIf,
        wo = e.oxw(2);
      e.xp6(2), e.Oqu(dn.label), e.xp6(2), e.Oqu(wo.formatViewValue(dn.value));
    }
  }
  function Oi(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 114)(1, "span", 24), e._uU(2), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & di) {
      const dn = Gn.ngIf,
        wo = e.oxw(2);
      e.xp6(2), e.Oqu(dn.label), e.xp6(2), e.Oqu(wo.displayConsciousness);
    }
  }
  function Ji(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 121)(1, "span", 24), e._uU(2), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & di) {
      const dn = Gn.ngIf,
        wo = e.oxw(3);
      e.xp6(2), e.Oqu(dn.label), e.xp6(2), e.Oqu(wo.formatViewValue(dn.value));
    }
  }
  function Ao(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 122)(1, "span", 24), e._uU(2), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & di) {
      const dn = Gn.ngIf,
        wo = e.oxw(3);
      e.xp6(2), e.Oqu(dn.label), e.xp6(2), e.Oqu(wo.formatViewValue(dn.value));
    }
  }
  function Sr(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 122)(1, "span", 24), e._uU(2), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & di) {
      const dn = Gn.ngIf,
        wo = e.oxw(3);
      e.xp6(2), e.Oqu(dn.label), e.xp6(2), e.Oqu(wo.formatViewValue(dn.value));
    }
  }
  function us(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 121)(1, "span", 24), e._uU(2), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & di) {
      const dn = Gn.ngIf,
        wo = e.oxw(3);
      e.xp6(2), e.Oqu(dn.label), e.xp6(2), e.Oqu(wo.formatViewValue(dn.value));
    }
  }
  function Ps(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 123)(1, "span", 24), e._uU(2), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & di) {
      const dn = Gn.$implicit,
        wo = e.oxw(3);
      e.ekj("width", "Суточное кол-во мочи, мл" === dn.label), e.xp6(2), e.Oqu(dn.label), e.xp6(2), e.Oqu(wo.formatViewValue(dn.value));
    }
  }
  function hs(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 122)(1, "span", 24), e._uU(2), e.qZA(), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & di) {
      const dn = Gn.$implicit,
        wo = e.oxw(3);
      e.xp6(2), e.Oqu(dn.label), e.xp6(2), e.Oqu(wo.formatViewValue(dn.value));
    }
  }
  function oi(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 115)(1, "div", 116), e.YNc(2, Ji, 5, 2, "div", 117), e.YNc(3, Ao, 5, 2, "div", 118), e.YNc(4, Sr, 5, 2, "div", 118), e.YNc(5, us, 5, 2, "div", 117), e.YNc(6, Ps, 5, 4, "div", 119), e.YNc(7, hs, 5, 2, "div", 120), e.qZA()()), 2 & di) {
      const dn = e.oxw(2);
      e.xp6(2), e.Q6J("ngIf", dn.form004ViewTransportability), e.xp6(1), e.Q6J("ngIf", dn.form004ViewBath), e.xp6(1), e.Q6J("ngIf", dn.form004ViewLinen), e.xp6(1), e.Q6J("ngIf", dn.form004ViewPediculosis), e.xp6(1), e.Q6J("ngForOf", dn.form004ViewMetricsRow), e.xp6(1), e.Q6J("ngForOf", dn.form004ViewOutputRow);
    }
  }
  function yo(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 103)(1, "div", 104)(2, "div", 105), e.YNc(3, Rn, 5, 6, "div", 106), e.YNc(4, ki, 5, 2, "div", 107), e.YNc(5, Ei, 5, 6, "div", 106), e.YNc(6, Wt, 5, 2, "div", 108), e.YNc(7, Oi, 5, 2, "div", 109), e.qZA()(), e.YNc(8, oi, 8, 6, "div", 110), e.qZA()), 2 & di) {
      const dn = e.oxw();
      e.xp6(3), e.Q6J("ngForOf", dn.news2ViewTopRow), e.xp6(1), e.Q6J("ngIf", dn.news2ViewDevice), e.xp6(1), e.Q6J("ngForOf", dn.news2ViewMiddleRow), e.xp6(1), e.Q6J("ngIf", dn.news2ViewHr), e.xp6(1), e.Q6J("ngIf", dn.news2ViewConsciousness), e.xp6(1), e.Q6J("ngIf", dn.hasForm004ViewData);
    }
  }
  const Qi = function () {
    return {
      color: "#999"
    };
  };
  function Qo(di, Gn) {
    if (1 & di && (e.TgZ(0, "div"), e._uU(1, "Следующее измерение"), e.qZA(), e.TgZ(2, "div"), e._uU(3), e.qZA()), 2 & di) {
      const dn = e.oxw(2);
      e.Akn(e.DdM(3, Qi)), e.xp6(3), e.Oqu(dn.timeHint);
    }
  }
  function Kr(di, Gn) {
    if (1 & di && (e.TgZ(0, "app-tooltip-icon", 124), e.YNc(1, Qo, 4, 4, "ng-template", null, 125, e.W1O), e.qZA()), 2 & di) {
      const dn = e.MAs(2);
      e.Q6J("luTooltip", dn)("withArrow", !1)("borderOffset", -8);
    }
  }
  function _s(di, Gn) {
    if (1 & di) {
      const dn = e.EpF();
      e.TgZ(0, "button", 130), e.NdJ("click", function () {
        e.CHM(dn);
        const Ro = e.oxw(2);
        return e.KtG(Ro.onClear());
      }), e._uU(1, " Очистить "), e.qZA();
    }
    2 & di && e.Q6J("size", "medium")("color", "red");
  }
  function ra(di, Gn) {
    if (1 & di) {
      const dn = e.EpF();
      e.TgZ(0, "button", 131), e.NdJ("click", function (Ro) {
        return e.CHM(dn), e.oxw(2).onSave(), e.KtG(Ro.stopPropagation());
      }), e._uU(1, " Сохранить "), e.qZA();
    }
    2 & di && e.Q6J("size", "medium")("color", "blue");
  }
  function Or(di, Gn) {
    if (1 & di) {
      const dn = e.EpF();
      e.TgZ(0, "button", 132), e.NdJ("click", function (Ro) {
        return e.CHM(dn), e.oxw(2).approveChanges(), e.KtG(Ro.stopPropagation());
      }), e._uU(1, " Подтвердить "), e.qZA();
    }
  }
  function Fs(di, Gn) {
    if (1 & di && (e.TgZ(0, "div", 126), e.YNc(1, _s, 2, 2, "button", 127), e.YNc(2, ra, 2, 2, "button", 128), e.YNc(3, Or, 2, 0, "button", 129), e.qZA()), 2 & di) {
      const dn = e.oxw();
      e.xp6(1), e.Q6J("ngIf", !dn.isOpenFromCheckList), e.xp6(1), e.Q6J("ngIf", !dn.isOpenFromCheckList), e.xp6(1), e.Q6J("ngIf", dn.isOpenFromCheckList);
    }
  }
  function xa(di, Gn) {
    1 & di && (e.TgZ(0, "div", 126), e.Hsn(1), e.qZA());
  }
  const rs = [[["", "news2ViewActions", ""]]],
    Js = function (di) {
      return {
        "news2__close-but": di
      };
    },
    ho = function (di) {
      return {
        "news2-heading-adaptive": di
      };
    },
    uo = function (di) {
      return {
        "margin-top: -8px": di
      };
    },
    ri = function (di) {
      return {
        "news2-footer__check-list-news2-footer": di
      };
    },
    jt = ["выявлен", "был выявлен ранее, обрати внимание", "был выявлен, обработка проведена", "не выявлен", "не проверен"];
  let hn = ((tn = class {
    constructor(Gn, dn, wo, Ro, _r, qr, Ts, js, ws) {
      this.data = Gn, this.modalRef = dn, this.cdr = wo, this.compositionsBaseService = Ro, this.store = _r, this.fb = qr, this.breakpointObserver = Ts, this.messageService = js, this.sharedDataService = ws, this.isOpenFromCheckList = !1, this.checklistShowValidationErrors = !1, this.isViewMode = !1, this.headingTitle = "NEWS2", this.closeNews2PanelEvent = new e.vpe(), this.news2ViewTopRow = [], this.news2ViewDevice = null, this.news2ViewMiddleRow = [], this.news2ViewHr = null, this.news2ViewConsciousness = null, this.form004ViewTransportability = null, this.form004ViewBath = null, this.form004ViewLinen = null, this.form004ViewPediculosis = null, this.form004ViewMetricsRow = [], this.form004ViewOutputRow = [], this.displayConsciousness = "—", this.commaRegex = /^\d+(,)?$/, this.decimalRegex = /^\d+(,\d+)?$/, this.integerNews2Fields = ["rr", "sp", "oxygenation", "sys", "dia", "hr"], this.form004IntegerLimits = {
        liquid: {
          min: 0,
          max: 2e4
        },
        feces: {
          min: 0,
          max: 20
        }
      }, this.integerInputRegex = /^\d*$/, this.masks = {
        temperature: [/\d/, /\d/, ",", /\d/],
        number: /\d/,
        number_2: /\d?$/,
        number_3: /\d{0,2}$/
      }, this.isShowOxygenationDevices = !1, this.oxygenationList = ["Канюля", "Маска", "Шлем", "ВПО", "НИВЛ", "CPAP", "BiPAP", "TriPAP", "ИВЛ"], this.consciousnessList = ["Ясное", "Спутанное", "Реакция на речь", "Реакция на боль", "Отсутствие реакции"], this.menuBodyHeight = "", this.addInfo = !1, this.showValidationErrors = !1, this.points = {
        temperature: 0,
        sys: 0,
        hr: 0,
        rr: 0,
        sp: 0,
        oxygenation: 0,
        consciousness: 0
      }, this.sum = 0, this.risk = "", this.news2Form = this._initNews2Form(), this.form004Form = this._initForm004Form(), this.anthropometryForm = this._initAnthropometryForm(), this.isTablet = !1, this.isModalAlone = !1, this.requiredNews2Fields = ["rr", "sp", "oxygenation", "temperature", "sys", "hr", "consciousness"], this.anthropometryForm.valueChanges.pipe((0, E.t)(this)).subscribe(() => {
        this._syncAnthropometryWeightToForm004();
      }), ["temperature", "sys", "dia", "hr", "rr"].forEach(Us => {
        this.getNEWS2Ctrl(Us).valueChanges.pipe((0, E.t)(this)).subscribe(Ws => this.getForm004Ctrl(Us).patchValue(Ws));
      }), this.getNEWS2Ctrl("consciousness").valueChanges.pipe((0, E.t)(this)).subscribe(Us => {
        this.getNEWS2Ctrl("consciousnessCode").patchValue(this.resolveConsciousnessCode(Us), {
          emitEvent: !1
        });
      }), this.getNEWS2Ctrl("oxygenationDevice").valueChanges.pipe((0, E.t)(this)).subscribe(Us => {
        Us && Us.length > 0 && this.getNEWS2Ctrl("oxygenationDeviceCode").patchValue(this.oxygenationList.map(Ws => Ws?.toLowerCase()).indexOf(Us[0]?.toLowerCase()) + 1);
      }), this.getNEWS2Ctrl("oxygenation").valueChanges.pipe((0, E.t)(this)).subscribe(Us => {
        const Ws = Je.isPositiveOxygenDemand(Us);
        this.isShowOxygenationDevices = Ws;
        const sa = this.getNEWS2Ctrl("oxygenationDevice"),
          ha = this.getNEWS2Ctrl("oxygenationDeviceCode");
        Ws ? sa.setValidators([Je.requiredFilled]) : (sa.clearValidators(), sa.reset(null, {
          emitEvent: !1
        }), ha.reset(null, {
          emitEvent: !1
        })), sa.updateValueAndValidity({
          emitEvent: !1
        }), this.cdr.markForCheck();
      }), this.getForm004Ctrl("pediculosis").valueChanges.pipe((0, E.t)(this)).subscribe(Us => {
        Us = Us instanceof Array ? Us : [Us], this.getForm004Ctrl("pediculosisFlag").patchValue(Us.some(Ws => "не проверен" !== Ws?.toLowerCase()));
      }), this.getForm004Ctrl("transportability").valueChanges.pipe((0, E.t)(this)).subscribe(Us => Us ? this.getForm004Ctrl("transportabilityCode").patchValue("unknown", {
        emitEvent: !1
      }) : this.getForm004Ctrl("transportabilityCode").reset(null, {
        emitEvent: !1
      }));
    }
    ngOnChanges(Gn) {
      (0, B.Xy)(Gn.scalesValue?.currentValue, Gn.scalesValue?.previousValue) || (this.initScalesValue = (0, ke.sZ)(this.scalesValue), this._countPointsFromExternal(), this._parseNewsDataFromForm()), Gn.headingTitle && this.isViewMode && this.cdr.markForCheck(), Gn.indexScalesSeed?.currentValue && this._applyIndexAsOldValues(), Gn.checklistShowValidationErrors?.currentValue && this.revealValidationErrors();
    }
    ngAfterViewInit() {
      this.isViewMode && this.scalesValue && (this._parseNewsDataFromForm(), this.cdr.markForCheck()), this.checklistShowValidationErrors && this.revealValidationErrors();
    }
    get ownerInitials() {
      const Gn = this.scalesValue?.news2?.owner;
      return Gn && Gn?.split(" ").map((dn, wo) => wo ? dn[0].toUpperCase() + "." : dn).join(" ");
    }
    get assessmentTime() {
      return this.scalesValue?.news2?.time_committed ?? null;
    }
    get hasForm004ViewData() {
      return [this.form004ViewTransportability, this.form004ViewBath, this.form004ViewLinen, this.form004ViewPediculosis, ...this.form004ViewMetricsRow, ...this.form004ViewOutputRow].some(Gn => null != Gn?.value && "" !== Gn.value);
    }
    formatViewValue(Gn) {
      return (0, W.vO)(Gn);
    }
    ngOnInit() {
      this.breakpointObserver.observe(x.ok).pipe((0, E.t)(this)).subscribe(Gn => this.isTablet = Gn.matches), this.data && (this.fullNameBuilder(this.data?.payload), this.isModalAlone = !0), this.loadEhrContext$().pipe((0, E.t)(this), (0, d.w)(Gn => this._setFromCompositions(Gn)), (0, M.K)(Gn => (console.error("news2 ehr load error", Gn), b.E))).subscribe(), this.indexScalesSeed && this._applyIndexAsOldValues();
    }
    fixValues() {
      let Gn = {
        ...this.news2Form.value,
        ...this._fixCommonValues(this.news2Form.value)
      };
      Gn.sp && Gn.sp > 100 && (Gn.sp = 100), (Gn.sp || 0 === Gn.sp) && Gn.sp < 40 && (Gn.sp = 40), Gn.oxygenation && Gn.oxygenation > 70 && (Gn.oxygenation = 70), this.news2Form.patchValue(Gn, {
        emitEvent: !1
      });
      let dn = {
        ...this.form004Form.value,
        ...this._fixCommonValues(this.form004Form.value)
      };
      dn.liquid = this._clampForm004Integer(dn.liquid, "liquid"), dn.feces = this._clampForm004Integer(dn.feces, "feces"), this.form004Form.patchValue(dn, {
        emitEvent: !1
      });
    }
    get formatPointNews2() {
      return (0, f.bA)(this.sum);
    }
    get news2FormIsEmpty() {
      return !Object.keys(this.points).some(Gn => !!this.news2Form.value[Gn] || 0 === this.news2Form.value[Gn]);
    }
    _fixCommonValues(Gn) {
      let dn = {
        ...Gn
      };
      if (this.integerNews2Fields.forEach(wo => {
        const Ro = dn[wo];
        null != Ro && "" !== Ro && (dn[wo] = Math.trunc(Number(String(Ro).replace(",", "."))));
      }), dn.rr && dn.rr > 50 && (dn.rr = 50), null != dn.temperature && "" !== dn.temperature) {
        const wo = String(dn.temperature).replace(".", ",");
        if (this.commaRegex.test(wo) || this.decimalRegex.test(wo)) {
          const Ro = Number(wo.replace(",", "."));
          dn.temperature = Number.isFinite(Ro) ? Ro > 42.9 ? "42,9" : Ro < 20 ? "20,0" : wo.length < 4 ? `${wo},0` : wo : null;
        } else dn.temperature = null;
      }
      return dn.sys && dn.sys > 300 && (dn.sys = 300), dn.dia && dn.dia > 150 && (dn.dia = 150), dn.hr && dn.hr > 300 && (dn.hr = 300), dn;
    }
    _setFromCompositions(Gn) {
      console.log("loadComp");
      const wo = [{
        code: "news2",
        cls: R.u,
        oldData: "oldNews2Value",
        uid: this.fullData?.data?.news2?.compositionUid,
        api: x.hd
      }, {
        code: "form004",
        cls: R.KS,
        oldData: "oldForm004Value",
        uid: this.fullData?.data?.form004?.compositionUid,
        api: x.fh
      }, {
        code: "antropometricheskie_dannie",
        cls: R.je,
        oldData: "oldAnthropometryValue",
        uid: (0, j.sc)(this.fullData?.data) ?? this.fullData?.data?.anthropometricData?.compositionUid,
        api: x.Zr
      }].filter(Ro => Ro?.uid).map(Ro => Gn.getMedicalEntry(Ro.uid).pipe((0, A.b)(_r => {
        if (!_r.isEmpty()) {
          const qr = new Ro.cls(_r.getRoot()),
            Ts = (0, a.yE)(Ro.api, qr.parsedFromCompositionData[Ro.code]);
          "news2" === Ro.code && Ts && (this.displayConsciousness = Ts.consciousness.join(", ")), this[Ro.oldData] = Ts, "form004" === Ro.code && (this.loadedForm004FromEhr = Ts), "antropometricheskie_dannie" === Ro.code && (this.loadedAnthropometryFromEhr = Ts), this.cdr.markForCheck();
        }
      })));
      return (0, N.D)(wo).pipe((0, A.b)(() => {
        if (this._isTemperatureListContext()) return this._openAddInfoSection(), this._prefillForm004FromDayIndex(), this._applyHygieneDefaultsIfEmpty(), void this.cdr.markForCheck();
        this._hasAdditionalDataFromBackend() && (this._applyAdditionalDataPrefill({
          form004: this.loadedForm004FromEhr,
          anthropometry: this.loadedAnthropometryFromEhr
        }, {
          defaultPediculosis: !1
        }), this._openAddInfoSection());
      }));
    }
    _isTemperatureListContext() {
      return "scalesTemperaturePatientList:reload" === this.reloadListAction;
    }
    _getDayIndexHygieneFields() {
      const Gn = this.indexScalesSeed?.form004,
        dn = (0, Le.mw)(this.fullData?.data),
        wo = {},
        Ro = (0, F.pQ)(Gn?.bath ?? dn.bath);
      null != Ro && (wo.bath = Ro);
      const _r = (0, F.OP)(Gn?.linen ?? dn.linen);
      return _r && (wo.linen = _r), wo;
    }
    _prefillForm004FromDayIndex() {
      if (this.isOpenFromCheckList || this.isViewMode) return;
      const Gn = this._getDayIndexHygieneFields();
      this._hasAdditionalDataFromBackend() ? this._applyAdditionalDataPrefill({
        form004: {
          ...this.loadedForm004FromEhr,
          ...Gn
        },
        anthropometry: this.loadedAnthropometryFromEhr
      }, {
        defaultPediculosis: !1
      }) : this._applyAdditionalDataPrefill({
        form004: {
          ...this.indexScalesSeed?.form004,
          ...Gn
        },
        anthropometry: this.indexScalesSeed?.anthropometry
      }, {
        defaultPediculosis: !0
      });
    }
    _applyHygieneDefaultsIfEmpty() {
      this.isOpenFromCheckList || this.isViewMode || (this._isForm004FieldEmpty("bath") && this.getForm004Ctrl("bath").patchValue(!1, {
        emitEvent: !1
      }), this._isForm004FieldEmpty("linen") && this.getForm004Ctrl("linen").patchValue("нет", {
        emitEvent: !1
      }));
    }
    fullNameBuilder(Gn) {
      this.fullName = `${Gn?.data?.careCase?.lastName || ""} ${Gn?.data?.careCase?.firstName || ""} ${Gn?.data?.careCase?.secondName || ""}`;
    }
    isOldValueDanger(Gn, dn) {
      return (0, y.K$)(Gn, dn, {
        sys: this.oldNews2Value?.sys,
        dia: this.oldNews2Value?.dia
      });
    }
    _applyIndexAsOldValues() {
      if (!this.indexScalesSeed) return;
      const Gn = this.indexTimeCommitted ? new Date(this.indexTimeCommitted) : new Date(),
        dn = this.indexScalesSeed.news2;
      dn && Object.values(dn).some(_r => null != _r && "" !== _r) && (this.oldNews2Value = {
        ...dn,
        rrTime: Gn,
        spTime: Gn,
        oxygenationTime: Gn,
        temperatureTime: Gn,
        sysTime: Gn,
        hrTime: Gn
      });
      const wo = this.indexScalesSeed.form004;
      wo && Object.values(wo).some(_r => null != _r && "" !== _r) && (this.oldForm004Value = {
        ...wo,
        pediculosisTime: Gn,
        liquidTime: Gn,
        phlegmTime: Gn,
        urineTime: Gn,
        fecesTime: Gn
      });
      const Ro = this.indexScalesSeed.anthropometry;
      null != Ro?.weight && (this.oldAnthropometryValue = {
        ...Ro,
        weightTime: Gn
      }), this.cdr.markForCheck();
    }
    _prefillAdditionalDataFromIndexSeed() {
      this._prefillForm004FromDayIndex();
    }
    _isForm004FieldEmpty(Gn) {
      const dn = this.getForm004Ctrl(Gn).value;
      return null == dn || "" === dn;
    }
    _applyAdditionalDataPrefill(Gn, dn = {}) {
      const wo = Gn.form004?.transportability;
      wo && this._isForm004FieldEmpty("transportability") && (this.getForm004Ctrl("transportability").patchValue(wo, {
        emitEvent: !1
      }), this.getForm004Ctrl("transportabilityCode").patchValue("unknown", {
        emitEvent: !1
      }));
      const Ro = (0, F.pQ)(Gn.form004?.bath);
      null != Ro && this._isForm004FieldEmpty("bath") && this.getForm004Ctrl("bath").patchValue(Ro, {
        emitEvent: !1
      });
      const _r = (0, F.OP)(Gn.form004?.linen);
      _r && this._isForm004FieldEmpty("linen") && this.getForm004Ctrl("linen").patchValue(_r, {
        emitEvent: !1
      });
      let qr = this._normalizePediculosisForForm(Gn.form004?.pediculosis);
      !qr && dn.defaultPediculosis && (qr = "не проверен"), qr && !this.getForm004Ctrl("pediculosis").value && (this.getForm004Ctrl("pediculosis").patchValue(qr, {
        emitEvent: !1
      }), this.getForm004Ctrl("pediculosisFlag").patchValue("не проверен" !== qr.toLowerCase(), {
        emitEvent: !1
      }));
      const Ts = Gn.form004?.weight ?? Gn.anthropometry?.weight;
      null != Ts && null == this.getAnthropometryCtrl("weight").value && this.getAnthropometryCtrl("weight").patchValue(Ts, {
        emitEvent: !1
      }), this._syncAnthropometryWeightToForm004();
    }
    _syncAnthropometryWeightToForm004() {
      const Gn = this.getAnthropometryCtrl("weight").value;
      null == Gn || "" === Gn || (this.getForm004Ctrl("weight").patchValue(Gn, {
        emitEvent: !1
      }), this.getForm004Ctrl("weight").updateValueAndValidity({
        emitEvent: !1
      }));
    }
    _hasAdditionalDataFromBackend() {
      return this._hasAdditionalDataInSource({
        form004: this.loadedForm004FromEhr,
        anthropometry: this.loadedAnthropometryFromEhr
      });
    }
    _hasAdditionalDataInSource(Gn) {
      return !(!Gn.form004?.transportability && !Gn.form004?.pediculosis && null == Gn.form004?.weight && null == Gn.anthropometry?.weight);
    }
    _normalizePediculosisForForm(Gn) {
      if (null == Gn || "" === Gn) return;
      const dn = Array.isArray(Gn) ? Gn[0] : Gn,
        wo = String(dn).trim().toLowerCase();
      return jt.find(_r => _r === wo) || (wo.startsWith("не провер") ? "не проверен" : jt.find(_r => wo.includes(_r) || _r.includes(wo)));
    }
    _openAddInfoSection() {
      this.addInfo || this.isViewMode || (this.addInfo = !0, ["weight", "pediculosis", "transportability"].forEach(Gn => {
        this.getForm004Ctrl(Gn).setValidators([m.kI.required]), this.getForm004Ctrl(Gn).updateValueAndValidity({
          emitEvent: !1
        });
      }), this.getAnthropometryCtrl("weight").setValidators([m.kI.required]), this.getAnthropometryCtrl("weight").updateValueAndValidity({
        emitEvent: !1
      }), this._syncAnthropometryWeightToForm004(), this.cdr.markForCheck());
    }
    _buildNews2ViewItem(Gn, dn, wo) {
      return {
        label: Gn,
        value: dn,
        isDanger: !!wo && (0, y.K$)(wo, dn, {
          sys: this.scalesValue?.news2?.sys,
          dia: this.scalesValue?.news2?.dia
        })
      };
    }
    _formatDeviceValue(Gn) {
      if (!Gn) return;
      const dn = Array.isArray(Gn) ? Gn[0] : Gn;
      return dn ? dn.charAt(0).toUpperCase() + dn.slice(1) : void 0;
    }
    _parseNewsDataFromForm() {
      const Gn = this.scalesValue.form004,
        dn = (0, a.yE)(x.hd, this.scalesValue.news2),
        wo = this.scalesValue.anthropometry;
      dn && (this.news2Form.patchValue(dn), this.sum = dn.sum, this.risk = dn.risk), wo ? this.anthropometryForm.patchValue(wo) : Gn && Gn?.weight && this.getAnthropometryCtrl("weight").patchValue(Gn?.weight), Gn && Object.values(Gn).some(qr => !!qr) ? (this.form004Form.patchValue(Gn), this._openAddInfoSection()) : null != wo?.weight && this._openAddInfoSection(), this.viewValuesMap = {
        news2: [this._buildNews2ViewItem("ЧДД, движений/мин", this.scalesValue?.news2?.rr), this._buildNews2ViewItem("SpO2, %", this.scalesValue?.news2?.sp, "sp"), this._buildNews2ViewItem("Потребность в кислороде, л./мин", this.scalesValue?.news2?.oxygenation), this._buildNews2ViewItem("Устройство инсуффляции кислорода", this._formatDeviceValue(this.scalesValue?.news2?.oxygenationDevice)), this._buildNews2ViewItem("Температура, °C", this.scalesValue?.news2?.temperature, "temperature"), this._buildNews2ViewItem("АД (в), мм.рт.ст.", this.scalesValue?.news2?.sys, "sys"), this._buildNews2ViewItem("АД (н), мм.рт.ст.", this.scalesValue?.news2?.dia, "dia"), this._buildNews2ViewItem("ЧСС, уд/мин", this.scalesValue?.news2?.hr), this._buildNews2ViewItem("Уровень сознания", this.scalesValue?.news2?.consciousness)],
        form004: [{
          label: "Транспортабельность",
          value: this.scalesValue?.form004?.transportability
        }, {
          label: "Ванна",
          value: this.scalesValue?.form004?.bath ? "Да" : "Нет"
        }, {
          label: "Смена белья",
          value: this.scalesValue?.form004?.linen
        }, {
          label: "Педикулез",
          value: this.scalesValue?.form004?.pediculosis
        }, {
          label: "Вес, кг",
          value: this.scalesValue?.form004?.weight
        }, {
          label: "Выпито жидкости, мл",
          value: this.scalesValue?.form004?.liquid
        }, {
          label: "Суточное кол-во мочи, мл",
          value: this.scalesValue?.form004?.urine
        }, {
          label: "Стул, раз/сутки",
          value: this.scalesValue?.form004?.feces
        }, {
          label: "Мокрота, мл",
          value: this.scalesValue?.form004?.phlegm
        }]
      };
      const Ro = this.viewValuesMap.news2;
      this.news2ViewTopRow = Ro.slice(0, 3), this.news2ViewDevice = null != Ro[3]?.value && "" !== Ro[3].value ? Ro[3] : null, this.news2ViewMiddleRow = Ro.slice(4, 7), this.news2ViewHr = Ro[7] ?? null, this.news2ViewConsciousness = Ro[8] ?? null;
      const _r = this.viewValuesMap.form004;
      this.form004ViewTransportability = _r[0] ?? null, this.form004ViewBath = _r[1] ?? null, this.form004ViewLinen = _r[2] ?? null, this.form004ViewPediculosis = _r[3] ?? null, this.form004ViewMetricsRow = _r.slice(4, 7), this.form004ViewOutputRow = _r.slice(7, 9), this.cdr.markForCheck();
    }
    formatDate(Gn) {
      return Gn ? (Gn = new Date(Gn), `${new Intl.DateTimeFormat("ru-RU", {
        day: "numeric",
        month: "long"
      }).format(Gn)}, ${new Intl.DateTimeFormat("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
      }).format(Gn)}`) : "";
    }
    countPoints(Gn, dn) {
      this.fixValues();
      let wo = "";
      wo = "consciousness" === dn ? Gn.target.innerText.toLowerCase() : Gn.target.value, this._countPointsHandler(dn, wo), this._syncNews2RiskFields();
    }
    _countPointsFromExternal() {
      this.points = (0, W.p1)(this.scalesValue?.news2), this._syncNews2RiskFields();
    }
    _recalculateNews2RiskFromForm() {
      this.points = (0, W.p1)(this.news2Form.getRawValue()), this._syncNews2RiskFields();
    }
    _syncNews2RiskFields() {
      const {
        sum: Gn,
        risk: dn,
        riskComposition: wo
      } = (0, f.Eu)(this.points);
      this.sum = Gn, this.risk = dn, this.getNEWS2Ctrl("sum").patchValue(Gn, {
        emitEvent: !1
      }), this.getNEWS2Ctrl("risk").patchValue(wo, {
        emitEvent: !1
      }), this.getNEWS2Ctrl("riskValue").patchValue(wo, {
        emitEvent: !1
      });
    }
    _countPointsHandler(Gn, dn) {
      return this.points = {
        ...this.points,
        [Gn]: (0, f.fW)(Gn, dn)
      }, (0, f.Eu)(this.points);
    }
    setInteger(Gn, dn) {
      const wo = Gn.target,
        Ro = wo.value.replace(/\s/g, ""),
        qr = Ro.replace(/[.,].*$/, "").replace(/[^\d]/g, "");
      if ("" !== qr && !this.integerInputRegex.test(qr)) {
        const Us = this.getNEWS2Ctrl(dn).value;
        return void (wo.value = null != Us && "" !== Us ? String(Us) : "");
      }
      Ro !== qr && (wo.value = qr);
      const js = "" === qr ? null : Number(qr),
        ws = this.getNEWS2Ctrl(dn);
      ws.setValue(js), ws.updateValueAndValidity({
        emitEvent: !1
      }), this.showValidationErrors && this.cdr.markForCheck();
    }
    setForm004Integer(Gn, dn) {
      const wo = Gn.target,
        Ro = wo.value.replace(/\s/g, "");
      let qr = Ro.replace(/[.,].*$/, "").replace(/[^\d]/g, "");
      if ("" === qr || this.integerInputRegex.test(qr)) {
        if ("" !== qr) {
          const {
              min: js,
              max: ws
            } = this.form004IntegerLimits[dn],
            Us = Number(qr);
          qr = String(Math.min(ws, Math.max(js, Us)));
        }
        Ro !== qr && (wo.value = qr), this.getForm004Ctrl(dn).setValue("" === qr ? null : Number(qr));
      } else {
        const js = this.getForm004Ctrl(dn).value;
        wo.value = null != js && "" !== js ? String(js) : "";
      }
    }
    _clampForm004Integer(Gn, dn) {
      if (null == Gn) return null;
      const {
        min: wo,
        max: Ro
      } = this.form004IntegerLimits[dn];
      return Math.min(Ro, Math.max(wo, Math.trunc(Number(Gn))));
    }
    setTemperature(Gn) {
      const dn = Gn.target,
        wo = dn.value.replace(".", ",");
      if ("" === wo || this.commaRegex.test(wo) || this.decimalRegex.test(wo)) dn.value !== wo && (dn.value = wo), this.getNEWS2Ctrl("temperature").setValue("" === wo ? null : wo);else {
        const _r = this.getNEWS2Ctrl("temperature").value;
        dn.value = null != _r && "" !== _r ? String(_r).replace(".", ",") : "";
      }
    }
    setDecimal(Gn, dn) {
      const wo = Gn.target,
        Ro = wo.value;
      "" === Ro || this.commaRegex.test(Ro) || this.decimalRegex.test(Ro) ? this[dn] = Ro : wo.value = this[dn];
    }
    toggleAddInfo() {
      if (!this.addInfo) return this._openAddInfoSection(), void (this._isTemperatureListContext() ? (this._prefillForm004FromDayIndex(), this._applyHygieneDefaultsIfEmpty()) : this._hasAdditionalDataFromBackend() || this._prefillAdditionalDataFromIndexSeed());
      this.addInfo = !1, this.form004Form.clearValidators(), this.anthropometryForm.clearValidators(), ["weight", "pediculosis", "transportability"].forEach(dn => {
        this.getForm004Ctrl(dn).clearValidators(), this.getForm004Ctrl(dn).updateValueAndValidity();
      }), this.getAnthropometryCtrl("weight").clearValidators(), this.form004Form.reset(), this.anthropometryForm.reset(), this.getAnthropometryCtrl("weight").updateValueAndValidity(), this.form004Form.updateValueAndValidity(), this.anthropometryForm.updateValueAndValidity();
    }
    onClear() {
      this.showValidationErrors = !1, this.clearNews2RequiredValidators(), this.news2Form.reset(), this.form004Form.reset(), this.anthropometryForm.reset(), this.sum = null, this.risk = null, this.points = {
        temperature: 0,
        sys: 0,
        hr: 0,
        rr: 0,
        sp: 0,
        oxygenation: 0,
        consciousness: 0
      };
    }
    get getColorSchemaClass() {
      return (0, f.r5)(this.points, this.news2FormIsEmpty);
    }
    static isFilledRequiredValue(Gn) {
      return null != Gn && "" !== Gn && (!Array.isArray(Gn) || Gn.length > 0);
    }
    static isPositiveOxygenDemand(Gn) {
      if (null == Gn || "" === Gn) return !1;
      const dn = Number(Gn);
      return Number.isFinite(dn) && dn > 0;
    }
    normalizeIntegerNews2Values() {
      this.integerNews2Fields.forEach(Gn => {
        const dn = this.getNEWS2Ctrl(Gn),
          wo = dn?.value;
        if (null == wo || "" === wo) return;
        const Ro = Number(String(wo).replace(",", "."));
        Number.isFinite(Ro) && dn.value !== Ro && dn.setValue(Ro, {
          emitEvent: !1
        });
      });
    }
    applyNews2RequiredValidators() {
      this.requiredNews2Fields.forEach(Gn => {
        const dn = this.getNEWS2Ctrl(Gn);
        dn.setValidators([Je.requiredFilled]), dn.updateValueAndValidity({
          emitEvent: !1
        });
      });
    }
    clearNews2RequiredValidators() {
      this.requiredNews2Fields.forEach(Gn => {
        const dn = this.getNEWS2Ctrl(Gn);
        dn.clearValidators(), dn.updateValueAndValidity({
          emitEvent: !1
        });
      }), this.getNEWS2Ctrl("oxygenationDevice").clearValidators(), this.getNEWS2Ctrl("oxygenationDevice").updateValueAndValidity({
        emitEvent: !1
      });
    }
    validateBeforeSave() {
      return this.fixValues(), this.normalizeIntegerNews2Values(), this.addInfo && this._syncAnthropometryWeightToForm004(), this.applyNews2RequiredValidators(), this.form004Form.updateValueAndValidity({
        emitEvent: !1
      }), this.anthropometryForm.updateValueAndValidity({
        emitEvent: !1
      }), this.news2Form.invalid || this.form004Form.invalid || this.anthropometryForm.invalid ? (this.revealValidationErrors(), this.messageService.warning("Заполните все обязательные поля!"), !1) : (this.showValidationErrors = !1, !0);
    }
    revealValidationErrors() {
      this.applyNews2RequiredValidators(), this.showValidationErrors = !0, this.news2Form.markAllAsTouched(), this.form004Form.markAllAsTouched(), this.anthropometryForm.markAllAsTouched(), this.getNEWS2Ctrl("consciousness")?.markAsDirty(), this.isShowOxygenationDevices && this.getNEWS2Ctrl("oxygenationDevice")?.markAsDirty(), ["transportability", "pediculosis"].forEach(Gn => this.getForm004Ctrl(Gn)?.markAsDirty()), this.cdr.markForCheck();
    }
    resolveConsciousnessCode(Gn) {
      const dn = Array.isArray(Gn) ? Gn[0] : Gn;
      if (!dn) return null;
      const wo = this.consciousnessList.findIndex(Ro => Ro?.toLowerCase() === String(dn).toLowerCase());
      return wo >= 0 ? String(wo + 1) : null;
    }
    syncConsciousnessCode() {
      const Gn = this.resolveConsciousnessCode(this.getNEWS2Ctrl("consciousness")?.value);
      this.getNEWS2Ctrl("consciousnessCode")?.patchValue(Gn, {
        emitEvent: !1
      });
    }
    _buildForm004SaveData() {
      const Gn = {
          ...this.form004Form.getRawValue()
        },
        dn = new Date();
      return (!0 === Gn.bath || !1 === Gn.bath) && (Gn.bathTime = dn), ("да" === Gn.linen || "нет" === Gn.linen) && (Gn.linenTime = dn), (0, a.zb)((0, a.yE)(x.fh, Gn));
    }
    onSave() {
      if (!this.validateBeforeSave()) return;
      this.syncConsciousnessCode(), this._recalculateNews2RiskFromForm();
      const Gn = [{
        code: "news2",
        cls: R.u,
        data: (0, a.zb)((0, a.yE)(x.hd, this.news2Form.value))
      }, {
        code: "form004",
        cls: R.KS,
        data: this._buildForm004SaveData()
      }, {
        code: "antropometricheskie_dannie",
        cls: R.je,
        data: (0, a.zb)((0, a.yE)(x.Zr, this.anthropometryForm.value))
      }];
      this.ensureEhrReady$().pipe((0, E.t)(this), (0, d.w)(dn => {
        const wo = this.careCase?.careCaseId;
        if (!wo) return (0, I._)(() => new Error("missing careCaseId"));
        const Ro = Gn.filter(_r => !["form004", "antropometricheskie_dannie"].includes(_r.code) || this.addInfo).map(_r => dn.createMedicalEntry(_r.code, wo).pipe((0, d.w)(qr => (new _r.cls(qr.getRoot()).setValues(_r.data, _r.code), qr.sign()))));
        return (0, N.D)(Ro);
      }), (0, M.K)(dn => (this.messageService.error("Не удалось сохранить данные NEWS2"), console.error("news2 save error", dn), b.E))).subscribe(() => {
        this.sharedDataService.runActionSubject("tasksPatientList"), this.reloadListAction && this.sharedDataService.runActionSubject(this.reloadListAction), this.store.dispatch((0, T.K0)({
          menuName: null
        })), this.messageService.success("Данные NEWS2 успешно внесены"), this.modalRef ? this.modalRef.close() : this.parentOverlayRef && this.parentOverlayRef.close();
      });
    }
    resolvePatientIdFromCareCase(Gn) {
      const dn = Gn?.actualPatientId || Gn?.patientId;
      return null == dn || "" === dn ? null : `${dn}`;
    }
    resolvePatientData$() {
      return this.patientContext?.data?.careCase ? (0, O.of)(this.patientContext) : this.fullData?.data?.careCase ? (0, O.of)(this.fullData) : this.store.select(h.HJ).pipe((0, A.b)(Gn => console.log(Gn)), (0, L.h)(Boolean), (0, C.q)(1));
    }
    loadEhrContext$() {
      return this.resolvePatientData$().pipe((0, A.b)(Gn => {
        this.fullData = Gn;
      }), (0, v.U)(Gn => Gn?.data?.careCase), (0, L.h)(Boolean), (0, d.w)(Gn => {
        this.careCase = Gn;
        const dn = this.resolvePatientIdFromCareCase(Gn);
        return dn ? this.compositionsBaseService.getEhrByPatientId(dn) : (0, I._)(() => new Error("missing patientId"));
      }), (0, A.b)(Gn => {
        this.ehr = Gn;
      }));
    }
    ensureEhrReady$() {
      return this.ehr && this.careCase?.careCaseId ? (0, O.of)(this.ehr) : this.loadEhrContext$();
    }
    onCancelPanel() {
      this.closeNews2PanelEvent.emit({
        confirmed: !1,
        news2: (0, ke.sZ)(this.initScalesValue?.news2 ?? null),
        form004: (0, ke.sZ)(this.initScalesValue?.form004 ?? null),
        anthropometry: (0, ke.sZ)(this.initScalesValue?.anthropometry ?? null)
      });
    }
    approveChanges() {
      this.validateBeforeSave() && (this.syncConsciousnessCode(), this._recalculateNews2RiskFromForm(), this.closeNews2PanelEvent.emit({
        confirmed: !0,
        news2: (0, ke.sZ)(this.news2Form.getRawValue()),
        form004: this.addInfo ? (0, ke.sZ)(this.form004Form.getRawValue()) : null,
        anthropometry: this.addInfo ? (0, ke.sZ)(this.anthropometryForm.getRawValue()) : null
      }));
    }
    getNEWS2Ctrl(Gn) {
      return this.news2Form.get(Gn);
    }
    getForm004Ctrl(Gn) {
      return this.form004Form.get(Gn);
    }
    getAnthropometryCtrl(Gn) {
      return this.anthropometryForm.get(Gn);
    }
    get timeHint() {
      return {
        "Без отклонений": "Через 12 часов",
        Низкий: "Через 4-6 часов",
        Средний: "Через 1-2 часа",
        Высокий: "Через 1-2 часов",
        Критичный: "Непрерывно"
      }[this.risk];
    }
    _initNews2Form() {
      return this.fb.group({
        owner: [null],
        start_time: [null],
        temperature: [null],
        temperatureUnit: ["Cell"],
        temperatureTime: [null],
        sys: [null],
        sysUnit: ["mm[Hg]"],
        sysTime: [null],
        dia: [null],
        diaUnit: ["mm[Hg]"],
        rr: [null],
        rrUnit: ["/min"],
        rrTime: [null],
        sp: [null],
        spUnit: ["%"],
        spTime: [null],
        oxygenation: [null],
        oxygenationUnit: ["l/min"],
        oxygenationTime: [null],
        oxygenationDevice: [null],
        oxygenationDeviceCode: [null],
        oxygenationDeviceTime: [null],
        hr: [null],
        hrUnit: ["/min"],
        hrTime: [null],
        consciousness: [null],
        consciousnessCode: [null],
        sum: [null],
        risk: [null],
        riskValue: [null]
      });
    }
    _initForm004Form() {
      return this.fb.group({
        owner: [null],
        start_time: [null],
        temperature: [null],
        temperatureUnit: ["Cell"],
        temperatureTime: [null],
        sys: [null],
        sysUnit: ["mm[Hg]"],
        sysTime: [null],
        dia: [null],
        diaUnit: ["mm[Hg]"],
        hr: [null],
        hrUnit: ["/min"],
        hrTime: [null],
        rr: [null],
        rrUnit: ["/min"],
        rrTime: [null],
        weight: [null],
        weightUnit: ["kg"],
        weightTime: [null],
        bath: [null],
        bathTime: [null],
        linen: [null],
        linenTime: [null],
        pediculosis: [null],
        pediculosisFlag: [!1],
        pediculosisTime: [null],
        liquid: [null],
        liquidUnit: ["ml"],
        liquidTime: [null],
        phlegm: [null],
        phlegmUnit: ["ml"],
        phlegmTime: [null],
        urine: [null],
        urineUnit: ["ml"],
        urineTime: [null],
        feces: [null],
        fecesUnit: ["/d"],
        fecesTime: [null],
        transportability: [null],
        transportabilityCode: [null]
      });
    }
    _initAnthropometryForm() {
      return this.fb.group({
        owner: [null],
        start_time: [null],
        weight: [null],
        weightUnit: ["kg"],
        weightTime: [null]
      });
    }
    closeModalFormAlone() {
      this.modalRef.close(), this.isModalAlone = !1, this.isTablet = !1;
    }
  }).requiredFilled = Gn => Je.isFilledRequiredValue(Gn.value) ? null : {
    required: !0
  }, tn.ɵfac = function (dn) {
    return new (dn || tn)(e.Y36(u.UM, 8), e.Y36(J.Rn, 8), e.Y36(e.sBO), e.Y36(q.W), e.Y36(ut.yh), e.Y36(m.qu), e.Y36(Ct.Yg), e.Y36(Ft.Jv), e.Y36(mt.g));
  }, tn.ɵcmp = e.Xpm({
    type: tn,
    selectors: [["scale-news2-form"]],
    viewQuery: function (dn, wo) {
      if (1 & dn && e.Gf(Xt, 5), 2 & dn) {
        let Ro;
        e.iGM(Ro = e.CRH()) && (wo.footerMenuRef = Ro.first);
      }
    },
    inputs: {
      isOpenFromCheckList: "isOpenFromCheckList",
      checklistShowValidationErrors: "checklistShowValidationErrors",
      isViewMode: "isViewMode",
      headingTitle: "headingTitle",
      scalesValue: "scalesValue",
      parentOverlayRef: "parentOverlayRef",
      reloadListAction: "reloadListAction",
      patientContext: "patientContext",
      indexScalesSeed: "indexScalesSeed",
      indexTimeCommitted: "indexTimeCommitted"
    },
    outputs: {
      closeNews2PanelEvent: "closeNews2PanelEvent"
    },
    features: [e.TTD],
    ngContentSelectors: ["[news2ViewActions]"],
    decls: 25,
    vars: 25,
    consts: [[4, "ngIf"], [1, "news2"], [1, "news2-heading", 3, "ngClass"], [1, "news2-heading__header", 3, "ngClass"], [1, "news2-heading__name"], ["class", "news2-form-close-icon", "lu-button-icon", "", 3, "click", 4, "ngIf"], ["class", "news2-heading__sign-info", 4, "ngIf"], ["class", "news2-body", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["onlyView", ""], [1, "news2-footer", 3, "ngStyle", "ngClass"], ["footerMenu", ""], [1, "news2-footer__info"], [1, "news2-footer__info-item"], [1, "count"], ["panelClass", "iconClass", 3, "luTooltip", "withArrow", "borderOffset", 4, "ngIf"], [1, "level"], ["class", "news2-footer__actions", 4, "ngIf"], [1, "border-heading", "heading-adaptive"], ["headerMenu", ""], [1, "fio"], ["icon", "close", 1, "close-icon", 3, "size", "click"], ["lu-button-icon", "", 1, "news2-form-close-icon", 3, "click"], ["icon", "close", 3, "size"], [1, "news2-heading__sign-info"], ["lu-text", "", "color", "muted"], ["lu-text", "", "color", "normal"], ["class", "dot", 4, "ngIf"], ["lu-text", "", "color", "normal", 4, "ngIf"], [1, "dot"], [1, "news2-body", 3, "formGroup"], [1, "row"], [1, "form__group", "col"], [1, "form__group-label"], ["lu-label", ""], ["luInput", "", "luInputString", "", "formControlName", "rr", 3, "input", "blur"], ["type", "error", 4, "ngIf"], ["class", "form__group-desc", 4, "ngIf"], ["luInput", "", "luInputString", "", "formControlName", "sp", 3, "input", "blur"], [1, "form__group-label", "form__group-label--oxygen"], ["luInput", "", "luInputString", "", "formControlName", "oxygenation", 3, "input", "blur"], [1, "row-break", "row-break_st-adaptive"], ["class", "form__group chip-oxygenation", 4, "ngIf"], [1, "form__group-label", 2, "padding-top", "4px"], ["luInput", "", "luInputString", "", "formControlName", "temperature", 3, "luMask", "maskPlaceholder", "input", "blur"], ["luInput", "", "luInputString", "", "formControlName", "sys", 3, "input", "blur"], [1, "form__group", "col", "mb-0"], ["luInput", "", "luInputString", "", "formControlName", "dia", 3, "input", "blur"], [1, "form__group", "col", "chss", "mb-0", 3, "ngStyle"], ["luInput", "", "luInputString", "", "formControlName", "hr", 3, "input", "blur"], [1, "form__group", "mb-32"], ["formControlName", "consciousness", "luChipsGroupType", "radio", "luChipsGroupName", "consciousness", 1, "chip-container"], ["class", "chip", 3, "value", "tabindex", "blur", 4, "ngFor", "ngForOf"], ["type", "error", "class", "chip-error", 4, "ngIf"], [1, "additional-info"], ["class", "additional-info__add", 3, "click", 4, "ngIf"], ["class", "additional-info__content", 3, "formGroup", 4, "ngIf"], ["type", "error"], ["icon", "warning", 3, "size"], [1, "form__group-desc"], [1, "sep"], [1, "form__group", "chip-oxygenation"], [1, "form__group-label", "chip-oxygenation__name"], ["formControlName", "oxygenationDevice", "luChipsGroupType", "radio", "luChipsGroupName", "oxygenationDevice", 1, "chip-container", "chip-row"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "error", 1, "chip-error"], [1, "chip", 3, "value", "tabindex", "blur"], [1, "additional-info__add", 3, "click"], [1, "additional-info__content", 3, "formGroup"], [3, "click"], [1, "form__group"], ["formControlName", "transportability", "luChipsGroupType", "radio", "luChipsGroupName", "transportability", 1, "chip-container"], ["value", "Может идти", 1, "chip", 3, "ngClass"], ["value", "Сидя", 1, "chip"], ["value", "Лежа", 1, "chip"], ["class", "additional-info__segment-wrap", 4, "ngIf"], [1, "form__group", 2, "padding-top", "2px"], ["formControlName", "pediculosis", "luChipsGroupType", "radio", "luChipsGroupName", "pediculosis", 1, "chip-container"], ["value", "выявлен", 1, "chip"], ["value", "был выявлен ранее, обрати внимание", 1, "chip"], ["value", "был выявлен, обработка проведена", 1, "chip"], ["value", "не выявлен", 1, "chip"], ["value", "не проверен", 1, "chip"], [1, "form__group", "col", 3, "formGroup"], ["luInput", "", "formControlName", "weight", "luInputString", "", 3, "luMask", "maskPlaceholder"], ["class", "form__group col", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "additional-info__segment-wrap"], ["lu-label", "Ванна"], ["formControlName", "bath"], ["lu-segment-button", "", "luSegment", "", 3, "value", "click"], ["lu-label", "Смена белья"], ["formControlName", "linen"], ["lu-segment-button", "", "luSegment", "", "value", "да", 3, "click"], ["lu-segment-button", "", "luSegment", "", "value", "нет", 3, "click"], ["lu-label", "Выпито жидкости, мл"], ["luInput", "", "luInputString", "", "formControlName", "liquid", 3, "input", "blur"], ["lu-label", "Суточное кол-во мочи, мл"], ["luInput", "", "luInputString", "", "formControlName", "urine", 3, "input"], ["lu-label", "Стул, раз/сутки"], ["luInput", "", "luInputString", "", "formControlName", "feces", 3, "input", "blur"], ["lu-label", "Мокрота, мл"], ["luInput", "", "luInputString", "", "formControlName", "phlegm", 3, "input"], [1, "view-panel"], [1, "news2-view-form"], [1, "news2-view-form__grid"], ["class", "news2-view-form__item", 3, "width", 4, "ngFor", "ngForOf"], ["class", "news2-view-form__item news2-view-form__item_device full-width", 4, "ngIf"], ["class", "news2-view-form__item news2-view-form__item_hr full-width", 4, "ngIf"], ["class", "news2-view-form__item news2-view-form__item_full full-width", 4, "ngIf"], ["class", "form004-view-form", 4, "ngIf"], [1, "news2-view-form__item"], [1, "news2-view-form__item", "news2-view-form__item_device", "full-width"], [1, "news2-view-form__item", "news2-view-form__item_hr", "full-width"], [1, "news2-view-form__item", "news2-view-form__item_full", "full-width"], [1, "form004-view-form"], [1, "form004-view-form__grid"], ["class", "form004-view-form__item form004-view-form__item_full full-width", 4, "ngIf"], ["class", "form004-view-form__item form004-view-form__item_pair", 4, "ngIf"], ["class", "form004-view-form__item", 3, "width", 4, "ngFor", "ngForOf"], ["class", "form004-view-form__item form004-view-form__item_pair", 4, "ngFor", "ngForOf"], [1, "form004-view-form__item", "form004-view-form__item_full", "full-width"], [1, "form004-view-form__item", "form004-view-form__item_pair"], [1, "form004-view-form__item"], ["panelClass", "iconClass", 3, "luTooltip", "withArrow", "borderOffset"], ["longText", ""], [1, "news2-footer__actions"], ["lu-button-outer", "", 3, "size", "color", "click", 4, "ngIf"], ["lu-button-raised", "", 3, "size", "color", "click", 4, "ngIf"], ["lu-button-outer", "", "size", "medium", "style", "margin-right: -18px", 3, "click", 4, "ngIf"], ["lu-button-outer", "", 3, "size", "color", "click"], ["lu-button-raised", "", 3, "size", "color", "click"], ["lu-button-outer", "", "size", "medium", 2, "margin-right", "-18px", 3, "click"]],
    template: function (dn, wo) {
      if (1 & dn && (e.F$t(rs), e.YNc(0, Nn, 6, 2, "div", 0), e.TgZ(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4), e._uU(5), e.qZA(), e.YNc(6, Pi, 2, 1, "button", 5), e.qZA(), e.YNc(7, co, 8, 6, "span", 6), e.qZA(), e.YNc(8, Fi, 84, 25, "form", 7), e.YNc(9, yo, 9, 6, "ng-template", null, 8, e.W1O), e.qZA(), e.TgZ(11, "div", 9, 10)(13, "div", 11)(14, "div", 12), e._uU(15, " Сумма: "), e.TgZ(16, "span", 13), e._uU(17), e.qZA(), e.YNc(18, Kr, 3, 3, "app-tooltip-icon", 14), e.qZA(), e.TgZ(19, "div", 12), e._uU(20, " Риск: "), e.TgZ(21, "span", 15), e._uU(22), e.qZA()()(), e.YNc(23, Fs, 4, 3, "div", 16), e.YNc(24, xa, 2, 0, "div", 16), e.qZA()), 2 & dn) {
        const Ro = e.MAs(10);
        e.Q6J("ngIf", !wo.isOpenFromCheckList && wo.isTablet && wo.isModalAlone && !wo.parentOverlayRef), e.xp6(2), e.Q6J("ngClass", e.VKq(17, Js, wo.isOpenFromCheckList)), e.xp6(1), e.Q6J("ngClass", e.VKq(19, ho, !wo.isOpenFromCheckList && wo.isTablet)), e.xp6(2), e.Oqu(wo.headingTitle), e.xp6(1), e.Q6J("ngIf", wo.isOpenFromCheckList), e.xp6(1), e.Q6J("ngIf", wo.assessmentTime), e.xp6(1), e.Q6J("ngIf", !wo.isViewMode)("ngIfElse", Ro), e.xp6(3), e.Q6J("ngStyle", e.VKq(21, uo, !wo.addInfo))("ngClass", e.VKq(23, ri, wo.isOpenFromCheckList)), e.xp6(5), e.Tol(wo.getColorSchemaClass), e.xp6(1), e.hij("", wo.formatPointNews2, " "), e.xp6(1), e.Q6J("ngIf", wo.sum || wo.risk), e.xp6(4), e.Oqu(wo.risk ? wo.risk : "—"), e.xp6(1), e.Q6J("ngIf", !wo.isViewMode), e.xp6(1), e.Q6J("ngIf", wo.isViewMode);
      }
    },
    dependencies: [Et.mk, Et.sg, Et.O5, Et.PC, m._Y, m.Fj, m.JJ, m.JL, m.sg, m.u, fe.z, ye.HY, ae.L, Y.H, G.Bf, te.l, pe.q, be.P, le.r, n.P, Se.b, Ue.K2, Me.X, qe.$, Ke.w, Rt.mc, Ze.v, Ee.X, je.D, Mt.m, We.k, Re.NZ, st.M],
    styles: ["[_nghost-%COMP%]{display:block;padding-top:24px;height:calc(100% - 57px)}.news2-view-drawer[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;padding-top:0;overflow:hidden;--lu-chip-background: rgba(56, 161, 214, .1)}.news2-view-drawer[_nghost-%COMP%]   .border-heading[_ngcontent-%COMP%], .news2-view-drawer[_nghost-%COMP%]   .heading-adaptive[_ngcontent-%COMP%]{display:none!important}.news2-view-drawer[_nghost-%COMP%]   .news2[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;height:auto!important;margin-top:0;overflow:hidden auto;padding:16px 24px}.news2-view-drawer[_nghost-%COMP%]   .news2[_ngcontent-%COMP%]   .mb-0[_ngcontent-%COMP%]{margin-bottom:0!important}.news2-view-drawer[_nghost-%COMP%]   .news2[_ngcontent-%COMP%]   .mb-32[_ngcontent-%COMP%]{margin-bottom:32px}.news2-view-drawer[_nghost-%COMP%]   .news2-heading[_ngcontent-%COMP%]{margin-bottom:24px}.news2-view-drawer[_nghost-%COMP%]   .news2-heading__name[_ngcontent-%COMP%]{color:#333}@media (min-width: 992px){.news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%]{width:738px}}@media (min-width: 992px){.news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%]   .additional-info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-bottom:0}}.news2-view-drawer[_nghost-%COMP%]   .news2-footer[_ngcontent-%COMP%]{flex-shrink:0}@media (max-width: 960px){.news2-view-drawer[_nghost-%COMP%]   .news2[_ngcontent-%COMP%]{padding:24px 16px 16px}.news2-view-drawer[_nghost-%COMP%]   .news2-heading__header[_ngcontent-%COMP%]{padding-top:0;margin-bottom:0!important}.news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]   .chip-oxygenation[_ngcontent-%COMP%]{grid-column:1/-1;width:100%}.news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]   .row-break[_ngcontent-%COMP%]{grid-column:1/-1;height:0;margin:0;padding:0}.news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]:not(:last-child){margin-bottom:24px}.news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%]   .form__group[_ngcontent-%COMP%]:not(:last-child){margin-bottom:24px}.news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%]   lu-chip[_ngcontent-%COMP%]{--lu-chip-background-hover: rgba(56, 161, 214, .16);--lu-chip-background-active: rgba(56, 161, 214, .16);--lu-chip-background-checked: #fff5b3;--lu-chip-color-checked: #000;--lu-chip-color-hover: #0f548c}.news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%]   lu-chip[_ngcontent-%COMP%]     .lu-chip.checked, .news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%]   lu-chip[_ngcontent-%COMP%]     .lu-chip.checked:hover{color:#000!important}.news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%]   .additional-info[_ngcontent-%COMP%]{margin-top:16px}.news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%]   .additional-info__add[_ngcontent-%COMP%]{width:100%;margin-right:0}.news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%]   .additional-info__segment-wrap[_ngcontent-%COMP%]{flex-wrap:wrap;gap:16px}.news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%]   .additional-info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;column-gap:16px;row-gap:16px}.news2-view-drawer[_nghost-%COMP%]   .news2-body[_ngcontent-%COMP%]   .additional-info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{max-width:none;width:auto}.news2-view-drawer[_nghost-%COMP%]   .view-panel[_ngcontent-%COMP%]   .news2-view-form__item_device[_ngcontent-%COMP%], .news2-view-drawer[_nghost-%COMP%]   .view-panel[_ngcontent-%COMP%]   .news2-view-form__item_hr[_ngcontent-%COMP%]{grid-column:auto}.news2-view-drawer[_nghost-%COMP%]   .news2-footer[_ngcontent-%COMP%]{padding:12px 16px 16px;margin-top:0;background:#fff;border-top:1px solid #e6e6e6;gap:12px;flex-wrap:wrap}.news2-view-drawer[_nghost-%COMP%]   .news2-footer__actions[_ngcontent-%COMP%]{gap:8px;flex-shrink:0}}.news2[_ngcontent-%COMP%]{margin-top:-16px;margin-bottom:6px;padding:0 8px 0 16px;height:calc(100% - 109px);overflow:auto}@media ((min-width: 600px) and (max-width: 960px)){.news2[_ngcontent-%COMP%]{padding-left:16px;padding-right:0;height:calc(100% - 57px)}}@media ((min-width: 600px) and (max-width: 960px)){.news2[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{margin:12px 0 12px auto}}.news2-heading[_ngcontent-%COMP%]{margin-bottom:12px;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}@media ((min-width: 600px) and (max-width: 960px)){.news2-heading[_ngcontent-%COMP%]{margin-bottom:5px}}.news2-heading__name[_ngcontent-%COMP%]{font-weight:600;font-size:17px}.news2-heading__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;width:100%;margin-top:-2px}@media ((min-width: 600px) and (max-width: 960px)){.news2-heading__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:-10px;padding-top:8px}}.news2-heading__header[_ngcontent-%COMP%]   .news2-form-close-icon[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc;cursor:pointer}.news2-heading__header[_ngcontent-%COMP%]   .news2-form-close-icon[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}.news2-heading__sign-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:8px;justify-content:flex-start;align-items:center;width:100%}.news2__close-but[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.news2-body[_ngcontent-%COMP%]   .form__group[_ngcontent-%COMP%]:not(:last-child){margin-bottom:24px}@media ((min-width: 600px) and (max-width: 960px)){.news2-body[_ngcontent-%COMP%]   .form__group[_ngcontent-%COMP%]:not(:last-child){margin-bottom:28px}}.news2-body[_ngcontent-%COMP%]   .form__group-label[_ngcontent-%COMP%]{margin-top:-2px;color:#333;font-weight:400;font-size:15px}.news2-body[_ngcontent-%COMP%]   .form__group-label--oxygen[_ngcontent-%COMP%]{width:max-content}.news2-body[_ngcontent-%COMP%]   .chip-oxygenation[_ngcontent-%COMP%]{display:flex;flex-direction:column}.news2-body[_ngcontent-%COMP%]   .chip-oxygenation__name[_ngcontent-%COMP%]{color:#333;font-weight:400;font-size:15px;padding-top:4px}.news2-body[_ngcontent-%COMP%]   .chip-oxygenation[_ngcontent-%COMP%]   .chip-error[_ngcontent-%COMP%]{margin-top:8px}.news2-body[_ngcontent-%COMP%]   .chip-oxygenation[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;gap:8px}.news2-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:0 24px}.news2-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:not(:last-child){margin-bottom:24px}@media (min-width: 600px) and (max-width: 960px){.news2-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:not(:last-child){margin-bottom:0}}.news2-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{max-width:204px;width:100%}.news2-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]     .lu-input-container:after{border-radius:unset!important;border:1px solid var(--lu-input-border-color, var(--lu-black-40))}.news2-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]     [data-lu-control-state=error]{--lu-input-border-color: var(--lu-error)}.news2-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .mb-0[_ngcontent-%COMP%]{margin-bottom:8px}.news2-body[_ngcontent-%COMP%]   .form__group-desc[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-top:10px;font-size:13px;color:#999;line-height:1}.news2-body[_ngcontent-%COMP%]   .form__group-desc__value_danger[_ngcontent-%COMP%]{color:var(--lu-red-100)}.news2-body[_ngcontent-%COMP%]   .form__group-desc[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{height:16px;width:1px;background-color:#b3b3b3}.news2-body[_ngcontent-%COMP%]   .chip-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;color:#333;font-weight:400;font-size:15px}.news2-body[_ngcontent-%COMP%]   .chip-container[_ngcontent-%COMP%] + .chip-error[_ngcontent-%COMP%]{margin-top:8px}.news2-body[_ngcontent-%COMP%]   lu-form-message[_ngcontent-%COMP%]{width:max-content}.news2-body[_ngcontent-%COMP%]   .additional-info[_ngcontent-%COMP%]{margin-top:20px}.news2-body[_ngcontent-%COMP%]   .additional-info__add[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:12px 16px;margin-right:16px;font-size:14px;font-weight:600;color:#2c8dc4;border:1px dashed #ccc;border-radius:4px;background-color:#fafafa;cursor:pointer;transition:.2s ease;width:100%;height:48px}@media (min-width: 600px) and (max-width: 960px){.news2-body[_ngcontent-%COMP%]   .additional-info__add[_ngcontent-%COMP%]{width:calc(100% - 16px);height:48px}}.news2-body[_ngcontent-%COMP%]   .additional-info__add[_ngcontent-%COMP%]:hover{background-color:#ecf6fb;border-color:#38a1d6}.news2-body[_ngcontent-%COMP%]   .additional-info__content[_ngcontent-%COMP%]{position:relative;padding:15px;background-color:#fafafa;border:1px dashed #ccc;border-radius:4px}.news2-body[_ngcontent-%COMP%]   .additional-info__content[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{max-width:190px}.news2-body[_ngcontent-%COMP%]   .additional-info__content[_ngcontent-%COMP%]   app-close-icon[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;z-index:1;cursor:pointer;color:#999;transition:color .2s ease}.news2-body[_ngcontent-%COMP%]   .additional-info__content[_ngcontent-%COMP%]   app-close-icon[_ngcontent-%COMP%]:hover{color:#757575}.news2-body[_ngcontent-%COMP%]   .additional-info__segment-wrap[_ngcontent-%COMP%]{display:flex;gap:24px;margin-bottom:24px}.news2-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px 24px;background-color:#fafafa;border-top:1px solid #ccc}@media (min-width: 600px) and (max-width: 960px){.news2-footer[_ngcontent-%COMP%]{padding-top:16px;padding-left:16px;margin-top:12px;padding-right:16px}}.news2-footer__check-list-news2-footer[_ngcontent-%COMP%]{margin-top:12px!important;padding-left:16px;border-top:none;margin-bottom:-12px}.news2-footer__info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;font-size:15px;color:#757575}.news2-footer__info-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:8px}.news2-footer__info-item[_ngcontent-%COMP%]   .points[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 8px;font-size:13px;font-weight:600;color:#bf4905;border-radius:2px;background-color:#fff5b3}.news2-footer__info-item[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{font-size:13px;line-height:20px;padding:2px 8px}.news2-footer__info-item[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{color:#333;font-weight:400;font-size:15px}.news2-footer__actions[_ngcontent-%COMP%]{display:flex;gap:16px}.adaptive-chip[_ngcontent-%COMP%]{margin-right:8px}.chip[_ngcontent-%COMP%]{border:none;border-radius:15px;max-width:260px;height:32px;color:#333;font-size:15px;font-weight:400;display:flex;align-items:center;justify-content:center;transition:font-size .16s,min-width .16s;white-space:normal;word-break:normal;text-align:start;text-overflow:initial}@media (max-width: 960px){.chip[_ngcontent-%COMP%]{font-size:15px;justify-content:space-between;--lu-chip-background: rgba(56, 161, 214, .1);--lu-chip-background-hover: rgba(56, 161, 214, .16);--lu-chip-background-active: rgba(56, 161, 214, .16);--lu-chip-background-checked: #fff5b3;--lu-chip-color-checked: #000}}  .lu-chip:hover:not(.checked){color:#0f548c!important}  .lu-chip.checked,   .lu-chip.checked:hover{color:#000!important}  .lu-overlay-content{border-radius:4px!important}.adaptive-sizes[_ngcontent-%COMP%]{width:100%}.view-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.view-panel[_ngcontent-%COMP%]   .form004-view-form[_ngcontent-%COMP%]{background-color:#f2f2f2;padding:16px;border-radius:4px}.view-panel[_ngcontent-%COMP%]   .news2-view-form__grid[_ngcontent-%COMP%], .view-panel[_ngcontent-%COMP%]   .form004-view-form__grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%}.view-panel[_ngcontent-%COMP%]   .news2-view-form__grid[_ngcontent-%COMP%]{gap:16px 32px}.view-panel[_ngcontent-%COMP%]   .form004-view-form__grid[_ngcontent-%COMP%]{gap:24px}.view-panel[_ngcontent-%COMP%]   .news2-view-form__item[_ngcontent-%COMP%], .view-panel[_ngcontent-%COMP%]   .form004-view-form__item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;flex:0 0 160px}.view-panel[_ngcontent-%COMP%]   .news2-view-form__item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child, .view-panel[_ngcontent-%COMP%]   .form004-view-form__item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{font-size:15px}.view-panel[_ngcontent-%COMP%]   .news2-view-form__item.width[_ngcontent-%COMP%], .view-panel[_ngcontent-%COMP%]   .form004-view-form__item.width[_ngcontent-%COMP%]{flex-grow:1;flex-basis:210px}.view-panel[_ngcontent-%COMP%]   .news2-view-form__item.full-width[_ngcontent-%COMP%], .view-panel[_ngcontent-%COMP%]   .form004-view-form__item.full-width[_ngcontent-%COMP%]{flex-grow:1;flex-basis:100%}.view-panel[_ngcontent-%COMP%]   .news2-view-form__value_danger[_ngcontent-%COMP%]{color:var(--lu-red-100)}.view-panel[_ngcontent-%COMP%]   .news2-view-form__item_full[_ngcontent-%COMP%], .view-panel[_ngcontent-%COMP%]   .form004-view-form__item_full[_ngcontent-%COMP%]{grid-column:1/-1}.view-panel[_ngcontent-%COMP%]   .news2-view-form__item_device[_ngcontent-%COMP%], .view-panel[_ngcontent-%COMP%]   .news2-view-form__item_hr[_ngcontent-%COMP%]{grid-column:1}.view-panel[_ngcontent-%COMP%]   .form004-view-form__item_pair[_ngcontent-%COMP%]{grid-column:span 1}.row-break[_ngcontent-%COMP%]{flex-basis:100%;height:0}.row-break_st-adaptive[_ngcontent-%COMP%]{display:none}@media (max-width: 960px){.news2-view-drawer[_nghost-%COMP%]   .row-break_st-adaptive[_ngcontent-%COMP%]{display:block;grid-column:1/-1;flex-basis:100%;width:100%;height:0}}@media (min-width: 600px) and (max-width: 960px){  .lu-overlay-content{overflow-y:hidden!important}}@media ((min-width: 600px) and (max-width: 960px)){.news2-form-close-icon[_ngcontent-%COMP%]{margin-top:-12px}}.news2-form-close-icon[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc;cursor:pointer}.news2-form-close-icon[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}.chss[_ngcontent-%COMP%]{margin-top:-6px}.news2-heading-adaptive[_ngcontent-%COMP%]{padding-top:34px;margin-bottom:16px!important}.heading-adaptive[_ngcontent-%COMP%]{padding-top:12px;margin-bottom:12px;margin-top:-24px!important}"],
    changeDetection: 0
  }), Je = tn);
  hn = Je = (0, t.gn)([(0, E.c)()], hn);
});
