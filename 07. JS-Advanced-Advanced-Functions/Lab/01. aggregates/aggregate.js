function aggregate(input) {
    function reduce(arr, func) {
        let result = arr[0];
        for (let nextElement of arr.slice(1))
            result = func(result, nextElement);
        return result;
    }

    console.log('Sum = ' + reduce(input, (a,b) => a + b));
    console.log('Min = ' + reduce(input, (a,b) =>a < b ? a : b));
    console.log('Max = ' + reduce(input, (a,b) =>a > b ? a : b));
    console.log('Product = ' + reduce(input, (a,b) => a * b));
    console.log('Join = ' + reduce(input, (a,b) => '' + a + b));
}

aggregate([5, -3, 20, 7, 0.5]);