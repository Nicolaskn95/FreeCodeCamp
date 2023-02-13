function quickCheck(arr, elem) {
    let result = arr.indexOf(elem);
    if(result >= 0){
      return true;
   } else {
        return false;
      }
    }
  console.log(quickCheck(["onions", "squash", "shallots"], "onions"));

  // usando condição ternaria
  
//   function quickCheck(arr, elem) {
//     return arr.indexOf(elem) >= 0 ? true : false;
//   }
//   console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));