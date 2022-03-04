function main() {
    let gameBoardWidth = 16;
    let gameBoardHeight = 27;
    let gameBoard = createGameBoard(gameBoardWidth, gameBoardHeight);
    frameAroundGameBoard(gameBoard, gameBoardWidth, gameBoardHeight);
    console.log(gameBoard);

    let counter = 0;
    let rowsToBeBroken = 0;
    let scoreCounter = 0;
    let score = 0;
    let scoreBoard = document.getElementById("scoreBoard");
    let nextTetrominoBoard = document.getElementById("nextTetromino");
    let gameSpeed = 600;
    let a = 1;

    createBlocks(gameBoardWidth, gameBoardHeight);


    let tetrominoZ = [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [0, 0, 0, 0]
    ];


    let tetrominoI = [
        [0, 2, 0, 0],
        [0, 2, 0, 0],
        [0, 2, 0, 0],
        [0, 2, 0, 0]
    ];

    let tetrominoO = [
        [0, 0, 0, 0],
        [0, 3, 3, 0],
        [0, 3, 3, 0],
        [0, 0, 0, 0]
    ];

    let tetrominoS = [
        [0, 0, 0, 0],
        [0, 0, 4, 4],
        [0, 4, 4, 0],
        [0, 0, 0, 0]
    ];

    let tetrominoL = [
        [0, 0, 0, 0],
        [0, 5, 0, 0],
        [0, 5, 0, 0],
        [0, 5, 5, 0]
    ];

    let tetrominoJ = [
        [0, 0, 0, 0],
        [0, 0, 6, 0],
        [0, 0, 6, 0],
        [0, 6, 6, 0]
    ];

    let tetrominoT = [
        [0, 0, 0, 0],
        [0, 0, 7, 0],
        [0, 7, 7, 7],
        [0, 0, 0, 0]
    ];

    let tetrominoZRotations = [
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
    ];

    let tetrominoSRotations = [
        [
            [0, 0, 0, 0],
            [0, 0, 4, 4],
            [0, 4, 4, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 4, 0, 0],
            [0, 4, 4, 0],
            [0, 0, 4, 0],
            [0, 0, 0, 0]
        ],
    ];

    let tetrominoTRotations = [
        [
            [0, 0, 0, 0],
            [0, 0, 7, 0],
            [0, 7, 7, 7],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 7, 0, 0],
            [0, 7, 7, 0],
            [0, 7, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 7, 7, 7],
            [0, 0, 7, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 7, 0],
            [0, 7, 7, 0],
            [0, 0, 7, 0]
        ],
    ];

    let tetrominoIRotations = [
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];

    let tetrominoORotations = [
        [
            [0, 0, 0, 0],
            [0, 3, 3, 0],
            [0, 3, 3, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 3, 3, 0],
            [0, 3, 3, 0],
            [0, 0, 0, 0]
        ],
    ];

    let tetrominoLRotations = [
        [
            [0, 0, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 5, 0]
        ],
        [

            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [5, 5, 5, 0],
            [5, 0, 0, 0]
        ],
        [

            [0, 0, 0, 0],
            [0, 5, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 5, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 5, 0],
            [5, 5, 5, 0],
            [0, 0, 0, 0]
        ],
    ];

    let tetrominoJRotations = [
        [
            [0, 0, 6, 0],
            [0, 0, 6, 0],
            [0, 6, 6, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 6, 0, 0],
            [0, 6, 6, 6],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 6, 6, 0],
            [0, 6, 0, 0],
            [0, 6, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 6, 6, 6],
            [0, 0, 0, 6],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
    ];

    let tetromi = {
        "Z": [[
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 1],
            [0, 0, 1, 1],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        ],
        "S": [[
            [0, 0, 0, 0],
            [0, 3, 3, 0],
            [0, 3, 3, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 3, 3, 0],
            [0, 3, 3, 0],
            [0, 0, 0, 0]
        ],
        ],
        "T": [[
            [0, 0, 0, 0],
            [0, 0, 7, 0],
            [0, 7, 7, 7],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 7, 0],
            [0, 0, 7, 7],
            [0, 0, 7, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 7, 7, 7],
            [0, 0, 7, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 7, 0],
            [0, 7, 7, 0],
            [0, 0, 7, 0]
        ],
        ],
        "I": [[
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0]
        ],
        ],
        "O": [[
            [0, 0, 0, 0],
            [0, 3, 3, 0],
            [0, 3, 3, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 3, 3, 0],
            [0, 3, 3, 0],
            [0, 0, 0, 0]
        ],
        ],
        "L": [[
            [0, 0, 0, 0],
            [0, 0, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 5, 5]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 5, 5, 5],
            [0, 5, 0, 0]
        ],
        [
            [0, 5, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 5],
            [0, 5, 5, 5],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        ],
        "J": [[
            [0, 0, 0, 6],
            [0, 0, 0, 6],
            [0, 0, 6, 6],
            [0, 0, 0, 0]
        ],

        [
            [0, 6, 0, 0],
            [0, 6, 6, 6],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 6, 6],
            [0, 0, 6, 0],
            [0, 0, 6, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 6, 6, 6],
            [0, 0, 0, 6],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]]
    };
    //---------------------------------------------------------------




    //-------------------------------------------------------------------------
    let letters = Object.keys(tetromi);
    let letter = letters[Math.floor(Math.random() * letters.length)]


    let tetrominos = [tetrominoJ, tetrominoL, tetrominoS, tetrominoO, tetrominoI, tetrominoZ, tetrominoT];
    let tetrominosRotations = [tetrominoJRotations, tetrominoLRotations, tetrominoSRotations, tetrominoORotations, tetrominoIRotations, tetrominoZRotations, tetrominoTRotations];

    let arr = [];
    let index = [];
    let arrLength = 0;
    function tetrominoSack() {
        let array1 = [tetrominoJ, tetrominoL, tetrominoS, tetrominoO, tetrominoI, tetrominoZ, tetrominoT];
        let array2 = [tetrominoJ, tetrominoL, tetrominoS, tetrominoO, tetrominoI, tetrominoZ, tetrominoT];
        let array3 = [tetrominoJ, tetrominoL, tetrominoS, tetrominoO, tetrominoI, tetrominoZ, tetrominoT];
        let array4 = [tetrominoJ, tetrominoL, tetrominoS, tetrominoO, tetrominoI, tetrominoZ, tetrominoT];
        let array5 = [tetrominoJ, tetrominoL, tetrominoS, tetrominoO, tetrominoI, tetrominoZ, tetrominoT];

        let arrays = [array1, array2, array3, array4, array5];

        while (array1.length > 0 || array2.length > 0 || array3.length > 0 || array4.length > 0 || array5.length > 0) {
            let radnomArray = Math.floor(Math.random() * arrays.length);
            for (let i = 0; i < arrays.length; i++) {
                if (arrays[i].length == 0) {
                    arrays.splice(i, 1);
                }
            }
            radnomArray = Math.floor(Math.random() * arrays.length);
            let randomTeromino = Math.floor(Math.random() * arrays[radnomArray].length);

            arr.push(arrays[radnomArray][randomTeromino])
            arrays[radnomArray].splice(randomTeromino, 1);
        }

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < tetrominos.length; j++) {

                if (arr[i] == tetrominos[j]) {
                    index.push(j);
                }
            }
        }
        arrLength = arr.length;
    }
    tetrominoSack();
    let currentTetromino = arr[0];
    let currentTetrominoRotations = tetrominosRotations[index[0]];

    function nextTetromino(index, a) {
        if (index[a] == 0) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextBlue.png)";
        }
        else if (index[a] == 1) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextOrange.png)";
        }
        else if (index[a] == 2) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextGreen.png)";
        }
        else if (index[a] == 3) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextYellow.png)";
        }
        else if (index[a] == 4) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextSkyBlue.png)";
        }
        else if (index[a] == 5) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextRed.png)";
        }
        else if (index[a] == 6) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextPurple.png)";
        }
        return index[a];
    }
    let nextTetromi = nextTetromino(index, a);
