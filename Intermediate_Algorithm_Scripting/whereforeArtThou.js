// function whatIsInAName(collection, source) {
//     // What's in a name?
//     const arr = [];
//     // Only change code below this line
//     for (let i = 0; i < collection.length; i++) {
//       let found = true;
//       for (var sourceProp in source) {
//         if (collection[i][sourceProp] !== source[sourceProp]) {
//           found = false;
//           break;
//         }
//       }
//       if (found) arr.push(collection[i]);
//     }
//     // Only change code above this line
//     return arr;
//   }
  // test here
  
  let whatIsInAName=(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
    );
    let aa = ([3,4,5,5],3,4)
    let result = aa.length
          console.log(result)