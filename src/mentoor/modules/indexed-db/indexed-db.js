class IndexedDb {
    constructor() {
        this.initiate();
        this.table = 'default';
    }

    async initiate() {
        
        // In the following line, you should include the prefixes of implementations you want to test.
        window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        // DON'T use "var indexedDB = ..." if you're not in a function.
        // Moreover, you may need references to some window.IDB* objects:
        window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || { READ_WRITE: "readwrite" }; // This line should only be needed if it is needed to support the object's constants for older browsers
        window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
        // (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

        this.db = await indexedDB.open(Config.get('app.name'), {
            version: 1,
            // Version upgrade is an optional callback, not an event
            upgrade: db => {
                // this.db = db;
                // this.checkTable(this.table);
            }
        });

        this.checkTable(this.table);
    }

    checkTable(tableName) {
        if (!this.db.objectStoreNames.contains(tableName)) {
            this.db.createObjectStore(tableName, {
                keyPath: 'id',
            });
        }
    }

    read() {
        return this.db.transaction(this.table).objectStore(this.table);
    }

    write() {
        return this.db.transaction(this.table).objectStore(this.table);
    }

    get(name, onFallback) {
        return new Promise((resolve, reject) => {
            let request = this.read().get(name);
            request.onsuccess = event => {
                resolve(event.target.result);
            };

            request.onerror = e => {
                let newData = onFallback();
                this.set(name, newData);

                return newData;
            };
        });
    }

    set(key, value) {

    }
}

DI.register({
    class: IndexedDb,
    alias: 'db',
});