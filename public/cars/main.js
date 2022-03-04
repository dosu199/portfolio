let enemiesPool = new Array();

enemiesPool[0] = new Image();
enemiesPool[0].src = 'images/ambulance.png';

enemiesPool[1] = new Image();
enemiesPool[1].src = 'images/mini.png';

enemiesPool[2] = new Image();
enemiesPool[2].src = 'images/taxi.png';

enemiesPool[3] = new Image();
enemiesPool[3].src = 'images/Police.png';

enemiesPool[4] = new Image();
enemiesPool[4].src = 'images/truck.png';


let playerImage = new Image();
playerImage.src = "images/blackViper.png";

let enemeiePick = Math.floor(Math.random() * enemiesPool.length);
let enemieImage0 = new Image();
enemieImage0.src = enemiesPool[enemeiePick].src;

enemeiePick = Math.floor(Math.random() * enemiesPool.length);
let enemieImage1 = new Image();
enemieImage1.src = enemiesPool[enemeiePick].src;

let specialPinImage = new Image();
specialPinImage.src = "images/coin1.png";

let backgroundImage = new Image();
backgroundImage.src = "images/road1.png";

function moveSpecialPin(ctx, canvas, game) {
    if (game.specialPin.position.y > canvas.height) {
        nextSpecialPinSpawn = 0;
    }
    else
        game.specialPin.position.y += 5;
}

function moveEnemies(game) {
    for (let i = 0; i < game.enemies.length; i++) {
        game.enemies[i].position.y += 5;
    }
}

function movePlayer(game, canvas) {
    game.player.position.x += game.player.offSetX;
    game.player.position.y += game.player.offSetY;

    if (game.player.position.x > canvas.width - game.player.width)
        game.player.position.x = canvas.width - game.player.width;
    else if (game.player.position.x < 0)
        game.player.position.x = 0;
    else if (game.player.position.y < 0)
        game.player.position.y = 0;
    else if (game.player.position.y > canvas.height - game.player.height)
        game.player.position.y = canvas.height - game.player.height;
}

function moveBackgroundImage(ctx, canvas, game, scoreCounter) {
    game.backgroundImage.position.y += 7;
    game.backgroundImage.defaultBackgroundImageHeight -= 7;
    if (game.backgroundImage.defaultBackgroundImageHeight < 720) {
        game.backgroundImage.position.x = 150;
        game.backgroundImage.position.y = -790;
        game.backgroundImage.defaultBackgroundImageHeight = 1600;
    }
}

function checkRectangleCollision(game, canvas, ctx, firstRect, secondRect, hitBoxReduceInPx) {
    if (secondRect == game.specialPin) {
        if ((firstRect.position.x + firstRect.width) >= (secondRect.position.x) &&
            (firstRect.position.x) <= (secondRect.position.x + secondRect.width) &&
            (firstRect.position.y + firstRect.height) >= (secondRect.position.y) &&
            (firstRect.position.y) <= (secondRect.position.y + secondRect.height)) {

            return true;
        }
        else
            return false;
    }

    for (let i = 0; i < secondRect.length; i++) {
        if ((firstRect.position.x + (firstRect.width - hitBoxReduceInPx)) >= (secondRect[i].position.x) &&
            (firstRect.position.x) <= (secondRect[i].position.x + (secondRect[i].width - hitBoxReduceInPx)) &&
            (firstRect.position.y + (firstRect.height - hitBoxReduceInPx)) >= (secondRect[i].position.y) &&
            (firstRect.position.y) <= (secondRect[i].position.y + (secondRect[i].height - hitBoxReduceInPx))) {
            return true;
        }
    }
}
let newEnemyPosition = 0;
function spawnEnemies(game, canvas, enemiesPool) {
    for (let i = 0; i < game.enemies.length; i++) {
        if (game.enemies[i].position.y > canvas.height) {
            newEnemyPosition = Math.floor(Math.random() * (canvas.width - game.player.width));
            let enemeiePick = Math.floor(Math.random() * enemiesPool.length);
            game.enemies[i].position.y = game.enemies[i].defaulEnemiesPosition.y;
            game.enemies[i].position.x = newEnemyPosition;
            game.enemies[i].img.src = enemiesPool[enemeiePick].src;
            nextSpecialPinSpawn++;

            if (nextSpecialPinSpawn == specialPinSpawnPosition) {
                if (newEnemyPosition < (canvas.width / 2)) {
                    game.specialPin.position.x = (canvas.width / 2) + Math.round((canvas.width / 2) / 2);
                    game.specialPin.position.y = game.enemies[i].defaulEnemiesPosition.y;
                }
                else {
                    game.specialPin.position.x = Math.round((canvas.width / 2) / 2);
                    game.specialPin.position.y = game.enemies[i].defaulEnemiesPosition.y;
                }
            }
        }



    }
    if (nextSpecialPinSpawn >= specialPinSpawnPosition)
        return true;

}


