const users = {
    Alan: {
      online: true
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: true
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj){
    // console.log(usersObj)
      if(usersObj[user].online === true){
        result ++;
        
    }
      }
      return result;
    // Only change code above this line
  }
  
  console.log(countOnline(users));