// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k) {
    this.modalRef = $, this.data = k, this.isBase = !1, this.isBase = !!k?.med?.base;
  }
  get title() {
    switch (this.data.type) {
      case "issue":
        return this.isBase ? "Выдача препарата по «Базовой терапии»" : "Выдача препарата";
      case "cancel":
        return this.isBase ? "Отмена выполнения препарата по «Базовой терапии»" : "Отмена выполнения препарата";
    }
  }
  get medicationName() {
    return this.data.med?.tradeName || this.data.med?.name || "Неизвестный препарат";
  }
  get message() {
    switch (this.data.type) {
      case "issue":
        return this.isBase ? "Для назначений по «Базовой терапии» списание с остатков не осуществляется. Подтвердить выдачу препарата?" : null;
      case "cancel":
        return this.isInfoMode ? "Для отмены выполнения препарата, списанного со склада, необходимо обратиться к старшей медсестре." : "При отмене выполнения назначение вернётся в статус «Назначено». Подтвердить отмену выполнения препарата?";
    }
  }
  get isInfoMode() {
    return "cancel" === this.data.type && !0 === this.data.isWrittenOffFromWarehouse;
  }
  onCancel() {
    this.modalRef.close(!1);
  }
  onConfirm() {
    this.modalRef.close(!0);
  }
});
