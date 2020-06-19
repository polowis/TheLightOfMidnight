class ImageView {
    constructor(src) {
        this.src = src;
        this.image = new Image();
        this.loaded = false;
        this.scaleWidth = 1;
        this.scaleHeight = 1;
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
     * 
     * @param {*} scaleWidth - The width of the image to use
     * @param {*} scaleHeight - The height of the image to use
     */
    setScale(scaleWidth, scaleHeight = scaleWidth) {
        this.scaleWidth = scaleWidth;
        this.scaleHeight = scaleHeight;
    }

    /**
     * 
     * @param {*} scaleWidth - The width of the image to use
     */
    setScaleWidth(scaleWidth) {
        this.scaleWidth = scaleWidth;
    }

    /**
     * 
     * @param {*} scaleHeight - The height of the image to use
     */
    setScaleHeight(scaleHeight) {
        this.scaleHeight = scaleHeight;
    }

    /**
     * 
     * @param {*} context - canvas element
     * @param {*} x - The x coordinate where to place the image on the canvas
     * @param {*} y - The y coordinate where to place the image on the canvas
     */
    render(context, x = 0, y = 0) {
        context.drawImage(this.image, x, y, this.image.width * this.scaleWidth, this.image.height * this.scaleHeight)
    }
}

export default ImageView;