
let primeNumbers = [];
let num = 2;
for (let i = 0; primeNumbers.length < 10; num++) {
    let isPrime = true;
    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeNumbers.push(num);
    }
}
console.log(primeNumbers);
