function as(array, orderType) {
    if (orderType === 'asc'){
        return array.sort((a, b) => {
            return a - b;
        });
    } else {
        return array.sort((a, b) => {
            return b - a;
        });
    }
}

console.log(as([14, 7, 17, 6, 8], 'asc'));
console.log(as([14, 7, 17, 6, 8], 'desc'));