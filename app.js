// Generator Functions

// Function that returns a random index (number) of a string value that is passed in as an argument
function randomIndex(str) {
    return Math.floor(Math.random() * str.length);
}
console.log(randomIndex(`example`));

// Function that returns a random letter using a random index in the "letter" string variable
function randomLetter() {
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    return letters[randomIndex(letters)]
}
console.log(randomLetter());

function getRandomUpper() {
    // Running the "randomLetter" function to create a random letter and setting that value to the letter variable
    const letter = randomLetter();
    // Changing the letter to an Uppercase letter and returnong it from the function
    return letter.toUpperCase();
}
console.log(getRandomUpper());

function getRandomLower() {
    // Running the "randomLetter" function to crete a random letter and returning it from the function
    return randomLetter();
}
console.log(getRandomLower());

function randomNumber() {
    const numbers = `1234567890`;
    // Returns a random number using a random index in the "numbers" string
    return numbers[randomIndex(numbers)];
}
console.log(randomNumber());

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    // Returning a random symbol using a random index in the "symbols" string variable
    return symbols[randomIndex(symbols)];
}
console.log(getRandomSymbol());