import AssetsMemoryStorage from '../engine/AssetsMemory';

/**
 * Class responsible for handling static image \n
 * Alternative way: use this.renderImage
 * @param {string} assetName - The name of the image that is loaded
 * @param {CanvasRenderingContext2D} canvas - CanvasRenderingContext2D element
 * @param {Object} args - {optional} Other options to pass {alpha, x, y}
 * 
 */
class ImageView {
    constructor(assetName, canvas, args) {
        let options = args || {};
        this.image = AssetsMemoryStorage.get(assetName);
        this.canvas = canvas;
        this.scaleWidth = options.scaleWidth || 1;
        this.scaleHeight = options.scaleHeight || 1;
        this.alpha = options.alpha || 1;
        this.x = options.x || 0;
        this.y = options.y || 0;
    }

    /**
     * Set the scale value for height and width. If you specify only width value, the height will be the same as width 
     * @param {number} scaleWidth - The width of the image to use
     * @param {number} scaleHeight - The height of the image to use
     */
    setScale(scaleWidth, scaleHeight = scaleWidth) {
        this.scaleWidth = scaleWidth;
        this.scaleHeight = scaleHeight;
    }

    /**
     * Scale the width of the image
     * @param {number} scaleWidth - The width of the image to use
     */
    setScaleWidth(scaleWidth) {
        this.scaleWidth = scaleWidth;
    }

    /**
     * Scale the height of image
     * @param {*} scaleHeight - The height of the image to use
     */
    setScaleHeight(scaleHeight) {
        this.scaleHeight = scaleHeight;
    }

    /**
     * Set image opacity
     * @param {number} alphaValue - The opacity of the image to set
     */
    setAlpha(alphaValue) {
        this.alpha = alphaValue;
    }

    /**
     * 
     * @param {*} context - canvas element
     * @param {*} x - The x coordinate where to place the image on the canvas
     * @param {*} y - The y coordinate where to place the image on the canvas
     */
    render(x = 0, y = 0) {

        context.drawImage(this.image, this.x, this.y, this.image.width * this.scaleWidth, this.image.height * this.scaleHeight)
    }
}

export default ImageView;