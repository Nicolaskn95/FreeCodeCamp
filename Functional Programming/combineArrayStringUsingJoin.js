function sentensify(str) {
    // Only change code below this line
  
   let result = str.split(/\W/)
   return result.join("-")
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));