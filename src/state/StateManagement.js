import SceneStorage from '../engine/storage/SceneMemoryStorage'
class StateManagement {
    constructor() {

    }

    add(id, sceneObject) {
        SceneStorage.add(id, sceneObject)
    }

    execute(sceneID) {
        const scene = SceneStorage.get(id)
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