function titleCase(str) {
    let stringSplit = str.split(" ");
    let updatedTitle = [];

    // console.log(stringSplit)
    for(let st in stringSplit){
        updatedTitle[st] = stringSplit[st][0].toUpperCase() + stringSplit[st].slice(1).toLowerCase();
        // console.log(updatedTitle)
    }
    return updatedTitle.join(" ");
  }
  
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));