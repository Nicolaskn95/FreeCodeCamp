Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (Boolean(callback(this[i], i, this)) === true) {
        newArray.push(this[i]);
    // Only change code above this line
    }
   }
    return newArray;
  };
  
  console.log(["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi"))
  console.log([23, 65, 98, 5, 13].myFilter(item => item % 2))
  console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index))