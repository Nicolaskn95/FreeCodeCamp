function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr[num - 1] = [...arr]; // "..." spread operator, copia mostra todos os itens da array sem precisar copiar todos 
            // outra reposta possivel "newArr.push([...arr]);"
      num--;
    }
    return newArr;
  }
  console.log(copyMachine([1, 2, 3], 5));