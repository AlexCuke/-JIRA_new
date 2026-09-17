// Extracted from main; webpack module 98179. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    i: () => B
  });
  var t = i(71822),
    e = i(39646),
    a = i(18505),
    m = i(54004),
    d = i(66395),
    M = i(82562),
    b = i(87717),
    A = i(72757),
    N = i(48763),
    I = i(666);
  const O = "outer";
  function L(y) {
    return y.getTags().filter(j => j.tag === O);
  }
  function C(y, j) {
    const W = y.getMedicalEntry().getChildren(),
      F = [],
      Le = [];
    return W.filter(J => J.getMarks().hasMark(I.T.FORCE_SIGN_COMPOSITION)).forEach(J => {
      Le.push(N.B.getUid(J.getUid())), F.push({
        tag: O,
        value: j.getSignTagValue(N.B.getUid(J.getUid())),
        aqlPath: "/"
      });
    }), [...L(y).filter(J => !Le.some(fe => Object.values(JSON.parse(J.value)).some(ye => ye.endsWith(fe)))), ...F];
  }
  function v(y, j) {
    return y.getMarks().hasMark(I.T.FORCE_SIGN_COMPOSITION) ? [{
      tag: "sign",
      value: j.getSignTagValue(),
      aqlPath: "/"
    }] : [];
  }
  function f(y, j) {
    return [...x(y, j.getWorkplaceId()), {
      tag: "sign",
      value: j.getSignTagValue(),
      aqlPath: "/"
    }];
  }
  function x(y, j) {
    return y.getTags()?.filter(W => "sign" === W.tag && !W.value.includes(j));
  }
  var R = i(55643);
  class B extends d._ {
    constructor(j, W, F, Le) {
      super(F), this.context = j, this.action = W, this.assignment = Le, this.linkToRoot = j.getEhr()?.getStorage()?.linkToRoot;
    }
    getType() {
      return A.A.IAssignmentActionEntry;
    }
    getAssignment() {
      return this.assignment;
    }
    getTitle() {
      return this.assignment ? this.assignment.getTitle() : this.getSettings().name ? this.getSettings().name : super.getTitle();
    }
    draft(j, W) {
      return this.isModified() ? (this.linkActivity(), this.addAssignmentLink(), super.draft(j, W)) : (0, e.of)(this);
    }
    incomplete(j) {
      return this.linkActivity(), this.addAssignmentLink(), super.incomplete(j);
    }
    complete(j) {
      return this.linkActivity(), this.addAssignmentLink(), super.complete(j);
    }
    addAssignmentLink() {
      if (!this.assignment) return;
      if (!this.linkToRoot) throw new Error("Не удалось получить значение linkToRoot, оно отсутствует или не инициализировано");
      const j = this.linkToRoot;
      (this.entry.getComposition().getLinks().filter(Le => "EHR" === Le.getValue()?.type && "Ссылка на услугу" === Le.getValue()?.meaning && Le.getValue()?.target?.startsWith(j))[0] || this.entry.getComposition().addLink()).setValue({
        target: `${this.linkToRoot}/${this.assignment.getUid().split("::")[0]}`,
        type: "EHR",
        meaning: "Ссылка на услугу"
      });
    }
    linkActivity() {
      if (this.actionParams) {
        if (!this.assignment) throw new Error("Unable to link ACTION to INSTRUCTION, assignment not found");
        const j = this.assignment.getComposition().find(new t.XA(t.B8.INSTRUCTION))[0],
          W = this.getComposition().find(new t.XA(t.B8.ACTION))[0];
        W.link(j, !1), W.setActionState(this.actionParams.stateValue), W.getStep()?.setCode(this.actionParams.stepCode);
      }
    }
    setActionState(j) {
      this.actionParams = j;
    }
    prepareTags(j) {
      const W = this.getMedicalEntry().getUserContext();
      return this.getSettings().multipleSignEntry ? this.getTagsForMultipleSignEntry(j, W) : j !== M.u.COMPLETE ? this.getSettings().tags ? [...(this.getSettings().tags ?? []), ...C(this, W)] : void 0 : this.getSettings().skipTagSign ? [...(this.getSettings().tags ?? []), ...(0, b.L)({
        uid: N.B.getUid(this.getUid()),
        marks: this.getMarks(),
        tags: this.getTags(),
        context: W,
        lifecycleState: j
      })] : [...(this.getSettings().tags || []), ...(W.getSignTags() || []), ...L(this), ...(0, R.$)(this.getSettings())];
    }
    load() {
      if (this.context.assignment && (this.assignment = this.context.assignment), this.assignment) return (0, e.of)(this);
      const j = N.B.getUid(this.action.getInstructionDetails()?.compositionUid ?? "");
      return j && "" !== j.trim() ? this.cutUid(j) === this.cutUid(this.getUid()) || this.cutUid(j) === this.cutUid(this.getMedicalEntry().getUid()) ? (0, e.of)(this) : this.getMedicalEntry().getEhr().getMedicalEntryByComposition(j, this.getMedicalEntry().getMoId()).pipe((0, a.b)(W => {
        this.assignment = W.getEntry(j)?.asType(A.A.IAssignmentEntry);
      }), (0, m.U)(() => this)) : (console.error(`Assignment id is empty for composition ${this.getUid()} medical entry ${this.getMedicalEntry().getUid()}`), (0, e.of)(this));
    }
    cutUid(j) {
      return j.split("::")[0];
    }
    getTagsForMultipleSignEntry(j, W) {
      return j === M.u.COMPLETE ? [...(this.getSettings()?.tags ?? []), ...f(this, W)] : [...(this.getSettings()?.tags ?? []), ...v(this, W)];
    }
  }
});
