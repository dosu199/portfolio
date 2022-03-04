function main() {
    let gameBoardWidth = 16;
    let gameBoardHeight = 27;
    let aIGameBoardWidth = 16;
    let aIGameBoardHeight = 27;
    let gameBoard = createGameBoard(gameBoardWidth, gameBoardHeight);
    frameAroundGameBoard(gameBoard, gameBoardWidth, gameBoardHeight);

    let counter = 0;
    let rowsToBeBroken = 0;
    let scoreCounter = 0;
    let score = 0;
    let scoreBoard = document.getElementById("scoreBoard");
    let nextTetrominoBoard = document.getElementById("nextTetromino");
    let newGameBtn = document.getElementById("newGame")
    let gameSpeed = 300;
    let k = 1;

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
    function checkTetrominosHeight(aIGameBoard) {
        let heightSum = 0
        for (let j = 3; j < gameBoardWidth - 3; j++) {
            for (let i = 0; i <= gameBoardHeight - 4; i++) {
                if (aIGameBoard[i][j] != 0) {
                    for (i; i <= gameBoardHeight - 4; i++) {
                        heightSum++
                    }
                }
            }
        }
        return heightSum
    }

    function checkTetrominosHeightForHoles(aIGameBoard) {
        let gameBoardCordinatesWithoutFrame = {
            x: aIGameBoardHeight - 4,
            y: aIGameBoardWidth - 4,
            yStartValue: 3
        }
        let boardHeight = 0
        for (let i = gameBoardCordinatesWithoutFrame.x; i > 0; i--) {
            for (let j = gameBoardCordinatesWithoutFrame.yStartValue; j <= gameBoardCordinatesWithoutFrame.y; j++) {
                if (aIGameBoard[i][j] != 0) {
                    boardHeight++
                    break
                }
            }
        }
        return boardHeight
    }

    function copyBoard(gameBoard) {
        let newBoard = []
        for (let i = 0; i < gameBoard.length; i++) {
            let array = []
            for (let j = 0; j < gameBoard[i].length; j++) {
                array[j] = gameBoard[i][j]
            }
            newBoard[i] = array
        }
        return newBoard
    }

    function checkHorizontalWallCollision(aICurrentTetrominoPosition, aIGameBoard, currentTetromino) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (aIGameBoard[aICurrentTetrominoPosition.x][aICurrentTetrominoPosition.y + 1] == 8
                    && currentTetromino[i][j] != 0) {
                    return true;
                }
            }
        }
        return false;
    }



    function calculateBestTetrominoPostionGrade(aiTetrominoPostionGrades) {
        aiTetrominoPostionGrades.forEach(grade => {
            let k1 = -0.510066
            let k2 = 0.760666
            let k3 = -0.35663
            let k4 = -0.184483

            grade['grade'] = (k1 * grade.boardHeight) + (k2 * grade.aiRowsToBeBroken) + (k3 * grade.holesCounter) + (k4 * grade.bumpiness)
        });
        let maxGrade = Math.max(...aiTetrominoPostionGrades.map(grades => grades.grade))
        let bestGrades = aiTetrominoPostionGrades.filter(g => g.grade == maxGrade)
        return bestGrades[Math.floor(Math.random() * bestGrades.length)]
    }

    function checkNumberOfHoles(endingIndex, aIGameBoard, gameBoardWidth, gameBoardHeight) {
        let holesCounter = 0
        for (let i = gameBoardHeight - 4; i > (gameBoardHeight - 4) - endingIndex; i--) {
            for (let j = 3; j < gameBoardWidth - 3; j++) {
                if (aIGameBoard[i][j] == 0) {
                    let x = i
                    x -= 1
                    for (x; x > (gameBoardHeight - 4) - endingIndex; x--) {
                        if (aIGameBoard[x][j] != 0) {
                            holesCounter++
                            break
                        }
                    }
                }
            }

        }
        return holesCounter
    }

    function numberOfBlocksInOneColumn(aIGameBoard, gameBoardWidth, gameBoardHeight, endingIndex) {
        let blockCounter = 0
        let blocksArray = []
        for (let j = 3; j < gameBoardWidth - 3; j++) {
            for (let i = gameBoardHeight - 4; i > (gameBoardHeight - 4) - endingIndex; i--) {
                if (aIGameBoard[i][j] != 0) {
                    blockCounter++
                }
            }
            blocksArray.push(blockCounter)
            blockCounter = 0
        }
        return blocksArray
    }

    function calculateBumpiness(aIGameBoard, gameBoardWidth, gameBoardHeight, endingIndex) {
        let blocksCount = numberOfBlocksInOneColumn(aIGameBoard, gameBoardWidth, gameBoardHeight, endingIndex)
        let sum = 0
        for (let i = 0; i < blocksCount.length; i++) {
            if (i + 1 >= blocksCount.length) {
                break
            }
            let res = Math.abs(blocksCount[i] - blocksCount[i + 1])
            sum += res
        }
        return sum
    }

    function calculateBestTetrominoPostion(aiBoard, currentTetrominoRotations, nextTetrominoRotations) {
        let grades = [];
        for (let i = 0; i < currentTetrominoRotations.length; i++) {
            let currentTetromino = currentTetrominoRotations[i]
            let aiCurrentTetrominoPosition = {
                x: 0,
                y: 6
            }

            while (!checkHorizontalWallCollision({ x: aiCurrentTetrominoPosition.x, y: aiCurrentTetrominoPosition.y + 1 }, aiBoard, currentTetromino)) {
                aiCurrentTetrominoPosition.y += 1;
            }

            while (!checkHorizontalWallCollision({ x: aiCurrentTetrominoPosition.x, y: aiCurrentTetrominoPosition.y }, aiBoard, currentTetromino)) {
                let aiGameBoard = copyBoard(aiBoard)
                let collision = checkCollision({ x: aiCurrentTetrominoPosition.x, y: aiCurrentTetrominoPosition.y }, aiGameBoard, currentTetromino)
                if (collision) {
                    aiCurrentTetrominoPosition.y -= 1
                    continue
                }

                let aiNextTetrominoPosition = {
                    x: aiCurrentTetrominoPosition.x + 1,
                    y: aiCurrentTetrominoPosition.y
                }
                while (!checkCollision({ x: aiNextTetrominoPosition.x, y: aiNextTetrominoPosition.y }, aiGameBoard, currentTetromino)) {
                    aiCurrentTetrominoPosition.x = aiNextTetrominoPosition.x
                    aiNextTetrominoPosition.x += 1
                }

                placeTetromino(aiCurrentTetrominoPosition, aiGameBoard, currentTetromino)

                if (nextTetrominoRotations != null) {
                    let nextGameBoard = copyBoard(aiGameBoard)
                    let bestNextTetrominoPosition = calculateBestTetrominoPostion(nextGameBoard, nextTetrominoRotations, null)

                    let aiNext = {
                        x: bestNextTetrominoPosition.x + 1,
                        y: bestNextTetrominoPosition.y
                    }

                    while (!checkCollision(aiNext, aiGameBoard, nextTetrominoRotations[bestNextTetrominoPosition.rotation])) {
                        bestNextTetrominoPosition.x = aiNext.x
                        aiNext.x += 1
                    }
                    placeTetromino(bestNextTetrominoPosition, aiGameBoard, nextTetrominoRotations[bestNextTetrominoPosition.rotation])
                }

                let boardHeightForHoles = checkTetrominosHeightForHoles(aiGameBoard);
                let boardHeight = checkTetrominosHeight(aiGameBoard);
                let holesCounter = checkNumberOfHoles(boardHeightForHoles, aiGameBoard, gameBoardWidth, gameBoardHeight);
                let bumpiness = calculateBumpiness(aiGameBoard, gameBoardWidth, gameBoardHeight, boardHeightForHoles);
                let aiRowsToBeBroken = breakeRowsForAi(gameBoard, gameBoardWidth, gameBoardHeight);
                grades.push({ y: aiCurrentTetrominoPosition.y, rotation: i, holesCounter, boardHeight, bumpiness, aiRowsToBeBroken });
                aiCurrentTetrominoPosition.y -= 1;
            }
        }

        let bestAiTetrominoPostion = calculateBestTetrominoPostionGrade(grades)

        if (!bestAiTetrominoPostion)
            return { x: 0, y: 0, rotation: 0 }

        return {
            x: 0,
            y: bestAiTetrominoPostion.y,
            rotation: bestAiTetrominoPostion.rotation
        }
    }

    //-------------------------------------------------------------------------
    let letters = Object.keys(tetromi);
    let letter = letters[Math.floor(Math.random() * letters.length)]


    let tetrominos = [tetrominoJ, tetrominoL, tetrominoS, tetrominoO, tetrominoI, tetrominoZ, tetrominoT];
    let tetrominosRotations = [tetrominoJRotations, tetrominoLRotations, tetrominoSRotations, tetrominoORotations, tetrominoIRotations, tetrominoZRotations, tetrominoTRotations];

    let oneTetrominoSack = [];
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

            oneTetrominoSack.push(arrays[radnomArray][randomTeromino])
            arrays[radnomArray].splice(randomTeromino, 1);
        }

        for (let i = 0; i < oneTetrominoSack.length; i++) {
            for (let j = 0; j < tetrominos.length; j++) {

                if (oneTetrominoSack[i] == tetrominos[j]) {
                    index.push(j);
                }
            }
        }
        arrLength = oneTetrominoSack.length;
    }
    tetrominoSack();
    let currentTetromino = oneTetrominoSack[0];
    let currentTetrominoRotations = tetrominosRotations[index[0]];

    function nextTetromino(index, k) {
        if (index[k] == 0) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextBlue.png)";
        }
        else if (index[k] == 1) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextOrange.png)";
        }
        else if (index[k] == 2) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextGreen.png)";
        }
        else if (index[k] == 3) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextYellow.png)";
        }
        else if (index[k] == 4) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextSkyBlue.png)";
        }
        else if (index[k] == 5) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextRed.png)";
        }
        else if (index[k] == 6) {
            nextTetrominoBoard.style.backgroundImage = "url(images/nextPurple.png)";
        }
        return index[k];
    }
    let nextTetromi = nextTetromino(index, k);
    let currentTetrominoPosition = {
        x: 0,
        y: 6
    }

    let rotationOrientation = 1;
    document.addEventListener('keydown', (e) => {
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

                currentTetromino = oneTetrominoSack[k];
                currentTetrominoRotations = tetrominosRotations[nextTetromi];
                k++;

                if (k >= arrLength) {
                    currentTetromino = oneTetrominoSack[oneTetrominoSack.length - 1];
                    currentTetrominoRotations = tetrominosRotations[index[oneTetrominoSack.length - 1]];
                    oneTetrominoSack = [];
                    index = [];
                    tetrominoSack();
                    k = 0;
                }
                nextTetromi = nextTetromino(index, k);
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


    let newGameBtnClcicked = false
    newGameBtn.addEventListener("click", (e) => {
        newGameBtnClcicked = true
    })


    let runAiSlider = document.getElementById("checkbox")
    let runAi = false
    runAiSlider.addEventListener("click", (e) => {
        runAi = !runAi
    })

    runAiSlider.addEventListener("keyup", (e) => {
        e.preventDefault()
    })


    let tetrominoSpawned = true
    let aiRotation = 0
    let aiYPosition = 0
    let i = 0
    function loop(timestamp) {
        let lastFrameDuration = timestamp - lastDraw;
        if (newGameBtnClcicked) {
            for (let i = 0; i < gameBoardHeight - 3; i++) {
                for (let j = 3; j < gameBoardWidth - 3; j++) {
                    gameBoard[i][j] = 0;
                }
            }
            drawGameBoard(gameBoard, gameBoardWidth, gameBoardHeight);
            scoreCounter = 0;
            scoreBoard.innerHTML = "0";
            oneTetrominoSack = [];
            index = [];
            tetrominoSack();
            k = 0;
            currentTetromino = oneTetrominoSack[k];
            currentTetrominoRotations = tetrominosRotations[index[k]];
            k++;
            nextTetromi = nextTetromino(index, k);
            currentTetrominoPosition = { x: 0, y: 6 }
            nextTetrominoPosition = { x: 0, y: 6 }
            newGameBtnClcicked = false
            i = 0
            aiYPosition = 0
            aiRotation = 0
            tetrominoSpawned = true
        }

        let gameOver = gameShouldEnd(currentTetrominoPosition, gameBoard, gameBoardWidth, gameBoardHeight, currentTetromino);
        if (gameOver) {
            scoreCounter = 0;
            scoreBoard.innerHTML = "0";
            oneTetrominoSack = [];
            index = [];
            tetrominoSack();
            k = 0;
            currentTetromino = oneTetrominoSack[k];
            currentTetrominoRotations = tetrominosRotations[index[k]];
            k++;
            nextTetromi = nextTetromino(index, k);
        }

        if (msCounter > gameSpeed) {
            if (runAi) {
                if (tetrominoSpawned) {
                    let aiGameBoard = copyBoard(gameBoard);
                    let aiBestPosition = calculateBestTetrominoPostion(aiGameBoard, currentTetrominoRotations, tetrominosRotations[nextTetromi])
                    aiYPosition = aiBestPosition.y
                    aiRotation = aiBestPosition.rotation
                    tetrominoSpawned = false
                }

            
                if (i == aiRotation) {
                    currentTetromino = currentTetrominoRotations[aiRotation]
                }
                else {
                    currentTetromino = currentTetrominoRotations[i]
                    i++
                }

                if (aiYPosition <= 6) {
                    if (aiYPosition == currentTetrominoPosition.y) {
                        currentTetrominoPosition.y = aiYPosition
                    }
                    else {
                        currentTetrominoPosition.y -= 1
                    }

                }
                else {
                    if (aiYPosition == currentTetrominoPosition.y) {
                        currentTetrominoPosition.y = aiYPosition
                    }
                    else {
                        currentTetrominoPosition.y += 1
                    }
                }
            }
            
            let nextTetrominoPosition = {
                x: currentTetrominoPosition.x + 1,
                y: currentTetrominoPosition.y
            };

            if (nextTetrominoPosition.x >= 7 && runAi)
                gameSpeed = 10
            else 
                gameSpeed = 300
            
            if (runAi == false) 
                gameSpeed = 600

            let collision = checkCollision(nextTetrominoPosition, gameBoard, currentTetromino);
            if (!collision) {
                currentTetrominoPosition = nextTetrominoPosition;
                drawGameBoard(gameBoard, gameBoardWidth, gameBoardHeight);
                if (runAi == false) {
                    ghostTetromino(gameBoard, currentTetrominoPosition, currentTetromino)
                }
                drawTetromino(currentTetrominoPosition, currentTetromino, gameBoardWidth);
            }
            else {
                placeTetromino(currentTetrominoPosition, gameBoard, currentTetromino);
                breakeRows(gameBoard, gameBoardWidth, gameBoardHeight, counter, rowsToBeBroken, scoreCounter, scoreBoard, score);

                currentTetrominoPosition = { x: 0, y: 6 }
                nextTetrominoPosition = { x: 0, y: 6 }

                currentTetromino = oneTetrominoSack[k];
                currentTetrominoRotations = tetrominosRotations[nextTetromi];
                k++;

                if (k >= arrLength) {
                    currentTetromino = oneTetrominoSack[34];
                    currentTetrominoRotations = tetrominosRotations[index[34]];
                    oneTetrominoSack = [];
                    index = [];
                    tetrominoSack();
                    k = 0;

                }
                nextTetromi = nextTetromino(index, k);
                rotationOrientation = 1;
                tetrominoSpawned = true
                i = 0
                aiRotation = 0
                aiYPosition = 0
            }
            msCounter = 0
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
    //gameContainer.firstChild.style.visibility = "hidden";
    //gameContainer.children[1].style.visibility = "hidden";
    //gameContainer.children[2].style.visibility = "hidden";

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
            if (currentTetromino[i][j] != 0)
                gameBoard[currentTetrominoPosition.x + i][currentTetrominoPosition.y + j] = currentTetromino[i][j];
}

function breakeRowsForAi(gameBoard, gameBoardWidth, gameBoardHeight) {
    let counter = 0;
    let rowsToBeBroken = 0;
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
    return rowsToBeBroken
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
    countScore(score, scoreBoard);
}

function countScore(score, scoreBoard) {
    let rez = parseInt(scoreBoard.innerHTML) + score;
    scoreBoard.innerHTML = rez;
}

function gameShouldEnd(currentTetrominoPosition, gameBoard, gameBoardWidth, gameBoardHeight, currentTetromino) {
    let collision = checkCollision(currentTetrominoPosition, gameBoard, currentTetromino);
    if (collision) {
        for (let i = 0; i < gameBoardHeight - 3; i++) {
            for (let j = 3; j < gameBoardWidth - 3; j++) {
                gameBoard[i][j] = 0;
            }
        }
        drawGameBoard(gameBoard, gameBoardWidth, gameBoardHeight);
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