let currentTetrominoPosition = {
    x: 0,
    y: 6
}

   

    let rotationOrientation = 1;
    document.addEventListener('keydown', (e) => {
        keyPressed = e.key;
        if (e.key == 'ArrowLeft') {

            let nextTetrominoPosition = {
                x: currentTetrominoPosition.x,
                y: currentTetrominoPosition.y - 1
            };

            let collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetromino);
            if (!collision)
                currentTetrominoPosition = nextTetrominoPosition;
        }
        else if (e.key == 'ArrowRight') {

            let nextTetrominoPosition = {
                x: currentTetrominoPosition.x,
                y: currentTetrominoPosition.y + 1
            };

            let collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetromino);
            if (!collision)
                currentTetrominoPosition = nextTetrominoPosition;
        }
        else if (e.key == "ArrowUp") {

            let nextTetrominoPosition = {
                x: currentTetrominoPosition.x,
                y: currentTetrominoPosition.y
            };

            if (nextTetrominoPosition.y <= 2) {
                if (rotationOrientation >= currentTetrominoRotations.length) {
                    rotationOrientation = 0;
                }
                let collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetrominoRotations[rotationOrientation]);
                if (!collision) {

                    if (rotationOrientation % currentTetrominoRotations.length > 0) {
                        currentTetromino = currentTetrominoRotations[rotationOrientation];
                        rotationOrientation++;
                    }
                    else {
                        rotationOrientation = 0;
                        currentTetromino = currentTetrominoRotations[rotationOrientation];
                        rotationOrientation++;
                    }
                }

                if (collision) {

                    nextTetrominoPosition.y += 1;
                    let collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetrominoRotations[rotationOrientation]);
                    if (!collision) {
                        if (rotationOrientation % currentTetrominoRotations.length > 0) {
                            currentTetromino = currentTetrominoRotations[rotationOrientation];
                            rotationOrientation++;
                        }
                        else {
                            rotationOrientation = 0;
                            currentTetromino = currentTetrominoRotations[rotationOrientation];
                            rotationOrientation++;
                        }
                        currentTetrominoPosition = nextTetrominoPosition;
                    }

                }

                else if (collision) {
                    nextTetrominoPosition.y += 2;
                    let collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetrominoRotations[rotationOrientation]);
                    if (!collision) {

                        if (rotationOrientation % currentTetrominoRotations.length > 0) {
                            currentTetromino = currentTetrominoRotations[rotationOrientation];
                            rotationOrientation++;
                        }
                        else {
                            rotationOrientation = 0;
                            currentTetromino = currentTetrominoRotations[rotationOrientation];
                            rotationOrientation++;
                        }
                        currentTetrominoPosition = nextTetrominoPosition;
                    }

                }

            }

            else if ((currentTetrominoPosition.y + 4) >= 13) {
                if (rotationOrientation >= currentTetrominoRotations.length) {
                    rotationOrientation = 0;
                }
                let collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetrominoRotations[rotationOrientation]);
                if (!collision) {

                    if (rotationOrientation % currentTetrominoRotations.length > 0) {
                        currentTetromino = currentTetrominoRotations[rotationOrientation];
                        rotationOrientation++;
                    }
                    else {
                        rotationOrientation = 0;
                        currentTetromino = currentTetrominoRotations[rotationOrientation];
                        rotationOrientation++;
                    }
                }

                if (collision) {
                    nextTetrominoPosition.y -= 2;
                    let collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetrominoRotations[rotationOrientation]);
                    if (!collision) {
                        if (rotationOrientation % currentTetrominoRotations.length > 0) {
                            currentTetromino = currentTetrominoRotations[rotationOrientation];
                            rotationOrientation++;
                        }
                        else {
                            rotationOrientation = 0;
                            currentTetromino = currentTetrominoRotations[rotationOrientation];
                            rotationOrientation++;
                        }
                        currentTetrominoPosition = nextTetrominoPosition;
                    }

                }

                else if (collision) {
                    nextTetrominoPosition.y -= 3;
                    let collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetrominoRotations[rotationOrientation]);
                    if (!collision) {

                        if (rotationOrientation % currentTetrominoRotations.length > 0) {
                            currentTetromino = currentTetrominoRotations[rotationOrientation];
                            rotationOrientation++;
                        }
                        else {
                            rotationOrientation = 0;
                            currentTetromino = currentTetrominoRotations[rotationOrientation];
                            rotationOrientation++;
                        }
                        currentTetrominoPosition = nextTetrominoPosition;
                    }

                }

            }

            else {
                if (rotationOrientation >= currentTetrominoRotations.length) {
                    rotationOrientation = 0;
                }
                let collision = checkCollision(currentTetrominoPosition, gameBoard, currentTetrominoRotations[rotationOrientation]);
                if (!collision) {

                    if (rotationOrientation % currentTetrominoRotations.length > 0) {
                        currentTetromino = currentTetrominoRotations[rotationOrientation];
                        rotationOrientation++;
                    }
                    else {
                        rotationOrientation = 0;
                        currentTetromino = currentTetrominoRotations[rotationOrientation];
                        rotationOrientation++;
                    }
                }
            }
        }
        else if (e.key == 'ArrowDown') {
            gameSpeed = 50;
        }

        else if (e.keyCode == 32) {
            let gameOverHappened = gameOver(currentTetrominoPosition, gameBoard, gameBoardWidth, gameBoardHeight, currentTetromino, scoreCounter, scoreBoard);
            if (gameOverHappened) {
                debugger;
                arr = [];
                index = [];
                tetrominoSack();
                a = 0;
                        currentTetromino = arr[a];
                        currentTetrominoRotations = tetrominosRotations[index[a]];
                        a++;
                        nextTetromi = nextTetromino(index, a);
            }
            let nextTetrominoPosition = {
                x: currentTetrominoPosition.x,
                y: currentTetrominoPosition.y
            };

            let collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetromino);
            while (!collision) {
                nextTetrominoPosition.x += 1;
                collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetromino);
            }
            if (collision) {

                nextTetrominoPosition.x -= 1;
                placeTetromino(nextTetrominoPosition, gameBoard, currentTetromino)
                breakeRows(gameBoard, gameBoardWidth, gameBoardHeight, counter, rowsToBeBroken, scoreCounter, scoreBoard, score);

                currentTetrominoPosition = { x: 0, y: 6 }
                nextTetrominoPosition = { x: 0, y: 6 }



                currentTetromino = arr[a];
                currentTetrominoRotations = tetrominosRotations[nextTetromi];
                a++;

                if (a >= arrLength) {
                    //debugger;
                    currentTetromino = arr[34];
                    currentTetrominoRotations = tetrominosRotations[index[34]];
                    arr = [];
                    index = [];
                    tetrominoSack();
                    a = 0;
                   
                }



                nextTetromi = nextTetromino(index, a);
                rotationOrientation = 1;
            }
        }
        else
            return;

        drawGameBoard(gameBoard, gameBoardWidth, gameBoardHeight);
        ghostTetromino(gameBoard, currentTetrominoPosition, currentTetromino)
        drawTetromino(currentTetrominoPosition, currentTetromino, gameBoardWidth);
    });
    document.addEventListener('keyup', (e) => {
        if (e.key == 'ArrowDown') {
            gameSpeed = 600;
        }
    });
    drawGameBoard(gameBoard, gameBoardWidth, gameBoardHeight);



    function loop(timestamp) {
        let lastFrameDuration = timestamp - lastDraw;
        let gameOverHappened = gameOver(currentTetrominoPosition, gameBoard, gameBoardWidth, gameBoardHeight, currentTetromino, scoreCounter, scoreBoard);
        if (gameOverHappened) {
            debugger;
            arr = [];
            index = [];
            tetrominoSack();
            a = 0;
                    currentTetromino = arr[a];
                    currentTetrominoRotations = tetrominosRotations[index[a]];
                    a++;
                    nextTetromi = nextTetromino(index, a);
        }
        if (msCounter > gameSpeed) {

            let nextTetrominoPosition = {
                x: currentTetrominoPosition.x + 1,
                y: currentTetrominoPosition.y
            };
            let collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetromino);

            if (!collision) {
                currentTetrominoPosition = nextTetrominoPosition;

                drawGameBoard(gameBoard, gameBoardWidth, gameBoardHeight);
                ghostTetromino(gameBoard, currentTetrominoPosition, currentTetromino)
                drawTetromino(currentTetrominoPosition, currentTetromino, gameBoardWidth);
            }
            else {
                placeTetromino(currentTetrominoPosition, gameBoard, currentTetromino);
                breakeRows(gameBoard, gameBoardWidth, gameBoardHeight, counter, rowsToBeBroken, scoreCounter, scoreBoard, score);

                currentTetrominoPosition = { x: 0, y: 6 }
                nextTetrominoPosition = { x: 0, y: 6 }



                currentTetromino = arr[a];
                currentTetrominoRotations = tetrominosRotations[nextTetromi];
                a++;

                if (a >= arrLength) {
                    //debugger;
                    currentTetromino = arr[34];
                    currentTetrominoRotations = tetrominosRotations[index[34]];
                    arr = [];
                    index = [];
                    tetrominoSack();
                    a = 0;
                   
                }


                nextTetromi = nextTetromino(index, a);
                rotationOrientation = 1;
            }

            msCounter = 0;
        }

        msCounter += lastFrameDuration;
        lastDraw = timestamp;

        window.requestAnimationFrame(loop);
    }
    let msCounter = 0;
    let lastDraw = 0;
    window.requestAnimationFrame(loop);
}

