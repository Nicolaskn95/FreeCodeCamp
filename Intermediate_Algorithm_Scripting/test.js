function diffArray(num1,num2){

   let x = num2.indexOf(num1[2]) === -1
   return x;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));