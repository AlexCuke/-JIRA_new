// Extracted from main; webpack module 66395. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    _: () => e
  });
  var t = i(81290);
  class e {
    constructor(m) {
      this.marks = new t.z(), this.entry = m, this.entry.registerType(this.getType(), this);
    }
    getTime() {
      return this.entry.getTime();
    }
    isDeleted() {
      return this.getSuper().isDeleted();
    }
    markDeleted() {
      return this.getSuper().markDeleted();
    }
    restore() {
      return this.getSuper().restore();
    }
    sendUpdatedEvent() {
      this.getSuper().sendUpdatedEvent();
    }
    applyTemplate(m, d) {
      return this.getSuper().applyTemplate(m, d);
    }
    revertChanges(m) {
      return this.getSuper().revertChanges(m);
    }
    complete(m) {
      return this.getSuper().complete(m);
    }
    updateCompleted(m) {
      return this.getSuper().updateCompleted(m);
    }
    create(m, d, M) {
      return this.getSuper().create(m, d, M);
    }
    open(m) {
      return this.getSuper().open(m);
    }
    createTemplate(m) {
      return this.getSuper().createTemplate(m);
    }
    delete(m) {
      return this.getSuper().delete(m);
    }
    draft(m, d) {
      return this.getSuper().draft(m, d);
    }
    example(m) {
      return this.getSuper().example(m);
    }
    getComposition() {
      return this.getSuper().getComposition();
    }
    getEhrObject() {
      return this.getSuper().getEhrObject();
    }
    getFieldHistory(m, d) {
      return this.getSuper().getFieldHistory(m, d);
    }
    getFormDescription() {
      return this.getSuper().getFormDescription();
    }
    getLifecycleState() {
      return this.getSuper().getLifecycleState();
    }
    getMedicalEntry() {
      return this.getSuper().getMedicalEntry();
    }
    getPresentation() {
      return this.getSuper().getPresentation();
    }
    getSearchCriteria() {
      return this.getSuper().getSearchCriteria();
    }
    getSettings() {
      return this.getSuper().getSettings();
    }
    getTemplateId() {
      return this.getSuper().getTemplateId();
    }
    getUid() {
      return this.getSuper().getUid();
    }
    getId() {
      return this.getSuper().getId();
    }
    hasDraft() {
      return this.getSuper().hasDraft();
    }
    incomplete(m) {
      return this.getSuper().incomplete(m);
    }
    isDraft() {
      return this.getSuper().isDraft();
    }
    isModified() {
      return this.getSuper().isModified();
    }
    load() {
      return this.getSuper().load();
    }
    isDraftValid() {
      return this.getSuper().isDraftValid();
    }
    asType(m) {
      return this.getSuper().asType(m);
    }
    registerType(m, d) {
      this.entry.registerType(m, d);
    }
    unregisterType(m) {
      this.entry.unregisterType(m);
    }
    getTitle() {
      return this.getSuper().getTitle();
    }
    attach(m) {
      this.entry.attach(m);
    }
    getCommitTime() {
      return this.getSuper().getCommitTime();
    }
    getHistory() {
      return this.getSuper().getHistory();
    }
    getBaseClass(m) {
      return this.entry.getBaseClass(m);
    }
    updatedEvent() {
      return this.getSuper().updatedEvent();
    }
    isEmpty() {
      return this.entry.isEmpty();
    }
    validate(m) {
      return this.entry.validate(m);
    }
    setLocalValid(m) {
      this.entry.setLocalValid(m);
    }
    getLocalValid() {
      return this.entry.getLocalValid();
    }
    setApproved(m) {
      this.entry.setApproved(m);
    }
    getApproved() {
      return this.entry.getApproved();
    }
    getAppointments() {
      return this.entry.getAppointments();
    }
    isValid() {
      return this.entry.isValid();
    }
    prepareTags(m) {
      return this.getSuper().prepareTags(m);
    }
    deleteDraft() {
      return this.getSuper().deleteDraft();
    }
    getMarks() {
      return this.marks;
    }
    getTags() {
      return this.getSuper().getTags();
    }
    getSuper() {
      return this.entry.getBaseClass(this.getType());
    }
  }
});
