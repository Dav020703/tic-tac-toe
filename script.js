// Taxtak, Xaxacox('X' kam 'O' 
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;
// Haxtelu gcer
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Toxer
  
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Syuner
  
  [0, 4, 8],
  [2, 4, 6], // Ankyunagcer
];

// Haxtox funkcia
function checkWin() {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}
// funkcia  logica

function makeMove(index) {
  if (board[index] === "") {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + " wins!");
      resetGame();
    } else if (board.every((cell) => cell !== "")) {
      alert("It's a draw!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

// tarmacnox funkcia
function resetGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.innerText = "";
  }
}

