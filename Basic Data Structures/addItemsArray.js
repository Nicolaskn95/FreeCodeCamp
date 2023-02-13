function mixedNumbers(arr) {
    // Only change code below this line
  arr.unshift('I',2,'three') // adiciona itens no começo 
  arr.push(7,'VIII',9) // adiciona itens no fim 
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));