// Extracted from main; webpack module 90293. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    xB: () => jo,
    OU: () => Go,
    uO: () => $t,
    Zj: () => wr,
    w4: () => lo
  });
  var e = (() => {
    return (ji = e || (e = {})).ASC = "asc", ji.DESC = "desc", e;
    var ji;
  })();
  function M(ji) {
    return {
      bool: {
        should: ji,
        minimum_should_match: 1
      }
    };
  }
  function b(ji, ti) {
    return {
      bool: {
        must: ji,
        must_not: ti
      }
    };
  }
  function A(ji) {
    return {
      bool: {
        must_not: Array.isArray(ji) ? ji : [ji]
      }
    };
  }
  function I(ji) {
    return {
      exists: {
        field: ji
      }
    };
  }
  function O(ji, ti, fi, Fi = "gte", Rn = "lte") {
    const ki = {
      range: {}
    };
    return ki.range[ji] = {
      [Fi]: null === ti ? void 0 : ti,
      [Rn]: null === fi ? void 0 : fi
    }, ki;
  }
  function v(ji, ti) {
    return {
      term: {
        [ji]: "boolean" == typeof ti ? ti : {
          value: ti
        }
      }
    };
  }
  function f(ji, ti, fi) {
    return {
      wildcard: {
        [ji]: {
          value: ti,
          ...(fi ?? {})
        }
      }
    };
  }
  class h {
    constructor() {
      this.request = {}, this.request.size = 0, this.request.track_total_hits = !1, this.request.query = {
        bool: {
          must: []
        }
      };
    }
    sort(ti) {
      return ti?.length ? (this.request.sort || (this.request.sort = []), ti.forEach(({
        field: fi,
        order: Fi,
        mode: Rn,
        nested: ki,
        missing: Ei
      }) => {
        const Wt = {};
        Wt[fi] = {
          order: Fi,
          mode: Rn,
          nested: ki,
          missing: Ei
        }, this.request.sort?.push(Wt);
      }), this) : this;
    }
    countRecords(ti, fi) {
      return fi ? (this.request.aggs || (this.request.aggs = {}), this.request.aggs[ti] = {
        filter: fi
      }, this) : this;
    }
    termAggregation(ti, fi, Fi) {
      return fi ? (this.request.aggs || (this.request.aggs = {}), this.request.aggs[ti] = {
        terms: {
          field: fi,
          size: Fi
        }
      }, this) : this;
    }
    aggregation(ti, fi) {
      return this.request.aggs || (this.request.aggs = {}), this.request.aggs[ti] = fi, this;
    }
    paging(ti, fi) {
      return this.request.size = fi, this.request.from = ti * fi, this;
    }
    query(ti) {
      return this.request.query.bool.must.push(ti), this;
    }
    build() {
      return JSON.stringify(this.request);
    }
    trackTotalHits(ti) {
      return this.request.track_total_hits = ti, this;
    }
    runtimeFields(ti) {
      return 0 === ti.length || (this.request.fields || (this.request.fields = []), this.request.fields.push(...ti)), this;
    }
  }
  var F = i(20733),
    Le = i(66425),
    ke = i(39609),
    J = i(28115),
    fe = i(32722),
    ye = i(37524),
    ae = i(66745),
    Y = i(86936),
    G = i(89570),
    te = i(44726),
    pe = i(94650),
    be = i(8699),
    le = i(29495),
    n = i(4128),
    Se = i(39646),
    qe = i(54004);
  class Rt {}
  class We extends Rt {
    convert() {}
  }
  class Re extends Rt {
    constructor(ti, fi) {
      super(), this.rule = ti, this.queries = fi, this.DEFAULT_SIZE = 100;
    }
    convert() {
      return this.queries.length > 0 ? function E(ji, ti = [], fi = "AND", Fi) {
        return {
          nested: {
            path: ji,
            query: "AND" === fi ? b(ti) : M(ti),
            inner_hits: Fi
          }
        };
      }(this.rule.nestedPath, this.queries, void 0, this.getInnerHits()) : void 0;
    }
    getInnerHits() {
      if (this.queries.length > 0) return {
        _source: !1,
        docvalue_fields: this.queries.map(ti => this.getFieldByQuery(ti)).reduce((ti, fi) => [...ti, ...fi]).filter(Boolean).filter((ti, fi, Fi) => Fi.indexOf(ti) === fi),
        size: this.DEFAULT_SIZE
      };
    }
    getFieldByQuery(ti) {
      return ti.term ? Object.keys(ti.term) : ti.terms ? Object.keys(ti.terms) : ti.range ? Object.keys(ti.range) : ti.exists ? [ti.exists.field] : ti.regexp ? Object.keys(ti.regexp) : ti.match ? Object.keys(ti.match) : ti.bool ? ti.bool.should ? ti.bool.should.map(fi => this.getFieldByQuery(fi)).reduce((fi, Fi) => [...fi, ...Fi]) : ti.bool.must_not ? ti.bool.must_not.map(fi => this.getFieldByQuery(fi)).reduce((fi, Fi) => [...fi, ...Fi]) : [""] : [""];
    }
  }
  class st extends Rt {
    constructor(ti) {
      super(), this.queries = ti;
    }
    convert() {
      return this.queries.length > 0 ? b(this.queries) : void 0;
    }
  }
  class q extends Rt {
    constructor(ti) {
      super(), this.queries = ti;
    }
    convert() {
      return this.queries.length > 0 ? M(this.queries) : void 0;
    }
  }
  function mt(ji, ti) {
    return ti ? `${ji}.${ti}` : ji;
  }
  class ut extends Rt {
    constructor(ti, fi, Fi) {
      super(), this.rule = ti, this.currentDate = fi, this._value = Fi;
    }
    convert() {
      if (!1 !== this._value) {
        if ("today" === this.rule.value) return v(mt(this.rule.field, this.rule.postfix), (0, Le.Z)(this.currentDate, "yyyy-MM-dd"));
        if ("string" != typeof this.rule.value || !(0, F.r2)(this.rule.value)) throw new Error(`StaticDateQueryCreator: invalid rule value - ${String(this.rule.value)}`);
        if ("string" != typeof this.rule.value) throw new Error(`StaticDateQueryCreator: invalid rule value - ${String(this.rule.value)}, need string`);
        return v(mt(this.rule.field, this.rule.postfix), (0, Le.Z)((0, F.yM)(this.rule.value), "yyyy-MM-dd"));
      }
    }
  }
  const Ct = new RegExp("[- ]");
  function Et(ji, ti) {
    return b(ti.split(Ct).filter(Boolean).map(Fi => f(ji, `*${Fi}*`)));
  }
  function Ue(ji, ti) {
    return Ct.test(ti) ? Et(ji, ti) : function C(ji, ti, fi) {
      return {
        regexp: {
          [ji]: {
            value: ti,
            flags: fi
          }
        }
      };
    }(ji, `.*${ti}.*`);
  }
  class Me extends Rt {
    constructor(ti, fi) {
      super(), this.rule = ti, this._value = fi, this.fioRegExp = Ct;
    }
    convert() {
      if (!1 !== this._value) switch (this.rule.operator) {
        case ">":
          return this.rangeFrom();
        case "<":
          return this.rangeTo();
        case "fio":
          return this.fio();
        case "like":
          return this.like();
        case "startWith":
          return this.startWith();
        case "endWith":
          return this.endWith();
        case "notExists":
          return function N(ji) {
            return A(I(ji));
          }(mt(this.rule.field, this.rule.postfix));
        case "exists":
          return I(mt(this.rule.field, this.rule.postfix));
        default:
          return v(mt(this.rule.field, this.rule.postfix), this.value);
      }
    }
    rangeFrom() {
      return this.validateValueForRangeQuery(), O(mt(this.rule.field, this.rule.postfix), this.value, void 0, "gt");
    }
    rangeTo() {
      return this.validateValueForRangeQuery(), O(mt(this.rule.field, this.rule.postfix), void 0, this.value, "gt", "lt");
    }
    validateValueForRangeQuery() {
      if ("boolean" == typeof this.value) throw new Error("Invalid value format for range query");
      if ("" === this.value) throw new Error("Invalid value for range query. Value must not be empty.");
    }
    fio() {
      if ("string" != typeof this.value) throw new Error("Invalid value format for fio query");
      return function Ft(ji, ti, fi) {
        return b(ti.split(" ").map(Rn => M([Ue(mt(`${ji}.lastName`, fi), Rn), Ue(mt(`${ji}.firstName`, fi), Rn), Ue(mt(`${ji}.secondName`, fi), Rn)])));
      }(this.rule.field, this.value, this.rule.postfix);
    }
    endWith() {
      if ("string" != typeof this.value) throw new Error("Invalid value format for like query");
      return f(mt(this.rule.field, this.rule.postfix), `*${this.value}`);
    }
    startWith() {
      if ("string" != typeof this.value) throw new Error("Invalid value format for like query");
      return f(mt(this.rule.field, this.rule.postfix), `${this.value}*`);
    }
    like() {
      if ("string" != typeof this.value) throw new Error("Invalid value format for like query");
      return this.fioRegExp.test(this.value) ? Et(mt(this.rule.field, this.rule.postfix), this.value) : f(mt(this.rule.field, this.rule.postfix), `*${this.value}*`);
    }
    get value() {
      return "boolean" == typeof this._value ? !(!this._value || "boolean" === this.rule.type) && this.defaultValue : "" === this.defaultValue && this._value ? this._value : this.defaultValue ?? this._value;
    }
    get defaultValue() {
      if ("string" != typeof this.rule.value || !(0, F.r2)(this.rule.value)) return this.rule.value;
      const ti = (0, F.yM)(this.rule.value);
      return (0, ke.Z)(ti) ? ti.valueOf() : ti;
    }
  }
  class Ke extends Rt {
    constructor(ti, fi) {
      super(), this.rule = ti, this._value = fi;
    }
    convert() {
      if (!(void 0 === this._value || !1 === this._value || Array.isArray(this._value) && 0 === this._value.length)) return "in" === this.rule.operator ? this.in() : this.default();
    }
    in() {
      return this.terms(mt(this.rule.field, this.rule.postfix), this.values);
    }
    default() {
      return b(this.values.map(ti => v(mt(this.rule.field, this.rule.postfix), ti)));
    }
    get values() {
      if (!Array.isArray(this.rule.value) && void 0 !== this.rule.value) throw new Error("Invalid default value format. Need array or undefined.");
      return "boolean" == typeof this._value ? this.rule.value : this._value;
    }
    terms(ti, fi) {
      return {
        terms: {
          [ti]: fi
        }
      };
    }
  }
  class Ze extends Rt {
    constructor(ti) {
      super(), this.queries = ti;
    }
    convert() {
      return this.queries.length > 0 ? A(this.queries) : void 0;
    }
  }
  class Ee extends Rt {
    constructor(ti, fi) {
      super(), this.rule = ti, this._value = fi;
    }
    convert() {
      if (void 0 !== this._value && !1 !== this._value) return this.range();
    }
    range() {
      switch (this.rule.operator) {
        case ">=":
          return O(mt(this.rule.field, this.rule.postfix), this.value?.start ?? void 0, void 0);
        case "<=":
          return O(mt(this.rule.field, this.rule.postfix), void 0, this.value?.end ?? void 0);
        default:
          return O(mt(this.rule.field, this.rule.postfix), this.value?.start ?? void 0, this.value?.end ?? void 0);
      }
    }
    get value() {
      if ("boolean" == typeof this._value) {
        if (this.rule.value && "object" == typeof this.rule.value && this.valueIsPipeSchema(this.rule.value)) {
          const ti = "start" in this.rule.value ? (0, F.yM)(this.rule.value.start) : null,
            fi = "end" in this.rule.value ? (0, F.yM)(this.rule.value.end) : null;
          return {
            start: (0, ke.Z)(ti) ? ti.valueOf() : null,
            end: (0, ke.Z)(fi) ? fi.valueOf() : null
          };
        }
        if (!this.valueIsPeriod(this.rule.value)) throw new Error("Invalid default value format. Need { start: value, end: value } or undefined.");
        return this.rule.value;
      }
      if (!this.valueIsPeriod(this._value)) throw new Error("Invalid filter value format. Need { start: value, end: value } or undefined.");
      return this._value;
    }
    valueIsPipeSchema(ti) {
      return !!("start" in ti && (0, F.r2)(String(ti.start)) || "end" in ti && (0, F.r2)(String(ti.end)));
    }
    valueIsPeriod(ti) {
      return !!ti.start || !!ti.end;
    }
  }
  function je(ji) {
    if ("object" == typeof ji && ji && "valueKey" in ji && "string" == typeof ji.valueKey) {
      if ("presetValue" in ji && Array.isArray(ji.presetValue)) {
        const ti = ji.presetValue.find(fi => fi.includes("get:"));
        if (ti) return [ji.valueKey, ti].join(":");
      }
      return ji.valueKey;
    }
    return null === ji || "object" != typeof ji ? function Mt(ji) {
      switch (typeof ji) {
        case "undefined":
          return "u";
        case "number":
          return `n${Je(ji)}`;
        case "boolean":
          return "b" + (ji ? 0 : 1);
        case "string":
          return `s${function Xt(ji) {
            let ti = 0;
            for (let fi = 0; fi < ji.length; fi++) ti = (ti << 5) - ti + ji.charCodeAt(fi), ti |= 0;
            return Math.abs(ti).toString(36).slice(0, 4);
          }(ji)}`;
        case "symbol":
          return `sy${ji.toString()}`;
        default:
          throw new Error("Unexpected primitive type: " + typeof ji);
      }
    }(ji) : function Nn(ji) {
      return Array.isArray(ji) ? function Pi(ji) {
        return `a${ji.map(fi => je(fi)).join("")}`;
      }(ji) : ji instanceof Date ? `d${Je(ji.getTime())}` : function Ii(ji) {
        return `o${Object.keys(ji).sort().map(Fi => {
          const Rn = ji[Fi];
          return `${Fi.slice(0, 1)}${je(Rn)}`;
        }).join("")}`;
      }(ji);
    }(ji);
  }
  function Je(ji) {
    return Math.abs(ji).toString(36).slice(0, 4);
  }
  function yi(ji, ti) {
    let fi;
    switch (ji.operator) {
      case "nested":
        fi = new Re(ji, fr(ji.items, ti));
        break;
      case "or":
        fi = new q(fr(ji.items, ti));
        break;
      case "and":
        fi = new st(fr(ji.items, ti));
        break;
      case "not":
        fi = new Ze(fr(ji.items, ti));
        break;
      default:
        fi = function Jo(ji, ti) {
          return void 0 === ji.value && void 0 === ji.valueKey && ["exists", "notExists"].includes(ji.operator) || (0, F.Fo)(ti) ? "staticDate" === ji.operator ? ((0, F.L3)(ti), new ut(ji, new Date(), ti)) : "multiple" === ji.type ? ((0, F.Pm)(ti), new Ke(ji, ti)) : "range" === ji.type ? ((0, F.Z4)(ti), new Ee(ji, ti)) : "date" === ji.type ? ((0, F.ug)(ti), new Ee(ji, function pt(ji) {
            return {
              start: (0, J.Z)(new Date(ji)).valueOf(),
              end: (0, fe.Z)(new Date(ji)).valueOf()
            };
          }(ti))) : ((0, F.kT)(ti), (0, F.L3)(ti), new Me(ji, ti)) : new We();
        }(ji, function co(ji, ti) {
          return ti[je(ji)];
        }(ji, ti));
    }
    return fi.convert();
  }
  function fr(ji, ti) {
    return ji.map(fi => yi(fi, ti)).filter(Boolean);
  }
  function Dt(ji, ti) {
    const fi = new an(ji, ti);
    return function Ht(ji, ti) {
      return ji.map(fi => {
        const Fi = Dn(fi.rule, ti);
        return Fi ? {
          ...fi,
          rule: Fi
        } : null;
      }).filter(fi => null !== fi);
    }(Object.values(ji), fi.values).map(Fi => yi(Fi.rule, fi.values)).filter(Boolean);
  }
  function Dn(ji, ti) {
    if (!ji || "enableIf" in ji && !function vt(ji, ti) {
      if (ji) {
        const fi = new Y.Kj();
        try {
          return "true" === fi.renderSync(fi.parse(`{% if ${ji} %}true{% else %}false{% endif %}`), {
            filter: ti
          });
        } catch (Fi) {
          return console.error("Invalid enableIf rule", Fi), !1;
        }
      }
      return !0;
    }(ji.enableIf, ti)) return null;
    if ("items" in ji) {
      const Fi = ji.items.map(Rn => Dn(Rn, ti)).filter(Rn => null !== Rn);
      return Fi.length > 0 ? {
        ...ji,
        items: Fi
      } : null;
    }
    return ji;
  }
  let an = class {
    constructor(ti, fi) {
      this.filter = fi, this.values = Object.values(ti).reduce((Fi, Rn) => ({
        ...Fi,
        ...this.getValues(Rn.rule)
      }), {
        ...fi
      });
    }
    getValues(ti) {
      return Array.isArray(ti?.items) ? ti.items.reduce((fi, Fi) => ({
        ...fi,
        ...this.getValues(Fi)
      }), {}) : "valueKey" in ti && ti.valueKey || "value" in ti && ti.value ? {
        [je(ti)]: this.getValueForRule(ti)
      } : {};
    }
    getValueForRule(ti) {
      const Fi = (0, F.$3)(ti.valueKey ? this.filter[ti.valueKey] : ti.value, new Date());
      if ((0, F.Fo)(Fi)) return (0, F.s$)((0, F.iJ)(Fi, ti.transformValue, this.filter), ti.presetValue);
    }
  };
  function li(ji, ti, fi) {
    if (ji.every(Rn => !Rn.filterRule)) return Dt(ti, fi);
    const Fi = new zn(ti, fi, ji);
    return Object.values(ti).map(Rn => yi(Rn.rule, Fi.values)).filter(Boolean);
  }
  class zn {
    constructor(ti, fi, Fi) {
      this.filter = fi, this.widgets = Fi, this.values = Object.values(ti).reduce((Rn, ki) => ({
        ...Rn,
        ...this.getValues(ki.rule)
      }), {});
    }
    getValues(ti) {
      if (Array.isArray(ti?.items)) return ti.items.reduce((fi, Fi) => ({
        ...fi,
        ...this.getValues(Fi)
      }), {});
      if (ti.valueKey) return {
        [ti.valueKey]: this.getValueForRule(ti)
      };
      throw new Error("Invalid rule");
    }
    getValueForRule(ti) {
      const fi = this.getWidgetForRule(ti);
      if (!fi) return;
      const Fi = (0, F.B8)(this.filter, fi, new Date());
      return (0, F.Fo)(Fi) ? (0, F.s$)((0, F.iJ)(Fi, ti.transformValue, this.filter), ti.presetValue) : void 0;
    }
    getWidgetForRule(ti) {
      return this.widgets.find(fi => fi.field === ti.valueKey);
    }
  }
  class $t extends h {
    constructor(ti, fi) {
      super();
      const Fi = this.getAvailableWidgetsForQuery(fi);
      this.getRulesForAggregateTotalItems(fi).forEach(Rn => {
        "type" in Rn ? this.setRecord(ti, Rn, fi, Fi) : this.setOldRecord(ti, Rn, fi, Fi);
      });
    }
    setRecord(ti, fi, Fi, Rn) {
      let ki = ti.filter;
      "static" === fi.type && (ki = ti.initialFilter), "mixed" === fi.type && (ki = this.addQueryToInitialByValueKeys(Fi, fi.rules, ti.filter, ti.initialFilter));
      let Ei = Fi.filterRules;
      Array.isArray(fi.rules) && fi.rules.length > 0 && (Ei = this.clearEnableIfInRuleByRuleKey(fi.rules, Fi.filterRules)), this.countRecords(fi.key, b(li(Rn, Ei, ki)));
    }
    addQueryToInitialByValueKeys(ti, fi, Fi, Rn) {
      const ki = {
        ...Rn
      };
      return fi.forEach(Ei => {
        this.getAllValueKeys(ti.filterRules[Ei].rule).forEach(Oi => {
          Oi in Fi && (ki[Oi] = Fi[Oi]);
        });
      }), ki;
    }
    clearEnableIfInRuleByRuleKey(ti, fi) {
      const Fi = {};
      return Object.keys(fi).forEach(Rn => {
        Fi[Rn] = ti.includes(Rn) ? {
          ...fi[Rn],
          rule: this.clearEnableIfInRule({
            ...fi[Rn].rule
          })
        } : fi[Rn];
      }), Fi;
    }
    clearEnableIfInRule(ti) {
      if ("enableIf" in ti) {
        const {
          enableIf: fi,
          ...Fi
        } = ti;
        return Fi;
      }
      return "items" in ti ? {
        ...ti,
        items: ti.items.map(fi => this.clearEnableIfInRule({
          ...fi
        }))
      } : ti;
    }
    getAvailableWidgetsForQuery(ti) {
      return Object.values(ti.widgets).filter(fi => "query" === fi.action);
    }
    getRulesForAggregateTotalItems(ti) {
      return Object.keys(ti.datasource.aggregateTotalByRules).map(fi => {
        const Fi = ti.datasource.aggregateTotalByRules[fi];
        return Fi.root ? Fi.excludeAll ? {
          key: fi,
          ...Fi,
          rootWidgets: Fi.root,
          excludeRulesKey: this.filterWidgetFieldsExcludingRoot(Fi.root, this.getAllWidgetFields(ti))
        } : {
          key: fi,
          ...Fi,
          rootWidgets: Fi.root,
          excludeRulesKey: Fi.excludeWidgets ?? []
        } : {
          key: fi,
          ...Fi
        };
      });
    }
    getAllValueKeys(ti) {
      return "items" in ti ? ti.items.map(fi => this.getAllValueKeys(fi)).reduce((fi, Fi) => [...fi, ...Fi], []) : "valueKey" in ti && ti.valueKey ? [ti.valueKey] : [];
    }
    setOldRecord(ti, fi, Fi, Rn) {
      const ki = this.getFiltersByRuleKeys(Rn, fi.excludeRulesKey ?? []),
        Ei = this.getFiltersByRuleKeys(Rn, fi.rootWidgets ?? []);
      this.countRecords(fi.key, b(li(Rn, Fi.filterRules, {
        ...this.clearFilter(ti.filter, ki),
        ...this.requiredFilter(ti.filter, Ei)
      })));
    }
    clearFilter(ti, fi) {
      const Fi = fi.map(Rn => Rn.field);
      return Object.keys(ti).reduce((Rn, ki) => Fi.includes(ki) ? Rn : {
        ...Rn,
        [ki]: ti[ki]
      }, {});
    }
    requiredFilter(ti, fi) {
      return fi.reduce((Fi, Rn) => ({
        ...Fi,
        [Rn.field]: ti[Rn.field] || !0
      }), {});
    }
    getFiltersByRuleKeys(ti, fi) {
      return ti.filter(Fi => "query" === Fi.action && "field" in Fi && fi.includes(Fi.field));
    }
    filterWidgetFieldsExcludingRoot(ti, fi) {
      return fi.filter(Fi => !ti.includes(Fi));
    }
    getAllWidgetFields(ti) {
      return Object.values(ti.widgets).map(fi => fi?.field).filter(fi => !!fi);
    }
  }
  function Qn(ji, ti) {
    const fi = (ti.filter ?? []).find(Fi => ji.substring(0, Fi.nestedPath.length) === Fi.nestedPath);
    return fi ? fi.withFilter : [];
  }
  class In extends h {
    constructor(ti, fi) {
      super(), this.req = ti, this.config = fi;
      const Fi = Object.values(fi.widgets).filter(Rn => "query" === Rn.action);
      this.paging(ti.paging.pageIndex, ti.paging.size), ti.sort && this.sort([...this.createStaticSort(fi.datasource.sorting), ...this.createSort(fi.datasource.sorting, ti.sort)]), fi.datasource.runTimeFields && fi.datasource.runTimeFields.length > 0 && this.runtimeFields(fi.datasource.runTimeFields), this.trackTotalHits(!0), this.query(b(li(Fi, fi.filterRules, ti.filter)));
    }
    createStaticSort(ti) {
      return (ti.staticSort ?? []).map(fi => {
        const Fi = Qn(fi.field, ti).map(Rn => this.getWidgetByField(Rn));
        return {
          field: fi.field,
          order: fi.direction === e.ASC ? e.ASC : e.DESC,
          nested: Fi.length > 0 ? this.getSortNestedParam(Fi) : this.getNestedIfNestedField(fi.field)
        };
      });
    }
    createSort(ti, fi) {
      return function Mn(ji, ti) {
        if (!ji.includeSortKeys.includes(ti.field) || !ji.sortingOptions[ti.field]) throw new Error(`Field ${ti.field} not included for sorting`);
        return (Array.isArray(ji.sortingOptions[ti.field]) ? ji.sortingOptions[ti.field] : [ji.sortingOptions[ti.field]]).map(Fi => Fi.order ? Fi : Fi.inverseSortOrder ? {
          ...Fi,
          order: ti.direction === e.DESC ? e.ASC : e.DESC
        } : {
          ...Fi,
          order: ti.direction === e.DESC ? e.DESC : e.ASC
        });
      }(ti, fi).map(Rn => {
        const ki = Qn(Rn.path, ti).map(Ei => this.getWidgetByField(Ei));
        return {
          field: Rn.path,
          order: Rn.order,
          nested: ki.length > 0 ? this.getSortNestedParam(ki) : this.getNestedIfNestedField(Rn.path),
          missing: this.getSortMissing(Rn)
        };
      });
    }
    getWidgetByField(ti) {
      return Object.values(this.config.widgets).find(fi => "field" in fi && fi.field === ti);
    }
    getSortNestedParam(ti) {
      const fi = li(ti, this.config.filterRules, {
        ...ti.reduce((Fi, Rn) => ({
          ...Fi,
          [Rn.field]: !0
        }), {}),
        ...this.req.filter
      })[0];
      if (fi.nested) {
        const {
          path: Fi,
          query: Rn
        } = fi.nested;
        return {
          path: Fi,
          filter: Rn
        };
      }
      throw new Error("Filter query is not nested");
    }
    getNestedIfNestedField(ti) {
      const fi = Object.values(this.config.filterRules).filter(Rn => "nested" === Rn.rule.operator);
      let Fi;
      return fi.length > 0 && fi.forEach(Rn => {
        "nestedPath" in Rn.rule && ti.includes(Rn.rule.nestedPath) && (Fi = {
          path: Rn.rule.nestedPath
        });
      }), Fi;
    }
    getSortMissing(ti) {
      return ti.order === e.ASC ? ti.emptyIsLowest ? "_first" : ti.emptyIsHighest ? "_last" : void 0 : ti.order === e.DESC ? ti.emptyIsHighest ? "_first" : ti.emptyIsLowest ? "_last" : void 0 : void 0;
    }
  }
  function bi(ji) {
    return "nested" === ji.operator ? [ji.nestedPath] : "items" in ji ? ji.items.reduce((ti, fi) => [...ti, ...bi(fi)], []) : [];
  }
  class qn extends h {
    constructor(ti, fi) {
      super(), this.paging(0, 0), fi.datasource.runTimeFields && fi.datasource.runTimeFields.length > 0 && this.runtimeFields(fi.datasource.runTimeFields), this.setTerms(fi.datasource, fi.filterRules);
      const Fi = this.getIncludedFilters(ti, fi);
      this.query(b(li(this.getInitialWidgetsForQuery(fi), fi.filterRules, Fi)));
    }
    getIncludedFilters(ti, fi) {
      const Fi = this.getAggregateFilters(fi, "excluded"),
        Rn = this.getAggregateFilters(fi, "included");
      return Object.keys(ti.initialFilter).filter(ki => !Fi.includes(ki)).reduce((ki, Ei) => (ki[Ei] = Rn.includes(Ei) ? ti.filter[Ei] : ti.initialFilter[Ei], ki), {});
    }
    getInitialWidgetsForQuery(ti) {
      return (ti.layouts ?? []).filter(fi => "initial" === fi.layout).map(fi => ti.widgets[fi.widget]).filter(fi => "query" === fi.action);
    }
    setTerms(ti, fi) {
      Object.keys(ti.terminologies).filter(Fi => ti.terminologies[Fi]?.aggregateTo).forEach(Fi => this.setAggregation(Fi, fi, ti.terminologies[Fi]?.aggregateTo));
    }
    setAggregation(ti, fi, Fi) {
      if (Fi && Object.keys(Fi).length > 0) {
        const Rn = function ui(ji, ti) {
          return function To(ji) {
            return Object.values(ji).reduce((ti, fi) => [...ti, ...bi(fi.rule)], []);
          }(ji).find(Fi => ti.startsWith(Fi));
        }(fi, Fi[Object.keys(Fi)[0]] ?? "");
        this.aggregation(ti, Rn ? {
          nested: {
            path: Rn
          },
          aggs: {
            termKey: {
              composite: {
                size: 500,
                sources: Object.keys(Fi).map(ki => ({
                  [ki]: {
                    terms: {
                      field: Fi[ki]
                    }
                  }
                }))
              }
            }
          }
        } : {
          composite: {
            size: 500,
            sources: Object.keys(Fi).map(ki => ({
              [ki]: {
                terms: {
                  field: Fi[ki]
                }
              }
            }))
          }
        });
      }
    }
    getAggregateFilters(ti, fi) {
      const Fi = "excluded" === fi ? "excludedFiltersByAggregate" : "includeQueryParamsByAggregate";
      return Object.keys(ti.datasource.terminologies).reduce((Rn, ki) => {
        const Ei = ti.datasource.terminologies[ki];
        return Array.isArray(Ei[Fi]) ? [...Rn, ...(Ei[Fi] ?? [])] : Rn;
      }, []);
    }
  }
  function Xn(ji) {
    return Object.keys(ji).reduce((fi, Fi) => {
      const ki = (0, G.j)({
          path: "$..buckets[*]",
          json: ji[Fi]
        }),
        [, Ei] = Fi.split("#");
      return {
        ...fi,
        [Ei]: ki.map(Wt => Wt.key)
      };
    }, {});
  }
  function Yi(ji, ti) {
    return (ji?.hits?.hits || []).map(fi => {
      let Fi = fi._source;
      return fi.fields && (Fi = function Yo(ji, ti) {
        const fi = {
            ...ji
          },
          Fi = [];
        if (Object.keys(ti).forEach(Rn => {
          Rn in ji ? Fi.push(`Source already contains ${Rn}`) : fi[Rn] = ti[Rn];
        }), Fi.length > 0) throw Fi.forEach(Rn => {
          console.error(Rn);
        }), Error("Error when compare runtimeFields with source object");
        return fi;
      }(Fi, fi.fields)), fi.inner_hits && ti ? function Eo(ji, ti) {
        let fi = (0, te.Xh)(ji);
        return Object.keys(ti).forEach(Fi => {
          const ki = (0, G.j)({
            path: Fi,
            json: ji
          })[0].filter(Ei => ti[Fi].hits.hits.some(Wt => Wt.fields && function Fo(ji, ti) {
            return Object.keys(ji).every(fi => {
              const Fi = function Pr(ji) {
                return ji.split(".").filter(ti => "keyword" !== ti).pop() || "";
              }(fi);
              return ji[fi].some(Rn => function br(ji, ti) {
                return qo(ji) && qo(ti) ? (0, ye.Z)(new Date(ji), new Date(ti)) : ji === ti;
              }(Rn, ti[Fi]));
            });
          }(Wt.fields, Ei)));
          fi = (0, te.lv)(ji, `${Fi}`, ki);
        }), fi;
      }(Fi, fi.inner_hits) : Fi;
    });
  }
  function qo(ji) {
    return !("string" != typeof ji || !/\d\d\d\d-\d\d-\d\d/g.test(ji)) && (0, ae.Z)(Date.parse(ji));
  }
  function wr(ji) {
    const ti = {};
    return Object.keys(ji.aggregations).forEach(fi => {
      if (fi.includes("filter#")) {
        const [, Fi] = fi.split("#");
        ti[Fi] = ji.aggregations[fi].doc_count;
      }
    }), ti;
  }
  function oo(ji) {
    return ji.hits.total.value;
  }
  function Di(ji) {
    return Object.keys(ji.datasource.terminologies || {}).filter(ti => !!ji.datasource.terminologies[ti].aggregateTo).length > 0;
  }
  function Ci(ji, ti) {
    return Object.keys(ji.datasource.terminologies).reduce((Fi, Rn) => {
      const Ei = ji.datasource.terminologies[Rn];
      return {
        ...Fi,
        [Rn]: [...(Ei.emptyValue ? [Ei.emptyValue] : []), ...(Ei.static ?? []), ...(ti && ti[Rn] ? ti[Rn] : [])]
      };
    }, {});
  }
  function lo(ji) {
    return `${ji.datasource.apiSettings.path}/${encodeURIComponent(String(ji.datasource.apiSettings.indexName))}`;
  }
  let jo = (() => {
      class ji {
        constructor(fi, Fi) {
          this.configService = fi, this.apiService = Fi;
        }
        getConfig(fi) {
          return this.configService.getConfig(fi);
        }
        getList(fi, Fi) {
          const Rn = lo(Fi);
          return (0, n.D)({
            response: this.getIndexListWithCheckForEmptyQuery(Rn, new In(fi, Fi).build()),
            totals: this.getIndexListWithCheckForEmptyQuery(Rn, new $t(fi, Fi).build()),
            terms: Di(Fi) ? this.getIndexListWithCheckForEmptyQuery(Rn, new qn(fi, Fi).build()) : (0, Se.of)(void 0)
          }).pipe((0, qe.U)(({
            response: ki,
            totals: Ei,
            terms: Wt
          }) => ({
            total: ki ? oo(ki) : 0,
            items: ki ? Yi(ki, this.onlyNestedItemsMatchFilters(Fi)) : [],
            totals: Ei ? wr(Ei) : {
              all: 0
            },
            aggregation: Ci(Fi, Wt?.aggregations ? Xn(Wt.aggregations) : void 0)
          })));
        }
        onlyNestedItemsMatchFilters(fi) {
          return fi.datasource.onlyNestedItemsMatchFilters ?? !0;
        }
        getIndexListWithCheckForEmptyQuery(fi, Fi) {
          return this.queryIsEmpty(Fi) ? (0, Se.of)(void 0) : this.getIndexList(fi, Fi);
        }
        getIndexList(fi, Fi) {
          return this.apiService.post(fi, {
            searchParams: {
              body: JSON.parse(Fi)
            }
          }).pipe((0, qe.U)(Rn => Rn));
        }
        queryIsEmpty(fi) {
          return "{\"size\":0,\"track_total_hits\":false,\"query\":{\"bool\":{\"must\":[]}}}" === fi;
        }
      }
      return ji.ɵfac = function (fi) {
        return new (fi || ji)(pe.LFG(le.Kd), pe.LFG(be.sM));
      }, ji.ɵprov = pe.Yz7({
        token: ji,
        factory: ji.ɵfac
      }), ji;
    })(),
    Go = (() => {
      class ji {}
      return ji.ɵfac = function (fi) {
        return new (fi || ji)();
      }, ji.ɵmod = pe.oAB({
        type: ji
      }), ji.ɵinj = pe.cJS({
        providers: [be.sM, {
          provide: be.xI,
          useClass: jo
        }]
      }), ji;
    })();
});
