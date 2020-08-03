
import Game from './engine/Game';
import Intro from '../src/state/Intro'
import SceneMemory from './engine/storage/SceneMemory'
import InputEvent from './engine/event/InputEvent.js'
import Text from './gfx/Components/Text'

//SceneMemory.add('intro', Intro)
console.log("%cWARNING","color: red; background-color: yellow; font-family:sans-serif; font-size: 40px");
console.log("%cUsing this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS. Do not enter or paste code that you don't understand.","color: red; font-family:sans-serif; font-size: 30px");
const game = new Intro(new Game());
new InputEvent().listen()
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









   



