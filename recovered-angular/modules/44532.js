// Extracted from main; webpack module 44532. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(e) {
    return new TypeError(`You provided ${null !== e && "object" == typeof e ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
  }
  i.d(V, {
    z: () => t
  });
});