let btnClicked = false;
function updateGame(game, canvas, ctx, scoreCounter, specialItemCounter, menu, restartBtn, hitBoxReduceInPx) {
    movePlayer(game, canvas);
    let spawnPin = spawnEnemies(game, canvas, enemiesPool);
    if (spawnPin) {
        moveSpecialPin(ctx, canvas, game);
    }
    let collsionPlayerEnemies = checkRectangleCollision(game, canvas, ctx, game.player, game.enemies, hitBoxReduceInPx);
    if (collsionPlayerEnemies) {
        menu.style.visibility = "visible";
        btnClicked = true;
        restartBtn.addEventListener("click", (e) => {

            game.player.position.x = game.player.defaultPlayerPosition.position.x;
            game.player.position.y = game.player.defaultPlayerPosition.position.y;

            let enemeiePick = Math.floor(Math.random() * enemiesPool.length);
            game.enemies[0].enemieImage1 = enemiesPool[enemeiePick];
            game.enemies[0].position.x = game.enemies[0].initialEnemiesPosition.x;
            game.enemies[0].position.y = game.enemies[0].initialEnemiesPosition.y;

            enemeiePick = Math.floor(Math.random() * enemiesPool.length);
            game.enemies[1].enemieImage2 = enemiesPool[enemeiePick];
            game.enemies[1].position.x = game.enemies[1].initialEnemiesPosition.x;
            game.enemies[1].position.y = game.enemies[1].initialEnemiesPosition.y;

            nextSpecialPinSpawn = 0;
            game.specialPin.position.x = game.specialPin.defaultSpecialPinPosition.x;
            game.specialPin.position.y = game.specialPin.defaultSpecialPinPosition.y;

            menu.style.visibility = "hidden";
            btnClicked = false;
        });
        scoreCounter.innerHTML = "0";
        specialItemCounter.innerHTML = "0";

    }

    if (btnClicked) {
        clearCanvas(ctx, canvas);
        drawImage(ctx, canvas, game, game.backgroundImage);

    }
    else {

        let collsionPlayerPin = checkRectangleCollision(game, canvas, ctx, game.player, game.specialPin, hitBoxReduceInPx);
        if (collsionPlayerPin) {
            nextSpecialPinSpawn = 0;
            game.specialPin.position.x = game.specialPin.defaultSpecialPinPosition.x;
            game.specialPin.position.y = game.specialPin.defaultSpecialPinPosition.y;
            specialItemCounter.innerHTML = (parseInt(specialItemCounter.innerHTML)) + 1;
        }
        scoreCounter.innerHTML = (parseInt(scoreCounter.innerHTML)) + 1;

        moveEnemies(game);
        spawnEnemies(game, canvas, enemiesPool);

        clearCanvas(ctx, canvas);
        drawImage(ctx, canvas, game, game.backgroundImage);
        moveBackgroundImage(ctx, canvas, game, scoreCounter)
        drawImage(ctx, canvas, game, game.player);
        drawImage(ctx, canvas, game, game.specialPin)
        drawImage(ctx, canvas, game, game.enemies);

    }
}

