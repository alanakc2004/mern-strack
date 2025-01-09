
let n = 10; 
let first = 0, second = 1;
console.log("Fibonacci Series up to " + n + " terms:");

for (let i = 1; i <= n; i++) {
    console.log(first); 
    let next = first + second; 
    first = second; 
    second = next;  
}
