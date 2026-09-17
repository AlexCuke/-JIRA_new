// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z, X, oe) {
    this.store = s, this.cdr = o, this.breakpointObserver = D, this.modalService = Z, this.messageService = X, this.userContextService = oe, this.isTablet = !1, this.grade = null, this.scoreBoxColorClass = {
      bgColor: "unset",
      color: "unset"
    }, this.newsButtonColorClass = "default", this.timeUntil = "", this.now = new Date(), this.clinicalRisk = "", this.hospDate = null, this.timeCommited = null, this.currentDepartment = "", this.isFirstMeasurement = !1, this.formatTimer = ue => {
      if (this.now > ue) return "";
      const He = (0, xI.Z)({
          start: this.now,
          end: ue
        }),
        lt = 24 * (He.days || 0) + (He.hours || 0),
        ht = He.minutes || 0;
      return 0 === lt && 0 === ht ? "" : `${lt}\u0447 ${ht}\u043c`;
    }, this.calculateTimer = (ue, He) => {
      const lt = (0, Ox.Z)(this.timeCommited, ue),
        ht = (0, Ox.Z)(this.timeCommited, He),
        ct = (0, bI.Z)(lt),
        on = function TI(c) {
          (0, MI.Z)(1, arguments);
          var s = (0, wI.Z)(c);
          return s.setMinutes(59, 59, 999), s;
        }(ht);
      return this.now < ct ? (this.newsButtonColorClass = "default", this.formatTimer(lt)) : this.now >= ct && this.now <= on ? (this.newsButtonColorClass = "yellow", this.formatTimer(lt)) : (this.newsButtonColorClass = "red", "");
    };
  }
  ngOnInit() {
    if (this.userContextService.getUserContext().pipe((0, Ie.q)(1)).subscribe(s => {
      this.currentDepartment = String(s.department.id);
    }), this.grade = this.data.data?.news2?.grade, this.hospDate = (0, hu.pL)(this.data.data.hospitalizedPatient.hospitalizationDate), this.isFirstMeasurement = !ow()(this.data.data, "news2.timeCommitted", !1), this.timeCommited = this.data.data.news2?.timeCommitted ? (0, hu.pL)(this.data.data?.news2?.timeCommitted) : null, this.clinicalRisk = this.data.data?.news2?.clinicalRisk, this.grade) {
      const s = {
        bgColor: "",
        color: ""
      };
      switch (this.clinicalRisk) {
        case "Без отклонений":
          s.bgColor = "#C2E8E8", s.color = "#084D4D";
          break;
        case "Низкий":
        case "Низкий балл":
          s.bgColor = "#DFF0C0", s.color = "#346B07";
          break;
        case "Средний":
        case "Средний балл":
          s.bgColor = "#FFF5B3", s.color = "#BF4905";
          break;
        case "Высокий":
        case "Высокий балл":
          s.bgColor = "#FFE7BD", s.color = "#BF4905";
          break;
        case "Критичный":
        case "Критичный параметр":
          s.bgColor = "#FCD6CE", s.color = "#AA2115";
      }
      this.breakpointObserver.observe(Du.ok).pipe((0, Kn.t)(this)).subscribe(o => {
        this.isTablet = o.matches;
      }), this.scoreBoxColorClass = s;
    }
    this.timeUntil = this.calculateTimeUntilAndStatus(), this.startTimer();
  }
  ngAfterViewInit() {
    this.breakpointObserver.observe(Du.ok).pipe((0, Kn.t)(this)).subscribe(s => {
      this.isTablet = s.matches;
    });
  }
  startTimer() {
    (0, pP.H)(0, 6e4).pipe((0, zs.U)(() => this.calculateTimeUntilAndStatus()), (0, Kn.t)(this)).subscribe(s => {
      this.now = new Date(), this.timeUntil = s, this.cdr.detectChanges();
    });
  }
  calculateTimeUntilAndStatus() {
    if (this.now = new Date(), this.isFirstMeasurement) {
      if ((0, Ox.Z)(this.hospDate, 1) > this.now && 0 === (0, EI.Z)(this.now, (0, Ox.Z)(this.hospDate, 1))) return this.newsButtonColorClass = "yellow", this.formatTimer((0, Ox.Z)(this.hospDate, 1));
      this.newsButtonColorClass = "red";
    } else switch (this.clinicalRisk) {
      case "Без отклонений":
        return this.calculateTimer(12, 12);
      case "Низкий":
      case "Низкий балл":
        return this.calculateTimer(4, 6);
      case "Средний":
      case "Средний балл":
      case "Высокий":
      case "Высокий балл":
        return this.calculateTimer(1, 2);
      case "Критичный":
      case "Критичный параметр":
        return this.newsButtonColorClass = "red", "";
      default:
        return "";
    }
    return "";
  }
  onNewsClick() {
    this.data.data.patientMovement?.departmentId !== this.currentDepartment || "DISCHARGED" === this.data.data?.hospitalizedPatient?.statusCode ? this.messageService.error("Пациент был переведен или выписан из отделения") : (this.store.dispatch((0, Ya.v_)({
      patientData: this.data
    })), this.isTablet ? this.modalService.open(new Zs.X(ex.z), {
      panelClass: "news2",
      width: "100vw",
      height: "100vh",
      data: {
        payload: this.data,
        isModalAlone: !0
      }
    }) : this.store.dispatch((0, Ya.K0)({
      menuName: "News2Component",
      params: this.data
    })));
  }
});
