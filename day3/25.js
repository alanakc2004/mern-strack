let str1 = "listen";
let str2 = "silent";
if (str1.length !== str2.length) {
    console.log("Not anagrams");
} else {
    let charCount = {};
    for (let i = 0; i < str1.length; i++) {
        charCount[str1[i]] = (charCount[str1[i]] || 0) + 1;  
    }
    for (let i = 0; i < str2.length; i++) {
        if (!charCount[str2[i]]) {
            console.log("Not anagrams");
            break;
        }
        charCount[str2[i]]--;  
    }
    let isAnagram = true;
    for (let key in charCount) {
        if (charCount[key] !== 0) {
            isAnagram = false;
            break;
        }
    }
    if (isAnagram) {
        console.log("Anagrams");
    } else {
        console.log("Not anagrams");
    }
}
