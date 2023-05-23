function printName(city, country) {
  console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
}

const myName = {
  firstName: "Ankit",
  lastName: "Saxena",
};

// printName.call(myName, 'tet', 'asa')

Function.prototype.myCall = function (obj, ...args) {
  obj.myFn = this;
  obj.myFn(...args);
};

printName.myCall(myName, "test", "abc");

Function.prototype.myBind = function (obj, ...args) {
  obj.myFn = this;
  return function (...a) {
    obj.myFn(...args);
  };
};

const fn = printName.myBind(myName, "test", "abc");
fn();

Function.prototype.myApply = function (obj, args) {
  obj.myFn = this;
  obj.myFn(...args);
};

printName.myApply(myName, ["test", "abc"]);
