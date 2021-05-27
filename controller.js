/** DisplayController module */
const DisplayController = (() => {
    const play = (board) => {
        if (checkForWinner(board) === undefined){
            return null;
        } else if (!checkForWinner(board)){
            return false;
        } else if (checkForWinner(board)) {
            console.log('test')
            return true;
        }
    }
    const playTurn = (player, computer) => {

    }
    const checkForWinner = (board) => {
        let playerWin;
        let winConditions = [
            // Cols
            [ 0, 3, 6],
            [ 1, 4, 7 ],
            [ 2, 5, 8 ],
            // Rows
            [ 0, 1, 2 ],
            [ 3, 4, 5 ],
            [ 6, 7, 8 ],
            // Diagonals
            [ 0, 4, 8 ],
            [ 2, 4, 6 ],
        ]
        // Loop over board
        for (let i = 0; i < winConditions.length; i++){
            let pos = winConditions[i];
            // Check for a winner using win conditions array
            if (board[pos[0]] == "X" && board[pos[1]] == "X" &&
            board[pos[2]] == "X") {
                playerWin = true;
            }
            else if (board[pos[0]] == "O" && board[pos[1]] == "O" &&
            board[pos[2]] == "O"){
                playerWin = false;
            }
        }
        console.log(playerWin)
        return playerWin;
    } 

    return { playTurn, checkForWinner, play };
});