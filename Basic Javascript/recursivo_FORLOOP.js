function multiply(arr, n) {
  // let arr = [1,2,3,4,5];
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
    console.log(product);
  }
  return product;
}
console.log(multiply([1,2,3,4,5],5));
