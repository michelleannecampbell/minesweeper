class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }
  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('You have lost!');
      this._board.print();
    } else if (this._board.hasSafeTiles() !== true) {
      console.log('You have won!!');
      this._board.print();
    } else {
      console.log('Continue playing! Current Board: ');
      this._board.print();
    }
  }
} // end Game
