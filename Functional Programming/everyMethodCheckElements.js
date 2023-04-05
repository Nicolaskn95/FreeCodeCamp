function checkPositive(arr) {
    // Only change code below this line
  return arr.every(val => val > 0 );
    // return arr > 0;

  }// every ve todos os valores na array e retorn bolean
  
  console.log(checkPositive([1, 2, 3, 4, 5]));