import { createSquare } from "./square.js";
import { knightMovePatterns } from "./pieceMovePattern.js";

export function board(size) {
  if (typeof size !== "number" || size <= 0) {
    throw new Error("Board size must be a positive number");
  }

  const boardSize = size;
  const boardMap = initializeMap();

  function initializeMap() {
    const adjList = {};
    for (let row = 0; row <= boardSize; row++) {
      for (let col = 0; col <= boardSize; col++) {
        const square = createSquare(row, col);
        addSquare(square.toString(), adjList);

        const knightMoves = square.calcPieceMoves(knightMovePatterns);
        for (const [adjRow, adjCol] of knightMoves) {
          if (isSquareInRange(adjRow, adjCol)) {
            const adjSquare = createSquare(adjRow, adjCol);
            addMove(square.toString(), adjSquare, adjList);
          }
        }
      }
    }
    return adjList;
  }

  function addSquare(squareStr, adjList) {
    if (!adjList[squareStr]) {
      adjList[squareStr] = [];
    }
  }

  function addMove(squareStr, adjSquare, adjList) {
    if (adjList[squareStr]) {
      adjList[squareStr].push(adjSquare);
    }
  }

  function isWithinBounds(value) {
    return value <= boardSize && value >= 0;
  }

  function isSquareInRange(row, col) {
    return isWithinBounds(row) && isWithinBounds(col);
  }

  return;
}
