
import Game from './engine/Game';
import TheLightOfMidnight from './game.js';
import Intro from './state/Intro'
import SceneMemory from './engine/storage/SceneMemory'
import Scene from './engine/Scene';

SceneMemory.add('intro', Intro)

const game = new Intro(new Game());
game.preload();

function loop(timeStamp) {
    let progress = timeStamp - lastRender
    game.update(progress)
    lastRender = timeStamp
    window.requestAnimationFrame(loop)

}
var lastRender = 0
setTimeout(() => { 
    game.render()
    window.requestAnimationFrame(loop)}, 2000)

//setTimeout(() => {  game.render(); while(true) { game.update()} }, 2000);









   



