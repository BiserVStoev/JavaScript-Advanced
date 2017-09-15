class Stringer {
    constructor(str, len){
        this.innerString = str;
        this.innerLength = len;
    }

    get innerLength(){
        return this._innerLength;
    }

    set innerLength(length){
        if(length < 0){
            this._innerLength = 0;
        } else {
            this._innerLength = length;
        }

    }

    get innerString() {
        return this._str;
    }

    set innerString(str){
        this._str = str;
    }

    increase(len) {
        this.innerLength += len;
    }

    decrease(len) {
        this.innerLength -= len;
    }

    toString(){
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        }

        if (this.innerLength === 0) {
            return '...';
        }

        return this.innerString.substr(0, this.innerLength) + '...';
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
