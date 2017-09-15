function generateList() {
    return (function () {
        let storage = [];

        function getSize() {
            return storage.length;
        }

        function add(element) {
            this.size++;
            storage.push(element);
            sort();
        }

        function remove(index) {
            if (isValidIndex(index)) {
                this.size--;
                storage.splice(index, 1);
                sort();
            } else {
                throw new Error('Invalid Index');
            }
        }

        function sort() {
            storage = storage.sort((a, b) => a - b);
        }

        function isValidIndex(index) {
            return index >= 0 && index < storage.length;

        }

        function get(index) {
            if (isValidIndex(index)) {
                return storage[index];
            } else {
                throw new Error('Invalid index');
            }
        }

        return {add, remove, get, size : 0}
    })();
}

let list = generateList();
list.add(1);
list.add(1);
list.add(1);
console.log(list.size);