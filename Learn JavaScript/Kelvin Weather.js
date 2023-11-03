// To store a Kelvin temperature
const kelvin = 0;
// To convert the Kelvin temperature to Celsius temperature
const celsius = kelvin - 273;

// To convert the Celsius temperature to Fahrenheit temperature
let fahrenheit = celsius * (9 / 5) + 32;
// To round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// To convert the Celsius temperature to Newton temperature
let newton = celsius * (33 / 100);
// To round down the Newton temperature
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees in Newton.`);