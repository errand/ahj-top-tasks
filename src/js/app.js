import Tasks from './Tasks';
import GameController from './GameController';

const gamePlay = new Tasks();
gamePlay.bindToDOM(document.querySelector('#game-container'));

const gameCtrl = new GameController(gamePlay);
gameCtrl.init();
