function largestOfFour(arr) {
    const result = []
    for(var i = 0; i < arr.length; i++){
    let maxNumber = arr[i][0]
    
    // console.log(i,"i")
      for(var j = 0; j < arr[i].length; j++){
          if(arr[i][j] > maxNumber){
             maxNumber = arr[i][j]
          }
      }
    result [i] = maxNumber
    }
    return result;
  }
  largestOfFour([[1, 30, 14, 27], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);