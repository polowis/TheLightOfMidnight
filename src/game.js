import Player from './entity/Player'
import Sprite from './gfx/sprite';
import ImageView from './gfx/ImageView';
import Scene from './engine/Scene';
import AssetsMemoryStorage from './engine/storage/AssetsMemory'

class TheLightOfMidnight extends Scene {

    constructor(canvas) {
        super(canvas);
        this.debug = true;
        this.canvas = canvas;
    }
    /**
     * Load game assets
     */
    preload() {
        this.loadImage("https://opengameart.org/sites/default/files/house7_0.gif", "background")
    }

    /**
     * Render onto canvas
     */
    render() {
        this.renderImage("background")
        //this.canvas.context.drawImage(AssetsMemoryStorage.get("background"), 0, 0);
    }
}

export default TheLightOfMidnight 