// Extracted from main; webpack module 76549. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    E3: () => a,
    hY: () => t
  });
  var t = (() => {
    return (m = t || (t = {})).Pending = "Pending", m.InProgress = "InProgress", m.Completed = "Completed", t;
    var m;
  })();
  const a = {
    tasks: [],
    loading: !1,
    error: null,
    filters: {
      status: ["all"],
      grouping: "byPatient",
      sorting: "byTimeOfDay",
      period: "all",
      searchQuery: ""
    },
    selectedDate: new Date(),
    searchQuery: ""
  };
});
