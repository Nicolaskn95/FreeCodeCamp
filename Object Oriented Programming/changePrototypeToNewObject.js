function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
      return
    },
    describe: function() {
      console.log("My name is " + this.name);
      return
    }
  };