import Sprite from '../gfx/Sprite';
import AssetsMemoryStorage from './storage/AssetsMemory';
import Texture from '../gfx/Texture';
import SceneStorage from './storage/SceneMemory';
import SceneMemoryStorage from './storage/SceneMemory';

class Scene {
    constructor(canvas) {
        this.numberOfLoadedAssets = 0;
        this.numberOfAssets = 0;
        this.debug = false;
        this.canvas = canvas
        this.loadedAssets = false;
        //SceneStorage.add(id, sceneObject)


    }

    loadScript(id, src) {
        const script = document.createElement('script');
        script.onload = () => {  
            this.numberOfLoadedAssets ++
        }
        script.src = src;
    }

    /**
     * load Sprite from
     * @param {*} src 
     * @param {*} sX 
     * @param {*} sY 
     * @param {*} sWidth 
     * @param {*} sHeight 
     */
    loadSprite(src, sX, sY, sWidth, sHeight) {
        
    }

    /**
     * 
     * @param {*} src - The url link of the image to use
     * @param {*} key - The key associated with the image. This will be used to retrieve the image later.
     */
    loadImage(src, key) {
        if(AssetsMemoryStorage.has(key)) return;
        this.numberOfAssets++;

        let image = new Texture(this.canvas.context, src, key);
        image.load(this.debug);
        this.numberOfLoadedAssets++
    }

    loadAudio(src, key) {

    }

    /**
     * Render image to canvas
     * @param {string} key - key to search
     * @param {Object} options - Optional value to display image {offsetX, offsetY, imageWidth, imageHeight, imageScaleWidth, imageScaleHeight, alpha}
     */
    renderImage(key, options) {
        let image = AssetsMemoryStorage.get(key);
        image.update(options);
        image.render();
    }

    /**
     * Return true if all assets are loaded
     */
    allAssetsLoaded() {
        if(this.numberOfLoadedAssets == this.numberOfAssets) {
            if(this.debug) {
                console.info("all Assets Loaded")
            }
            return true;
        }
        return false;
    }

    /**
     * Change scene
     * @param {*} id - ID of the scene to change
     */
    goToScene(id) {
        const scene = SceneMemoryStorage.get(id);
        scene.preload();

        function loop(timeStamp) {
            let progress = timeStamp - lastRender
            scene.update(progress)
            lastRender = timeStamp
            window.requestAnimationFrame(loop)

        }
        var lastRender = 0
        setTimeout(() => { 
            scene.render()
            window.requestAnimationFrame(loop)}, 2000)
    }


}

export default Scene;