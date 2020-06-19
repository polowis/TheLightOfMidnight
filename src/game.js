import Player from './entity/Player'
import Sprite from './gfx/sprite';
import ImageView from './gfx/ImageView';
import Scene from './engine/Scene';

class TheLightOfMidnight extends Scene {

    constructor(canvas) {
        super(canvas);
        this.debug = true;
    }
    /**
     * Load game assets
     */
    load() {
        this.loadImage("https://opengameart.org/sites/default/files/house7_0.gif", "background")
    }

    /**
     * Render onto canvas
     */
    render() {
        this.renderImage("background", 0, 0)
    }
}

export default TheLightOfMidnight 