/** DOM Elements */
const board = document.getElementById('board');
let tiles = document.querySelectorAll('button.tile');

/** Global vars */
let markerType = "X";

/** GameBoard Module */
const GameBoard = (() => {
    let game = ["", "", "",
                "", "", "",
                "", "", ""];
    const getGame = () => game;
    const placeMarker = (index, marker) => {
        game[index] = marker;

        if (markerType == "X"){
            markerType = "O";
        } else {
            markerType = "X";
        }
        return game[index];
    }

    return { game, getGame, placeMarker };
});

/** Game objects */
let game = GameBoard();
let player = Player("Player1", "X");
let computer = Player("Computer", "O");
let controller = DisplayController();

/** Event Listeners */
// Tile on click to place an X or O
tiles.forEach((tile, index) => {
    tile.addEventListener('click', e => {
        // Check if tile is already filled
        if (!tile.innerHTML.includes("X") &&
        !tile.innerHTML.includes("O")){
            tile.innerHTML = game.placeMarker(index, markerType);
        }
        controller.checkForWinner(game.getGame());
    });
});