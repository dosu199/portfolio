function main() {
    let gameBoardHeight = 4;
    let gameBoardWidth = 4;
    let gameBoard = createGameBoard(gameBoardHeight, gameBoardWidth);

    createBlocks(gameBoardWidth, gameBoardHeight);
    moveBlocks(gameBoard, gameBoardWidth, gameBoardHeight);
    draw(gameBoard, gameBoardWidth, gameBoardHeight);
}

main();

function createGameBoard(gameBoardWidth, gameBoardHeight) {
    let gameBoard = [];
    for (let i = 0; i < gameBoardHeight; i++) {
        let gameBoardRow = [];
        for (let j = 0; j < gameBoardWidth; j++) {
            gameBoardRow.push(0);
        }
        gameBoard.push(gameBoardRow);
    }
    gameBoard[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)] = 2;
    gameBoard[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)] = 2;
    return gameBoard;
}

function createBlocks(gameBoardWidth, gameBoardHeight) {
    let gameContainerNode = document.getElementById("gameContainer");
    for (let i = 0; i < gameBoardHeight; i++) {
        let rowNode = document.createElement("div");
        rowNode.classList.add("row_" + i);
        rowNode.classList.add("row");
        for (let j = 0; j < gameBoardWidth; j++) {
            let block = document.createElement("div");
            block.classList.add("block");
            rowNode.appendChild(block);
        }
        gameContainerNode.appendChild(rowNode);
    }
}

function moveBlocks(gameBoard, gameBoardWidth, gameBoardHeight) {
    let shift = 1;
    let blockBefore = 0;
    document.addEventListener("keydown", (e) => {
        if (event.key == 'ArrowLeft') {
            moveLeft(gameBoard, gameBoardWidth, gameBoardHeight, shift, blockBefore);
            summationLeft(gameBoard, gameBoardWidth, gameBoardHeight)
            moveLeft(gameBoard, gameBoardWidth, gameBoardHeight, shift, blockBefore);
            setTimeout(function () { randomBlockSpawnLeft(gameBoard, gameBoardWidth, gameBoardHeight) }, 200);
        }

        if (event.key == 'ArrowRight') {
            moveRight(gameBoard, gameBoardWidth, gameBoardHeight, shift, blockBefore);
            summationRight(gameBoard, gameBoardWidth, gameBoardHeight)
            moveRight(gameBoard, gameBoardWidth, gameBoardHeight, shift, blockBefore);
            setTimeout(function () { randomBlockSpawnRight(gameBoard, gameBoardWidth, gameBoardHeight) }, 200);
        }

        if (event.key == 'ArrowUp') {
            moveUp(gameBoard, gameBoardWidth, gameBoardHeight, shift, blockBefore);
            summationUp(gameBoard, gameBoardWidth, gameBoardHeight)
            moveUp(gameBoard, gameBoardWidth, gameBoardHeight, shift, blockBefore);
            setTimeout(function () { randomBlockSpawnUp(gameBoard, gameBoardWidth, gameBoardHeight) }, 200);

        }

        if (event.key == 'ArrowDown') {
            moveDown(gameBoard, gameBoardWidth, gameBoardHeight, shift, blockBefore);
            summationDown(gameBoard, gameBoardWidth, gameBoardHeight)
            moveDown(gameBoard, gameBoardWidth, gameBoardHeight, shift, blockBefore);
            setTimeout(function () { randomBlockSpawnDown(gameBoard, gameBoardWidth, gameBoardHeight) }, 200);
        }
    });
}

function moveUp(gameBoard, gameBoardWidth, gameBoardHeight, shift, blockBefore) {
    for (let i = 0; i < gameBoardHeight; i++) {
        for (let j = 0; j < gameBoardWidth; j++) {

            if (gameBoard[i][j] != 0) {
                while ((i - shift) >= 0 && gameBoard[i - shift][j] == 0) {
                    gameBoard[i - shift][j] = gameBoard[i - blockBefore][j];
                    gameBoard[i - blockBefore][j] = 0;
                    draw(gameBoard, gameBoardWidth, gameBoardHeight);
                    shift++;
                    blockBefore++;
                }
            }
            shift = 1;
            blockBefore = 0;
        }
    }
}
function moveDown(gameBoard, gameBoardWidth, gameBoardHeight, shift, blockBefore) {
    for (let i = gameBoardHeight - 1; i >= 0; i--) {
        for (let j = gameBoardWidth - 1; j >= 0; j--) {
            if (gameBoard[i][j] != 0) {
                //debugger;
                while ((i + shift) < gameBoardHeight && gameBoard[i + shift][j] == 0) {
                    gameBoard[i + shift][j] = gameBoard[i + blockBefore][j];
                    gameBoard[i + blockBefore][j] = 0;
                    draw(gameBoard, gameBoardWidth, gameBoardHeight);
                    shift++;
                    blockBefore++;
                }
            }
            blockBefore = 0;
            shift = 1;
        }
    }
}
function moveLeft(gameBoard, gameBoardWidth, gameBoardHeight, shift, blockBefore) {
    for (let i = 0; i < gameBoardHeight; i++) {
        for (let j = 0; j < gameBoardWidth; j++) {

            if (gameBoard[i][j] != 0) {
                while ((j - shift) >= 0 && gameBoard[i][j - shift] == 0) {
                    gameBoard[i][j - shift] = gameBoard[i][j - blockBefore];
                    gameBoard[i][j - blockBefore] = 0;
                    draw(gameBoard, gameBoardWidth, gameBoardHeight);
                    shift++;
                    blockBefore++;
                }
            }
            shift = 1;
            blockBefore = 0;
        }
    }
};

