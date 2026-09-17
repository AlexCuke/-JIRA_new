// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z, X) {
    this.modalService = s, this.store = o, this.breakpointObserver = D, this.columnVisibility = Z, this.cdr = X, this.isTablet = !0;
  }
  ngOnInit() {
    this.breakpointObserver.observe(Y5).pipe((0, Kn.t)(this)).subscribe(s => {
      this.isTablet = s.matches, this.cdr.markForCheck();
    }), this.columnVisibility.changes$.pipe((0, Kn.t)(this)).subscribe(() => this.cdr.markForCheck());
  }
  isColumnVisible(s) {
    return this.columnVisibility.isVisible(s);
  }
  get fio() {
    const s = this.data?.data?.careCase;
    return s ? `${s.lastName ?? ""} ${s.firstName ?? ""} ${s.secondName ?? ""}`.trim() : "—";
  }
  get gender() {
    return 1 == +this.data?.data?.careCase?.genderCode ? "М" : "Ж";
  }
  get age() {
    const s = this.data?.data?.careCase?.birthDate;
    return s ? (0, tw.HZ)(s) : "—";
  }
  get cardNumber() {
    return this.data?.data?.hospitalCard?.fullNumber ?? this.data?.data?.hospitalCard?.number ?? "—";
  }
  get ward() {
    const s = this.data?.data?.patientMovement?.wardName;
    return s ? `\u041f\u0430\u043b\u0430\u0442\u0430 ${s}` : "Не размещен";
  }
  get news2Grade() {
    const s = (0, rd.iY)(this.data?.data).grade;
    if (null == s || "" === s) return "—";
    const o = (0, rd.CM)(s);
    return String(null != o ? o : s);
  }
  get news2CubeClass() {
    return AP(this.data);
  }
  get news2Alert() {
    return SP(this.data);
  }
  get news2Time() {
    const s = (0, rd.iY)(this.data?.data).timeCommitted;
    if (!s) return "";
    const o = new Date(String(s));
    return Number.isNaN(o.getTime()) ? "" : o.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: !1
    });
  }
  get hasNews2() {
    return !(0, Pg.rj)(this.data?.data);
  }
  get temperatureText() {
    const s = (0, bh.ze)(this.data?.data);
    return null == s || Number.isNaN(s) ? "—" : (0, bh.VG)(s);
  }
  get temperatureAlert() {
    const s = (0, bh.ze)(this.data?.data);
    return null != s && (s < 36.6 || s > 36.9);
  }
  get pressureText() {
    const s = dE(this.data?.data),
      o = pE(this.data?.data);
    return s.isDefault && o.isDefault ? "—" : `${s.text}/${o.text}`;
  }
  get pressureAlert() {
    return dE(this.data?.data).highlighted || pE(this.data?.data).highlighted;
  }
  get hrText() {
    return hE(this.data?.data).text;
  }
  get hrAlert() {
    return hE(this.data?.data).highlighted;
  }
  get rrText() {
    return fE(this.data?.data).text;
  }
  get rrAlert() {
    return fE(this.data?.data).highlighted;
  }
  get morseSum() {
    return (0, rd.MW)(this.data?.data) ?? null;
  }
  get morseText() {
    return null == this.morseSum ? "—" : String(Math.round(this.morseSum));
  }
  get morseCubeClass() {
    return (0, Pg.e$)(this.data?.data) || null == this.morseSum ? "st-morse-cell__cube_default" : `st-morse-cell__cube_${(0, nf._Y)(this.morseSum)}`;
  }
  get morseAlert() {
    return (0, Pg.e$)(this.data?.data);
  }
  get hasMorse() {
    return (0, Pg.mo)(this.data?.data);
  }
  get detailsPrimary() {
    return this.buildDetails([{
      columnId: "st-transportability-cell",
      label: "Транспортаб.",
      value: this.formatDetailValue((0, rd.mw)(this.data?.data).transportability, "—")
    }, {
      columnId: "st-bath-cell",
      label: "Ванна",
      value: this.formatYesNo((0, rd.mw)(this.data?.data).bath)
    }, {
      columnId: "st-linen-cell",
      label: "Смена белья",
      value: this.formatYesNo((0, rd.mw)(this.data?.data).linen)
    }, {
      columnId: "st-pediculosis-cell",
      label: "Педикулез",
      value: LP(this.data?.data)
    }, {
      columnId: "st-weight-cell",
      label: "Вес",
      value: IP(this.data?.data).text
    }]);
  }
  get detailsSecondary() {
    return this.buildDetails([{
      columnId: "st-liquid-cell",
      label: "Вып. жидкости",
      value: kP(this.data?.data).text
    }, {
      columnId: "st-urine-cell",
      label: "Сут. кол. мочи",
      value: RP(this.data?.data).text
    }, {
      columnId: "st-feces-cell",
      label: "Стул",
      value: FP(this.data?.data).text
    }, {
      columnId: "st-phlegm-cell",
      label: "Мокрота",
      value: NP(this.data?.data).text
    }]);
  }
  createNews2(s) {
    s.stopPropagation(), this.store.dispatch((0, Ya.v_)({
      patientData: this.data
    })), this.modalService.open(new Zs.X(aE.O), {
      panelClass: "st-news2-edit-modal",
      width: (0, Dg.F)(this.isTablet),
      height: "100vh",
      data: this.data
    });
  }
  openNews2(s) {
    s.stopPropagation(), this.store.dispatch((0, Ya.v_)({
      patientData: this.data
    })), this.hasNews2 ? this.modalService.open(new Zs.X(uw), {
      panelClass: "st-news2-view-modal",
      width: (0, Dg.F)(this.isTablet),
      height: "100vh",
      data: this.data
    }) : this.createNews2(s);
  }
  createMorse(s) {
    s.stopPropagation(), this.store.dispatch((0, Ya.v_)({
      patientData: this.data
    })), this.modalService.open(new Zs.X(vE.Z), {
      panelClass: "st-morse-edit-modal",
      width: (0, Dg.F)(this.isTablet),
      height: "100vh",
      data: this.data
    });
  }
  openMorse(s) {
    s.stopPropagation(), this.store.dispatch((0, Ya.v_)({
      patientData: this.data
    })), this.hasMorse ? this.modalService.open(new Zs.X(hw), {
      panelClass: "st-morse-view-modal",
      width: (0, Dg.F)(this.isTablet),
      height: "100vh",
      data: this.data
    }) : this.createMorse(s);
  }
  buildDetails(s) {
    return s.filter(o => this.isColumnVisible(o.columnId)).map(({
      label: o,
      value: D
    }) => ({
      label: o,
      value: D
    }));
  }
  formatDetailValue(s, o) {
    return null != s && String(s).trim() ? String(s) : o;
  }
  formatYesNo(s) {
    if (null == s || "" === s) return "Нет";
    if ("boolean" == typeof s) return s ? "Да" : "Нет";
    const o = String(s).trim().toLowerCase();
    return ["да", "true", "1"].includes(o) ? "Да" : ["нет", "false", "0"].includes(o) ? "Нет" : o.charAt(0).toUpperCase() + o.slice(1);
  }
});
