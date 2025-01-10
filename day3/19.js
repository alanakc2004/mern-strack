
let numbers = [5, -3, 7, -1, 0, 8, -4];
let positiveNumbers = [];
let negativeNumbers = [];
let posIndex = 0;
let negIndex = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveNumbers[posIndex] = numbers[i];  
        posIndex++;  
    } else if (numbers[i] < 0) {
        negativeNumbers[negIndex] = numbers[i]; 
        negIndex++; 
    }
}
console.log("Positive Numbers:", positiveNumbers);
console.log("Negative Numbers:", negativeNumbers);


