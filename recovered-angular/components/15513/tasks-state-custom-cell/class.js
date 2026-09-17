// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.title = "", this.className = "";
  }
  ngOnInit() {
    switch (this.data) {
      case "относительно-стабильный":
      case "относительно стабильный":
        this.title = "Отн. стабильный", this.className = "semi-stable";
        break;
      case "срочный":
        this.title = "Срочный", this.className = "urgent";
        break;
      case "стабильный":
        this.title = "Стабильный", this.className = "stable";
    }
  }
});
