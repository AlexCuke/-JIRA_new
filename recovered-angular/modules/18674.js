// Extracted from main; webpack module 18674. Factory, not an ES module.
((Ae, V, i) => {
  var qe;
  i.d(V, {
    k: () => n
  });
  var t = i(94650),
    e = i(44688),
    a = i(91854),
    m = i(84445),
    d = i(18505),
    M = i(95698),
    b = i(39646),
    A = i(63900),
    N = i(82805),
    I = i(54004),
    O = i(70262),
    L = i(62843),
    C = i(27854),
    v = i(97312);
  function f(Re) {
    if (!Re || "object" != typeof Re) return null;
    const st = Re,
      q = `${st.entityId ?? ""}`.trim();
    if (q) return q;
    const mt = st.data;
    if (mt && "object" == typeof mt) {
      const Ft = `${mt.entityId ?? ""}`.trim();
      if (Ft) return Ft;
    }
    return `${(0, v.gS)(Re)?.labReferral?.referralId ?? ""}`.trim() || null;
  }
  function h(Re) {
    return null == Re ? null : `${Re}`.trim() || null;
  }
  function x(Re, st, q) {
    const mt = `${st ?? ""}`.trim(),
      ut = h(q);
    mt && ut && Re.set(mt, ut);
  }
  function u(Re) {
    const st = new Map();
    if (null == Re) return st;
    if ("string" == typeof Re) {
      const q = Re.trim();
      if (!q || "null" === q || "[]" === q || "{}" === q) return st;
      try {
        return u(JSON.parse(q));
      } catch {
        return st;
      }
    }
    if (Array.isArray(Re)) {
      for (const q of Re) {
        if ("object" != typeof q || null === q) continue;
        const mt = q,
          ut = mt.probeNumber ?? mt.probe;
        x(st, mt.entityId, ut), x(st, mt.referralId, ut), x(st, mt.id, ut);
      }
      return st;
    }
    if ("object" == typeof Re) {
      const q = Re,
        mt = q.referrals ?? q.items ?? q.result ?? q.data;
      void 0 !== mt && mt !== Re && u(mt).forEach((Ct, Ft) => st.set(Ft, Ct));
      for (const [ut, Ct] of Object.entries(q)) if ("object" == typeof Ct && null !== Ct) {
        const Ft = Ct;
        ("probeNumber" in Ft || "probe" in Ft) && (x(st, ut, Ft.probeNumber ?? Ft.probe), x(st, Ft.entityId, Ft.probeNumber ?? Ft.probe), x(st, Ft.referralId, Ft.probeNumber ?? Ft.probe));
      } else {
        const Ft = h(Ct);
        Ft && st.set(ut, Ft);
      }
    }
    return st;
  }
  function T(Re, st) {
    const q = u(st);
    return Re.map(mt => {
      const ut = f(mt),
        Ct = (0, v.gS)(mt)?.labReferral?.referralId,
        Ft = ut && q.get(ut) || Ct && q.get(Ct) || mt.labReferral?.probeNumber;
      return Ft && Ft !== mt.labReferral?.probeNumber ? {
        ...mt,
        labReferral: {
          ...mt.labReferral,
          probeNumber: Ft
        }
      } : mt;
    });
  }
  var R = i(97582),
    B = i(36895),
    y = i(32486),
    j = i(9073),
    W = i(93278),
    F = i(19550),
    Le = i(3977),
    ke = i(50494),
    J = i(5264),
    fe = i(97513),
    ye = i(9929);
  const Se = class {
    constructor() {
      this.printFormService = (0, t.f3M)(ye.zH), this.messages = (0, t.f3M)(a.Jv);
    }
    printBarCode(st) {
      return this.printFormService.renderPrintFormCommand("biomaterial_barcode", {
        context: st
      }).pipe((0, M.q)(1), (0, d.b)(q => {
        const mt = new Blob([q], {
            type: "application/pdf"
          }),
          ut = URL.createObjectURL(mt);
        window.open(ut, "_blank");
      }), (0, I.U)(() => !0), (0, O.K)(() => (this.messages.error("Ошибка печати. Попробуйте позже"), (0, b.of)(!1))));
    }
  };
  let ae = Se;
  Se.ɵfac = function (q) {
    return new (q || Se)();
  }, Se.ɵprov = t.Yz7({
    token: Se,
    factory: Se.ɵfac,
    providedIn: "root"
  });
  var Y = i(44348);
  function G(Re, st) {
    if (1 & Re && (t.TgZ(0, "div", 11), t._UZ(1, "ngx-barcode6", 12), t.qZA()), 2 & Re) {
      const q = t.oxw();
      t.xp6(1), t.Q6J("bc-format", "CODE128")("bc-value", q.probeNumberForBarcode)("bc-width", 2)("bc-height", 80)("bc-display-value", !1);
    }
  }
  function te(Re, st) {
    1 & Re && (t.TgZ(0, "div", 13)(1, "span", 14), t._uU(2, "Номер пробы не найден!"), t.qZA()());
  }
  let pe = ((qe = class {
    constructor(st, q) {
      this.modalRef = st, this.data = q, this.isPrinting = !1, this.biomaterialPrintService = (0, t.f3M)(ae), this.messages = (0, t.f3M)(a.Jv), this.indexData = (0, ke.yE)(fe.d, q);
    }
    get probeNumberForBarcode() {
      return `${this.indexData?.labReferral?.probeNumber ?? ""}`.trim();
    }
    printLabel() {
      const st = (this.indexData?.labReferral?.careCaseId ?? this.indexData?.combinedCareCase?.careCaseId ?? "").trim(),
        q = `${this.indexData?.labReferral?.referralId ?? ""}`.trim();
      st && q ? (this.isPrinting = !0, this.biomaterialPrintService.printBarCode({
        careCaseId: st,
        referralId: [q]
      }).pipe((0, J.t)(this)).subscribe(mt => {
        this.isPrinting = !1, mt && this.modalRef.close(!0);
      })) : this.messages.error("Не удалось распечатать этикетку: нет referralId или обращения");
    }
  }).ɵfac = function (q) {
    return new (q || qe)(t.Y36(Y.Rn), t.Y36(Le.UM));
  }, qe.ɵcmp = t.Xpm({
    type: qe,
    selectors: [["lra-print-named-sticker-modal"]],
    standalone: !0,
    features: [t.jDz],
    decls: 20,
    vars: 8,
    consts: [[1, "print-sticker"], [1, "print-named-sticker-modal-header"], ["lu-button-icon", "", 3, "click"], ["icon", "close", 1, "icon-close", 3, "size"], ["class", "barcode-wrapper", 4, "ngIf", "ngIfElse"], ["noNumber", ""], [1, "data-content"], [1, "data-text-size"], [1, "print-sticker__action"], ["type", "button", "lu-button-raised", "", 1, "print-sticker__action__button", 3, "disabled", "click"], ["icon", "print", 3, "size"], [1, "barcode-wrapper"], [3, "bc-format", "bc-value", "bc-width", "bc-height", "bc-display-value"], [1, "no-number-container"], [1, "no-number-label"]],
    template: function (q, mt) {
      if (1 & q && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "span"), t._uU(3, "Печать именной этикетки"), t.qZA(), t.TgZ(4, "button", 2), t.NdJ("click", function () {
        return mt.modalRef.close();
      }), t._UZ(5, "lu-svg-icon", 3), t.qZA()(), t.YNc(6, G, 2, 5, "div", 4), t.YNc(7, te, 3, 0, "ng-template", null, 5, t.W1O), t.TgZ(9, "div", 6)(10, "span", 7), t._uU(11), t.qZA(), t.TgZ(12, "span", 7), t._uU(13), t.qZA(), t.TgZ(14, "span", 7), t._uU(15), t.qZA()(), t.TgZ(16, "div", 8)(17, "button", 9), t.NdJ("click", function () {
        return mt.printLabel();
      }), t._UZ(18, "lu-svg-icon", 10), t._uU(19, " Распечатать "), t.qZA()()()), 2 & q) {
        const ut = t.MAs(8);
        t.xp6(5), t.Q6J("size", 24), t.xp6(1), t.Q6J("ngIf", mt.probeNumberForBarcode)("ngIfElse", ut), t.xp6(5), t.Oqu(mt.probeNumberForBarcode), t.xp6(2), t.Oqu(null == mt.indexData || null == mt.indexData.combinedCareCase ? null : mt.indexData.combinedCareCase.fullName), t.xp6(2), t.hij(" ", null == mt.indexData || null == mt.indexData.hospitalCard ? null : mt.indexData.hospitalCard.number, ""), t.xp6(2), t.Q6J("disabled", mt.isPrinting), t.xp6(1), t.Q6J("size", 24);
      }
    },
    dependencies: [B.ez, B.O5, y.t, y.y, j.W1, j.mc, W.h, W.q, F.o, F.k],
    styles: [".print-sticker[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:start}.print-sticker[_ngcontent-%COMP%]   .barcode-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:281px;max-width:100%;min-height:144px;margin-top:-12px;margin-bottom:8px;overflow:hidden}.print-sticker[_ngcontent-%COMP%]   .barcode-wrapper[_ngcontent-%COMP%]   ngx-barcode6[_ngcontent-%COMP%]{display:block}.print-sticker[_ngcontent-%COMP%]   .barcode-wrapper[_ngcontent-%COMP%]   ngx-barcode6[_ngcontent-%COMP%]     svg{max-width:281px;height:auto}.print-sticker__action[_ngcontent-%COMP%]{justify-content:end;display:flex;flex-direction:row;width:100%}.print-sticker__action__button[_ngcontent-%COMP%]{width:158px!important;min-width:158px!important;max-width:158px!important;height:40px!important;min-height:40px!important;max-height:40px!important;margin:32px 24px 24px;padding:0!important;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box}.print-sticker__action__button[_ngcontent-%COMP%]     .lu-button-wrapper, .print-sticker__action__button[_ngcontent-%COMP%]     .lu-button-badge{width:158px!important;min-width:158px!important;max-width:158px!important;height:40px!important;min-height:40px!important;max-height:40px!important;box-sizing:border-box}.print-sticker__action__button[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{margin-left:-14px}.print-named-sticker-modal-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:28px;width:calc(100% - 48px);margin:24px 24px 28px;font-size:20px;font-weight:600}.icon-close[_ngcontent-%COMP%]{--lu-svg-icon-color: #CCCCCC;padding-left:15px}.no-number-container[_ngcontent-%COMP%]{width:281px;height:144px;display:flex;flex-direction:row;align-items:center;justify-content:center}.no-number-container[_ngcontent-%COMP%]   .no-number-label[_ngcontent-%COMP%]{place-content:center center;align-items:center;font-style:italic;color:#6b6b6b;font-size:1.1em}.data-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px}.data-content[_ngcontent-%COMP%]   .data-text-size[_ngcontent-%COMP%]{font-size:20px;font-weight:400;min-height:28px;text-align:center}"],
    changeDetection: 0
  }), qe);
  pe = (0, R.gn)([(0, J.c)()], pe);
  var be = i(80529);
  const Rt = class {
    constructor() {
      this.http = (0, t.f3M)(be.eN), this.baseUrl = "/gateway/lab/api/v1/referral";
    }
    generateProbeNumber(st) {
      return this.http.post(`${this.baseUrl}/generateProbeNumber`, {
        referralIds: st
      });
    }
  };
  let le = Rt;
  Rt.ɵfac = function (q) {
    return new (q || Rt)();
  }, Rt.ɵprov = t.Yz7({
    token: Rt,
    factory: Rt.ɵfac,
    providedIn: "root"
  });
  const We = class {
    constructor() {
      this.generateProbeApi = (0, t.f3M)(le), this.listRefresh = (0, t.f3M)(C.c), this.modalService = (0, t.f3M)(e.ap), this.messages = (0, t.f3M)(a.Jv);
    }
    openPrintDialogs(st, q) {
      const mt = (0, v.FK)(st);
      mt.length ? this.prepareReferralsForPrint(mt, q?.indexFilterParams).pipe((0, d.b)(ut => {
        q?.reloadList && q.indexFilterParams && ut.length && this.listRefresh.scheduleListRefreshAfterGenerateProbeNumber(ut, q.indexFilterParams, q.reloadList);
      }), (0, M.q)(1)).subscribe({
        next: ut => this.openPrintDialogsSequential(ut, 0),
        error: () => this.messages.error("Не удалось сгенерировать номера проб для печати этикетки")
      }) : this.messages.warning("Не выбрано ни одного направления для печати этикетки");
    }
    prepareReferralsForPrint(st, q) {
      const mt = function E(Re) {
        const st = new Set();
        for (const q of Re) {
          const mt = f(q);
          mt && st.add(mt);
        }
        return [...st];
      }(st);
      return mt.length ? this.generateProbeApi.generateProbeNumber(mt).pipe((0, A.w)(ut => {
        const Ct = T(st, ut);
        return q ? this.listRefresh.resolveReferralsWithProbeFromIndex(Ct, q) : (0, N.H)(C.C).pipe((0, I.U)(() => Ct));
      }), (0, O.K)(ut => (console.error("[LrNamedLabelPrintService] generateProbeNumber failed", ut), (0, L._)(() => ut)))) : (this.messages.error("Не удалось определить идентификаторы выбранных направлений"), (0, b.of)([]));
    }
    openPrintDialogsSequential(st, q) {
      q >= st.length || this.modalService.open(new m.X(pe), {
        width: "448px",
        disableClose: !0,
        data: st[q]
      }).afterClose().pipe((0, M.q)(1)).subscribe(() => this.openPrintDialogsSequential(st, q + 1));
    }
  };
  let n = We;
  We.ɵfac = function (q) {
    return new (q || We)();
  }, We.ɵprov = t.Yz7({
    token: We,
    factory: We.ɵfac,
    providedIn: "root"
  });
});
