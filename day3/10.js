let numbers = [1, 5, 2, 3, 10, 9, 8, 7, 6];
let largest = numbers[0];
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log("The largest number is:", largest);
console.log("The smallest number is:", smallest);