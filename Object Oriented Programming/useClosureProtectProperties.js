function Bird() {
    let weight = 15;
  
    this.getWeight = function(){
      return weight;
    };
  }

//   Therefore, any part of your code can easily change the name of bird to any value. 
//   Think about things like passwords and bank accounts being easily changeable by 
//   any part of your codebase. That could cause a lot of issues.

//   The simplest way to make this public property private is by creating a variable 
//   within the constructor function. This changes the scope of that variable to be within 
//   the constructor function versus available globally. This way, the variable can only be 
//   accessed and changed by methods also within the constructor function.
