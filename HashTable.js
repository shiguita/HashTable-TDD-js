const linkedList = require("./LinkedList");

class HashTable {
    constructor() {
        this.table = new Array(100);
        this.size = 0;
    }

    iterList(index, key) {
        let node = this.table[index].head;
        while (node) { // Recorremos la linkedList existente
            // Si encontramos una misma key, actualizamos el value
            if (node.key === key) return node;
            node = node.next;
        }
        return null;
    }
    // Methods
    _insert(key, value) {
        let index = this._hash(key);
        if (!this.table[index]) {
            // No hay contenido en ese índice, simplemente se añade 
            this.table[index] = new linkedList();
            this.table[index].insert({ key, value });
        } else {
            let search = this.iterList(index, key);
            if (search) {
                search.value = value;
                return true;
            }
            // Si es una key nueva, se añade en el ínidce
            this.table[index].insert({key, value});
        }
        this.size++;
    }

    _delete(key) {
        let index = this._hash(key);
        // Comprobar que haya contenido 
        if (this.table[index] && this.size) {
            let node = this.table[index].head;
            let pos = 0;
            while (node) {
                // Si encuentra la key, borramos la pareja
                if (node.key === key) {
                    this.size--;
                    return this.table[index].removeIn(pos);
                }
                node = node.next;
                pos++;
            }
            // No existe la key, no se borró nada
            return false;
        } else { // No hay contenido con esa key, nada que borrar
            return null;
        }
    }

    _find(key) {
        let index = this._hash(key);
        if (!this.table[index]) {
            // No hay contenido en ese índice
            return null;
        } else {
            // retorna el nodo si lo encuentra, null si no
            return this.iterList(index, key);
        }
    }
    //funcion hash
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < 4; i++) {
            hash += key.charCodeAt(i);
        }
        hash *= hash;
        hash = '' + hash;
        return +hash.substring(1, 3);
    }

    //cuando se alcanza un valor (load factor) se aumenta el tamaño del conjunto
}

module.exports = HashTable;