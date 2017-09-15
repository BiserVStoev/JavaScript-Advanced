class SortedList{
    constructor(){
        this.storage = [];
        this.size = 0;
    }

    add(element){
        this.storage.push(element)
        this.size++;
        this.sort();
    }

    remove(index){
        if (this.isValidIndex(index)) {
            this.storage.splice(index, 1);
            this.size--;
            this.sort();
        } else {
            throw new Error('Invalid Index');
        }
    }

    get(index){
        if (this.isValidIndex(index)) {
            return this.storage[index];
        } else {
            throw new Error('Invalid Index');
        }
    }

    isValidIndex(index) {
        return index >= 0 && index < this.storage.length;
    }

    sort() {
        this.storage = this.storage.sort((a, b) => a - b);
    }
}

let list = new SortedList();
list.add(1);
list.add(3);
list.add(2);
console.log(list.size);