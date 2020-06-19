import Character from './Character'
class Player extends Character {
    constructor(src, sx, sy = sx, sWidth, sHeight = sWidth) {
        super(src, sx, sy, sWidth, sHeight)
    }
}

export default Player;