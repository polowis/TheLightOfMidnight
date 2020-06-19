import Sprite from '../gfx/Sprite';
import AssetsMemoryStorage from './AssetsMemory';
class Scene {
    constructor() {
        this.numberOfLoadedAssets = 0;

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
        let image = new Image();
        image.src = src
        image.addEventListener('error', (e) => {
            console.error("error loading image:", image, e);
        });
        image.addEventListener("load", () => {
            this.numberOfLoadedAssets++;
            console.info("Loaded image");
            AssetsMemoryStorage.set(key, image);
        });

    }
}