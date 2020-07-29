import SceneMemoryStorage from '../engine/storage/SceneStorage'
class StateManagement {
    constructor() {

    }

    add(id, sceneObject) {
        SceneStorage.add(id, sceneObject)
    }

    execute(sceneID) {
        const scene = SceneMemoryStorage.get(sceneID)
        scene.preload();
        function loop(timeStamp) {
            let progress = timeStamp - lastRender
            game.update(progress)
            lastRender = timeStamp
            window.requestAnimationFrame(loop)

        }
        var lastRender = 0
        setTimeout(() => { 
            scene.render()
            window.requestAnimationFrame(loop)}, 2000)
        }
}