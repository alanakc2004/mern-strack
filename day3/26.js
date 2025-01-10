let str = "hello world"; 
let charCount = {};
for (let i = 0; i < str.length; i++) {
    let char = str[i]; 
    if (char !== ' ') {
        charCount[char] = (charCount[char] || 0) + 1;
    }
}
for (let char in charCount) {
    console.log(char + ": " + charCount[char]);
}
