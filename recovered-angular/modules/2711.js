// Extracted from main; webpack module 2711. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    I3: () => j,
    Pj: () => Y,
    RO: () => te,
    Zy: () => T,
    ht: () => fe,
    tI: () => u,
    u1: () => le
  });
  var t = i(89653),
    e = i(94650),
    a = i(80529),
    m = i(20733),
    d = i(44726),
    M = i(19700),
    b = i(15903),
    A = i(15635),
    N = i(8699),
    I = i(24280),
    O = i(60515),
    L = i(39646),
    C = i(63900),
    v = i(95698),
    f = i(18505),
    E = i(70262),
    h = i(54004);
  const x = (0, t.PH)("[Universal List Cache] Set Cache", (0, t.Ky)()),
    u = (0, t.PH)("[Universal List Cache] Update Cache", (0, t.Ky)()),
    T = (0, t.PH)("[UniversalList Cache] Set List Configs", (0, t.Ky)()),
    B = "universalListCache",
    y = (0, t.ZF)(B),
    j = Et => (0, t.P1)(y, Ue => Ue ? Ue[Et] : void 0),
    F = (0, t.Lq)({}, (0, t.on)(x, (Et, {
      listName: Ue,
      cache: Me
    }) => function ke(Et, Ue, Me) {
      return {
        ...Me,
        [Et]: Ue
      };
    }(Ue, Me, Et)), (0, t.on)(u, (Et, {
      listName: Ue,
      cache: Me
    }) => function Le(Et, Ue, Me) {
      return {
        ...Me,
        [Et]: {
          config: Ue.config ?? Me[Et]?.config,
          queryParams: Ue.queryParams ?? Me[Et]?.queryParams,
          sort: Ue.sort ?? Me[Et]?.sort,
          update: Ue.update ?? Me[Et]?.update
        }
      };
    }(Ue, Me, Et)), (0, t.on)(T, (Et, {
      configs: Ue
    }) => function J(Et, Ue) {
      return {
        ...Ue,
        ...Et.reduce((Me, Ke) => ({
          ...Me,
          [Ke.listName]: Ue[Ke.listName] ?? {
            config: {
              status: "SUCCESS",
              data: Ke.config
            },
            update: new Date().toISOString()
          }
        }), {})
      };
    }(Ue, Et)));
  let fe = (() => {
    class Et {}
    return Et.ɵfac = function (Me) {
      return new (Me || Et)();
    }, Et.ɵmod = e.oAB({
      type: Et
    }), Et.ɵinj = e.cJS({
      imports: [t.Aw.forFeature(B, F)]
    }), Et;
  })();
  const ae = {
    listName: "",
    initialParams: {},
    queryParams: {},
    groupingParams: {},
    config: {
      status: "INITIAL",
      error: void 0,
      data: void 0
    },
    list: {
      status: "INITIAL",
      error: void 0,
      data: void 0
    },
    excludeActions: [],
    excludeParts: {},
    sort: void 0,
    historyRunningActions: [],
    paging: {
      pageIndex: 0,
      size: 0
    },
    tableContext: {
      selectedRowTechId: null
    }
  };
  class Y {
    constructor(Ue) {
      this.state = Ue;
    }
    getLoadParams(Ue) {
      return this.state.config.data ? {
        ...Ue,
        queryParams: {
          ...Y.updateParamsByConfig(this.state.config.data, Ue, this.state.list.data?.aggregation)
        }
      } : Ue;
    }
    static setResponseInStateItem(Ue) {
      return Ue instanceof a.UA || Ue instanceof Error ? {
        status: "FAILURE",
        data: void 0,
        error: Ue
      } : {
        status: "SUCCESS",
        data: Ue,
        error: void 0
      };
    }
    static updateStateDataWithListResponse(Ue, Me, Ke) {
      const Ze = (0, M.s1)(Ue.config.data)?.usePaginator ?? !1,
        Ee = Ue.list,
        je = (0, d.Yh)(Me.aggregation) ? Me.aggregation : Ee.data?.aggregation;
      return {
        status: "SUCCESS",
        data: {
          ...Me,
          items: 0 === Ke || Ze ? [...(Me.items || [])] : [...(Ee.data?.items ?? []), ...(Me.items ?? [])],
          aggregation: je
        },
        error: void 0
      };
    }
    static updateStateWithSilentReloadResponse(Ue, Me) {
      const Ke = Ue?.list,
        {
          items: Ze
        } = function ye(Et, Ue, Me) {
          const Ke = (0, b.lF)(Et),
            Ze = new Set(Ue.map(Je => Ke(Je))),
            Ee = new Map(),
            je = new Map();
          for (const Je of Me.keys()) {
            const Xt = Me[Je],
              Nn = Ke(Xt);
            Ee.set(Nn, Xt), Ze.has(Nn) || je.set(Nn, Je);
          }
          return {
            items: Ue.map(Je => {
              const Xt = Ee.get(Ke(Je));
              return Xt && !(0, m.vZ)(Xt, Je) ? {
                ...Xt,
                _updated_row: !0
              } : Je;
            }).filter(Je => Ee.has(Ke(Je))),
            inconsistentData: je.size > 1
          };
        }(Ue.config.data?.datasource.uniqueKeyPipe ?? "", Ke.data?.items ?? [], Me.items);
      return {
        ...Ke,
        data: {
          ...Ke.data,
          items: Ze,
          total: Me.total,
          totals: Me.totals,
          aggregation: Me.aggregation ?? Ke.data?.aggregation
        },
        error: void 0
      };
    }
    static clearTechnicalInfoInItems(Ue) {
      const Me = Ue?.list;
      return {
        ...Me,
        data: {
          ...Me.data,
          items: (Me.data?.items ?? []).map(Ke => {
            const {
              _created_row: Ze,
              _updated_row: Ee,
              ...je
            } = Ke;
            return je;
          })
        }
      };
    }
    static convertConfigResponseToBaseSortingAndPaging(Ue) {
      return this.hasError(Ue) ? {
        sort: ae.sort,
        paging: ae.paging
      } : {
        sort: {
          field: Ue.datasource.sorting.initSortKey,
          direction: Ue.datasource.sorting.initSortDirection
        },
        paging: {
          size: Ue.datasource.paging.pageSize,
          pageIndex: 0
        }
      };
    }
    static convertConfigResponseToInitialParams(Ue, Me) {
      if (this.hasError(Ue)) return {};
      let Ke = {};
      return Object.keys(Ue.widgets).filter(Ze => ["query"].includes(Ue.widgets[Ze].action)).forEach(Ze => {
        Ke = {
          ...Ke,
          ...this.getQueryParamForSetting(Ue.widgets[Ze], !1, Me)
        };
      }), Ke;
    }
    static convertConfigResponseToQueryParams(Ue, Me) {
      if (this.hasError(Ue)) return {};
      let Ke = {};
      return Object.keys(Ue.widgets).filter(Ze => ["query"].includes(Ue.widgets[Ze].action)).forEach(Ze => {
        Ke = {
          ...Ke,
          ...this.getQueryParamForSetting(Ue.widgets[Ze], !0, Me)
        };
      }), Ke;
    }
    static updateParamsByConfig(Ue, Me, Ke) {
      return {
        ...this.convertConfigResponseToQueryParams(Ue, Ke),
        ...(Me?.initialParams || {}),
        ...Me.queryParams
      };
    }
    static getQueryParamForSetting(Ue, Me, Ke) {
      const Ze = Ue.options?.presetValue;
      if (Me && Ze && (0, m.hQ)(Ze)) return {
        [Ue.field]: Ze
      };
      switch (Ue.type) {
        case "chip.checkbox":
        case "input.checkbox":
        case "chip.single-radio":
          return {
            [Ue.field]: !1
          };
        case "input.date-period":
        case "input.range":
          return {
            [Ue.field]: {
              start: null,
              end: null
            }
          };
        case "input.checkbox-group":
        case "chip.multi":
        case "input.multiple-select":
          return {
            [Ue.field]: []
          };
        case "input.select":
        case "chip.select":
          return Ke && Ue.terminology?.datasource && Ke[Ue.terminology.datasource] ? {
            [Ue.field]: this.getTerminologyItemWithNullCode(Ke[Ue.terminology.datasource])
          } : {
            [Ue.field]: null
          };
        default:
          return {
            [Ue.field]: null
          };
      }
    }
    static getTerminologyItemWithNullCode(Ue) {
      return Ue.find(Me => null === Me.code) ?? null;
    }
    static updateParams(Ue, Me) {
      let Ke = {};
      return Me && (Ke = Y.convertConfigResponseToInitialParams(Me, void 0)), {
        ...Ue,
        initialParams: {
          ...Ke,
          ...Ue.initialParams
        },
        queryParams: {
          ...Ke,
          ...Ue.initialParams,
          ...Ue.queryParams
        },
        ...(Ue.groupingParams ? {
          groupingParams: Ue.groupingParams
        } : {})
      };
    }
    static hasError(Ue) {
      return Ue instanceof a.UA || Ue instanceof Error;
    }
  }
  function G(Et) {
    return Object.keys(Et).reduce((Ue, Me) => {
      const Ke = Et[Me];
      return Ue[Me] = "string" == typeof Ke && (0, m.r2)(Ke) ? (0, m.yM)(Ke) : "object" != typeof Ke || null === Ke || (0, A.kJ)(Ke) ? Ke : G(Ke), Ue;
    }, {});
  }
  class te {
    constructor(Ue) {
      this.state = Ue;
    }
    getStaticTerminology() {
      return this.state.list.data?.aggregation ?? {};
    }
    getQuickFilterTotals() {
      return this.state.list?.data?.totals ?? {
        all: 0
      };
    }
    getTerminologyByControl(Ue) {
      if (Ue.terminology?.datasource) {
        const Me = this.state.config.data?.datasource.terminologies[Ue.terminology?.datasource],
          Ke = Ue.terminology?.howDisplayTerminologyItem;
        if (Me) return Me.fromTerminologyModule ? {
          fromModule: {
            name: Me.fromTerminologyModule.name,
            uniqueId: Me.fromTerminologyModule.key,
            withPaging: Me.fromTerminologyModule.withPaging
          },
          howDisplayTerminologyItem: Ke
        } : {
          fromStatic: {
            name: Ue.terminology.datasource,
            items: this.getTerminologyByDataSource(Ue.terminology?.datasource)
          },
          howDisplayTerminologyItem: Ke
        };
      }
      return {};
    }
    getTerminologyByDataSource(Ue) {
      if (!Ue) return [];
      const Me = this.state.excludeParts.excludeGroupItems || [],
        Ke = this.getStaticTerminology()[Ue] || [];
      return 0 === Me.length ? Ke : Ke.filter(Ze => !Me.includes(Ze.display));
    }
    getGroupingInfo() {
      if (this.state.config.data) {
        const Ue = this.getGroupingFields().find(Me => !0 === this.state.groupingParams?.[Me.field]);
        if (Ue && Ue.groupByRule) {
          const Me = this.getGroupRuleByWidgetField(Ue.groupByRule);
          if (!Me) throw new Error("For widget setting not found groupByRule");
          return {
            rule: Me,
            terminology: this.getTerminologyByDataSource(Me.groupingOptions.terminologyDataSource)
          };
        }
      }
    }
    getGroupingFields() {
      return Object.values(this.getAvailableWidgets()).filter(Ue => "groupBy" === Ue.action);
    }
    getAvailableWidgets() {
      return this.state.config?.data?.widgets ?? {};
    }
    getAllView() {
      return this.state.config?.data?.view ?? [];
    }
    getSettingByRenderInLayout(Ue) {
      return this.getWidgetSettingByLayouts([Ue]).filter(Me => void 0 === Me.action || ["event", "query", "groupBy", "preset", "static"].includes(Me.action));
    }
    getWidgetsByLayout(Ue) {
      return this.getSettingByRenderInLayout(Ue).map(Me => this.convertSettingToWidget(Me));
    }
    getWidgetsKeysByLayout(Ue) {
      return this.getViewLayoutsByLayouts([Ue]).map(Me => Me.widget);
    }
    convertSettingToWidget(Ue) {
      return "event" === Ue.action ? this.convertSettingToEventWidget(Ue) : "static" === Ue.action || void 0 === Ue.action ? this.convertSettingToStaticWidget(Ue) : this.convertSettingToControlWidget(Ue);
    }
    getAllWidgets() {
      return this.getWidgetSettings().map(Ue => this.convertSettingToWidget(Ue));
    }
    getAllWidgetsMap() {
      const Ue = this.getAvailableWidgets();
      return Object.keys(Ue).reduce((Me, Ke) => ({
        ...Me,
        [Ke]: this.convertSettingToWidget(Ue[Ke])
      }), {});
    }
    getWidgetByName(Ue) {
      return this.getAvailableWidgets()[Ue];
    }
    convertSettingToControlWidget(Ue) {
      return {
        label: Ue.label,
        type: Ue.type,
        data: {
          terminology: this.getTerminologyByControl(Ue),
          placeholder: Ue.placeholder,
          postfixText: this.getPostfixTextForWidgetSetting(Ue),
          widgetTotals: this.getPostfixTextsForWidgetSetting(Ue),
          clearOption: Ue.options?.clearOption,
          canDeselect: Ue.options?.canDeselect,
          itemsOrientation: Ue.options?.itemsOrientation,
          radioGroupName: Ue.options?.radioGroupName,
          templates: this.convertTemplates(Ue.templates || []),
          iconData: Ue.options?.iconData,
          debounce: Ue.options?.debounce,
          width: Ue.options?.width,
          text: Ue.options?.text,
          tooltip: Ue.options?.tooltip,
          rangeDisplayOptions: Ue.options?.rangeDisplayOptions,
          uncheckable: "boolean" == typeof Ue.options?.uncheckable ? Ue.options?.uncheckable : "preset" !== Ue.action
        },
        formGroupField: this.getFormGroupFieldForWidgetSetting(Ue),
        isHidden: this.hasHideRule(Ue)
      };
    }
    convertTemplates(Ue) {
      return Ue.map(Me => ({
        title: Me.title,
        value: (0, m.B7)(Me)
      }));
    }
    convertSettingToEventWidget(Ue) {
      return {
        event: Ue.options.event,
        type: Ue.type,
        data: {
          tooltip: Ue.options.tooltip,
          btnSetting: Ue.options
        },
        dataForAction: this.getDataForAction(Ue),
        isHidden: this.hasHideRule(Ue)
      };
    }
    getDataForAction(Ue) {
      return Ue.dataForAction ? Ue.dataForAction : Ue.options?.event.includes(M.wZ) ? this.getQFFilterParams(Ue) : void 0;
    }
    convertSettingToStaticWidget(Ue) {
      return {
        type: Ue.type,
        data: {
          text: this.getPostfixTextForStaticWidgetSetting(Ue)
        },
        options: Ue.options,
        isHidden: this.hasHideRule(Ue)
      };
    }
    getPostfixTextForStaticWidgetSetting(Ue) {
      const Me = this.normalizeTotalFrom(Ue.totalFrom);
      if (Me.length > 0) {
        const Ke = this.getQuickFilterTotals(),
          Ze = Me.reduce((Ee, je) => Ee + (Ke[je] ?? 0), 0);
        return Ze ? String(Ze) : "0";
      }
      if (Ue.options && "text" in Ue.options) return Ue.options.text;
    }
    getPostfixTextsForWidgetSetting(Ue) {
      const Me = this.normalizeTotalFrom(Ue.totalFrom);
      if (0 === Me.length) return;
      const Ke = this.getQuickFilterTotals();
      return Me.reduce((Ze, Ee) => (Ze[Ee] = String(Ke[Ee] ?? 0), Ze), {});
    }
    getPostfixTextForWidgetSetting(Ue) {
      if (Ue.options && "postfixText" in Ue.options) return Ue.options.postfixText;
    }
    getFormGroupFieldForWidgetSetting(Ue) {
      const Me = this.normalizeTotalFrom(Ue.totalFrom),
        Ke = this.getQuickFilterTotals(),
        Ze = Me.reduce((Mt, Je) => Mt + (Ke[Je] ?? 0), 0),
        Ee = this.getControlWidgetOptions(Ue),
        je = this.getValueForWidgetControl({
          ...Ue,
          options: Ee
        });
      return {
        disabled: this.hasDisabled(Ue) || !!Ue.totalFrom && 0 === Ze && !0 !== je,
        field: Ue.field,
        value: je,
        initialValue: "groupBy" !== Ue.action ? this.getFormGroupFieldInitialValue(Ue.field) : this.getFormGroupFieldGroupValue(Ue.field),
        type: this.getFormGroupTypeByWidget(Ue),
        options: Ee,
        sourcesName: Ue.options?.sources,
        disableRule: Ue.disableRule
      };
    }
    getValueForWidgetControl(Ue) {
      switch (Ue.action) {
        case "groupBy":
          return this.getFormGroupFieldGroupValue(Ue.field);
        case "preset":
          return this.getFormGroupPresetFieldValue(Ue);
        default:
          return this.getFormGroupFieldValue(Ue.field);
      }
    }
    getControlWidgetOptions(Ue) {
      const Me = Ue.options;
      if (Me?.filter) {
        const Ke = Me?.filter;
        return {
          ...Ue.options,
          filter: {
            ...Y.convertConfigResponseToInitialParams(this.state.config.data, this.state.list.data?.aggregation),
            ...(Me.filterFromInitialParams ? this.state.initialParams : {}),
            ...G(Ke),
            ...this.replaceCurrentValuesInPresetFilter(Ke)
          }
        };
      }
      if (Ue.options?.validation) {
        const Ke = Ue.options?.validation;
        return {
          ...Ue.options,
          validation: {
            ...Object.keys(Ke).reduce((Ze, Ee) => ({
              ...Ze,
              [Ee]: "string" == typeof Ke[Ee] ? (0, m.B7)({
                title: "временный заголовок, до переработки fillTemplateConverter",
                value: Ke[Ee]
              }) : Ke[Ee]
            }), {})
          }
        };
      }
      return Me?.filterFromInitialParams ? {
        ...Ue.options,
        filter: this.state.initialParams
      } : Ue.options;
    }
    replaceCurrentValuesInPresetFilter(Ue) {
      return Object.keys(Ue).filter(Me => "{{current}}" === Ue[Me]).reduce((Me, Ke) => ({
        ...Me,
        [Ke]: this.state.queryParams[Ke]
      }), {});
    }
    hasDisabled(Ue) {
      return !!Ue.disableRule && (0, d.S7)(Ue.disableRule, {
        filter: this.state.queryParams,
        formValue: this.state.queryParams
      });
    }
    hasHideRule(Ue) {
      return !!Ue.hideRule && (0, d.mq)(Ue.hideRule, {
        filter: this.state.queryParams,
        group: this.state.groupingParams ?? {},
        isDirtyPanel: this.getIsDirtyQFPanel(Ue)
      });
    }
    getViewLayoutsByLayouts(Ue) {
      return this.allLayouts.filter(Me => !this.state.excludeParts.excludeWidgets?.includes(Me.widget) && Ue.includes(Me.layout));
    }
    getWidgetSettingByLayouts(Ue) {
      const Me = this.getAvailableWidgets();
      return this.getViewLayoutsByLayouts(Ue).map(Ke => {
        const Ze = Me[Ke.widget];
        if (!Ze) throw new Error(`Widget not found - ${Ke.widget}`);
        return Ze;
      });
    }
    getWidgetSettings() {
      const Ue = this.getAvailableWidgets();
      return this.allLayouts.filter(Me => !this.state.excludeParts.excludeWidgets?.includes(Me.widget)).map(Me => {
        const Ke = Ue[Me.widget];
        if (!Ke) throw new Error(`Widget not found - ${Me.widget}`);
        return Ke;
      });
    }
    get isApplyFilter() {
      return !(0, m.vZ)(this.state.queryParams, this.state.initialParams);
    }
    getFilterQueryRules() {
      return this.state.config.data?.filterRules ?? {};
    }
    getGroupingRules() {
      return this.state.config.data?.groupingRules ?? {};
    }
    getFilterRuleByWidgetField(Ue) {
      const Me = Ke => "valueKey" in Ke ? Ke.valueKey === Ue : "items" in Ke && Ke.items.some(Ze => Me(Ze));
      return Object.values(this.getFilterQueryRules()).find(Ke => Me(Ke.rule));
    }
    getGroupRuleByWidgetField(Ue) {
      return this.getGroupingRules()[Ue];
    }
    getFormGroupFieldValue(Ue) {
      return this.state.queryParams[Ue];
    }
    getFormGroupPresetFieldValue(Ue) {
      return (0, m.vZ)(Ue.options?.filter, this.state.queryParams);
    }
    getFormGroupFieldInitialValue(Ue) {
      return this.state.initialParams[Ue];
    }
    getFormGroupFieldGroupValue(Ue) {
      if (this.state.groupingParams) return this.state.groupingParams[Ue];
    }
    getFormGroupTypeByWidget(Ue) {
      switch (Ue.action) {
        case "query":
        case "queryPostProcessing":
          return "filter";
        case "groupBy":
          return "group";
        case "event":
          return "event";
        case "preset":
          return "preset";
        default:
          throw new Error(`Invalid widget action: ${Ue.action}`);
      }
    }
    get allLayouts() {
      return (this.state.config?.data?.layouts && Array.isArray(this.state.config.data.layouts) ? [...this.state.config.data.layouts] : []).sort((Me, Ke) => Me.position - Ke.position);
    }
    getQFViewPanelByEventWidget(Ue, Me) {
      return this.getAllView().filter(Ze => "quickFilters" === Ze.type).find(Ze => Ze.widgets.some(Ee => {
        const je = Ue[Ee];
        if ("event" === je.action) {
          const Mt = je.options?.event;
          return Mt.includes(M.wZ) && Mt === Me.options?.event;
        }
        return !1;
      }));
    }
    getQfFilterAction(Ue) {
      return Ue.options?.event.split(`${M.wZ}:`)[1];
    }
    getQFFilterParams(Ue) {
      const Me = Y.convertConfigResponseToInitialParams(this.state.config.data, this.state.list.data?.aggregation),
        Ke = this.state.initialParams,
        Ze = this.getAvailableWidgets(),
        Ee = this.getQFViewPanelByEventWidget(Ze, Ue),
        je = {},
        Mt = this.getQfFilterAction(Ue);
      return Ee?.widgets.forEach(Je => {
        if ("query" === Ze[Je].action) switch (Mt) {
          case M.dY.CLEAR:
            je[Je] = Me[Je];
            break;
          case M.dY.TO_INITIAL:
            je[Je] = Ke[Je];
        }
      }), je;
    }
    normalizeTotalFrom(Ue) {
      return Ue ? Array.isArray(Ue) ? Ue : [Ue] : [];
    }
    getIsDirtyQFPanel(Ue) {
      const Me = this.state.queryParams,
        Ke = this.state.initialParams,
        Ze = this.getAvailableWidgets();
      return !(this.getQFViewPanelByEventWidget(Ze, Ue)?.widgets || []).filter(je => "query" === Ze[je].action).every(je => {
        const Mt = Ze[je];
        return Me[Mt.field] === Ke[Mt.field];
      });
    }
  }
  const be = {
    runAction: (0, t.PH)("[UniversalList] Run Action", (0, t.Ky)())
  };
  let le = (() => {
    class Et extends I.m1 {
      constructor(Me, Ke, Ze) {
        super(ae), this.scenarioService = Me, this.store = Ke, this.config = Ze, this.selectState = this.select(Ee => Ee), this.selectCache = Ee => this.store.select(j(Ee)), this.init = this.effect(Ee => Ee.pipe((0, C.w)(je => this.selectCache(je.listName).pipe((0, v.q)(1), (0, C.w)(Mt => this.sendInitScenario({
          ...je,
          queryParams: Object.keys(je.queryParams).length > 0 ? je.queryParams : Mt?.queryParams ?? je.queryParams,
          sort: je.sort ?? Mt?.sort
        }, Mt?.config?.data)))))), this.reload = this.effect(Ee => Ee.pipe((0, C.w)(() => this.runReloadScenario()))), this.silentReload = this.effect(Ee => Ee.pipe((0, f.b)(() => this.silentReloadInit()), (0, C.w)(() => this.reloadLoadedList().pipe((0, f.b)({
          next: je => this.silentReloadSuccess(je),
          error: je => {
            console.error("Failure silent reload", je);
          }
        }), (0, E.K)(() => O.E))))), this.load = this.effect(Ee => Ee.pipe((0, C.w)(je => this.runLoadScenario(je)))), this.group = this.effect(Ee => Ee.pipe((0, f.b)(je => {
          this.updateGroupingParams(je), this.config?.disableListsCache || this.store.dispatch(u(this.cacheForUpdate()));
        }))), this.runAction = this.effect(Ee => Ee.pipe((0, f.b)(je => {
          "data" in je && "techId" in je && (this.store.dispatch(be.runAction(je)), je.actionName === M.dU ? this.updateSelectedRow(je.data.techId) : this.updateRunningActions({
            actionName: je.actionName,
            id: je.techId,
            timeStamp: new Date()
          }));
        }))), this.updateContext = this.updater((Ee, je) => ({
          ...Ee,
          context: je
        })), this.updateGroupingParams = this.updater((Ee, je) => ({
          ...Ee,
          groupingParams: je
        })), this.clearSelectedRow = this.updater(Ee => ({
          ...Ee,
          tableContext: {
            ...Ee.tableContext,
            selectedRowTechId: null
          }
        })), this.updateRunningActions = this.updater((Ee, je) => ({
          ...Ee,
          historyRunningActions: [je, ...Ee.historyRunningActions]
        })), this.updateSelectedRow = this.updater((Ee, je) => ({
          ...Ee,
          tableContext: {
            ...Ee.tableContext,
            selectedRowTechId: je
          }
        })), this.setInitParams = this.updater((Ee, {
          params: je,
          config: Mt
        }) => ({
          ...ae,
          config: Mt ? Y.setResponseInStateItem(Mt) : {
            ...ae.config,
            status: "PENDING"
          },
          list: {
            ...ae.list,
            status: "PENDING"
          },
          ...Y.updateParams(je, Mt),
          excludeActions: je.excludeActions ?? Ee.excludeActions,
          excludeParts: je.excludeParts ?? Ee.excludeParts
        })), this.setListPending = this.updater(Ee => ({
          ...Ee,
          list: {
            ...Ee.list,
            status: "PENDING"
          }
        })), this.setPendingAndClearListItems = this.updater((Ee, je) => ({
          ...Ee,
          list: {
            status: "PENDING",
            data: {
              ...(Ee.list.data ?? {
                total: 0,
                aggregation: {},
                totals: {
                  all: 0
                }
              }),
              items: []
            },
            error: void 0
          },
          queryParams: je.queryParams
        })), this.initListSuccess = this.updater((Ee, je) => {
          const Mt = Y.convertConfigResponseToInitialParams(je.config, je.list?.aggregation),
            Je = Y.convertConfigResponseToQueryParams(je.config, je.list?.aggregation),
            {
              sort: Xt,
              paging: Nn
            } = Y.convertConfigResponseToBaseSortingAndPaging(je.config);
          return {
            ...Ee,
            config: Y.setResponseInStateItem(je.config),
            list: Y.setResponseInStateItem(je.list),
            initialParams: {
              ...Mt,
              ...Ee.initialParams
            },
            queryParams: {
              ...Je,
              ...Ee.initialParams,
              ...Ee.queryParams
            },
            sort: Ee.sort ?? Xt,
            paging: Nn
          };
        }), this.loadListSuccess = this.updater((Ee, {
          response: je,
          params: Mt
        }) => {
          const Je = Y.convertConfigResponseToInitialParams(Ee.config.data, je?.aggregation),
            Xt = (0, m.Rm)(Ee.initialParams, Je);
          return {
            ...Ee,
            list: Y.updateStateDataWithListResponse(Ee, je, Mt.pageIndex),
            initialParams: Xt,
            queryParams: Mt.queryParams,
            paging: {
              ...Ee.paging,
              pageIndex: Mt.pageIndex
            },
            sort: Mt.sort ?? Ee.sort
          };
        }), this.loadListFailure = this.updater((Ee, je) => {
          const Mt = Y.setResponseInStateItem(je);
          return {
            ...Ee,
            list: {
              ...Mt,
              data: {
                total: 0,
                aggregation: Ee.list.data?.aggregation ?? {},
                totals: {
                  all: 0
                },
                items: []
              }
            }
          };
        }), this.silentReloadInit = this.updater(Ee => ({
          ...Ee,
          list: Y.clearTechnicalInfoInItems(Ee)
        })), this.silentReloadSuccess = this.updater((Ee, je) => ({
          ...Ee,
          list: Y.updateStateWithSilentReloadResponse(Ee, je)
        }));
      }
      initList(Me, Ke) {
        return (Ke ? (0, L.of)(Ke) : this.scenarioService.getConfig(Me.listName)).pipe((0, C.w)(Ze => {
          const {
            sort: Ee,
            paging: je
          } = Y.convertConfigResponseToBaseSortingAndPaging(Ze);
          return this.scenarioService.getList({
            filter: {
              ...Y.updateParamsByConfig(Ze, Me)
            },
            initialFilter: {
              ...Y.convertConfigResponseToInitialParams(Ze),
              ...Me.initialParams
            },
            sort: Me?.sort ?? Ee,
            paging: je
          }, Ze).pipe((0, h.U)(Mt => ({
            config: Ze,
            list: Mt
          })), (0, E.K)(Mt => (0, L.of)({
            config: Ze,
            list: Mt
          })));
        }), (0, E.K)(Ze => (0, L.of)({
          config: Ze,
          list: Ze
        })));
      }
      loadList(Me) {
        return this.selectState.pipe((0, v.q)(1), (0, C.w)(Ke => this.scenarioService.getList({
          filter: Me.queryParams,
          initialFilter: Ke.initialParams,
          paging: {
            pageIndex: Me.pageIndex,
            size: Ke.paging.size
          },
          sort: Me.sort
        }, Ke.config.data)));
      }
      reloadLoadedList() {
        return this.selectState.pipe((0, v.q)(1), (0, C.w)(Me => {
          const Ke = this.getSilentPagingParams(Me);
          return this.scenarioService.getList({
            filter: Me.queryParams,
            initialFilter: Me.initialParams,
            paging: {
              pageIndex: Ke.pageIndex,
              size: Ke.size
            },
            sort: Me.sort
          }, Me.config.data);
        }));
      }
      runLoadScenario(Me) {
        return this.selectState.pipe((0, v.q)(1), (0, h.U)(Ke => new Y(Ke)), (0, C.w)(Ke => this.sendLoadQueryScenario(Ke.getLoadParams(Me))));
      }
      runReloadScenario() {
        return this.selectState.pipe((0, v.q)(1), (0, C.w)(Me => {
          const Ke = {
              initialParams: Me.initialParams,
              queryParams: Me.queryParams,
              listName: Me.listName,
              groupingParams: Me.queryParams
            },
            Ze = this.getTableOptions(Me.config.data)?.usePaginator ?? !1;
          return "SUCCESS" === Me.config.status ? this.sendLoadQueryScenario({
            queryParams: Me.queryParams,
            pageIndex: Ze ? Me.paging.pageIndex : 0,
            sort: Me.sort
          }) : this.sendInitScenario(Ke);
        }));
      }
      sendLoadQueryScenario(Me) {
        return 0 === Me.pageIndex ? this.setPendingAndClearListItems(Me) : this.setListPending(), this.loadList(Me).pipe((0, f.b)({
          next: Ke => {
            this.loadListSuccess({
              response: Ke,
              params: Me
            }), this.store.dispatch(u(this.cacheForUpdate()));
          },
          error: Ke => this.loadListFailure(Ke)
        }), (0, E.K)(() => O.E));
      }
      sendInitScenario(Me, Ke) {
        return this.setInitParams({
          params: Me,
          config: Ke
        }), this.initList(Me, Ke).pipe((0, f.b)(Ze => this.logInitErrors(Ze)), (0, f.b)({
          next: Ze => {
            this.initListSuccess(Ze), this.config?.disableListsCache || this.store.dispatch(x(this.cacheForSet()));
          }
        }));
      }
      logInitErrors(Me) {
        Me.config instanceof Error && console.error(Me.config), Me.list instanceof Error && console.error(Me.list);
      }
      cacheForUpdate() {
        const Me = this.get();
        return {
          listName: Me.listName,
          cache: {
            queryParams: Me.queryParams,
            sort: Me.sort,
            groupingParams: Me.groupingParams,
            update: new Date().toISOString()
          }
        };
      }
      cacheForSet() {
        const Me = this.get();
        return {
          listName: Me.listName,
          cache: {
            queryParams: Me.queryParams,
            groupingParams: Me.groupingParams,
            config: Me.config,
            sort: Me.sort,
            update: new Date().toISOString()
          }
        };
      }
      getSilentPagingParams(Me) {
        const Ke = this.getTableOptions(Me.config.data)?.usePaginator ?? !1;
        return {
          pageIndex: Ke ? Me.paging.pageIndex : 0,
          size: Ke || 0 === Me.paging.pageIndex ? Me.paging.size : Me.paging.size * (Me.paging.pageIndex + 1)
        };
      }
      getTableOptions(Me) {
        return (0, M.s1)(Me);
      }
    }
    return Et.ɵfac = function (Me) {
      return new (Me || Et)(e.LFG(N.xI), e.LFG(t.yh), e.LFG(m.Cc, 8));
    }, Et.ɵprov = e.Yz7({
      token: Et,
      factory: Et.ɵfac
    }), Et;
  })();
});
