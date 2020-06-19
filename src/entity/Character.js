import Sprite from '../gfx/Sprite'

class Character extends Sprite {
    constructor(src, sx, sy = sx, sWidth, sHeight = sWidth) {
        super(src, sx, sy, sWidth, sHeight);
    }
    
}

export default Character