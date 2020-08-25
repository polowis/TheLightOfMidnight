class Table {
    constructor() {
        this.idbtrans = IDBTransaction
    }

    createTable() {
        this.idbtrans.createObjectStore()
    }
   
}