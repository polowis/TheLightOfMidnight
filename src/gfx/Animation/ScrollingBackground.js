import ImageView from '../ImageView'
class ScollingBackground extends ImageView{
    constructor(canvas, textureName, args) {
        super(textureName, canvas, args)
        this.tempCanvas = document.createElement('canvas')
        this.canvas = canvas
        this.tempContext = this.tempCanvas.getContext('2d')
        this.imgWidth = 0;
        this.imgHeight = 0;
        this.imgData = {};
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
        this.speed = 2;
        this.scrollValue = 2;
        this.setScale(0.8)

    }

    run() {
        this.imgWidth = this.image.width;
        this.imgHeight = this.image.height;
        this.tempCanvas.width = this.imgWidth;
        this.tempCanvas.height = this.imgHeight;
        this.canvas.context.drawImage(this.image, 0, 0, this.width, this.height);
        this.imageData = this.tempContext.getImageData(0, 0, this.image.width, this.image.height);
        this.draw()
        
    }

    draw() {
        this.canvas.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        if(this.scrollValue >= this.canvasWidth - this.speed) {
            this.scrollValue = 0;
        }
        this.scrollValue += this.speed
        this.imageData = this.tempContext.getImageData(this.canvasWidth - this.scrollValue, 0, this.scrollValue, this.canvasHeight);
        this.canvas.context.putImageData(this.imageData, 0, 0, 0, 0, this.scrollValue, this.imgHeight);
        this.imageData = this.tempContext.getImageData(0, 0, this.canvasWidth - this.scrollValue, this.canvasHeight);
        this.canvas.context.putImageData(this.imageData, this.scrollValue, 0, 0, 0, this.canvasWidth - this.scrollValue, this.imgHeight);
        var obj = this;
        setTimeout(function() { obj.draw();}, 10)

    }

}

export default ScollingBackground;