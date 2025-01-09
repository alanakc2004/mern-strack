let num = 153; 
let originalNum = num;
let sum = 0;
let numDigits = 0;
let tempNum = num;
while (tempNum > 0) {
    numDigits++;
    tempNum = tempNum / 10;  
}
tempNum = num;
while (tempNum > 0) {
    let digit = tempNum % 10;  
    tempNum = (tempNum - digit) / 10;  
    let digitPower = digit;  
    for (let i = 1; i < numDigits; i++) {
        digitPower *= digit;
    }
    
    sum += digitPower; 
}
if (sum === originalNum) {
    console.log(originalNum + " is an Armstrong number.");
} else {
    console.log(originalNum + " is not an Armstrong number.");
}
