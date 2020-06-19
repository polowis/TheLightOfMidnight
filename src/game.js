import Game from './engine/game';
import Sprite from './gfx/sprite';

class TheLightOfMidnight {

    constructor(canvas) {
        this.canvas = canvas;
    }
    /**
     * Load game assets
     */
    load() {
        this.player = new Sprite("https://opengameart.org/sites/default/files/house7_0.gif")
        //player.render(game.context, 0, 0)
    }

    /**
     * Render onto canvas
     */
    render() {
        this.player.render(this.canvas.context, 0, 0)
    }
}

export default TheLightOfMidnight 