function yt(o, e) {
  if (1 & o) {
    const n = t.EpF();
    t.TgZ(0, "div", 15)(1, "div")(2, "span", 16), t._uU(3, "Предоперационный чек-лист"), t.qZA()(), t.TgZ(4, "div")(5, "span", 17), t._uU(6, "Анкета"), t.qZA()(), t.TgZ(7, "div", 18), t.YNc(8, bt, 12, 10, "div", 19), t.qZA(), t.TgZ(9, "div", 20)(10, "div", 21)(11, "span"), t._uU(12, "Отклонение"), t.qZA(), t.TgZ(13, "span"), t._uU(14), t.qZA()(), t.TgZ(15, "div", 22)(16, "span", 23), t._uU(17, "Перед транспортировкой в операционную"), t.qZA(), t.TgZ(18, "div", 24)(19, "label", 25)(20, "lu-input-wrapper"), t._UZ(21, "input", 26), t.qZA(), t.TgZ(22, "lu-input-wrapper"), t._UZ(23, "input", 27), t.qZA()()(), t.TgZ(24, "div", 28)(25, "div", 29)(26, "label", 30)(27, "lu-input-wrapper"), t._UZ(28, "input", 31), t.qZA()()(), t.TgZ(29, "div", 32)(30, "label", 33)(31, "lu-input-wrapper"), t._UZ(32, "input", 34), t.qZA()()()(), t.TgZ(33, "div", 35)(34, "span", 36), t._uU(35, "Заключение"), t.qZA(), t.TgZ(36, "label", 37)(37, "lu-radio-group", 38)(38, "lu-button-group")(39, "button", 39), t.NdJ("click", function () {
      t.CHM(n);
      const u = t.oxw();
      return t.KtG(u.setNotification(!0));
    }), t._uU(40, " Да "), t.qZA(), t.TgZ(41, "button", 39), t.NdJ("click", function () {
      t.CHM(n);
      const u = t.oxw();
      return t.KtG(u.setNotification(!1));
    }), t._uU(42, " Нет "), t.qZA()()()()(), t._UZ(43, "div", 40), t.qZA()()();
  }
  if (2 & o) {
    const n = t.oxw();
    let i, u;
    t.Q6J("formGroup", n.checklistForm), t.xp6(8), t.Q6J("ngForOf", n.checklistQuestions), t.xp6(6), t.Oqu(n.hasChecklistDeviation ? "Да" : "Нет"), t.xp6(25), t.ekj("active", !0 === (null == (i = n.checklistForm.get("notification")) ? null : i.value)), t.xp6(2), t.ekj("active", !1 === (null == (u = n.checklistForm.get("notification")) ? null : u.value));
  }
}
