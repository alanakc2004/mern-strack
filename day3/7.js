
for (let i = 1; i <= 100; i++) {
    for (let j = 1; j * j <= 100; j++) {
        if (j * j * j === i) {
            console.log(i);
            break;
        }
    }
}