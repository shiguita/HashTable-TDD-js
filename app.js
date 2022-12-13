const HashTable = require("./HashTable");

const ht = new HashTable();
ht._insert("Connor Lee", "123456789");
ht._insert("Sammy Jackson", "654321987");
ht._insert("Alex Donovan", "123654789");
ht._insert("Lenny Hart", "019283746");
ht._insert("Jeremiah Trout", "098765432");
ht._insert("Lissa Black", "756834291");
ht._insert("Veronica Santana", "124356870");
console.log(ht);
console.table(ht.table);
console.log(ht.table[93]);