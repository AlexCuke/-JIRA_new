// Extracted class; external identifiers resolve in modules/79327.js.
(class {
  constructor(Fi, Rn, ki) {
    this.store = Fi, this.userComposite = Rn, this.userContextService = ki;
  }
  ngOnInit() {
    this.store.dispatch(a.gA.getTerminology({
      request: [{
        featureKey: "departments_list",
        terminologyName: "orgstructure:department"
      }]
    })), this.userContextService.getUserContext().pipe((0, e.q)(1)).subscribe(Rn => {
      this.deptId = Rn.department.id;
    }), this.userComposite.getEmployees({
      filter: {
        status: "ALLACTIVE",
        departmentIds: [this.deptId]
      },
      paging: {
        page: 1,
        "page-size": 500,
        sort: [{
          direction: "ASC",
          path: "EMPLOYEEFIO"
        }]
      }
    }).subscribe(Rn => {
      this.store.dispatch((0, m.Jq)(Rn.employees));
    });
  }
});
