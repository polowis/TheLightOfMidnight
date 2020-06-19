import AssetNotFoundException from './exception/AssetNotFoundException';
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
        if(this.has(key)) {
            return this.storage.get(key);
        }
        throw new AssetNotFoundException("Asset can not be found, make sure you have loaded the asset first")

        
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

const AssetsMemoryStorage = new AssetsMemory();

export default AssetsMemoryStorage;