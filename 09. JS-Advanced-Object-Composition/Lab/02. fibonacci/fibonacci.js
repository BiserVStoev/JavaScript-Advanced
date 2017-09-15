function getFibonator() {
    let prevNumber = 0;
    let currentNumber = 1;

    return function () {
        console.log(currentNumber);

        let nextNumber = prevNumber + currentNumber;
        prevNumber = currentNumber;
        currentNumber = nextNumber;
    }
}

let fib = getFibonator();
fib();
fib();
fib();
fib();
fib();
fib();
fib();