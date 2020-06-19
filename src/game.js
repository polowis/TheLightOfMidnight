import Player from './entity/Player'
import Sprite from './gfx/sprite';
import ImageView from './gfx/ImageView';

class TheLightOfMidnight {

    constructor(canvas) {
        this.canvas = canvas;
    }
    /**
     * Load game assets
     */
    load() {
        this.player = new Sprite("https://opengameart.org/sites/default/files/house7_0.gif")
    }

    /**
     * Render onto canvas
     */
    render() {
        this.player.render(this.canvas.context, 0, 0)
    }
}

export default TheLightOfMidnight 