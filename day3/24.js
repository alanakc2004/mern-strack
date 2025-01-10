let number = 5; 
let factorial = (function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * calculateFactorial(n - 1);  
})(number);
console.log(factorial); 
