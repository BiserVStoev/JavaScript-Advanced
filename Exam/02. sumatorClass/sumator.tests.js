let Sumator = require('./sumator-class.js').Sumator;
let expect = require('chai').expect;


describe('Test cases for Sumator', function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });

    describe('Test if properties exist', function () {
        it('Test if object is class', () => {
            expect(typeof Sumator).to.equal('function')
        });

        it('Test if class has toString', () => {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true)
        });

        it('Test if class has sumNums', () => {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true)
        });

        it('Test if class has removeByFilter', () => {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true)
        });

        it('Test if class has add', () => {
            expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true)
        });

        it('Test if class has add', () => {
            expect(typeof sumator.add === 'function').to.equal(true)
        });

        it('Test if class has removeByFilter', () => {
            expect(typeof sumator.removeByFilter === 'function').to.equal(true)
        });

        it('Test if class has sumNums', () => {
            expect(typeof sumator.sumNums === 'function').to.equal(true)
        });

        it('Test if class has removeByFilter', () => {
            expect(typeof sumator.removeByFilter === 'function').to.equal(true)
        });

        it('Test if class has toString', () => {
            expect(typeof sumator.toString === 'function').to.equal(true)
        });

        it('Test if data is array', () => {
            expect(Array.isArray(sumator.data)).to.equal(true)
        });
    });

    describe('Test initialization', function () {
        it('Test initiliasation, should have empty array', () => {
            expect(sumator.data.length).to.equal(0);
        });
        it('Test initiliasation and add string', () => {
            sumator.add('pesho');
            expect(sumator.data.length).to.equal(1);
            expect(sumator.data[0]).to.equal('pesho');
        });
        it('Test initiliasation and add integer', () => {
            sumator.add(1);
            expect(sumator.data.length).to.equal(1);
            expect(sumator.data[0]).to.equal(1);
        });
        it('Test initiliasation and add floating point number', () => {
            sumator.add(1.234);
            expect(sumator.data.length).to.equal(1);
            expect(sumator.data[0]).to.equal(1.234);
        });
        it('Test initiliasation and add object', () => {
            let obj = {};
            obj.name = 'azz';
            sumator.add(obj);
            expect(sumator.data.length).to.equal(1);
            expect(sumator.data[0]).to.equal(obj);
        });
    });

    describe('Test sumNums', function () {
        it('Test sumNums with empty array', () => {
            let sum = sumator.sumNums();
            expect(sum).to.equal(0);
        });
        it('Test sumNums with only integers', () => {
            sumator.add(1);
            sumator.add(2);
            sumator.add(3);
            let sum = sumator.sumNums();
            expect(sum).to.equal(6);
        });
        it('Test sumNums with only negative integers', () => {
            sumator.add(-1);
            sumator.add(-2);
            sumator.add(-3);
            let sum = sumator.sumNums();
            expect(sum).to.equal(-6);
        });

        it('Test sumNums with only floating point nums', () => {
            sumator.add(1.5);
            sumator.add(2.42);
            sumator.add(3.01);
            let sum = sumator.sumNums();
            expect(sum).to.equal(6.93);
        });
        it('Test sumNums with only strings', () => {
            sumator.add("1");
            sumator.add("2");
            sumator.add("3");
            let sum = sumator.sumNums();
            expect(sum).to.equal(0);
        });
        it('Test sumNums with only objects', () => {
            sumator.add({1:1});
            sumator.add({2:2});
            sumator.add({3:3});
            let sum = sumator.sumNums();
            expect(sum).to.equal(0);
        });
        it('Test sumNums with integers and objects', () => {
            sumator.add({1:1});
            sumator.add({2:2});
            sumator.add({3:3});
            sumator.add(1);
            sumator.add(2);
            sumator.add(3);
            let sum = sumator.sumNums();
            expect(sum).to.equal(6);
        });
        it('Test sumNums with integers and strings', () => {
            sumator.add("1");
            sumator.add("2");
            sumator.add("3");
            sumator.add(1);
            sumator.add(2);
            sumator.add(3);
            let sum = sumator.sumNums();
            expect(sum).to.equal(6);
        });
        it('Test sumNums with integers, strings, object and floating point nums', () => {
            sumator.add("1");
            sumator.add("2");
            sumator.add("3");
            sumator.add(1);
            sumator.add(2);
            sumator.add(3);
            sumator.add({1:1});
            sumator.add({2:2});
            sumator.add({3:3});
            sumator.add(1.53);
            sumator.add(1.1);
            let sum = sumator.sumNums();
            expect(sum).to.equal(8.63);
        });
    });

   describe('Test removeByFilter', function () {
       it('Test removeByFilter where num == 2', () => {
           sumator.add(1);
           sumator.add(2);
           sumator.add(3);
           sumator.removeByFilter(x => x === 2);
           expect(sumator.data.length).to.equal(2);
           expect(sumator.data[0]).to.equal(1);
           expect(sumator.data[1]).to.equal(3);
       });
       it('Test removeByFilter where num is odd', () => {
           sumator.add(1);
           sumator.add(2);
           sumator.add(3);
           sumator.removeByFilter(x => x % 2 !== 0);
           expect(sumator.data.length).to.equal(1);
           expect(sumator.data[0]).to.equal(2);
       });
       it('Test removeByFilter where string is "Pesho"', () => {
           sumator.add(1);
           sumator.add(2);
           sumator.add(3);
           sumator.add('Pesho');
           sumator.add('simo');
           sumator.removeByFilter(x => x === 'Pesho');
           expect(sumator.data.length).to.equal(4);
           expect(sumator.data[3]).to.equal('simo');
       });
       it('Test removeByFilter by object apram"', () => {
           sumator.add(1);
           sumator.add(2);
           sumator.add({name: 'gosho'});
           sumator.add(3);
           sumator.add('Pesho');
           sumator.add('simo');
           sumator.removeByFilter(x => x.name === 'gosho');
           expect(sumator.data.length).to.equal(5);
           expect(sumator.data[2]).to.equal(3);
       });
   });

   describe('Test toString', function () {
       it('Test toString empty', () => {
           expect('' + sumator).to.equal('(empty)');
       });
       it('Test toString with 1 element', () => {
           sumator.add(123)
           expect('' + sumator).to.equal('123');
       });
       it('Test toString with numbers', () => {
           sumator.add(1);
           sumator.add(2);
           sumator.add(3);
           expect('' + sumator).to.equal('1, 2, 3');
       });
       it('Test toString with strings', () => {
           sumator.add("1");
           sumator.add("Pesho");
           sumator.add("5 + 3");
           expect('' + sumator).to.equal('1, Pesho, 5 + 3');
       });
       it('Test toString with objects', () => {
           sumator.add({1:1});
           sumator.add({2:2});
           sumator.add({name:'pesho'});
           expect('' + sumator).to.equal('[object Object], [object Object], [object Object]');
       });
       it('Test toString with combinations of types', () => {
           sumator.add({1:1});
           sumator.add(132);
           sumator.add("Pesho");
           sumator.add({name:'pesho'});
           expect('' + sumator).to.equal('[object Object], 132, Pesho, [object Object]');
       });
   });
});