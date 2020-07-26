class SceneMemoryStorage {
    constructor() {
        this.storage = new Map();
    }

    add(id, sceneObject) {
        this.storage.set(id, sceneObject);
    }

    get(id) {
        return this.storage.get(id);
    }
}

const SceneStorage = new SceneMemoryStorage();

export default SceneStorage;