main();

function createBlocks(gameBoardWidth, gameBoardHeight) {
    let gameContainer = document.getElementById("gameContainer");
    for (let i = 0; i < gameBoardHeight; i++) {
        let rowNode = document.createElement("div");
        rowNode.classList.add("row_" + i);
        rowNode.classList.add("row");
        for (let j = 0; j < gameBoardWidth; j++) {
            let block = document.createElement("div");
            block.classList.add("block");
            rowNode.appendChild(block);
        }
        gameContainer.appendChild(rowNode);
    }
    gameContainer.firstChild.style.visibility = "hidden";
    gameContainer.children[1].style.visibility = "hidden";
    gameContainer.children[2].style.visibility = "hidden";

}

function createGameBoard(gameBoardWidth, gameBoardHeight) {
    let gameBoardArray = [];
    for (let i = 0; i < gameBoardHeight; i++) {
        let gameBoardRow = [];
        for (let j = 0; j < gameBoardWidth; j++) {
            gameBoardRow.push(0);
        }
        gameBoardArray.push(gameBoardRow);
    }
    return gameBoardArray;
}

function drawTetromino(currentTetrominoPosition, currentTetromino, gameBoardWidth) {
    for (let i = 0; i < 4; i++) {

        let rowNode = document.querySelectorAll(".row_" + (currentTetrominoPosition.x + i));
        let rowElements = rowNode[0].getElementsByClassName("block");
        for (let j = 0; j < 4; j++) {
            if (currentTetromino[i][j] == 1) {
                rowElements[currentTetrominoPosition.y + j].style.backgroundImage = "url(images/red.png)";
                rowElements[currentTetrominoPosition.y + j].style.opacity = "1";
            }
            else if (currentTetromino[i][j] == 2) {
                rowElements[currentTetrominoPosition.y + j].style.backgroundImage = "url(images/skyBlue.png)";
                rowElements[currentTetrominoPosition.y + j].style.opacity = "1";
            }
            else if (currentTetromino[i][j] == 3) {
                rowElements[currentTetrominoPosition.y + j].style.backgroundImage = "url(images/yellow.png)";
                rowElements[currentTetrominoPosition.y + j].style.opacity = "1";
            }
            else if (currentTetromino[i][j] == 4) {
                rowElements[currentTetrominoPosition.y + j].style.backgroundImage = "url(images/green.png)";
                rowElements[currentTetrominoPosition.y + j].style.opacity = "1";
            }
            else if (currentTetromino[i][j] == 5) {
                rowElements[currentTetrominoPosition.y + j].style.backgroundImage = "url(images/orange.png)";
                rowElements[currentTetrominoPosition.y + j].style.opacity = "1";
            }
            else if (currentTetromino[i][j] == 6) {
                rowElements[currentTetrominoPosition.y + j].style.backgroundImage = "url(images/blue.png)";
                rowElements[currentTetrominoPosition.y + j].style.opacity = "1";
            }
            else if (currentTetromino[i][j] == 7) {
                rowElements[currentTetrominoPosition.y + j].style.backgroundImage = "url(images/purple.png)";
                rowElements[currentTetrominoPosition.y + j].style.opacity = "1";
            }

        }
    }
}

