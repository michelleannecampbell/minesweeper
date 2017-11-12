// Minesweeper 2
const generatePlayerBoard = (numberOfRows, numberOfColumns) =>
{
  let board = [];
  for (let rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++){
    let row = [];
    for (let columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++){
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++){
    let row = [];
    for (let columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++){
      row.push(' ');
    }
    board.push(row);
  }
 let numberOfBombsPlaced = 0;
 while (numberOfBombsPlaced < numberOfBombs){
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if (board[randomRowIndex] [randomColumnIndex] !== 'B'){
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }

  return board;
};


const getNumberOfNeighbourBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighbourOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighbourOffsets.forEach(offset => {
    const neighbourRowIndex = rowIndex + offset[0];
    const neighbourColumnIndex = columnIndex + offset[1];
    if (neighbourRowIndex >= 0 &&
      neighbourRowIndex < numberOfRows &&
      neighbourColumnIndex >= 0 &&
      neighbourColumnIndex < numberOfColumns){
        if (bombBoard[neighbourRowIndex][neighbourColumnIndex] === 'B'){
          numberOfBombs++;
        }

    }

  });
  return numberOfBombs;
};

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' '){
    console.log('This tile has been flipped!');
    return;
  } else if (bombBoard[rowIndex][columnIndex] === 'B'){
    playerBoard[rowIndex][columnIndex] = 'B';

  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighbourBombs(bombBoard, rowIndex, columnIndex)

  }
};




const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

const playerBoard = generatePlayerBoard(3, 4);
const bombBoard = generateBombBoard(3, 4, 5);


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
