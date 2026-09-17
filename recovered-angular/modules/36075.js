// Extracted from main; webpack module 36075. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    q: () => N
  });
  var t = i(71822),
    e = i(66425),
    a = i(73766),
    m = i(29378),
    d = (() => {
      return (I = d || (d = {})).URGENCY = "Срочность", I.DATE_OF_COMPLETION = "Дата выполнения", I.DATE_OF_ISSUE = "Даты выдачи", I.ASSIGNMENT = "Назначение", I.NOTE = "Примечание", I.RESEARCH_TASK = "Задача исследования", I.CONSULTATION_GOAL = "Цель консультации", I.STUDY_GOAL = "Цель исследования", I.NAME_MED = "Наименование медикамента", I.NAME_PROCEDURE = "Название операции", I.MNN = "МНН", I.CITO = "экстренно", I.START_COURSE = "Начало курса", I.DURATION = "Продолжительность", I.DESCRIPTION = "Описание", I.DATE_AND_TIME = "Дата и время", I.MEDICATION = "Медикамент", I.DOCUMENT_STATUS = "Статус", I.DATE_OF_DOCUMENT_SIGN = "Дата подписи документа", I.CODE_PROTOCOL = "Код протокола", d;
      var I;
    })();
  const b = [d.URGENCY, d.DATE_OF_COMPLETION, d.START_COURSE, d.DURATION, d.DOCUMENT_STATUS, d.CODE_PROTOCOL],
    A = new Map([["description", "Описание"]]);
  class N {
    constructor(O, L, C) {
      this.webTemplate = O, this.composition = L, this.filter = C;
    }
    getContent() {
      if (this.webTemplate.tree && !(this.filter && this.filter.include && this.filter.include.indexOf("-") >= 0)) {
        if (this.filter && this.filter.include) {
          const O = this.filter.include.map(L => {
            try {
              const C = this.composition.get(L),
                v = C.getNode();
              return this.printNode(v, C, this.filter?.flat ? L : "");
            } catch (C) {
              return void console.error(C);
            }
          }).filter(L => void 0 !== L).map(L => L);
          return 1 === O.length ? O[0] : O.length > 1 ? {
            children: O
          } : void 0;
        }
        return this.printNode(this.webTemplate.tree, this.composition);
      }
    }
    printNode(O, L, C) {
      if (!L.empty()) {
        if (this.filter && this.filter.exclude) {
          const v = O.getParentPathIds().join("."),
            f = this.filter.exclude;
          if (void 0 !== (f ? Array.isArray(f) ? f : [f] : []).find(h => v.startsWith(h))) return;
        }
        switch (O.name = this.resolveFieldNameAlias(O.name), O.getRmType()) {
          case t.B8.DV_QUANTITY:
            return {
              name: O.name,
              value: `${L.getMagnitude()} ${L.getUnit()}`
            };
          case t.B8.DV_CODED_TEXT:
            return {
              name: O.name,
              code: `${L.getCode()}`,
              value: `${L.getValue()}`
            };
          case t.B8.DV_TEXT:
            return {
              name: O.name,
              value: `${L.getValue()}`
            };
          case t.B8.DV_PROPORTION:
            return {
              name: O.name,
              value: `${L.getNumerator()} / ${L.getDenominator()}`
            };
          case t.B8.DV_BOOLEAN:
            return {
              name: O.name,
              value: L.getValue() ? "да" : "нет"
            };
          case t.B8.DV_DATE:
            return {
              name: O.name,
              value: `${L.getString()}`
            };
          case t.B8.DV_TIME:
            {
              const v = L.getString().slice(0, 5);
              return {
                name: O.name,
                value: v
              };
            }
          case t.B8.DV_DATE_TIME:
            {
              const v = this.convertDateTime(L),
                E = v.getFullYear() !== new Date().getFullYear() ? "dd MMM yyyy" : "dd MMM",
                x = v.getHours() + v.getMinutes() > 0 ? ", HH:mm" : "";
              return {
                name: O.name,
                value: (0, e.Z)(v, `${E}${x}`, {
                  locale: a.default
                })
              };
            }
          case t.B8.DV_ORDINAL:
            return {
              name: O.name,
              value: `${L.getValue()}`
            };
          case t.B8.DV_INTERVAL:
            return {
              name: O.name,
              value: `${this.printNode(L.getLower()?.getNode(), L.getLower())?.value} - ${this.printNode(L.getUpper()?.getNode(), L.getUpper())?.value}`
            };
          case t.B8.DV_COUNT:
          case t.B8.DV_INTEGER:
            return {
              name: O.name,
              value: `${L.getValue()}`
            };
          case t.B8.DV_DURATION:
            return {
              name: O.name,
              value: this.printDuration(L.getDuration())
            };
          case t.B8.DV_URI:
            return {
              name: O.name,
              value: `${L.getValue()}`
            };
          case t.B8.DV_EHR_URI:
            return;
          case t.B8.DV_IDENTIFIER:
            return {
              name: O.name,
              value: `${L.getIdentifier().id}`
            };
          case t.B8.DV_PARSABLE:
            return {
              name: O.name,
              value: `${L.getValue()}`
            };
          case t.B8.DV_MULTIMEDIA:
            return {
              name: O.name,
              value: `${L.getMultimedia().value}`
            };
          case t.B8.EVENT_CONTEXT:
            return;
        }
        if (L instanceof t._v) {
          const v = [],
            f = C ? (C || "").split(".").slice(0, -1).join(".") : "";
          if (f) {
            const x = this.composition.get(f),
              u = x.getNode(),
              T = x,
              R = T.ignoreFields();
            u.getChildren().forEach(B => {
              const y = `${this.filter?.flat || ""}`;
              if (B.getPath().replace(/@/gi, ".") === C) {
                if (R.find(j => j === B.id)) return;
                v.push(...this.createChildren(T, u, B, y));
              }
            });
          } else {
            const x = L,
              u = x.ignoreFields();
            O.getChildren().forEach(T => {
              u.find(R => R === T.id) || v.push(...this.groupCreatedChildren(this.createChildren(x, O, T)));
            });
          }
          if (v.filter(x => x.rmType === t.B8.EVENT || x.rmType === t.B8.POINT_EVENT || x.rmType === t.B8.INTERVAL_EVENT || x.rmType === t.B8.ACTIVITY).forEach(x => {
            const u = v.indexOf(x);
            v.splice(u, 1), x.children && v.splice(u, 0, ...x.children);
          }), !v || 0 === v.length) return;
          const h = v.filter(x => !b.includes(x.name || x.title || ""));
          return 1 !== h.length || h[0].title !== O.name && h[0].name !== O.name ? {
            title: O.name,
            children: v,
            rmType: O.getRmType()
          } : h[0];
        }
      }
    }
    createChildren(O, L, C, v) {
      return O.getMany((O.getType() === t.B8.COMPOSITION ? `${L.id}.${C.id}` : C.id) ?? "").map(f => this.printNode(C, f)).filter(f => void 0 !== f).filter(f => !f?.value || !["—", "-", m.P].includes(f?.value)).map((f, E) => ({
        ...f,
        title: (v ? this.getFlatTitle(v, E) : "") || f?.title || ""
      }));
    }
    groupCreatedChildren(O) {
      const L = [];
      if (O.length > 1) {
        const C = O.reduce((v, f) => {
          const E = f.title || f.name || "";
          return v[E] || (v[E] = []), v[E].push(f), v;
        }, {});
        Object.keys(C).forEach(v => {
          C[v].length > 1 ? L.push(...C[v].map((f, E) => ({
            ...f,
            title: void 0,
            name: this.getFlatTitle(v, E)
          }))) : L.push(...C[v]);
        });
      } else L.push(...O);
      return L;
    }
    printDuration(O) {
      return O ? Object.entries(O).map(([L, C]) => {
        if (C && 0 !== C) switch (L) {
          case "year":
            return function M(I) {
              const O = I % 10;
              return I > 10 && I < 20 || O > 4 && O < 10 || 0 === O ? `${I} \u043b.` : `${I} \u0433.`;
            }(C);
          case "month":
            return `${C} \u043c\u0435\u0441.`;
          case "week":
            return `${C} \u043d\u0435\u0434.`;
          case "day":
            return `${C} \u0434.`;
          case "hour":
            return `${C} \u0447.`;
          case "minute":
            return `${C} \u043c\u0438\u043d.`;
          case "second":
            return `${C} \u0441\u0435\u043a.`;
          default:
            return;
        }
      }).filter(L => void 0 !== L).join(", ") : "-";
    }
    getFlatTitle(O, L) {
      const C = O.replace(/_/gi, " ");
      return `${C.charAt(0).toUpperCase() + C.slice(1)} (${L + 1})`;
    }
    convertDateTime(O) {
      let L = O.getString();
      return L.endsWith("Z") && (L = L.replace("Z", "+03:00")), new Date(L);
    }
    resolveFieldNameAlias(O) {
      return null == O ? O : A.get(O.toLowerCase()) ?? O;
    }
  }
});
