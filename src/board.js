const knightMovePatterns = [
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];

export function board(size) {
  if (typeof size !== "number" || size <= 0) {
    throw new Error("Board size must be a positive number");
  }

  const boardSize = size;
  const boardMap = initializeMap();

  function initializeMap() {
    const adjacencyList = {};
    for (let row = 0; row <= boardSize; row++) {
      for (let col = 0; col <= boardSize; col++) {
        const vertex = `${row},${col}`;
        addVertex(vertex, adjacencyList);

        const moves = calcKnightMoves(row, col);
        for (const [adjRow, adjCol] of moves) {
          if (isVertexInRange(adjRow, adjCol)) {
            const adjVertex = `${adjRow},${adjCol}`;
            addEdge(vertex, adjVertex, adjacencyList);
          }
        }
      }
    }
    return adjacencyList;
  }

  function addVertex(vertex, adjacencyList) {
    if (!adjacencyList[vertex]) {
      adjacencyList[vertex] = [];
    }
  }

  function addEdge(vertex, adjVertex, adjacencyList) {
    if (adjacencyList[vertex]) {
      adjacencyList[vertex].push(adjVertex);
    }
  }

  function calcKnightMoves(row, col) {
    return knightMovePatterns.map(([rowOffset, colOffset]) => [
      row + rowOffset,
      col + colOffset,
    ]);
  }

  function isWithinBounds(value) {
    return value <= boardSize && value >= 0;
  }

  function isVertexInRange(row, col) {
    return isWithinBounds(row) && isWithinBounds(col);
  }

  return;
}
