
let numbers = [234, 567, 345, 899, 102, 782];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]; 
    }
}
console.log("The largest 3-digit number in the set is:", largest);
