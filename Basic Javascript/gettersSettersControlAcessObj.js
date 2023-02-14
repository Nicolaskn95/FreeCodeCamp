// Only change code below this line
class Thermostat{
    constructor(fahrenheit){
      this._fahrenheit = fahrenheit; 
    }
get temperature(){
    return (5/9) * (this._fahrenheit - 32);
   }
set temperature(celsius){
    this._fahrenheit = (celsius * 9.0) / 5 + 32 
}
  }
const thermos = new Thermostat(76); // mudar o parametro , colocar a temperatura em fahrenheit 
let temp = thermos.temperature; // 24.44 in Celsius
//thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log(temp)