let input = 'i love you';

const vowels = ['a', 'e', 'i', 'o', 'u']

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
    }
}

let resultString = resultArray.join("").toUpperCase();
console.log(resultString);