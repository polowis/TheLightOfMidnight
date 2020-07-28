import Game from '../../engine/Game'

class Text extends Game {
    constructor(text, options = {}) {
        this.text = text;
        this.option = options;
        this.font = this.options.font || 'Comic Sans MS';
        this.fontSize = this.options.fontSize || 12;
        this.color = this.options.color || 'black'
        this.offsetX = this.options.offsetX || this.canvas.width / 2
        this.offsetY = this.options.offsetY || this.canvas.height / 2
    }

    /**
     * Stroke text
     * @param {*} x 
     * @param {*} y 
     * @param {*} maxWidth 
     */
    strokeText(x = this.offsetX, y = this.offsetY, maxWidth = 200) {
        this.context.save()
        this.context.font = `${this.fontSize} ${this.font}`
        this.context.fillStyle = this.color
        this.context.strokeText(this.text, x, y,  maxWidth)
        this.context.restore()
    }

    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @param {*} maxWidth 
     */
    fillText(x = this.offsetX, y = this.offsetY, maxWidth = 200) {
        this.context.save()
        this.context.font = `${this.fontSize} ${this.font}`
        this.context.fillStyle = this.color
        this.context.strokeText(this.text, x, y,  maxWidth)
        this.context.restore()
    }

}

export default Text;