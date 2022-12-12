class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    print() {
        let output = 'HEAD:';
        let current = this.head;
        while (current) {
            output += `${current.key}: ${current.value}-> `
            current = current.next;
        }
        console.log(`${output}null`);
    }
    // Methods:
    insert(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    getByIndex(index) {
        if (index < 0 || index >= this.size) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    addNewIn(value, index) {
        if (index === 0) {
            this.insert(value);
            return true;
        }
        let prev = this.getByIndex(index-1);
        if (!prev) return null;
        let aux = prev.next;
        prev.next = new Node(value, aux);
        this.size++;
        return true;
    }

    remove() {
        if (!this.head) return null;
        const n = this.head;
        this.head = this.head.next;
        this.size--;
        return n;
    }

    removeIn(index) {
        if (index === 0) {
            this.remove();
            return true;
        }
        let prev = this.getByIndex(index - 1);
        if (!prev) return null;
        let current = prev.next;
        prev.next = current.next;
        this.size--;
        return true;
    }
}

class Node {
    constructor({key, value}, next) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

module.exports = linkedList, Node;