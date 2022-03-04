function createGameBlocks() {
    let table = [];
    for (let i = 0; i < 20; i++) {
        let row = [];
        for (let j = 0; j < 40; j++) {
            let block = document.createElement("div");
            block.classList.add("block");
            row.push(block);
        }

        table.push(row);
    }

    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            gameContainer.appendChild(table[i][j]);
        }
    }

    return table;
}

function draw(gameBoard, player) {

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 40; j++) {
            if (gameBoard[19 - i][j] == "1") {
                table[i][j].style.backgroundColor = "#2980B9";
                table[i][j].style.borderColor = '#2980B9';
            }
            else if (gameBoard[19 - i][j] == "2") {
                table[i][j].style.backgroundColor = "#E74C3C";
                table[i][j].style.borderColor = '#E74C3C';
            }
            else {
                table[i][j].style.backgroundColor = "white";
                table[i][j].style.borderColor = '#E8F6F3';
            }
        }
    }
}

function clearBoard(gameBoard) {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 40; j++) {
            gameBoard[i][j] = 0;
        }
    }
}

function wrap(player) {
    for (let i = 0; i < player.length; i++) {
        player[i].x = player[i].x % 40;
        if (player[i].x < 0)
            player[i].x = 39;

        player[i].y = player[i].y % 20;
        if (player[i].y < 0)
            player[i].y = 19;
    }
}

function placePlayer() {
    for (let i = 0; i < player.length; i++) {
        gameBoard[player[i].y][player[i].x] = 1;
    }
}


function createGameBoard(gameBoardWidth, gameBoardHeight) {
    let gameBoard = [];
    for (let i = 0; i < 20; i++) {
        let gameBoardRow = [];
        for (let j = 0; j < 40; j++) {
            gameBoardRow.push(0);
        }
        gameBoard.push(gameBoardRow);
    }

    return gameBoard;
}

function placeFruit(fruit, gameBoard) {
    gameBoard[fruit.y][fruit.x] = 2;

}
function generateRandomFruitPosition(fruit) {
    let minY = 0;
    let maxY = 18;
    let minX = 0;
    let maxX = 38;
    fruit.x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    fruit.y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

}

function cololisionPlayerAndFruit(fruit, player, newHead) {
    if (newHead['y'] == fruit.y && newHead['x'] == fruit.x) {
        generateRandomFruitPosition(fruit);
        placeFruit(fruit, gameBoard);
    }
    else {
        player.pop();
    }

    player.unshift(newHead);
}

let newHead = {};
function moveRight() {
    newHead = {
        x: player[0]['x'],
        y: player[0]['y']
    };
    newHead['x']++;
    
}
function moveLeft() {
    newHead = {
        x: player[0]['x'],
        y: player[0]['y']
    };
    newHead['x']--;
}
function moveUp() {
    newHead = {
        x: player[0]['x'],
        y: player[0]['y']
    };
    newHead['y']++;
}
function moveDown() {
    newHead = {
        x: player[0]['x'],
        y: player[0]['y']
    };
    newHead['y']--;
}

function snakeManager() {
    if (btnClicked == true && arrowLeftClicked == true) {
        moveLeft();
        gameOver(player, newHead);
        cololisionPlayerAndFruit(fruit, player, newHead);
        wrap(player);
        clearBoard(gameBoard);
        placePlayer(player, gameBoard);
        placeFruit(fruit, gameBoard);
        draw(gameBoard, player);
    }

    else if (btnClicked == true && arrowUpClicked  == true ) {
        moveUp();
        gameOver(player, newHead);
        cololisionPlayerAndFruit(fruit, player, newHead);
        wrap(player);
        clearBoard(gameBoard);
        placePlayer(player, gameBoard);
        placeFruit(fruit, gameBoard);
        draw(gameBoard, player);
    }

    else if (btnClicked == true && arrowDownClicked  == true) {
        moveDown();
        gameOver(player, newHead);
        cololisionPlayerAndFruit(fruit, player, newHead);
        wrap(player);
        clearBoard(gameBoard);
        placePlayer(player, gameBoard);
        placeFruit(fruit, gameBoard);
        draw(gameBoard, player);
    }

    else if (btnClicked == true && arrowRightClicked  == true) {
        moveRight();
        gameOver(player, newHead);
        cololisionPlayerAndFruit(fruit, player, newHead);
        wrap(player);
        clearBoard(gameBoard);
        placePlayer(player, gameBoard);
        placeFruit(fruit, gameBoard);
        draw(gameBoard, player);
    }
    else {
        moveRight();
        gameOver(player, newHead);
        cololisionPlayerAndFruit(fruit, player, newHead);
        wrap(player);
        clearBoard(gameBoard);
        placePlayer(player, gameBoard);
        placeFruit(fruit, gameBoard);
        draw(gameBoard, player);
    }
}

function gameOver(player, newHead) {
    for (let i = 0; i < player.length; i++) {
        
         if (newHead['x'] == player[i].x && newHead['y'] == player[i].y)
            location.reload();
    }
   
}


// --------------------- Game ------------------------------
let gameContainer = document.getElementById("gameBoard");

let gameBoardWidth = 29;
let gameBoardHeight = 9;
let gameBoard = createGameBoard();

let table = createGameBlocks();

let player = [
    { x: 20, y: 4 },
    { x: 20, y: 5 },
    { x: 20, y: 6 },
    { x: 20, y: 7 },
    { x: 20, y: 8 },
    { x: 20, y: 9 },
    { x: 20, y: 10 },
    { x: 20, y: 11 }
];

let fruit =
    { x: 16, y: 10 };

placePlayer(player, gameBoard);
placeFruit(fruit, gameBoard);
draw(gameBoard, player);

let btnClicked = false;
let arrowUpClicked = false;
let arrowDownClicked  = false;
let arrowLeftClicked  = false;
let arrowRightClicked  = false
document.addEventListener("keydown", (e) => {

    if (e.key == 'ArrowLeft') {
        arrowLeftClicked  = true;
        arrowRightClicked  = false;
        arrowUpClicked  = false;
        arrowDownClicked  = false;
    }

    else if (e.key == 'ArrowRight') {
        arrowRightClicked  = true;
        arrowLeftClicked  = false;
        arrowUpClicked  = false;
        arrowDownClicked  = false;
    }

    else if (e.key == 'ArrowUp') {
        arrowUpClicked  = true;
        arrowLeftClicked  = false;
        arrowRightClicked  = false;
        arrowDownClicked  = false;

    }

    else if (e.key == 'ArrowDown') {
        arrowDownClicked  = true;
        arrowLeftClicked  = false;
        arrowUpClicked  = false;
        arrowRightClicked  = false;
    }

    else
        return;

    btnClicked = true;
});


function loop(timestamp) {
    let lastFrameDuration = timestamp - lastDraw;

    if (msCounter > 60) {
        snakeManager();
        msCounter = 0;
    }
    msCounter += lastFrameDuration;

    lastDraw = timestamp;

    window.requestAnimationFrame(loop);
}
let msCounter = 0;
let lastDraw = 0;
window.requestAnimationFrame(loop);