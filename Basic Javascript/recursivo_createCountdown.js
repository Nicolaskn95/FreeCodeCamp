function countup(n) {
    if (n < 1) {
      return [];
    } 
    else {
      const countArray = countup(n - 1);
      countArray.unshift(n);
      console.log(countArray);
      return countArray;
    }
}
countup(20);
// console.log(countup(20));