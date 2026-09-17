// Extracted class; external identifiers resolve in modules/38334.js.
(class {
  constructor() {
    this.commentType = "private", this.commentText = "";
  }
  save() {
    console.log({
      type: this.commentType,
      comment: this.commentText
    }, "reqData");
  }
});
