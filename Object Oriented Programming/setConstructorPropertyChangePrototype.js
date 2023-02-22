function Dog(name) {
    this.name = name;
  }
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog, //There is one crucial side effect of manually setting the prototype to a new object. Fica mais de prociurar depois
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };