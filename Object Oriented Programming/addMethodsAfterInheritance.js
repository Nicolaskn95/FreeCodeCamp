function Animal() { }
Animal.prototype.eat = function() { 
  console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!")
  };
Dog.prototype.bark1 = function() {
  console.log("Howffff!")
  };

// Only change code above this line

let beagle = new Dog();
let cockerSpaniel = new Dog();

beagle.bark();
cockerSpaniel.bark1();
cockerSpaniel.eat();
beagle.eat();

