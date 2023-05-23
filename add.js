const EventEmitter = require("node:events");
class SuperHero extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
    this.emit("hero", "green lantern", name);
  }
}

exports.superhero = new SuperHero("batman");
