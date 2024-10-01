# Knight Travails Algo

A JavaScript project that simulates the movement of a knight chess piece on a chessboard of variable size. It finds the shortest path between two positions on the board using the knight's L-shaped movement pattern.

## Features

- Create a chessboard of any size
- Calculate all possible moves for a knight from any position
- Find the shortest path between two positions using the knight's movement
- Visualize the path with console output

## Getting Started

To use you need to have Node.js installed

1. Clone the repository:

```bash
git clone git clone git clone https://github.com/yourusername/knight-travails-algo.git
```

2. Navigate to project directory:

```bash
cd knight-travails-algo
```

3. Run the main script (assuming you have a index.js file inside src folder)

```bash
npm start
```

## Example

Add to index.js file:

1. Import the necessary modules in your project:

```bash
import { initializeBoard } from "./boardInitializer.js";
import { knightMovePatterns } from "./pieceMovePattern.js";
```

2. Initialize a board by providing board size and move pattern:

```bash
const board = initializeBoard(7, knightMovePatterns);
```

3. Get shortest path between two squares:

```bash
board.knightMoves([0,0], [3,3]);
```

## Output

Console will output the following:

```bash
=> You made it in 2 moves!  Here's your path:
   [0, 0]
   [1, 2]
   [3, 3]
```
