// const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0]

// const somar = (a, b) => a + b
// const dividir = (a, b) => a / b

// const mediaTurma = dividir(notas.reduce(somar),notas.length)

// console.log(`Media é: ${mediaTurma}`)

// const addAndCheckEqual = num1 => {
//     if(num1 > Number.EPSILON){
//         return true;      
//     }else{
//         return false;
//     }        
// }
// const array = [-3, 4.8, 5, 3, -3.2] 
//  const result = array.filter(array =>  array % parseInt(array) === 0)
// console.log(result);
// // console.log(Number.EPSILON);

// function ascendigOrder(arr){
//     return arr.sort(function(a,b){
//         return a - b
//     })
// }
// // ascendigOrder([1, 5, 2, 3, 4]);
// console.log(ascendigOrder([1, 10, 2, 21]));

let numbers = [5, 4, 2, 1, 12];
numbers.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);