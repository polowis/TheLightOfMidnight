import Scene from '../engine/Scene'
import IntroImage from '../../src/assets/background/IntroBackground.jpg'
import ImageView from '../gfx/ImageView'

class Intro extends Scene {
    constructor(canvas) {
        super(canvas)
        this.id = 'll';
        this.canvas = canvas;
        this.debug = true;    
        this.alpha = 1;
        this.scale = 0.8;
        this.minOpacity = 0.4;
        this.frequency = 1;
        this.alphaIncreased = false;
        this.initRain = [];
        this.rainParticles = [];
    }

    

    loadRainEffect() {
        this.canvas.context.strokeStyle = 'rgba(174,194,224,0.5)';
        this.canvas.context.lineWidth = 1;
        this.canvas.lineCap = 'round';
    }

    initRainEffect() {
        let maxParts = 1000;
        for (var a = 0; a < maxParts; a++) {
        this.initRain.push({
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            l: Math.random() * 1,
            xs: -4 + Math.random() * 4 + 2,
            ys: Math.random() * 10 + 10
        })
        }
        for (var b = 0; b < maxParts; b++) {
            this.rainParticles[b] = this.initRain[b];
        }
    }
    drawRainEffect() {
        this.loadRainEffect()
        //this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var c = 0; c < this.rainParticles.length; c++) {
            let p = this.rainParticles[c];
            this.canvas.context.beginPath();
            this.canvas.context.moveTo(p.x, p.y);
            this.canvas.context.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
            this.canvas.context.stroke();
            }
        this.moveRain();
    }

    moveRain() {
        for (let b = 0; b < this.rainParticles.length; b++) {
            let p = this.rainParticles[b];
            p.x += p.xs;
            p.y += p.ys;
            if (p.x > this.canvas.width || p.y > this.canvas.height) {
              p.x = Math.random() * this.canvas.width;
              p.y = -20;
            }
        }
    }
    preload() {
        this.loadImage(IntroImage, "introBackground")
        this.initRainEffect()
    }

    render() {
        this.renderImage('introBackground', {alpha: 0.7})
        this.drawRainEffect()
        
    }

    update(speed) {
        if(!this.alphaIncreased && Math.floor(Date.now() / this.frequency) % 2) {
            this.alpha -= 0.1
            if(this.alpha <= this.minOpacity) {
                this.alpha = this.minOpacity;
                this.alphaIncreased = true;
            }
        }
        
        if(this.alphaIncreased && Math.floor(Date.now() / this.frequency) % 2) {
            this.alpha += 0.1
            if(this.alpha < 0.9) {
                this.alpha = 1;
                this.alphaIncreased = false;;
            }
        } 

    }
}

export default Intro