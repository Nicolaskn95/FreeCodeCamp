function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  

Dog.prototype.isPrototypeOf(beagle);  // yields true
Object.prototype.isPrototypeOf(Dog.prototype); //

// Fix the code below so that it evaluates to true
// beagle.isPrototypeOf(Dog.prototype);

console.log(Dog.hasOwnProperty("name"))
  Dog.prototype.isPrototypeOf(beagle);