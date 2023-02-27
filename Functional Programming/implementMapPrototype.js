var produtos = [
    {
        nome : "Smartphone 5' Android",
        preco : 1200
    },
    {
        nome : "Notebook 4GB Windows 10",
        preco : 2100
    },
    {
        nome : "SmartTV 50' LED",
        preco : 8700
    }
 ];


Array.prototype.myMap = function(callback) {
    const newArray = [...callback];
    // Only change code below this line
   
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    // Only change code above this line
    return newArray;
  };
  
  console.log(Array.prototype.myMap(produtos))
