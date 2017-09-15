function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {

        return `I am a ${this.species}. ${this.toString()}`;
    }
}

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Teacher extends Person {
    constructor(name,email,subject){
        super(name,email);
        this.subject=subject;
    }
}

extendClass(Teacher);

let a = new Teacher('pesho', 'gmail', 'Java');

console.log(a.toSpeciesString());
console.log(Object.getPrototypeOf(a))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(a)))

console.log()
console.log(Teacher)
console.log(Teacher.prototype)
console.log(Object.getPrototypeOf(Teacher))
console.log(Object.getPrototypeOf(Teacher).prototype)
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Teacher)))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Teacher)).prototype)