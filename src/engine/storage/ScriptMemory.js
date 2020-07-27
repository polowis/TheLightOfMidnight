class ScriptMemory {
    constructor() {
        this.cache = new Map();
    }

    add(id, scriptLink) {
        this.cache.set(id, scriptLink);
    }
}