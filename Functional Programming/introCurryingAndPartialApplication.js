function add(x) {
    // Only change code below this line
   return function(y){
     return function(z){
        return z+y+x
      }
    }

  }
  const curried = x => y => z => x + y + z
  console.log(add(11)(22)(33));


//   The aridade of a function is the number of arguments it requires. 
// Currying a function means to convert a function of N arity into N functions of arity 1.

// in other words, it restructures a function so it takes one argument, 
// then returns another function that takes the next argument, and so on.