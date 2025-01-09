
let input = prompt("Enter a set of numbers separated by commas:");
let positiveNumbers = "";
let negativeNumbers = "";
let temp = "";
for (let i = 0; i <= input.length; i++) {
    if (input[i] === ',' || i === input.length) {
        let number = +temp; 
        if (number > 0) {
            positiveNumbers += number + " ";
        } else if (number < 0) {
            negativeNumbers += number + " ";
        }
        temp = ""; 
    } else {
        temp += input[i];
    }
}
console.log("Positive Numbers:", positiveNumbers);
console.log("Negative Numbers:", negativeNumbers);
