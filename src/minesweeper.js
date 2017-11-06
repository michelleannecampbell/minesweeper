const generatePlayerBoard = (numberOfRows, numberOfColumns) =>
{
  let board = [''];
  for (let rowsIndex = 0, rowsIndex <rowsIndex.length; rowsIndex++>){
    let row = [' '];
    for (let columnsIndex = 0, columnsIndex <columnsIndex.length; columnsIndex++>){
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [''];
  for (let rowsIndex = 0, rowsIndex <rowsIndex.length; rowsIndex++>){
    let row = [' '];
    for (let columnsIndex = 0, columnsIndex <columsIndex.length; columnsIndex++>){
      row.push(' ');
    }
    board.push(null);
  }
 let numberOfBombsPlaced = 0;
while (numberOfBombsPlaced < numberOfBombs){
  let randomRowIndex = Math.floor(Math.random() * numberOfRows);
  let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
  board[randomRowIndex][randomColumnIndex] = 'B';
  numberOfBombsPlaces++;
}




  return boards;
};