function drawGameBoard(gameBoard, gameBoardWidth, gameBoardHeight) {
    for (let i = 0; i < gameBoardHeight; i++) {
        let rowNode = document.querySelectorAll(".row_" + i);
        let rowElements = rowNode[0].getElementsByClassName("block")

        for (let j = 0; j < gameBoardWidth; j++) {
            if (gameBoard[i][j] == 1) {
                rowElements[j].style.backgroundImage = "url(images/red.png)";
                rowElements[j].style.opacity = "1";
            }
            else if (gameBoard[i][j] == 2) {
                rowElements[j].style.backgroundImage = "url(images/skyBlue.png)";
                rowElements[j].style.opacity = "1";
            }
            else if (gameBoard[i][j] == 3) {
                rowElements[j].style.backgroundImage = "url(images/yellow.png)";
                rowElements[j].style.opacity = "1";
            }
            else if (gameBoard[i][j] == 4) {
                rowElements[j].style.backgroundImage = "url(images/green.png)";
                rowElements[j].style.opacity = "1";
            }
            else if (gameBoard[i][j] == 5) {
                rowElements[j].style.backgroundImage = "url(images/orange.png)";
                rowElements[j].style.opacity = "1";
            }
            else if (gameBoard[i][j] == 6) {
                rowElements[j].style.backgroundImage = "url(images/blue.png)";
                rowElements[j].style.opacity = "1";
            }
            else if (gameBoard[i][j] == 7) {
                rowElements[j].style.backgroundImage = "url(images/purple.png)";
                rowElements[j].style.opacity = "1";
            }
            else {

                rowElements[j].style.backgroundImage = "none";

            }
        }
    }


    for (let i = 0; i < gameBoardHeight; i++) {
        let rowNode = document.querySelectorAll(".row_" + i);
        let rowElements = rowNode[0].getElementsByClassName("block")

        for (let j = 0; j < gameBoardWidth; j++) {
            if (gameBoard[i][j] == 8)
                rowElements[j].style.backgroundColor = "#E6EAF4";
        }
    }
};

