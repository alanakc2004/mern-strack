let set = [5, 3, 8, 3, 1, 5, 7, 8, 2];  
let uniqueSet = []; 
let index = 0;  
for (let i = 0; i < set.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueSet.length; j++) {
        if (set[i] === uniqueSet[j]) {
            isDuplicate = true; 
            break;
        }
    }
    if (!isDuplicate) {
        uniqueSet[index] = set[i]; 
        index++; 
    }
}
for (let i = 0; i < uniqueSet.length - 1; i++) {
    for (let j = 0; j < uniqueSet.length - 1 - i; j++) {
        if (uniqueSet[j] > uniqueSet[j + 1]) {
            let temp = uniqueSet[j];
            uniqueSet[j] = uniqueSet[j + 1];
            uniqueSet[j + 1] = temp;
        }
    }
}

console.log(uniqueSet);
