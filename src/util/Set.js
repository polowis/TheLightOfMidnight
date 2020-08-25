import HashMap from './HashMap'
class Set {
    constructor() {
        this.hashmap = new HashMap()
    }
    
    add(key, value) {
        this.hashmap.set(key, value)
    }

    has(key) {
        this.hashmap.has(key)
    }
    
}