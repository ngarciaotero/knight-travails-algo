export function createSquare(row, col) {
  return {
    row,
    col,
    calcPieceMoves(movePattern) {
      return movePattern.map(([rowOffset, colOffset]) => [
        row + rowOffset,
        col + colOffset,
      ]);
    },
    toString() {
      return `${row},${col}`;
    },
  };
}
