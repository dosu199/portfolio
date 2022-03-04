function main() {
    let gameContainer = document.getElementById("gameContainer");
    let gameBoardHeight = 10;
    let gameBoardWidth = 10;
    let gameBoard = createGameBoard(gameBoardHeight, gameBoardWidth);


    let firstClickedBlock = null;
    placeColors(gameBoard, gameBoardHeight, gameBoardWidth);
    createBlocks(gameBoardHeight, gameBoardWidth, gameContainer, gameBoard);
    addEventListeners(gameBoard, firstClickedBlock, gameBoardWidth, gameBoardHeight);

    breakeTable(gameBoard, gameBoardWidth, gameBoardHeight);
    draw(gameBoard, gameBoardWidth, gameBoardHeight, firstClickedBlock);
}

main();

function addEventListeners(gameBoard, firstClickedBlock, gameBoardWidth, gameBoardHeight) {
    let blockNodes = document.querySelectorAll("#gameContainer .row .block");

    for (let block of blockNodes) {
        block.addEventListener('click', (e) => {
            let row = parseInt(e.target.dataset.row);
            let column = parseInt(e.target.dataset.column);
            let colorNumber = parseInt(e.target.dataset.colorNumber);
            if (firstClickedBlock === null)
                firstClickedBlock = {
                    row: row,
                    column: column,
                    colorNumber: colorNumber
                };
            else {
                if (firstClickedBlock.row + 1 == row && firstClickedBlock.column == column || firstClickedBlock.column + 1 == column && firstClickedBlock.row == row ||
                    firstClickedBlock.row - 1 == row && firstClickedBlock.column == column || firstClickedBlock.column - 1 == column && firstClickedBlock.row == row) {
                    gameBoard[row][column] = firstClickedBlock.colorNumber;
                    gameBoard[firstClickedBlock.row][firstClickedBlock.column] = colorNumber;
                    firstClickedBlock = null;
                }
                else
                    firstClickedBlock = null;
            }
            breakeTable(gameBoard, gameBoardWidth, gameBoardHeight);
            draw(gameBoard, gameBoardWidth, gameBoardHeight, firstClickedBlock);
        });
    }
}

function createGameBoard(gameBoardHeight, gameBoardWidth) {
    let gameBoard = [];
    for (let i = 0; i < gameBoardHeight; i++) {
        let gameBoardRow = [];
        for (let j = 0; j < gameBoardWidth; j++) {
            gameBoardRow.push(0);
        }
        gameBoard.push(gameBoardRow);
    }
    return gameBoard;
}

function placeColors(gameBoard, gameBoardHeight, gameBoardWidth) {
    for (let i = 0; i < gameBoardHeight; i++) {
        for (let j = 0; j < gameBoardWidth; j++) {
            let random = Math.floor(Math.random() * 4) + 1;
            gameBoard[i][j] = random;
        }
    }
}

function createBlocks(gameBoardHeight, gameBoardWidth, gameBoard) {
    let gameContainerNode = document.getElementById("gameContainer");
    for (let i = 0; i < gameBoardHeight; i++) {
        let rowNode = document.createElement("div");
        rowNode.classList.add("row_" + i);
        rowNode.classList.add("row");
        for (let j = 0; j < gameBoardWidth; j++) {
            let block = document.createElement("div");
            block.classList.add("block");
            block.dataset.row = i;
            block.dataset.column = j;
            rowNode.appendChild(block);
        }
        gameContainerNode.appendChild(rowNode);
    }
}

function placeDataSetOnBlocks(gameBoard, gameBoardWidth, gameBoardHeight) {
    for (let i = 0; i < gameBoardHeight; i++) {
        let rowNode = document.querySelectorAll(".row_" + i);
        let rowElements = rowNode[0].getElementsByClassName("block");
        for (let j = 0; j < gameBoardWidth; j++) {
            rowElements[j].dataset.colorNumber = gameBoard[i][j];
        }
    }
}

