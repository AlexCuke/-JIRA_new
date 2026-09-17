// Extracted from main; webpack module 80675. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    mS: () => a,
    mx: () => T,
    s5: () => y,
    vS: () => B,
    zv: () => R
  });
  var t = i(71822);
  class a extends t._f {
    constructor(W) {
      super(W);
    }
    подробности_контекста() {
      return new m(this.obj.get("подробности_контекста"));
    }
    start_time() {
      return this.get("start_time");
    }
    setting() {
      return this.get("setting");
    }
    end_time() {
      return this.get("end_time");
    }
    _health_care_facility() {
      return this.getMany("_health_care_facility");
    }
    create_health_care_facility() {
      return this.get("_health_care_facility[*]");
    }
    _participation() {
      return this.getMany("_participation");
    }
    create_participation() {
      return this.get("_participation[*]");
    }
  }
  class m extends t.qE {
    constructor(W) {
      super(W);
    }
    автор_информации() {
      return new d(this.obj.get("автор_информации"));
    }
    структура_медицинской_организации() {
      return this.getMany("структура_медицинской_организации").map(W => new M(W));
    }
    createструктура_медицинской_организации() {
      return new M(this.obj.get("структура_медицинской_организации[*]"));
    }
    адрес_медицинской_организации() {
      return new b(this.obj.get("адрес_медицинской_организации"));
    }
    информация_о_месте_cобытия() {
      return this.getMany("информация_о_месте_cобытия").map(W => new A(W));
    }
    createинформация_о_месте_cобытия() {
      return new A(this.obj.get("информация_о_месте_cобытия[*]"));
    }
    дополнительная_информация() {
      return new I(this.obj.get("дополнительная_информация"));
    }
    ид_события() {
      return this.get("ид_события");
    }
    ид_документа() {
      return this.getMany("ид_документа");
    }
    createид_документа() {
      return this.get("ид_документа[*]");
    }
    ид_пациента() {
      return this.getMany("ид_пациента");
    }
    createид_пациента() {
      return this.get("ид_пациента[*]");
    }
  }
  class d extends t.qE {
    constructor(W) {
      super(W);
    }
    идентификатор_исполнения_должности_медработника() {
      return this.get("идентификатор_исполнения_должности_медработника");
    }
    наименование_должности() {
      return this.get("наименование_должности");
    }
    наименование_структурного_подразделения() {
      return this.get("наименование_структурного_подразделения");
    }
    наименование_филиала() {
      return this.get("наименование_филиала");
    }
    наименование_юридического_лица() {
      return this.get("наименование_юридического_лица");
    }
  }
  class M extends t.qE {
    constructor(W) {
      super(W);
    }
    ид_объекта() {
      return this.get("ид_объекта");
    }
    тип_объекта() {
      return this.get("тип_объекта");
    }
    наименование() {
      return this.get("наименование");
    }
    родительский_ид() {
      return this.get("родительский_ид");
    }
  }
  class b extends t.qE {
    constructor(W) {
      super(W);
    }
    номер_здания_сооружения() {
      return new N(this.obj.get("номер_здания_сооружения"));
    }
    субъект_рф() {
      return this.get("субъект_рф");
    }
    муниципальный_район_городской_округ() {
      return this.get("муниципальный_район_городской_округ");
    }
    поселение() {
      return this.get("поселение");
    }
    населенный_пункт() {
      return this.get("населенный_пункт");
    }
    элемент_планировочной_структуры() {
      return this.get("элемент_планировочной_структуры");
    }
    улица() {
      return this.get("улица");
    }
    номер_земельного_участка() {
      return this.get("номер_земельного_участка");
    }
    дополнительная_информация() {
      return this.get("дополнительная_информация");
    }
  }
  class A extends t.qE {
    constructor(W) {
      super(W);
    }
    номер_здания_сооружения() {
      return new N(this.obj.get("номер_здания_сооружения"));
    }
    событие_произошло() {
      return this.get("событие_произошло");
    }
    субъект_рф() {
      return this.get("субъект_рф");
    }
    муниципальный_район_городской_округ() {
      return this.get("муниципальный_район_городской_округ");
    }
    поселение() {
      return this.get("поселение");
    }
    населенный_пункт() {
      return this.get("населенный_пункт");
    }
    элемент_планировочной_структуры() {
      return this.get("элемент_планировочной_структуры");
    }
    улица() {
      return this.get("улица");
    }
    номер_земельного_участка() {
      return this.get("номер_земельного_участка");
    }
    номер_помещения() {
      return this.get("номер_помещения");
    }
    дополнительная_информация() {
      return this.get("дополнительная_информация");
    }
  }
  class N extends t.qE {
    constructor(W) {
      super(W);
    }
    номер_дома() {
      return this.get("номер_дома");
    }
    номер_строения() {
      return this.get("номер_строения");
    }
    номер_корпуса() {
      return this.get("номер_корпуса");
    }
  }
  class I extends t.qE {
    constructor(W) {
      super(W);
    }
    профиль_медицинской_помощи() {
      return this.get("профиль_медицинской_помощи");
    }
    виды_медицинской_помощи() {
      return this.get("виды_медицинской_помощи");
    }
    условия_оказания_медицинской_помощи() {
      return this.get("условия_оказания_медицинской_помощи");
    }
    форма_оказания_медицинской_помощи() {
      return this.get("форма_оказания_медицинской_помощи");
    }
  }
  const T = "Москва",
    R = "at0070",
    B = "at0057",
    y = "at0072";
});
