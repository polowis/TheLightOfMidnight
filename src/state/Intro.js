import Scene from '../engine/Scene'
import IntroImage from '../assets/background/intro.jpg'
import ScrollingBackground from '../gfx/Animation/ScrollingBackground.js'
import ImageView from '../gfx/ImageView'

class Intro extends Scene {
    constructor(canvas) {
        super(canvas)
        this.id = 'intro';
        this.canvas = canvas;
        this.debug = true;
        
        
    }

    preload() {
        this.loadImage(IntroImage, "introBackground")
        this.scrollValue = 0;
        this.imageData = {}
    }

    render() {
        this.bg = new ImageView('introBackground', this.canvas)
        this.bg.setHeight(window.innerHeight)
        this.bg.setWidth(window.innerWidth)
        this.canvas.context.drawImage(this.bg.image, 0, 0, this.bg.image.width, this.bg.image.height);
        this.imageData = this.canvas.context.getImageData(0, 0, this.bg.image.width, this.bg.image.height);
        
    }

    update(speed) {
        this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.context.drawImage(this.bg.image, this.scrollValue, 0, this.bg.image.width * this.bg.scaleWidth, this.bg.image.height * this.bg.scaleHeight)
        this.canvas.context.drawImage(this.bg.image, this.scrollValue - this.canvas.width, 0, this.bg.image.width * this.bg.scaleWidth, this.bg.image.height * this.bg.scaleHeight)

        let speedNormalize = 3;
        this.scrollValue += speedNormalize
        if(this.scrollValue >= this.canvas.width) {
            this.scrollValue = 0;
        }
        /*
        this.imageData = this.canvas.context.getImageData(this.canvas.width - this.scrollValue, 0, this.scrollValue, this.canvas.height);
        this.canvas.context.putImageData(this.imageData, 0, 0, 0, 0, this.scrollValue, this.bg.image.height);
        this.imageData = this.canvas.context.getImageData(0, 0, this.canvas.width - this.scrollValue, this.canvas.height);
        this.canvas.context.putImageData(this.imageData, this.scrollValue, 0, 0, 0, this.canvas.width - this.scrollValue, this.bg.image.height);
        */
    }
}

export default Intro;