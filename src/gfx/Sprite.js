/**
 * @param {*} src - The src of the image
 * @param {*} sX - The x coordinate where to start clipping
 * @param {*} sy - The y coordinate where to start clipping
 * @param {*} sWidth - The width of clipped image in pixels
 * @param {*} sHeight - The height of clipped image in pixels
 */
class Sprite {
    constructor(src, sx, sy, sWidth, sHeight) {
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sWidth || sHeight;
        this.scale = 1;
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

    setScale()

    /**
     * Draw Sprite onto canvas
     * @param {*} context - canvas element
     * @param {*} x - The x coordinate where to place the image on the canvas
     * @param {*} y - The y coordinate where to place the image on the canvas
     */
    render(context, x = 0, y = 0) {
        let loadedImage = this.image;
        loadedImage.onload = function() {
            context.drawImage(loadedImage, x, y);
        }
        
    }
}

export default Sprite;