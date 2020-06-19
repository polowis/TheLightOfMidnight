import Sprite from '../gfx/Sprite';
import AssetsMemoryStorage from './AssetsMemory';
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
        this.numberOfAssets++;

        let image = new Image();
        image.addEventListener('error', (e) => {
            console.error("error loading image:", image, e);
        });
        image.addEventListener("load", () => {
            this.numberOfLoadedAssets++;
            if(this.debug) {
                console.info(`Loaded image at: ${image}`);
            }
            AssetsMemoryStorage.set(key, image);
        });
        image.src = src;

    }

    /**
     * Render image to canvas
     * @param {*} key - key to search
     * @param {*} x - x coordinate where to place the image on the canvas
     * @param {*} y - y coordinate where to place the image on the canvas
     */
    renderImage(key, x = 0, y = x) {
        this.canvas.context.drawImage(AssetsMemoryStorage.get(key), x, y);
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