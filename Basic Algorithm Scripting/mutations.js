function mutation(arr) {
    let test = arr[1].toLowerCase();
    let result = arr[0].toLowerCase();
  
    for(let i = 0; i < test.length; i++){
      if(result.indexOf(test[i]) < 0)
        return false;
      }
      return true;
    }
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));// verifica se existe todas as letras no primeiro index