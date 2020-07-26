/**
 * 
 * @param {optional} width - The width of canvas - default is window.innerWidth
 * @param {optional} height - The height of canvas - default is window.innerHeight
 */
class Game{
    constructor(width = window.innerWidth, height = window.innerHeight) {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'canvas';
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        document.body.appendChild(this.canvas);

        // Remove margin so there will be no white space between canvas and body element. 
        this.bodyElement = document.querySelector("body")
        this.bodyElement.style.margin = "0px";

        // change the background color
        this.bodyElement.style.backgroundColor = "black";

    }
}

export default Game;