function frameAroundGameBoard(gameBoard, gameBoardWidth, gameBoardHeight) {
    for (let i = 0; i < gameBoardHeight; i++) {
        for (let j = 0; j < 3; j++) {
            gameBoard[i][j] = 8;
        }
    }

    for (let i = 0; i < gameBoardHeight; i++) {
        for (let j = gameBoardWidth - 3; j < gameBoardWidth; j++) {
            gameBoard[i][j] = 8;
        }
    }

    for (let i = gameBoardHeight - 3; i < gameBoardHeight; i++) {
        for (let j = 0; j < gameBoardWidth; j++) {
            gameBoard[i][j] = 8;
        }
    }

}

function checkCollision(nextTetrominoPosition, gameBoard, currentTetromino) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (gameBoard[nextTetrominoPosition.x + i][nextTetrominoPosition.y + j] != 0
                && currentTetromino[i][j] != 0) {
                return true;
            }
        }
    }
    return false;
}

function placeTetromino(currentTetrominoPosition, gameBoard, currentTetromino) {
    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++)
            if (currentTetromino[i][j] > 0)
                gameBoard[currentTetrominoPosition.x + i][currentTetrominoPosition.y + j] = currentTetromino[i][j];
}

function breakeRows(gameBoard, gameBoardWidth, gameBoardHeight, counter, rowsToBeBroken, scoreCounter, scoreBoard, score) {

    for (let i = gameBoardHeight - 4; i >= 0; i--) {

        for (let j = 3; j < gameBoardWidth - 3; j++) {
            if (gameBoard[i][j] > 0) {
                counter++;
            }
            else
                counter = 0;
        }

        if (counter >= 10) {
            rowsToBeBroken++;
            for (let a = 3; a < 13; a++) {
                gameBoard[i][a] = 0;
            }

            while (i > 0) {
                for (let a = 3; a < 13; a++) {
                    gameBoard[i][a] = gameBoard[i - 1][a];
                }
                i--;
            }
        }
    }




    while (rowsToBeBroken > 0) {
        score += rowsToBeBroken;
        for (let i = gameBoardHeight - 4; i >= 0; i--) {

            for (let j = 3; j < gameBoardWidth - 3; j++) {
                if (gameBoard[i][j] > 0) {
                    counter++;
                }
                else
                    counter = 0;
            }

            if (counter >= 10) {
                rowsToBeBroken++;
                for (let a = 3; a < 13; a++) {
                    gameBoard[i][a] = 0;
                }

                while (i > 0) {
                    for (let a = 3; a < 13; a++) {
                        gameBoard[i][a] = gameBoard[i - 1][a];
                    }
                    i--;
                }
            }
        }
        rowsToBeBroken--;
    }

    countScore(score, scoreCounter, scoreBoard);

}
function countScore(score, scoreCounter, scoreBoard) {
    if (score == 4) {
        scoreCounter += 100;
        let rez = parseInt(scoreBoard.innerHTML) + scoreCounter;
        scoreBoard.innerHTML = rez;

    }
    else if (score == 3) {
        scoreCounter += 50;
        let rez = parseInt(scoreBoard.innerHTML) + scoreCounter;
        scoreBoard.innerHTML = rez;

    }

    else if (score == 2) {
        scoreCounter += 20;
        let rez = parseInt(scoreBoard.innerHTML) + scoreCounter;
        scoreBoard.innerHTML = rez;

    }
    else if (score == 1) {
        scoreCounter += 5;
        let rez = parseInt(scoreBoard.innerHTML) + scoreCounter;
        scoreBoard.innerHTML = rez;

    }
}

