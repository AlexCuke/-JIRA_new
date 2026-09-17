// Extracted from main; webpack module 8830. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    C$: () => Je,
    gK: () => Xt,
    Ys: () => vt,
    L5: () => J,
    XE: () => W,
    DF: () => j,
    xQ: () => an,
    xv: () => li,
    yl: () => ke,
    hj: () => Ct,
    hh: () => Me,
    Ro: () => Ue,
    pL: () => E
  });
  var t = i(17489),
    e = i(28115),
    a = i(40833);
  function d(zn) {
    return (0, a.Z)(1, arguments), function m(zn, $t) {
      (0, a.Z)(2, arguments);
      var Mn = (0, e.Z)(zn),
        Qn = (0, e.Z)($t);
      return Mn.getTime() === Qn.getTime();
    }(zn, Date.now());
  }
  const M = ["1193", "1194", "1192", "405", "406", "1200", "1201", "1206", "1207", "1208", "1209", "1212", "1213", "1214", "1216", "1217", "355", "356", "1420", "1419"],
    b = ["1055", "1056", "1057", "1037", "1032", "1033", "1034", "1035", "1036", "1038", "1039", "1053", "1040", "1041", "1042", "1043", "1044", "1050", "1052", "1149", "1150", "1431"],
    A = ["Видеокапсульная эндоскопия верхних отделов желудочно-кишечного тракта", "Видеокапсульная эндоскопия толстой кишки", "Видеокапсульная эндоскопия тонкой кишки", "Компьютерная томография виртуальная колоноскопия", "Компьютерная томография кишечника с контрастированием", "Эндоскопическое ультразвуковое исследование пищевода", "Эндоскопическое ультразвуковое исследование стенки желудка", "Эндоскопическое ультразвуковое исследование внепечёночных желчных протоков", "Эндоскопическое ультразвуковое внутрипротоковое исследование внепечёночных желчных протоков", "Эндоскопическое ультразвуковое исследование внепечёночных желчных протоков, большого дуоденального сосочка и поджелудочной железы", "Эндоскопическое ультразвуковое исследование стенки двенадцатиперстной кишки", "Эндоскопическое ультразвуковое исследование стенки тонкой кишки", "Эндоскопическое ультразвуковое исследование стенки толстой кишки", "Эндоскопическое ультразвуковое исследование стенки прямой кишки", "Эндоскопическое ультразвуковое исследование параинтестинального пространства брюшной полости", "Эндоскопическое ультразвуковое исследование верхнего отдела брюшной полости и забрюшинного пространства трансгастрально и трансдуоденально", "Магнитно-резонансная томография прямой кишки", "Магнитно-резонансная томография прямой кишки с контрастированием", "Магнитно-резонансная томография тонкой кишки с контрастированием (МР-энтерография)", "Магнитно-резонансная томография тонкой кишки"],
    N = ["Позитронная эмиссионная томография, совмещенная с компьютерной томографией, с 18F-ФДГ", "Позитронная эмиссионная томография, совмещенная с компьютерной томографией, головного мозга с другими РФП (кроме 18F-ФДГ)", "Позитронная эмиссионная томография, совмещенная с компьютерной томографией, всего тела с другими РФП (кроме 18F-ФДГ)", "Сцинтиграфия легких", "Сцинтиграфия статическая головного мозга", "Сцинтиграфия щитовидной железы", "Сцинтиграфия миокарда", "Сцинтиграфия статическая почек", "Однофотонная эмиссионная компьютерная томография, совмещенная с компьютерной томографией", "Сцинтиграфия печени статическая", "Сцинтиграфия печени и желчевыводящих путей динамическая", "Сцинтиграфия паращитовидных желез", "Сцинтиграфия органов и тканей грудной клетки", "Сцинтиграфия яичников", "Сцинтиграфия костей", "Сцинтиграфия лимфоузлов", "Сцинтиграфия нейроэндокринных опухолей", "Сцинтиграфия щитовидной железы с йодом", "Сцинтиграфия динамическая моторно-эвакуаторной функции желудка", "Сцинтиграфия слюнных желез", "Сцинтиграфия всего тела для поиска очагов воспаления с мечеными аутолейкоцитами", "Сцинтиграфия тканей всего тела"];
  var O = i(55979);
  const L = {
      morning: {
        from: "06:00",
        to: "11:59",
        current: "morning",
        next: ["day", "evening", "night"]
      },
      day: {
        from: "12:00",
        to: "17:59",
        current: "day",
        prev: "morning",
        next: ["evening", "night"]
      },
      evening: {
        from: "18:00",
        to: "21:59",
        current: "evening",
        prev: "day",
        next: ["night"]
      },
      night: {
        from: "22:00",
        to: "05:59",
        current: "night",
        prev: "evening"
      }
    },
    C = () => new Date().getHours(),
    v = ["CANCELLED", "NOT_COMPLETED", "COMPLETED", "COMPLETED_PROTOCOL"],
    f = ["PLANNED", "ACTIVE", "STARTED", "STARTED_PROTOCOL"];
  function E(zn) {
    const $t = zn.slice(0, 19),
      Mn = zn.slice(19),
      Qn = new Date($t);
    return ".000+03:00" === Mn && Qn.setHours(Qn.getHours() - 3), Qn;
  }
  const h = zn => zn.slice(0, 19),
    R = zn => !!zn && d(new Date(h(zn))),
    B = zn => new Date(h(zn)).getHours() < C() - 1,
    j = zn => {
      const $t = zn.lastName,
        Mn = zn.firstName.charAt(0) + ".",
        Qn = zn.secondName ? zn.secondName.charAt(0) + "." : "";
      return (0, t.join)([$t, Mn, Qn], " ");
    },
    W = zn => {
      const $t = zn?.lastName,
        Mn = zn?.firstName,
        Qn = zn?.secondName;
      return (0, t.join)([$t, Mn, Qn].filter(Boolean), " ");
    },
    F = zn => {
      const [$t, Mn] = zn.split(":").map(Number);
      return 60 * $t + Mn;
    },
    ke = zn => {
      const $t = {
          class: "has-appointment"
        },
        Mn = (0, t.get)(zn, "news2.timeCommitted", null),
        Qn = Mn && R(Mn) ? new Date(Mn).getHours() : null,
        In = bi => bi >= 2 && bi < 12,
        ui = bi => bi >= 12 || bi < 2,
        To = C();
      return In(To) && ($t.class = Qn && In(Qn) ? "has-appointment" : "appointed"), ui(To) && ($t.class = Qn && ui(Qn) ? "has-appointment" : "appointed"), $t;
    },
    J = (zn, $t) => {
      const Mn = {
        class: "no-appointment"
      };
      if (zn) {
        const Qn = {
          ...zn,
          elements: zn.elements.filter(Yi => O.$[$t].includes(Yi.routeOfAdministration))
        };
        let In = (0, t.flatMap)(Qn.elements, Yi => Yi.medicationDispenses ?? []);
        const ui = (0, t.filter)(In, Yi => R(Yi.planningDate));
        (0, t.filter)(ui, Yi => !B(Yi.planningDate) && "ASSIGNED" === Yi.status).length > 0 && (Mn.class = "has-appointment"), (0, t.filter)(ui, Yi => (zn => {
          const $t = new Date(h(zn)).getHours();
          return C() === $t;
        })(Yi.planningDate) && "ASSIGNED" === Yi.status).length > 0 && (Mn.class = "appointed"), (0, t.filter)(ui, Yi => B(Yi.planningDate) && "ASSIGNED" === Yi.status).length > 0 && (Mn.class = "overdue");
        const Xn = (0, t.filter)(ui, Yi => Yi.dayTimePeriod && "ASSIGNED" === Yi.status);
        if (Xn.length > 0) {
          const Yi = function Le(zn) {
            const $t = new Date(),
              Mn = 60 * $t.getHours() + $t.getMinutes();
            for (const Qn of Object.values(zn)) {
              const In = F(Qn.from),
                ui = F(Qn.to);
              if (In <= ui) {
                if (Mn >= In && Mn <= ui) return Qn;
              } else if (Mn >= In || Mn <= ui) return Qn;
            }
            return null;
          }(L);
          (0, t.filter)(Xn, Pr => (0, t.includes)(Yi?.next, Pr.dayTimePeriod)).length > 0 && (Mn.class = "has-appointment"), (0, t.filter)(Xn, Pr => Yi.current === Pr.dayTimePeriod).length > 0 && (Mn.class = "appointed"), (0, t.filter)(Xn, Pr => Yi?.prev === Pr.dayTimePeriod).length > 0 && (Mn.class = "overdue");
        }
      }
      return Mn;
    },
    ye = 36e5,
    ae = zn => (0, t.filter)(zn, $t => !!$t.assignmentDate && R($t.assignmentDate)),
    Y = {
      isUrgent: zn => "EMERGENT" === zn.cito,
      isPatientReady: zn => !!zn?.patientNotified
    },
    G = {
      isUrgent: zn => "EMERGENT" === zn.cito || "CITO" === zn.cito,
      isPatientReady: zn => !!zn?.patientNotified && !!zn?.patientPrepared
    },
    pe = zn => function I(zn, $t) {
      const Mn = zn?.trim(),
        Qn = $t?.trim();
      return Mn && A.includes(Mn) ? 24 : Mn && N.includes(Mn) ? 16 : Qn && M.includes(Qn) ? 24 : Qn && b.includes(Qn) ? 16 : null;
    }(zn.assignmentName, zn.assignmentCode),
    be = zn => zn.assignmentDate ? E(zn.assignmentDate) : null,
    le = zn => {
      const $t = be(zn),
        Mn = pe(zn);
      return $t && null != Mn ? new Date($t.getTime() - Mn * ye) : null;
    },
    n = zn => {
      const $t = be(zn);
      return $t ? le(zn) || new Date($t.getTime() - ye) : null;
    },
    Se = zn => {
      const $t = be(zn);
      if (!$t) return null;
      const Mn = pe(zn);
      return null != Mn ? new Date($t.getTime() - 2 * Mn * ye) : new Date($t.getTime() - ye);
    },
    Re = (zn, $t = new Date()) => {
      if (!zn.assignmentDate) return !1;
      const Mn = n(zn),
        Qn = Se(zn),
        In = (zn => {
          const $t = be(zn);
          if (!$t) return null;
          const Mn = le(zn) ?? $t;
          return new Date(Mn.getTime() + ye);
        })(zn);
      if (!Mn || !Qn || !In) return !1;
      const ui = $t.getTime();
      if (ui < Qn.getTime() || ui > In.getTime() || ui >= Mn.getTime()) return !1;
      const To = le(zn);
      return To ? ui >= (0, e.Z)(To).getTime() : R(zn.assignmentDate);
    },
    st = (zn, $t = new Date()) => {
      const Mn = n(zn),
        Qn = Se(zn);
      if (!Mn || !Qn) return !1;
      const In = $t.getTime();
      return In >= Qn.getTime() && In >= Mn.getTime();
    },
    mt = zn => {
      if (!zn.assignmentDate) return null;
      const $t = E(zn.assignmentDate);
      return new Date($t.getTime() - ye);
    },
    ut = (zn, $t = new Date()) => {
      if ("ASSIGNED" !== zn.status || !zn.assignmentDate || !R(zn.assignmentDate)) return !1;
      if (E(zn.assignmentDate), !mt(zn)) return !1;
      const In = (0, e.Z)($t).getTime();
      return $t.getTime() >= In;
    },
    Ct = zn => (zn?.elements ?? []).filter($t => "ASSIGNED" === $t.status && ((zn, $t = new Date()) => !!zn.assignmentDate && ut(zn, $t))($t)),
    Ue = (zn, $t = new Date()) => {
      if ("ASSIGNED" !== zn.status) return !1;
      const Mn = (zn => zn.assignmentDate ?? zn.instrumentalInfo?.assignmentDate)(zn);
      if (!Mn) return !1;
      const Qn = {
        ...zn,
        assignmentDate: Mn
      };
      return Re(Qn, $t) || st(Qn, $t);
    },
    Me = zn => (zn?.elements ?? []).filter($t => "ASSIGNED" === $t.status && Ue($t)),
    Ke = (zn, $t = new Date()) => {
      if (!ut(zn, $t)) return null;
      if (!zn.assignmentDate) return "next";
      E(zn.assignmentDate);
      const Qn = mt(zn);
      return Qn ? $t.getTime() >= Qn.getTime() ? "current" : "next" : null;
    },
    Ze = (zn, $t = new Date()) => st(zn, $t) ? "current" : Re(zn, $t) ? "next" : null,
    Ee = (zn, $t) => {
      const Mn = ae(zn);
      return Mn.length && Mn.every(Qn => "COMPLETED" === Qn.status) ? "done" : null;
    },
    je = (zn, $t, Mn, Qn, In, ui) => {
      const To = {
        class: "no-appointment",
        showBadge: !1
      };
      if (!zn?.elements?.length) return To;
      if ($t) {
        const Yi = ui?.getEmergencyDoneClass?.(zn.elements, new Date());
        if (Yi) return {
          class: Yi,
          showBadge: !1
        };
        const Eo = ae(zn.elements);
        if (Eo.length > 0 && (0, t.every)(Eo, Fo => "COMPLETED" === Fo.status)) return {
          class: "done",
          showBadge: !1
        };
      }
      const qn = Qn(zn);
      if (!qn.length) return To;
      const Xn = qn.reduce((Yi, Eo) => {
        const Fo = In(Eo);
        return Fo && Yi[Fo].push(Eo), Yi;
      }, {
        prev: [],
        current: [],
        next: []
      });
      return Xn.prev.length > 0 ? (To.class = "overdue", To.showBadge = !1) : Xn.current.length > 0 ? (To.class = "appointed", (0, t.some)(Xn.current, Mn.isUrgent) && (To.showBadge = !0)) : Xn.next.length > 0 && (To.class = "has-appointment", To.showBadge = !1), To;
    },
    Mt = (zn, $t) => {
      const Mn = ae(zn);
      return Mn.length && Mn.every(Qn => "COMPLETED" === Qn.status) ? "done" : null;
    },
    Je = (zn, $t = !1, Mn = !1) => je(zn, $t, Y, Ct, Ke, {
      getEmergencyDoneClass: Mt
    }),
    Xt = (zn, $t = !1) => je(zn, $t, G, Me, Ze, {
      getEmergencyDoneClass: Ee
    }),
    Nn = ["night2", "morning", "day", "evening", "night1"],
    Pi = {
      night2: {
        from: 0,
        to: 6
      },
      morning: {
        from: 6,
        to: 12
      },
      day: {
        from: 12,
        to: 18
      },
      evening: {
        from: 18,
        to: 22
      },
      night1: {
        from: 22,
        to: 24
      }
    };
  function co(zn) {
    if (!zn) return null;
    const $t = `${zn}`.trim();
    if (/Z$|[+-]\d{2}:?\d{2}$/.test($t)) {
      const Mn = new Date($t);
      return Number.isFinite(Mn.getTime()) ? Mn : null;
    }
    return function fe(zn) {
      if (!zn) return null;
      const $t = zn.replace(" ", "T").match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
      if (!$t) {
        const bi = new Date(zn);
        return Number.isFinite(bi.getTime()) ? bi : null;
      }
      const [, Mn, Qn, In, ui, To] = $t;
      return new Date(Number(Mn), Number(Qn) - 1, Number(In), Number(ui), Number(To));
    }($t) ?? E($t);
  }
  const fr = {
      isUrgent: zn => "EMERGENT" === zn.cito || "CITO" === zn.cito,
      isPatientReady: () => !1
    },
    pt = (zn, $t = new Date()) => {
      if ("ASSIGNED" !== zn.status) return null;
      const Mn = co(zn.assignmentDate);
      if (!Mn || !zn.assignmentDate) return null;
      const {
          start: Qn,
          end: In
        } = (zn => {
          const $t = co(zn);
          if (!$t) {
            const Fo = (0, e.Z)(new Date());
            return {
              start: Fo,
              end: Fo
            };
          }
          const Mn = (zn => {
              const $t = (zn => zn >= 22 ? "night1" : zn >= 18 ? "evening" : zn >= 12 ? "day" : zn >= 6 ? "morning" : "night2")(zn),
                Mn = Nn.indexOf($t);
              return [Nn[Mn], Nn[(Mn + 1) % Nn.length], Nn[(Mn + 2) % Nn.length]];
            })($t.getHours()),
            Qn = (0, e.Z)($t),
            In = Mn[0],
            ui = Mn[2],
            {
              from: To
            } = Pi[In],
            {
              to: bi
            } = Pi[ui],
            qn = new Date(Qn);
          qn.setHours(To, 0, 0, 0);
          const Xn = new Date(Qn),
            Yi = Nn.indexOf(In);
          return Nn.indexOf(ui) < Yi && Xn.setDate(Xn.getDate() + 1), 24 === bi ? Xn.setHours(23, 59, 59, 999) : (Xn.setHours(bi, 0, 0, 0), Xn.setMilliseconds(-1)), {
            start: qn,
            end: Xn
          };
        })(zn.assignmentDate),
        ui = $t.getTime();
      return ui > In.getTime() ? "prev" : d(Mn) ? ui < Qn.getTime() ? "next" : "current" : null;
    },
    Dt = zn => (zn?.elements ?? []).filter($t => "ASSIGNED" === $t.status && null !== pt($t)),
    Dn = (zn, $t) => {
      const Mn = (zn => (0, t.filter)(zn, $t => {
        const Mn = co($t.assignmentDate);
        return !!Mn && d(Mn);
      }))(zn);
      return Mn.length && Mn.every(Qn => "COMPLETED" === Qn.status) ? "done" : null;
    },
    vt = (zn, $t = !1) => je(zn, $t, fr, Dt, pt, {
      getEmergencyDoneClass: Dn
    }),
    an = zn => {
      const $t = {
        class: "no-appointment",
        showBadge: !1,
        procedureStatus: ""
      };
      if (!zn) return $t;
      if ((0, t.some)(zn.elements, Fo => "EMERGENT" === Fo.cito && (0, t.some)(Fo.procedures, br => f.includes(br.status)))) return {
        class: "appointed",
        showBadge: !0,
        procedureStatus: "PLANNED"
      };
      const Qn = (0, t.flatMap)(zn.elements, Fo => Fo.procedures ?? []),
        In = new Date(),
        ui = In.getTime(),
        To = `${In.getFullYear()}-${String(In.getMonth() + 1).padStart(2, "0")}-${String(In.getDate()).padStart(2, "0")}`,
        qn = Qn.filter(Fo => {
          const br = f.includes(Fo.status),
            Pr = Fo.planningDate.slice(0, 10) <= To;
          return br && Pr;
        }).reduce((Fo, br) => {
          const Pr = L[br.dayTimePeriod];
          if (!Pr) return Fo;
          const qo = new Date(br.planningDate),
            Yo = qo.getFullYear(),
            wr = qo.getMonth(),
            oo = qo.getDate(),
            [Di, Ci] = Pr.from.split(":").map(Number),
            [lo, jo] = Pr.to.split(":").map(Number),
            Go = new Date(Yo, wr, oo, Di, Ci, 0, 0).getTime(),
            ji = new Date(Yo, wr, oo, lo, jo, 59, 999);
          60 * Di + Ci > 60 * lo + jo && ji.setDate(ji.getDate() + 1);
          const ti = ji.getTime();
          return ui > ti ? Fo.expired.push(br) : ui >= Go && ui <= ti ? Fo.current.push(br) : br.planningDate.slice(0, 10) === To && ui < Go && Fo.plannedToday.push(br), Fo;
        }, {
          expired: [],
          current: [],
          plannedToday: []
        }),
        {
          expired: Xn,
          current: Yi,
          plannedToday: Eo
        } = qn;
      return Xn.length ? {
        class: "overdue",
        showBadge: !1,
        procedureStatus: Xn[0].status
      } : Yi.length ? {
        class: "appointed",
        showBadge: !1,
        procedureStatus: Yi[0].status
      } : Eo.length ? {
        class: "has-appointment",
        showBadge: !1,
        procedureStatus: Eo[0].status
      } : $t;
    },
    li = zn => zn ? f.includes(zn) ? "active" : v.includes(zn) ? "finished" : null : null;
});
