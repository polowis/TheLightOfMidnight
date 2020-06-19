/**
 * @param {*} src - The src of the image
 * @param {*} sX - The x coordinate where to start clipping
 * @param {*} sy - The y coordinate where to start clipping
 * @param {*} sWidth - The width of clipped image in pixels
 * @param {*} sHeight - The height of clipped image in pixels
 */
class Sprite {
    constructor(src, sx, sy = sx, sWidth, sHeight = sWidth) {
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.scaleWidth = 1;
        this.scaleHeight = 1;
        this.image = new Image();
        this.loaded = false;
        this.image.addEventListener('error', function (e) {
            console.log("error loading image:", image, e);
        });
        this.image.onload = function () {
            this.loaded = true;
            console.log('Successfully loaded image');
           
        }
        this.image.src = src;
        
    }

    /**
     * Set scale for the image. By default scaleHeight alwways equal to scaleWidth
     * @param {*} scaleWidth - The width of the clipped image to use 
     * @param {*} scaleHeight {optional} - The height of the clipped image to use
     */
    setScale(scaleWidth, scaleHeight = scaleWidth) {
        this.scaleWidth = scaleWidth;
        this.scaleHeight = scaleHeight;
    }

    /**
     * 
     * @param {*} scaleWidth - The width of the clipped image to use
     */
    setScaleWidth(scaleWidth) { 
        this.scaleWidth = scaleWidth;
    }

    /**
     * 
     * @param {*} scaleHeight - The height of the clipped image to use
     */
    setScaleHeight(scaleHeight) {
        this.scaleHeight = scaleHeight;
    }

    /**
     * Draw Sprite onto canvas
     * @param {*} context - canvas element
     * @param {*} x - The x coordinate where to place the image on the canvas
     * @param {*} y - The y coordinate where to place the image on the canvas
     */
    render(context, x = 0, y = 0) {
        let loadedImage = this.image;
        let scaleHeight = this.scaleHeight;
        let scaleWidth = this.scaleWidth;
        let sx = this.sx;
        let sy = this.sy;
        let sWidth = this.sWidth;
        let sHeight = this.sHeight;
        
        loadedImage.onload = function() {
            context.drawImage(loadedImage, sx, sy, sWidth, sHeight, x, y, sWidth * scaleWidth, sHeight * scaleHeight);
        }
        
    }
}

export default Sprite;