function breakeRows(row, gameBoardWidth, gameBoardHeight) {
    let rowHasDuplicates = true;
    let brokeAtleastOneRow = false;
    while (rowHasDuplicates) {
        rowHasDuplicates = false;

        for (let i = 0; i < gameBoardHeight; i++) {

            for (let j = 0; j < gameBoardWidth; j++) {
                let sameBlockCount = 0;
                let a = j + 1;

                while (a < gameBoardWidth && row[i][j] == row[i][a]) {
                    sameBlockCount++;
                    a++;
                }

                if (sameBlockCount >= 2) {
                    breakeRowElements(row, j, a + sameBlockCount, i);
                    rowHasDuplicates = true;
                    brokeAtleastOneRow = true;
                }
                a += sameBlockCount;
            }
        }
    }
    return brokeAtleastOneRow;
}

function breakeRowElements(row, startIndex, endIndex, i) {
    for (; i > 0; i--)
        for (let b = startIndex; b <= endIndex; b++)
            row[i][b] = row[i - 1][b];

    for (let b = startIndex; b <= endIndex; b++) {
        let random = Math.floor(Math.random() * 4) + 1;
        row[0][b] = random;
    }
}

function breakeColumns(column, gameBoardWidth, gameBoardHeight) {
    let columnHasDuplicates = true;
    let brokeAtleastOneColumn = false;
    while (columnHasDuplicates) {
        columnHasDuplicates = false;

        for (let i = 0; i < gameBoardWidth; i++) {

            for (let j = 0; j < gameBoardHeight; j++) {
                let sameBlockCount = 0;
                let a = j + 1;

                while (a < gameBoardHeight && column[j][i] == column[a][i]) {
                    sameBlockCount++;
                    a++;
                }

                if (sameBlockCount >= 2) {
                    breakeColumnElements(column, j, j + sameBlockCount, i, sameBlockCount);
                    columnHasDuplicates = true;
                    brokeAtleastOneColumn = true;
                }
                a += sameBlockCount;
            }
        }
    }
    return brokeAtleastOneColumn;
}

function breakeColumnElements(column, startIndex, endIndex, i, sameBlockCount) {
    while (startIndex > 0) {
        column[endIndex][i] = column[startIndex - 1][i];
        startIndex--;
        endIndex--;
    }

    for (let j = 0; j <= sameBlockCount; j++) {
        let random = Math.floor(Math.random() * 4) + 1;
        column[j][i] = random;
    }
}

function breakeTable(gameBoard, gameBoardWidth, gameBoardHeight) {
    let brokeAtleastOneRow = true;
    let brokeAtleastOneColumn = true;
    while (brokeAtleastOneRow || brokeAtleastOneColumn) {
        brokeAtleastOneRow = breakeRows(gameBoard, gameBoardWidth, gameBoardHeight);
        brokeAtleastOneColumn = breakeColumns(gameBoard, gameBoardWidth, gameBoardHeight);
    }
}


function draw(gameBoard, gameBoardWidth, gameBoardHeight, firstClickedBlock) {
    placeDataSetOnBlocks(gameBoard, gameBoardWidth, gameBoardHeight);
    for (let i = 0; i < gameBoardHeight; i++) {
        let rowNode = document.querySelectorAll(".row_" + i);
        let rowElements = rowNode[0].getElementsByClassName("block")

        for (let j = 0; j < gameBoardWidth; j++) {
            if (gameBoard[i][j] == 1)
                rowElements[j].style.backgroundColor = "#EC7063";
            else if (gameBoard[i][j] == 2)
                rowElements[j].style.backgroundColor = "#5DADE2";
            else if (gameBoard[i][j] == 3)
                rowElements[j].style.backgroundColor = "#F4D03F";
            else if (gameBoard[i][j] == 4)
                rowElements[j].style.backgroundColor = "#58D68D";
            else
                rowElements[j].style.backgroundColor = "#fff";

            if (firstClickedBlock && rowElements[j].dataset.row == firstClickedBlock.row && rowElements[j].dataset.column == firstClickedBlock.column)
                rowElements[j].style.borderColor = "black";
            else
                rowElements[j].style.borderColor = "white";
        }
    }
};
