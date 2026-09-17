// Extracted from main; webpack module 79449. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    AL: () => Ze,
    Cl: () => Ee,
    Ds: () => v,
    SJ: () => ut,
    mF: () => Ct
  });
  var t = i(94650),
    e = i(30338),
    a = i(36895),
    m = i(69022),
    d = i(70823),
    M = i(32643),
    b = i(93278),
    N = (i(19550), i(9073)),
    I = i(77015),
    O = i(15903),
    L = i(44726),
    C = i(86936);
  const v = new t.OlP("COMPONENTS_CELLS_SERVICE_TOKEN");
  function f(je, Mt) {
    if (1 & je && (t.TgZ(0, "lu-tag", 4), t._uU(1), t.qZA()), 2 & je) {
      const Je = t.oxw();
      t.xp6(1), t.Oqu(null == Je.data.diagnosisArrival ? null : Je.data.diagnosisArrival.code);
    }
  }
  function E(je, Mt) {
    if (1 & je && (t.TgZ(0, "lu-tag", 5), t._uU(1), t.qZA()), 2 & je) {
      const Je = t.oxw();
      t.xp6(1), t.Oqu(null == Je.data.diagnosisAppointment ? null : Je.data.diagnosisAppointment.code);
    }
  }
  function h(je, Mt) {
    if (1 & je && t._UZ(0, "span", 6), 2 & je) {
      const Je = t.oxw();
      t.Q6J("innerHtml", Je.tooltip, t.oJD);
    }
  }
  let x = (() => {
      class je {
        constructor() {
          this.data = {};
        }
        hasDiagnosisCode(Je) {
          return !!Je && !!Je.code;
        }
        get tooltip() {
          const Je = this.getAppointmentTextForDiagnosis(this.data.diagnosisAppointment);
          return Je + (Je ? "<br />" : "") + this.getArrivalTextForDiagnosis(this.data.diagnosisArrival);
        }
        getAppointmentTextForDiagnosis(Je) {
          return Je?.code ? `\u0414\u0438\u0430\u0433\u043d\u043e\u0437, \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438: ${Je.name ?? ""} (${Je.code})` : "";
        }
        getArrivalTextForDiagnosis(Je) {
          return Je?.code ? `\u0414\u0438\u0430\u0433\u043d\u043e\u0437 \u043f\u0440\u0438 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0438: ${Je.name ?? ""} (${Je.code})` : "";
        }
      }
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵcmp = t.Xpm({
        type: je,
        selectors: [["dp-diagnosis-cell"]],
        inputs: {
          data: "data"
        },
        decls: 5,
        vars: 3,
        consts: [[1, "diagnosis-tag", 3, "luTooltip"], ["class", "diagnosis-tag__item", "type", "light", 4, "ngIf"], ["class", "diagnosis-tag__item", "type", "light", "color", "teal", 4, "ngIf"], ["tooltipTmpl", ""], ["type", "light", 1, "diagnosis-tag__item"], ["type", "light", "color", "teal", 1, "diagnosis-tag__item"], [3, "innerHtml"]],
        template: function (Je, Xt) {
          if (1 & Je && (t.TgZ(0, "div", 0), t.YNc(1, f, 2, 1, "lu-tag", 1), t.YNc(2, E, 2, 1, "lu-tag", 2), t.qZA(), t.YNc(3, h, 1, 1, "ng-template", null, 3, t.W1O)), 2 & Je) {
            const Nn = t.MAs(4);
            t.Q6J("luTooltip", Nn), t.xp6(1), t.Q6J("ngIf", Xt.hasDiagnosisCode(Xt.data.diagnosisArrival)), t.xp6(1), t.Q6J("ngIf", Xt.hasDiagnosisCode(Xt.data.diagnosisAppointment));
          }
        },
        dependencies: [a.O5, m.l$, d.$],
        styles: [".diagnosis-tag[_ngcontent-%COMP%]{white-space:nowrap}.diagnosis-tag__item[_ngcontent-%COMP%]:first-child{margin-right:calc(var(--lu-base-gutter) / 2)}"],
        changeDetection: 0
      }), je;
    })(),
    u = (() => {
      class je {}
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵmod = t.oAB({
        type: je
      }), je.ɵinj = t.cJS({
        imports: [a.ez, m._5, d.i]
      }), je;
    })(),
    T = (() => {
      class je {}
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵcmp = t.Xpm({
        type: je,
        selectors: [["dp-icon-cell"]],
        inputs: {
          data: "data"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "icon"]],
        template: function (Je, Xt) {
          1 & Je && t._UZ(0, "dp-single-icon", 0), 2 & Je && t.Q6J("icon", Xt.data);
        },
        dependencies: [I._y],
        styles: [".square[_ngcontent-%COMP%]{border-radius:2px;border:1px solid transparent}.circle[_ngcontent-%COMP%]{border-radius:50%;border:1px solid transparent}.icon-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"],
        changeDetection: 0
      }), je;
    })();
  function B(je, Mt) {
    if (1 & je && t._UZ(0, "span", 3), 2 & je) {
      const Je = t.oxw();
      t.Q6J("innerHtml", Je.data.tooltip, t.oJD);
    }
  }
  let y = (() => {
      class je {
        constructor() {
          this.data = {
            text: "",
            bgColor: ""
          };
        }
        getStyle() {
          return {
            background: this.data.bgColor,
            color: this.data.textColor ?? "var(--lu-black-100)"
          };
        }
      }
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵcmp = t.Xpm({
        type: je,
        selectors: [["dp-label-cell"]],
        inputs: {
          data: "data"
        },
        decls: 5,
        vars: 4,
        consts: [[1, "label-cell", 3, "luTooltip", "canOpen", "ngStyle"], ["lu-text", "", "size", "small"], ["tooltipTmpl", ""], [3, "innerHtml"]],
        template: function (Je, Xt) {
          if (1 & Je && (t.TgZ(0, "div", 0)(1, "span", 1), t._uU(2), t.qZA()(), t.YNc(3, B, 1, 1, "ng-template", null, 2, t.W1O)), 2 & Je) {
            const Nn = t.MAs(4);
            t.Q6J("luTooltip", Nn)("canOpen", !!Xt.data.tooltip)("ngStyle", Xt.getStyle()), t.xp6(2), t.Oqu(Xt.data.text);
          }
        },
        dependencies: [a.PC, d.$, M.NZ],
        styles: [".label-cell[_ngcontent-%COMP%]{white-space:nowrap;padding:1px calc(var(--lu-base-gutter) * 1)}"],
        changeDetection: 0
      }), je;
    })(),
    j = (() => {
      class je {}
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵmod = t.oAB({
        type: je
      }), je.ɵinj = t.cJS({
        imports: [a.ez, m._5, d.i, M.aI]
      }), je;
    })();
  function W(je, Mt) {
    if (1 & je) {
      const Je = t.EpF();
      t.TgZ(0, "span", 1), t.NdJ("click", function (Nn) {
        t.CHM(Je);
        const Pi = t.oxw();
        return t.KtG(Pi.onRunAction(Nn));
      }), t._uU(1), t.qZA();
    }
    if (2 & je) {
      const Je = t.oxw();
      t.Q6J("size", Je.textSize), t.xp6(1), t.hij(" ", Je.data.text, "\n");
    }
  }
  let F = (() => {
      class je {
        constructor() {
          this.data = {
            text: "",
            actionName: ""
          }, this.textSize = "normal", this.runAction = new t.vpe();
        }
        onRunAction(Je) {
          this.runAction.emit({
            actionName: this.data.actionName,
            data: this.data.actionData
          }), Je.stopPropagation();
        }
      }
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵcmp = t.Xpm({
        type: je,
        selectors: [["dp-link-cell"]],
        inputs: {
          data: "data",
          textSize: "textSize"
        },
        outputs: {
          runAction: "runAction"
        },
        decls: 1,
        vars: 1,
        consts: [["lu-text", "", "class", "us-link-cell", 3, "size", "click", 4, "ngIf"], ["lu-text", "", 1, "us-link-cell", 3, "size", "click"]],
        template: function (Je, Xt) {
          1 & Je && t.YNc(0, W, 2, 2, "span", 0), 2 & Je && t.Q6J("ngIf", Xt.data.text);
        },
        dependencies: [a.O5, M.NZ],
        styles: [".us-link-cell[_ngcontent-%COMP%]{position:relative;color:var(--lu-primary);cursor:pointer}.us-link-cell[_ngcontent-%COMP%]:before{position:absolute;content:\"\";width:100%;left:0;bottom:-1px;border-bottom:1px dashed var(--lu-primary)}"],
        changeDetection: 0
      }), je;
    })(),
    Le = (() => {
      class je {}
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵmod = t.oAB({
        type: je
      }), je.ɵinj = t.cJS({
        imports: [a.ez, N.W1, M.aI]
      }), je;
    })();
  function ke(je, Mt) {
    if (1 & je && (t.ynx(0), t.TgZ(1, "div", 1)(2, "dp-text-cropping")(3, "span", 2), t._uU(4), t.qZA()()(), t.BQk()), 2 & je) {
      const Je = Mt.$implicit,
        Xt = t.oxw();
      t.xp6(1), t.Q6J("size", Xt.textSize), t.xp6(2), t.Q6J("ngClass", Xt.getClass(Je.disabled)), t.xp6(1), t.Oqu(Je.text);
    }
  }
  let J = (() => {
      class je {
        constructor() {
          this.data = [], this.textSize = "normal";
        }
        getClass(Je) {
          return Je && this.data.length > 1 ? "item--disabled" : "";
        }
      }
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵcmp = t.Xpm({
        type: je,
        selectors: [["dp-list-cell"]],
        inputs: {
          data: "data",
          textSize: "textSize"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngFor", "ngForOf"], ["lu-text", "", 3, "size"], [1, "item", 3, "ngClass"]],
        template: function (Je, Xt) {
          1 & Je && t.YNc(0, ke, 5, 3, "ng-container", 0), 2 & Je && t.Q6J("ngForOf", Xt.data);
        },
        dependencies: [a.mk, a.sg, O.Vz, M.NZ],
        styles: [".item[_ngcontent-%COMP%]{display:block}.item--disabled[_ngcontent-%COMP%]{border-radius:calc(var(--lu-base-gutter) * .375);background:rgba(0,0,0,.05);color:var(--lu-black-40)}"],
        changeDetection: 0
      }), je;
    })(),
    fe = (() => {
      class je {}
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵmod = t.oAB({
        type: je
      }), je.ɵinj = t.cJS({
        imports: [a.ez, O.nE, M.aI]
      }), je;
    })(),
    ye = (() => {
      class je {
        get convertedValue() {
          return this.score ? (0, L.gY)(Number(this.score), ["балл", "балла", "баллов"], !0) : "";
        }
      }
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵcmp = t.Xpm({
        type: je,
        selectors: [["dp-news-label"]],
        inputs: {
          score: "score",
          rate: "rate"
        },
        decls: 3,
        vars: 2,
        consts: [[1, "mark-container", 3, "ngClass"]],
        template: function (Je, Xt) {
          1 & Je && (t.TgZ(0, "div", 0)(1, "h4"), t._uU(2), t.qZA()()), 2 & Je && (t.Q6J("ngClass", Xt.rate), t.xp6(2), t.Oqu(Xt.convertedValue));
        },
        dependencies: [a.mk],
        styles: [".mark-container[_ngcontent-%COMP%]{width:99px;padding:3px 8px;border-radius:4px}.base-rate[_ngcontent-%COMP%]{color:var(--lu-green-100);background-color:var(--lu-green-20)}.low-rate[_ngcontent-%COMP%]{color:var(--lu-black-70);background-color:var(--lu-yellow-20)}.middle-rate[_ngcontent-%COMP%]{color:var(--lu-orange-120);background-color:var(--lu-orange-20)}.high-rate[_ngcontent-%COMP%]{color:var(--lu-red-120);background-color:var(--lu-red-20)}.out-of-rate[_ngcontent-%COMP%]{color:var(--lu-black-54);background-color:var(--lu-black-10)}"],
        changeDetection: 0
      }), je;
    })();
  function ae(je, Mt) {
    if (1 & je && (t.TgZ(0, "div", 1), t._UZ(1, "dp-news-label", 2), t.TgZ(2, "span", 3), t._uU(3), t.qZA()()), 2 & je) {
      const Je = t.oxw();
      t.xp6(1), t.Q6J("score", Je.score)("rate", Je.rate), t.xp6(1), t.Q6J("ngStyle", Je.timeColor), t.xp6(1), t.Oqu(Je.time);
    }
  }
  let Y = (() => {
    class je {
      constructor() {
        this.data = {
          newsCellData: {}
        };
      }
      get score() {
        return this.data.newsCellData.score;
      }
      get rate() {
        return this.data.newsCellData.rate;
      }
      get time() {
        return this.data.newsCellData.time;
      }
      get timeColor() {
        return this.data.newsCellData.timeColor ? {
          color: this.data.newsCellData.timeColor
        } : null;
      }
    }
    return je.ɵfac = function (Je) {
      return new (Je || je)();
    }, je.ɵcmp = t.Xpm({
      type: je,
      selectors: [["dp-news-cell"]],
      inputs: {
        data: "data"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "cell", 4, "ngIf"], [1, "cell"], [3, "score", "rate"], [1, "cell__time", 3, "ngStyle"]],
      template: function (Je, Xt) {
        1 & Je && t.YNc(0, ae, 4, 4, "div", 0), 2 & Je && t.Q6J("ngIf", Xt.score && Xt.time);
      },
      dependencies: [a.O5, a.PC, ye],
      styles: [".cell[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start}.cell__time[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) / 2)}"],
      changeDetection: 0
    }), je;
  })();
  function pe(je, Mt) {
    if (1 & je && t._UZ(0, "lu-svg-icon", 5), 2 & je) {
      const Je = t.oxw();
      t.Q6J("icon", Je.prefixIcon.iconName)("size", Je.iconSize(Je.prefixIcon))("luTooltip", Je.prefixIcon.tooltipText || "")("canOpen", !!Je.prefixIcon.tooltipText)("positions", "top-left")("ngStyle", Je.getIconStyle(Je.prefixIcon));
    }
  }
  function be(je, Mt) {
    if (1 & je && (t.TgZ(0, "span", 6), t._uU(1), t.qZA()), 2 & je) {
      const Je = t.oxw();
      t.Q6J("luTooltip", Je.prefixText.tooltip || "")("ngStyle", Je.getTextStyle(Je.prefixText))("canOpen", !!Je.prefixText.tooltip)("positions", "top-left")("size", Je.textSize), t.xp6(1), t.hij(" ", Je.prefixText.title, " ");
    }
  }
  function le(je, Mt) {
    if (1 & je && (t.TgZ(0, "span", 7), t._uU(1), t.qZA()), 2 & je) {
      const Je = t.oxw();
      t.Q6J("luTooltip", Je.smartTitle.tooltip || "")("ngStyle", Je.getTextStyle(Je.smartTitle))("canOpen", !!Je.smartTitle.tooltip)("positions", "top-left")("size", Je.textSize), t.xp6(1), t.hij(" ", Je.smartTitle.title, " ");
    }
  }
  function n(je, Mt) {
    if (1 & je && (t.TgZ(0, "span", 8), t._uU(1), t.qZA()), 2 & je) {
      const Je = t.oxw();
      t.Q6J("luTooltip", Je.postfixText.tooltip || "")("ngStyle", Je.getTextStyle(Je.postfixText))("canOpen", !!Je.postfixText.tooltip)("positions", "top-left")("size", Je.textSize), t.xp6(1), t.hij(" ", Je.postfixText.title, " ");
    }
  }
  function Se(je, Mt) {
    if (1 & je && t._UZ(0, "lu-svg-icon", 5), 2 & je) {
      const Je = t.oxw();
      t.Q6J("icon", Je.postfixIcon.iconName)("size", Je.iconSize(Je.postfixIcon))("luTooltip", Je.postfixIcon.tooltipText || "")("canOpen", !!Je.postfixIcon.tooltipText)("positions", "top-left")("ngStyle", Je.getIconStyle(Je.postfixIcon));
    }
  }
  let qe = (() => {
      class je {
        constructor() {
          this.data = {
            smartTitle: {
              title: ""
            }
          }, this.textSize = "normal";
        }
        getIconStyle(Je) {
          return {
            ...this.iconColor(Je),
            ...this.getMargin(Je)
          };
        }
        getTextStyle(Je) {
          return {
            ...this.textColor(Je),
            ...this.fontWeight(Je),
            ...this.fontSize(Je)
          };
        }
        get containerStyle() {
          return {
            "background-color": this.containerData?.backgroundColor || "inherit",
            border: this.containerData?.border || "none",
            padding: this.containerData?.padding || "0"
          };
        }
        get containerClass() {
          return "rounded" === this.containerData?.backgroundClass ? "rounded-field" : "";
        }
        textColor(Je) {
          return Je.textColor ? {
            color: Je.textColor
          } : {
            color: "var(--lu-black-80)"
          };
        }
        fontWeight(Je) {
          return Je.fontWeight ? {
            "font-weight": Je.fontWeight
          } : {
            "font-weight": "400"
          };
        }
        fontSize(Je) {
          return Je.fontSize ? {
            "font-size": Je.fontSize
          } : {};
        }
        iconColor(Je) {
          return Je.iconColor ? {
            "--lu-svg-icon-color": Je.iconColor
          } : {};
        }
        iconSize(Je) {
          return Je.iconSize ? Number(Je.iconSize) : 24;
        }
        iconRightMargin(Je) {
          return Je.iconRightMargin ? {
            "margin-right": `${Je.iconRightMargin}px`
          } : {};
        }
        getMargin(Je) {
          return Je.iconSize && "16" === Je.iconSize ? {
            margin: "4px"
          } : this.iconRightMargin(Je);
        }
        get smartTitle() {
          return this.data.smartTitle?.title ? this.data.smartTitle : void 0;
        }
        get prefixIcon() {
          return this.data.prefixIcon?.iconName ? this.data.prefixIcon : void 0;
        }
        get postfixIcon() {
          return this.data.postfixIcon?.iconName ? this.data.postfixIcon : void 0;
        }
        get prefixText() {
          return this.data.prefixText?.title ? this.data.prefixText : void 0;
        }
        get containerData() {
          return this.data.containerStyles ? this.data.containerStyles : void 0;
        }
        get postfixText() {
          return this.data.postfixText?.title ? this.data.postfixText : void 0;
        }
      }
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵcmp = t.Xpm({
        type: je,
        selectors: [["dp-smart-cell"]],
        inputs: {
          data: "data",
          textSize: "textSize"
        },
        decls: 6,
        vars: 7,
        consts: [[1, "cell-body", 3, "ngClass", "ngStyle"], [3, "icon", "size", "luTooltip", "canOpen", "positions", "ngStyle", 4, "ngIf"], ["class", "prefix__text", "lu-text", "", 3, "luTooltip", "ngStyle", "canOpen", "positions", "size", 4, "ngIf"], ["lu-text", "", 3, "luTooltip", "ngStyle", "canOpen", "positions", "size", 4, "ngIf"], ["class", "postfix__text", "lu-text", "", 3, "luTooltip", "ngStyle", "canOpen", "positions", "size", 4, "ngIf"], [3, "icon", "size", "luTooltip", "canOpen", "positions", "ngStyle"], ["lu-text", "", 1, "prefix__text", 3, "luTooltip", "ngStyle", "canOpen", "positions", "size"], ["lu-text", "", 3, "luTooltip", "ngStyle", "canOpen", "positions", "size"], ["lu-text", "", 1, "postfix__text", 3, "luTooltip", "ngStyle", "canOpen", "positions", "size"]],
        template: function (Je, Xt) {
          1 & Je && (t.TgZ(0, "div", 0), t.YNc(1, pe, 1, 6, "lu-svg-icon", 1), t.YNc(2, be, 2, 6, "span", 2), t.YNc(3, le, 2, 6, "span", 3), t.YNc(4, n, 2, 6, "span", 4), t.YNc(5, Se, 1, 6, "lu-svg-icon", 1), t.qZA()), 2 & Je && (t.Q6J("ngClass", Xt.containerClass)("ngStyle", Xt.containerStyle), t.xp6(1), t.Q6J("ngIf", Xt.prefixIcon && Xt.prefixIcon.iconName), t.xp6(1), t.Q6J("ngIf", Xt.smartTitle && Xt.prefixText), t.xp6(1), t.Q6J("ngIf", Xt.smartTitle), t.xp6(1), t.Q6J("ngIf", Xt.smartTitle && Xt.postfixText), t.xp6(1), t.Q6J("ngIf", Xt.postfixIcon && Xt.postfixIcon.iconName));
        },
        dependencies: [a.mk, a.O5, a.PC, b.q, d.$, M.NZ],
        styles: [".cell-body[_ngcontent-%COMP%]{display:flex}.prefix__text[_ngcontent-%COMP%]{margin-right:calc(var(--lu-base-gutter) / 2)}.postfix__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2)}.rounded-field[_ngcontent-%COMP%]{text-align:center;padding:2px 4px;border-radius:4px}"],
        changeDetection: 0
      }), je;
    })(),
    Rt = (() => {
      class je {}
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵmod = t.oAB({
        type: je
      }), je.ɵinj = t.cJS({
        imports: [a.ez, b.h, d.i, M.aI]
      }), je;
    })(),
    We = (() => {
      class je {
        constructor() {
          this.data = "", this.textSize = "normal";
        }
      }
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵcmp = t.Xpm({
        type: je,
        selectors: [["dp-text-cell"]],
        inputs: {
          data: "data",
          textSize: "textSize"
        },
        decls: 4,
        vars: 2,
        consts: [["lu-text", "", 3, "size"]],
        template: function (Je, Xt) {
          1 & Je && (t.TgZ(0, "div", 0)(1, "dp-text-cropping")(2, "span"), t._uU(3), t.qZA()()()), 2 & Je && (t.Q6J("size", Xt.textSize), t.xp6(3), t.Oqu(Xt.data));
        },
        dependencies: [O.Vz, M.NZ],
        encapsulation: 2,
        changeDetection: 0
      }), je;
    })(),
    Re = (() => {
      class je {}
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵmod = t.oAB({
        type: je
      }), je.ɵinj = t.cJS({
        imports: [a.ez, O.nE, M.aI]
      }), je;
    })(),
    st = (() => {
      class je {
        constructor() {
          this._type = "unknown";
        }
      }
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵcmp = t.Xpm({
        type: je,
        selectors: [["dp-unknown-cell"]],
        decls: 2,
        vars: 1,
        consts: [[3, "tooltip"]],
        template: function (Je, Xt) {
          1 & Je && (t.TgZ(0, "dp-unknown-component", 0), t._uU(1, " нтк "), t.qZA()), 2 & Je && t.Q6J("tooltip", "Не известный тип колонки: " + Xt._type);
        },
        dependencies: [O.bk],
        encapsulation: 2,
        changeDetection: 0
      }), je;
    })();
  function mt(je, Mt) {}
  let ut = (() => {
      class je {
        constructor(Je) {
          this.meta = {
            type: "text",
            align: "left",
            textSize: "normal"
          }, this.runAction = new t.vpe(), this.componentsMap = {}, this.universalCellMap = {
            text: We,
            smart: qe,
            diagnosis: x,
            news: Y,
            list: J,
            label: y,
            icon: T,
            link: F
          }, this.compareComponentsMap(Je);
        }
        ngOnInit() {
          this.loadComponent(this.data, this.runAction);
        }
        ngOnChanges() {
          this.loadComponent(this.data, this.runAction);
        }
        loadComponent(Je, Xt) {
          const Nn = this.adHost.viewContainerRef;
          Nn.clear();
          const Pi = Nn.createComponent(this.componentsMap[this.meta.type] ?? st);
          Pi.instance.data = Je, Pi.instance.textSize = this.meta.textSize, Pi.instance._type = this.meta.type, "runAction" in Pi.instance && (Pi.instance.runAction = Xt);
        }
        compareComponentsMap(Je) {
          this.componentsMap = this.universalCellMap, Je?.length && Je.forEach(Xt => {
            if (this.hasDuplicates(Xt, this.componentsMap)) throw new Error("Has dublicates cells");
            this.componentsMap = {
              ...this.componentsMap,
              ...Xt
            };
          });
        }
        hasDuplicates(Je, Xt) {
          const Nn = [...Object.keys(Je), ...Object.keys(Xt)];
          return Nn.filter((Pi, Ii) => Nn.indexOf(Pi) !== Ii).length > 0;
        }
      }
      return je.ɵfac = function (Je) {
        return new (Je || je)(t.Y36(v, 8));
      }, je.ɵcmp = t.Xpm({
        type: je,
        selectors: [["dp-universal-cell"]],
        viewQuery: function (Je, Xt) {
          if (1 & Je && t.Gf(e.x6, 7), 2 & Je) {
            let Nn;
            t.iGM(Nn = t.CRH()) && (Xt.adHost = Nn.first);
          }
        },
        inputs: {
          meta: "meta",
          data: "data"
        },
        outputs: {
          runAction: "runAction"
        },
        features: [t.TTD],
        decls: 2,
        vars: 3,
        consts: [["dpAdHost", ""]],
        template: function (Je, Xt) {
          1 & Je && (t.TgZ(0, "div"), t.YNc(1, mt, 0, 0, "ng-template", 0), t.qZA()), 2 & Je && t.Gre("cell cell--", Xt.meta.align, "");
        },
        dependencies: [e.x6],
        styles: [".cell[_ngcontent-%COMP%]{display:flex}.cell--center[_ngcontent-%COMP%]{justify-content:center}.cell--left[_ngcontent-%COMP%]{justify-content:flex-start}.cell--right[_ngcontent-%COMP%]{justify-content:flex-end}"],
        changeDetection: 0
      }), je;
    })(),
    Ct = (() => {
      class je {}
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵmod = t.oAB({
        type: je
      }), je.ɵinj = t.cJS({
        imports: [a.ez, e.vB, Rt, Re, fe, u, j, Le]
      }), je;
    })(),
    Ft = (() => {
      class je {
        transform(Je, Xt) {
          return {
            type: Je.type,
            align: Xt.align,
            textSize: Xt.textSize
          };
        }
      }
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵpipe = t.Yjl({
        name: "cellMeta",
        type: je,
        pure: !0
      }), je;
    })();
  const Et = new C.Kj();
  let Ue = (() => {
    class je {
      transform(Je, Xt) {
        if (!Xt) return Je;
        const Nn = Et.parse(`{% if ${Xt} %}true{% else %}false{% endif %}`);
        return Je.map(Pi => Pi.filter(Ii => !this.shouldHide(Nn, Ii))).filter(Pi => Pi.length > 0);
      }
      shouldHide(Je, Xt) {
        try {
          return "true" === Et.renderSync(Je, {
            value: Xt.data
          });
        } catch {
          return !1;
        }
      }
    }
    return je.ɵfac = function (Je) {
      return new (Je || je)();
    }, je.ɵpipe = t.Yjl({
      name: "gridHideIf",
      type: je,
      pure: !0
    }), je;
  })();
  function Me(je, Mt) {
    if (1 & je) {
      const Je = t.EpF();
      t.TgZ(0, "div", 3)(1, "dp-universal-cell", 4), t.NdJ("runAction", function (Nn) {
        t.CHM(Je);
        const Pi = t.oxw(2);
        return t.KtG(Pi.onRunAction(Nn));
      }), t.ALo(2, "cellMeta"), t.qZA()();
    }
    if (2 & je) {
      const Je = Mt.$implicit,
        Xt = t.oxw(2);
      t.xp6(1), t.Q6J("meta", t.xi3(2, 2, Je, Xt.meta))("data", Je.data);
    }
  }
  function Ke(je, Mt) {
    if (1 & je && (t.TgZ(0, "div", 1), t.YNc(1, Me, 3, 5, "div", 2), t.qZA()), 2 & je) {
      const Je = Mt.$implicit,
        Xt = t.oxw();
      t.xp6(1), t.Q6J("ngForOf", Je)("ngForTrackBy", Xt.trackByIndex);
    }
  }
  let Ze = (() => {
      class je {
        constructor() {
          this.grid = [], this.meta = {
            type: "text",
            align: "left",
            textSize: "normal"
          }, this.runAction = new t.vpe();
        }
        trackByIndex(Je) {
          return String(Je);
        }
        onRunAction(Je) {
          this.runAction.emit(Je);
        }
      }
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵcmp = t.Xpm({
        type: je,
        selectors: [["dp-universal-grid-cells"]],
        inputs: {
          grid: "grid",
          meta: "meta",
          hideIf: "hideIf"
        },
        outputs: {
          runAction: "runAction"
        },
        decls: 2,
        vars: 5,
        consts: [["class", "cell", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cell"], ["class", "row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "row"], [3, "meta", "data", "runAction"]],
        template: function (Je, Xt) {
          1 & Je && (t.YNc(0, Ke, 2, 2, "div", 0), t.ALo(1, "gridHideIf")), 2 & Je && t.Q6J("ngForOf", t.xi3(1, 2, Xt.grid, Xt.hideIf))("ngForTrackBy", Xt.trackByIndex);
        },
        dependencies: [a.sg, ut, Ft, Ue],
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:row}.row[_ngcontent-%COMP%]{margin-bottom:calc(var(--lu-base-gutter) / 2)}.cell[_ngcontent-%COMP%]{display:flex;flex-direction:column}.cell[_ngcontent-%COMP%]:not(:last-child){margin-right:var(--lu-base-gutter)}"],
        changeDetection: 0
      }), je;
    })(),
    Ee = (() => {
      class je {}
      return je.ɵfac = function (Je) {
        return new (Je || je)();
      }, je.ɵmod = t.oAB({
        type: je
      }), je.ɵinj = t.cJS({
        imports: [a.ez, Ct]
      }), je;
    })();
});
