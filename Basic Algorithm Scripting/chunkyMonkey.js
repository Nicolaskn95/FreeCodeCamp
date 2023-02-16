function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for(let i = 0; i < arr.length; i += size){
        newArr.push(arr.slice(i, i + size));
        // push(elementN) = The element(s) to add to the end of the array.
        // slice(start, end) = 
    }
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // irá separar a array toda em partes conforme o size