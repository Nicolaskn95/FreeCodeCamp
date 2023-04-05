function sumAll(arr){
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;

    for(var x = min; x <= max; x++)
    sumBetween += x;    
        return sumBetween;
}

console.log(sumAll([1, 4]));