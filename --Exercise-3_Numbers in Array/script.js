const numArray = [3, 5, 8, 3, 6, 11, 35, 34, 22, 11, 4, 2, 3];

function findNumber(number, array) {
    let countNumber = 0;
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            countNumber += 1;
        }
    }
    return countNumber;
}

console.log(findNumber(3, numArray));