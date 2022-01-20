export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.score = 0;
  }

  init() {
    this.gamePlay.drawBoard();
    this.gamePlay.showGoblin(1000);
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
  }

  onCellClick(index) {
    const counter = this.gamePlay.container.querySelector('[data-id=counter]');
    if (this.score > -4) {
      if (this.gamePlay.cells[index].classList.contains('active')) {
        this.gamePlay.cells[index].classList.remove('active');
        this.score += 1;
      } else {
        this.score -= 1;
      }
      counter.innerText = this.score;
    } else {
      this.score = 0;
      counter.innerText = 'You lose!';
    }
  }
}
