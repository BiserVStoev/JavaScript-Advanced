class Rat {
    constructor(name){
        this.name = name;
        this.rats = [];
    }

    unite(otherRat){
        if(typeof otherRat === 'object' && otherRat.constructor.name === 'Rat'){
            this.rats.push(otherRat);
        }
    }

    getRats() {
        return this.rats;
    }

    toString() {
        let toStr = '';
        toStr += this.name;
        for (let rat of this.rats) {
            toStr += '\n';
            toStr += `##${rat.name}`
        }

        return toStr;
    }

}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
