import InvalidTypeException from "../../exception/InvalidTypeException";
import Events from "../../event/Events";

/**
 * Implementation of a wrapper for indexedDB
 */
class ClientDatabase {
    constructor(name, options) {
        this.versionNumber = options.version || options.versionNumber || 1;
        this.idb = null;
        this.numberOfFailures = 0;
        this.db = null;
        this.on = Events()
        this.debug = this.debugEnabled()

        if(!('indexedDB' in window)) {
            console.warn('indexedDB not supported. Rolling back to WebSQL')
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
        if(this.debug) {
            console.log('Established a connection')
        }
    }

    /**
     * Return true if there is a connection to the database being opened
     * @return boolean
     */
    isOpened() {
        return this.db !== null;
    }

    /**
     * Check version of the database
     */
    checkversion() {
        if (isNaN(this.versionNumber) || this.versionNumber < 0.1) throw new InvalidTypeException(`Given version is not a positive number`);
        let versionNumber = Math.round(this.versionNumber * 10) / 10;
    }

    table(name) {
        return new Table()
    }

    /**
     * By default, use debug mode if served from localhost.
     * @return true if served from localhost, false otherwise
     */
    debugEnabled() {
        return typeof location !== 'undefined' && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    }

    /**
     * 
     * A better way to check for debug mode. Support IPv6 as additional address. 
     * This is only for client database, if you're looking for enable/disable debug mode for the entire game. 
     * See ... instead. 
     * @return boolean
     */
    defaultDebugMode() {
        return Boolean(
            window.location.hostname === 'localhost' ||
            // [::1] is the IPv6 localhost address.
            window.location.hostname === '[::1]' ||
            // 127.0.0.1/8 is considered localhost for IPv4.
            window.location.hostname.match(
                /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            ) || 
            window.location.hostname.startsWith('192.168.') || window.location.hostname.startsWith('10.0.')
        );
    }
    

    
}

export default ClientDatabase;