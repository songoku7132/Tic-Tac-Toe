const cell1 = document.getElementById('cell-1')
const cell2 = document.getElementById('cell-2')
const cell3 = document.getElementById('cell-3')
const cell4 = document.getElementById('cell-4')
const cell5 = document.getElementById('cell-5')
const cell6 = document.getElementById('cell-6')
const cell7 = document.getElementById('cell-7')
const cell8 = document.getElementById('cell-8')
const cell9 = document.getElementById('cell-9')
const Display = document.getElementById('display')
const Restart = document.getElementById('restart')
const playerOne = document.getElementById('user-1')
const playerTwo = document.getElementById('user-2')

player1 = 'X'
player2 = 'O'
let sign = player1
const board = ["","","","","","","","",""]

const gameBoard = (() => {
    const addSign = (i,cellNum) => {
      if (board[i] === ""){
        board[i] = sign
        cellNum.innerText = board[i]
        console.log(board) 
        
        if(playerHasWon() !== false){
          if(sign == player1){
            Display.innerText = `${playerOne.value} has won!`
          }else if(sign == player2){
            Display.innerText = `${playerTwo.value} has won!`
          }
          return
        }else if(playerHasWon() === false){
          Display.innerText = 'Tie game'
        }

        if (sign === 'X'){
          return sign = 'O'
        }else if(sign === 'O'){
          return sign = 'X'
        }
      }else if(board[i] !== "")return;
    }
    const winningCombos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    const playerHasWon = () => {
      for (let x of winningCombos){
        let [a,b,c] = x
        if(board[a] && (board[a] == board[b] && board[a] == board[c])){
          return [a,b,c]
        }
      }
      return false
    }
        return { addSign, winningCombos, playerHasWon, board}

})();

const restartGame = () => {
  for(i=0; i < 9; i++){
    board[i] = ""
    let num = i+1
    x = document.getElementById(`cell-${num}`)
    x.innerText = ""
  }
  console.log(board)
  sign = player1
}

const restartBtn = Restart.addEventListener('click', restartGame)