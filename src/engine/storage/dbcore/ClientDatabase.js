import InvalidTypeException from "../../exception/InvalidTypeException";
import Events from "../../event/Events";

class ClientDatabase {
    constructor(name, options) {
        this.versionNumber = options.version || options.versionNumber || 1;
        this.idb = null;
        this.numberOfFailures = 0;
        this.db = null;
        this.on = Events()

        if(!('indexedDB' in window)) {
            console.log('indexedDB not supported. Rolling back to WebSQL')
            return;
        } else { this.connect(name, options)}
    }

    /**
     * 
     * @param {*} name 
     */
    connect(name) {
        this.idb = indexedDB.open(name, this.versionNumber)
        this.idb.onerror = this.errorhandler()
        this.idb.onsuccess = this.setDB()
    }

    /**
     * 
     * @param {*} event 
     */
    errorhandler(event) {
        this.numberOfFailures++
        console.log(event)
    }

    /**
     * 
     * @param {*} event 
     */
    setDB(event) {
        this.db = event.target.result
        console.log('Established a connection')
    }

    /**
     * 
     */
    isOpened() {
        return this.db !== null;
    }

    checkversion() {
        if (isNaN(this.versionNumber) || this.versionNumber < 0.1) throw new InvalidTypeException(`Given version is not a positive number`);
        let versionNumber = Math.round(this.versionNumber * 10) / 10;
    }

    table(name) {
        return new Table()
    }

    
}

export default ClientDatabase;