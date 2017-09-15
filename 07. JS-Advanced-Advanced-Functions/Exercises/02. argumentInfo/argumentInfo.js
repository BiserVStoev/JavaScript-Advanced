function result() {
    let argumentTypes = {};

    for (let index = 0; index < arguments.length; index++) {
        let argumentValue = arguments[index];
        console.log(`${typeof argumentValue}: ${argumentValue}`);

        if (!argumentTypes.hasOwnProperty(`${typeof argumentValue}`)){
            argumentTypes[typeof argumentValue] = 0;
        }

        argumentTypes[typeof argumentValue]++;
    }

    let sortedArr = [];
    for (let type in argumentTypes) {
        let element = argumentTypes[type];

        sortedArr.push([type, element]);
    }

    sortedArr = sortedArr.sort((a, b) => {
        return b[1] - a[1];
    });

    for (let index = 0; index < sortedArr.length; index++) {
        let element = sortedArr[index];
        let type = element[0];
        let argumentCount = element[1];

        console.log(`${type} = ${argumentCount}`);
    }
}

//result('cat', 42, function () { console.log('Hello world!'); });
result({ name: 'bob'}, 3.333, 9.999);