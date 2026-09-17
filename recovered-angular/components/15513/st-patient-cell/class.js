// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  get fio() {
    const s = this.data?.data?.careCase;
    return s ? `${s.lastName ?? ""} ${s.firstName ?? ""} ${s.secondName ?? ""}`.trim() : "—";
  }
  get gender() {
    return 1 == +this.data?.data?.careCase?.genderCode ? "М" : "Ж";
  }
  get age() {
    const s = this.data?.data?.careCase?.birthDate;
    return s ? (0, tw.HZ)(s) : "—";
  }
  get cardNumber() {
    return this.data?.data?.hospitalCard?.fullNumber ?? this.data?.data?.hospitalCard?.number ?? "—";
  }
});
