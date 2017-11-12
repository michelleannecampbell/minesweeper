'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
    var row = [];
    for (var columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
};

var getNumberOfNeighbourBombs = function getNumberOfNeighbourBombs(bombBoard, rowIndex, columnIndex) {
  var neighbourOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  var numberOfRows = bombBoard.length;
  var numberOfColumns = bombBoard[0].length;
  var numberOfBombs = 0;

  neighbourOffsets.forEach(function (offset) {
    var neighbourRowIndex = rowIndex + offset[0];
    var neighbourColumnIndex = columnIndex + offset[1];
    if (neighbourRowIndex >= 0 && neighbourRowIndex < numberOfRows && neighbourColumnIndex >= 0 && neighbourColumnIndex < numberOfColumns) {
      if (bombBoard[neighbourRowIndex][neighbourColumnIndex] === 'B') {
        numberOfBombs++;
      }
    }
  });
  return numberOfBombs;
};

var flipTile = function flipTile(playerBoard, bombBoard, rowIndex, columnIndex) {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has been flipped!');
    return;
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighbourBombs(bombBoard, rowIndex, columnIndex);
  }
};

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);

console.log('Updated Player Board:');
printBoard(playerBoard);

flipTile(playerBoard, bombBoard, 2, 1);
console.log('Updated Player Board:');
printBoard(playerBoard);

flipTile(playerBoard, bombBoard, 1, 1);
console.log('Updated Player Board:');
printBoard(playerBoard);