
let str = "Hello World!";
let upperCaseStr = "";
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= 'a' && char <= 'z') {
        char = String.fromCharCode(char.charCodeAt(0) - 32);
    }
    upperCaseStr += char;}
let lowerCaseStr = "";
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= 'A' && char <= 'Z') {
        char = String.fromCharCode(char.charCodeAt(0) + 32);
    }
    lowerCaseStr += char;
}
console.log("Uppercase: " + upperCaseStr);
console.log("Lowercase: " + lowerCaseStr);
