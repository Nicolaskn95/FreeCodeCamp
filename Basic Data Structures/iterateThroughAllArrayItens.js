//function filteredArray(arr, elem) {
const filteredArray = (arr, elem) => {
    let newArr = [];
    // Only change code below this line
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i])
    // console.log(newArr)
      if(arr[i].indexOf(elem) == -1){
        newArr.push(arr[i]);
      }
    }
    // Only change code above this line
    return newArr;
  }
  console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));