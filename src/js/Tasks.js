export default class Tasks {
  constructor() {
    this.container = null;
    this.cellClickListeners = [];
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('Tasks not bind to DOM');
    }
  }

  /**
   * Draws boardEl
   *
   */
  drawBoard() {
    this.checkBinding();

    this.container.innerHTML = `
      <div class="board-container">
        <div class="board-container--wrapper">
          <div data-id="counter" class="counter">0</div>
          <div data-id="board" class="board"></div>
        </div>
      </div>
    `;

    this.boardEl = this.container.querySelector('[data-id=board]');

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell', 'map-tile');
      cellEl.addEventListener('click', event => this.onCellClick(event));
      this.boardEl.appendChild(cellEl);
    }

    this.cells = Array.from(this.boardEl.children);
  }

  /**
   * Start showing the Goblin
   *
   */
  showGoblin(interval) {
    let previousCell = null;
    const { length } = this.cells;
    const { cells } = this;

    function repeatOften() {
      const random = Math.floor(Math.random() * (length - 1)) + 0;
      const randomCell = cells[random];

      if (previousCell && previousCell !== randomCell) previousCell.classList.remove('active');
      randomCell.classList.add('active');
      previousCell = randomCell;
      setTimeout(repeatOften, interval);
    }

    setTimeout(repeatOften, interval);
  }

  /**
   * Add listener to mouse click for cell
   *
   * @param callback
   */
  addCellClickListener(callback) {
    this.cellClickListeners.push(callback);
  }

  onCellClick(event) {
    const index = this.cells.indexOf(event.currentTarget);
    this.cellClickListeners.forEach(o => o.call(null, index));
  }
}
