
import Game from './engine/game';
import TheLightOfMidnight from './game.js';

const game = new TheLightOfMidnight(new Game());

game.preload();

setTimeout(() => {  game.render(); }, 2000);








   



