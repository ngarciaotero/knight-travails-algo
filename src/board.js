export function createBoard(size) {
  if (typeof size !== "number" || size <= 0) {
    throw new Error("Board size must be a positive number");
  }

  const boardSize = size;
  let boardMap = {};

  function addSquare(square) {
    const squareKey = square.toString();
    if (!boardMap[squareKey]) {
      boardMap[squareKey] = [];
    }
  }

  function addMove(fromSquare, toSquare) {
    const squareKey = fromSquare.toString();
    if (boardMap[squareKey] && isSquareInRange(toSquare.row, toSquare.col)) {
      boardMap[squareKey].push(toSquare);
    }
  }

  function isWithinBounds(value) {
    return value <= boardSize && value >= 0;
  }

  function isSquareInRange(row, col) {
    return isWithinBounds(row) && isWithinBounds(col);
  }

  return {
    addSquare,
    addMove,
    get size() {
      return boardSize;
    },
  };
}
