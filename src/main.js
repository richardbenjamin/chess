const game = Chess();
const ai = ChessAi();
const ui = ChessUi();
const gameManagement = {}

game.init({
  player1: {
    color: "black",
    user: "computer"
  },
  player2: {
    color: "white",
    user: "human"
  }
});


// game.updateGame([
//   ["00", "00", "00", "W1", "00", "00", "00", "00"],
//   ["00", "00", "00", "00", "00", "00", "00", "00"],
//   ["00", "K1", "00", "00", "00", "00", "00", "00"],
//   ["00", "00", "P1", "Q1", "00", "00", "00", "00"],
//   ["00", "00", "00", "00", "P2", "00", "00", "00"],
//   ["00", "00", "00", "00", "00", "P2", "00", "00"],
//   ["00", "00", "00", "00", "00", "00", "00", "R2"],
//   ["00", "00", "00", "W2", "00", "00", "00", "00"],
// ]);
game.updateGame([
  ["00", "00", "00", "00", "00", "00", "00", "00"],
  ["00", "00", "00", "00", "00", "00", "00", "00"],
  ["00", "00", "00", "00", "00", "00", "00", "00"],
  ["00", "00", "00", "Q1", "00", "00", "00", "00"],
  ["00", "00", "00", "00", "00", "00", "00", "00"],
  ["00", "00", "00", "00", "00", "00", "00", "00"],
  ["00", "00", "00", "00", "00", "00", "00", "R2"],
  ["00", "00", "00", "W2", "00", "00", "00", "00"],
]);

//game.setBoard(game.startingBoard)

// console.log('pieces', game.pieces)
// console.log('board', game.board)

// ui.displayBoard(game);

// game.setTurn("player2");
ui.displayBoard(game);

game.move({x:7,y:6}, {x:3, y:6});
// TODO/BUG - Game not visually updating anymore
console.log("AFTER MOVE FUNC")
console.log(game.board)
game.updateGame(game.board)
ui.displayBoard(game);
// console.log(`Player 1 check status: ${game.player1.inCheck}`)
// console.log(`Player 2 check status: ${game.player2.inCheck}`)
// console.log(game.player2)



// log which move moves are the best
// console.log(ai.player);
