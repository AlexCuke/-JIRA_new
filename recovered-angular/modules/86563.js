// Extracted from main; webpack module 86563. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    v: () => e
  });
  var t = i(19340);
  function e(a, m) {
    return {
      filter: {
        status: t._2.StatusEnum.Allactive,
        specialityIds: a,
        departmentIds: m ? [m] : void 0
      },
      paging: {
        page: 1,
        "page-size": 500,
        sort: [{
          direction: "ASC",
          path: "EMPLOYEEFIO"
        }]
      }
    };
  }
});