function gameOver(currentTetrominoPosition, gameBoard, gameBoardWidth, gameBoardHeight, currentTetromino, scoreCounter, scoreBoard) {
    let collision = checkCollision(currentTetrominoPosition, gameBoard, currentTetromino);
    if (collision) {
        for (let i = 0; i < gameBoardHeight - 3; i++) {
            for (let j = 3; j < gameBoardWidth - 3; j++) {
                gameBoard[i][j] = 0;
            }
        }
        drawGameBoard(gameBoard, gameBoardWidth, gameBoardHeight);
        scoreCounter = 0;
        scoreBoard.innerHTML = "0";
        return true;
    }
}

function ghostTetromino(gameBoard, currentTetrominoPosition, currentTetromino) {
    let nextTetrominoPosition = {
        x: currentTetrominoPosition.x,
        y: currentTetrominoPosition.y
    };

    let collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetromino);
    while (!collision) {
        nextTetrominoPosition.x += 1;
        collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetromino);
    }
    if (collision) {
        nextTetrominoPosition.x -= 1;
        for (let i = 0; i < 4; i++) {
            let rowNode = document.querySelectorAll(".row_" + (nextTetrominoPosition.x + i));
            let rowElements = rowNode[0].getElementsByClassName("block");
            for (let j = 0; j < 4; j++) {
                if (currentTetromino[i][j] > 0) {
                    if (currentTetromino[i][j] == 1) {
                        rowElements[nextTetrominoPosition.y + j].style.backgroundImage = "url(images/red.png)";
                        rowElements[nextTetrominoPosition.y + j].style.opacity = "30%";
                    }
                    else if (currentTetromino[i][j] == 2) {
                        rowElements[nextTetrominoPosition.y + j].style.backgroundImage = "url(images/skyBlue.png)";
                        rowElements[nextTetrominoPosition.y + j].style.opacity = "30%";
                    }
                    else if (currentTetromino[i][j] == 3) {
                        rowElements[nextTetrominoPosition.y + j].style.backgroundImage = "url(images/yellow.png)";
                        rowElements[nextTetrominoPosition.y + j].style.opacity = "30%";
                    }
                    else if (currentTetromino[i][j] == 4) {
                        rowElements[nextTetrominoPosition.y + j].style.backgroundImage = "url(images/green.png)";
                        rowElements[nextTetrominoPosition.y + j].style.opacity = "30%";
                    }
                    else if (currentTetromino[i][j] == 5) {
                        rowElements[nextTetrominoPosition.y + j].style.backgroundImage = "url(images/orange.png)";
                        rowElements[nextTetrominoPosition.y + j].style.opacity = "30%";
                    }
                    else if (currentTetromino[i][j] == 6) {
                        rowElements[nextTetrominoPosition.y + j].style.backgroundImage = "url(images/blue.png)";
                        rowElements[nextTetrominoPosition.y + j].style.opacity = "30%";
                    }
                    else if (currentTetromino[i][j] == 7) {
                        rowElements[nextTetrominoPosition.y + j].style.backgroundImage = "url(images/purple.png)";
                        rowElements[nextTetrominoPosition.y + j].style.opacity = "30%";
                    }
                    else {
                        rowElements[nextTetrominoPosition.y + j].style.backgroundImage = "none";

                    }
                }
            }

        }
    }
}

