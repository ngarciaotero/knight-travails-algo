import { createSquare } from "./square.js";

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

  function knightMoves([fromRow, fromCol], [toRow, toCol]) {
    if (!isSquareInRange(fromRow, fromCol) || !isSquareInRange(toRow, toCol)) {
      printPath(null);
      return;
    }

    const startSquare = createSquare(fromRow, fromCol);
    const targetSquare = createSquare(toRow, toCol);

    const queue = [[startSquare, [startSquare]]];
    const visited = new Set();
    visited.add(startSquare.toString());

    while (queue.length > 0) {
      const [currentSquare, path] = queue.shift();

      if (currentSquare.toString() === targetSquare.toString()) {
        printPath(path);
        return;
      }

      const possibleMoves = boardMap[currentSquare.toString()];
      for (const move of possibleMoves) {
        if (!visited.has(move.toString())) {
          visited.add(move.toString());
          queue.push([move, [...path, move]]);
        }
      }
    }

    printPath(null);
  }

  function printPath(path) {
    if (path === null) {
      console.log("=> No path found.");
    } else {
      console.log(
        `=> You made it in ${path.length - 1} moves!  Here's your path:`
      );
      path.forEach((square) => {
        console.log(`${" ".repeat(3)}[${square.row}, ${square.col}]`);
      });
      console.log("");
    }
  }

  return {
    addSquare,
    addMove,
    knightMoves,
    get size() {
      return boardSize;
    },
  };
}
