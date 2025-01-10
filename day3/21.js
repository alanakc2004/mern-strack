
let decimal = 255;
let hexadecimal = "";
let hexDigits = "0123456789ABCDEF";
if (decimal === 0) {
    hexadecimal = "0";
} else {
    let i = decimal;
    for (; i > 0;) {
        let remainder = i % 16; 
        hexadecimal = hexDigits[remainder] + hexadecimal;
        i = i - remainder; 
        i = i / 16;
    }
}
console.log("Hexadecimal equivalent:", hexadecimal);
