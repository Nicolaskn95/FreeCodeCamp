function htmlColorNames(arr) {
    // Only change code below this line
    const startIndex = 0;
    const amountDelete = 2;
  
    arr.splice(startIndex, amountDelete, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
  }
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));