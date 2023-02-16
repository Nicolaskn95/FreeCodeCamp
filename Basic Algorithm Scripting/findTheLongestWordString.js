function findLongestWordLength(str) {
    let maxLength = 0
    let stringSplit = []
    stringSplit = str.split(" ")
    console.log(stringSplit)
    
    for(var i = 0; i < stringSplit.length; i++){
      if(stringSplit[i].length > maxLength){
          maxLength = stringSplit[i].length
        }   
      }
    return maxLength;
  }
  console.log(findLongestWordLength("May the force be with you"));
  