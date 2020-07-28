class SceneMemory {
    constructor() {
        this.storage = new Map();
    }

    add(id, sceneObject) {
        this.storage.set(id, sceneObject);
    }

    get(id) {
        return this.storage.get(id);
    }

    has(id) {
        return this.storage.has(id);
    }
}

const SceneMemoryStorage = new SceneMemory();

export default SceneMemoryStorage;