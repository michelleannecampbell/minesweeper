'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Game, [{
    key: 'playMove',
    value: function playMove(rowIndex, columnIndex) {
      this._board.flipTile(rowIndex, columnIndex);
      if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
        console.log('You have lost!');
        this._board.print();
      } else if (this._board.hasSafeTiles() !== true) {
        console.log('You have won!!');
      } else {
        console.log('Continue playing! Current Board: ');
      }
    }
  }]);

  return Game;
}(); // end Game

var Board = function () {
  function Board(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Board);

    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._playerBombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Board, [{
    key: 'flipTile',
    value: function flipTile(rowIndex, columnIndex) {
      if ([rowIndex][columnIndex] !== ' ') {
        console.log('This tile has been flipped!');
        return;
      } else if ([rowIndex][columnIndex] === 'B') {
        this._playerBoard[rowIndex][columnIndex] = 'B';
      } else {
        this._playerBoard[rowIndex][columnIndex] = getNumberOfNeighbourBombs(rowIndex, columnIndex);
      }
      return this._numberOfTiles--;
    }
  }, {
    key: 'getNumberOfNeighbourBombs',
    value: function getNumberOfNeighbourBombs(rowIndex, columnIndex) {
      var _this = this;

      var neighbourOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      var numberOfRows = this._bombBoard.length;
      var numberOfColumns = this._bombBoard[0].length;
      var numberOfBombs = 0;
      neighbourOffsets.forEach(function (offset) {
        var neighbourRowIndex = rowIndex + offset[0];
        var neighbourColumnIndex = columnIndex + offset[1];
        if (neighbourRowIndex >= 0 && neighbourRowIndex < numberOfRows && neighbourColumnIndex >= 0 && neighbourColumnIndex < numberOfColumns) {
          if (_this._bombBoard[neighbourRowIndex][neighbourColumnIndex] === 'B') {
            numberOfBombs++;
          }
        }
      });
      return numberOfBombs;
    }
  }, {
    key: 'hasSafeTiles',
    value: function hasSafeTiles() {
      return this._numberOfTiles !== this.numberOfBombs;
    }
  }, {
    key: 'print',
    value: function print() {
      console.log(this.playerBoard.map(function (row) {
        return row.join(' | ');
      }).join('\n'));
    }
  }, {
    key: 'playerBoard',
    get: function get() {
      return this._playerBoard;
    }
  }], [{
    key: 'generatePlayerBoard',
    value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
      var board = [];
      for (var rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
        var row = [];
        for (var columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++) {
          row.push(' ');
        }
        board.push(row);
      }
      return board;
    }
  }, {
    key: 'generateBombBoard',
    value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
      var board = [];
      for (var rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
        var row = [];
        for (var columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++) {
          row.push(' ');
        }
        board.push(row);
      }
      var numberOfBombsPlaced = 0;
      while (numberOfBombsPlaced < numberOfBombs) {
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        if (board[randomRowIndex][randomColumnIndex] !== 'B') {
          board[randomRowIndex][randomColumnIndex] = 'B';
          numberOfBombsPlaced++;
        }
      }
      return board;
    }
  }]);

  return Board;
}(); // end Board


var g = new Game(3, 3, 3);
g.playMove(1, 1);