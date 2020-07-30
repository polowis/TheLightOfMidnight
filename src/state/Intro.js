import Scene from '../engine/Scene'
import IntroImage from '../../src/assets/background/IntroBackground.png'
import ImageView from '../gfx/ImageView'
import KeyboardEvent from '../engine/event/keyboard/Keyboard'

class Intro extends Scene {
    constructor(canvas) {
        super(canvas)
        this.id = 'intro';
        this.canvas = canvas;
        this.debug = true;    
        this.alpha = 1;
        this.scale = 0.8;
        this.minOpacity = 0.4;
        this.frequency = 1;
        this.alphaIncreased = false;
        this.initRain = [];
        this.rainParticles = [];
        this.maxRainParticles = 1000;
    }

    loadRainEffect() {
        this.canvas.context.strokeStyle = 'rgba(174,194,224,0.5)';
        this.canvas.context.lineWidth = 1;
        this.canvas.lineCap = 'round';
    }

    initRainEffect() {
        for (let i = 0; i < this.maxRainParticles; i++) {
        this.initRain.push({
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            l: Math.random() * 1,
            xs: -4 + Math.random() * 4 + 2,
            ys: Math.random() * 10 + 10
        })
        }
        for (let i = 0; i < this.maxRainParticles; i++) {
            this.rainParticles[i] = this.initRain[i];
        }
    }

    drawRainEffect() {
        this.loadRainEffect()
        for (let i = 0; i < this.rainParticles.length; i++) {
            let p = this.rainParticles[i];
            this.canvas.context.beginPath();
            this.canvas.context.moveTo(p.x, p.y);
            this.canvas.context.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
            this.canvas.context.stroke();
            }
        this.moveRain();
    }

    moveRain() {
        for (let i = 0; i < this.rainParticles.length; i++) {
            let p = this.rainParticles[i];
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
        if(KeyboardEvent.isKeyPressed()) {
            console.log('tr')
        }

    }
}

export default Intro