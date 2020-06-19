
/**
 * A built in memory map to handle loaded asset
 */
class AssetsMemory {
    constructor() {
        this.storage = new Map();
    }

    /**
     * Store key and asset so it can be loaded later
     * The key should not be the same or else will be overwritten
     * @param {*} key - The key's / asset's name
     * @param {*} value - The value {image, audio}
     */
    set(key, value) {
        this.storage.set(key, value);
    }

    /**
     * 
     * @param {*} key - Get the asset element by key
     */
    get(key) {
        this.storage.get(key);
    }

    /**
     * Return true if key exists
     * @param {*} key 
     */
    has(key) {
        return this.storage.has(key);
    }

    /**
     * If no key is provided, it will clear all loaded assets
     * @param {*} key - A key to be search to delete
     */
    delete(key = null) {
        if(key === null) {this.storage.clear(); return;}
        this.storage.delete(key);
    }


}