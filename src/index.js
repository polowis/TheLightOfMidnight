
import Game from './engine/game';
import TheLightOfMidnight from './game.js';
import Intro from './state/Intro'

//const game = new TheLightOfMidnight(new Game());
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









   



