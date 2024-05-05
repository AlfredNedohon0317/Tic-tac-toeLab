//-------------------------------- Constants --------------------------------/
const victoryCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [6, 4, 2],
  [0, 4, 8]
];

//---------------------------- Variables (state) ----------------------------/
let gameBoard;
let currentPlayer;
let gameWinner;
let isTie;


//------------------------ Cached Element References ------------------------/
const squares = document.querySelectorAll('.sqr');
const messageElement = document.querySelector('#message');
const restart= document.querySelector( '#restart')

//-------------------------------- Functions --------------------------------/
function initializeGame() {
  currentPlayer = '🛡️';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = '🛡️';
  gameWinner = false;
  isTie = false;
restart.addEventListener(`click`, restartGame)


  renderGame();
}

function renderGame() {
  updateBoardUI();
  updateMessageUI();
}
function handleSquareClick(event){
  console.log(event)
  const square = event.target
  console.log('handleSqaureClick',  square.innerText);
  if (square.innerText == "🛡️" || square.innerText == "🗡️") {
    return
} else {
  console.log(currentPlayer)
square.innerText = currentPlayer
 }
console.log(square.innerText)
// function handleSquareClick(event) {
//   const squareIndex = parseInt(event.target.dataset.index);
//   console.log( event.target.dataset.index )
//   if (gameBoard[squareIndex] !== '' || gameWinner) {
//     return;
//   }
// gameBoard[squareIndex] = currentPlayer;
  checkForWinner();
  currentPlayer = currentPlayer === '🛡️' ? '🗡️' : '🛡️';
  renderGame();
}

function updateBoardUI() {
  squares.forEach((square, index) => {
gameBoard[index] = square.innerText ;
  });  
  console.log(gameBoard)
}

function updateMessageUI() {
  if (gameWinner == false && isTie ==false ) {
    messageElement.innerText = `Epic Battle Commencing ${currentPlayer}`;
  } else if (gameWinner == false && isTie == true) {
    messageElement.innerText = "Draw!";
  } else {
    messageElement.innerText = `${currentPlayer} You Are The Champion !`;
  }
}

function checkForWinner() {
  for (let combo of victoryCombinations) {
    const [a, b, c] = combo;
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameWinner = true;
      return;
    }
  }
  if (!gameWinner && gameBoard.every(square => square !== '')) {
    isTie = true;
  }
}function restartGame(){
  window.location.reload()
}



//----------------------------- Event Listeners -----------------------------/
squares.forEach(function(square)  {
  square.addEventListener('click',handleSquareClick );
});

document.addEventListener("DOMContentLoaded", function() {
  initializeGame();
});






//Code assistance provided by ChatGPT, 
//an AI language model developed by OpenAI, for the implementation of the 
//Tic Tac Toe game logic and user interface in JavaScript. 
//ASSISTED BY MEGAN MASHBURN, AZALEA TOPAZ, GRACE MADIKAEGBU, KASS HAROUN, Will ISENBURG.