function clearCanvas(ctx, canvas) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawImage(ctx, canvas, game, image) {
    if (image == game.enemies) {
        for (let i = 0; i < game.enemies.length; i++) {
            ctx.drawImage(game.enemies[i].img, game.enemies[i].position.x, game.enemies[i].position.y, game.enemies[i].width, game.enemies[i].height);
        }
    }
    else
        ctx.drawImage(image.img, image.position.x, image.position.y, image.width, image.height);
}

let nextSpecialPinSpawn = 0;
let specialPinSpawnPosition = 2;

function main() {
    let scoreCounter = document.getElementById("scoreNumber");
    let specialItemCounter = document.getElementById("specialItemsCounter");
    const canvas = document.getElementById("gameTable");
    canvas.width = 510;
    canvas.height = 800;
    const ctx = canvas.getContext("2d");

    let hitBoxReduceInPx = 15;

    let menu = document.getElementById("menu");
    let restartBtn = document.getElementById("restart");

    let game = {
        player: {
            position: { x: 200, y: 480 },
            offSetX: 0,
            offSetY: 0,
            width: 98,
            height: 214,
            img: playerImage,
            defaultPlayerPosition: {
                position: { x: 200, y: 480 }
            }
        },

        enemies: [
            {
                position: { x: 300, y: -250 },
                initialEnemiesPosition: { x: 300, y: -250 },
                defaulEnemiesPosition: { x: 0, y: -250 },
                width: 98,
                height: 214,
                img: enemieImage0
            },
            {
                position: { x: 50, y: -750 },
                initialEnemiesPosition: { x: 50, y: -750 },
                defaulEnemiesPosition: { x: 0, y: -250 },
                width: 98,
                height: 214,
                img: enemieImage1
            },
        ],



        specialPin: {
            position: { x: 0, y: -50 },
            width: 50,
            height: 50,
            img: specialPinImage,
            defaultSpecialPinPosition: {
                position: { x: 0, y: -50 }
            }
        },

        backgroundImage:
        {
            position: { x: 150, y: -790 },
            width: 213,
            height: 1600,
            defaultBackgroundImageHeight: 1600,
            img: backgroundImage
        }
    }

    document.addEventListener('keydown', (e) => {
        if (btnClicked == false) {
            if (e.repeat)
                return;
            else {
                if (e.key == "ArrowRight") {
                    game.player.offSetX += 10;
                    if (game.player.position.x > canvas.width - game.player.width)
                        game.player.position.x = canvas.width - game.player.width;
                }
                else if (e.key == "ArrowLeft") {
                    game.player.offSetX -= 10;
                    if (game.player.position.x < 0)
                        game.player.position.x = 0;
                }
                else if (e.key == "ArrowUp") {
                    game.player.offSetY -= 10;
                    if (game.player.position.y < 0)
                        game.player.position.y = 0;
                }
                else if (e.key == "ArrowDown") {
                    game.player.offSetY += 10;
                    if (game.player.position.y > canvas.height - game.player.height)
                        game.player.position.y = canvas.height - game.player.height;
                }

                drawImage(ctx, canvas, game, game.player);
                drawImage(ctx, canvas, game, game.enemies);
            }
        }
        else {
            clearCanvas(ctx, canvas);
            drawImage(ctx, canvas, game, game.backgroundImage);

        }
    });

    document.addEventListener("keyup", (e) => {

        if (e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
            game.player.offSetX = 0;
        }

        if (e.key == 'ArrowUp' || e.key == 'ArrowDown') {
            game.player.offSetY = 0;
        }
    });

    function loop(timestamp) {
        updateGame(game, canvas, ctx, scoreCounter, specialItemCounter, menu, restartBtn, hitBoxReduceInPx);
        window.requestAnimationFrame(loop);
    }
    window.requestAnimationFrame(loop);
}
main();

