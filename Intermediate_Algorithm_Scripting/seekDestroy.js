function destroyer(arr){
   var valsToRemove = Object.values(arguments).slice(1);
   console.log(valsToRemove);
   const filteredArray = [];

  for(let i = 0; i < arr.length; i++){
   let removeElement = false;
   for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]){
         removeElement = true;
      }
   }
   if(!removeElement){
      filteredArray.push(arr[i]);
   }
  }
  return filteredArray
}
   console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

// const test = (arr) => {
// //   return arr.slice(1);
// var valToRemove = Object.values(arguments).slice(1);
// return valToRemove;
// }

// console.log(test([1, 2, 3, 1, 2, 3], 8, 5))
