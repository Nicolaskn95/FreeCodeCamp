function reverseString(str) {
    var inv = "";
  for(var i = str.length - 1; i >= 0; i--){
    // console.log(str.length)
    inv += str[i];
    }
    return inv;
  }

console.log(reverseString("Howdy"));