// Extracted from main; webpack module 23062. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Bf: () => Re,
    Ki: () => st,
    XM: () => qe
  });
  var t = i(97582),
    e = i(36895),
    a = i(94650),
    m = i(58435),
    d = i(54968),
    M = i(77579),
    b = i(56451),
    A = i(39300),
    N = i(63900),
    I = i(95698),
    O = i(54004),
    L = i(44348),
    C = i(15635),
    v = i(42550),
    f = i(19237),
    E = i(46757),
    h = i(29521),
    x = i(41742),
    u = i(13700);
  class T {
    constructor(Ct, Ft, Et) {
      this.mask = Ct, this.matchIndex = Ft, this.pattern = Et, this._value = "", this.caret = 0, this.startPos = Ft, this.endPos = (Et?.pattern.length || 1) + Ft;
    }
    isMinFilled(Ct) {
      return (0 !== this.length ? this.length : Ct.length) >= this.minLength;
    }
    get isMaxFilled() {
      return this.length >= this.maxLength;
    }
    insert(Ct, Ft = 0, Et = !0) {
      const Ue = Ct.slice(0, this.maxLength - Ft),
        Me = Et ? this.whileValidate(Ue) : {
          checkedValue: Ue
        };
      return this.isMinFilled(Me.checkedValue) && Me.invalidValue ? this.getNextSelection({
        usefullValue: Me.checkedValue,
        value: Ct,
        from: Ft,
        validate: Et
      }) : this.getNextSelection({
        usefullValue: Ue,
        value: Ct,
        from: Ft,
        validate: Et
      });
    }
    getNextSelection(Ct) {
      const {
        usefullValue: Ft,
        value: Et,
        validate: Ue
      } = Ct;
      let {
          from: Me
        } = Ct,
        Ke = this._value;
      this.isPartSelection && (Me || (Me = this.caret), this.maxLength === this.length && !Me && (Me = 0, Ke = ""));
      const Ze = Ue ? this.whileValidate(Ke.slice(0, Me) + Ft) : {
          checkedValue: Ft
        },
        Ee = Et.slice(Ft.length, Et.length),
        je = Ue ? Ze.checkedValue : Ke.slice(0, Me) + Ze.checkedValue;
      return Ue && Ze.invalidValue ? this.isMinFilled(Ze.checkedValue) && this.isStaticValue(Et) && !1 === this.nextPart?.isSelectable ? this.nextPart.getSelection() : (this.onFailValidate(), this.getSelection(Me)) : (this._value = je, this.caret = this.length, Ee.length && this.nextPart ? this.nextPart.insert(Ee, 0, Ue) : Ze.checkedValue.length === this.maxLength && !1 === this.nextPart?.isSelectable ? this.nextPart.getSelection() : this.getSelection(Ze.checkedValue.length));
    }
    remove(Ct = 0, Ft = 0, Et = E.uw.LEFT) {
      if (this.isPartSelection) {
        if (Ct === this.startAbsolutePos && Ft === this.endAbsolutePos && (this.length && this.caret && (Ct = this.startAbsolutePos + this.caret - 1), !this.length && this.previousPart && !this.caret && Et !== E.uw.NONE)) return this.previousPart.remove(this.previousPart.endAbsolutePos - 1, this.previousPart.endAbsolutePos, E.uw.LEFT);
        if (Et === E.uw.NONE) return this.getSelection();
      }
      const Ue = Math.max(Ct - this.startAbsolutePos, 0),
        Me = Math.min(Math.min(Ft, this.endAbsolutePos) - (this.startAbsolutePos + Ue), this.length);
      return this._value = this._value.slice(0, Ue) + this._value.slice(Ue + Me, this.value.length), this.caret = this.length, Ct < this.startAbsolutePos && this.previousPart ? this.previousPart.remove(Ct, Ft, Et) : Et === E.uw.LEFT ? this.getSelection(Ue) : this.getSelection(Math.max(Ct - this.startAbsolutePos, 0), Et !== E.uw.RIGHT);
    }
    processKeyboard(Ct) {
      if (this.pattern?.keyDown) {
        const Ft = this.pattern.keyDown(Ct, this.value).slice(0, this.maxLength);
        if (!this.validate(Ft)) return void this.onFailValidate();
        Ft !== this.value && (this._value = Ft);
      }
    }
    isStaticValue(Ct) {
      return !!this.pattern?.dividers?.some(Ft => Ft === Ct[Ct.length - 1]);
    }
    onFailValidate() {
      this.mask.config.inputFailFn && this.mask.config.inputFailFn();
    }
    setPos(Ct) {
      this.startPos = Ct, this.endPos = (this.pattern?.pattern.length || 1) + Ct;
    }
    get isSelectable() {
      return !this.isStatic;
    }
    get index() {
      return this.mask.parts.indexOf(this);
    }
    get previousPart() {
      return this.mask.parts[this.index - 1] || null;
    }
    get nextPart() {
      return this.mask.parts[this.index + 1] || null;
    }
    get startAbsolutePos() {
      return this.previousPart?.endAbsolutePos || this.startPos;
    }
    get endAbsolutePos() {
      return (this.previousPart?.endAbsolutePos || this.startPos) + (this.isStatic ? this.value.length : Math.max(this.minLength, this.length));
    }
    get placeholder() {
      return (this.pattern?.placeholderChar ?? this.mask.config.placeholderChar ?? "_").repeat(Math.max(this.minLength, this.value.length));
    }
    get isPartSelection() {
      return "part" === this.pattern?.selection;
    }
    get isMovable() {
      return !1;
    }
    get length() {
      return this.value.length;
    }
    get inputValue() {
      return this.value + this.placeholder.slice(this.value.length, this.minLength);
    }
    get maskedValue() {
      return this.value;
    }
    get unmaskedValue() {
      return this.value;
    }
    get nextHasValue() {
      return this.mask.parts.slice(this.index, this.mask.parts.length).some(Ct => !Ct.isStatic && Ct.length);
    }
    get value() {
      return this._value;
    }
    get isStatic() {
      return !1;
    }
    get absoluteCaret() {
      return this.startAbsolutePos + this.caret;
    }
    resetCaret() {
      this.caret = 0;
    }
    validate(Ct) {
      return !Ct || (this.pattern?.validation instanceof RegExp ? this.pattern.validation.test(Ct) && Ct.split("").every(Ft => !this.isStaticValue(Ft)) : !(this.pattern?.validation instanceof Function) || this.pattern.validation(Ct, this.index));
    }
    whileValidate(Ct) {
      let Ft = 0,
        Et = "";
      for (; Ft <= Ct.length;) {
        if (!this.validate(Ct.slice(0, Ft))) return {
          checkedValue: Et,
          invalidValue: Ct.slice(Ft - 1)
        };
        Et = Ct.slice(0, Ft), Ft++;
      }
      return {
        checkedValue: Et
      };
    }
    getSelection(Ct = 0, Ft = !0, Et = 0) {
      const Ue = Math.max(this.startAbsolutePos + Et + Ct, 0);
      if (Ue > this.endAbsolutePos) return this.nextPart ? this.nextPart.getSelection(Ue - this.endAbsolutePos, Ft) : this.getSelection(this.length);
      if (Ue < this.startAbsolutePos) return this.previousPart ? this.previousPart.getSelection(Ue - this.previousPart.startAbsolutePos, Ft) : this.getSelection();
      if (this.isSelectable) return this.isPartSelection ? {
        start: this.startAbsolutePos,
        end: this.endAbsolutePos
      } : {
        start: Math.min(Ue, this.startAbsolutePos + this.length),
        end: Math.min(Ue, this.startAbsolutePos + this.length)
      };
      (Ft && !this.nextPart || !Ft && !this.previousPart) && (Ft = !Ft);
      const Me = Ft ? this.nextPart : this.previousPart;
      return Me ? Me.getSelection(Ft ? this.isStatic ? 0 : Me.endAbsolutePos - Ue : this.isStatic ? Me.length : 0, Ft) : {
        start: 0,
        end: 0
      };
    }
  }
  class R extends T {
    get minLength() {
      return this.pattern?.pattern.length || 0;
    }
    get maxLength() {
      return this.pattern?.pattern.length || 0;
    }
    get isMovable() {
      return !this.isPartSelection;
    }
    get isSelectable() {
      return !!this.length || this.isFirstFixed;
    }
    get isFirstFixed() {
      return this.mask.parts.slice(0, this.index).every(Ct => Ct.isStatic || Ct.isPartSelection || Ct.length);
    }
  }
  class y extends T {
    get minLength() {
      return 1;
    }
    get maxLength() {
      return 1 / 0;
    }
    get isSelectable() {
      return !0;
    }
  }
  class j extends T {
    get minLength() {
      return this.patternLength?.minLength || 1;
    }
    get maxLength() {
      return this.patternLength?.maxLength || 1;
    }
    get isSelectable() {
      return !0;
    }
    get isMovable() {
      return this.minLength === this.maxLength;
    }
    get patternLength() {
      return this.pattern?.type || null;
    }
  }
  class F extends T {
    get minLength() {
      return 1;
    }
    get maxLength() {
      return 1 / 0;
    }
    get isSelectable() {
      return !0;
    }
  }
  function Le(ut) {
    if ("dynamic" === ut.type && "LU_REGEXP" === ut.pattern && ut.validation instanceof RegExp) return F;
    if ("fixed" === ut.type) return R;
    if ("dynamic" === ut.type) return y;
    if ((0, C.hj)(ut.type.minLength) && (0, C.hj)(ut.type.maxLength)) return j;
    throw L.vE.error("Тип паттерна не был опознан/");
  }
  class ke extends T {
    constructor(Ct, Ft, Et, Ue) {
      if (super(Ct, Ft), this.mask = Ct, this.matchIndex = Ft, this.stringValue = Et, this.useInModel = Ue, this.length > 1) throw L.vE.error("LuMaskStaticPart не может быть длиннее 1 символа.");
    }
    get minLength() {
      return 0;
    }
    get maxLength() {
      return 0;
    }
    get placeholder() {
      return this.value;
    }
    get isStatic() {
      return !0;
    }
    get value() {
      return this.stringValue;
    }
    get isSelectable() {
      return !1;
    }
    get maskedValue() {
      return this.nextHasValue ? this.value : "";
    }
    get unmaskedValue() {
      return this.useInModel && this.nextHasValue ? this.value : "";
    }
    insert(Ct) {
      let Ft = Ct;
      return Ct.slice(0, this.value.length) === this.value && (Ft = Ct.slice(this.value.length, Ct.length)), Ft.length && this.nextPart ? this.nextPart.insert(Ft) : this.getSelection();
    }
    remove(Ct = 0, Ft = 0, Et = E.uw.LEFT) {
      return Ct < this.startAbsolutePos && this.previousPart ? this.previousPart.remove(Ct, Ft, Et) : Ct === this.startAbsolutePos && Ft === this.endAbsolutePos && this.previousPart && Et === E.uw.LEFT ? this.previousPart?.remove(Ct - this.length, Ft - this.length, Et) : this.getSelection();
    }
  }
  class J {
    static parse(Ct, Ft, Et) {
      Ft = Ft.sort((Ii, yi) => yi.pattern.length - Ii.pattern.length);
      const Ue = (0, v.RN)(...Ft.map(Ii => (0, v.fL)(Ii.pattern).pipe((0, f.hZ)(Ii), (0, f.WL)(Ii.pattern)))).pipe((0, v.dH)("pattern")),
        Me = Ii => Ue.pipe((0, f.UI)(yi => {
          const co = {
            ...yi.value,
            selection: Ii || yi.value.selection
          };
          return new (Le(co))(Et, yi.start.index, co);
        })),
        Ke = (Ii = !1) => (0, v.fL)("\\").pipe((0, f.lp)(Ue), (0, f.UI)(yi => yi.value.pattern.split("").map((co, Jo) => new ke(Et, yi.start.index + Jo, co), Ii))),
        Ze = (Ii = !1) => (0, v.fL)("\\").pipe((0, f.lp)((0, v.RN)((0, v.fL)("["), (0, v.fL)("]"), (0, v.fL)("{"), (0, v.fL)("}"))), (0, v.dH)("static"), (0, f.UI)(yi => new ke(Et, yi.start.index, yi.value, Ii))),
        Ee = (Ii = !1) => (0, v.EQ)(/[^[\]\\{}]/).pipe((0, v.dH)("static"), (0, f.UI)(yi => yi.value.split("").map((co, Jo) => new ke(Et, yi.start.index + Jo, co, Ii)))),
        je = Ii => Ue.pipe((0, f.T0)((0, v.fL)("{")), (0, f.xD)((0, v.Rx)().pipe((0, f.NM)((0, v.fL)(",")), (0, v.dH)("patternLength"))), (0, f.UI)(([yi, co]) => {
          const Jo = {
            ...yi.value,
            type: {
              minLength: co.value[0],
              maxLength: co.value[1]
            },
            selection: Ii || yi.value.selection
          };
          return new (Le(Jo))(Et, yi.start.index, Jo);
        }), (0, f.T0)((0, v.fL)("}"))),
        Mt = Ii => Ue.pipe((0, f.T0)((0, v.fL)("{")), (0, f.xD)((0, v.Rx)().pipe((0, v.dH)("patternLength"))), (0, f.UI)(([yi, co]) => {
          const Jo = {
            ...yi.value,
            type: {
              minLength: co.value,
              maxLength: co.value
            },
            selection: Ii || yi.value.selection
          };
          return new (Le(Jo))(Et, yi.start.index, Jo);
        }), (0, f.T0)((0, v.fL)("}"))),
        Je = Ii => Ue.pipe((0, f.T0)((0, v.fL)("{")), (0, f.xD)((0, v.fL)("*").pipe((0, v.dH)("patternLength"))), (0, f.UI)(([yi]) => {
          const co = {
            ...yi.value,
            type: "dynamic",
            selection: Ii || yi.value.selection
          };
          return new (Le(co))(Et, yi.start.index, co);
        }), (0, f.T0)((0, v.fL)("}"))),
        Xt = (0, v.fL)("[").pipe((0, f.lp)((0, v.RN)(Ke(!0), Ze(!0), Mt("part"), Je("part"), je("part"), Me("part"), Ee(!0)).pipe((0, f.rx)(), (0, f.UI)(Ii => (0, C.Bn)(Ii)))), (0, f.T0)((0, v.fL)("]"))),
        Pi = (0, v.RN)(Ze(), Ke(), Mt(), Je(), je(), Me(), Xt, Ee()).pipe((0, f.rx)(), (0, f.UI)(Ii => (0, C.Bn)(Ii))).pipe((0, f.Se)()).parse(Ct);
      if (Pi.success) {
        const Ii = Pi.value;
        return Ii.reduce((co, Jo) => (Jo.setPos(co), Jo instanceof ke ? co + Jo.placeholder.length : co + (Jo.pattern?.pattern.length || 0)), 0), {
          mask: Ii.map(co => co instanceof ke ? co.placeholder : co.pattern?.pattern || "").join(""),
          parts: Ii
        };
      }
      throw L.vE.error(`\u041f\u0430\u0440\u0441\u0435\u0440 \u043d\u0435 \u0441\u043c\u043e\u0433 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043c\u0430\u0441\u043a\u0443 ${Ct}\n${JSON.stringify(Pi)}`);
    }
  }
  const fe = new a.OlP("LU_MASK_CUSTOM_PATTERNS");
  function G(ut, Ct) {
    return ut.keyCode === h.LH ? (ut.preventDefault(), (0, C.Sk)(String(Number(Ct) + 1), 2, "0")) : ut.keyCode === h.JH ? (ut.preventDefault(), (0, C.Sk)(String(Number(Ct) - 1), 2, "0")) : Ct;
  }
  const Se = [{
    pattern: "9",
    type: "fixed",
    validation: /^\d*$/
  }, {
    pattern: "a",
    type: "fixed",
    validation: /^[a-zA-Z\u0430-\u044f\u0410-\u042f]*$/
  }, {
    pattern: "*",
    type: "fixed"
  }, {
    pattern: "MM",
    type: "fixed",
    selection: "part",
    validation: ut => {
      if (!/^\d*$/.test(ut) || ut.length > 2) return !1;
      if (0 === ut.length) return !0;
      const Ct = Number(ut);
      return 1 === ut.length ? Ct >= 0 && Ct <= 5 : Ct >= 0 && Ct <= 59;
    },
    keyDown: G
  }, {
    pattern: "HH",
    type: "fixed",
    selection: "part",
    validation: ut => {
      if (!/^\d*$/.test(ut) || ut.length > 2) return !1;
      if (0 === ut.length) return !0;
      const Ct = Number(ut);
      return 1 === ut.length ? Ct >= 0 && Ct <= 2 : Ct >= 0 && Ct <= 23;
    },
    keyDown: G
  }, {
    pattern: "dd",
    type: "fixed",
    selection: "part",
    validation: ut => {
      if (!/^\d*$/.test(ut) || ut.length > 2 || 0 === ut.length) return !1;
      const Ct = Number(ut);
      return 1 === ut.length ? Ct >= 0 && Ct <= 3 : Ct >= 1 && Ct <= 31;
    },
    keyDown: G
  }, {
    pattern: "mm",
    type: "fixed",
    selection: "part",
    validation: ut => {
      if (!/^\d*$/.test(ut) || ut.length > 2 || 0 === ut.length) return !1;
      const Ct = Number(ut);
      return 1 === ut.length ? Ct >= 0 && Ct <= 1 : Ct >= 1 && Ct <= 12;
    },
    keyDown: G
  }, {
    pattern: "yyyy",
    type: "fixed",
    selection: "part",
    validation: ut => /^\d*$/.test(ut) && ut.length <= 4,
    keyDown: G
  }];
  class qe {
    constructor(Ct) {
      if (this.config = Ct, this.mask = "", this.eventFn = () => {}, Ct.mask instanceof RegExp) {
        this.mask = "LU_REGEXP";
        const Ft = J.parse(this.mask, [{
          pattern: "LU_REGEXP",
          type: "dynamic",
          validation: Ct.mask
        }], this);
        this.mask = Ft.mask, this.parts = Ft.parts;
      } else if (Array.isArray(Ct.mask)) this.parts = Ct.mask.map((Ft, Et) => Ft instanceof RegExp ? new R(this, Et, {
        pattern: "r",
        type: "fixed",
        validation: Ft
      }) : new ke(this, Et, Ft)), this.mask = this.parts.map(Ft => Ft instanceof ke ? Ft.placeholder : "r").join("");else {
        this.mask = Ct.mask;
        const Ft = J.parse(this.mask, [...Se, ...(0, C._2)(Ct.patterns)], this);
        this.mask = Ft.mask, this.parts = Ft.parts;
      }
    }
    get inputValue() {
      if ("" === this.config.placeholderChar) {
        const Ct = this.parts;
        let Ft = -1;
        for (let Et = Ct.length - 1; Et >= 0; Et--) if (!Ct[Et].isStatic && Ct[Et].length > 0) {
          Ft = Et;
          break;
        }
        return -1 === Ft ? "" : this.parts.slice(0, Ft + 1).map(Et => Et.inputValue).join("");
      }
      return this.parts.map(Ct => Ct.inputValue).join("");
    }
    get maskedValue() {
      return this.parts.map(Ct => Ct.maskedValue).join("");
    }
    get unmaskedValue() {
      return this.parts.map(Ct => Ct.unmaskedValue).join("");
    }
    get isFilled() {
      return this.parts.filter(Ct => !Ct.isStatic).every(Ct => Ct.isMaxFilled);
    }
    get isEmpty() {
      return this.parts.filter(Ct => !Ct.isStatic).every(Ct => 0 === Ct.length);
    }
    registerEvent(Ct) {
      this.eventFn = Ct;
    }
    change(Ct) {
      let Ft = {
          start: Ct.cursorPos,
          end: Ct.cursorPos
        },
        Et = "";
      if (Ct.removedCount) {
        const Me = this.getPartByPos(Ct.startChangePos + Ct.removedCount - 1);
        Me && (Ft = Me.remove(Ct.startChangePos, Ct.startChangePos + Ct.removedCount, Ct.removeDirection) || Ft);
      }
      if (Et = this.getTail(Ct.startChangePos), Ct.insertedCount) {
        const Ue = this.getPartByPos(Ct.startChangePos);
        Ue && (Ft = Ue.insert(Ct.inserted, Ct.startChangePos - Ue.startAbsolutePos));
      }
      return this.moveTail(Et, Ft.end), Ft;
    }
    processSelectionChange(Ct) {
      if (this.parts.forEach(Ft => Ft.resetCaret()), Ct.start === Ct.end) {
        const Ft = this.getPartByPos(Ct.start);
        if (Ft) {
          const Et = Math.min(Math.max(Ct.start - Ft.startAbsolutePos, 0), Ft.length);
          return Ft.getSelection(Et);
        }
        return Ct;
      }
      return Ct;
    }
    processKeyboard(Ct, Ft) {
      const Et = this.getPartByPos(Ct.start);
      if (Et) {
        Et.processKeyboard(Ft);
        const Me = Et.isPartSelection && Ct.start === Et.startAbsolutePos && Ct.end === Et.endAbsolutePos;
        if (Ct.start === Ct.end || Me) {
          let Ke = Ft.code;
          if ("Space" === Ke && (Et.isStatic ? " " !== Et.value && (Ke = "ArrowRight") : Et.validate(" ") || (Ke = "ArrowRight")), ["ArrowRight", "ArrowLeft"].includes(Ke) && !Ft.defaultPrevented && (this.parts.forEach(Ze => Ze.resetCaret()), !Ft.shiftKey)) {
            const Ze = "ArrowRight" === Ke ? 1 : -1,
              Ee = Ze > 0,
              Mt = Et.getSelection(Ze, Ee, Me && Ee ? Et.endAbsolutePos - Et.startAbsolutePos : Ct.start - Et.startAbsolutePos);
            return Ft.preventDefault(), this.eventFn && Ct.start === Mt.start && Ct.end === Mt.end && ("ArrowRight" === Ke && this.eventFn("focusNext"), "ArrowLeft" === Ke && this.eventFn("focusPrevious")), Mt;
          }
        }
      }
      return Ct;
    }
    moveTail(Ct, Ft) {
      if (Ct) {
        let Et = this.getPartByPos(Ft);
        if (Et) {
          let Ue = Ft - Et.startAbsolutePos;
          for (; Et && (Et.isMovable || Et.isStatic);) {
            if (!Et.isStatic) {
              const Me = Ct.slice(0, Et.maxLength);
              (Me.length < Et.length || !Me) && Et.remove(Et.startAbsolutePos, Et.endAbsolutePos), Me && Et.insert(Me, Ue, !1), Et.value === Me && (Ct = Ct.slice(Et.maxLength, Ct.length));
            }
            Et = Et.nextPart, Ue = 0;
          }
        }
      }
    }
    getTail(Ct) {
      let Ft = this.getPartByPos(Ct),
        Et = "";
      if (Ft) for (Ct = Math.max(Ct - Ft.startAbsolutePos, 0); Ft && (Ft.isMovable || Ft.isStatic);) Ft.isStatic || (Et += Ft.value.slice(Ct, Ft.length)), Ft = Ft.nextPart, Ct = 0;
      return Et;
    }
    getPartByPos(Ct) {
      let Ft = this.parts.find(Et => Et.startAbsolutePos <= Ct && Et.endAbsolutePos > Ct) || this.parts[this.parts.length - 1] || null;
      return !1 === Ft?.previousPart?.isMaxFilled && (Ft = Ft.previousPart), Ft;
    }
  }
  class Rt {
    constructor(Ct, Ft, Et) {
      this.documentRef = Ct, this.input = Ft, this.ngZone = Et, this.selectionChange$ = (0, d.R)(this.documentRef, "selectionchange").pipe((0, A.h)(() => this.documentRef.activeElement === this.input), (0, N.w)(() => (0, d.R)(this.documentRef, "mouseup").pipe((0, I.q)(1))), (0, x.hx)(this.ngZone));
    }
    setSelectionRange(Ct, Ft, Et) {
      this.input.setSelectionRange(Ct, Ft, Et);
    }
  }
  var We;
  let Re = We = class {
    constructor(Ct, Ft, Et, Ue, Me) {
      this.documentRef = Ct, this.patterns = Ft, this.input = Et, this.inputRef = Ue, this.ngZone = Me, this.mask = "", this.placeholderChar = "_", this.maskPlaceholder = !0, this.modelType = "masked", this.filled = new a.vpe(), this.completed = new a.vpe(), this.empty = new a.vpe(), this.focusNext = new a.vpe(), this.focusPrevious = new a.vpe(), this.maskInstance = null, this.selection = {
        start: 0,
        end: 0
      }, this.inputChange$ = new M.x(), this.previousValue = "", this.selectionControl = new Rt(this.documentRef, this.input.nativeElement, this.ngZone), (0, b.T)((0, d.R)(this.input.nativeElement, "keydown").pipe((0, O.U)(Ke => Ke), (0, A.h)(() => !this.inputRef.isReadonly), (0, O.U)(Ke => this.maskInstance?.processKeyboard(this.getSelection(), Ke) || this.getSelection())), (0, d.R)(this.input.nativeElement, "focus").pipe((0, O.U)(() => this.getSelection())), this.selectionControl.selectionChange$.pipe((0, O.U)(() => this.getSelection()), (0, O.U)(Ke => this.maskInstance?.processSelectionChange(Ke) || Ke))).pipe((0, A.h)(() => this.inputRef.isFocused)).subscribe(Ke => {
        this.makeChanges(Ke), this.setSelection(Ke);
      }), (0, d.R)(this.input.nativeElement, "input", {
        capture: !0
      }).pipe((0, O.U)(() => this.input.nativeElement.value), (0, A.h)(Ke => Ke !== this.maskInstance?.inputValue), (0, m.t)(this)).subscribe(Ke => {
        if (this.maskInstance) {
          const Ze = new L.iH(Ke, this.input.nativeElement.selectionStart || 0, this.maskInstance.inputValue, this.selection),
            Ee = this.maskInstance.change(Ze);
          this.makeChanges(Ee), this.setSelection(Ee);
        } else this.inputChange$.next(Ke);
      });
    }
    get inputValue() {
      return this.maskInstance?.inputValue || "";
    }
    get maskedValue() {
      return this.maskInstance?.maskedValue || "";
    }
    get unmaskedValue() {
      return this.maskInstance?.unmaskedValue || "";
    }
    get inputChange() {
      return this.inputChange$.asObservable();
    }
    get hasValue() {
      return !!this.maskInstance?.unmaskedValue;
    }
    get isFilled() {
      return !!this.maskInstance?.isFilled;
    }
    get hostClass() {
      return !0;
    }
    ngOnChanges() {
      const Ct = this.maskInstance?.unmaskedValue ?? this.input.nativeElement.value ?? "",
        Ft = this.getSelection();
      this.maskInstance = null, this.mask ? (this.maskInstance = new qe({
        mask: this.mask,
        patterns: this.patterns,
        placeholderChar: this.maskPlaceholder ? this.placeholderChar ?? "_" : "",
        inputFailFn: () => this.inputRef.blink()
      }), this.maskInstance.registerEvent(this.maskEvent.bind(this)), this.maskInstance.change(new L.iH(Ct, Ct.length)), this.input.nativeElement.value = this.inputRef.placeholder && !this.maskInstance?.unmaskedValue ? "" : this.maskInstance.inputValue, this.setSelection(this.maskInstance.processSelectionChange(Ft))) : this.input.nativeElement.value = Ct;
    }
    ngAfterViewInit() {
      this.ngZone.onStable.pipe((0, I.q)(1)).subscribe(() => {
        this.maskInstance && (this.input.nativeElement.value = this.maskInstance.inputValue), this.inputRef.placeholder && !this.maskInstance?.unmaskedValue && (this.input.nativeElement.value = "");
      });
    }
    blurEvent() {
      this.inputRef.placeholder && !this.maskInstance?.unmaskedValue && (this.input.nativeElement.value = "");
    }
    setSelection(Ct) {
      this.inputRef.isReadonly || (this.selection = Ct, this.selectionControl.setSelectionRange(Ct.start, Ct.end, "forward"));
    }
    setInputValue(Ct) {
      if (this.maskInstance) {
        const Ft = this.maskInstance.change(new L.iH(Ct, Ct.length, this.maskInstance.inputValue));
        this.input.nativeElement.value = this.inputRef.placeholder && !this.maskInstance?.unmaskedValue ? "" : Ct, this.previousValue = this.getCurrentModel();
        const Et = Ft || this.getSelection();
        this.setSelection(this.maskInstance.processSelectionChange(Et));
      } else this.input.nativeElement.value = Ct;
    }
    focus(Ct) {
      if (this.maskInstance) {
        const Ft = Ct || this.getSelection();
        this.input.nativeElement.focus(), this.setSelection(this.maskInstance.processSelectionChange(Ft));
      }
    }
    getSelection() {
      return {
        start: this.input.nativeElement.selectionStart || 0,
        end: this.input.nativeElement.selectionEnd || 0
      };
    }
    makeChanges(Ct) {
      if (this.maskInstance) {
        const Ft = this.getCurrentModel();
        if (this.input.nativeElement.value = this.maskInstance.inputValue, this.previousValue !== Ft) {
          const Et = this.maskInstance.getPartByPos(Ct.start);
          this.inputChange$.next(Ft), this.previousValue = Ft, this.maskInstance.isFilled && (this.filled.next(Ft), Et?.isMaxFilled && Ct.end === Et.absoluteCaret && this.completed.next(Ft)), this.maskInstance.isEmpty && Ct.start === Et?.startAbsolutePos && this.empty.next("");
        }
      }
    }
    maskEvent(Ct) {
      "focusNext" === Ct && this.focusNext.next(), "focusPrevious" === Ct && this.focusPrevious.next();
    }
    getCurrentModel() {
      return this.maskInstance?.unmaskedValue ? "masked" === this.modelType ? this.maskInstance.maskedValue : this.maskInstance.unmaskedValue : "";
    }
  };
  Re.ɵfac = function (Ct) {
    return new (Ct || Re)(a.Y36(e.K0), a.Y36(fe, 8), a.Y36(a.SBq), a.Y36(u.L), a.Y36(a.R0b));
  }, Re.ɵdir = a.lG2({
    type: Re,
    selectors: [["input", "luInput", "", "luMask", ""]],
    hostVars: 6,
    hostBindings: function (Ct, Ft) {
      1 & Ct && a.NdJ("blur", function () {
        return Ft.blurEvent();
      }), 2 & Ct && a.ekj("lu-mask-has-value", Ft.hasValue)("lu-mask-filled", Ft.isFilled)("lu-mask", Ft.hostClass);
    },
    inputs: {
      mask: ["luMask", "mask"],
      placeholderChar: "placeholderChar",
      maskPlaceholder: "maskPlaceholder",
      modelType: "modelType"
    },
    outputs: {
      filled: "filled",
      completed: "completed",
      empty: "empty",
      focusNext: "focusNext",
      focusPrevious: "focusPrevious"
    },
    exportAs: ["luMask"],
    features: [a._Bn([{
      provide: L.fc,
      useExisting: We
    }]), a.TTD]
  }), Re = We = (0, t.gn)([(0, m.c)()], Re);
  let st = (() => {
    class ut {}
    return ut.ɵfac = function (Ft) {
      return new (Ft || ut)();
    }, ut.ɵmod = a.oAB({
      type: ut
    }), ut.ɵinj = a.cJS({
      imports: [e.ez]
    }), ut;
  })();
});
