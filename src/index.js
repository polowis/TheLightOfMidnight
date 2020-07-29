
import Game from './engine/Game';
import Intro from '../src/state/Intro'
import SceneMemory from './engine/storage/SceneMemory'

//SceneMemory.add('intro', Intro)

const game = new Intro(new Game());
game.preload();

function loop(timeStamp) {
    let progress = timeStamp - lastRender
    game.render()
    game.update(progress)
    lastRender = timeStamp
    window.requestAnimationFrame(loop)

}
var lastRender = 0
setTimeout(() => { 
    window.requestAnimationFrame(loop)}, 2000)

//setTimeout(() => {  game.render(); while(true) { game.update()} }, 2000);









   



