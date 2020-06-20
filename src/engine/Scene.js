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
        if(AssetsMemoryStorage.has(key)) return;
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
     * @param {*} px - x coordinate where to place the image on the canvas
     * @param {*} py - y coordinate where to place the image on the canvas
     * @param {} args - Optional value to display image {imageWidth, imageHeight, imageScaleWidth, imageScaleHeight}
     */
    renderImage(key, px = 0, py = px, args) {
        let options = args || {};

        let image = AssetsMemoryStorage.get(key);

        let imageWidth = options.width || image.width;
        let imageHeight = options.height || image.height;
        let imageScaleWidth = options.scaleWidth || 1;
        let imageScaleHeight = options.scaleHeight || 1;
        let imageAlpha = options.alpha || 1;

        this.canvas.context.save();
        this.canvas.context.globalAlpha = imageAlpha;

        this.canvas.context.drawImage(image, px, py, imageWidth * imageScaleWidth, imageHeight * imageScaleHeight);

        this.canvas.context.restore()
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