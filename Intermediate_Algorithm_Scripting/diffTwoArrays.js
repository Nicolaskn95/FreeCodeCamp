function diffArray(arr1, arr2) {
    const newArr = [];
    
      function onlyInFirst(first, second){
        for (var x = 0; x < first.length; x++){
          if(second.indexOf(first[x]) === -1){
              newArr.push(first[x]);
          }
      }
    }
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));