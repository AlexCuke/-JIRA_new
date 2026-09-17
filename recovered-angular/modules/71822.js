// Extracted from main; webpack module 71822. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Rh: () => js,
    $W: () => Qs,
    RV: () => ha,
    _v: () => uo,
    qE: () => Ue,
    r4: () => Ws,
    _c: () => Go,
    aG: () => ti,
    p7: () => oi,
    _t: () => yo,
    Us: () => ra,
    SH: () => Gn,
    Vd: () => dn,
    Gl: () => wo,
    _f: () => Ze,
    fw: () => Ln,
    HO: () => It,
    wC: () => Ko,
    cB: () => q,
    B8: () => Je,
    XA: () => sa
  });
  var t = i(77579);
  class e {
    constructor(Pe) {
      this.destroy$ = new t.x(), this.listeners = [], this.code = Pe.code, this.metadata = Pe.metadata, this.groupCollection = void 0 === Pe.groupCollection || this.groupCollection;
    }
    subscribe(Pe) {
      if (!this.listeners.find(at => at === Pe)) return this.listeners.push(Pe), Pe;
    }
    unsubscribeAll() {
      this.listeners = [];
    }
    getCurrentListeners() {
      return this.listeners;
    }
    destroy() {
      this.destroy$.next(!0), this.destroy$.complete(), this.unsubscribeAll();
    }
    unsubscribe(Pe) {
      this.listeners = this.listeners.filter(at => at !== Pe);
    }
    notifyPropertyChanged(Pe) {
      !this.listeners || 0 === this.listeners.length || this.listeners.forEach(at => at(Pe));
    }
  }
  var a = (() => {
    return (mn = a || (a = {})).STRUCT = "Struct", mn.BOOLEAN = "Boolean", mn.NUMBER = "Number", mn.STRING = "String", mn.DATE = "Date", mn.TIME = "Time", a;
    var mn;
  })();
  class m {
    static getInstance() {
      return m._instance;
    }
    constructor() {
      if (this.localeId = "", this.dict = {}, m._instance) throw new Error("Instantiation failed: use LocaleService.getInstance() instead of new.");
    }
    getTerritory() {
      const Pe = this.getLocale();
      return "en" === Pe ? "GB" : Pe.toUpperCase();
    }
    getLocale() {
      if (this.localeId) return this.localeId;
      const Pe = m.defaultLocaleId;
      if (this.isLocalStorageAvailable()) {
        const at = localStorage.getItem(m.localStorageKey);
        return at || localStorage.setItem(m.localStorageKey, Pe), this.localeId = at || Pe, this.localeId;
      }
      return Pe;
    }
    setLocale(Pe) {
      if (!Pe) throw new Error("Locale Id is not provided");
      this.localeId = Pe, this.isLocalStorageAvailable() && localStorage.setItem(m.localStorageKey, Pe);
    }
    isLocalStorageAvailable() {
      const Pe = "lsCheck";
      try {
        return localStorage.setItem(Pe, Pe), localStorage.removeItem(Pe), !0;
      } catch {
        return !1;
      }
    }
  }
  m._instance = new m(), m.localStorageKey = "ehrFormsLocaleKey", m.defaultLocaleId = "ru";
  class d {
    constructor(Pe) {
      this.dict = Pe;
    }
    get text() {
      const Pe = m.getInstance().getLocale();
      return this.dict[Pe];
    }
    params(Pe = {}) {
      const at = m.getInstance().getLocale();
      let Zt = this.dict[at];
      return Object.keys(Pe).forEach(Li => {
        const mo = new RegExp(`<${Li}>`, "g");
        Zt = Zt.replace(mo, `${Pe[Li]}`);
      }), Zt;
    }
  }
  var te = i(61135),
    pe = i(39646),
    be = i(39841),
    le = i(15439),
    n = i(54004),
    Se = i(44947),
    qe = i(65302),
    Rt = i(71530),
    We = i(2718),
    Re = i(38516),
    q = (i(27904), (() => {
      return (mn = q || (q = {}))[mn.JSON = 0] = "JSON", mn[mn.AQL = 1] = "AQL", q;
      var mn;
    })());
  class mt {
    clear() {
      this.obj.clear();
    }
    getPathElements(Pe) {
      return this.obj.getPathElements(Pe);
    }
    addLink() {
      return this.obj.addLink();
    }
    getLinks() {
      return this.obj.getLinks();
    }
    getUid() {
      return this.obj.getUid();
    }
    constructor(Pe) {
      this.obj = Pe;
    }
    empty() {
      return this.obj.empty();
    }
    find(Pe) {
      return this.obj.find(Pe);
    }
    validate(Pe) {
      return this.obj.validate(Pe);
    }
    getAllProperties() {
      return this.obj.getAllProperties();
    }
    checkModified() {
      return this.obj.checkModified();
    }
    isComplexType() {
      return this.obj.isComplexType();
    }
    getIsNew() {
      return this.obj.getIsNew();
    }
    getPath() {
      return this.obj.getPath();
    }
    getData() {
      return this.obj.getData();
    }
    getType() {
      return this.obj.getType();
    }
    getNode() {
      return this.obj.getNode();
    }
    save() {
      return this.obj.save();
    }
    get(Pe, at = q.JSON) {
      return this.obj.get(Pe, at);
    }
    getByPath(Pe) {
      return this.obj.getByPath(Pe);
    }
    getMany(Pe) {
      return this.obj.getMany(Pe);
    }
    set(Pe) {
      this.obj.set(Pe);
    }
    delete() {
      this.obj.delete();
    }
    restore() {
      this.obj.restore();
    }
    isDeleted() {
      return this.obj.isDeleted();
    }
    isCleared() {
      return this.obj.isCleared();
    }
    assign(Pe) {
      return this.obj.assign(Pe);
    }
    multiply() {
      return this.obj.multiply();
    }
    reload() {
      return this.obj.reload();
    }
    getBindingProperties() {
      return this.obj.getBindingProperties();
    }
    getTemplate() {
      return this.obj.getTemplate();
    }
  }
  class Ue extends mt {
    constructor(Pe) {
      super(Pe);
    }
  }
  class Ze extends mt {
    constructor(Pe) {
      super(Pe);
    }
    getStartTime() {
      return this.obj.getStartTime();
    }
    getEndTime() {
      return this.obj.getEndTime();
    }
    getSetting() {
      return this.obj.getSetting();
    }
    getHealthCareFacility() {
      return this.obj.getHealthCareFacility();
    }
    getParticipation() {
      return this.obj.getParticipation();
    }
    createHealthCareFacility() {
      return this.obj.createHealthCareFacility();
    }
    createParticipation() {
      return this.obj.createParticipation();
    }
  }
  var Je = (() => {
      return (mn = Je || (Je = {}))[mn.DV_QUANTITY = 0] = "DV_QUANTITY", mn[mn.DV_CODED_TEXT = 1] = "DV_CODED_TEXT", mn[mn.DV_TEXT = 2] = "DV_TEXT", mn[mn.DV_PROPORTION = 3] = "DV_PROPORTION", mn[mn.DV_BOOLEAN = 4] = "DV_BOOLEAN", mn[mn.DV_DATE = 5] = "DV_DATE", mn[mn.DV_TIME = 6] = "DV_TIME", mn[mn.DV_DATE_TIME = 7] = "DV_DATE_TIME", mn[mn.DV_ORDINAL = 8] = "DV_ORDINAL", mn[mn.DV_INTERVAL = 9] = "DV_INTERVAL", mn[mn.DV_COUNT = 10] = "DV_COUNT", mn[mn.DV_INTEGER = 11] = "DV_INTEGER", mn[mn.DV_DURATION = 12] = "DV_DURATION", mn[mn.DV_URI = 13] = "DV_URI", mn[mn.DV_EHR_URI = 14] = "DV_EHR_URI", mn[mn.DV_IDENTIFIER = 15] = "DV_IDENTIFIER", mn[mn.DV_PARSABLE = 16] = "DV_PARSABLE", mn[mn.DV_MULTIMEDIA = 17] = "DV_MULTIMEDIA", mn[mn.OBSERVATION = 18] = "OBSERVATION", mn[mn.EVENT = 19] = "EVENT", mn[mn.INTERVAL_EVENT = 20] = "INTERVAL_EVENT", mn[mn.COMPOSITION = 21] = "COMPOSITION", mn[mn.SECTION = 22] = "SECTION", mn[mn.EVALUATION = 23] = "EVALUATION", mn[mn.INSTRUCTION = 24] = "INSTRUCTION", mn[mn.ACTION = 25] = "ACTION", mn[mn.ACTIVITY = 26] = "ACTIVITY", mn[mn.ADMIN_ENTRY = 27] = "ADMIN_ENTRY", mn[mn.CLUSTER = 28] = "CLUSTER", mn[mn.LINK = 29] = "LINK", mn[mn.PARTY_PROXY = 30] = "PARTY_PROXY", mn[mn.PARTICIPATION = 31] = "PARTICIPATION", mn[mn.PARTY_IDENTIFIED = 32] = "PARTY_IDENTIFIED", mn[mn.STRING = 33] = "STRING", mn[mn.CODE_PHRASE = 34] = "CODE_PHRASE", mn[mn.EVENT_CONTEXT = 35] = "EVENT_CONTEXT", mn[mn.ISM_TRANSITION = 36] = "ISM_TRANSITION", mn[mn.ELEMENT = 37] = "ELEMENT", mn[mn.POINT_EVENT = 38] = "POINT_EVENT", mn[mn.PARTY_RELATED = 39] = "PARTY_RELATED", mn[mn.ITEM_TREE = 40] = "ITEM_TREE", mn[mn.ITEM_LIST = 41] = "ITEM_LIST", mn[mn.ITEM_SINGLE = 42] = "ITEM_SINGLE", mn[mn.ITEM_TABLE = 43] = "ITEM_TABLE", mn[mn.ITEM_STRUCTURE = 44] = "ITEM_STRUCTURE", mn[mn.HISTORY = 45] = "HISTORY", mn[mn.DV_INTERVAL_DV_COUNT = 46] = "DV_INTERVAL_DV_COUNT", Je;
      var mn;
    })(),
    Xt = (() => {
      return (mn = Xt || (Xt = {}))[mn.DECIMAL = 0] = "DECIMAL", mn[mn.CODED_TEXT = 1] = "CODED_TEXT", mn[mn.TEXT = 2] = "TEXT", mn[mn.INTEGER = 3] = "INTEGER", mn[mn.BOOLEAN = 4] = "BOOLEAN", mn[mn.DATE = 5] = "DATE", mn[mn.TIME = 6] = "TIME", mn[mn.DATETIME = 7] = "DATETIME", Xt;
      var mn;
    })(),
    Nn = (() => {
      return (mn = Nn || (Nn = {}))[mn.ERROR = 0] = "ERROR", Nn;
      var mn;
    })();
  class Pi {
    static message(Pe, at) {
      return new Pi().setMessage(Pe, Nn.ERROR, at);
    }
    constructor(Pe, at, Zt) {
      Pe && (this.message = Pe), at && (this.type = at), Zt && (this.path = Zt);
    }
    setMessage(Pe, at, Zt) {
      return this.message = Pe, this.type = at, this.path = Zt, this;
    }
  }
  class Ii {
    constructor() {
      this.name = "ValidationError";
    }
    static create(Pe, at) {
      const Zt = new Ii();
      return Zt.message = Pe, Zt.validationMessages = [], Zt.validationMessages.push(new Pi(Pe, Nn.ERROR, at)), Zt;
    }
    static createWithMessages(Pe, at) {
      const Zt = new Ii();
      return Zt.message = Pe, Zt.validationMessages = at, Zt;
    }
    toString() {
      let Pe = this.message;
      return this.validationMessages && this.validationMessages.forEach(at => Pe += at.message + ";"), Pe;
    }
  }
  const yi = {
      propertiesUnitsName: new d({
        en: "Unit",
        ru: "Единица измерения"
      }),
      propertiesUnitsFieldsCodeName: new d({
        en: "Unit CodeAlternative",
        ru: "Код единицы"
      }),
      propertiesUnitsFieldsTextName: new d({
        en: "Unit Name",
        ru: "Название единицы"
      }),
      propertiesCodedTextName: new d({
        en: "Coded Text",
        ru: "Кодированный текст"
      }),
      propertiesCodedTextFieldsCodeName: new d({
        en: "Code",
        ru: "Код"
      }),
      propertiesCodedTextFieldsTextName: new d({
        en: "Text",
        ru: "Текст"
      }),
      propertiesCodedTextCollectionName: new d({
        en: "Possible Values",
        ru: "Возможные значения"
      }),
      propertiesCodedTextCollectionValue: new d({
        en: "Value collection",
        ru: "Коллекция значений"
      }),
      propertiesCodedTextListCollectionName: new d({
        en: "Selected Values List",
        ru: "Коллекция выбранных значений"
      }),
      propertiesBooleanName: new d({
        en: "Boolean",
        ru: "Логическое значение"
      }),
      propertiesNumberName: new d({
        en: "Numeric",
        ru: "Число"
      }),
      propertiesDateName: new d({
        en: "Date and Time",
        ru: "Дата и время"
      }),
      propertiesStringName: new d({
        en: "Value",
        ru: "Значение"
      }),
      propertiesDefaultValueName: new d({
        en: "Default value",
        ru: "Значение по-умолчанию"
      }),
      propertiesDefaultTextName: new d({
        en: "Default text",
        ru: "Текст по-умолчанию"
      }),
      propertiesCollectionStringName: new d({
        en: "String Collection",
        ru: "Коллекция строк"
      }),
      propertiesCollectionNumberName: new d({
        en: "Number Collection",
        ru: "Коллекция чисел"
      }),
      propertiesListName: new d({
        en: "Possible Values",
        ru: "Возможные значения"
      }),
      metadataRegistryArchetypeThisMetadataName: new d({
        en: "Archetype",
        ru: "Архетип"
      }),
      metadataRegistryDvIdentifierValueMetadataName: new d({
        en: "ID",
        ru: "Идентификатор"
      }),
      metadataRegistryDvIdentifierCollectionValueMetadataName: new d({
        en: "Identifier Collection",
        ru: "Коллекция идентификаторов"
      }),
      metadataRegistryDvIdentifierValueMetadataFieldsIdName: new d({
        en: "Value",
        ru: "Значение"
      }),
      metadataRegistryDvIdentifierValueMetadataFieldsTypeName: new d({
        en: "Type",
        ru: "Тип"
      }),
      metadataRegistryDvIdentifierValueMetadataFieldsIssuerName: new d({
        en: "Author",
        ru: "Автор"
      }),
      metadataRegistryDvIdentifierValueMetadataFieldsAssignerName: new d({
        en: "Contributor",
        ru: "Исполнитель"
      }),
      metadataRegistryDvOrdinalValueMetadataName: new d({
        en: "Ordinal",
        ru: "Порядковый"
      }),
      metadataRegistryDvOrdinalCollectionValueMetadataName: new d({
        en: "Ordinal Collection",
        ru: "Коллекция порядковых"
      }),
      metadataRegistryDvOrdinalValueMetadataFieldsCodeName: new d({
        en: "Code",
        ru: "Код"
      }),
      metadataRegistryDvOrdinalValueMetadataFieldsValueName: new d({
        en: "Text",
        ru: "Текст"
      }),
      metadataRegistryDvOrdinalValueMetadataFieldsOrdinalName: new d({
        en: "Value",
        ru: "Значение"
      }),
      metadataRegistryDvMetadataFieldsInfoLabelName: new d({
        en: "Description",
        ru: "Описание"
      }),
      metadataRegistryDvQuantityMagnitudeMetadataName: new d({
        en: "Value",
        ru: "Значение"
      }),
      metadataRegistryDvQuantityUnitMetadataName: new d({
        en: "Unit",
        ru: "Единица измерения"
      }),
      metadataRegistryDvQuantityValueMetadataName: new d({
        en: "Quantity",
        ru: "Величина"
      }),
      metadataRegistryDvQuantityValuesMetadataName: new d({
        en: "Quantity collection",
        ru: "Коллекция величин"
      }),
      metadataRegistryDvQuantityValueMetadataFieldsMagnitudeName: new d({
        en: "Value",
        ru: "Значение"
      }),
      metadataRegistryDvQuantityValueMetadataFieldsUnitName: new d({
        en: "Unit",
        ru: "Ед.измерения"
      }),
      metadataRegistryDvParsableValueMetadataName: new d({
        en: "Interpreted Value",
        ru: "Интерпретируемое значение"
      }),
      metadataRegistryDvParsableValueMetadataFieldsValueName: new d({
        en: "Value",
        ru: "Значение"
      }),
      metadataRegistryDvParsableValueMetadataFieldsFormalismName: new d({
        en: "Interpretation",
        ru: "Интерпретация"
      }),
      metadataRegistryDvProportionValueMetadataName: new d({
        en: "Proportion",
        ru: "Пропорция"
      }),
      metadataRegistryDvProportionCollectionValueMetadataName: new d({
        en: "Proportion Collection",
        ru: "Коллекция пропорций"
      }),
      metadataRegistryDvProportionValueMetadataFieldsNumeratorName: new d({
        en: "Numerator",
        ru: "Числитель"
      }),
      metadataRegistryDvProportionValueMetadataFieldsDenominatorName: new d({
        en: "Denominator",
        ru: "Знаменатель"
      }),
      metadataRegistryDvDurationValueMetadataName: new d({
        en: "Date Interval",
        ru: "Интервал"
      }),
      metadataRegistryDvDurationCollectionValueMetadataName: new d({
        en: "Date Interval Collection",
        ru: "Коллекция интервалов"
      }),
      metadataRegistryDvDurationValueMetadataFieldsYearName: new d({
        en: "Year",
        ru: "Год"
      }),
      metadataRegistryDvDurationValueMetadataFieldsMonthName: new d({
        en: "Month",
        ru: "Месяц"
      }),
      metadataRegistryDvDurationValueMetadataFieldsWeekName: new d({
        en: "Week",
        ru: "Неделя"
      }),
      metadataRegistryDvDurationValueMetadataFieldsDayName: new d({
        en: "Day",
        ru: "День"
      }),
      metadataRegistryDvDurationValueMetadataFieldsHourName: new d({
        en: "Hour",
        ru: "Час"
      }),
      metadataRegistryDvDurationValueMetadataFieldsMinuteName: new d({
        en: "Minute",
        ru: "Минута"
      }),
      metadataRegistryDvDurationValueMetadataFieldsSecondName: new d({
        en: "Second",
        ru: "Секунда"
      }),
      metadataRegistryDvEhrUriValueMetadataName: new d({
        en: "URL",
        ru: "Ссылка"
      }),
      metadataRegistryDvMultimediaValueMetadataName: new d({
        en: "Value",
        ru: "Значение"
      }),
      metadataRegistryDvMultimediaValueMetadataFieldsValueName: new d({
        en: "Value",
        ru: "Значение"
      }),
      metadataRegistryDvMultimediaValueMetadataFieldsMediatypeName: new d({
        en: "Type",
        ru: "Тип"
      }),
      metadataRegistryDvMultimediaValueMetadataFieldsAlternatetextName: new d({
        en: "Alternative Text",
        ru: "Описание"
      }),
      metadataRegistryDvMultimediaValueMetadataFieldsSizeName: new d({
        en: "Size",
        ru: "Размер"
      }),
      metadataRegistryLinkValueMetadataName: new d({
        en: "URL",
        ru: "Ссылка"
      }),
      metadataRegistryLinkValueMetadataFieldsMeaningName: new d({
        en: "Value",
        ru: "Значение"
      }),
      metadataRegistryLinkValueMetadataFieldsTypeName: new d({
        en: "URL Type",
        ru: "Тип ссылки"
      }),
      metadataRegistryLinkValueMetadataFieldsTargetName: new d({
        en: "URL Description",
        ru: "Описание ссылки"
      }),
      metadataRegistryPartyProxyValueMetadataName: new d({
        en: "Participant",
        ru: "Участник"
      }),
      metadataRegistryPartyProxyValueMetadataFieldsIdName: new d({
        en: "ID",
        ru: "Идентификатор"
      }),
      metadataRegistryPartyProxyValueMetadataFieldsNamespaceName: new d({
        en: "Namespace",
        ru: "Пространство имен"
      }),
      metadataRegistryPartyProxyValueMetadataFieldsSchemeName: new d({
        en: "Schema",
        ru: "Схема"
      }),
      metadataRegistryPartyProxyValueMetadataFieldsNameName: new d({
        en: "Name",
        ru: "Имя"
      }),
      metadataRegistryParticipationValueMetadataName: new d({
        en: "Participant",
        ru: "Участник"
      }),
      metadataRegistryParticipationValueMetadataFieldsIdName: new d({
        en: "ID",
        ru: "Идентификатор"
      }),
      metadataRegistryParticipationValueMetadataFieldsNamespaceName: new d({
        en: "Namespace",
        ru: "Пространство имен"
      }),
      metadataRegistryParticipationValueMetadataFieldsSchemeName: new d({
        en: "Schema",
        ru: "Схема"
      }),
      metadataRegistryParticipationValueMetadataFieldsNameName: new d({
        en: "Name",
        ru: "Имя"
      }),
      metadataRegistryParticipationValueMetadataFieldsFuncName: new d({
        en: "Function",
        ru: "Функция"
      }),
      metadataRegistryParticipationValueMetadataFieldsModeName: new d({
        en: "Mode",
        ru: "Режим"
      }),
      metadataRegistryPartyIdentifiedValueMetadataName: new d({
        en: "Participant",
        ru: "Участник"
      }),
      metadataRegistryPartyIdentifiedValueMetadataFieldsIdName: new d({
        en: "ID",
        ru: "Идентификатор"
      }),
      metadataRegistryPartyIdentifiedValueMetadataFieldsNamespaceName: new d({
        en: "Namespace",
        ru: "Пространство имен"
      }),
      metadataRegistryPartyIdentifiedValueMetadataFieldsSchemeName: new d({
        en: "Schema",
        ru: "Схема"
      }),
      metadataRegistryPartyIdentifiedValueMetadataFieldsNameName: new d({
        en: "Name",
        ru: "Имя"
      }),
      validateFieldsRequired: new d({
        en: "Required field",
        ru: "Обязательное поле"
      }),
      validateUnitEempty: new d({
        en: "Please specify the unit.",
        ru: "Укажите единицу измерения"
      }),
      validateUnitNotFound: new d({
        en: "The unit with the code <unit> is missing.",
        ru: "Отсутствует единица измерения с кодом <unit>"
      }),
      validateDenominatorZero: new d({
        en: "Denominator must be defined and be not zero.",
        ru: "Знаменатель должен быть определен и не равен нулю."
      }),
      validateTerminologyNotFound: new d({
        en: "Required value \"<code>\" is missing in the local terminology.",
        ru: "Значение для кода \"<code>\" отсутствует в локальной терминологии."
      }),
      metadataRegistryElementNullFlavourMetadataName: new d({
        en: "Flavour of null value",
        ru: "Причина отсутствия значения"
      }),
      metadataRegistryElementNullFlavourCollectionName: new d({
        en: "Possible flavour values",
        ru: "Возможные значения причины"
      }),
      metadataRegistryElementNullReasonMetadataName: new d({
        en: "Specific reason for null value",
        ru: "Описание причины отсутствия значения"
      })
    },
    co = {
      name: yi.propertiesUnitsName.text,
      collection: !0,
      type: a.STRUCT,
      fields: {
        code: {
          name: yi.propertiesUnitsFieldsCodeName.text,
          type: a.STRING
        },
        text: {
          name: yi.propertiesUnitsFieldsTextName.text,
          type: a.STRING
        }
      }
    },
    Jo = {
      name: yi.propertiesCodedTextName.text,
      type: a.STRUCT,
      collection: !0,
      fields: {
        code: {
          name: yi.propertiesCodedTextFieldsCodeName.text,
          type: a.STRING
        },
        text: {
          name: yi.propertiesCodedTextFieldsTextName.text,
          type: a.STRING
        },
        infoLabel: {
          name: yi.metadataRegistryDvMetadataFieldsInfoLabelName.text,
          type: a.STRING
        }
      }
    },
    fr = {
      ...Jo,
      name: yi.propertiesCodedTextCollectionName.text,
      collection: !0
    },
    pt = {
      ...Jo,
      name: yi.propertiesCodedTextCollectionValue.text,
      collection: !0
    },
    Dt = {
      name: yi.propertiesBooleanName.text,
      type: a.BOOLEAN
    },
    Ht = {
      name: yi.propertiesNumberName.text,
      type: a.NUMBER
    },
    Dn = {
      name: yi.propertiesDateName.text,
      type: a.DATE
    },
    vt = {
      name: yi.propertiesStringName.text,
      type: a.STRING
    },
    an = {
      name: yi.propertiesDefaultValueName.text,
      type: a.STRING
    },
    li = {
      name: yi.propertiesDefaultTextName.text,
      type: a.STRING
    },
    zn = {
      name: yi.propertiesCollectionStringName.text,
      type: a.STRING,
      collection: !0
    },
    $t = {
      name: yi.propertiesCollectionNumberName.text,
      type: a.NUMBER,
      collection: !0
    },
    Mn = {
      name: yi.propertiesListName.text,
      type: a.STRING,
      collection: !0
    },
    Qn = {
      name: yi.metadataRegistryDvIdentifierValueMetadataName.text,
      type: a.STRUCT,
      fields: {
        id: {
          code: "id",
          name: yi.metadataRegistryDvIdentifierValueMetadataFieldsIdName.text,
          type: a.STRING
        },
        type: {
          code: "type",
          name: yi.metadataRegistryDvIdentifierValueMetadataFieldsTypeName.text,
          type: a.STRING
        },
        issuer: {
          code: "issuer",
          name: yi.metadataRegistryDvIdentifierValueMetadataFieldsIssuerName.text,
          type: a.STRING
        },
        assigner: {
          code: "assigner",
          name: yi.metadataRegistryDvIdentifierValueMetadataFieldsAssignerName.text,
          type: a.STRING
        }
      }
    },
    In = {
      ...Qn,
      name: yi.metadataRegistryDvIdentifierCollectionValueMetadataName.text,
      collection: !0
    },
    ui = {
      name: yi.metadataRegistryDvOrdinalValueMetadataName.text,
      type: a.STRUCT,
      fields: {
        code: {
          code: "code",
          name: yi.metadataRegistryDvOrdinalValueMetadataFieldsCodeName.text,
          type: a.STRING
        },
        value: {
          code: "value",
          name: yi.metadataRegistryDvOrdinalValueMetadataFieldsValueName.text,
          type: a.STRING
        },
        ordinal: {
          code: "ordinal",
          name: yi.metadataRegistryDvOrdinalValueMetadataFieldsOrdinalName.text,
          type: a.NUMBER
        },
        infoLabel: {
          code: "infoLabel",
          name: yi.metadataRegistryDvMetadataFieldsInfoLabelName.text,
          type: a.STRING
        }
      }
    },
    To = {
      ...ui,
      name: yi.metadataRegistryDvOrdinalCollectionValueMetadataName.text,
      collection: !0
    },
    bi = {
      name: yi.metadataRegistryDvProportionValueMetadataName.text,
      type: a.STRUCT,
      fields: {
        numerator: {
          code: "numerator",
          name: yi.metadataRegistryDvProportionValueMetadataFieldsNumeratorName.text,
          type: a.NUMBER
        },
        denominator: {
          code: "denominator",
          name: yi.metadataRegistryDvProportionValueMetadataFieldsDenominatorName.text,
          type: a.NUMBER
        }
      }
    },
    qn = {
      ...bi,
      name: yi.metadataRegistryDvProportionCollectionValueMetadataName.text,
      collection: !0
    },
    Xn = {
      type: a.STRUCT,
      name: yi.metadataRegistryDvDurationValueMetadataName.text,
      fields: {
        year: {
          code: "year",
          name: yi.metadataRegistryDvDurationValueMetadataFieldsYearName.text,
          type: a.NUMBER
        },
        month: {
          code: "month",
          name: yi.metadataRegistryDvDurationValueMetadataFieldsMonthName.text,
          type: a.NUMBER
        },
        week: {
          code: "week",
          name: yi.metadataRegistryDvDurationValueMetadataFieldsWeekName.text,
          type: a.NUMBER
        },
        day: {
          code: "day",
          name: yi.metadataRegistryDvDurationValueMetadataFieldsDayName.text,
          type: a.NUMBER
        },
        hour: {
          code: "hour",
          name: yi.metadataRegistryDvDurationValueMetadataFieldsHourName.text,
          type: a.NUMBER
        },
        minute: {
          code: "minute",
          name: yi.metadataRegistryDvDurationValueMetadataFieldsMinuteName.text,
          type: a.NUMBER
        },
        second: {
          code: "second",
          name: yi.metadataRegistryDvDurationValueMetadataFieldsSecondName.text,
          type: a.NUMBER
        }
      }
    },
    Yi = {
      ...Xn,
      name: yi.metadataRegistryDvDurationCollectionValueMetadataName.text,
      collection: !0
    };
  class Eo extends e {
    constructor(Pe, at, Zt, Li) {
      super(Pe), this.object = at, this.get = Zt, this.set = Li;
    }
    getObject() {
      return this.object;
    }
    getValue(Pe) {
      return new te.X(this.get ? this.get(Pe) : void 0);
    }
    setValue(Pe) {
      this.set && this.set(Pe);
    }
  }
  class Fo extends Eo {
    constructor(Pe, at, Zt, Li) {
      super(Pe, at, Zt, Li);
    }
    getValue(Pe) {
      return this.object.isDeleted() ? new te.X(void 0) : super.getValue(Pe);
    }
    setValue(Pe) {
      void 0 === Pe ? this.object.delete(!0) : (this.object.isDeleted() && this.object.restore(), super.setValue(Pe));
    }
  }
  const br = {
      collection_value: {
        code: "collection_value",
        metadata: zn
      }
    },
    Pr = {
      value: {
        code: "value",
        metadata: vt
      },
      defaultValue: {
        code: "defaultValue",
        metadata: an
      },
      text: {
        code: "text",
        metadata: {
          name: yi.propertiesCodedTextFieldsTextName.text,
          type: a.STRING
        }
      },
      defaultText: {
        code: "defaultText",
        metadata: li
      },
      codedText: {
        code: "codedText",
        metadata: Jo
      },
      list: {
        code: "list",
        metadata: fr,
        groupCollection: !1
      },
      ...br,
      collection_codedText: {
        code: "collection_codedText",
        metadata: pt
      },
      infoLabel: {
        code: "infoLabel",
        metadata: {
          name: yi.metadataRegistryDvMetadataFieldsInfoLabelName.text,
          type: a.STRING
        }
      }
    },
    qo = {
      value: {
        code: "value",
        metadata: vt
      },
      defaultValue: {
        code: "defaultValue",
        metadata: an
      },
      list: {
        code: "list",
        metadata: Mn,
        groupCollection: !1
      },
      ...br
    },
    Yo = {
      value: {
        code: "value",
        metadata: vt
      },
      date: {
        code: "date",
        metadata: Dn
      },
      ...br
    },
    wr = {
      null_flavour: {
        code: "null_flavour",
        metadata: {
          name: yi.metadataRegistryElementNullFlavourMetadataName.text,
          type: a.STRUCT,
          fields: {
            code: {
              name: yi.propertiesCodedTextFieldsCodeName.text,
              type: a.STRING
            },
            text: {
              name: yi.propertiesCodedTextFieldsTextName.text,
              type: a.STRING
            }
          }
        }
      },
      null_flavour_inputs: {
        code: "null_flavour_inputs",
        metadata: {
          name: yi.metadataRegistryElementNullFlavourCollectionName.text,
          type: a.STRUCT,
          fields: {
            code: {
              name: yi.propertiesCodedTextFieldsCodeName.text,
              type: a.STRING
            },
            text: {
              name: yi.propertiesCodedTextFieldsTextName.text,
              type: a.STRING
            }
          },
          collection: !0
        }
      },
      null_reason: {
        code: "null_reason",
        metadata: {
          name: yi.metadataRegistryElementNullReasonMetadataName.text,
          type: a.STRING
        }
      }
    },
    oo = {
      ARCHETYPE: {
        _this: {
          code: "this",
          metadata: {
            name: yi.metadataRegistryArchetypeThisMetadataName.text,
            type: a.STRUCT
          },
          groupCollection: !1
        }
      },
      ELEMENT: wr,
      DV_CODED_TEXT: {
        ...wr,
        ...Pr
      },
      CODE_PHRASE: {
        ...wr,
        ...Pr
      },
      DV_IDENTIFIER: {
        ...wr,
        value: {
          code: "value",
          metadata: Qn
        },
        collection_value: {
          code: "collection_value",
          metadata: In
        }
      },
      DV_ORDINAL: {
        ...wr,
        value: {
          code: "value",
          metadata: ui
        },
        list: {
          code: "list",
          metadata: fr,
          groupCollection: !1
        },
        collection_value: {
          code: "collection_value",
          metadata: To
        }
      },
      DV_QUANTITY: {
        ...wr,
        magnitude: {
          code: "magnitude",
          metadata: {
            name: yi.metadataRegistryDvQuantityMagnitudeMetadataName.text,
            type: a.NUMBER
          }
        },
        unit: {
          code: "unit",
          metadata: {
            name: yi.metadataRegistryDvQuantityUnitMetadataName.text,
            type: a.STRING
          }
        },
        value: {
          code: "value",
          metadata: {
            name: yi.metadataRegistryDvQuantityValueMetadataName.text,
            type: a.STRUCT,
            fields: {
              magnitude: {
                code: "magnitude",
                name: yi.metadataRegistryDvQuantityValueMetadataFieldsMagnitudeName.text,
                type: a.NUMBER
              },
              unit: {
                code: "unit",
                name: yi.metadataRegistryDvQuantityValueMetadataFieldsUnitName.text,
                type: a.STRING
              }
            }
          }
        },
        collection_value: {
          code: "collection_value",
          metadata: {
            name: yi.metadataRegistryDvQuantityValuesMetadataName.text,
            type: a.STRUCT,
            fields: {
              magnitude: {
                code: "magnitude",
                name: yi.metadataRegistryDvQuantityValueMetadataFieldsMagnitudeName.text,
                type: a.NUMBER
              },
              unit: {
                code: "unit",
                name: yi.metadataRegistryDvQuantityValueMetadataFieldsUnitName.text,
                type: a.STRING
              }
            },
            collection: !0
          }
        },
        units: {
          code: "units",
          metadata: co,
          groupCollection: !1
        }
      },
      DV_TEXT: {
        ...wr,
        ...qo
      },
      STRING: qo,
      DV_PARSABLE: {
        ...wr,
        value: {
          code: "value",
          metadata: {
            name: yi.metadataRegistryDvParsableValueMetadataName.text,
            type: a.STRUCT,
            fields: {
              value: {
                code: "value",
                name: yi.metadataRegistryDvParsableValueMetadataFieldsValueName.text,
                type: a.STRING
              },
              formalism: {
                code: "formalism",
                name: yi.metadataRegistryDvParsableValueMetadataFieldsFormalismName.text,
                type: a.STRING
              }
            }
          }
        }
      },
      DV_PROPORTION: {
        ...wr,
        value: {
          code: "value",
          metadata: bi
        },
        collection_value: {
          code: "collection_value",
          metadata: qn
        }
      },
      DV_BOOLEAN: {
        ...wr,
        value: {
          code: "value",
          metadata: Dt
        }
      },
      DV_DATE: {
        ...wr,
        ...Yo
      },
      DV_TIME: {
        ...wr,
        ...Yo
      },
      DV_DATE_TIME: {
        ...wr,
        ...Yo
      },
      DV_COUNT: {
        ...wr,
        value: {
          code: "value",
          metadata: Ht
        },
        collection_value: {
          code: "collection_value",
          metadata: $t
        }
      },
      DV_INTEGER: {
        ...wr,
        value: {
          code: "value",
          metadata: Ht
        }
      },
      DV_DURATION: {
        ...wr,
        value: {
          code: "value",
          metadata: Xn
        },
        collection_value: {
          code: "collection_value",
          metadata: Yi
        }
      },
      DV_URI: {
        ...wr,
        ...qo
      },
      DV_EHR_URI: {
        ...wr,
        value: {
          code: "value",
          metadata: {
            name: yi.metadataRegistryDvEhrUriValueMetadataName.text,
            type: a.STRING
          }
        }
      },
      DV_MULTIMEDIA: {
        ...wr,
        value: {
          code: "value",
          metadata: {
            name: yi.metadataRegistryDvMultimediaValueMetadataName.text,
            type: a.STRUCT,
            fields: {
              value: {
                code: "value",
                name: yi.metadataRegistryDvMultimediaValueMetadataFieldsValueName.text,
                type: a.STRING
              },
              mediatype: {
                code: "mediatype",
                name: yi.metadataRegistryDvMultimediaValueMetadataFieldsMediatypeName.text,
                type: a.STRING
              },
              alternatetext: {
                code: "alternatetext",
                name: yi.metadataRegistryDvMultimediaValueMetadataFieldsAlternatetextName.text,
                type: a.STRING
              },
              size: {
                code: "size",
                name: yi.metadataRegistryDvMultimediaValueMetadataFieldsSizeName.text,
                type: a.NUMBER
              }
            }
          }
        }
      },
      LINK: {
        ...wr,
        value: {
          code: "value",
          metadata: {
            name: yi.metadataRegistryLinkValueMetadataName.text,
            type: a.STRUCT,
            fields: {
              meaning: {
                code: "meaning",
                name: yi.metadataRegistryLinkValueMetadataFieldsMeaningName.text,
                type: a.STRING
              },
              type: {
                code: "type",
                name: yi.metadataRegistryLinkValueMetadataFieldsTypeName.text,
                type: a.STRING
              },
              target: {
                code: "target",
                name: yi.metadataRegistryLinkValueMetadataFieldsTargetName.text,
                type: a.STRING
              }
            }
          }
        }
      },
      PARTY_PROXY: {
        ...wr,
        value: {
          code: "value",
          metadata: {
            name: yi.metadataRegistryPartyProxyValueMetadataName.text,
            type: a.STRUCT,
            fields: {
              id: {
                name: yi.metadataRegistryPartyProxyValueMetadataFieldsIdName.text,
                type: a.STRING,
                code: "id"
              },
              namespace: {
                name: yi.metadataRegistryPartyProxyValueMetadataFieldsNamespaceName.text,
                type: a.STRING,
                code: "namespace"
              },
              scheme: {
                name: yi.metadataRegistryPartyProxyValueMetadataFieldsSchemeName.text,
                type: a.STRING,
                code: "scheme"
              },
              name: {
                name: yi.metadataRegistryPartyProxyValueMetadataFieldsNameName.text,
                type: a.STRING,
                code: "name"
              }
            }
          }
        }
      },
      PARTICIPATION: {
        ...wr,
        value: {
          code: "value",
          metadata: {
            name: yi.metadataRegistryParticipationValueMetadataName.text,
            type: a.STRUCT,
            fields: {
              id: {
                name: yi.metadataRegistryParticipationValueMetadataFieldsIdName.text,
                type: a.STRING,
                code: "id"
              },
              namespace: {
                name: yi.metadataRegistryParticipationValueMetadataFieldsNamespaceName.text,
                type: a.STRING,
                code: "namespace"
              },
              scheme: {
                name: yi.metadataRegistryParticipationValueMetadataFieldsSchemeName.text,
                type: a.STRING,
                code: "scheme"
              },
              name: {
                name: yi.metadataRegistryParticipationValueMetadataFieldsNameName.text,
                type: a.STRING,
                code: "name"
              },
              func: {
                name: yi.metadataRegistryParticipationValueMetadataFieldsFuncName.text,
                type: a.STRING,
                code: "func"
              },
              mode: {
                name: yi.metadataRegistryParticipationValueMetadataFieldsModeName.text,
                type: a.STRING,
                code: "mode"
              }
            }
          }
        }
      },
      PARTY_IDENTIFIED: {
        ...wr,
        value: {
          code: "value",
          metadata: {
            name: yi.metadataRegistryPartyIdentifiedValueMetadataName.text,
            type: a.STRUCT,
            fields: {
              id: {
                name: yi.metadataRegistryPartyIdentifiedValueMetadataFieldsIdName.text,
                type: a.STRING,
                code: "id"
              },
              namespace: {
                name: yi.metadataRegistryPartyIdentifiedValueMetadataFieldsNamespaceName.text,
                type: a.STRING,
                code: "namespace"
              },
              scheme: {
                name: yi.metadataRegistryPartyIdentifiedValueMetadataFieldsSchemeName.text,
                type: a.STRING,
                code: "scheme"
              },
              name: {
                name: yi.metadataRegistryPartyIdentifiedValueMetadataFieldsNameName.text,
                type: a.STRING,
                code: "name"
              }
            }
          }
        }
      }
    };
  class Di {
    constructor(Pe, at) {
      this.object = Pe, this.info = at;
    }
    set(Pe) {
      return this.setter = Pe, this;
    }
    get(Pe) {
      return this.getter = Pe, this;
    }
    undef() {
      const Pe = new Fo(this.info, this.object, this.getter, this.setter);
      return this.object.getBindingProperties()[this.info.code] = Pe, Pe;
    }
    prop() {
      const Pe = new Eo(this.info, this.object, this.getter, this.setter);
      return this.object.getBindingProperties()[this.info.code] = Pe, Pe;
    }
  }
  const Ci = {
    validateRequired: new d({
      en: "Required field",
      ru: "Обязательное поле"
    }),
    baseTypeMessagesMethodImplement: new d({
      en: "Method not implemented yet. <id>",
      ru: "Method not implemented. <id>"
    }),
    baseTypeMessagesAssignError: new d({
      en: "Cannot assign a value.",
      ru: "Не удается присвоить значение."
    }),
    dateTimeMessagesFormatNotValid: new d({
      en: "Incorrect date format.",
      ru: "Неверный формат даты."
    }),
    instructionDetailsMessagesObjectUndefined: new d({
      en: "Obj cannot be undefined.",
      ru: "Obj cannot be undefined"
    }),
    instructionDetailsValidateInstructionUidUndefined: new d({
      en: "Instruction uid is undefined.",
      ru: "Instruction uid is undefined."
    }),
    instructionDetailsValidateCompositionUidUndefined: new d({
      en: "Composition uid is undefined.",
      ru: "Composition uid is undefined"
    }),
    instructionDetailsValidateActivityUidUndefined: new d({
      en: "Activity id is undefined.",
      ru: "Activity id is undefined."
    }),
    instructionDetailsValidatePathUidUndefined: new d({
      en: "Path is undefined.",
      ru: "Path is undefined."
    }),
    periodIsoParserMessagesPeriodInvalid: new d({
      en: "String \"<period>\" is not a valid ISO8601 period.",
      ru: "String \"<period>\" is not a valid ISO8601 period."
    }),
    singleInputMessagesFromImplemented: new d({
      en: "fromObject not implemented yet.",
      ru: "fromObject not implemented."
    }),
    singleInputMessagesToImplemented: new d({
      en: "toObject not implemented yet.",
      ru: "toObject not implemented."
    })
  };
  class lo {
    get data() {
      if (!this.isDeleted() && null !== this._data) return this._data;
    }
    set data(Pe) {
      this._data !== Pe && (this._isModified = !0, this.deleted && Pe && Object.keys(Pe).length > 0 && (this.deleted = !1)), Pe && (this.null_flavour = null, this.null_reason = null, this.nullFlavourProperty.notifyPropertyChanged(this), this.nullReasonProperty.notifyPropertyChanged(this)), this._data = void 0 === Pe ? null : Pe;
    }
    isComplexType() {
      return !1;
    }
    constructor(Pe) {
      this.deleted = !1, this.bindingProperties = {}, this.nullFlavourProperty = this.property(oo.ELEMENT.null_flavour).get(this.getNullFlavour.bind(this)).set(this.setNullFlavour.bind(this)).undef(), this.nullReasonProperty = this.property(oo.ELEMENT.null_reason).get(this.getNullReason.bind(this)).set(this.setNullReason.bind(this)).undef(), this.nullFlavourList = [{
        code: "253",
        text: "Unknown"
      }, {
        code: "271",
        text: "No information"
      }, {
        code: "272",
        text: "Masked"
      }, {
        code: "273",
        text: "Not applicable"
      }], this._isModified = !1, this._cleared = !1, this.node = Pe.getTemplateNode(), this._data = Pe.getData(), this.path = Pe.getPath(), this.isNew = Pe.getIsNew(), this.hash = this.getHashCode(JSON.stringify(this._data)), this.__wrapper = Pe.getWrapper(), this.property(oo.ELEMENT.null_flavour_inputs).get(this.getNullFlavourInputs.bind(this)).prop();
    }
    getNullFlavour() {
      return this.null_flavour;
    }
    getNullFlavourInputs() {
      return this.nullFlavourList;
    }
    setNullFlavour(Pe) {
      this.data = this.data || {}, Pe && !Pe.code ? (this.data = null, this.null_flavour = null) : (this.data["|_null_flavour"] = Pe, this.null_flavour = Pe), this.nullFlavourProperty.notifyPropertyChanged(this);
    }
    getNullReason() {
      return this.null_reason;
    }
    setNullReason(Pe) {
      this.data = this.data || {}, this.null_reason = Pe, this.data["|_null_reason"] = Pe, this.nullReasonProperty.notifyPropertyChanged(this);
    }
    getBindingProperties() {
      return this.bindingProperties;
    }
    getIsNew() {
      return this.isNew;
    }
    getPath() {
      return this.path;
    }
    getData() {
      return this._data;
    }
    getType() {
      return this.node.getRmType();
    }
    getNode() {
      return this.node;
    }
    checkModified() {
      return this._isModified || this.deleted || this.hash !== this.getHashCode(JSON.stringify(this._data)) || this.isNew && !this.empty();
    }
    empty() {
      return [null, void 0].includes(this.data) || Number.isNaN(this.data) || "" === this.data;
    }
    validate(Pe = !1) {
      return [];
    }
    save() {
      this.__wrapper.set(this), this._isModified = !1;
    }
    isDeleted() {
      return this.deleted;
    }
    isCleared() {
      return this._cleared;
    }
    isRequired() {
      return this.node.getMin() >= 1;
    }
    clear(Pe = !0) {
      null == this._data || (this.hash = this.getHashCode(JSON.stringify(this._data)), this._data = null, this._cleared = !0, this._isModified = !0, Pe && Object.keys(this.bindingProperties).forEach(at => this.bindingProperties[at].notifyPropertyChanged(void 0)));
    }
    delete(Pe) {
      this.deleted || (Pe && !(null == this._data) && (this._data = null), this.deleted = !0, this._isModified = !0, Object.keys(this.bindingProperties).forEach(at => this.bindingProperties[at].notifyPropertyChanged(void 0)));
    }
    destroy() {
      Object.values(this.bindingProperties).forEach(Pe => Pe.unsubscribeAll());
    }
    restore() {
      this.deleted && (this.deleted = !1, this._isModified = !0, this._cleared = !1, Object.keys(this.bindingProperties).forEach(Pe => this.bindingProperties[Pe].notifyPropertyChanged(void 0)));
    }
    assign(Pe) {
      Pe.getType() !== this.getType() && this.error(Ci.baseTypeMessagesAssignError.text);
      const at = Pe.getData();
      this.data = null != at ? JSON.parse(JSON.stringify(at)) : void 0, (void 0 !== at || null !== at) && (this._cleared = !1, this.deleted && (this.deleted = !1)), Object.keys(this.bindingProperties).forEach(Zt => this.bindingProperties[Zt].notifyPropertyChanged(void 0));
    }
    multiply() {
      const at = this.__wrapper.getByPath(this.path.parent()).get(`${this.node.getId()}[*]`);
      return at.data = this.data, at;
    }
    reload() {
      return this.__wrapper.getByPath(this.path);
    }
    message(Pe) {
      return Pi.message(Pe, this.path);
    }
    error(Pe) {
      throw Ii.create(Pe, this.path);
    }
    property(Pe) {
      return new Di(this, Pe);
    }
    getHashCode(Pe) {
      let at = 0;
      if (!Pe || !Pe.length) return at;
      for (let Zt = 0; Zt < Pe.length; Zt++) at = (at << 5) - at + Pe.charCodeAt(Zt), at &= at;
      return at;
    }
  }
  class jo extends lo {
    constructor(Pe, at) {
      super(Pe), this.defaultValue = void 0, this.bindingProperty = this.property(oo[this.node.getRmTypeAsString()].value).get(this.getString.bind(this)).set(this.setString.bind(this)).undef();
      const Zt = this.node.getInputByType(at);
      Zt && (this.defaultValue = void 0 !== Zt.defaultValue ? Zt.defaultValue : void 0, Zt.validation && (this.rangeConstraint = Zt.validation.range, this.precisionConstraint = Zt.validation.precision)), this.input = Zt;
    }
    getBindingProperty() {
      return this.bindingProperty;
    }
    getInput() {
      return this.input;
    }
    getValue() {
      const Pe = this.deserialize(this.data);
      return void 0 !== Pe ? Pe : this.getDefault();
    }
    setString(Pe) {
      this.setValue(this.deserialize(Pe));
    }
    getString() {
      return null != this.data ? this.data.toString() : void 0;
    }
    setValue(Pe) {
      const at = this.serialize(Pe);
      this.data = at, this.bindingProperty.notifyPropertyChanged(Pe);
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return Pe || this.isRequired() && this.empty() && at.push(this.message(Ci.validateRequired.text)), at;
    }
    getDefault() {
      return void 0 !== this.defaultValue ? this.deserialize(this.defaultValue) : void 0;
    }
    deserialize(Pe) {
      throw new Error(Ci.singleInputMessagesFromImplemented.text);
    }
    serialize(Pe) {
      throw new Error(Ci.singleInputMessagesToImplemented.text);
    }
  }
  class Go extends jo {
    deserialize(Pe) {
      return void 0 === Pe ? void 0 : null === Pe ? null : "true" === Pe.toString().toLowerCase();
    }
    serialize(Pe) {
      return Pe?.toString();
    }
    constructor(Pe) {
      super(Pe, Xt.BOOLEAN);
    }
  }
  var ji = (() => {
    return (mn = ji || (ji = {}))[mn.LOCAL = 0] = "LOCAL", mn[mn.EXTERNAL = 1] = "EXTERNAL", ji;
    var mn;
  })();
  class ti extends lo {
    getCode() {
      return this.code;
    }
    getCodedText() {
      return {
        code: this.code,
        text: this.value,
        infoLabel: this.infoLabel
      };
    }
    setCodedText(Pe) {
      this.setCode(Pe ? Pe.code : void 0), this.setValue(Pe ? Pe.text : void 0);
    }
    getList() {
      return this.terminologyItems ? this.terminologyItems.map(Pe => ({
        code: Pe.value,
        text: Pe.label,
        infoLabel: Pe.localizedDescriptions && Pe.localizedDescriptions.ru
      })) : void 0;
    }
    getValue() {
      return this.value;
    }
    getInfoLabel() {
      return this.infoLabel;
    }
    setCode(Pe) {
      if (Pe) {
        let at;
        if (this.terminologyItems && this.terminologyItems.length > 0 && (at = this.terminologyItems.filter(Zt => Zt.value === Pe)[0], !at)) return;
        this.data || (this.data = {}), this.data[this.suffix.code] = Pe, at && this.value !== at.value && (this.setValue(at.label), this.terminologyCode && (this.data[this.suffix.terminology] = this.terminologyCode));
      } else this.data = void 0;
      this.codeProperty.notifyPropertyChanged(this), this.codedTextProperty.notifyPropertyChanged(this);
    }
    empty() {
      return super.empty() || this.data && !this.data[this.suffix.code];
    }
    setValue(Pe) {
      let at = this.data;
      ![void 0, null].includes(Pe) || at ? (at || (at = {}), at[this.suffix.value] = Pe, this.data = at, this.textProperty.notifyPropertyChanged(this), this.codedTextProperty.notifyPropertyChanged(this)) : this.textProperty.notifyPropertyChanged(this);
    }
    setInfoLabel(Pe) {
      this.data || (this.data = {}), this.data[this.suffix.infoLabel] = Pe, this.infoLabelProperty.notifyPropertyChanged(this.data);
    }
    getTerminology() {
      return this.terminologyType;
    }
    getTerminologyCode() {
      return this.terminologyCode;
    }
    getLocalTerminology() {
      return this.terminologyItems;
    }
    getDefaultCode() {
      return this.defaultCode;
    }
    getDefaultValue() {
      return this.defaultValue;
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return !Pe && !this.code && !this.null_flavour && this.isRequired() && at.push(this.message(yi.validateFieldsRequired.text)), at;
    }
    destroy() {
      this.codeProperty.unsubscribeAll(), this.codedTextProperty.unsubscribeAll(), this.textProperty.unsubscribeAll(), super.destroy();
    }
    get code() {
      return this.data ? this.data[this.suffix.code] : void 0;
    }
    get value() {
      return this.data ? this.data[this.suffix.value] : void 0;
    }
    get terminologyCode() {
      return (this.data ? this.data[this.suffix.terminology] : void 0) || this.inputTerminologyCode;
    }
    get infoLabel() {
      return this.data ? this.data[this.suffix.infoLabel] : void 0;
    }
    constructor(Pe) {
      super(Pe), this.codeProperty = this.property(oo.DV_CODED_TEXT.value).get(this.getCode.bind(this)).set(this.setCode.bind(this)).undef(), this.textProperty = this.property(oo.DV_CODED_TEXT.text).get(this.getValue.bind(this)).set(this.setValue.bind(this)).undef(), this.infoLabelProperty = this.property(oo.DV_CODED_TEXT.infoLabel).get(this.getValue.bind(this)).undef(), this.codedTextProperty = this.property(oo.DV_CODED_TEXT.codedText).get(this.getCodedText.bind(this)).set(this.setCodedText.bind(this)).undef(), this.suffix = {
        code: "|code",
        value: "|value",
        terminology: "|terminology",
        infoLabel: "|infoLabel"
      };
      const at = this.node.getInputBySuffix("code");
      this.terminologyType = ji.EXTERNAL, at && (this.suffix.code = `|${at.suffix}`, this.terminologyItems = at.list, this.inputTerminologyCode = at.terminology, this.defaultCode = at.defaultValue, this.terminologyType = this.terminologyItems && this.terminologyItems.length > 0 ? ji.LOCAL : ji.EXTERNAL, !this.defaultCode && this.terminologyItems && this.terminologyItems.length > 0 && (this.defaultCode = this.terminologyItems[0].value));
      const Zt = this.node.getInputBySuffix("value");
      Zt && (this.defaultValue = Zt.defaultValue), this.defaultValue && this.defaultCode && !this.terminologyItems && (this.terminologyItems = [{
        value: this.defaultCode,
        label: this.defaultValue
      }]), this.property(oo.DV_CODED_TEXT.list).get(this.getList.bind(this)).prop(), this.property(oo.DV_CODED_TEXT.defaultValue).get(this.getDefaultCode.bind(this)).prop(), this.property(oo.DV_CODED_TEXT.defaultText).get(this.getDefaultValue.bind(this)).prop();
    }
  }
  const fi = {
    toStringAnd: new d({
      en: " and ",
      ru: " и "
    }),
    equal: new d({
      en: " equal ",
      ru: "равняться"
    }),
    lessOrEqual: new d({
      en: "less than or equal to",
      ru: "меньше или равняться"
    }),
    moreOrEqual: new d({
      en: "greater than or equal to",
      ru: "больше или равняться"
    }),
    less: new d({
      en: "less than",
      ru: "меньше"
    }),
    more: new d({
      en: "greater than",
      ru: "больше"
    })
  };
  var Fi = (() => {
    return (mn = Fi || (Fi = {}))[mn.Range = 0] = "Range", mn[mn.Precision = 1] = "Precision", Fi;
    var mn;
  })();
  class Rn {
    constructor(Pe) {
      this.validation = Pe;
    }
    checkOp(Pe, at, Zt) {
      if (void 0 === at || void 0 === Zt) return {
        check: !0
      };
      const Li = void 0 === Pe || isNaN(Pe) ? 0 : Pe;
      switch (at) {
        case "=":
          return {
            check: Li === Zt,
            message: `${fi.equal.text} ${Zt}`
          };
        case ">":
          return {
            check: Li > Zt,
            message: `${fi.more.text} ${Zt}`
          };
        case ">=":
          return {
            check: Li >= Zt,
            message: `${fi.moreOrEqual.text} ${Zt}`
          };
        case "<":
          return {
            check: Li < Zt,
            message: `${fi.less.text} ${Zt}`
          };
        case "<=":
          return {
            check: Li <= Zt,
            message: `${fi.lessOrEqual.text} ${Zt}`
          };
        default:
          return {
            check: !0
          };
      }
    }
    checkConstraint(Pe) {
      return this.checkOp(Pe, this.validation.minOp, this.validation.min).check && this.checkOp(Pe, this.validation.maxOp, this.validation.max).check;
    }
    toString(Pe) {
      return [this.checkOp(Pe, this.validation.minOp, this.validation.min), this.checkOp(Pe, this.validation.maxOp, this.validation.max)].filter(Zt => !Zt.check).map(Zt => Zt.message).join(fi.toStringAnd.text);
    }
  }
  const ki = {
    constraintDigitAfterDot: new d({
      en: "There should be signs after the point",
      ru: "Знаков после точки должно быть"
    }),
    constraintValue: new d({
      en: "Value must be",
      ru: "Значение должно быть"
    })
  };
  class Ei extends Pi {
    constructor(Pe, at, Zt, Li) {
      super();
      let mo = "";
      at === Fi.Precision ? mo = ki.constraintDigitAfterDot.text : at === Fi.Range && (mo = ki.constraintValue.text), mo += ` ${new Rn(Pe).toString(Zt)}`, this.setMessage(mo, Nn.ERROR, Li), this.constraint = Pe, this.value = Zt;
    }
  }
  class Wt {
    static countDecimals(Pe) {
      if (void 0 === Pe) return 0;
      const at = Pe.toString().split(".");
      return at.length <= 1 ? 0 : at[1].length;
    }
    constructor(Pe) {
      this.validation = Pe;
    }
    validate(Pe, at) {
      const Zt = [];
      return this.validation && (this.validation.precision && (this.validation.precision.min > 0 && (this.validation.precision.min = 0), new Rn(this.validation.precision).checkConstraint(Wt.countDecimals(at)) || Zt.push(new Ei(this.validation.precision, Fi.Precision, Wt.countDecimals(at), Pe.getPath()))), void 0 !== at && this.validation.range && !new Rn(this.validation.range).checkConstraint(at) && Zt.push(new Ei(this.validation.range, Fi.Range, at, Pe.getPath()))), Zt;
    }
  }
  class Oi extends jo {
    constructor(Pe, at) {
      super(Pe, at);
      const Zt = this.node.getInputByType(at);
      Zt && (this.validation = Zt.validation);
    }
    setValue(Pe) {
      const at = this.serialize(Pe),
        Zt = at ? +at : void 0;
      this.data = void 0 === Zt || isNaN(Zt) ? void 0 : Zt, this.bindingProperty.notifyPropertyChanged(Pe);
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return !Pe && this.validation && new Wt(this.validation).validate(this, this.data).forEach(Zt => at.push(Zt)), at;
    }
  }
  class Ji extends Oi {
    deserialize(Pe) {
      if (null == Pe) return;
      const at = Pe.toString();
      if ("" === at) return;
      const Zt = +at;
      return isNaN(Zt) ? void 0 : Zt;
    }
    serialize(Pe) {
      return Pe?.toString();
    }
    constructor(Pe) {
      super(Pe, Xt.INTEGER);
    }
  }
  function Ao(mn) {
    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?(.\d{1,3})?$/.test(mn);
  }
  function Sr(mn) {
    return Ao(mn) ? `${new Date().toISOString().slice(0, 10)}T${mn}` : mn;
  }
  const us = ["YYYY", "MM", "DD"],
    Ps = ["HH", "mm", "ss"];
  class hs extends jo {
    constructor(Pe, at, Zt, Li) {
      super(Pe, at), this.dateTimeBindingProperty = this.property(oo[this.node.getRmTypeAsString()].date).set(this.setValue.bind(this)).get(this.getValue.bind(this)).undef(), this.hasPattern = !1, this.inputformat = Zt, this.outputformat = Li || Zt;
    }
    getFormat() {
      return this.inputformat;
    }
    setValue(Pe, at) {
      let Zt;
      if (Pe) {
        if (this.hasPattern) "string" == typeof Pe ? Pe && this.patternRegExp.test(Pe) && (Zt = le(Pe, this.formatFromValue(Pe))) : Zt = le(Pe, this.formatFromValue(Pe.format()));else if ("string" == typeof Pe) {
          const Li = Sr(Pe);
          Zt = at ? le(Li, at) : le(Li);
        } else Zt = Pe;
        if (!Zt.isValid()) throw this.error(Ci.dateTimeMessagesFormatNotValid.text);
        super.setValue(Zt);
      } else super.setValue(null);
      this.dateTimeBindingProperty.notifyPropertyChanged(Pe);
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return !Pe && this.getValue() && !this.getValue().isValid() && at.push(this.message(Ci.dateTimeMessagesFormatNotValid.text)), at;
    }
    deserialize(Pe) {
      if (!Pe) return;
      let at = Pe.toString();
      if (at = Sr(at), this.hasPattern) {
        if (!this.patternRegExp.test(Pe)) return;
        this._outputFormat = this.formatFromValue(Pe);
      }
      const Zt = this.hasPattern ? le(at) : le(at, this.inputformat);
      return Zt.isValid() ? Zt : void 0;
    }
    serialize(Pe) {
      if (Pe) return Pe.format(this.hasPattern ? this._outputFormat : this.outputformat);
    }
    formatFromValue(Pe) {
      let at = "";
      const Zt = Pe.split("T"),
        Li = Zt[0] || "";
      let mo = Zt[1] || "";
      return Ao(Zt) && !mo && (mo = Li), Li && !Ao(Li) && (at = Li.split("-").map((Xo, Cr) => !!us[Cr] && us[Cr]).join("-")), mo && (at && (at += "T"), at += mo.split(":").map((Xo, Cr) => !!Ps[Cr] && Ps[Cr]).join(":")), at;
    }
    createRegexp(Pe) {
      if (!Pe) return new RegExp("");
      const at = Pe.replace(new RegExp(/.XX/gm), "").toUpperCase().replace("YYYY", "\\d{4}").replace("-MM", "-(0[1-9]|1[0-2])").replace("-DD", "-(0[1-9]|[12]d|3[01])").replace(new RegExp(/[MHS]/gm), "\\d").replace(new RegExp(/\?/gm), "\\d?").replace(new RegExp(/([-:T])/g), "$1?");
      return new RegExp(`${at}$`);
    }
  }
  class oi extends hs {
    getDate() {
      return this.getValue();
    }
    setDate(Pe) {
      this.setValue(Pe);
    }
    constructor(Pe) {
      super(Pe, Xt.DATE, "YYYY-MM-DD");
    }
  }
  class yo extends hs {
    constructor(Pe) {
      super(Pe, Xt.DATETIME, "YYYY-MM-DDTHH:mm:ss.SSSZ");
    }
  }
  class Qi {
    static create(Pe, at, Zt, Li, mo, Xo, Cr) {
      const Xr = new Qi();
      return Xr.year = Pe, Xr.month = at, Xr.week = Zt, Xr.day = Li, Xr.hour = mo, Xr.minute = Xo, Xr.second = Cr, Xr;
    }
  }
  class Qo {
    constructor() {
      this.iso8601_version = "0.2";
    }
    static parse(Pe, at) {
      return Qo.parsePeriodString(Pe, at);
    }
    static isNumber(Pe) {
      return !isNaN(parseFloat(Pe)) && isFinite(Pe);
    }
    static parseToTotalSeconds(Pe) {
      const at = [31104e3, 2592e3, 604800, 86400, 3600, 60, 1],
        Zt = Qo.parsePeriodString(Pe);
      let Li = 0;
      for (let mo = 0; mo < Zt.length; mo++) {
        let Xo = Zt[mo];
        Qo.isNumber(Xo) || (Xo = 0), Li += Zt[mo] * at[mo];
      }
      return Li;
    }
    static isValid(Pe) {
      try {
        return Qo.parsePeriodString(Pe), !0;
      } catch {
        return !1;
      }
    }
    static periodToString(Pe) {
      if (Pe instanceof Array && 7 === Pe.length) {
        const at = ["Y", "M", "W", "D", "H", "M", "S"];
        let Zt = "P",
          Li = !1,
          mo = !1;
        return Pe.forEach(function (Xo, Cr) {
          4 === Cr && (Zt += "T"), void 0 !== Xo && (Zt += Xo + at[Cr], Li || (Li = Cr <= 3), mo || (mo = Cr >= 4));
        }), Li || mo ? mo || (Zt = Zt.substring(0, Zt.length - 1)) : Zt = void 0, Zt;
      }
    }
    static parsePeriodString(Pe, at = !1) {
      const Zt = at || !1,
        Li = [2, 3, 4, 5, 7, 8, 9],
        mo = [0, 0, 0, 0, 0, 0, 0],
        Xo = [0, 12, 4, 7, 24, 60, 60];
      let Cr;
      if (!Pe) return [void 0, void 0, void 0, void 0, void 0, void 0, void 0];
      if (!(Pe = Pe.toUpperCase())) return mo;
      if ("string" != typeof Pe) throw new Error(Ci.periodIsoParserMessagesPeriodInvalid.params({
        period: Pe
      }));
      if (!(Cr = /^P((\d+Y)?(\d+M)?(\d+W)?(\d+D)?)?(T(\d+H)?(\d+M)?(\d+S)?)?$/.exec(Pe))) throw new Error(Ci.periodIsoParserMessagesPeriodInvalid.params({
        period: Pe
      }));
      for (let Xr = 0; Xr < Li.length; Xr++) {
        const ys = Li[Xr];
        mo[Xr] = Cr[ys] ? +Cr[ys].replace(/[A-Za-z]+/g, "") : void 0;
      }
      if (Zt) for (let Xr = mo.length - 1; Xr > 0; Xr--) mo[Xr] >= Xo[Xr] && (mo[Xr - 1] = mo[Xr - 1] + Math.floor(mo[Xr] / Xo[Xr]), mo[Xr] = mo[Xr] % Xo[Xr]);
      return mo;
    }
  }
  let Kr = (() => {
    class mn extends lo {
      static createDuration(at) {
        const Zt = new Qi(),
          Li = Qo.parse(at);
        for (let mo = 0; mo < Li.length; mo++) Zt[mn.fieldNames[mo]] = Li[mo];
        return Zt;
      }
      getConstraints() {
        const at = [];
        if (!this.node.getInputs()) return;
        const Zt = this.node.getInputs();
        for (let Li = 0; Li < this.node.getInputs().length; Li++) {
          const mo = Zt[Li];
          at.push({
            name: mo.suffix,
            constraint: mo.validation ? mo.validation.range : void 0
          });
        }
        return at;
      }
      clear() {
        this.duration = void 0, super.clear();
      }
      getDuration() {
        return this.duration;
      }
      getDefault() {
        return this.default;
      }
      assign(at) {
        super.assign(at), this.duration = mn.createDuration(this.data);
      }
      setDuration(at) {
        console.log("duaration", at);
        const Zt = [],
          Li = mn.fieldNames;
        for (let mo = 0; mo < Li.length; mo++) {
          const Xo = Li[mo];
          null == at[Xo] || "" === at[Xo] || isNaN(+at[Xo]) ? Zt.push(void 0) : Zt.push(at[Xo]);
        }
        this.data = Qo.periodToString(Zt), this.duration = mn.createDuration(this.data), this.valueProperty.notifyPropertyChanged(at);
      }
      destroy() {
        this.valueProperty.unsubscribeAll(), super.destroy();
      }
      validate(at = !1) {
        const Zt = super.validate(at);
        return at || (!this.data && this.isRequired() && Zt.push(this.message(yi.validateFieldsRequired.text)), Zt.push(...this.validateDuration(this.duration))), Zt;
      }
      constructor(at) {
        super(at), this.valueProperty = this.property(oo.DV_DURATION.value).get(this.getDuration.bind(this)).set(this.setDuration.bind(this)).undef(), this.duration = mn.createDuration(this.data), this.default = new Qi();
        for (let Zt = 0; Zt < mn.fieldNames.length; Zt++) {
          const Li = mn.fieldNames[Zt],
            mo = this.node.getInputFor(Li);
          this.default[Li] = mo && mo.defaultValue ? mo.defaultValue : 0;
        }
      }
      validateDuration(at) {
        if (!this.duration) return [];
        const Zt = mn.fieldNames,
          Li = [];
        for (let mo = 0; mo < Zt.length; mo++) {
          const Xo = Zt[mo],
            Cr = this.node.getInputFor(Zt[mo]);
          if (!Cr || !Cr.validation || !Cr.validation.range) continue;
          const Xr = Cr.validation.range,
            ys = at[Xo];
          new Rn(Xr).checkConstraint(ys) || Li.push(new Ei(Xr, Fi.Range, ys, this.getPath()));
        }
        return Li;
      }
    }
    return mn.fieldNames = ["year", "month", "week", "day", "hour", "minute", "second"], mn;
  })();
  class _s extends lo {
    getIdentifier() {
      return {
        id: this.getItem(this.suffix.id),
        type: this.getItem(this.suffix.type),
        issuer: this.getItem(this.suffix.issuer),
        assigner: this.getItem(this.suffix.assigner)
      };
    }
    destroy() {
      this.valueProperty.unsubscribeAll(), super.destroy();
    }
    setIdentifier(Pe) {
      Pe && Pe.id && void 0 !== Pe.id ? (this.data || (this.data = {}), this.data[this.suffix.id] = Pe.id, this.data[this.suffix.type] = Pe.type, this.data[this.suffix.issuer] = Pe.issuer, this.data[this.suffix.assigner] = Pe.assigner) : this.data = void 0, this.valueProperty.notifyPropertyChanged(void 0);
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return !this.getIdentifier().id && !this.null_flavour && this.isRequired() && at.push(this.message(yi.validateFieldsRequired.text)), at;
    }
    constructor(Pe) {
      super(Pe), this.suffix = {
        id: "|id",
        type: "|type",
        issuer: "|issuer",
        assigner: "|assigner"
      }, this.valueProperty = this.property(oo.DV_IDENTIFIER.value).get(this.getIdentifier.bind(this)).set(this.setIdentifier.bind(this)).undef();
    }
    getItem(Pe) {
      return this.data ? this.data[Pe] : void 0;
    }
  }
  class ra extends Oi {
    constructor(Pe) {
      super(Pe, Xt.INTEGER);
    }
    deserialize(Pe) {
      if (void 0 === Pe) return;
      const Zt = +Pe.toString();
      return isNaN(Zt) ? void 0 : 0 | Zt;
    }
    serialize(Pe) {
      return void 0 !== Pe ? (+(0 | Pe)).toString() : void 0;
    }
  }
  const Or = "@";
  class Fs {
    static getAqlNodeId(Pe, at) {
      return at && Pe.nodeId ? Pe._parent && Pe._parent.filteredChildren && Pe._parent.filteredChildren.filter(Zt => Zt.nodeId === Pe.nodeId).length > 1 ? `${Pe.nodeId}[${Pe.id}]` : Pe.nodeId : Pe.id;
    }
    static findChildrenRecursive(Pe, at, Zt) {
      void 0 !== at.filteredChildren && at.filteredChildren.forEach(Li => {
        Pe.match(Li) && Zt.push(Li), Fs.findChildrenRecursive(Pe, Li, Zt);
      });
    }
    static getNodeByAqlPathRecursive(Pe, at) {
      if (at.filteredChildren) for (let Zt = 0; Zt < at.filteredChildren.length; Zt++) {
        const Li = at.filteredChildren[Zt];
        if (Li) {
          if (Pe === Li.getAqlPath()) return Li;
          if (Pe.startsWith(Li.getAqlPath())) return Fs.getNodeByAqlPathRecursive(Pe, Li);
        }
      }
    }
    constructor(Pe) {
      this._childNodes = void 0, this.slotId = void 0, this.id = void 0, this.name = void 0, this.localizedName = void 0, this.localizedNames = void 0, this.min = void 0, this.max = void 0, this.rmType = void 0, this.nodeId = void 0, this.aqlPath = void 0, this.inputs = void 0, this.filteredChildren = void 0, this.children = void 0, this.skipRmTypes = [Je.ITEM_TREE, Je.ITEM_LIST, Je.ITEM_SINGLE, Je.ITEM_TABLE, Je.ITEM_STRUCTURE, Je.HISTORY], this.id = Pe.id, this.name = Pe.name, this.localizedName = Pe.localizedName, this.localizedNames = Pe.localizedNames, this.min = Pe.min, this.max = Pe.max, this.rmType = Pe.rmType && Pe.rmType.replace("<", "_").replace(">", ""), this.nodeId = Pe.nodeId, this.aqlPath = Pe.aqlPath;
      const at = void 0 !== Pe.children ? Pe.children.map(Zt => new Fs(Zt)) : void 0;
      this.children = at, this.filteredChildren = this.getChildNodes(at), this.inputs = Pe.inputs;
    }
    getId() {
      return this.id;
    }
    getName() {
      return this.name;
    }
    getMin() {
      return this.min;
    }
    getMax() {
      return this.max;
    }
    getAqlPath() {
      return this.aqlPath;
    }
    getNodeId() {
      return this.nodeId;
    }
    getRmType() {
      return Je[this.rmType];
    }
    getRmTypeAsString() {
      return this.rmType;
    }
    getInputs() {
      return this.inputs;
    }
    getChildren() {
      return this.filteredChildren;
    }
    getInput(Pe) {
      return Pe >= 0 && Pe < this.inputs.length ? this.inputs[Pe] : void 0;
    }
    getInputFor(Pe) {
      return this.inputs ? this.inputs.find(at => at.suffix === Pe) : void 0;
    }
    findChildren(Pe) {
      const at = [];
      return Fs.findChildrenRecursive(Pe, this, at), at;
    }
    getTemplate() {
      if (void 0 === this._parent) return this;
      let Pe = this._parent;
      for (; Pe._parent;) Pe = Pe._parent;
      return Pe;
    }
    getParentPathIds(Pe) {
      const at = [];
      at.push(Fs.getAqlNodeId(this, Pe));
      let Zt = this._parent;
      for (; Zt;) at.push(Fs.getAqlNodeId(Zt, Pe)), Zt = Zt._parent;
      return at.reverse();
    }
    getPath(Pe, at) {
      const Zt = this.getParentPathIds(Pe);
      if (at) for (let Li = 0; Li < Zt.length; Li++) at[Li] && at[Li].startsWith(Zt[Li]) && (Zt[Li] = at[Li]);
      return Zt.join(Pe ? "/" : Or);
    }
    getInputByType(Pe) {
      return this.inputs ? this.inputs.find(at => at.type === Xt[Pe]) : void 0;
    }
    getInputBySuffix(Pe) {
      return this.inputs ? this.inputs.find(at => at.suffix === Pe) : void 0;
    }
    getNodeByAqlPath(Pe) {
      let at = Pe;
      return Pe.startsWith(this.getAqlPath()) || (at = `${this.getAqlPath()}/${Pe}`), Fs.getNodeByAqlPathRecursive(at, this);
    }
    isArchetype() {
      return Fs.archetypes.indexOf(this.getRmType()) >= 0;
    }
    getSlot() {
      return this.slotId;
    }
    getChildNodes(Pe) {
      const at = [];
      return Pe && Pe.forEach(Zt => {
        this.skipRmTypes.indexOf(Je[Zt.rmType]) >= 0 ? at.push(...this.getChildNodes(Zt.children)) : at.push(Zt);
      }), at;
    }
  }
  Fs.archetypes = [Je.OBSERVATION, Je.EVENT_CONTEXT, Je.COMPOSITION, Je.SECTION, Je.EVALUATION, Je.INSTRUCTION, Je.ACTION, Je.ADMIN_ENTRY, Je.CLUSTER, Je.ACTIVITY];
  class xa {
    constructor(Pe) {
      this.name = "IncorrectPathError", this.message = "Unable to find node in webTemplate definition.", this.path = Pe, this.message = `${this.message} ${this.path}`;
    }
  }
  const rs = {
    messagesRmTypeRegistered: new d({
      en: "RmType is not registered. \"<rmType>\"",
      ru: "RmType не зарегистрирован \"<rmType>\""
    }),
    messagesPathNotParent: new d({
      en: "The path \"<path>\" does not have a parent.",
      ru: "Путь \"<path>\" не является родительским"
    })
  };
  class Js {
    static getRoot(Pe) {
      const at = new Js(void 0, void 0, void 0);
      return at.parts = [Pe.getId()], at.node = Pe, at;
    }
    static removeBrackets(Pe) {
      return Pe.indexOf("[") < 0 ? Pe : Pe.split(".").map(at => at.indexOf("[") >= 0 ? at.substring(0, at.indexOf("[")) : at).join(".");
    }
    static segmentContainsDot(Pe, at) {
      return Pe.includes(".") && Pe.startsWith(at);
    }
    toString() {
      return this.parts ? this.parts.join(Or) : void 0;
    }
    toZero() {
      const Pe = new Js(void 0, void 0, void 0);
      return Pe.parts = [...this.parts.map(at => at.indexOf("[") >= 0 ? `${at.split("[")[0]}[0]` : at)], Pe.node = this.node, Pe;
    }
    rebase(Pe) {
      const at = new Js(void 0, void 0, void 0);
      return at.parts = [...this.parts], at.node = this.node, Pe.parts.forEach((Zt, Li) => {
        at.parts[Li] = Zt;
      }), at;
    }
    find(Pe, at = !1, Zt = Or) {
      const Li = [],
        mo = Pe.split(Zt);
      let Xo = this,
        Cr = "",
        Xr = !1,
        ys = !1;
      for (let Hs = 0; Hs < mo.length; Hs++) {
        let la = Cr + ("" === Cr ? "" : Zt) + mo[Hs];
        const St = Js.removeBrackets(la);
        if (!Xo.node._parent && !Xr) {
          if (Xo.node.getId() === St) {
            Cr = "", Xr = !0;
            continue;
          }
          if (Js.segmentContainsDot(Xo.node.getId(), St)) {
            Cr = la;
            continue;
          }
        }
        if (Xo.node._childNodes.hasOwnProperty(St)) la.endsWith("]") || (la += "[0]"), Xo = new Js(Xo.parts, Xo.node._childNodes[St], la), Li.push(Xo), Cr = "";else {
          const Wi = Object.keys(Xo.node._childNodes);
          let Pt = !1;
          for (let Ki = 0; Ki < Wi.length; Ki++) if (Js.segmentContainsDot(Wi[Ki], St)) {
            Cr = la, Pt = !0;
            break;
          }
          if (!Pt) {
            ys = !0;
            break;
          }
        }
      }
      if (ys || "" !== Cr) {
        const Hs = Js.removeBrackets(Pe),
          la = Js.removeBrackets(this.parts.join(Zt));
        if (Hs.startsWith(la) && !at) {
          const St = this.findRoot().find(Pe, !0),
            Wi = [];
          for (let Pt = 0; Pt < St.length; Pt++) this.parts.length < St[Pt].parts.length && Wi.push(St[Pt]);
          return Wi;
        }
        throw new xa(Pe);
      }
      return Xr && !Xo.node._parent && Xo.node._childNodes[Xo.node.getId()] && 0 === Li.length && Pe.indexOf("[") >= 0 ? [new Js([Xo.node.getId()], Xo.node._childNodes[Xo.node.getId()], Pe)] : Li;
    }
    compositionPath(Pe) {
      const at = [];
      at.push(this.parts[0]);
      let Li,
        Zt = !1;
      Pe && Pe.hasOwnProperty(this.parts[0]) ? Li = Pe[this.parts[0]] : Zt = !0;
      for (let Xo = 1; Xo < this.parts.length; Xo++) {
        const Cr = this.parts[Xo],
          Xr = Cr.substr(0, Cr.indexOf("[")),
          ys = +Cr.substr(Cr.indexOf("[") + 1, Cr.indexOf("]") - Cr.indexOf("[") - 1);
        if (Zt || Li && Li.hasOwnProperty(Xr) || (Zt = !0), Zt) at.push(Xr + "[" + (Number.isNaN(ys) ? 0 : ys) + "]");else {
          const Hs = Li[Xr];
          Number.isNaN(ys) ? (Zt = !0, at.push(Xr + "[" + (Hs ? Hs.length : 0) + "]")) : void 0 === Hs || void 0 === Hs[ys] ? (Zt = !0, at.push(Xr + "[" + ys + "]")) : (Li = Li[Xr][ys], at.push(Xr + "[" + ys + "]"));
        }
      }
      const mo = new Js(void 0, void 0, void 0);
      return mo.parts = at, mo.node = this.node, mo;
    }
    getPathAsArray(Pe) {
      const at = this.compositionPath(Pe),
        Zt = [];
      for (let Li = 0; Li < at.parts.length; Li++) {
        const mo = at.parts[Li];
        if (mo.indexOf("[") > 0) {
          const Xo = mo.substr(0, mo.indexOf("[")),
            Cr = +mo.substr(mo.indexOf("[") + 1, mo.indexOf("]") - mo.indexOf("[") - 1);
          Zt.push(Xo), Zt.push(Cr);
        } else Zt.push(mo);
      }
      return Zt;
    }
    getTemplateNode() {
      return this.node;
    }
    getParts() {
      return this.parts;
    }
    getFullPath(Pe) {
      return this.compositionPath(Pe).parts.join(".");
    }
    parent() {
      if (!this.node._parent) throw new xa(rs.messagesPathNotParent.params({
        path: this.parts.join(".")
      }));
      const Pe = new Js(void 0, void 0, void 0);
      return Pe.parts = [...this.parts], Pe.parts.splice(-1), Pe.node = this.node._parent, Pe;
    }
    isParentOf(Pe) {
      const at = Pe.getParts();
      let Zt = [];
      for (let Li = 0; Li < at.length; Li++) if (Li >= this.parts.length) Zt || (Zt = []), Zt.push(at[Li]);else if (!this.parts[Li] || at[Li] !== this.parts[Li]) return {
        isParent: !1
      };
      return {
        isParent: void 0 !== Zt && Zt.length > 0,
        diff: Zt ? Zt.join(Or) : void 0,
        diffParts: Zt
      };
    }
    constructor(Pe, at, Zt) {
      !Pe || !Zt || (this.parts = [...Pe, Zt], this.node = at);
    }
    findRoot() {
      let Pe = this.node;
      for (; Pe._parent;) Pe = Pe._parent;
      return Js.getRoot(Pe);
    }
  }
  class ho extends e {
    setValue(Pe) {
      this.setValues(Pe);
    }
    getValue(Pe) {
      return new te.X(this.getValues());
    }
    getObjects() {
      return this.objects;
    }
    constructor(Pe, at, Zt) {
      super(Zt), this.objects = [], this.values = [], this.path = at, this.parent = Pe;
    }
    addElement(Pe) {
      this.objects.indexOf(Pe) >= 0 || Pe.getBindingProperties()[this.code].getValue().subscribe(at => {
        this.values.push(at), this.objects.push(Pe), Pe.getBindingProperties()[this.code].subscribe(this.onValueUpdated.bind(this)), this.notifyPropertyChanged(void 0);
      });
    }
    schemaEqual(Pe, at) {
      return Pe === at;
    }
    getValues() {
      return this.values;
    }
    setValues(Pe) {
      if (void 0 === Pe || 0 === Pe.length) {
        if (void 0 === this.values || 0 === this.values.length) return;
        return this.objects.forEach(Xo => {
          Xo.clear(), Xo.delete();
        }), this.values = [], void this.notifyPropertyChanged(void 0);
      }
      let Zt = !1,
        Li = 0;
      const mo = 0 === this.objects.length ? (0, pe.of)([]) : this.objects.map(Xo => Xo.getBindingProperties()[this.code].getValue().pipe((0, n.U)(Cr => ({
        value: Cr,
        prop: Xo.getBindingProperties()[this.code]
      }))));
      (0, be.a)(Array.isArray(mo) ? mo : [mo]).subscribe(Xo => {
        Xo.forEach(Cr => {
          const Xr = Cr.value;
          Li >= Pe.length ? (Zt = !0, Cr.prop.object.clear(), Cr.prop.object.delete()) : this.schemaEqual(Pe[Li], Xr) || (Zt = !0, Cr.prop.object.restore(), Cr.prop.setValue(Pe[Li])), Li++;
        });
        for (let Cr = Li; Cr < Pe.length; Cr++) Zt = !0, this.createNew(Pe[Cr]);
        Zt && (this.values = Pe, this.notifyPropertyChanged(Pe));
      });
    }
    createNew(Pe) {
      this.parent.get(`${this.path}[*]`).getBindingProperties()[this.code].setValue(Pe);
    }
    onValueUpdated(Pe) {
      (0, be.a)(this.objects.filter(at => !at.isDeleted()).map(at => at.getBindingProperties()[this.code].getValue())).subscribe(at => {
        this.values = at, this.notifyPropertyChanged(void 0);
      });
    }
  }
  let uo = (() => {
    class mn extends lo {
      getTemplate() {
        return this.wrapper.getTemplate();
      }
      getUid() {
        return this.uid;
      }
      addLink() {
        const at = this.get("_link[*]");
        return this.links.push(at), at;
      }
      getLinks() {
        return this.links;
      }
      getPathElements(at) {
        const Zt = [],
          Li = this.path.isParentOf(at).diffParts;
        if (!Li) return Zt;
        let mo = this;
        return Li.forEach(Xo => {
          const Cr = mo.get(Xo, q.JSON, Or);
          Zt.push(Cr), Cr instanceof mn && (mo = Cr);
        }), Zt;
      }
      constructor(at) {
        super(at), this.cache = {}, this.collectionBindingProperties = {}, this.wrapper = at.getWrapper(), this.property(oo.ARCHETYPE._this).get(() => this).prop();
        try {
          this.uid = this.get("_uid"), this.links = this.getMany("_link");
        } catch {}
      }
      isComplexType() {
        return !0;
      }
      getAllProperties() {
        return this.node.getChildren() ? this.node.getChildren().map(at => this.get(at.getId())) : [];
      }
      find(at) {
        return this.node.findChildren(at).map(Zt => this.get(Zt.getPath(!1, this.path.getParts()), q.JSON, Or));
      }
      checkModified() {
        return super.checkModified() || this.getChildren().filter(at => at.checkModified()).length > 0;
      }
      validate(at = !1) {
        const Zt = super.validate(at);
        return (at ? this.validateModifiedFields() : this.validateAllFields()).forEach(mo => Zt.push(mo)), Zt;
      }
      getWebTemplate() {
        return this.wrapper.getTemplate();
      }
      empty() {
        if (this.isDeleted()) return !0;
        const at = [];
        return this.node.getChildren().forEach(Zt => {
          if (!(this.ignoreFields().length > 0 && this.ignoreFields().indexOf(Zt.getId()) >= 0)) {
            let Li = Zt.getId();
            Zt.getRmType() !== Je.COMPOSITION && this.node.getRmType() === Je.COMPOSITION && Zt.getId() === this.node.getId() && (Li += Or + Li);
            const Xo = this.getMany(Li, Or).find(Cr => !Cr.empty());
            Xo && at.push(Xo);
          }
        }), 0 === at.length;
      }
      isCleared() {
        const at = [];
        return this.node.getChildren().forEach(Zt => {
          if (!(this.ignoreFields().length > 0 && this.ignoreFields().indexOf(Zt.getId()) >= 0)) {
            let Li = Zt.getId();
            Zt.getRmType() !== Je.COMPOSITION && this.node.getRmType() === Je.COMPOSITION && Zt.getId() === this.node.getId() && (Li += Or + Li);
            const Xo = this.getMany(Li, Or).find(Cr => Cr.isCleared());
            Xo && at.push(Xo);
          }
        }), 0 === at.length;
      }
      validateModifiedFields() {
        const at = [];
        return this.getChildren().filter(Zt => Zt.checkModified()).forEach(Zt => Zt.validate(!0).forEach(Li => at.push(Li))), at;
      }
      save() {
        this.isDeleted() ? this.wrapper.set(this) : (this.wrapper.set(this), this.getChildren().filter(Zt => Zt.checkModified()).forEach(Zt => {
          this.set(Zt);
        }));
      }
      get(at, Zt = q.JSON, Li = ".") {
        if (Zt === q.AQL) {
          const Xo = this.path.getTemplateNode().getNodeByAqlPath(at);
          if (!Xo) throw new xa(at);
          at = Xo.getPath();
        }
        const mo = this.path.find(at, !1, Li);
        return this.getByPath(mo[mo.length - 1]);
      }
      getByPath(at) {
        const Zt = this.path.isParentOf(at).diffParts,
          Li = this.path.find(Zt[0]),
          mo = Li[0],
          Xo = Li[0].getParts();
        let Xr,
          Cr = Xo[Xo.length - 1];
        if (Cr.indexOf("[*]") >= 0) {
          const ys = Cr.substr(0, Cr.indexOf("[")),
            la = (Object.keys(this.cache).filter(Pt => Pt.startsWith(`${ys}[`)), this.getMany(ys, Or));
          Cr = `${ys}[${la.length}]`;
          let St = la.length;
          const Wi = Object.keys(this.cache);
          for (; Wi.indexOf(Cr) >= 0;) St++, Cr = `${ys}[${St}]`;
          Xo[Xo.length - 1] = Cr;
        }
        return this.cache[Cr] && (Xr = this.cache[Cr]), Xr || (Xr = this.wrapper.getByPath(mo), this.cache[Cr] = Xr, this.updateCollectionProperty(Xr)), Zt.length > 1 ? Xr.getByPath(at) : Xr;
      }
      getMany(at, Zt = ".") {
        const Li = this.path.find(at, !1, Zt),
          mo = Li[Li.length - 1];
        if (!mo) return [];
        const Xo = this.path.isParentOf(mo).diffParts,
          Cr = Js.removeBrackets(Xo[Xo.length - 1]);
        if (Xo.length > 1) return this.getByPath(Li[Li.length - 2]).getMany(Cr, Zt);
        {
          if (this.data && this.data[Cr]) for (let ys = 0; ys < this.data[Cr].length; ys++) this.get(`${Cr}[${ys}]`, q.JSON, Or);
          const Xr = [];
          return Object.keys(this.cache).filter(ys => ys.startsWith(`${Cr}[`)).forEach(ys => {
            const Hs = this.cache[ys];
            Hs && !Hs.isDeleted() && Xr.push(this.cache[ys]);
          }), Xr;
        }
      }
      set(at) {
        at.save();
      }
      clearCache() {
        this.cache = {};
      }
      ignoreFields() {
        return mn.ignoreFields;
      }
      getChildren() {
        return Object.keys(this.cache).filter(at => this.cache[at]).map(at => this.cache[at]);
      }
      updateCollectionProperty(at) {
        const Zt = at.getBindingProperties(),
          Li = at.getNode();
        if (1 === Li.getMax()) return;
        const mo = Li.getId();
        this.collectionBindingProperties[mo] ? Object.keys(Zt).forEach(Xo => {
          this.collectionBindingProperties[mo] && this.collectionBindingProperties[mo][Xo] && this.collectionBindingProperties[mo][Xo].addElement(at), Zt[Xo].groupCollection && !Zt[`collection_${Xo}`] && (Zt[`collection_${Xo}`] = this.collectionBindingProperties[mo][Xo]);
        }) : (this.collectionBindingProperties[mo] = {}, Object.keys(Zt).filter(Xo => !Xo.startsWith("collection_")).filter(Xo => Zt[Xo].groupCollection).forEach(Xo => {
          if (!Zt[`collection_${Xo}`]) {
            const Cr = new ho(this, mo, {
              code: Xo,
              metadata: Zt[Xo].metadata
            });
            this.collectionBindingProperties[mo][Xo] = Cr, Zt[`collection_${Xo}`] = Cr;
          }
        }), Object.keys(this.collectionBindingProperties[mo]).forEach(Xo => this.collectionBindingProperties[mo][Xo].addElement(at)), this.getMany(mo, Or).forEach(Xo => {
          Object.keys(this.collectionBindingProperties[mo]).forEach(Cr => this.collectionBindingProperties[mo][Cr].addElement(Xo));
        }));
      }
      validateAllFields() {
        const at = [];
        return this.node.getChildren().forEach(Zt => {
          const Li = this.getMany(Zt.getId(), Or);
          0 === Li.length && Zt.getMin() > 0 ? this.get(Zt.getId()).validate(!1).forEach(Xo => at.push(Xo)) : Li.forEach(mo => {
            if (Zt.getMin() > 0) mo.validate(!1).forEach(Xo => at.push(Xo));else {
              if (mo.empty() && !mo.checkModified()) return;
              mo.validate(!1).forEach(Xo => at.push(Xo));
            }
          });
        }), at;
      }
    }
    return mn.ignoreFields = ["time", "language", "territory", "encoding", "composer", "category", "_uid"], mn;
  })();
  class ri extends uo {
    getLower() {
      return this.lower;
    }
    getUpper() {
      return this.upper;
    }
    constructor(Pe) {
      super(Pe), this.lower = this.get("lower"), this.upper = this.get("upper");
    }
  }
  class Yt extends lo {
    getMultimedia() {
      return {
        value: this.getItem(this.suffix.value),
        mediatype: this.getItem(this.suffix.mediatype),
        alternatetext: this.getItem(this.suffix.alternatetext),
        size: this.data ? this.data[this.suffix.size] : void 0
      };
    }
    setMultimedia(Pe) {
      Pe ? (this.data || (this.data = {}), this.data[this.suffix.value] = Pe.value, this.data[this.suffix.mediatype] = Pe.mediatype, this.data[this.suffix.alternatetext] = Pe.alternatetext, this.data[this.suffix.size] = Pe.size) : this.data = void 0, this.valueProperty.notifyPropertyChanged(this.data);
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return Pe || !this.getMultimedia().value && !this.null_flavour && this.isRequired() && at.push(this.message(yi.validateFieldsRequired.text)), at;
    }
    constructor(Pe) {
      super(Pe), this.suffix = {
        value: "|value",
        mediatype: "|mediatype",
        alternatetext: "|alternatetext",
        size: "|size"
      }, this.valueProperty = this.property(oo.DV_MULTIMEDIA.value).get(this.getMultimedia.bind(this)).set(this.setMultimedia.bind(this)).undef();
    }
    getItem(Pe) {
      return this.data ? this.data[Pe] : void 0;
    }
  }
  class jt extends lo {
    get code() {
      return this.data ? this.data[this.suffix.code] : void 0;
    }
    get value() {
      return this.data ? this.data[this.suffix.value] : void 0;
    }
    get ordinal() {
      return this.data ? this.data[this.suffix.ordinal] : void 0;
    }
    get infoLabel() {
      return this.data ? this.data[this.suffix.infoLabel] : void 0;
    }
    getCode() {
      return this.code;
    }
    getValue() {
      return this.value;
    }
    getOrdinal() {
      return this.ordinal;
    }
    setOrdinal(Pe) {
      this.data || (this.data = {}), this.data[this.suffix.ordinal] = Pe, this.valueProperty.notifyPropertyChanged(this.data);
    }
    setCode(Pe) {
      if (Pe) {
        if (this.terminologyItems && !this.terminologyItems.find(at => at.value === Pe)) throw this.error(yi.validateTerminologyNotFound.params({
          code: Pe
        }));
        this.data || (this.data = {}), this.data[this.suffix.code] = Pe;
      } else this.data = void 0;
      this.valueProperty.notifyPropertyChanged(this.data);
    }
    setValue(Pe) {
      this.data || (this.data = {}), this.data[this.suffix.value] = Pe, this.valueProperty.notifyPropertyChanged(this.data);
    }
    setInfoLabel(Pe) {
      this.data || (this.data = {}), this.data[this.suffix.infoLabel] = Pe, this.valueProperty.notifyPropertyChanged(this.data);
    }
    getLocalTerminology() {
      return this.terminologyItems;
    }
    getDefaultValue() {
      return this.defaultValue;
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return this.isRequired() && (!this.data || !this.data[this.suffix.code]) && at.push(this.message(yi.validateFieldsRequired.text)), at;
    }
    getList() {
      return this.terminologyItems ? this.terminologyItems.map(Pe => ({
        code: Pe.value,
        text: Pe.label,
        ordinal: Pe.ordinal,
        infoLabel: Pe.localizedDescriptions && Pe.localizedDescriptions.ru
      })) : void 0;
    }
    constructor(Pe) {
      super(Pe), this.defaultValue = void 0, this.valueProperty = this.property(oo.DV_ORDINAL.value).get((() => ({
        code: this.code,
        value: this.value,
        ordinal: this.ordinal,
        infoLabel: this.infoLabel
      })).bind(this)).set((Zt => {
        this.setCode(Zt.code), this.setValue(Zt.value), this.setOrdinal(Zt.ordinal);
      }).bind(this)).undef(), this.suffix = {
        code: "|code",
        value: "|value",
        ordinal: "|ordinal",
        infoLabel: "|infoLabel"
      };
      const at = this.node.getInputByType(Xt.CODED_TEXT);
      at && (this.terminologyItems = at.list, this.defaultValue = at.defaultValue, !this.defaultValue && this.terminologyItems && this.terminologyItems.length > 0 && (this.defaultValue = this.terminologyItems[0].value)), this.property(oo.DV_ORDINAL.list).get(this.getList.bind(this)).prop();
    }
  }
  class hn extends lo {
    get value() {
      return this.data ? this.data[this.suffix.value] : void 0;
    }
    get formalism() {
      return this.data ? this.data[this.suffix.formalism] : void 0;
    }
    getValue() {
      return this.value;
    }
    getFormalism() {
      return this.formalism;
    }
    setValue(Pe) {
      this.data || (this.data = {}), this.data[this.suffix.value] = Pe, this.valueProperty.notifyPropertyChanged(void 0);
    }
    setFormalism(Pe) {
      this.data || (this.data = {}), this.data[this.suffix.formalism] = Pe, this.valueProperty.notifyPropertyChanged(void 0);
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return Pe || !this.isRequired() || (!this.data || !this.data[this.suffix.value]) && at.push(this.message(yi.validateFieldsRequired.text)), at;
    }
    constructor(Pe) {
      super(Pe), this.suffix = {
        value: "|value",
        formalism: "|formalism"
      }, this.valueProperty = this.property(oo.DV_PARSABLE.value).get((() => ({
        value: this.value,
        formalism: this.formalism
      })).bind(this)).set((at => {
        this.setValue(at.value), this.setFormalism(at.formalism);
      }).bind(this)).undef();
    }
  }
  class tn extends lo {
    get numerator() {
      return this.data ? this.data[this.suffix.numerator] : void 0;
    }
    get denominator() {
      return this.data ? this.data[this.suffix.denominator] : void 0;
    }
    getNumerator() {
      return this.numerator;
    }
    getDenominator() {
      return this.denominator;
    }
    setNumerator(Pe) {
      this.data || (this.data = {}), this.data[this.suffix.numerator] = Pe, this.valueProperty.notifyPropertyChanged(this.data);
    }
    setDenominator(Pe) {
      this.data || (this.data = {}), this.data[this.suffix.denominator] = Pe, this.valueProperty.notifyPropertyChanged(this.data);
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return Pe || !this.data || ((void 0 === this.data[this.suffix.denominator] || 0 === this.data[this.suffix.denominator]) && at.push(this.message(yi.validateDenominatorZero.text)), this.isRequired() && void 0 === this.data[this.suffix.numerator] && !this.null_flavour && at.push(this.message(yi.validateFieldsRequired.text))), at;
    }
    constructor(Pe) {
      super(Pe), this.suffix = {
        numerator: "|numerator",
        denominator: "|denominator"
      }, this.valueProperty = this.property(oo.DV_PROPORTION.value).get((() => ({
        numerator: this.numerator,
        denominator: this.denominator
      })).bind(this)).set((at => {
        this.setDenominator(at.denominator), this.setNumerator(at.numerator);
      }).bind(this)).undef();
    }
  }
  class di {
    constructor(Pe, at, Zt) {
      this.value = Pe, this.label = at, this.validation = Zt;
    }
    getValue() {
      return this.value;
    }
    getLabel() {
      return this.label;
    }
    getValidation() {
      return this.validation;
    }
  }
  class Gn extends lo {
    getMagnitude() {
      const Pe = this.magnitude;
      return void 0 !== Pe ? Pe : this.defaultMagnitude;
    }
    getCollectionMagnitude() {
      return this.values;
    }
    setMagnitude(Pe) {
      this.setValue({
        magnitude: Pe,
        unit: this.getUnit()
      });
    }
    getUnit() {
      return this.unit ? this.unit : this.getDefaultUnit() ? this.getDefaultUnit().getValue() : void 0;
    }
    setValue(Pe = {
      magnitude: void 0
    }) {
      let at = null;
      const Zt = Pe.magnitude,
        Li = Pe.unit;
      if (void 0 !== Zt && (at = "" === Zt.toString().trim() ? null : +Zt.toString()), isNaN(at) && (at = null), Li && this.getUnitByValue(Li) && (this.defaultUnit = this.getUnitByValue(Li)), null == at) this.data = void 0;else {
        this.data || (this.data = {});
        const mo = {};
        mo[this.suffix.magnitude] = at, mo[this.suffix.unit] = Li, this.data = mo;
      }
      this.magnitudeProperty.notifyPropertyChanged(), this.valueProperty.notifyPropertyChanged(), this.unitProperty.notifyPropertyChanged();
    }
    setUnit(Pe) {
      this.setValue({
        magnitude: this.getMagnitude(),
        unit: Pe
      });
    }
    getDefaultMagnitude() {
      return this.defaultMagnitude;
    }
    empty() {
      return super.empty() || !this.data || null == this.data[this.suffix.magnitude] || Number.isNaN(this.data[this.suffix.magnitude]);
    }
    getDefaultUnit() {
      return this.defaultUnit;
    }
    getUnits() {
      return this.units;
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      if (Pe) return at;
      const Zt = void 0 === this.node.max || this.node.max < 0 || this.node.max > 1;
      if (void 0 !== this.magnitude) {
        const Li = this.getValidationMessages(this.data[this.suffix.magnitude], this.data[this.suffix.unit]);
        at.push(...Li);
      } else this.isRequired() && (!Zt && void 0 === this.magnitude && at.push(this.message(yi.validateFieldsRequired.text)), Zt && (!this.values || 1 === this.values.length && !this.values[0]) && at.push(this.message(yi.validateFieldsRequired.text)));
      return at;
    }
    destroy() {
      this.valueProperty.unsubscribeAll(), this.magnitudeProperty.unsubscribeAll(), this.unitProperty.unsubscribeAll(), super.destroy();
    }
    get magnitude() {
      return this.data ? this.data[this.suffix.magnitude] : void 0;
    }
    get unit() {
      return this.data ? this.data[this.suffix.unit] : void 0;
    }
    setMagnitudeWithDefaultUnit(Pe) {
      this.units && !this.unit && this.defaultUnit && this.setUnit(this.defaultUnit.getValue()), this.setMagnitude(Pe);
    }
    constructor(Pe) {
      super(Pe), this.defaultMagnitude = void 0, this.defaultUnit = void 0, this.suffix = {
        magnitude: "|magnitude",
        unit: "|unit"
      }, this.unitInputName = "unit", this.values = void 0, this.valueProperty = this.property(oo.DV_QUANTITY.value).get((() => ({
        magnitude: this.magnitude,
        unit: this.unit
      })).bind(this)).set((Li => {
        this.setMagnitude(Li.magnitude), this.setUnit(Li.unit);
      }).bind(this)).undef(), this.magnitudeProperty = this.property(oo.DV_QUANTITY.magnitude).get(this.getMagnitude.bind(this)).set(this.setMagnitudeWithDefaultUnit.bind(this)).undef(), this.unitProperty = this.property(oo.DV_QUANTITY.unit).get(this.getUnit.bind(this)).set(this.setUnit.bind(this)).prop(), this.unitsProperty = this.property(oo.DV_QUANTITY.units).get(() => this.getUnits().map(Li => ({
        code: Li.getValue(),
        text: Li.getLabel()
      }))).prop();
      const at = this.node.getInputByType(Xt.DECIMAL);
      at && (this.suffix.magnitude = `|${at.suffix}`, this.defaultMagnitude = at.defaultValue);
      const Zt = this.node.getInputFor(this.unitInputName);
      Zt && (this.suffix.unit = `|${Zt.suffix}`, this.units = Zt.list ? Zt.list.map(Li => new di(Li.value, Li.label, Li.validation)) : [], this.defaultUnit = this.getUnitByValue(Zt.defaultValue) || (this.units.length ? this.units[0] : null));
    }
    getValidationMessages(Pe, at) {
      const Zt = [];
      if (this.units) {
        const Li = this.getUnitByValue(at);
        if (Li) {
          const mo = Li.getValidation();
          if (mo && void 0 !== Pe) {
            const Xo = new Wt(mo).validate(this, Pe);
            for (let Cr = 0; Cr < Xo.length; Cr++) Zt.push(Xo[Cr]);
          }
        } else {
          const mo = at ? yi.validateUnitNotFound.params({
            unit: at
          }) : yi.validateUnitEempty.text;
          Zt.push(this.message(mo));
        }
      }
      return Zt;
    }
    getUnitByValue(Pe) {
      if (Pe) return this.units.filter(at => at.getValue() === Pe)[0];
    }
  }
  class dn extends jo {
    constructor(Pe) {
      super(Pe, Xt.TEXT), this.bindingProperty = this.property(oo.DV_TEXT.value).get(this.getString.bind(this)).set(this.setString.bind(this)).undef(), this.property(oo.DV_TEXT.list).get(this.getList.bind(this)).prop();
    }
    deserialize(Pe) {
      return Pe?.toString();
    }
    serialize(Pe) {
      return "" === Pe ? void 0 : Pe;
    }
    getList() {
      if (this.input && this.input.list) return this.input.list.map(Pe => ({
        code: Pe.value,
        text: Pe.label
      }));
    }
  }
  class wo extends hs {
    constructor(Pe) {
      super(Pe, Xt.TIME, "YYYY-MM-DDTHH:mm:ss.SSSZ", "HH:mm:ss.SSS");
    }
  }
  class Ro extends dn {
    constructor(Pe) {
      super(Pe);
    }
  }
  class _r {
    static createFromActionJson(Pe) {
      const at = new _r();
      return Pe && Pe._instruction_details && Pe._instruction_details[0] && (at.compositionUid = Pe._instruction_details[0]["|composition_uid"], at.instructionUid = Pe._instruction_details[0]["|instruction_uid"], at.activityId = Pe._instruction_details[0]["|activity_id"], at.path = Pe._instruction_details[0]["|path"]), at;
    }
    saveToActionJson(Pe) {
      if (!Pe) throw new Error(Ci.instructionDetailsMessagesObjectUndefined.text);
      Pe._instruction_details || (Pe._instruction_details = []), Pe._instruction_details[0] || (Pe._instruction_details[0] = {}), Pe._instruction_details[0]["|composition_uid"] = this.compositionUid, Pe._instruction_details[0]["|instruction_uid"] = this.instructionUid, Pe._instruction_details[0]["|activity_id"] = this.activityId, Pe._instruction_details[0]["|path"] = this.path;
    }
    validate(Pe) {
      const at = [];
      return this.instructionUid || at.push(Pi.message(Ci.instructionDetailsValidateInstructionUidUndefined.text, Pe.getPath())), this.compositionUid || at.push(Pi.message(Ci.instructionDetailsValidateCompositionUidUndefined.text, Pe.getPath())), this.activityId || at.push(Pi.message(Ci.instructionDetailsValidateActivityUidUndefined.text, Pe.getPath())), this.path || at.push(Pi.message(Ci.instructionDetailsValidatePathUidUndefined.text, Pe.getPath())), at;
    }
  }
  let qr = (() => {
    class mn extends uo {
      constructor(at) {
        super(at), this.language = this.get("language"), this.encoding = this.get("encoding"), this.subject = this.get("subject");
      }
      getOtherParticipation() {
        return this.getMany("_other_participation");
      }
      addOtherParticipation() {
        return this.get("_other_participation[*]");
      }
      getLanguage() {
        return this.language;
      }
      getEncoding() {
        return this.encoding;
      }
      getSubject() {
        return this.subject;
      }
      ignoreFields() {
        return mn.entryIgnoreFields;
      }
    }
    return mn.entryIgnoreFields = ["language", "encoding", "subject", "_uid"], mn;
  })();
  const Ts = {
    instructionMessagesActivityNotFound: new d({
      en: "Unable to find ACTIVITY with ID \"<activityId>\" in INSTRUCTION.",
      ru: "Не удается найти ACTIVITY с идентификатором \"<activityId>\" у INSTRUCTION."
    }),
    instructionMessagesInstructionsIdExist: new d({
      en: "Unable to set the ID for existing INSTRUCTION.",
      ru: "Не удается установить идентификатор для уже существующего INSTRUCTION"
    }),
    instructionMessagesInstructionsIdEmpty: new d({
      en: "INSTRUCTION archetype ID cannot be empty.",
      ru: "Идентфикатор архетипа INSTRUCTION не может быть пустым."
    }),
    instructionMessagesNarrativeEmpty: new d({
      en: "The narrative field cannot be empty.",
      ru: "Поле narrative не может быть пустым."
    }),
    compositionMessagesComposerEmpty: new d({
      en: "The composer ID cannot be empty.",
      ru: "Идентификатор composer не может быть пустым."
    }),
    activityMessagesTimingEmpty: new d({
      en: "The timing ID cannot be empty.",
      ru: "Поле timing не может быть пустым."
    }),
    actionMessagesActivityNotFound: new d({
      en: "Unable to find ACTIVITY in INSTRUCTION. <path>",
      ru: "Unable to find activity in instruction. <path>"
    }),
    actionMessagesActivityLintNotCreate: new d({
      en: "Unable to create the link to ACTIVITY.",
      ru: "Не удается создать ссылку на ACTIVITY"
    })
  };
  class js extends qr {
    getInstructionDetails() {
      return this.details;
    }
    link(Pe, at) {
      if (0 === Pe.getActivities().length) throw new Error(Ts.actionMessagesActivityNotFound.params({
        path: Pe.getPath().toString()
      }));
      const Zt = Pe.getActivities()[0].getActivityId();
      this.linkActivity(Pe, Zt, at);
    }
    linkActivity(Pe, at, Zt) {
      const Li = Pe.createInstructionDetails(at, Zt),
        mo = Li.validate(this);
      if (mo.length > 0) throw Ii.createWithMessages(Ts.actionMessagesActivityLintNotCreate.text, mo);
      this.details = Li, this.saveDataForDetails();
    }
    save() {
      this.saveDataForDetails(), super.save();
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return this.details.validate(this).forEach(Zt => at.push(Zt)), at;
    }
    getActionState() {
      return this.ismTransition.getActionState();
    }
    setActionState(Pe) {
      this.ismTransition.setActionState(Pe);
    }
    getState() {
      return this.ismTransition.getState();
    }
    getStep() {
      return this.ismTransition.getStep();
    }
    getTime() {
      return this.time;
    }
    getTransition() {
      return this.ismTransition.getTransition();
    }
    ignoreFields() {
      return js.actionIgnoreFields;
    }
    constructor(Pe) {
      super(Pe), this.details = _r.createFromActionJson(this.data), this.ismTransition = this.get("ism_transition"), this.time = this.get("time");
    }
    saveDataForDetails() {
      this.data || (this.data = {}), this.details.saveToActionJson(this.data);
    }
  }
  js.actionIgnoreFields = [...qr.entryIgnoreFields, "time", "ism_transition", "_uid"];
  let ws = (() => {
    class mn extends uo {
      ignoreFields() {
        return mn.activityIgnoreFields;
      }
      getActivityId() {
        return this.uid?.getValue() || this.activityId;
      }
      getTiming() {
        return this.timing;
      }
      getActionId() {
        return this.actionId;
      }
      validate(at = !1) {
        const Zt = super.validate(at);
        return !this.timing.getValue() && this.isRequired() && Zt.push(this.message(Ts.activityMessagesTimingEmpty.text)), Zt;
      }
      constructor(at) {
        if (super(at), this.timing = this.get("timing"), this.actionId = this.get("action_archetype_id"), this.node.getAqlPath()) {
          const Zt = this.node.getAqlPath().split("/");
          this.activityId = Zt[Zt.length - 1];
        }
      }
    }
    return mn.activityIgnoreFields = ["language", "encoding", "timing", "time", "_uid"], mn;
  })();
  class Us extends qr {
    constructor(Pe) {
      super(Pe);
    }
  }
  class Ws {
    static rmType(Pe) {
      return new sa(Pe);
    }
    static archetypeId(Pe) {
      return new ha(Pe);
    }
  }
  class sa {
    constructor(Pe) {
      this.rmType = Pe;
    }
    match(Pe) {
      return Pe && Pe.getRmType() === this.rmType;
    }
  }
  class ha {
    constructor(Pe) {
      this.archetypeId = Pe;
    }
    match(Pe) {
      return Pe && Pe.getNodeId() && Pe.getNodeId() === this.archetypeId;
    }
  }
  class ua extends uo {
    getContext() {
      return this.context;
    }
    getTemplateId() {
      return this.templateId;
    }
    getId() {
      return this.id;
    }
    getLanguage() {
      return this.language;
    }
    getTerritory() {
      return this.territory;
    }
    getCategory() {
      return this.category;
    }
    getComposer() {
      return this.composer;
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return (!this.composer.getValue() || !this.composer.getValue().id) && at.push(this.message(Ts.compositionMessagesComposerEmpty.text)), at;
    }
    save() {
      this.data || (this.data = {}), super.save();
    }
    getComposition() {
      return this.wrapper.getData();
    }
    constructor(Pe) {
      super(Pe), this.templateId = Pe.getTemplateId(), this.context = this.find(new sa(Je.EVENT_CONTEXT))[0], this.id = this.get("_uid"), this.language = this.get("language"), this.territory = this.get("territory"), this.composer = this.get("composer"), this.category = this.get("category"), this.category.getIsNew() && this.category.setCode(this.category.getDefaultValue());
    }
  }
  class da extends qr {
    constructor(Pe) {
      super(Pe);
    }
  }
  let na = (() => {
    class mn extends qr {
      ignoreFields() {
        return mn.instructionIgnoreFields;
      }
      createInstructionDetails(at, Zt) {
        const Li = this.activities.filter(Xo => Xo.getActivityId() === at);
        if (0 === Li.length) throw new Error(Ts.instructionMessagesActivityNotFound.params({
          activityId: at
        }));
        const mo = new _r();
        return mo.activityId = Li[0].getActivityId(), mo.instructionUid = this.getId(), mo.compositionUid = Zt ? "$selfComposition" : this.getCompositionId(), mo.path = this.node.getAqlPath() ? this.node.getAqlPath().replace(this.node.getNodeId(), `${this.node.getNodeId()} and uid/value='${this.uid.getValue()}'`) : void 0, mo;
      }
      getCompositionId() {
        return this.compositionId;
      }
      getId() {
        return this.uid.getValue();
      }
      setId(at) {
        if (!this.uid.getIsNew()) throw this.error(Ts.instructionMessagesInstructionsIdExist.text);
        this.uid.setValue(at);
      }
      getExpiryTime() {
        return this.expiryTime;
      }
      getNarrative() {
        return this.narrative;
      }
      getActivities() {
        return this.activities;
      }
      validate(at = !1) {
        const Zt = super.validate(at);
        return at || (this.uid.getValue() || Zt.push(this.message(Ts.instructionMessagesInstructionsIdEmpty.text)), this.narrative.getValue() || Zt.push(this.message(Ts.instructionMessagesNarrativeEmpty.text))), Zt;
      }
      constructor(at) {
        super(at), this.activities = [], this.compositionId = void 0;
        const Zt = at.getPath().getParts()[0];
        this.compositionId = at.getWrapper().get(`${Zt}._uid`).getValue(), this.narrative = this.get("narrative"), this.expiryTime = this.get("expiry_time"), this.node.getChildren().forEach(Li => {
          Li.getRmType() === Je.ACTIVITY && this.activities.push(this.get(Li.getId()));
        });
      }
    }
    return mn.instructionIgnoreFields = ["language", "encoding", "_uid", "narrative", "time", "expiry_time"], mn;
  })();
  var Qs = (() => {
    return (mn = Qs || (Qs = {}))[mn.initial = 524] = "initial", mn[mn.planned = 526] = "planned", mn[mn.postponed = 527] = "postponed", mn[mn.cancelled = 528] = "cancelled", mn[mn.scheduled = 529] = "scheduled", mn[mn.active = 245] = "active", mn[mn.suspended = 530] = "suspended", mn[mn.aborted = 531] = "aborted", mn[mn.completed = 532] = "completed", mn[mn.expired = 533] = "expired", Qs;
    var mn;
  })();
  class ma extends uo {
    validate(Pe = !1) {
      return super.validate(Pe);
    }
    getActionState() {
      if (!this.state || !this.state.getCode()) return;
      const Pe = Qs[+this.state.getCode()];
      return Qs[Pe];
    }
    setActionState(Pe) {
      this.state.setCode(String(Pe)), this.state.setValue(Qs[Pe]);
    }
    getState() {
      return this.state;
    }
    getTransition() {
      return this.transition;
    }
    getStep() {
      return this.step;
    }
    constructor(Pe) {
      super(Pe), this.state = this.get("current_state"), this.step = this.get("careflow_step"), this.transition = this.get("transition");
    }
  }
  var Xs = (() => {
    return (mn = Xs || (Xs = {}))[mn.ANY = 1] = "ANY", mn[mn.POINT = 2] = "POINT", mn[mn.INTERVAL = 3] = "INTERVAL", Xs;
    var mn;
  })();
  class Ks extends qr {
    getEventType() {
      return this.eventType;
    }
    setEventType(Pe) {
      this.eventType = Pe;
    }
    ignoreFields() {
      return Ks.observationIgnoreFields;
    }
    constructor(Pe) {
      super(Pe), this.eventType = Xs.POINT;
    }
  }
  Ks.observationIgnoreFields = [...qr.entryIgnoreFields, "time"];
  class Va extends uo {
    constructor(Pe) {
      super(Pe);
    }
  }
  class ba extends uo {
    getTime() {
      return this.time;
    }
    constructor(Pe) {
      super(Pe), this.time = this.get("time");
    }
  }
  const qs = {
    eventContextMessagesStartDateEmpty: new d({
      en: "The start date cannot be empty.",
      ru: "Дата начала не может быть пустым."
    }),
    linkMessagesLinkEmpty: new d({
      en: "The link cannot be empty.",
      ru: "Ссылка не может быть пустой."
    }),
    participationMessagesIdNameEmpty: new d({
      en: "ID and Name must be filled in.",
      ru: "Необходимо заполнить идентификатор и имя."
    }),
    partyValidateRequired: new d({
      en: "Required field",
      ru: "Обязательное поле"
    })
  };
  class Ri extends uo {
    constructor(Pe) {
      super(Pe), this.startTime = this.get("start_time"), this.endTime = this.get("end_time"), this.participation = this.getMany("_participation"), this.healthCareFacility = this.getMany("_health_care_facility"), this.setting = this.get("setting");
    }
    getStartTime() {
      return this.startTime;
    }
    getEndTime() {
      return this.endTime;
    }
    getHealthCareFacility() {
      return this.healthCareFacility;
    }
    getParticipation() {
      return this.participation;
    }
    createHealthCareFacility() {
      const Pe = this.get("_health_care_facility[*]");
      return this.healthCareFacility.push(Pe), Pe;
    }
    createParticipation() {
      const Pe = this.get("_participation[*]");
      return this.participation.push(Pe), Pe;
    }
    getSetting() {
      return this.setting;
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return !Pe && !this.startTime.getValue() && at.push(this.message(qs.eventContextMessagesStartDateEmpty.text)), !Pe && this.setting.getCode(), at;
    }
  }
  class $o extends ba {
    getWidth() {
      return this.width;
    }
    getMathFunction() {
      return this.mathFunction;
    }
    constructor(Pe) {
      super(Pe), this.width = this.get("width"), this.mathFunction = this.get("math_function");
    }
  }
  class ci extends lo {
    constructor(Pe) {
      super(Pe);
    }
    getField(Pe) {
      if (this.data) return this.data[Pe];
    }
    setField(Pe, at) {
      this.data || (this.data = {}), this.data[Pe] = at;
    }
  }
  class Gi extends ci {
    getValue() {
      return {
        meaning: this.getField(this.suffix.meaning),
        type: this.getField(this.suffix.type),
        target: this.getField(this.suffix.target)
      };
    }
    setValue(Pe) {
      Pe ? (this.setField(this.suffix.meaning, Pe.meaning), this.setField(this.suffix.target, Pe.target), this.setField(this.suffix.type, Pe.type)) : this.data = void 0, this.valueProperty.notifyPropertyChanged(this.data);
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return !Pe && this.isRequired() && (!this.data || !this.data[this.suffix.target]) && at.push(this.message(qs.linkMessagesLinkEmpty.text)), at;
    }
    constructor(Pe) {
      super(Pe), this.valueProperty = this.property(oo.LINK.value).get(this.getValue.bind(this)).set(this.setValue.bind(this)).undef(), this.suffix = {
        meaning: "|meaning",
        type: "|type",
        target: "|target"
      };
    }
  }
  class Fn extends ci {
    getValue() {
      return {
        id: this.getField(this.suffix.id),
        namespace: this.getField(this.suffix.namespace),
        scheme: this.getField(this.suffix.scheme),
        name: this.getField(this.suffix.name),
        func: this.getField(this.suffix.func),
        mode: this.getField(this.suffix.mode)
      };
    }
    setValue(Pe) {
      Pe ? (this.setField(this.suffix.id, Pe.id), this.setField(this.suffix.namespace, Pe.namespace), this.setField(this.suffix.scheme, Pe.scheme), this.setField(this.suffix.name, Pe.name), this.setField(this.suffix.func, Pe.func), this.setField(this.suffix.mode, Pe.mode)) : this.data = void 0, this.valueProperty.notifyPropertyChanged(this.data);
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return !Pe && this.isRequired() && (!this.getValue() || !this.getValue().name || !this.getValue().id) && at.push(this.message(qs.participationMessagesIdNameEmpty.text)), at;
    }
    constructor(Pe) {
      super(Pe), this.valueProperty = this.property(oo.PARTICIPATION.value).get(this.getValue.bind(this)).set(this.setValue.bind(this)).undef(), this.suffix = {
        name: "|name",
        func: "|function",
        mode: "|mode",
        id: "|id",
        namespace: "|id_namespace",
        scheme: "|id_scheme"
      };
    }
  }
  class zi extends ci {
    getValue() {
      return {
        id: this.getField(this.suffix.id),
        namespace: this.getField(this.suffix.namespace),
        scheme: this.getField(this.suffix.scheme),
        name: this.getField(this.suffix.name)
      };
    }
    setValue(Pe) {
      Pe ? (this.setField(this.suffix.id, Pe.id), this.setField(this.suffix.namespace, Pe.namespace), this.setField(this.suffix.scheme, Pe.scheme), this.setField(this.suffix.name, Pe.name)) : this.data = void 0, this.valueProperty.notifyPropertyChanged(this.data);
    }
    validate(Pe = !1) {
      const at = super.validate(Pe),
        Zt = this.getValue();
      return !Pe && this.isRequired() && (!Zt || !Zt.name || !Zt.id || !Zt.namespace || !Zt.scheme) && at.push(this.message(qs.partyValidateRequired.text)), at;
    }
    constructor(Pe) {
      super(Pe), this.valueProperty = this.property(oo.PARTY_PROXY.value).get(this.getValue.bind(this)).set(this.setValue.bind(this)).undef(), this.suffix = {
        id: "|id",
        name: "|name",
        scheme: "|id_scheme",
        namespace: "|id_namespace"
      };
    }
  }
  class Io extends ci {
    getValue() {
      return {
        id: this.getField(this.suffix.id),
        namespace: this.getField(this.suffix.namespace),
        scheme: this.getField(this.suffix.scheme),
        name: this.getField(this.suffix.name)
      };
    }
    setValue(Pe) {
      Pe ? (this.setField(this.suffix.id, Pe.id), this.setField(this.suffix.namespace, Pe.namespace), this.setField(this.suffix.scheme, Pe.scheme), this.setField(this.suffix.name, Pe.name)) : this.data = void 0, this.valueProperty.notifyPropertyChanged(this.data);
    }
    validate(Pe = !1) {
      const at = super.validate(Pe);
      return Pe || (!this.data && this.isRequired() || this.isRequired() && (!this.data[this.suffix.name] || !this.data[this.suffix.id] || !this.data[this.suffix.scheme] || !this.data[this.suffix.namespace])) && at.push(this.message(qs.partyValidateRequired.text)), at;
    }
    constructor(Pe) {
      super(Pe), this.valueProperty = this.property(oo.PARTY_IDENTIFIED.value).get(this.getValue.bind(this)).set(this.setValue.bind(this)).undef(), this.suffix = {
        name: "|name",
        scheme: "|id_scheme",
        namespace: "|id_namespace",
        id: "|id"
      };
    }
  }
  class gi extends uo {
    constructor(Pe) {
      super(Pe);
    }
  }
  class Kt extends uo {
    constructor(Pe) {
      super(Pe);
    }
  }
  class Vt extends ba {
    constructor(Pe) {
      super(Pe);
    }
  }
  class Pn extends uo {
    constructor(Pe) {
      super(Pe);
    }
  }
  class pi {
    static getInstance() {
      return pi.instance || (pi.instance = new pi()), pi.instance;
    }
    static create(Pe) {
      let at = Pe.getTemplateNode().getRmType();
      Pe.getTemplateNode().getRmTypeAsString().startsWith("DV_INTERVAL") && (at = Je.DV_INTERVAL);
      const Zt = pi.getInstance().types[at];
      if (!Zt || !Zt.create) throw new Error(rs.messagesRmTypeRegistered.params({
        rmType: Pe.getTemplateNode().getRmTypeAsString()
      }));
      return new (0, Zt.create)(Pe);
    }
    getTypes() {
      return this.types;
    }
    constructor() {
      this.types = new Map(), this.types[Je.DV_TEXT] = {
        create: dn
      }, this.types[Je.DV_QUANTITY] = {
        create: Gn
      }, this.types[Je.DV_CODED_TEXT] = {
        create: ti
      }, this.types[Je.DV_COUNT] = {
        create: Ji
      }, this.types[Je.DV_IDENTIFIER] = {
        create: _s
      }, this.types[Je.DV_DATE] = {
        create: oi
      }, this.types[Je.DV_DATE_TIME] = {
        create: yo
      }, this.types[Je.DV_TIME] = {
        create: wo
      }, this.types[Je.DV_BOOLEAN] = {
        create: Go
      }, this.types[Je.DV_INTEGER] = {
        create: ra
      }, this.types[Je.DV_DURATION] = {
        create: Kr
      }, this.types[Je.DV_ORDINAL] = {
        create: jt
      }, this.types[Je.DV_INTERVAL] = {
        create: ri
      }, this.types[Je.DV_PROPORTION] = {
        create: tn
      }, this.types[Je.DV_MULTIMEDIA] = {
        create: Yt
      }, this.types[Je.DV_URI] = {
        create: Ro
      }, this.types[Je.DV_EHR_URI] = {
        create: Ro
      }, this.types[Je.DV_PARSABLE] = {
        create: hn
      }, this.types[Je.ACTION] = {
        create: js
      }, this.types[Je.ADMIN_ENTRY] = {
        create: Us
      }, this.types[Je.OBSERVATION] = {
        create: Ks
      }, this.types[Je.INSTRUCTION] = {
        create: na
      }, this.types[Je.EVALUATION] = {
        create: da
      }, this.types[Je.CLUSTER] = {
        create: Va
      }, this.types[Je.SECTION] = {
        create: Kt
      }, this.types[Je.ELEMENT] = {
        create: uo
      }, this.types[Je.EVENT] = {
        create: ba
      }, this.types[Je.POINT_EVENT] = {
        create: Vt
      }, this.types[Je.INTERVAL_EVENT] = {
        create: $o
      }, this.types[Je.PARTY_RELATED] = {
        create: gi
      }, this.types[Je.PARTY_IDENTIFIED] = {
        create: Io
      }, this.types[Je.PARTICIPATION] = {
        create: Fn
      }, this.types[Je.PARTY_PROXY] = {
        create: zi
      }, this.types[Je.LINK] = {
        create: Gi
      }, this.types[Je.ACTIVITY] = {
        create: ws
      }, this.types[Je.STRING] = {
        create: dn
      }, this.types[Je.CODE_PHRASE] = {
        create: ti
      }, this.types[Je.COMPOSITION] = {
        create: ua
      }, this.types[Je.EVENT_CONTEXT] = {
        create: Ri
      }, this.types[Je.ISM_TRANSITION] = {
        create: ma
      }, this.types[Je.HISTORY] = {
        create: Pn
      }, this.types[Je.ITEM_TREE] = {
        create: uo
      }, this.types[Je.ITEM_LIST] = {
        create: uo
      }, this.types[Je.ITEM_SINGLE] = {
        create: uo
      }, this.types[Je.ITEM_TABLE] = {
        create: uo
      }, this.types[Je.ITEM_STRUCTURE] = {
        create: uo
      };
    }
  }
  pi.instance = void 0;
  class xo {
    constructor(Pe) {
      this.tree = void 0, this.templateId = void 0, this._aqlNodes = void 0, console.log("webT", Pe), this.templateId = Pe.templateId, this.tree = new Fs(Pe.tree);
    }
    initialize() {
      this._aqlNodes = {}, this.tree.nodeId = this.templateId, this.initializeRecursive(this.tree);
    }
    getNodeByAqlPath(Pe) {
      if (this._aqlNodes.hasOwnProperty(Pe)) return this._aqlNodes[Pe];
    }
    getTemplateId() {
      return this.templateId;
    }
    initializeRecursive(Pe, at) {
      if (!Pe) return;
      const Zt = Pe.getAqlPath();
      Zt && (this._aqlNodes[Zt] = Pe), Pe._childNodes = {}, Pe._parent = at;
      let Li = at;
      for (; Li;) {
        if (Li.isArchetype()) {
          Pe.slotId = Li.getAqlPath() ? Pe.getAqlPath() ? Pe.getAqlPath().substring(Li.getAqlPath().length + 1) : void 0 : Pe.getAqlPath(), Pe.slotId && (Pe.slotId = Pe.slotId.substring(0, Pe.slotId.indexOf(`[${Pe.getNodeId()}`)));
          break;
        }
        Li = Li._parent;
      }
      at && (at._childNodes[Pe.getId()] = Pe), Pe.getChildren() && Pe.getChildren().forEach(mo => this.initializeRecursive(mo, Pe));
    }
  }
  let No = (() => {
    class mn {
      constructor(at, Zt, Li, mo, Xo, Cr) {
        this.isNew = !1, this.wrapper = at, this.isNew = Zt, this.node = Li, this.data = mo, this.path = Xo, this.templateId = Cr;
      }
      getWrapper() {
        return this.wrapper;
      }
      getIsNew() {
        return this.isNew;
      }
      getTemplateNode() {
        return this.node;
      }
      getData() {
        return this.data;
      }
      getPath() {
        return this.path;
      }
      getDefaultParam(at) {
        return mn.defaultValues[at];
      }
      getTemplateId() {
        return this.templateId;
      }
    }
    return mn.defaultValues = {
      language: "ru",
      encoding: "UTF-8"
    }, mn;
  })();
  class Ko {
    constructor(Pe, at) {
      this.template = Pe, this.composition = at;
    }
    getByPath(Pe) {
      const at = (Pe = Pe.compositionPath(this.composition)).getPathAsArray(this.composition),
        Zt = qe(this.composition, at),
        Li = Se(this.composition, at, null),
        mo = !Zt || this.checkEmpty(Li),
        Xo = new No(this, mo, Pe.getTemplateNode(), mo ? void 0 : Li, Pe, this.template.getTemplateId());
      return pi.create(Xo);
    }
    get(Pe, at = q.JSON) {
      if (at || (at = q.JSON), Pe || (Pe = this.template.tree.getId()), at === q.AQL) {
        const mo = this.template.getNodeByAqlPath(Pe);
        if (!mo) throw new xa(Pe);
        Pe = mo.getPath();
      }
      let Zt = Js.getRoot(this.template.tree);
      const Li = Zt.find(Pe, !1, at === q.JSON ? "." : Or);
      return Li.length > 0 && (Zt = Li[Li.length - 1]), this.getByPath(Zt);
    }
    set(Pe) {
      const at = Pe;
      if (at.isDeleted()) {
        const Li = at.getPath().getPathAsArray(this.composition),
          mo = [...Li];
        mo.splice(-1, 1);
        const Xo = Se(this.composition, mo, void 0);
        Xo instanceof Array ? Xo[+Li[Li.length - 1]] = void 0 : Re(this.composition, Li);
      } else {
        const Zt = {};
        We(Zt, at.getPath().getPathAsArray(this.composition), Pe.getData()), Rt(this.composition, Zt);
      }
    }
    getTemplate() {
      return this.template;
    }
    getData() {
      return this.composition;
    }
    checkEmpty(Pe) {
      if (0 === Pe || !1 === Pe) return !1;
      if (null == Pe || "" === Pe) return !0;
      if (Pe instanceof Array) {
        if (0 === Pe.length) return !0;
        for (let at = 0; at < Pe.length; at++) if (!this.checkEmpty(Pe[at])) return !1;
      }
      if (!(Pe instanceof Object)) return !Pe;
      {
        const at = Object.getOwnPropertyNames(Pe);
        for (let Zt = 0; Zt < at.length; Zt++) if (!this.checkEmpty(Pe[at[Zt]])) return !1;
        if (at.length > 0) return !0;
      }
      return !1;
    }
  }
  class Mi {
    static fix(Pe) {
      new Mi(Pe).fix();
    }
    removeMinOne(Pe) {
      Pe && Pe.children && Pe.children.filter(at => "time" === at.id || "language" === at.id || "encoding" === at.id || "subject" === at.id).forEach(at => at.min = 0);
    }
    childExists(Pe, at) {
      if (!Pe || !Pe.children) return !1;
      const Zt = Pe.children;
      for (let Li = 0; Li < Zt.length; Li++) {
        const Xo = Zt[Li].id;
        if (Xo && Xo === at) return !0;
      }
      return !1;
    }
    addChildren(Pe, at) {
      Pe.children || (Pe.children = []), Pe.children.push(at);
    }
    fix() {
      this.webTemplate.tree || (this.webTemplate.tree = {
        children: []
      }), this.fixRecursive(this.webTemplate.tree), this.fixNode(this.webTemplate.tree, this.rootNodes);
      let Pe = this.webTemplate.tree.children.find(at => "EVENT_CONTEXT" === at.rmType);
      Pe || (Pe = this.contextNode, this.fixNode(this.webTemplate.tree, [Pe])), this.fixContextNode(Pe, this.contextNodes);
    }
    fixRecursive(Pe) {
      Pe && (this.baseComplexTypes.includes(Pe.rmType) && this.fixNode(Pe, this.baseComplexTypeNodes), this.entryTypes.includes(Pe.rmType) && (this.removeMinOne(Pe), this.fixNode(Pe, this.entryNodes)), "INSTRUCTION" === Pe.rmType && this.fixNode(Pe, this.instructionNodes), ("EVENT" === Pe.rmType || "INTERVAL_EVENT" === Pe.rmType || "POINT_EVENT" === Pe.rmType) && this.fixNode(Pe, this.eventNodes), "ACTION" === Pe.rmType && this.fixNode(Pe, this.actionNodes), "ACTIVITY" === Pe.rmType && this.fixNode(Pe, this.activityNodes), Pe.children && Pe.children.forEach(at => this.fixRecursive(at)));
    }
    constructor(Pe) {
      this.baseComplexTypes = ["OBSERVATION", "COMPOSITION", "SECTION", "EVALUATION", "INSTRUCTION", "ACTION", "ADMIN_ENTRY", "CLUSTER", "ACTIVITY", "EVENT_CONTEXT"], this.entryTypes = ["OBSERVATION", "SECTION", "ACTION", "INSTRUCTION", "EVALUATION", "ADMIN_ENTRY"], this.contextNode = {
        name: "context",
        obj: {
          id: "context",
          rmType: "EVENT_CONTEXT",
          nodeId: "context",
          min: 1,
          max: 1,
          aqlPath: "/context",
          children: []
        }
      }, this.rootNodes = [{
        name: "composer",
        obj: {
          id: "composer",
          name: "Composer",
          rmType: "PARTY_PROXY",
          min: 1,
          max: 1,
          aqlPath: "/composer",
          inContext: !0
        }
      }, {
        name: "category",
        obj: {
          id: "category",
          rmType: "DV_CODED_TEXT",
          nodeId: "",
          min: 1,
          max: 1,
          aqlPath: "/category",
          inputs: [{
            suffix: "code",
            type: "CODED_TEXT",
            list: [{
              value: "433",
              label: "event",
              localizedLabels: {
                ru: ""
              }
            }],
            terminology: "openehr"
          }]
        }
      }, {
        name: "_link",
        obj: {
          id: "_link",
          name: "_link",
          rmType: "LINK",
          min: 0,
          max: -1,
          inputs: [{
            suffix: "meaning",
            type: "TEXT"
          }, {
            suffix: "type",
            type: "TEXT"
          }, {
            suffix: "target",
            type: "TEXT"
          }],
          inContext: !0
        }
      }, {
        name: "_uid",
        obj: {
          id: "_uid",
          name: "_uid",
          rmType: "DV_TEXT",
          min: 0,
          max: 1,
          inputs: [{
            type: "TEXT"
          }],
          inContext: !0
        }
      }, {
        name: "language",
        obj: {
          id: "language",
          name: "Language",
          rmType: "DV_CODED_TEXT",
          min: 1,
          max: 1,
          aqlPath: "/context/language",
          inputs: [{
            suffix: "code",
            type: "TEXT"
          }, {
            suffix: "value",
            type: "TEXT"
          }, {
            suffix: "terminology",
            type: "TEXT"
          }],
          inContext: !0
        }
      }, {
        name: "territory",
        obj: {
          id: "territory",
          name: "Territory",
          rmType: "DV_CODED_TEXT",
          min: 1,
          max: 1,
          aqlPath: "/context/territory",
          inputs: [{
            suffix: "code",
            type: "TEXT"
          }, {
            suffix: "value",
            type: "TEXT"
          }, {
            suffix: "terminology",
            type: "TEXT"
          }],
          inContext: !0
        }
      }], this.contextNodes = [{
        name: "start_time",
        obj: {
          id: "start_time",
          name: "Start_time",
          rmType: "DV_DATE_TIME",
          min: 1,
          max: 1,
          aqlPath: "/context/start_time",
          inputs: [{
            type: "DATETIME"
          }],
          inContext: !0
        }
      }, {
        name: "end_time",
        obj: {
          id: "end_time",
          name: "End_time",
          rmType: "DV_DATE_TIME",
          min: 0,
          max: 1,
          aqlPath: "/context/end_time",
          inputs: [{
            type: "DATETIME"
          }],
          inContext: !0
        }
      }, {
        name: "setting",
        obj: {
          id: "setting",
          name: "Setting",
          rmType: "DV_CODED_TEXT",
          min: 1,
          max: 1,
          aqlPath: "/context/setting",
          inputs: [{
            suffix: "code",
            type: "TEXT"
          }, {
            suffix: "value",
            type: "TEXT"
          }],
          inContext: !0
        }
      }, {
        name: "_health_care_facility",
        obj: {
          id: "_health_care_facility",
          name: "_health_care_facility",
          rmType: "PARTY_IDENTIFIED",
          min: 0,
          max: -1,
          inputs: [{
            suffix: "id",
            type: "TEXT"
          }, {
            suffix: "name",
            type: "TEXT"
          }, {
            suffix: "scheme",
            type: "TEXT"
          }, {
            suffix: "namespace",
            type: "TEXT"
          }],
          inContext: !0
        }
      }, {
        name: "_participation",
        obj: {
          id: "_participation",
          name: "_participation",
          rmType: "PARTICIPATION",
          min: 0,
          max: -1,
          inputs: [{
            suffix: "id",
            type: "TEXT"
          }, {
            suffix: "name",
            type: "TEXT"
          }, {
            suffix: "mode",
            type: "TEXT"
          }, {
            suffix: "function",
            type: "TEXT"
          }],
          inContext: !0
        }
      }], this.baseComplexTypeNodes = [{
        name: "_uid",
        obj: {
          id: "_uid",
          name: "_uid",
          rmType: "DV_TEXT",
          min: 0,
          max: 1,
          inputs: [{
            type: "TEXT"
          }]
        }
      }, {
        name: "_link",
        obj: {
          id: "_link",
          name: "_link",
          rmType: "LINK",
          min: 0,
          max: -1,
          inputs: [{
            suffix: "meaning",
            type: "TEXT"
          }, {
            suffix: "type",
            type: "TEXT"
          }, {
            suffix: "target",
            type: "TEXT"
          }],
          inContext: !0
        }
      }], this.entryNodes = [{
        name: "_other_participation",
        obj: {
          id: "_other_participation",
          name: "_other_participation",
          rmType: "PARTICIPATION",
          min: 0,
          max: -1,
          inputs: [{
            suffix: "id",
            type: "TEXT"
          }, {
            suffix: "name",
            type: "TEXT"
          }, {
            suffix: "mode",
            type: "TEXT"
          }, {
            suffix: "function",
            type: "TEXT"
          }]
        }
      }, {
        name: "language",
        obj: {
          id: "language",
          name: "Language",
          rmType: "CODE_PHRASE",
          min: 0,
          max: 1
        }
      }, {
        name: "encoding",
        obj: {
          id: "encoding",
          name: "Encoding",
          rmType: "CODE_PHRASE",
          min: 0,
          max: 1
        }
      }, {
        name: "subject",
        obj: {
          id: "subject",
          name: "Subject",
          rmType: "PARTY_PROXY",
          min: 0,
          max: 1
        }
      }], this.actionNodes = [{
        name: "time",
        obj: {
          id: "time",
          name: "Time",
          rmType: "DV_DATE_TIME",
          min: 0,
          max: 1,
          inputs: [{
            type: "DATETIME"
          }]
        }
      }], this.activityNodes = [{
        name: "timing",
        obj: {
          id: "timing",
          name: "Timing",
          rmType: "DV_PARSABLE",
          min: 0,
          max: 1,
          inputs: [{
            type: "TEXT"
          }]
        }
      }, {
        name: "action_archetype_id",
        obj: {
          id: "action_archetype_id",
          name: "Action archetype",
          rmType: "STRING",
          nodeId: "",
          min: 0,
          max: 1,
          inputs: [{
            type: "TEXT"
          }]
        }
      }], this.instructionNodes = [{
        name: "expiry_time",
        obj: {
          id: "expiry_time",
          name: "Expiry time",
          rmType: "DV_DATE_TIME",
          min: 0,
          max: 1,
          inputs: [{
            type: "DATETIME"
          }]
        }
      }, {
        name: "narrative",
        obj: {
          id: "narrative",
          name: "Narrative",
          rmType: "DV_TEXT",
          min: 0,
          max: 1,
          inputs: [{
            type: "TEXT"
          }]
        }
      }], this.eventNodes = [{
        name: "time",
        obj: {
          id: "time",
          name: "Time",
          rmType: "DV_DATE_TIME",
          min: 0,
          max: 1,
          inputs: [{
            type: "DATETIME"
          }]
        }
      }], this.webTemplate = Pe;
    }
    fixNode(Pe, at) {
      at.forEach(Zt => {
        this.childExists(Pe, Zt.name) || this.addChildren(Pe, Zt.obj);
      });
    }
    fixContextNode(Pe, at) {
      const Zt = Pe.obj ? Pe.obj : Pe;
      at.forEach(Li => {
        this.childExists(Zt, Li.name) || (Li.obj.aqlPath && (Li.obj.aqlPath = Li.obj.aqlPath.replace("/context", Zt.aqlPath)), this.addChildren(Zt, Li.obj));
      });
    }
  }
  class It {
    constructor(Pe) {
      Mi.fix(Pe), this.webTemplate = new xo(Pe), this.webTemplate.initialize();
    }
    getWebTemplate() {
      return this.webTemplate;
    }
    create(Pe) {
      return new Ko(this.webTemplate, Pe);
    }
  }
  class it {
    static getName(Pe) {
      let at = Pe.getId();
      return Pe.getName() && (at = Pe.getName()), isNaN(Number(at[0])) || (at = `_${at}`), at = at.replace(new RegExp("-", "g"), "_-_"), at = at.replace(new RegExp(" ", "g"), "_"), at = at.replace(/\(/g, "_openBrkt_"), at = at.replace(/\)/g, "_closeBrkt_"), at;
    }
    constructor(Pe, at) {
      this.context = Pe, this.obj = at, this.converting = this.context.isConverting();
    }
    build() {
      this.obj.empty() || (this.buildSelf(), this.buildName());
    }
    buildSelf() {
      if (this.converting) this.context.setBuilder(this.context.getBuilder().ele(this.getName()));else {
        const Pe = this.context.getResolver();
        Pe.isCollectionItem() || this.context.setResolver(Pe.ele(this.getName()));
      }
    }
    getName() {
      return it.getName(this.obj.getNode());
    }
    buildName() {
      if (this.converting) {
        if (this.context.getOptions() && this.context.getOptions().skipName) return;
        this.context.getBuilder().ele("name").ele("value", this.obj.getNode().getName());
      }
    }
    buildCodedValueLocal(Pe, at) {
      const Zt = at || Pe.getNode().getId();
      if (this.converting) {
        const Li = this.context.getBuilder().ele(Zt);
        let mo = Pe.getValue(),
          Xo = Pe.getTerminologyCode();
        if (!mo) {
          const Xr = Pe.getNode().getInputByType(Xt.CODED_TEXT);
          if (Xr) {
            const ys = Xr.list.filter(Hs => Hs.value === Pe.getCode())[0];
            ys && (mo = ys.label), Xo || (Xo = Xr.terminology), Xo || (Xo = "local");
          }
        }
        Li.ele("value", mo);
        const Cr = Li.ele("defining_code");
        Cr.ele("terminology_id").ele("value", Xo), Cr.ele("code_string", Pe.getCode());
      } else {
        const Li = this.context.getResolver().ele(Zt),
          mo = Li.ele("defining_code").ele("code_string").value();
        mo && Pe.setCode(mo);
        const Xo = Li.ele("value").value();
        Xo && Pe.setValue(Xo);
      }
    }
    buildOpenEhrCodedValue(Pe, at) {
      const Zt = at || Pe.getNode().getId();
      if (this.converting) {
        const Li = this.context.getBuilder().ele(at || Pe.getNode().getId());
        Li.ele("rm:value", Pe.getValue());
        const mo = Li.ele("rm:defining_code");
        mo.ele("rm:terminology_id").ele("rm:value", Pe.getTerminologyCode()), mo.ele("rm:code_string", Pe.getCode());
      } else {
        const Li = this.context.getResolver().ele(Zt),
          mo = Li.ele("rm:defining_code").ele("rm:code_string").value();
        mo && Pe.setCode(mo);
        const Xo = Li.ele("rm:value").value();
        Xo && Pe.setValue(Xo);
      }
    }
    buildCodedString(Pe, at) {
      const Zt = at || Pe.getNode().getId();
      if (this.converting) {
        const Li = this.context.getBuilder().ele(Zt);
        Li.ele("terminology_id").ele("value", Pe.getTerminologyCode()), Li.ele("code_string", Pe.getCode());
      } else {
        const mo = this.context.getResolver().ele(Zt).ele("code_string").value();
        mo && Pe.setCode(mo);
      }
    }
    buildSingleValue(Pe, at) {
      const Zt = at || Pe.getNode().getId();
      if (this.converting) Pe && !Pe.empty() && this.context.getBuilder().ele(Zt).ele("rm:value", Pe.getData());else {
        const mo = this.context.getResolver().ele(Zt).ele("rm:value").value();
        mo && Pe.setString(mo);
      }
    }
    buildDateTimeValue(Pe, at) {
      const Zt = at || Pe.getNode().getId();
      if (this.converting) Pe && !Pe.empty() && this.context.getBuilder().ele(Zt).ele("rm:value", Pe.getValue().format("YYYY-MM-DDTHH:mm:ss.SSZ"));else {
        const mo = this.context.getResolver().ele(Zt).ele("rm:value").value();
        mo && Pe.setString(mo);
      }
    }
  }
  class _e extends it {
    constructor(Pe, at) {
      super(Pe, at), this.complex = at;
    }
    build() {
      const Pe = this.context.getBuilder(),
        at = this.context.getResolver();
      this.buildSelf(), this.buildName(), this.buildData(), this.context.setBuilder(Pe), this.context.setResolver(at);
    }
    ignoreFields() {
      return [];
    }
    buildData() {
      this.buildChildren();
    }
    buildUid(Pe) {
      if (this.converting) Pe && !Pe.empty() && this.context.getBuilder().ele("uid", {
        "xsi:type": "rm:HIER_OBJECT_ID"
      }).ele("rm:value", Pe.getValue());else {
        const at = this.context.getResolver().ele("uid").ele("rm:value").value();
        at && Pe.setValue(at);
      }
    }
    buildChildren() {
      const Pe = this.ignoreFields();
      if (this.converting) this.obj.getNode().getChildren().forEach(at => {
        if (Pe.indexOf(at.getId()) >= 0) return;
        const Zt = this.context.getBuilder();
        this.complex.getMany(at.getId()).forEach(Li => {
          const mo = Li;
          mo.empty() || (this.context.build(mo), this.context.setBuilder(Zt));
        });
      });else {
        const at = this.context.getResolver();
        this.obj.getNode().getChildren().forEach(Zt => {
          if (Pe.indexOf(Zt.getId()) >= 0) return;
          const Li = it.getName(Zt);
          at.ele(Li).value() && at.all(Li).forEach(mo => {
            this.context.setResolver(mo);
            const Xo = this.complex.get(Zt.getId() + "[*]");
            this.context.build(Xo);
          }), this.context.setResolver(at);
        });
      }
    }
  }
  class gt extends it {
    constructor(Pe, at, Zt) {
      super(Pe, at), this.participation = at, this.name = Zt;
    }
    getModeCode() {
      return this.participation.getValue() && "face-to-face communication" === this.participation.getValue().mode ? 216 : 193;
    }
    build() {
      const Pe = this.name ? this.name : this.getName();
      if (this.converting) {
        const at = this.participation.getValue();
        this.context.getBuilder().ele(Pe).ele("rm:function").ele("rm:value", at.func).up().up().ele("rm:performer", {
          "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
          "xsi:type": "rm:PARTY_IDENTIFIED"
        }).ele("rm:external_ref").ele("rm:id", {
          "xsi:type": "rm:GENERIC_ID"
        }).ele("rm:value", at.id).up().ele("rm:scheme", at.scheme).up().up().ele("rm:namespace", at.namespace).up().ele("rm:type", "ANY").up().up().ele("rm:name", at.name).up().up().ele("rm:mode").ele("rm:value", at.mode).up().ele("rm:defining_code").ele("rm:terminology_id").ele("rm:value", "openehr").up().up().ele("rm:code_string", this.getModeCode()).up().up();
      } else {
        const at = this.context.getResolver().isCollectionItem() ? this.context.getResolver() : this.context.getResolver().ele(Pe);
        this.participation.setValue({
          id: at.ele("rm:performer").ele("rm:external_ref").ele("rm:id").ele("rm:value").value(),
          name: at.ele("rm:performer").ele("rm:name").value(),
          namespace: at.ele("rm:performer").ele("rm:external_ref").ele("rm:namespace").value(),
          scheme: at.ele("rm:performer").ele("rm:external_ref").ele("rm:id").ele("rm:scheme").value(),
          mode: at.ele("rm:mode").ele("rm:defining_code").ele("rm:code_string").value(),
          func: at.ele("rm:function").ele("rm:value").value()
        });
      }
    }
  }
  class ni extends _e {
    constructor(Pe, at) {
      super(Pe, at), this.entry = at;
    }
    ignoreFields() {
      const Pe = ["_uid", "_links", "language", "encoding", "subject", "_other_participation"];
      return super.ignoreFields().forEach(at => Pe.push(at)), Pe;
    }
    getUid() {}
    buildLinks() {}
    buildSubject() {
      this.context.build(this.entry.getSubject());
    }
    buildProvider() {}
    buildOtherParticipations() {
      if (this.converting) {
        let Pe = this.entry.getOtherParticipation();
        0 === Pe.length && (Pe = this.context.getComposition().getContext().getParticipation()), Pe.forEach(at => {
          new gt(this.context, at, "other_participations").build();
        });
      } else this.context.getResolver().all("other_participations").forEach(at => {
        this.context.setResolver(at), new gt(this.context, this.entry.addOtherParticipation(), "other_participations").build();
      });
    }
    buildWorkflowId() {}
    buildData() {
      this.buildUid(this.getUid()), this.buildLinks(), this.buildCodedString(this.entry.getLanguage()), this.buildCodedString(this.entry.getEncoding()), this.buildSubject(), this.buildProvider(), this.buildOtherParticipations(), this.buildWorkflowId(), this.buildEntryData();
    }
  }
  class So extends ni {
    constructor(Pe, at) {
      super(Pe, at), this.action = at;
    }
    ignoreFields() {
      const Pe = ["time", "_instruction_details", "instruction_details", "ism_transition"];
      return super.ignoreFields().forEach(at => Pe.push(at)), Pe;
    }
    buildEntryData() {
      this.buildProtocol(), this.buildSingleValue(this.action.getTime()), this.buildChildren(), this.buildInstructionDetails(), this.buildIsmTransitions();
    }
    buildProtocol() {}
    buildInstructionDetails() {
      if (this.converting) {
        const Pe = this.action.getInstructionDetails();
        this.context.getBuilder().ele("instruction_details").ele("instruction_id").ele("rm:id", {
          "xsi:type": "rm:HIER_OBJECT_ID"
        }).ele("rm:value", Pe.compositionUid).up().up().ele("rm:namespace", "local").up().ele("rm:type", "INSTRUCTION").up().ele("rm:path", Pe.path).up().up().ele("activity_id", Pe.activityId);
      } else {
        const Pe = this.action.getInstructionDetails(),
          at = this.context.getResolver().ele("instruction_details");
        Pe.activityId = at.ele("activity_id").value(), Pe.path = at.ele("instruction_id").ele("rm:path").value(), Pe.compositionUid = at.ele("instruction_id").ele("rm:id").ele("rm:value").value(), Pe.instructionUid = "todo";
      }
    }
    buildIsmTransitions() {
      if (this.converting) {
        const Pe = this.context.getBuilder();
        this.context.setBuilder(Pe.ele("ism_transition")), this.buildOpenEhrCodedValue(this.action.getState()), this.action.getTransition().empty() || this.buildOpenEhrCodedValue(this.action.getTransition()), this.action.getStep().empty() || this.buildOpenEhrCodedValue(this.action.getStep()), this.context.setBuilder(Pe);
      } else {
        const Pe = this.context.getResolver();
        this.context.setResolver(Pe.ele("ism_transition")), this.buildOpenEhrCodedValue(this.action.getState()), this.buildOpenEhrCodedValue(this.action.getTransition()), this.buildOpenEhrCodedValue(this.action.getStep()), this.context.setResolver(Pe);
      }
    }
  }
  class Er extends it {
    constructor(Pe, at, Zt) {
      super(Pe, at), this.parsable = at, this.name = Zt;
    }
    build() {
      const Pe = this.name ? this.name : this.getName();
      if (this.converting) this.context.getBuilder().ele(Pe).ele("rm:value", this.parsable.getValue()).up().ele("rm:formalism", this.parsable.getFormalism());else {
        const at = this.context.getResolver().ele(Pe);
        this.parsable.setValue(at.ele("rm:value").value()), this.parsable.setFormalism(at.ele("rm:formalism").value());
      }
    }
  }
  class Br extends _e {
    constructor(Pe, at) {
      super(Pe, at), this.activity = at;
    }
    ignoreFields() {
      return ["timing", "action_archetype_id"];
    }
    buildData() {
      new Er(this.context, this.activity.getTiming(), "timing").build(), this.buildChildren();
    }
  }
  class vr extends it {
    constructor(Pe, at) {
      super(Pe, at), this.t = at;
    }
    build() {
      super.buildSelf(), this.buildName(), this.t.getTerminology() === ji.LOCAL ? this.buildCodedValueLocal(this.t, "value") : this.buildOpenEhrCodedValue(this.t, "value");
    }
  }
  class zr extends _e {
    constructor(Pe, at) {
      super(Pe, at), this.composition = at;
    }
    build() {
      const Pe = this.context.getBuilder(),
        at = this.context.getResolver();
      this.converting ? this.context.setBuilder(this.context.getBuilder().ele(this.getName(), {
        xmlns: "http://schemas.oceanehr.com/templates",
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xmlns:rm": "http://schemas.openehr.org/v1",
        template_id: this.composition.getTemplateId()
      })) : this.context.setResolver(at.ele(this.getName())), this.buildName(), this.buildUid(this.composition.getId()), this.buildLinks(), this.buildCodedString(this.composition.getLanguage()), this.buildCodedString(this.composition.getTerritory()), this.buildCodedValueLocal(this.composition.getCategory()), this.context.build(this.composition.getComposer()), this.context.build(this.composition.getContext()), this.buildData(), this.context.setBuilder(Pe), this.context.setResolver(at);
    }
    ignoreFields() {
      return ["_uid", "_links", "language", "territory", "category", "composer", "context"];
    }
    buildLinks() {}
  }
  class ks extends it {
    constructor(Pe, at, Zt) {
      super(Pe, at), this.count = at, this.name = Zt;
    }
    build() {
      const Pe = this.name ? this.name : this.getName();
      if (this.converting) {
        this.buildSelf(), this.buildName();
        let at = this.context.getBuilder();
        this.context.getOptions().skipValue || (at = at.ele("value")), at.ele("magnitude", this.count.getValue());
      } else {
        let at = this.context.getResolver().ele(Pe);
        this.context.getOptions().skipValue || (at = at.ele("value"));
        const Zt = at.ele("magnitude").value();
        Zt && this.count.setValue(Zt);
      }
    }
  }
  class aa extends it {
    constructor(Pe, at, Zt) {
      super(Pe, at), this.duration = at, this.name = Zt;
    }
    build() {
      const Pe = this.name ? this.name : this.getName();
      if (this.converting) this.buildSelf(), this.buildName(), this.context.getBuilder().ele("value").ele("value", this.duration.getData());else {
        const at = this.context.getResolver().ele(Pe);
        at.ele("value").ele("value").value() && this.duration.setDuration(Kr.createDuration(at.ele("value").ele("value").value()));
      }
    }
  }
  class Ka extends ni {
    constructor(Pe, at) {
      super(Pe, at);
    }
    buildEntryData() {
      const Pe = this.context.getBuilder(),
        at = this.context.getResolver();
      this.converting ? this.context.setBuilder(Pe.ele("data")) : this.context.setResolver(at.ele("data")), this.buildChildren(), this.context.setResolver(at), this.context.setBuilder(Pe);
    }
  }
  class ja extends it {
    constructor(Pe, at, Zt) {
      super(Pe, at), this.party = at, this.name = Zt;
    }
    build() {
      const Pe = this.name ? this.name : this.getName();
      if (this.converting) {
        const at = this.party.getValue();
        this.context.getBuilder().ele(Pe).ele("rm:external_ref").ele("rm:id", {
          "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
          "xsi:type": "rm:GENERIC_ID"
        }).ele("rm:value", at.id).up().ele("rm:scheme", at.scheme).up().up().ele("rm:namespace", at.namespace).up().ele("rm:type", "ANY").up().up().ele("rm:name", at.name);
      } else {
        const at = this.context.getResolver().isCollectionItem() ? this.context.getResolver() : this.context.getResolver().ele(Pe),
          Zt = at.ele("rm:external_ref");
        this.party.setValue({
          id: Zt.ele("rm:id").ele("rm:value").value(),
          scheme: Zt.ele("rm:id").ele("rm:scheme").value(),
          namespace: Zt.ele("rm:namespace").value(),
          name: at.ele("rm:name").value()
        });
      }
    }
  }
  class ul extends _e {
    constructor(Pe, at) {
      super(Pe, at), this.context = Pe, this.eventContext = at;
    }
    build() {
      const Pe = this.context.getBuilder(),
        at = this.context.getResolver();
      this.buildSelf(), this.buildData(), this.context.setBuilder(Pe), this.context.setResolver(at);
    }
    ignoreFields() {
      return ["start_time", "end_time", "location", "setting", "_participation", "_health_care_facility"];
    }
    buildData() {
      if (this.buildDateTimeValue(this.eventContext.getStartTime()), this.buildDateTimeValue(this.eventContext.getEndTime()), this.buildOpenEhrCodedValue(this.eventContext.getSetting()), this.buildChildren(), this.converting) this.eventContext.getHealthCareFacility().forEach(Pe => {
        new ja(this.context, Pe, "health_care_facility").build();
      }), this.eventContext.getParticipation().forEach(Pe => {
        new gt(this.context, Pe, "participations").build();
      });else {
        const Pe = this.context.getResolver();
        Pe.all("health_care_facility").forEach(at => {
          this.context.setResolver(at), new ja(this.context, this.eventContext.createHealthCareFacility(), "health_care_facility").build();
        }), Pe.all("participations").forEach(at => {
          this.context.setResolver(at), new gt(this.context, this.eventContext.createParticipation(), "participations").build();
        });
      }
    }
  }
  class Ln {
    constructor() {
      this.id = void 0, this.type = void 0, this.issuer = void 0, this.assigner = void 0;
    }
    static create(Pe, at, Zt, Li) {
      const mo = new Ln();
      return mo.id = Pe, mo.type = at, mo.issuer = Zt, mo.assigner = Li, mo;
    }
  }
  class en extends it {
    constructor(Pe, at) {
      super(Pe, at), this.identifier = at;
    }
    build() {
      if (super.buildSelf(), this.buildName(), this.converting) {
        const Pe = this.identifier.getIdentifier();
        this.context.getBuilder().ele("value").ele("rm:issuer", Pe.issuer).up().ele("rm:assigner", Pe.assigner).up().ele("rm:id", Pe.id).up().ele("rm:type", Pe.type).up();
      } else {
        const Pe = this.context.getResolver().ele("value");
        this.identifier.setIdentifier(Ln.create(Pe.ele("rm:id").value(), Pe.ele("rm:type").value(), Pe.ele("rm:issuer").value(), Pe.ele("rm:assigner").value()));
      }
    }
  }
  class mi extends ni {
    constructor(Pe, at) {
      super(Pe, at), this.instruction = at;
    }
    ignoreFields() {
      const Pe = ["narrative", "expiry_time"];
      return super.ignoreFields().forEach(at => Pe.push(at)), Pe;
    }
    getUid() {
      return this.instruction.getUid();
    }
    buildEntryData() {
      this.buildProtocol(), this.buildSingleValue(this.instruction.getNarrative()), this.buildDateTimeValue(this.instruction.getExpiryTime()), this.buildChildren();
    }
    buildProtocol() {}
  }
  class ro extends it {
    constructor(Pe, at, Zt) {
      super(Pe, at), this.interval = at, this.name = Zt;
    }
    build() {
      const Pe = this.name ? this.name : this.getName();
      if (this.converting) {
        this.buildSelf(), this.buildName();
        const at = this.context.getBuilder().ele("value");
        this.context.setBuilder(at);
        const Zt = this.context.getOptions();
        this.context.setOptions({
          skipName: !0,
          skipValue: !0
        }), this.context.build(this.interval.getLower()), this.context.setBuilder(at), this.context.build(this.interval.getUpper()), this.context.setOptions(Zt), at.ele("lower_unbounded", !1), at.ele("upper_unbounded", !1);
      } else this.context.getResolver().ele(Pe).ele("value");
    }
  }
  class cr extends it {
    constructor(Pe, at, Zt) {
      super(Pe, at), this.link = at, this.name = Zt;
    }
    build() {
      const Pe = this.name ? this.name : this.getName();
      if (this.converting) {
        const at = this.link.getValue();
        this.context.getBuilder().ele(Pe).ele("rm:meaning").ele("rm:value", at.meaning).up().up().ele("rm:type").ele("rm:value", at.type).up().up().ele("rm:target").ele("rm:value", at.target);
      } else {
        const at = this.context.getResolver().isCollectionItem() ? this.context.getResolver() : this.context.getResolver().ele(Pe);
        this.link.setValue({
          meaning: at.ele("rm:meaning").ele("rm:value").value(),
          type: at.ele("rm:type").ele("rm:value").value(),
          target: at.ele("rm:target").ele("rm:value").value()
        });
      }
    }
  }
  class jr extends ni {
    constructor(Pe, at) {
      super(Pe, at), this.observation = at;
    }
    ignoreFields() {
      const Pe = ["time"];
      return super.ignoreFields().forEach(at => Pe.push(at)), Pe;
    }
    buildEntryData() {
      let at = "Любое_событие";
      if (this.converting) {
        const Zt = this.context.getBuilder();
        let Li = Zt.ele("data");
        switch (this.context.setBuilder(Li), this.buildDateTimeValue(this.context.getComposition().getContext().getStartTime(), "origin"), this.observation.getEventType()) {
          case Xs.POINT:
            at = `${at}_as_Point_Event`;
            break;
          case Xs.INTERVAL:
            at = `${at}_as_Interval_Event`;
        }
        Li = Li.ele(at), this.context.setBuilder(Li.ele("name").ele("value", "Любое событие").up().up()), this.buildDateTimeValue(this.context.getComposition().getContext().getStartTime(), "time"), this.context.setBuilder(Li.ele("data")), this.buildChildren(), this.context.setBuilder(Zt);
      } else {
        this.observation.setEventType(Xs.ANY);
        const Zt = this.context.getResolver().ele("data");
        Zt.ele(`${at}_as_Point_Event`).value() && this.observation.setEventType(Xs.POINT), Zt.ele(`${at}_as_Interval_Event`).value() && this.observation.setEventType(Xs.INTERVAL);
      }
    }
  }
  class as extends it {
    constructor(Pe, at) {
      super(Pe, at), this.party = at;
    }
    build() {
      const Pe = this.party.getNode().getId();
      if (this.converting) {
        if (this.party.empty()) this.context.getBuilder().ele(Pe, {
          "xsi:type": "rm:PARTY_SELF"
        });else {
          const at = this.context.getBuilder().ele(Pe, {
              "xsi:type": "rm:PARTY_IDENTIFIED"
            }),
            Zt = this.party.getValue();
          Zt && at.ele("rm:external_ref").ele("rm:id", {
            "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
            "xsi:type": "rm:GENERIC_ID"
          }).ele("rm:value", Zt.id).up().ele("rm:scheme", Zt.scheme).up().up().ele("rm:namespace", Zt.namespace).up().ele("rm:type", "ANY"), Zt && Zt.name && at.ele("rm:name", Zt.name);
        }
      } else {
        const at = this.context.getResolver().isCollectionItem() ? this.context.getResolver() : this.context.getResolver().ele(Pe);
        if ("rm:PARTY_SELF" !== at.att("xsi:type")) {
          const Zt = at.ele("rm:external_ref");
          this.party.setValue({
            id: Zt.ele("rm:id").ele("rm:value").value(),
            scheme: Zt.ele("rm:id").ele("rm:scheme").value(),
            namespace: Zt.ele("rm:namespace").value(),
            name: at.ele("rm:name").value()
          });
        }
      }
    }
  }
  class Da extends it {
    constructor(Pe, at, Zt) {
      super(Pe, at), this.quantity = at, this.name = Zt;
    }
    build() {
      const Pe = this.name ? this.name : this.getName();
      if (this.converting) {
        this.buildSelf(), this.buildName();
        const at = this.context.getBuilder().ele("value");
        if (at.ele("magnitude", this.quantity.getMagnitude()), this.quantity.getDefaultUnit() && this.quantity.getDefaultUnit().getValidation()) {
          const Zt = this.quantity.getDefaultUnit().getValidation();
          Zt.precision && at.ele("precision", Zt.precision.min);
        }
        at.ele("units", this.quantity.getDefaultUnit().getValue());
      } else {
        const at = this.context.getResolver().ele(Pe).ele("value"),
          Zt = at.ele("magnitude").value(),
          Li = at.ele("units").value();
        Li && this.quantity.setUnit(Li), Zt && this.quantity.setMagnitude(Zt);
      }
    }
  }
  class vo extends it {
    constructor(Pe, at) {
      super(Pe, at), this.single = at;
    }
    build() {
      super.buildSelf(), this.buildName(), this.buildSingleValue(this.single, "value");
    }
  }
  class As extends it {
    constructor(Pe, at) {
      super(Pe, at), this.text = at;
    }
    build() {
      super.buildSelf(), this.buildName();
      const Pe = this.text.getInput() && this.text.getInput().list && this.text.getInput().list.length > 0 ? "value" : "rm:value";
      if (this.converting) this.text.empty() || this.context.getBuilder().ele("value").ele(Pe, this.text.getData());else {
        const at = this.context.getResolver().ele("value").ele(Pe).value();
        at && this.text.setString(at);
      }
    }
  }
  var dl = (() => {
    return (mn = dl || (dl = {}))[mn.Tdd = 0] = "Tdd", mn[mn.Raw = 1] = "Raw", dl;
    var mn;
  })();
  class pn {
    static getInstance() {
      return pn.instance || (pn.instance = new pn()), pn.instance;
    }
    static create(Pe, at) {
      const Zt = pn.getInstance().types[at.getType()];
      if (!Zt) return;
      let Li;
      switch (Pe.getConvertType()) {
        case dl.Tdd:
          Li = Zt.tdd;
          break;
        case dl.Raw:
          Li = Zt.raw;
      }
      return Li ? Li(Pe, at) : void 0;
    }
    getTypes() {
      return this.types;
    }
    constructor() {
      this.types = new Map(), this.types[Je.DV_TEXT] = {
        tdd: As,
        raw: void 0
      }, this.types[Je.DV_QUANTITY] = {
        tdd: Da,
        raw: void 0
      }, this.types[Je.DV_CODED_TEXT] = {
        tdd: vr,
        raw: void 0
      }, this.types[Je.DV_COUNT] = {
        tdd: ks,
        raw: void 0
      }, this.types[Je.DV_IDENTIFIER] = {
        tdd: en,
        raw: void 0
      }, this.types[Je.DV_DATE] = {
        tdd: vo,
        raw: void 0
      }, this.types[Je.DV_DATE_TIME] = {
        tdd: vo,
        raw: void 0
      }, this.types[Je.DV_TIME] = {
        tdd: vo,
        raw: void 0
      }, this.types[Je.DV_BOOLEAN] = {
        tdd: vo,
        raw: void 0
      }, this.types[Je.DV_INTEGER] = {
        tdd: vo,
        raw: void 0
      }, this.types[Je.DV_DURATION] = {
        tdd: aa,
        raw: void 0
      }, this.types[Je.DV_ORDINAL] = {
        tdd: void 0,
        raw: void 0
      }, this.types[Je.DV_INTERVAL] = {
        tdd: ro,
        raw: void 0
      }, this.types[Je.DV_PROPORTION] = {
        tdd: void 0,
        raw: void 0
      }, this.types[Je.DV_MULTIMEDIA] = {
        tdd: void 0,
        raw: void 0
      }, this.types[Je.DV_URI] = {
        tdd: As,
        raw: void 0
      }, this.types[Je.DV_PARSABLE] = {
        tdd: Er,
        raw: void 0
      }, this.types[Je.ACTION] = {
        tdd: So,
        raw: void 0
      }, this.types[Je.ADMIN_ENTRY] = {
        tdd: Ka,
        raw: void 0
      }, this.types[Je.OBSERVATION] = {
        tdd: jr,
        raw: void 0
      }, this.types[Je.INSTRUCTION] = {
        tdd: mi,
        raw: void 0
      }, this.types[Je.EVALUATION] = {
        tdd: Ka,
        raw: void 0
      }, this.types[Je.CLUSTER] = {
        tdd: _e,
        raw: void 0
      }, this.types[Je.SECTION] = {
        tdd: _e,
        raw: void 0
      }, this.types[Je.ELEMENT] = {
        tdd: _e,
        raw: void 0
      }, this.types[Je.EVENT] = {
        tdd: _e,
        raw: void 0
      }, this.types[Je.POINT_EVENT] = {
        tdd: _e,
        raw: void 0
      }, this.types[Je.INTERVAL_EVENT] = {
        tdd: _e,
        raw: void 0
      }, this.types[Je.PARTY_RELATED] = {
        tdd: _e,
        raw: void 0
      }, this.types[Je.PARTY_IDENTIFIED] = {
        tdd: ja,
        raw: void 0
      }, this.types[Je.PARTICIPATION] = {
        tdd: gt,
        raw: void 0
      }, this.types[Je.PARTY_PROXY] = {
        tdd: as,
        raw: void 0
      }, this.types[Je.LINK] = {
        tdd: cr,
        raw: void 0
      }, this.types[Je.ACTIVITY] = {
        tdd: Br,
        raw: void 0
      }, this.types[Je.STRING] = {
        tdd: As,
        raw: void 0
      }, this.types[Je.CODE_PHRASE] = {
        tdd: vr,
        raw: void 0
      }, this.types[Je.COMPOSITION] = {
        tdd: zr,
        raw: void 0
      }, this.types[Je.EVENT_CONTEXT] = {
        tdd: ul,
        raw: void 0
      }, this.types[Je.ISM_TRANSITION] = {
        tdd: _e,
        raw: void 0
      };
    }
  }
  pn.instance = void 0;
});
