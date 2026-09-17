// Extracted from main; webpack module 74901. Factory, not an ES module.
(Ae => {
  "use strict";

  var V = {
    single_source_shortest_paths: function (i, t, e) {
      var a = {},
        m = {};
      m[t] = 0;
      var M,
        b,
        A,
        N,
        I,
        L,
        d = V.PriorityQueue.make();
      for (d.push(t, 0); !d.empty();) for (A in N = (M = d.pop()).cost, I = i[b = M.value] || {}) I.hasOwnProperty(A) && (L = N + I[A], (typeof m[A] > "u" || m[A] > L) && (m[A] = L, d.push(A, L), a[A] = b));
      if (typeof e < "u" && typeof m[e] > "u") {
        var f = ["Could not find a path from ", t, " to ", e, "."].join("");
        throw new Error(f);
      }
      return a;
    },
    extract_shortest_path_from_predecessor_list: function (i, t) {
      for (var e = [], a = t; a;) e.push(a), a = i[a];
      return e.reverse(), e;
    },
    find_path: function (i, t, e) {
      var a = V.single_source_shortest_paths(i, t, e);
      return V.extract_shortest_path_from_predecessor_list(a, e);
    },
    PriorityQueue: {
      make: function (i) {
        var a,
          t = V.PriorityQueue,
          e = {};
        for (a in i = i || {}, t) t.hasOwnProperty(a) && (e[a] = t[a]);
        return e.queue = [], e.sorter = i.sorter || t.default_sorter, e;
      },
      default_sorter: function (i, t) {
        return i.cost - t.cost;
      },
      push: function (i, t) {
        this.queue.push({
          value: i,
          cost: t
        }), this.queue.sort(this.sorter);
      },
      pop: function () {
        return this.queue.shift();
      },
      empty: function () {
        return 0 === this.queue.length;
      }
    }
  };
  Ae.exports = V;
});
