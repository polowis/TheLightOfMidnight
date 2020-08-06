class ScriptMemory {
    constructor() {
        
    }

    add(id, scriptLink) {
        this.cache.set(id, scriptLink);
    }
}