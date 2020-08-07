class HashMap{
    constructor(capacity = 16, loadFactor = 0.75) {
        this.buckets = new Array(capacity);
        this.loadFactor = loadFactor;
        this.size = 0;
        this.collisions = 0;
        this.keys = [];
    }

    /**
     * 
     * @param {*} key 
     */
    hash(key) {
        let hashValue = 0;
        const stringTypeKey = `${key}${typeof key}`;
        for (let i = 0; i < stringTypeKey.length; i++) {
            const charCode = stringTypeKey.charCodeAt(i);
            hashValue += charCode << (i * 8);
        }
        return hashValue;
    }

    /**
     * 
     * @param {*} key 
     */
    getBucketsIndex(key) {
        const hashValue = this.hash(key);
        const bucketIndex = hashValue % this.buckets.length;
        return bucketIndex;
    }

    /**
     * 
     * @param {*} key 
     */
    _getIndexes(key) {
        const bucketIndex = this.getBucketsIndex(key);
        const values = this.buckets[bucketIndex] || [];
    
        for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {
            const entry = values[entryIndex];
            if(entry.key === key) {
                return {bucketIndex, entryIndex};
            }
        }
    
        return {bucketIndex};
    }

    /**
     * Check if key exist in hashmap
     * @param {*} key 
     */
    has(key) {
        return !!this.get(key);
    }
    

    /**
     * Get item from hashmap
     * @param {*} key 
     */
    get(key) {
        const {bucketIndex, entryIndex} = this._getIndexes(key);
    
        if(entryIndex === undefined) {
          return;
        }
    
        return this.buckets[bucketIndex][entryIndex].value;
    }
    
    /**
     * Set item in hashmap <any, any>.set()
     * @param {*} key 
     * @param {*} value 
     */
    set(key, value) {
        const {bucketIndex, entryIndex} = this._getIndexes(key);
    
        if(entryIndex === undefined) {
          // initialize array and save key/value
          const keyIndex = this.keys.push({content: key}) - 1; // keep track of the key index
          this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
          this.buckets[bucketIndex].push({key, value, keyIndex});
          this.size++;
          // Optional: keep count of collisions
          if(this.buckets[bucketIndex].length > 1) { this.collisions++; }
        } else {
          // override existing value
          this.buckets[bucketIndex][entryIndex].value = value;
        }
    
        // check if a rehash is due
        if(this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {
          this.rehash(this.buckets.length * 2);
        }
    
        return this;
    }

    /**
     * Remove item from hashmap
     * @param {*} key 
     */
    delete(key) {
        const {bucketIndex, entryIndex, keyIndex} = this._getIndexes(key);
    
        if(entryIndex === undefined) {
          return false;
        }
    
        this.buckets[bucketIndex].splice(entryIndex, 1);
        delete this.keys[keyIndex];
        this.size--;
    
        return true;
    }

    /**
     * 
     * @param {*} newCapacity 
     */
    rehash(newCapacity) {
        const newMap = new HashMap(newCapacity);
    
        this.keys.forEach(key => {
          if(key) {
            newMap.set(key.content, this.get(key.content));
          }
        });
    
        // update bucket
        this.buckets = newMap.buckets;
        this.collisions = newMap.collisions;
        // Optional: both `keys` has the same content except that the new one doesn't have empty spaces from deletions
        this.keys = newMap.keys;
    }
    
    /**
     * 
     */
    getLoadFactor() {
        return this.size / this.buckets.length;
    }
}