
let binary = "1011"; 
let decimal = 0;
for (let i = 0; i < binary.length; i++) {
    let bit = binary[binary.length - 1 - i];
    if (bit === '1') {
        let powerOfTwo = 1;
        for (let j = 0; j < i; j++) {
            powerOfTwo *= 2; 
        }
        decimal += powerOfTwo; 
    }
}
console.log("Decimal equivalent:", decimal);