function moveRight(gameBoard, gameBoardWidth, gameBoardHeight, shift, blockBefore) {
    for (let i = gameBoardHeight - 1; i >= 0; i--) {
        for (let j = gameBoardWidth - 1; j >= 0; j--) {
            if (gameBoard[i][j] != 0) {

                while ((j + shift) < gameBoardWidth && gameBoard[i][j + shift] == 0) {
                    gameBoard[i][j + shift] = gameBoard[i][j + blockBefore];
                    gameBoard[i][j + blockBefore] = 0;
                    draw(gameBoard, gameBoardWidth, gameBoardHeight);
                    shift++;
                    blockBefore++;
                }
            }
            blockBefore = 0;
            shift = 1;
        }
    }
}

function summationLeft(gameBoard, gameBoardWidth, gameBoardHeight) {
    let result = 0;
    for (let i = 0; i <= gameBoardHeight - 1; i++) {
        for (let j = 0; j <= gameBoardWidth - 1; j++) {
            if (gameBoard[i][j] != 0) {
                // debugger;
                if (j + 1 < gameBoardWidth && gameBoard[i][j] == gameBoard[i][j + 1]) {
                    result += (gameBoard[i][j] + gameBoard[i][j + 1]);
                    gameBoard[i][j] = result;
                    gameBoard[i][j + 1] = "";
                    draw(gameBoard, gameBoardWidth, gameBoardHeight);
                }
            }
            result = 0;
        }
    }
}

function summationRight(gameBoard, gameBoardWidth, gameBoardHeight) {
    let shift = 1;
    let result = 0;
    for (let i = gameBoardHeight - 1; i >= 0; i--) {
        for (let j = gameBoardWidth - 1; j >= 0; j--) {
            if (gameBoard[i][j] != 0) {
                // debugger;
                if (j - 1 >= 0 && gameBoard[i][j] == gameBoard[i][j - 1]) {
                    result += (gameBoard[i][j] + gameBoard[i][j - 1]);
                    gameBoard[i][j] = result;
                    gameBoard[i][j - 1] = "";
                    draw(gameBoard, gameBoardWidth, gameBoardHeight);
                    shift++;
                }
            }
            result = 0;
        }
    }
}

function summationUp(gameBoard, gameBoardWidth, gameBoardHeight) {
    let result = 0;
    for (let i = 0; i < gameBoardHeight; i++) {
        for (let j = 0; j < gameBoardWidth; j++) {
            if (gameBoard[i][j] != 0) {
                // debugger;
                if ((i + 1) < gameBoardHeight && gameBoard[i][j] == gameBoard[i + 1][j]) {
                    result += (gameBoard[i][j] + gameBoard[i + 1][j]);
                    gameBoard[i][j] = result;
                    gameBoard[i + 1][j] = "";
                    draw(gameBoard, gameBoardWidth, gameBoardHeight);
                }
            }
            result = 0;
        }
    }
}

function summationDown(gameBoard, gameBoardWidth, gameBoardHeight) {
    let result = 0;
    for (let i = gameBoardHeight - 1; i >= 0; i--) {
        for (let j = gameBoardWidth - 1; j >= 0; j--) {
            if (gameBoard[i][j] != 0) {
                // debugger;
                if (i - 1 >= 0 && gameBoard[i][j] == gameBoard[i - 1][j]) {
                    result += (gameBoard[i][j] + gameBoard[i - 1][j]);
                    gameBoard[i][j] = result;
                    gameBoard[i - 1][j] = "";
                    draw(gameBoard, gameBoardWidth, gameBoardHeight);
                }
            }
            result = 0;
        }
    }

}

function randomBlockSpawnUp(gameBoard, gameBoardWidth, gameBoardHeight) {
    for (let i = gameBoardHeight - 1; i >= 0; i--) {
        for (let j = Math.floor(Math.random() * 4) ; j < gameBoardWidth; j++) {
            if (gameBoard[i][j] == 0)
                gameBoard[i][j] = 2;
            else if (gameBoard[i][Math.floor(Math.random() * 4)] == 0)
                gameBoard[i][j] = 2;
              
            draw(gameBoard, gameBoardWidth, gameBoardHeight);
            return;
        }
    }
}

