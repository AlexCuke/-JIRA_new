// Extracted from main; webpack module 58264. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    I: () => a
  });
  var t = i(17489);
  class a {
    constructor(d) {
      Object.assign(this, d), this.fullName = this.getFullName(), this.officialName = this.getOfficialName(), this.nameWithInitials = this.getNameWithInitials(), this.currentDepartment = this.getCurrentDepartment();
    }
    getFullName() {
      return (0, t.join)([this.firstName, this.lastName], " ");
    }
    getOfficialName() {
      return (0, t.join)([this.firstName, this.secondName, this.lastName], " ");
    }
    getNameWithInitials() {
      return (0, t.join)([this.lastName || "", this.firstName?.charAt(0) || "", this.secondName?.charAt(0) || ""], " ");
    }
    getCurrentDepartment() {
      return this.department?.fullName || "";
    }
  }
});
