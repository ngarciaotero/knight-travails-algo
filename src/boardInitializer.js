import { createBoard } from "./board.js";
import { createSquare } from "./square.js";

export function initializeBoard(size, movePatterns) {
  const board = createBoard(size);

  for (let row = 0; row <= board.size; row++) {
    for (let col = 0; col <= board.size; col++) {
      const square = createSquare(row, col);
      board.addSquare(square);

      const possibleMoves = square.calcPieceMoves(movePatterns);
      for (const [adjRow, adjCol] of possibleMoves) {
        const adjSquare = createSquare(adjRow, adjCol);
        board.addMove(square, adjSquare);
      }
    }
  }
  return board;
}