function randomBlockSpawnDown(gameBoard, gameBoardWidth, gameBoardHeight) {
    for (let i = 0; i < gameBoardHeight - 1; i++) {
        for (let j = Math.floor(Math.random() * 4); j < gameBoardWidth - 1; j++) {
            if (gameBoard[i][j] == 0)
                gameBoard[i][j] = 2;
            else
                gameBoard[i][Math.floor(Math.random() * 4)] = 2;
            draw(gameBoard, gameBoardWidth, gameBoardHeight);
            return;
        }
    }
}


function randomBlockSpawnLeft(gameBoard, gameBoardWidth, gameBoardHeight) {
    for (let i = Math.floor(Math.random() * 4); i < gameBoardHeight; i++) {
        for (let j = gameBoardWidth - 1; j >= 0; j--) {
            if (gameBoard[i][j] == 0)
                gameBoard[i][j] = 2;
            else
                gameBoard[Math.floor(Math.random() * 4)][j] = 2;
            draw(gameBoard, gameBoardWidth, gameBoardHeight);
            return;
        }
    }
}

function randomBlockSpawnRight(gameBoard, gameBoardWidth, gameBoardHeight) {
    for (let i = Math.floor(Math.random() * 4); i < gameBoardHeight; i++) {
        for (let j = 0; j < gameBoardWidth; j--) {
            if (gameBoard[i][j] == 0)
                gameBoard[i][j] = 2;
            else
                gameBoard[Math.floor(Math.random() * 4)][j] = 2;
            draw(gameBoard, gameBoardWidth, gameBoardHeight);
            return;
        }
    }
}


function draw(gameBoard, gameBoardWidth, gameBoardHeight) {
    for (let i = 0; i < gameBoardHeight; i++) {
        let rowNode = document.querySelectorAll(".row_" + i);
        let rowElements = rowNode[0].getElementsByClassName("block")
        for (let j = 0; j < gameBoardWidth; j++) {
            if (gameBoard[i][j] == 2) {
                rowElements[j].innerText = 2;
                rowElements[j].style.backgroundColor = "#eee4da";
                rowElements[j].style.color = "black";
            }
            else if (gameBoard[i][j] == 4) {
                rowElements[j].innerText = 4;
                rowElements[j].style.backgroundColor = "#ede0c8";
                rowElements[j].style.color = "black";
            }
            else if (gameBoard[i][j] == 8) {
                rowElements[j].innerText = 8;
                rowElements[j].style.backgroundColor = "#f2b179";
                rowElements[j].style.color = "white";
            }
            else if (gameBoard[i][j] == 16) {
                rowElements[j].innerText = 16;
                rowElements[j].style.backgroundColor = "#f59563";
                rowElements[j].style.color = "white";
            }
            else if (gameBoard[i][j] == 32) {
                rowElements[j].innerText = 32;
                rowElements[j].style.backgroundColor = "#f67c5f";
                rowElements[j].style.color = "white";
            }
            else if (gameBoard[i][j] == 64) {
                rowElements[j].innerText = 64;
                rowElements[j].style.backgroundColor = "#f65e3b";
                rowElements[j].style.color = "white";
            }
            else if (gameBoard[i][j] == 128) {
                rowElements[j].innerText = 128;
                rowElements[j].style.backgroundColor = "#edcf72";
                rowElements[j].style.color = "white";
            }
            else if (gameBoard[i][j] == 256) {
                rowElements[j].innerText = 256;
                rowElements[j].style.backgroundColor = "#EDCC61";
                rowElements[j].style.color = "white";
            }
            else if (gameBoard[i][j] == 512) {
                rowElements[j].innerText = 512;
                rowElements[j].style.backgroundColor = "#EDC850";
                rowElements[j].style.color = "white";
            }
            else if (gameBoard[i][j] == 1024) {
                rowElements[j].innerText = 1024;
                rowElements[j].style.backgroundColor = "#EDC53F";
                rowElements[j].style.color = "white";
            }
            else if (gameBoard[i][j] == 2048) {
                rowElements[j].innerText = 2048;
                rowElements[j].style.backgroundColor = "#EDC22E";
                rowElements[j].style.color = "white";
            }
            else if (gameBoard[i][j] == 4096) {
                rowElements[j].innerText = 4096;
                rowElements[j].style.backgroundColor = "#3E3933";
                rowElements[j].style.color = "white";
            }
            else {
                rowElements[j].innerText = "";
                rowElements[j].style.backgroundColor = "rgba(238,228,218,.35)";
            }

        }
    }
}
