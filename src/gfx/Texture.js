import AssetsMemoryStorage from '../engine/storage/AssetsMemory'

/**
 * Class responsible for handling image
 * 
 * @param {HTMLCanvasElement} context - CanvasRenderingContext2D
 * @param {string} src - Path to image
 * @param {string} textureName - image's name
 * 
 * @memberof Image
 */
class Texture extends Image{
    constructor(context, src, textureName) {
        super();
        this.imagePath = src;
        this.textureName = textureName;
        this.context = context;
        this.alpha = 1;
        this.scaleHeight = 1;
        this.scaleWidth = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        
    }

    /**
     * render image onto canvas
     */
    render() {
        this.context.save();
        this.context.globalAlpha = this.alpha;
        this.context.drawImage(this, this.offsetX, this.offsetY, this.width * this.scaleWidth, this.height * this.scaleHeight);
        this.context.restore()

    }

    /**
     * Update image
     * @param {*} args - options to pass
     */
    update(args) {
        let options = args || {};

        let image = AssetsMemoryStorage.get(this.textureName);

        this.offsetX = options.x || image.x;
        this.offsetY = options.y || image.y;
        this.imageWidth = options.width || image.width;
        this.imageHeight = options.height || image.height;
        this.scaleWidth = options.scaleWidth || 1;
        this.scaleHeight = options.scaleHeight || 1;
        this.alpha = options.alpha || 1;

        //AssetsMemoryStorage.set(this.textureName, this)

    }

    /**
     * Load image
     * @param {boolean} debug - set to true to display debug information
     */
    load(debug=false) {
        this.addEventListener('error', (e) => {
            console.error("error loading image:", this, e);
        });
        this.addEventListener("load", () => {
            if(debug) {
                console.info(`Loaded image at: ${this}`);
            }
            AssetsMemoryStorage.set(this.textureName, this);
        });
        this.setImagePath();
    }

    /**
     * Set path for the image
     * @param {*} src - Set path for the image {optional}
     */
    setImagePath(src = this.imagePath) {
        this.src = src;
    }
}

export default Texture;