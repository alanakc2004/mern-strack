
let num = 122; 
let originalNum = num;
let reversedNum = 0;
for (let i = num; i > 0; i = i / 10) {
    let lastDigit = i - (i - (i % 10));
    reversedNum = reversedNum * 10 + lastDigit;
    i -= lastDigit;
}
if (originalNum === reversedNum) {
    console.log(originalNum + " is a palindrome.");
} else {
    console.log(originalNum + " is not a palindrome.");
}
