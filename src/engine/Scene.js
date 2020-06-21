import Sprite from '../gfx/Sprite';
import AssetsMemoryStorage from './AssetsMemory';
import Texture from '../gfx/Texture';
class Scene {
    constructor(canvas) {
        this.numberOfLoadedAssets = 0;
        this.numberOfAssets = 0;
        this.debug = false;
        this.canvas = canvas;


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

    /**
     * Render image to canvas
     * @param {string} key - key to search
     * @param {Object} options - Optional value to display image {imageWidth, imageHeight, imageScaleWidth, imageScaleHeight}
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


}

export default Scene;