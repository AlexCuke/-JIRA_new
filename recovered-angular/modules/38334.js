// Extracted from main; webpack module 38334. Factory, not an ES module.
((Ae, V, i) => {
  var te;
  i.d(V, {
    M: () => ye
  });
  var t = i(97582),
    e = i(94650),
    a = i(17489),
    m = i(73745),
    d = i(35314),
    M = i(9073),
    b = i(90348);
  const ae = class {
    constructor() {}
    onSign() {
      console.log("Подписать и закрыть");
    }
  };
  ae.ɵfac = function (le) {
    return new (le || ae)();
  }, ae.ɵcmp = e.Xpm({
    type: ae,
    selectors: [["app-pim-modal"]],
    decls: 14,
    vars: 2,
    consts: [[1, "pim-info"], [1, "pim-notify"], ["lu-button-raised", "", 1, "pim-btn", 3, "size", "color", "click"], [2, "margin-right", "10px"]],
    template: function (le, n) {
      1 & le && (e.TgZ(0, "div")(1, "div", 0)(2, "span"), e._uU(3, "Пациент:"), e.qZA(), e._uU(4, " Иванова Лариса Михайловна "), e._UZ(5, "br"), e.TgZ(6, "span"), e._uU(7, "Процедура:"), e.qZA(), e._uU(8, " А11.01.005 - Биопсия узелков, тофусов "), e.qZA(), e.TgZ(9, "div", 1), e._uU(10, "Процедура будет подписана и отмечена выполненной."), e.qZA(), e.TgZ(11, "button", 2), e.NdJ("click", function () {
        return n.onSign();
      }), e._UZ(12, "app-sign-icon", 3), e._uU(13, " Подписать и закрыть "), e.qZA()()), 2 & le && (e.xp6(11), e.Q6J("size", "medium")("color", "blue"));
    },
    dependencies: [M.mc, b.v],
    styles: [".pim-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}.pim-notify[_ngcontent-%COMP%]{margin:12px 0 32px}.pim-btn[_ngcontent-%COMP%]{display:block;margin-left:auto}"]
  });
  var N = i(44348),
    I = i(89653);
  const Y = class {
    constructor(be, le) {
      this.modalRef = be, this.store = le;
    }
    ngOnInit() {
      this.store.select(m.bg).subscribe(be => {
        this.replacement = be;
      });
    }
    ngOnDestroy() {
      this.store.dispatch((0, d.w8)({
        replacement: ""
      }));
    }
  };
  Y.ɵfac = function (le) {
    return new (le || Y)(e.Y36(N.Rn), e.Y36(I.yh));
  }, Y.ɵcmp = e.Xpm({
    type: Y,
    selectors: [["app-cancel-move-request-modal"]],
    decls: 8,
    vars: 6,
    consts: [[1, "wrapper"], [1, "btn-wrap"], ["lu-button-outer", "", 3, "size", "color", "click"], ["lu-button-raised", "", 3, "size", "color", "click"]],
    template: function (le, n) {
      1 & le && (e.TgZ(0, "div", 0)(1, "p"), e._uU(2), e.qZA(), e.TgZ(3, "div", 1)(4, "button", 2), e.NdJ("click", function () {
        return n.modalRef.close();
      }), e._uU(5, "Не отменять"), e.qZA(), e.TgZ(6, "button", 3), e.NdJ("click", function () {
        return n.modalRef.close(!0);
      }), e._uU(7, "Отменить заявку"), e.qZA()()()), 2 & le && (e.xp6(2), e.AsE("Вы уверены, что хотите отменить заявку на перемещение ", "Иванова А. И.", " в ", n.replacement, "?"), e.xp6(2), e.Q6J("size", "medium")("color", "blue"), e.xp6(2), e.Q6J("size", "medium")("color", "blue"));
    },
    dependencies: [M.mc],
    styles: [".wrapper[_ngcontent-%COMP%]{max-width:410px}.btn-wrap[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:16px;margin-top:24px}"]
  });
  var L = i(31529),
    C = i(24006),
    v = i(5416),
    f = i(54976),
    E = i(47313),
    h = i(92203),
    x = i(50879);
  const G = class {
    constructor() {
      this.commentType = "private", this.commentText = "";
    }
    save() {
      console.log({
        type: this.commentType,
        comment: this.commentText
      }, "reqData");
    }
  };
  let u = G;
  G.ɵfac = function (le) {
    return new (le || G)();
  }, G.ɵcmp = e.Xpm({
    type: G,
    selectors: [["app-comment"]],
    decls: 14,
    vars: 6,
    consts: [[1, "comment"], [1, "comment-heading"], [1, "segment"], ["lu-label", ""], [3, "ngModel", "ngModelChange"], ["lu-segment-button", "", "luSegment", "", "value", "private"], ["lu-segment-button", "", "luSegment", "", "value", "public"], [3, "minRows", "maxRows", "ngModel", "ngModelChange"], ["lu-button-raised", "", 3, "size", "color", "click"]],
    template: function (le, n) {
      1 & le && (e.TgZ(0, "div", 0)(1, "div", 1), e._uU(2, "Комментарий"), e.qZA(), e.TgZ(3, "div", 2)(4, "label", 3)(5, "lu-radio-group", 4), e.NdJ("ngModelChange", function (qe) {
        return n.commentType = qe;
      }), e.TgZ(6, "lu-button-group")(7, "button", 5), e._uU(8, "Приватный"), e.qZA(), e.TgZ(9, "button", 6), e._uU(10, "Общедоступный"), e.qZA()()()()(), e.TgZ(11, "lu-textarea", 7), e.NdJ("ngModelChange", function (qe) {
        return n.commentText = qe;
      }), e.qZA(), e.TgZ(12, "button", 8), e.NdJ("click", function () {
        return n.save();
      }), e._uU(13, "Сохранить"), e.qZA()()), 2 & le && (e.xp6(5), e.Q6J("ngModel", n.commentType), e.xp6(6), e.Q6J("minRows", 3)("maxRows", 3)("ngModel", n.commentText), e.xp6(1), e.Q6J("size", "medium")("color", "blue"));
    },
    dependencies: [C.JJ, C.On, v.w, M.mc, h.z, f.K2, E.X, x.y],
    styles: ["[_nghost-%COMP%]{display:block;height:calc(100% - 64px)}.comment[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:24px;padding:24px;height:100%}.comment-heading[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#000}.comment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;margin-top:auto}.segment[_ngcontent-%COMP%]{margin-top:-4px}"],
    changeDetection: 0
  });
  var T = i(60649),
    R = i(53648);
  const j = {
    News2Component: L.z,
    ConsultationsComponent: R.S,
    CommentComponent: u,
    InstResComponent: T.V
  };
  var W = i(71884),
    F = i(5264),
    Le = i(36895),
    ke = i(93278);
  const J = ["headerMenu"];
  function fe(pe, be) {
    1 & pe && e.GkF(0);
  }
  let ye = ((te = class {
    constructor(be, le) {
      this.cdr = be, this.store = le, this.reloadTable = new e.vpe(), this.openMenu = null, this.component = null, this.appointmentListNav = !1, this.title = "";
    }
    ngOnInit() {
      this.store.select(m.C8).pipe((0, W.x)((be, le) => be.menuName === le.menuName && be.params === le.params), (0, F.t)(this)).subscribe(({
        menuName: be,
        params: le
      }) => {
        switch (be) {
          case "News2Component":
            this.appointmentListNav = !0, this.title = this.getOfficialName(le.data.careCase);
            break;
          case "ConsultationsComponent":
          case "InstResComponent":
            this.title = this.getOfficialName(le.data.careCase);
        }
        this.appointmentListNav = "News2Component" === be, this.openMenu = be, this.component = j[be], this.cdr.markForCheck();
      });
    }
    ngAfterViewInit() {
      this.injectorHeader = e.zs3.create({
        providers: [{
          provide: "headerMenu",
          useValue: this.headerMenuRef
        }],
        parent: this.injectorHeader
      });
    }
    getOfficialName(be) {
      return (0, a.join)([be.lastName, be.firstName, be.secondName], " ");
    }
    onMenuClose() {
      this.store.dispatch((0, d.K0)({
        menuName: null
      }));
    }
    onClick() {
      console.log("go to appointment list");
    }
  }).ɵfac = function (le) {
    return new (le || te)(e.Y36(e.sBO), e.Y36(I.yh));
  }, te.ɵcmp = e.Xpm({
    type: te,
    selectors: [["app-menu"]],
    viewQuery: function (le, n) {
      if (1 & le && e.Gf(J, 5), 2 & le) {
        let Se;
        e.iGM(Se = e.CRH()) && (n.headerMenuRef = Se.first);
      }
    },
    outputs: {
      reloadTable: "reloadTable"
    },
    decls: 8,
    vars: 6,
    consts: [[1, "menu-wrapper"], [1, "menu-content"], [1, "border-heading"], ["headerMenu", ""], [1, "fio"], ["icon", "close", 3, "size", "click"], [4, "ngComponentOutlet", "ngComponentOutletInjector"]],
    template: function (le, n) {
      1 & le && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2, 3)(4, "div", 4), e._uU(5), e.qZA(), e.TgZ(6, "lu-svg-icon", 5), e.NdJ("click", function () {
        return n.onMenuClose();
      }), e.qZA()(), e.YNc(7, fe, 1, 0, "ng-container", 6), e.qZA()()), 2 & le && (e.ekj("open", n.openMenu), e.xp6(5), e.Oqu(n.title), e.xp6(1), e.Q6J("size", 24), e.xp6(1), e.Q6J("ngComponentOutlet", n.component)("ngComponentOutletInjector", n.injectorHeader));
    },
    dependencies: [Le.$G, ke.q],
    styles: [".menu-wrapper.open[_ngcontent-%COMP%]{width:calc(100% + 57px);position:absolute;top:0;right:0;z-index:1;height:100%;background:rgba(0,0,0,.5)}.menu-wrapper.open[_ngcontent-%COMP%]   .menu-content[_ngcontent-%COMP%]{transform:scale(1);visibility:visible;opacity:1}.menu-content[_ngcontent-%COMP%]{margin-left:auto;width:786px;height:100%;background:#fff;opacity:0;visibility:hidden;transform:scale(.98);transition:.2s ease;position:absolute;top:0;right:0;z-index:1}.menu-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:17px 17px 13px 24px;position:relative;z-index:2;box-shadow:0 4px 8px #00000014,0 1px 2px #00000014}.menu-heading[_ngcontent-%COMP%]   .fio[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#000}.menu-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:20px}.menu-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   app-appointment-list-icon[_ngcontent-%COMP%]{margin-right:9px}.menu-heading[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{margin-left:auto;--lu-svg-icon-color: #ccc;cursor:pointer}.menu-heading[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]:hover{--lu-svg-icon-color: #757575}"],
    changeDetection: 0
  }), te);
  ye = (0, t.gn)([(0, F.c)()], ye);
});
