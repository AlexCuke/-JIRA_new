// Extracted from main; webpack module 24006. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    CE: () => Ks,
    Cf: () => x,
    F: () => _s,
    Fj: () => v,
    JJ: () => Ke,
    JL: () => Ze,
    JU: () => A,
    NI: () => Fs,
    Oe: () => en,
    On: () => Gn,
    UX: () => dl,
    _: () => ws,
    _Y: () => dn,
    a5: () => Ft,
    cw: () => Eo,
    kI: () => R,
    nD: () => zr,
    oH: () => ua,
    qu: () => jr,
    sg: () => na,
    u: () => qs,
    u5: () => As,
    x0: () => ma
  });
  var t = i(94650),
    e = i(36895),
    a = i(80188),
    m = i(4128),
    d = i(54004);
  let M = (() => {
      class pn {
        constructor(Jt, Si) {
          this._renderer = Jt, this._elementRef = Si, this.onChange = mn => {}, this.onTouched = () => {};
        }
        setProperty(Jt, Si) {
          this._renderer.setProperty(this._elementRef.nativeElement, Jt, Si);
        }
        registerOnTouched(Jt) {
          this.onTouched = Jt;
        }
        registerOnChange(Jt) {
          this.onChange = Jt;
        }
        setDisabledState(Jt) {
          this.setProperty("disabled", Jt);
        }
      }
      return pn.ɵfac = function (Jt) {
        return new (Jt || pn)(t.Y36(t.Qsj), t.Y36(t.SBq));
      }, pn.ɵdir = t.lG2({
        type: pn
      }), pn;
    })(),
    b = (() => {
      class pn extends M {}
      return pn.ɵfac = function () {
        let sn;
        return function (Si) {
          return (sn || (sn = t.n5z(pn)))(Si || pn);
        };
      }(), pn.ɵdir = t.lG2({
        type: pn,
        features: [t.qOj]
      }), pn;
    })();
  const A = new t.OlP("NgValueAccessor"),
    O = {
      provide: A,
      useExisting: (0, t.Gpc)(() => v),
      multi: !0
    },
    C = new t.OlP("CompositionEventMode");
  let v = (() => {
    class pn extends M {
      constructor(Jt, Si, mn) {
        super(Jt, Si), this._compositionMode = mn, this._composing = !1, null == this._compositionMode && (this._compositionMode = !function L() {
          const pn = (0, e.q)() ? (0, e.q)().getUserAgent() : "";
          return /android (\d+)/.test(pn.toLowerCase());
        }());
      }
      writeValue(Jt) {
        this.setProperty("value", Jt ?? "");
      }
      _handleInput(Jt) {
        (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(Jt);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(Jt) {
        this._composing = !1, this._compositionMode && this.onChange(Jt);
      }
    }
    return pn.ɵfac = function (Jt) {
      return new (Jt || pn)(t.Y36(t.Qsj), t.Y36(t.SBq), t.Y36(C, 8));
    }, pn.ɵdir = t.lG2({
      type: pn,
      selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
      hostBindings: function (Jt, Si) {
        1 & Jt && t.NdJ("input", function (Pe) {
          return Si._handleInput(Pe.target.value);
        })("blur", function () {
          return Si.onTouched();
        })("compositionstart", function () {
          return Si._compositionStart();
        })("compositionend", function (Pe) {
          return Si._compositionEnd(Pe.target.value);
        });
      },
      features: [t._Bn([O]), t.qOj]
    }), pn;
  })();
  const f = !1;
  function E(pn) {
    return null == pn || ("string" == typeof pn || Array.isArray(pn)) && 0 === pn.length;
  }
  function h(pn) {
    return null != pn && "number" == typeof pn.length;
  }
  const x = new t.OlP("NgValidators"),
    u = new t.OlP("NgAsyncValidators"),
    T = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  class R {
    static min(sn) {
      return function B(pn) {
        return sn => {
          if (E(sn.value) || E(pn)) return null;
          const Jt = parseFloat(sn.value);
          return !isNaN(Jt) && Jt < pn ? {
            min: {
              min: pn,
              actual: sn.value
            }
          } : null;
        };
      }(sn);
    }
    static max(sn) {
      return function y(pn) {
        return sn => {
          if (E(sn.value) || E(pn)) return null;
          const Jt = parseFloat(sn.value);
          return !isNaN(Jt) && Jt > pn ? {
            max: {
              max: pn,
              actual: sn.value
            }
          } : null;
        };
      }(sn);
    }
    static required(sn) {
      return function j(pn) {
        return E(pn.value) ? {
          required: !0
        } : null;
      }(sn);
    }
    static requiredTrue(sn) {
      return function W(pn) {
        return !0 === pn.value ? null : {
          required: !0
        };
      }(sn);
    }
    static email(sn) {
      return function F(pn) {
        return E(pn.value) || T.test(pn.value) ? null : {
          email: !0
        };
      }(sn);
    }
    static minLength(sn) {
      return function Le(pn) {
        return sn => E(sn.value) || !h(sn.value) ? null : sn.value.length < pn ? {
          minlength: {
            requiredLength: pn,
            actualLength: sn.value.length
          }
        } : null;
      }(sn);
    }
    static maxLength(sn) {
      return ke(sn);
    }
    static pattern(sn) {
      return function J(pn) {
        if (!pn) return fe;
        let sn, Jt;
        return "string" == typeof pn ? (Jt = "", "^" !== pn.charAt(0) && (Jt += "^"), Jt += pn, "$" !== pn.charAt(pn.length - 1) && (Jt += "$"), sn = new RegExp(Jt)) : (Jt = pn.toString(), sn = pn), Si => {
          if (E(Si.value)) return null;
          const mn = Si.value;
          return sn.test(mn) ? null : {
            pattern: {
              requiredPattern: Jt,
              actualValue: mn
            }
          };
        };
      }(sn);
    }
    static nullValidator(sn) {
      return null;
    }
    static compose(sn) {
      return be(sn);
    }
    static composeAsync(sn) {
      return n(sn);
    }
  }
  function ke(pn) {
    return sn => h(sn.value) && sn.value.length > pn ? {
      maxlength: {
        requiredLength: pn,
        actualLength: sn.value.length
      }
    } : null;
  }
  function fe(pn) {
    return null;
  }
  function ye(pn) {
    return null != pn;
  }
  function ae(pn) {
    const sn = (0, t.QGY)(pn) ? (0, a.D)(pn) : pn;
    if (f && !(0, t.CqO)(sn)) {
      let Jt = "Expected async validator to return Promise or Observable.";
      throw "object" == typeof pn && (Jt += " Are you using a synchronous validator where an async validator is expected?"), new t.vHH(-1101, Jt);
    }
    return sn;
  }
  function Y(pn) {
    let sn = {};
    return pn.forEach(Jt => {
      sn = null != Jt ? {
        ...sn,
        ...Jt
      } : sn;
    }), 0 === Object.keys(sn).length ? null : sn;
  }
  function G(pn, sn) {
    return sn.map(Jt => Jt(pn));
  }
  function pe(pn) {
    return pn.map(sn => function te(pn) {
      return !pn.validate;
    }(sn) ? sn : Jt => sn.validate(Jt));
  }
  function be(pn) {
    if (!pn) return null;
    const sn = pn.filter(ye);
    return 0 == sn.length ? null : function (Jt) {
      return Y(G(Jt, sn));
    };
  }
  function le(pn) {
    return null != pn ? be(pe(pn)) : null;
  }
  function n(pn) {
    if (!pn) return null;
    const sn = pn.filter(ye);
    return 0 == sn.length ? null : function (Jt) {
      const Si = G(Jt, sn).map(ae);
      return (0, m.D)(Si).pipe((0, d.U)(Y));
    };
  }
  function Se(pn) {
    return null != pn ? n(pe(pn)) : null;
  }
  function qe(pn, sn) {
    return null === pn ? [sn] : Array.isArray(pn) ? [...pn, sn] : [pn, sn];
  }
  function Rt(pn) {
    return pn._rawValidators;
  }
  function We(pn) {
    return pn._rawAsyncValidators;
  }
  function Re(pn) {
    return pn ? Array.isArray(pn) ? pn : [pn] : [];
  }
  function st(pn, sn) {
    return Array.isArray(pn) ? pn.includes(sn) : pn === sn;
  }
  function q(pn, sn) {
    const Jt = Re(sn);
    return Re(pn).forEach(mn => {
      st(Jt, mn) || Jt.push(mn);
    }), Jt;
  }
  function mt(pn, sn) {
    return Re(sn).filter(Jt => !st(pn, Jt));
  }
  class ut {
    constructor() {
      this._rawValidators = [], this._rawAsyncValidators = [], this._onDestroyCallbacks = [];
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(sn) {
      this._rawValidators = sn || [], this._composedValidatorFn = le(this._rawValidators);
    }
    _setAsyncValidators(sn) {
      this._rawAsyncValidators = sn || [], this._composedAsyncValidatorFn = Se(this._rawAsyncValidators);
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(sn) {
      this._onDestroyCallbacks.push(sn);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach(sn => sn()), this._onDestroyCallbacks = [];
    }
    reset(sn) {
      this.control && this.control.reset(sn);
    }
    hasError(sn, Jt) {
      return !!this.control && this.control.hasError(sn, Jt);
    }
    getError(sn, Jt) {
      return this.control ? this.control.getError(sn, Jt) : null;
    }
  }
  class Ct extends ut {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  }
  class Ft extends ut {
    constructor() {
      super(...arguments), this._parent = null, this.name = null, this.valueAccessor = null;
    }
  }
  class Et {
    constructor(sn) {
      this._cd = sn;
    }
    get isTouched() {
      return !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return !!this._cd?.submitted;
    }
  }
  let Ke = (() => {
      class pn extends Et {
        constructor(Jt) {
          super(Jt);
        }
      }
      return pn.ɵfac = function (Jt) {
        return new (Jt || pn)(t.Y36(Ft, 2));
      }, pn.ɵdir = t.lG2({
        type: pn,
        selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
        hostVars: 14,
        hostBindings: function (Jt, Si) {
          2 & Jt && t.ekj("ng-untouched", Si.isUntouched)("ng-touched", Si.isTouched)("ng-pristine", Si.isPristine)("ng-dirty", Si.isDirty)("ng-valid", Si.isValid)("ng-invalid", Si.isInvalid)("ng-pending", Si.isPending);
        },
        features: [t.qOj]
      }), pn;
    })(),
    Ze = (() => {
      class pn extends Et {
        constructor(Jt) {
          super(Jt);
        }
      }
      return pn.ɵfac = function (Jt) {
        return new (Jt || pn)(t.Y36(Ct, 10));
      }, pn.ɵdir = t.lG2({
        type: pn,
        selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
        hostVars: 16,
        hostBindings: function (Jt, Si) {
          2 & Jt && t.ekj("ng-untouched", Si.isUntouched)("ng-touched", Si.isTouched)("ng-pristine", Si.isPristine)("ng-dirty", Si.isDirty)("ng-valid", Si.isValid)("ng-invalid", Si.isInvalid)("ng-pending", Si.isPending)("ng-submitted", Si.isSubmitted);
        },
        features: [t.qOj]
      }), pn;
    })();
  function Dt(pn, sn) {
    return pn ? `with name: '${sn}'` : `at index: ${sn}`;
  }
  const an = !1,
    li = "VALID",
    zn = "INVALID",
    $t = "PENDING",
    Mn = "DISABLED";
  function Qn(pn) {
    return (bi(pn) ? pn.validators : pn) || null;
  }
  function ui(pn, sn) {
    return (bi(sn) ? sn.asyncValidators : pn) || null;
  }
  function bi(pn) {
    return null != pn && !Array.isArray(pn) && "object" == typeof pn;
  }
  function qn(pn, sn, Jt) {
    const Si = pn.controls;
    if (!(sn ? Object.keys(Si) : Si).length) throw new t.vHH(1e3, an ? function Ht(pn) {
      return `\n    There are no form controls registered with this ${pn ? "group" : "array"} yet. If you're using ngModel,\n    you may want to check next tick (e.g. use setTimeout).\n  `;
    }(sn) : "");
    if (!Si[Jt]) throw new t.vHH(1001, an ? function Dn(pn, sn) {
      return `Cannot find form control ${Dt(pn, sn)}`;
    }(sn, Jt) : "");
  }
  function Xn(pn, sn, Jt) {
    pn._forEachChild((Si, mn) => {
      if (void 0 === Jt[mn]) throw new t.vHH(1002, an ? function vt(pn, sn) {
        return `Must supply a value for form control ${Dt(pn, sn)}`;
      }(sn, mn) : "");
    });
  }
  class Yi {
    constructor(sn, Jt) {
      this._pendingDirty = !1, this._hasOwnPendingAsyncValidator = !1, this._pendingTouched = !1, this._onCollectionChange = () => {}, this._parent = null, this.pristine = !0, this.touched = !1, this._onDisabledChange = [], this._assignValidators(sn), this._assignAsyncValidators(Jt);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(sn) {
      this._rawValidators = this._composedValidatorFn = sn;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(sn) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = sn;
    }
    get parent() {
      return this._parent;
    }
    get valid() {
      return this.status === li;
    }
    get invalid() {
      return this.status === zn;
    }
    get pending() {
      return this.status == $t;
    }
    get disabled() {
      return this.status === Mn;
    }
    get enabled() {
      return this.status !== Mn;
    }
    get dirty() {
      return !this.pristine;
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
    }
    setValidators(sn) {
      this._assignValidators(sn);
    }
    setAsyncValidators(sn) {
      this._assignAsyncValidators(sn);
    }
    addValidators(sn) {
      this.setValidators(q(sn, this._rawValidators));
    }
    addAsyncValidators(sn) {
      this.setAsyncValidators(q(sn, this._rawAsyncValidators));
    }
    removeValidators(sn) {
      this.setValidators(mt(sn, this._rawValidators));
    }
    removeAsyncValidators(sn) {
      this.setAsyncValidators(mt(sn, this._rawAsyncValidators));
    }
    hasValidator(sn) {
      return st(this._rawValidators, sn);
    }
    hasAsyncValidator(sn) {
      return st(this._rawAsyncValidators, sn);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(sn = {}) {
      this.touched = !0, this._parent && !sn.onlySelf && this._parent.markAsTouched(sn);
    }
    markAllAsTouched() {
      this.markAsTouched({
        onlySelf: !0
      }), this._forEachChild(sn => sn.markAllAsTouched());
    }
    markAsUntouched(sn = {}) {
      this.touched = !1, this._pendingTouched = !1, this._forEachChild(Jt => {
        Jt.markAsUntouched({
          onlySelf: !0
        });
      }), this._parent && !sn.onlySelf && this._parent._updateTouched(sn);
    }
    markAsDirty(sn = {}) {
      this.pristine = !1, this._parent && !sn.onlySelf && this._parent.markAsDirty(sn);
    }
    markAsPristine(sn = {}) {
      this.pristine = !0, this._pendingDirty = !1, this._forEachChild(Jt => {
        Jt.markAsPristine({
          onlySelf: !0
        });
      }), this._parent && !sn.onlySelf && this._parent._updatePristine(sn);
    }
    markAsPending(sn = {}) {
      this.status = $t, !1 !== sn.emitEvent && this.statusChanges.emit(this.status), this._parent && !sn.onlySelf && this._parent.markAsPending(sn);
    }
    disable(sn = {}) {
      const Jt = this._parentMarkedDirty(sn.onlySelf);
      this.status = Mn, this.errors = null, this._forEachChild(Si => {
        Si.disable({
          ...sn,
          onlySelf: !0
        });
      }), this._updateValue(), !1 !== sn.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors({
        ...sn,
        skipPristineCheck: Jt
      }), this._onDisabledChange.forEach(Si => Si(!0));
    }
    enable(sn = {}) {
      const Jt = this._parentMarkedDirty(sn.onlySelf);
      this.status = li, this._forEachChild(Si => {
        Si.enable({
          ...sn,
          onlySelf: !0
        });
      }), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: sn.emitEvent
      }), this._updateAncestors({
        ...sn,
        skipPristineCheck: Jt
      }), this._onDisabledChange.forEach(Si => Si(!1));
    }
    _updateAncestors(sn) {
      this._parent && !sn.onlySelf && (this._parent.updateValueAndValidity(sn), sn.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched());
    }
    setParent(sn) {
      this._parent = sn;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(sn = {}) {
      this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), (this.status === li || this.status === $t) && this._runAsyncValidator(sn.emitEvent)), !1 !== sn.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !sn.onlySelf && this._parent.updateValueAndValidity(sn);
    }
    _updateTreeValidity(sn = {
      emitEvent: !0
    }) {
      this._forEachChild(Jt => Jt._updateTreeValidity(sn)), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: sn.emitEvent
      });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? Mn : li;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(sn) {
      if (this.asyncValidator) {
        this.status = $t, this._hasOwnPendingAsyncValidator = !0;
        const Jt = ae(this.asyncValidator(this));
        this._asyncValidationSubscription = Jt.subscribe(Si => {
          this._hasOwnPendingAsyncValidator = !1, this.setErrors(Si, {
            emitEvent: sn
          });
        });
      }
    }
    _cancelExistingSubscription() {
      this._asyncValidationSubscription && (this._asyncValidationSubscription.unsubscribe(), this._hasOwnPendingAsyncValidator = !1);
    }
    setErrors(sn, Jt = {}) {
      this.errors = sn, this._updateControlsErrors(!1 !== Jt.emitEvent);
    }
    get(sn) {
      let Jt = sn;
      return null == Jt || (Array.isArray(Jt) || (Jt = Jt.split(".")), 0 === Jt.length) ? null : Jt.reduce((Si, mn) => Si && Si._find(mn), this);
    }
    getError(sn, Jt) {
      const Si = Jt ? this.get(Jt) : this;
      return Si && Si.errors ? Si.errors[sn] : null;
    }
    hasError(sn, Jt) {
      return !!this.getError(sn, Jt);
    }
    get root() {
      let sn = this;
      for (; sn._parent;) sn = sn._parent;
      return sn;
    }
    _updateControlsErrors(sn) {
      this.status = this._calculateStatus(), sn && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(sn);
    }
    _initObservables() {
      this.valueChanges = new t.vpe(), this.statusChanges = new t.vpe();
    }
    _calculateStatus() {
      return this._allControlsDisabled() ? Mn : this.errors ? zn : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus($t) ? $t : this._anyControlsHaveStatus(zn) ? zn : li;
    }
    _anyControlsHaveStatus(sn) {
      return this._anyControls(Jt => Jt.status === sn);
    }
    _anyControlsDirty() {
      return this._anyControls(sn => sn.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls(sn => sn.touched);
    }
    _updatePristine(sn = {}) {
      this.pristine = !this._anyControlsDirty(), this._parent && !sn.onlySelf && this._parent._updatePristine(sn);
    }
    _updateTouched(sn = {}) {
      this.touched = this._anyControlsTouched(), this._parent && !sn.onlySelf && this._parent._updateTouched(sn);
    }
    _registerOnCollectionChange(sn) {
      this._onCollectionChange = sn;
    }
    _setUpdateStrategy(sn) {
      bi(sn) && null != sn.updateOn && (this._updateOn = sn.updateOn);
    }
    _parentMarkedDirty(sn) {
      return !sn && !(!this._parent || !this._parent.dirty) && !this._parent._anyControlsDirty();
    }
    _find(sn) {
      return null;
    }
    _assignValidators(sn) {
      this._rawValidators = Array.isArray(sn) ? sn.slice() : sn, this._composedValidatorFn = function In(pn) {
        return Array.isArray(pn) ? le(pn) : pn || null;
      }(this._rawValidators);
    }
    _assignAsyncValidators(sn) {
      this._rawAsyncValidators = Array.isArray(sn) ? sn.slice() : sn, this._composedAsyncValidatorFn = function To(pn) {
        return Array.isArray(pn) ? Se(pn) : pn || null;
      }(this._rawAsyncValidators);
    }
  }
  class Eo extends Yi {
    constructor(sn, Jt, Si) {
      super(Qn(Jt), ui(Si, Jt)), this.controls = sn, this._initObservables(), this._setUpdateStrategy(Jt), this._setUpControls(), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator
      });
    }
    registerControl(sn, Jt) {
      return this.controls[sn] ? this.controls[sn] : (this.controls[sn] = Jt, Jt.setParent(this), Jt._registerOnCollectionChange(this._onCollectionChange), Jt);
    }
    addControl(sn, Jt, Si = {}) {
      this.registerControl(sn, Jt), this.updateValueAndValidity({
        emitEvent: Si.emitEvent
      }), this._onCollectionChange();
    }
    removeControl(sn, Jt = {}) {
      this.controls[sn] && this.controls[sn]._registerOnCollectionChange(() => {}), delete this.controls[sn], this.updateValueAndValidity({
        emitEvent: Jt.emitEvent
      }), this._onCollectionChange();
    }
    setControl(sn, Jt, Si = {}) {
      this.controls[sn] && this.controls[sn]._registerOnCollectionChange(() => {}), delete this.controls[sn], Jt && this.registerControl(sn, Jt), this.updateValueAndValidity({
        emitEvent: Si.emitEvent
      }), this._onCollectionChange();
    }
    contains(sn) {
      return this.controls.hasOwnProperty(sn) && this.controls[sn].enabled;
    }
    setValue(sn, Jt = {}) {
      Xn(this, !0, sn), Object.keys(sn).forEach(Si => {
        qn(this, !0, Si), this.controls[Si].setValue(sn[Si], {
          onlySelf: !0,
          emitEvent: Jt.emitEvent
        });
      }), this.updateValueAndValidity(Jt);
    }
    patchValue(sn, Jt = {}) {
      null != sn && (Object.keys(sn).forEach(Si => {
        const mn = this.controls[Si];
        mn && mn.patchValue(sn[Si], {
          onlySelf: !0,
          emitEvent: Jt.emitEvent
        });
      }), this.updateValueAndValidity(Jt));
    }
    reset(sn = {}, Jt = {}) {
      this._forEachChild((Si, mn) => {
        Si.reset(sn[mn], {
          onlySelf: !0,
          emitEvent: Jt.emitEvent
        });
      }), this._updatePristine(Jt), this._updateTouched(Jt), this.updateValueAndValidity(Jt);
    }
    getRawValue() {
      return this._reduceChildren({}, (sn, Jt, Si) => (sn[Si] = Jt.getRawValue(), sn));
    }
    _syncPendingControls() {
      let sn = this._reduceChildren(!1, (Jt, Si) => !!Si._syncPendingControls() || Jt);
      return sn && this.updateValueAndValidity({
        onlySelf: !0
      }), sn;
    }
    _forEachChild(sn) {
      Object.keys(this.controls).forEach(Jt => {
        const Si = this.controls[Jt];
        Si && sn(Si, Jt);
      });
    }
    _setUpControls() {
      this._forEachChild(sn => {
        sn.setParent(this), sn._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(sn) {
      for (const [Jt, Si] of Object.entries(this.controls)) if (this.contains(Jt) && sn(Si)) return !0;
      return !1;
    }
    _reduceValue() {
      return this._reduceChildren({}, (Jt, Si, mn) => ((Si.enabled || this.disabled) && (Jt[mn] = Si.value), Jt));
    }
    _reduceChildren(sn, Jt) {
      let Si = sn;
      return this._forEachChild((mn, Pe) => {
        Si = Jt(Si, mn, Pe);
      }), Si;
    }
    _allControlsDisabled() {
      for (const sn of Object.keys(this.controls)) if (this.controls[sn].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(sn) {
      return this.controls.hasOwnProperty(sn) ? this.controls[sn] : null;
    }
  }
  class Pr extends Eo {}
  const Yo = new t.OlP("CallSetDisabledState", {
      providedIn: "root",
      factory: () => wr
    }),
    wr = "always";
  function oo(pn, sn) {
    return [...sn.path, pn];
  }
  function Di(pn, sn, Jt = wr) {
    Go(pn, sn), sn.valueAccessor.writeValue(pn.value), (pn.disabled || "always" === Jt) && sn.valueAccessor.setDisabledState?.(pn.disabled), function ti(pn, sn) {
      sn.valueAccessor.registerOnChange(Jt => {
        pn._pendingValue = Jt, pn._pendingChange = !0, pn._pendingDirty = !0, "change" === pn.updateOn && Fi(pn, sn);
      });
    }(pn, sn), function Rn(pn, sn) {
      const Jt = (Si, mn) => {
        sn.valueAccessor.writeValue(Si), mn && sn.viewToModelUpdate(Si);
      };
      pn.registerOnChange(Jt), sn._registerOnDestroy(() => {
        pn._unregisterOnChange(Jt);
      });
    }(pn, sn), function fi(pn, sn) {
      sn.valueAccessor.registerOnTouched(() => {
        pn._pendingTouched = !0, "blur" === pn.updateOn && pn._pendingChange && Fi(pn, sn), "submit" !== pn.updateOn && pn.markAsTouched();
      });
    }(pn, sn), function jo(pn, sn) {
      if (sn.valueAccessor.setDisabledState) {
        const Jt = Si => {
          sn.valueAccessor.setDisabledState(Si);
        };
        pn.registerOnDisabledChange(Jt), sn._registerOnDestroy(() => {
          pn._unregisterOnDisabledChange(Jt);
        });
      }
    }(pn, sn);
  }
  function Ci(pn, sn, Jt = !0) {
    const Si = () => {};
    sn.valueAccessor && (sn.valueAccessor.registerOnChange(Si), sn.valueAccessor.registerOnTouched(Si)), ji(pn, sn), pn && (sn._invokeOnDestroyCallbacks(), pn._registerOnCollectionChange(() => {}));
  }
  function lo(pn, sn) {
    pn.forEach(Jt => {
      Jt.registerOnValidatorChange && Jt.registerOnValidatorChange(sn);
    });
  }
  function Go(pn, sn) {
    const Jt = Rt(pn);
    null !== sn.validator ? pn.setValidators(qe(Jt, sn.validator)) : "function" == typeof Jt && pn.setValidators([Jt]);
    const Si = We(pn);
    null !== sn.asyncValidator ? pn.setAsyncValidators(qe(Si, sn.asyncValidator)) : "function" == typeof Si && pn.setAsyncValidators([Si]);
    const mn = () => pn.updateValueAndValidity();
    lo(sn._rawValidators, mn), lo(sn._rawAsyncValidators, mn);
  }
  function ji(pn, sn) {
    let Jt = !1;
    if (null !== pn) {
      if (null !== sn.validator) {
        const mn = Rt(pn);
        if (Array.isArray(mn) && mn.length > 0) {
          const Pe = mn.filter(at => at !== sn.validator);
          Pe.length !== mn.length && (Jt = !0, pn.setValidators(Pe));
        }
      }
      if (null !== sn.asyncValidator) {
        const mn = We(pn);
        if (Array.isArray(mn) && mn.length > 0) {
          const Pe = mn.filter(at => at !== sn.asyncValidator);
          Pe.length !== mn.length && (Jt = !0, pn.setAsyncValidators(Pe));
        }
      }
    }
    const Si = () => {};
    return lo(sn._rawValidators, Si), lo(sn._rawAsyncValidators, Si), Jt;
  }
  function Fi(pn, sn) {
    pn._pendingDirty && pn.markAsDirty(), pn.setValue(pn._pendingValue, {
      emitModelToViewChange: !1
    }), sn.viewToModelUpdate(pn._pendingValue), pn._pendingChange = !1;
  }
  function ki(pn, sn) {
    Go(pn, sn);
  }
  function us(pn, sn) {
    if (!pn.hasOwnProperty("model")) return !1;
    const Jt = pn.model;
    return !!Jt.isFirstChange() || !Object.is(sn, Jt.currentValue);
  }
  function hs(pn, sn) {
    pn._syncPendingControls(), sn.forEach(Jt => {
      const Si = Jt.control;
      "submit" === Si.updateOn && Si._pendingChange && (Jt.viewToModelUpdate(Si._pendingValue), Si._pendingChange = !1);
    });
  }
  function oi(pn, sn) {
    if (!sn) return null;
    let Jt, Si, mn;
    return Array.isArray(sn), sn.forEach(Pe => {
      Pe.constructor === v ? Jt = Pe : function Ps(pn) {
        return Object.getPrototypeOf(pn.constructor) === b;
      }(Pe) ? Si = Pe : mn = Pe;
    }), mn || Si || Jt || null;
  }
  const Qo = {
      provide: Ct,
      useExisting: (0, t.Gpc)(() => _s)
    },
    Kr = (() => Promise.resolve())();
  let _s = (() => {
    class pn extends Ct {
      constructor(Jt, Si, mn) {
        super(), this.callSetDisabledState = mn, this.submitted = !1, this._directives = new Set(), this.ngSubmit = new t.vpe(), this.form = new Eo({}, le(Jt), Se(Si));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(Jt) {
        Kr.then(() => {
          const Si = this._findContainer(Jt.path);
          Jt.control = Si.registerControl(Jt.name, Jt.control), Di(Jt.control, Jt, this.callSetDisabledState), Jt.control.updateValueAndValidity({
            emitEvent: !1
          }), this._directives.add(Jt);
        });
      }
      getControl(Jt) {
        return this.form.get(Jt.path);
      }
      removeControl(Jt) {
        Kr.then(() => {
          const Si = this._findContainer(Jt.path);
          Si && Si.removeControl(Jt.name), this._directives.delete(Jt);
        });
      }
      addFormGroup(Jt) {
        Kr.then(() => {
          const Si = this._findContainer(Jt.path),
            mn = new Eo({});
          ki(mn, Jt), Si.registerControl(Jt.name, mn), mn.updateValueAndValidity({
            emitEvent: !1
          });
        });
      }
      removeFormGroup(Jt) {
        Kr.then(() => {
          const Si = this._findContainer(Jt.path);
          Si && Si.removeControl(Jt.name);
        });
      }
      getFormGroup(Jt) {
        return this.form.get(Jt.path);
      }
      updateModel(Jt, Si) {
        Kr.then(() => {
          this.form.get(Jt.path).setValue(Si);
        });
      }
      setValue(Jt) {
        this.control.setValue(Jt);
      }
      onSubmit(Jt) {
        return this.submitted = !0, hs(this.form, this._directives), this.ngSubmit.emit(Jt), "dialog" === Jt?.target?.method;
      }
      onReset() {
        this.resetForm();
      }
      resetForm(Jt) {
        this.form.reset(Jt), this.submitted = !1;
      }
      _setUpdateStrategy() {
        this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(Jt) {
        return Jt.pop(), Jt.length ? this.form.get(Jt) : this.form;
      }
    }
    return pn.ɵfac = function (Jt) {
      return new (Jt || pn)(t.Y36(x, 10), t.Y36(u, 10), t.Y36(Yo, 8));
    }, pn.ɵdir = t.lG2({
      type: pn,
      selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
      hostBindings: function (Jt, Si) {
        1 & Jt && t.NdJ("submit", function (Pe) {
          return Si.onSubmit(Pe);
        })("reset", function () {
          return Si.onReset();
        });
      },
      inputs: {
        options: ["ngFormOptions", "options"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [t._Bn([Qo]), t.qOj]
    }), pn;
  })();
  function ra(pn, sn) {
    const Jt = pn.indexOf(sn);
    Jt > -1 && pn.splice(Jt, 1);
  }
  function Or(pn) {
    return "object" == typeof pn && null !== pn && 2 === Object.keys(pn).length && "value" in pn && "disabled" in pn;
  }
  const Fs = class extends Yi {
    constructor(sn = null, Jt, Si) {
      super(Qn(Jt), ui(Si, Jt)), this.defaultValue = null, this._onChange = [], this._pendingChange = !1, this._applyFormState(sn), this._setUpdateStrategy(Jt), this._initObservables(), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator
      }), bi(Jt) && (Jt.nonNullable || Jt.initialValueIsDefault) && (this.defaultValue = Or(sn) ? sn.value : sn);
    }
    setValue(sn, Jt = {}) {
      this.value = this._pendingValue = sn, this._onChange.length && !1 !== Jt.emitModelToViewChange && this._onChange.forEach(Si => Si(this.value, !1 !== Jt.emitViewToModelChange)), this.updateValueAndValidity(Jt);
    }
    patchValue(sn, Jt = {}) {
      this.setValue(sn, Jt);
    }
    reset(sn = this.defaultValue, Jt = {}) {
      this._applyFormState(sn), this.markAsPristine(Jt), this.markAsUntouched(Jt), this.setValue(this.value, Jt), this._pendingChange = !1;
    }
    _updateValue() {}
    _anyControls(sn) {
      return !1;
    }
    _allControlsDisabled() {
      return this.disabled;
    }
    registerOnChange(sn) {
      this._onChange.push(sn);
    }
    _unregisterOnChange(sn) {
      ra(this._onChange, sn);
    }
    registerOnDisabledChange(sn) {
      this._onDisabledChange.push(sn);
    }
    _unregisterOnDisabledChange(sn) {
      ra(this._onDisabledChange, sn);
    }
    _forEachChild(sn) {}
    _syncPendingControls() {
      return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, {
        onlySelf: !0,
        emitModelToViewChange: !1
      }), 0));
    }
    _applyFormState(sn) {
      Or(sn) ? (this.value = this._pendingValue = sn.value, sn.disabled ? this.disable({
        onlySelf: !0,
        emitEvent: !1
      }) : this.enable({
        onlySelf: !0,
        emitEvent: !1
      })) : this.value = this._pendingValue = sn;
    }
  };
  let Js = (() => {
    class pn extends Ct {
      ngOnInit() {
        this._checkParentType(), this.formDirective.addFormGroup(this);
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeFormGroup(this);
      }
      get control() {
        return this.formDirective.getFormGroup(this);
      }
      get path() {
        return oo(null == this.name ? this.name : this.name.toString(), this._parent);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      _checkParentType() {}
    }
    return pn.ɵfac = function () {
      let sn;
      return function (Si) {
        return (sn || (sn = t.n5z(pn)))(Si || pn);
      };
    }(), pn.ɵdir = t.lG2({
      type: pn,
      features: [t.qOj]
    }), pn;
  })();
  const tn = {
      provide: Ft,
      useExisting: (0, t.Gpc)(() => Gn)
    },
    di = (() => Promise.resolve())();
  let Gn = (() => {
      class pn extends Ft {
        constructor(Jt, Si, mn, Pe, at, Zt) {
          super(), this._changeDetectorRef = at, this.callSetDisabledState = Zt, this.control = new Fs(), this._registered = !1, this.update = new t.vpe(), this._parent = Jt, this._setValidators(Si), this._setAsyncValidators(mn), this.valueAccessor = oi(0, Pe);
        }
        ngOnChanges(Jt) {
          if (this._checkForErrors(), !this._registered || "name" in Jt) {
            if (this._registered && (this._checkName(), this.formDirective)) {
              const Si = Jt.name.previousValue;
              this.formDirective.removeControl({
                name: Si,
                path: this._getPath(Si)
              });
            }
            this._setUpControl();
          }
          "isDisabled" in Jt && this._updateDisabled(Jt), us(Jt, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model);
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeControl(this);
        }
        get path() {
          return this._getPath(this.name);
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        viewToModelUpdate(Jt) {
          this.viewModel = Jt, this.update.emit(Jt);
        }
        _setUpControl() {
          this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0;
        }
        _setUpdateStrategy() {
          this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn);
        }
        _isStandalone() {
          return !this._parent || !(!this.options || !this.options.standalone);
        }
        _setUpStandalone() {
          Di(this.control, this, this.callSetDisabledState), this.control.updateValueAndValidity({
            emitEvent: !1
          });
        }
        _checkForErrors() {
          this._isStandalone() || this._checkParentType(), this._checkName();
        }
        _checkParentType() {}
        _checkName() {
          this.options && this.options.name && (this.name = this.options.name), this._isStandalone();
        }
        _updateValue(Jt) {
          di.then(() => {
            this.control.setValue(Jt, {
              emitViewToModelChange: !1
            }), this._changeDetectorRef?.markForCheck();
          });
        }
        _updateDisabled(Jt) {
          const Si = Jt.isDisabled.currentValue,
            mn = 0 !== Si && (0, t.D6c)(Si);
          di.then(() => {
            mn && !this.control.disabled ? this.control.disable() : !mn && this.control.disabled && this.control.enable(), this._changeDetectorRef?.markForCheck();
          });
        }
        _getPath(Jt) {
          return this._parent ? oo(Jt, this._parent) : [Jt];
        }
      }
      return pn.ɵfac = function (Jt) {
        return new (Jt || pn)(t.Y36(Ct, 9), t.Y36(x, 10), t.Y36(u, 10), t.Y36(A, 10), t.Y36(t.sBO, 8), t.Y36(Yo, 8));
      }, pn.ɵdir = t.lG2({
        type: pn,
        selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
        inputs: {
          name: "name",
          isDisabled: ["disabled", "isDisabled"],
          model: ["ngModel", "model"],
          options: ["ngModelOptions", "options"]
        },
        outputs: {
          update: "ngModelChange"
        },
        exportAs: ["ngModel"],
        features: [t._Bn([tn]), t.qOj, t.TTD]
      }), pn;
    })(),
    dn = (() => {
      class pn {}
      return pn.ɵfac = function (Jt) {
        return new (Jt || pn)();
      }, pn.ɵdir = t.lG2({
        type: pn,
        selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
        hostAttrs: ["novalidate", ""]
      }), pn;
    })();
  const _r = {
    provide: A,
    useExisting: (0, t.Gpc)(() => ws),
    multi: !0
  };
  let Ts = (() => {
      class pn {}
      return pn.ɵfac = function (Jt) {
        return new (Jt || pn)();
      }, pn.ɵmod = t.oAB({
        type: pn
      }), pn.ɵinj = t.cJS({}), pn;
    })(),
    js = (() => {
      class pn {
        constructor() {
          this._accessors = [];
        }
        add(Jt, Si) {
          this._accessors.push([Jt, Si]);
        }
        remove(Jt) {
          for (let Si = this._accessors.length - 1; Si >= 0; --Si) if (this._accessors[Si][1] === Jt) return void this._accessors.splice(Si, 1);
        }
        select(Jt) {
          this._accessors.forEach(Si => {
            this._isSameGroup(Si, Jt) && Si[1] !== Jt && Si[1].fireUncheck(Jt.value);
          });
        }
        _isSameGroup(Jt, Si) {
          return !!Jt[0].control && Jt[0]._parent === Si._control._parent && Jt[1].name === Si.name;
        }
      }
      return pn.ɵfac = function (Jt) {
        return new (Jt || pn)();
      }, pn.ɵprov = t.Yz7({
        token: pn,
        factory: pn.ɵfac,
        providedIn: Ts
      }), pn;
    })(),
    ws = (() => {
      class pn extends b {
        constructor(Jt, Si, mn, Pe) {
          super(Jt, Si), this._registry = mn, this._injector = Pe, this.setDisabledStateFired = !1, this.onChange = () => {}, this.callSetDisabledState = (0, t.f3M)(Yo, {
            optional: !0
          }) ?? wr;
        }
        ngOnInit() {
          this._control = this._injector.get(Ft), this._checkName(), this._registry.add(this._control, this);
        }
        ngOnDestroy() {
          this._registry.remove(this);
        }
        writeValue(Jt) {
          this._state = Jt === this.value, this.setProperty("checked", this._state);
        }
        registerOnChange(Jt) {
          this._fn = Jt, this.onChange = () => {
            Jt(this.value), this._registry.select(this);
          };
        }
        setDisabledState(Jt) {
          (this.setDisabledStateFired || Jt || "whenDisabledForLegacyCode" === this.callSetDisabledState) && this.setProperty("disabled", Jt), this.setDisabledStateFired = !0;
        }
        fireUncheck(Jt) {
          this.writeValue(Jt);
        }
        _checkName() {
          !this.name && this.formControlName && (this.name = this.formControlName);
        }
      }
      return pn.ɵfac = function (Jt) {
        return new (Jt || pn)(t.Y36(t.Qsj), t.Y36(t.SBq), t.Y36(js), t.Y36(t.zs3));
      }, pn.ɵdir = t.lG2({
        type: pn,
        selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
        hostBindings: function (Jt, Si) {
          1 & Jt && t.NdJ("change", function () {
            return Si.onChange();
          })("blur", function () {
            return Si.onTouched();
          });
        },
        inputs: {
          name: "name",
          formControlName: "formControlName",
          value: "value"
        },
        features: [t._Bn([_r]), t.qOj]
      }), pn;
    })();
  const sa = new t.OlP("NgModelWithFormControlWarning"),
    ha = {
      provide: Ft,
      useExisting: (0, t.Gpc)(() => ua)
    };
  let ua = (() => {
    class pn extends Ft {
      set isDisabled(Jt) {}
      constructor(Jt, Si, mn, Pe, at) {
        super(), this._ngModelWarningConfig = Pe, this.callSetDisabledState = at, this.update = new t.vpe(), this._ngModelWarningSent = !1, this._setValidators(Jt), this._setAsyncValidators(Si), this.valueAccessor = oi(0, mn);
      }
      ngOnChanges(Jt) {
        if (this._isControlChanged(Jt)) {
          const Si = Jt.form.previousValue;
          Si && Ci(Si, this, !1), Di(this.form, this, this.callSetDisabledState), this.form.updateValueAndValidity({
            emitEvent: !1
          });
        }
        us(Jt, this.viewModel) && (this.form.setValue(this.model), this.viewModel = this.model);
      }
      ngOnDestroy() {
        this.form && Ci(this.form, this, !1);
      }
      get path() {
        return [];
      }
      get control() {
        return this.form;
      }
      viewToModelUpdate(Jt) {
        this.viewModel = Jt, this.update.emit(Jt);
      }
      _isControlChanged(Jt) {
        return Jt.hasOwnProperty("form");
      }
    }
    return pn._ngModelWarningSentOnce = !1, pn.ɵfac = function (Jt) {
      return new (Jt || pn)(t.Y36(x, 10), t.Y36(u, 10), t.Y36(A, 10), t.Y36(sa, 8), t.Y36(Yo, 8));
    }, pn.ɵdir = t.lG2({
      type: pn,
      selectors: [["", "formControl", ""]],
      inputs: {
        form: ["formControl", "form"],
        isDisabled: ["disabled", "isDisabled"],
        model: ["ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngForm"],
      features: [t._Bn([ha]), t.qOj, t.TTD]
    }), pn;
  })();
  const da = {
    provide: Ct,
    useExisting: (0, t.Gpc)(() => na)
  };
  let na = (() => {
    class pn extends Ct {
      constructor(Jt, Si, mn) {
        super(), this.callSetDisabledState = mn, this.submitted = !1, this._onCollectionChange = () => this._updateDomValue(), this.directives = [], this.form = null, this.ngSubmit = new t.vpe(), this._setValidators(Jt), this._setAsyncValidators(Si);
      }
      ngOnChanges(Jt) {
        this._checkFormPresent(), Jt.hasOwnProperty("form") && (this._updateValidators(), this._updateDomValue(), this._updateRegistrations(), this._oldForm = this.form);
      }
      ngOnDestroy() {
        this.form && (ji(this.form, this), this.form._onCollectionChange === this._onCollectionChange && this.form._registerOnCollectionChange(() => {}));
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      addControl(Jt) {
        const Si = this.form.get(Jt.path);
        return Di(Si, Jt, this.callSetDisabledState), Si.updateValueAndValidity({
          emitEvent: !1
        }), this.directives.push(Jt), Si;
      }
      getControl(Jt) {
        return this.form.get(Jt.path);
      }
      removeControl(Jt) {
        Ci(Jt.control || null, Jt, !1), function yo(pn, sn) {
          const Jt = pn.indexOf(sn);
          Jt > -1 && pn.splice(Jt, 1);
        }(this.directives, Jt);
      }
      addFormGroup(Jt) {
        this._setUpFormContainer(Jt);
      }
      removeFormGroup(Jt) {
        this._cleanUpFormContainer(Jt);
      }
      getFormGroup(Jt) {
        return this.form.get(Jt.path);
      }
      addFormArray(Jt) {
        this._setUpFormContainer(Jt);
      }
      removeFormArray(Jt) {
        this._cleanUpFormContainer(Jt);
      }
      getFormArray(Jt) {
        return this.form.get(Jt.path);
      }
      updateModel(Jt, Si) {
        this.form.get(Jt.path).setValue(Si);
      }
      onSubmit(Jt) {
        return this.submitted = !0, hs(this.form, this.directives), this.ngSubmit.emit(Jt), "dialog" === Jt?.target?.method;
      }
      onReset() {
        this.resetForm();
      }
      resetForm(Jt) {
        this.form.reset(Jt), this.submitted = !1;
      }
      _updateDomValue() {
        this.directives.forEach(Jt => {
          const Si = Jt.control,
            mn = this.form.get(Jt.path);
          Si !== mn && (Ci(Si || null, Jt), (pn => pn instanceof Fs)(mn) && (Di(mn, Jt, this.callSetDisabledState), Jt.control = mn));
        }), this.form._updateTreeValidity({
          emitEvent: !1
        });
      }
      _setUpFormContainer(Jt) {
        const Si = this.form.get(Jt.path);
        ki(Si, Jt), Si.updateValueAndValidity({
          emitEvent: !1
        });
      }
      _cleanUpFormContainer(Jt) {
        if (this.form) {
          const Si = this.form.get(Jt.path);
          Si && function Ei(pn, sn) {
            return ji(pn, sn);
          }(Si, Jt) && Si.updateValueAndValidity({
            emitEvent: !1
          });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange), this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        Go(this.form, this), this._oldForm && ji(this._oldForm, this);
      }
      _checkFormPresent() {}
    }
    return pn.ɵfac = function (Jt) {
      return new (Jt || pn)(t.Y36(x, 10), t.Y36(u, 10), t.Y36(Yo, 8));
    }, pn.ɵdir = t.lG2({
      type: pn,
      selectors: [["", "formGroup", ""]],
      hostBindings: function (Jt, Si) {
        1 & Jt && t.NdJ("submit", function (Pe) {
          return Si.onSubmit(Pe);
        })("reset", function () {
          return Si.onReset();
        });
      },
      inputs: {
        form: ["formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [t._Bn([da]), t.qOj, t.TTD]
    }), pn;
  })();
  const Qs = {
    provide: Ct,
    useExisting: (0, t.Gpc)(() => ma)
  };
  let ma = (() => {
    class pn extends Js {
      constructor(Jt, Si, mn) {
        super(), this._parent = Jt, this._setValidators(Si), this._setAsyncValidators(mn);
      }
      _checkParentType() {
        Va(this._parent);
      }
    }
    return pn.ɵfac = function (Jt) {
      return new (Jt || pn)(t.Y36(Ct, 13), t.Y36(x, 10), t.Y36(u, 10));
    }, pn.ɵdir = t.lG2({
      type: pn,
      selectors: [["", "formGroupName", ""]],
      inputs: {
        name: ["formGroupName", "name"]
      },
      features: [t._Bn([Qs]), t.qOj]
    }), pn;
  })();
  const Xs = {
    provide: Ct,
    useExisting: (0, t.Gpc)(() => Ks)
  };
  let Ks = (() => {
    class pn extends Ct {
      constructor(Jt, Si, mn) {
        super(), this._parent = Jt, this._setValidators(Si), this._setAsyncValidators(mn);
      }
      ngOnInit() {
        this._checkParentType(), this.formDirective.addFormArray(this);
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeFormArray(this);
      }
      get control() {
        return this.formDirective.getFormArray(this);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      get path() {
        return oo(null == this.name ? this.name : this.name.toString(), this._parent);
      }
      _checkParentType() {
        Va(this._parent);
      }
    }
    return pn.ɵfac = function (Jt) {
      return new (Jt || pn)(t.Y36(Ct, 13), t.Y36(x, 10), t.Y36(u, 10));
    }, pn.ɵdir = t.lG2({
      type: pn,
      selectors: [["", "formArrayName", ""]],
      inputs: {
        name: ["formArrayName", "name"]
      },
      features: [t._Bn([Xs]), t.qOj]
    }), pn;
  })();
  function Va(pn) {
    return !(pn instanceof ma || pn instanceof na || pn instanceof Ks);
  }
  const ba = {
    provide: Ft,
    useExisting: (0, t.Gpc)(() => qs)
  };
  let qs = (() => {
    class pn extends Ft {
      set isDisabled(Jt) {}
      constructor(Jt, Si, mn, Pe, at) {
        super(), this._ngModelWarningConfig = at, this._added = !1, this.update = new t.vpe(), this._ngModelWarningSent = !1, this._parent = Jt, this._setValidators(Si), this._setAsyncValidators(mn), this.valueAccessor = oi(0, Pe);
      }
      ngOnChanges(Jt) {
        this._added || this._setUpControl(), us(Jt, this.viewModel) && (this.viewModel = this.model, this.formDirective.updateModel(this, this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      viewToModelUpdate(Jt) {
        this.viewModel = Jt, this.update.emit(Jt);
      }
      get path() {
        return oo(null == this.name ? this.name : this.name.toString(), this._parent);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      _checkParentType() {}
      _setUpControl() {
        this._checkParentType(), this.control = this.formDirective.addControl(this), this._added = !0;
      }
    }
    return pn._ngModelWarningSentOnce = !1, pn.ɵfac = function (Jt) {
      return new (Jt || pn)(t.Y36(Ct, 13), t.Y36(x, 10), t.Y36(u, 10), t.Y36(A, 10), t.Y36(sa, 8));
    }, pn.ɵdir = t.lG2({
      type: pn,
      selectors: [["", "formControlName", ""]],
      inputs: {
        name: ["formControlName", "name"],
        isDisabled: ["disabled", "isDisabled"],
        model: ["ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [t._Bn([ba]), t.qOj, t.TTD]
    }), pn;
  })();
  let No = (() => {
    class pn {
      constructor() {
        this._validator = fe;
      }
      ngOnChanges(Jt) {
        if (this.inputName in Jt) {
          const Si = this.normalizeInput(Jt[this.inputName].currentValue);
          this._enabled = this.enabled(Si), this._validator = this._enabled ? this.createValidator(Si) : fe, this._onChange && this._onChange();
        }
      }
      validate(Jt) {
        return this._validator(Jt);
      }
      registerOnValidatorChange(Jt) {
        this._onChange = Jt;
      }
      enabled(Jt) {
        return null != Jt;
      }
    }
    return pn.ɵfac = function (Jt) {
      return new (Jt || pn)();
    }, pn.ɵdir = t.lG2({
      type: pn,
      features: [t.TTD]
    }), pn;
  })();
  const vr = {
    provide: x,
    useExisting: (0, t.Gpc)(() => zr),
    multi: !0
  };
  let zr = (() => {
      class pn extends No {
        constructor() {
          super(...arguments), this.inputName = "maxlength", this.normalizeInput = Jt => function pi(pn) {
            return "number" == typeof pn ? pn : parseInt(pn, 10);
          }(Jt), this.createValidator = Jt => ke(Jt);
        }
      }
      return pn.ɵfac = function () {
        let sn;
        return function (Si) {
          return (sn || (sn = t.n5z(pn)))(Si || pn);
        };
      }(), pn.ɵdir = t.lG2({
        type: pn,
        selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function (Jt, Si) {
          2 & Jt && t.uIk("maxlength", Si._enabled ? Si.maxlength : null);
        },
        inputs: {
          maxlength: "maxlength"
        },
        features: [t._Bn([vr]), t.qOj]
      }), pn;
    })(),
    Ln = (() => {
      class pn {}
      return pn.ɵfac = function (Jt) {
        return new (Jt || pn)();
      }, pn.ɵmod = t.oAB({
        type: pn
      }), pn.ɵinj = t.cJS({
        imports: [Ts]
      }), pn;
    })();
  class en extends Yi {
    constructor(sn, Jt, Si) {
      super(Qn(Jt), ui(Si, Jt)), this.controls = sn, this._initObservables(), this._setUpdateStrategy(Jt), this._setUpControls(), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator
      });
    }
    at(sn) {
      return this.controls[this._adjustIndex(sn)];
    }
    push(sn, Jt = {}) {
      this.controls.push(sn), this._registerControl(sn), this.updateValueAndValidity({
        emitEvent: Jt.emitEvent
      }), this._onCollectionChange();
    }
    insert(sn, Jt, Si = {}) {
      this.controls.splice(sn, 0, Jt), this._registerControl(Jt), this.updateValueAndValidity({
        emitEvent: Si.emitEvent
      });
    }
    removeAt(sn, Jt = {}) {
      let Si = this._adjustIndex(sn);
      Si < 0 && (Si = 0), this.controls[Si] && this.controls[Si]._registerOnCollectionChange(() => {}), this.controls.splice(Si, 1), this.updateValueAndValidity({
        emitEvent: Jt.emitEvent
      });
    }
    setControl(sn, Jt, Si = {}) {
      let mn = this._adjustIndex(sn);
      mn < 0 && (mn = 0), this.controls[mn] && this.controls[mn]._registerOnCollectionChange(() => {}), this.controls.splice(mn, 1), Jt && (this.controls.splice(mn, 0, Jt), this._registerControl(Jt)), this.updateValueAndValidity({
        emitEvent: Si.emitEvent
      }), this._onCollectionChange();
    }
    get length() {
      return this.controls.length;
    }
    setValue(sn, Jt = {}) {
      Xn(this, !1, sn), sn.forEach((Si, mn) => {
        qn(this, !1, mn), this.at(mn).setValue(Si, {
          onlySelf: !0,
          emitEvent: Jt.emitEvent
        });
      }), this.updateValueAndValidity(Jt);
    }
    patchValue(sn, Jt = {}) {
      null != sn && (sn.forEach((Si, mn) => {
        this.at(mn) && this.at(mn).patchValue(Si, {
          onlySelf: !0,
          emitEvent: Jt.emitEvent
        });
      }), this.updateValueAndValidity(Jt));
    }
    reset(sn = [], Jt = {}) {
      this._forEachChild((Si, mn) => {
        Si.reset(sn[mn], {
          onlySelf: !0,
          emitEvent: Jt.emitEvent
        });
      }), this._updatePristine(Jt), this._updateTouched(Jt), this.updateValueAndValidity(Jt);
    }
    getRawValue() {
      return this.controls.map(sn => sn.getRawValue());
    }
    clear(sn = {}) {
      this.controls.length < 1 || (this._forEachChild(Jt => Jt._registerOnCollectionChange(() => {})), this.controls.splice(0), this.updateValueAndValidity({
        emitEvent: sn.emitEvent
      }));
    }
    _adjustIndex(sn) {
      return sn < 0 ? sn + this.length : sn;
    }
    _syncPendingControls() {
      let sn = this.controls.reduce((Jt, Si) => !!Si._syncPendingControls() || Jt, !1);
      return sn && this.updateValueAndValidity({
        onlySelf: !0
      }), sn;
    }
    _forEachChild(sn) {
      this.controls.forEach((Jt, Si) => {
        sn(Jt, Si);
      });
    }
    _updateValue() {
      this.value = this.controls.filter(sn => sn.enabled || this.disabled).map(sn => sn.value);
    }
    _anyControls(sn) {
      return this.controls.some(Jt => Jt.enabled && sn(Jt));
    }
    _setUpControls() {
      this._forEachChild(sn => this._registerControl(sn));
    }
    _allControlsDisabled() {
      for (const sn of this.controls) if (sn.enabled) return !1;
      return this.controls.length > 0 || this.disabled;
    }
    _registerControl(sn) {
      sn.setParent(this), sn._registerOnCollectionChange(this._onCollectionChange);
    }
    _find(sn) {
      return this.at(sn) ?? null;
    }
  }
  function cr(pn) {
    return !!pn && (void 0 !== pn.asyncValidators || void 0 !== pn.validators || void 0 !== pn.updateOn);
  }
  let jr = (() => {
      class pn {
        constructor() {
          this.useNonNullable = !1;
        }
        get nonNullable() {
          const Jt = new pn();
          return Jt.useNonNullable = !0, Jt;
        }
        group(Jt, Si = null) {
          const mn = this._reduceControls(Jt);
          let Pe = {};
          return cr(Si) ? Pe = Si : null !== Si && (Pe.validators = Si.validator, Pe.asyncValidators = Si.asyncValidator), new Eo(mn, Pe);
        }
        record(Jt, Si = null) {
          const mn = this._reduceControls(Jt);
          return new Pr(mn, Si);
        }
        control(Jt, Si, mn) {
          let Pe = {};
          return this.useNonNullable ? (cr(Si) ? Pe = Si : (Pe.validators = Si, Pe.asyncValidators = mn), new Fs(Jt, {
            ...Pe,
            nonNullable: !0
          })) : new Fs(Jt, Si, mn);
        }
        array(Jt, Si, mn) {
          const Pe = Jt.map(at => this._createControl(at));
          return new en(Pe, Si, mn);
        }
        _reduceControls(Jt) {
          const Si = {};
          return Object.keys(Jt).forEach(mn => {
            Si[mn] = this._createControl(Jt[mn]);
          }), Si;
        }
        _createControl(Jt) {
          return Jt instanceof Fs || Jt instanceof Yi ? Jt : Array.isArray(Jt) ? this.control(Jt[0], Jt.length > 1 ? Jt[1] : null, Jt.length > 2 ? Jt[2] : null) : this.control(Jt);
        }
      }
      return pn.ɵfac = function (Jt) {
        return new (Jt || pn)();
      }, pn.ɵprov = t.Yz7({
        token: pn,
        factory: pn.ɵfac,
        providedIn: "root"
      }), pn;
    })(),
    As = (() => {
      class pn {
        static withConfig(Jt) {
          return {
            ngModule: pn,
            providers: [{
              provide: Yo,
              useValue: Jt.callSetDisabledState ?? wr
            }]
          };
        }
      }
      return pn.ɵfac = function (Jt) {
        return new (Jt || pn)();
      }, pn.ɵmod = t.oAB({
        type: pn
      }), pn.ɵinj = t.cJS({
        imports: [Ln]
      }), pn;
    })(),
    dl = (() => {
      class pn {
        static withConfig(Jt) {
          return {
            ngModule: pn,
            providers: [{
              provide: sa,
              useValue: Jt.warnOnNgModelWithFormControl ?? "always"
            }, {
              provide: Yo,
              useValue: Jt.callSetDisabledState ?? wr
            }]
          };
        }
      }
      return pn.ɵfac = function (Jt) {
        return new (Jt || pn)();
      }, pn.ɵmod = t.oAB({
        type: pn
      }), pn.ɵinj = t.cJS({
        imports: [Ln]
      }), pn;
    })();
});
