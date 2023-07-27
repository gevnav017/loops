

//find quantity of vows and constanants
const vowels = ["a", "e", "i", "o", "u"];
const word = "hello";

let entireWordCount = 5;
let vowCount = 2;

for (let i = 4; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (word[i] === vowels[j]) {
            vowCount++;
        }
    }
}

conCount = entireWordCount - vowCount;

console.log("con count: " + conCount + " vow count:" + vowCount);


//reverse array
const numbers = [1, 2, 3];
const reverse = [];

for (let i = numbers.length -1; i >= 0; i--) {
    reverse.push(numbers[i]);
}

console.log(reverse);

//fizz buzz
for (let i =1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log(i);
    }
}