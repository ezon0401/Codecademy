// My age
const myAge = 23;

// Early 2 years
let earlyYears = 2;
earlyYears *= 10.5;

// My age - 2
let laterYears = myAge - 2;
// Later years
laterYears *= 4;

// My age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// My name in lower case
const myName = "JiEon".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);