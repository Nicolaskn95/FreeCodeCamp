// function bouncer(arr) {
//     const filterArray = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]){
//             filterArray.push(arr[i]);

//         } 
//     }
//     return filterArray;
//   }
  
  function bouncer(arr) {
    return arr.filter(Boolean);
}

  console.log(bouncer([7, "ate", "", false, 9]));

