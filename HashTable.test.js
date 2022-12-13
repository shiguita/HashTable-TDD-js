const HashTable = require("./HashTable");

const ht = new HashTable();
ht._insert("Connor Lee", "123456789");
ht._insert("Sammy Jackson", "654321987");
ht._insert("Alex Donovan", "123654789");
ht._insert("Lenny Hart", "019283746");
ht._insert("Jeremy Adams", "098765432");
ht._insert("Lissa Black", "756834291");

describe('#_hash', () => {
    describe('with incorrect key', () => {
      test('it returns false', () => {
        expect(ht._hash("")).toBeFalsy();
      })
    });
    describe('with correct key', () => {
        test('hash is correct', () => {
            expect(ht._hash("Correct String")).toBe(83);
        })
    });
});
describe('#_insert', () => {
    describe('new element at index', () => {
        test('it creates a LL at index and inserts element', () => {
            expect(ht.table[93]).toBeUndefined();
            expect(ht.size == 6).toBeTruthy;
            ht._insert("Veronica Moor", "124356870");
            expect(ht.table[93]).toBeTruthy();
            expect(ht.table[93].size == 1).toBeTruthy();
            expect(ht.size == 7).toBeTruthy;
        })
    });
    describe('another element at index', () => {
        test('adds another element at existing LL', () => {
            ht._insert("Dennis Bakman", "887766551");
            expect(ht.table[93].head.key).toBe("Dennis Bakman");
            expect(ht.table[93].size == 2).toBeTruthy();
        })
    });
    describe('existing key at index', () => {
        test('updates value of key at LL', () => {
            const oldSize = ht.size;
            const oldValue = ht.table[93];
            ht._insert("Dennis Bakman", "223344019");
            expect(ht.size == oldSize).toBeTruthy();
            expect(ht.table[93].size == 2).toBeTruthy();
            expect(ht.table[93].head.value != oldValue).toBeTruthy();
        })
    });
});
describe('#_delete', () => {
    describe('existing element in LL', () => {
        test('removes element from LL', () => {
            const oldSize = ht.size;
            expect(ht._delete("Dennis Bakman")).toBeTruthy();
            expect(ht.size < oldSize).toBeTruthy();
            expect(ht.table[93].size == 1).toBeTruthy();
        })
    });
    describe('incorrect element in populated LL', () => {
        test('returns false', () => {
            expect(ht._delete("Dennis Bakman")).toBeFalsy();
            expect(ht.table[93].size == 1).toBeTruthy();
        })
    });
    describe('element in empty index', () => {
        test('returns null', () => {
            expect(ht.table[50]).toBeUndefined();
            expect(ht._delete("aaaaa")).toBeNull();
        })
    });
});
describe('#_find', () => {
    describe('non-existent element at populated LL', () => {
        test('returns null', () => {
            expect(ht._find("Dennis Bakman")).toBeNull();
        })
    });
    describe('incorrect element', () => {
        test('returns false', () => {
            expect(ht._find("aaaaa")).toBeFalsy();
        })
    });
    describe('existing element', () => {
        describe('returns the element', () => {
            expect(ht._find("Lissa Black")).toBeTruthy();
        })
    })
})
describe('', () => { })