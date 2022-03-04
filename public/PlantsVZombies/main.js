let currentResourcesAmount = 0
let hoveredCell = {
    x: 0,
    y: 0
}

let enemySpawnTime = 12000
let lastWaveOfEnemiesSpawnTime = Date.now() 

function canvasPositionToGridPosition(offsetX, offsetY, cellSize) {
    x = Math.floor(offsetX / cellSize)
    y = Math.floor(offsetY / cellSize)
    return {
        x,
        y
    }
}

function spawnPlant(gameBoard, items, cordinates, boardItems, canvas) {
    if (currentResourcesAmount >= items.plantCost && gameBoard[cordinates.y][cordinates.x] != items.sun && gameBoard[cordinates.y][cordinates.x] != items.plant && gameBoard[cordinates.y][cordinates.x] != items.specialPlant) {
        gameBoard[cordinates.y][cordinates.x] = items.plant
        updateBoardItems(boardItems, cordinates.y, cordinates.x, items)
        renderResourceCount(-items.plantCost)
    }
}

function renderResourceCount(amount) {
    currentResourcesAmount += amount
    let resourcesCounterNode = document.getElementById("resources")
    resourcesCounterNode.innerHTML = "" + currentResourcesAmount
}

function createResource(cellSize, boardItems, canvas) {
    let randX = Math.floor(Math.random() * (canvas.width - (cellSize * 3))) + cellSize
    let randY = Math.floor(Math.random() * canvas.height / cellSize)
    boardItems[randY].resources.push({ x: randX + cellSize, y: -cellSize, height: 75, width: 75 })
}

let lastResourceSpawnTime = Date.now()
function createNewResource(cellSize, boardItems, canvas) {
    if (lastResourceSpawnTime + 5000 < Date.now()) {
        createResource(cellSize, boardItems, canvas)
        lastResourceSpawnTime = Date.now()
    }
}

function moveResource(boardItems, canvas, cellSize) {
    for (let boardItem of boardItems) {
        for (let resource of boardItem.resources) {
            resource.y += 1
            if (resource.y >= canvas.height - cellSize) {
                resource.y -= 1
            }
        }
    }
}

function drawResource(ctx, boardItems, sunImg) {
    for (let boardItem of boardItems) {
        for (let resource of boardItem.resources) {
            ctx.drawImage(sunImg, resource.x, resource.y, resource.width, resource.height)
        }
    }
}

function draw(gameBoard, ctx, canvas, plantImg, specialPlantImg, cellSize, items) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < canvas.height / cellSize; i++) {
        for (let j = 0; j < canvas.width / cellSize; j++) {
            if (gameBoard[i][j] == items.plant) {
                ctx.drawImage(plantImg, (j * cellSize), (i * cellSize), items.plantWidth, items.plantHeight)
            }
            else if (gameBoard[i][j] == items.specialPlant) {
                ctx.drawImage(specialPlantImg, (j * cellSize), (i * cellSize), items.specialPlantWidth, items.specialPlantHeight)
            }
        }
    }
}

function fireBullet(boardItems) {
    for (let boardItem of boardItems) {
        for (let plant of boardItem.plants) {
            if (plant.lastBulletTime + 3000 < Date.now() && boardItem.enemies.length > 0) {
                let b = {}
                if (plant.isSpecial) {
                    b = { x: plant.y, y: plant.x, health: 1, specialBullet: true }
                }
                else {
                    b = { x: plant.y, y: plant.x, health: 1 }
                }
                boardItem.bullets.push(b)
                plant.lastBulletTime = Date.now()
            }
        }
    }
}

function moveBullets(boardItems, canvas, items, cellSize) {
    for (let boardItem of boardItems) {
        for (let bullet of boardItem.bullets) {
            bullet.y += items.bulletSpeed
            if ((bullet.y * cellSize + items.radius) >= canvas.width) {
                boardItem.bullets.shift()
            }
        }
    }
}

function drawBullet(ctx, boardItems) {
    for (let boardItem of boardItems) {
        for (let bullet of boardItem.bullets) {
            if (bullet.specialBullet) {
                ctx.beginPath()
                ctx.fillStyle = "#a41c44";
                ctx.arc(bullet.y * 100 + 115, bullet.x * 100 + 55, 15, 0, 2 * Math.PI);
                ctx.fill();
            }
            else {
                ctx.beginPath()
                ctx.strokeStyle = "#81bd1a"
                ctx.fillStyle = "#234600";
                ctx.arc(bullet.y * 100 + 115, bullet.x * 100 + 55, 15, 0, 2 * Math.PI);
                ctx.stroke()
                ctx.fill()
            }
        }
    }
}

function spawnEnemy(boardItems, canvas, items, cellSize) {
    let randY = Math.floor(Math.random() * canvas.height / cellSize)
    boardItems[randY].enemies.push({ x: canvas.width, y: randY * cellSize, health: items.healthValue })
}

let lastEnemySpawnTime = Date.now()
function spawnNewEnemy(boardItems, canvas, cellSize, items) {
    if (lastEnemySpawnTime + enemySpawnTime < Date.now()) {
        spawnEnemy(boardItems, canvas, items, cellSize)
        lastEnemySpawnTime = Date.now()
    }
}

function moveEnemies(boardItems, items) {
    for (let boardItem of boardItems) {
        for (let enemy of boardItem.enemies) {
            enemy.x -= items.enemySpeed
        }
    }
}

function drawEnemy(ctx, boardItems, cellSize, enemyImg) {
    for (let boardItem of boardItems) {
        for (let enemy of boardItem.enemies) {
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.drawImage(enemyImg, enemy.x, enemy.y, cellSize, cellSize)
        }
    }
}

function checkPlantEnemyCollision(boardItems, items, cellSize) {
    for (let boardItem of boardItems) {
        for (let plant of boardItem.plants) {
            for (let enemy of boardItem.enemies) {
                if (enemy.x >= (plant.x * cellSize) && enemy.x < (plant.x * cellSize + cellSize)) {
                    plant.health -= items.damageToPlant
                    enemy.x += items.enemySpeed
                }
            }
        }
    }
}

function checkBulletEnemyCollision(boardItems, items, cellSize) {
    for (let boardItem of boardItems) {
        for (let bullet of boardItem.bullets) {
            for (let enemy of boardItem.enemies) {
                if (bullet.y * cellSize >= enemy.x - cellSize && enemy.x > bullet.y * cellSize) {
                    if (bullet.specialBullet) {
                        enemy.health -= items.damageToEnemySpecialBullet
                    }
                    else {
                        enemy.health -= items.damageToEnemy
                    }
                    bullet.health = 0
                }
            }
        }
    }
}

function checkBonusGameEndBulletEnemyCollision(boardItems, cellSize) {
    for (let boardItem of boardItems) {
        for (let gameEndBullet of boardItem.specialGameEndBullet) {
            for (let enemy of boardItem.enemies) {
                if (gameEndBullet.x >= enemy.x) {
                    enemy.health = 0
                }
            }
        }
    }
}

function gameOver(boardItems, cellSize, ctx, gameBoard, canvas, boardItems, items) {
    for (let boardItem of boardItems) {
        for (let enemy of boardItem.enemies) {
            if (enemy.x + cellSize < 0 && boardItem.bonusGameEndLife == false) {
                return true
            }
        }
    }
}

function createBonusGameEndBullet(boardItems, cellSize) {
    for (let boardItem of boardItems) {
        for (let enemy of boardItem.enemies) {
            if (enemy.x + cellSize < 0 && boardItem.bonusGameEndLife) {
                if (boardItem.specialGameEndBullet.length <= 0) {
                enemy.health = 0
                boardItem.specialGameEndBullet.push({x: -cellSize, y: enemy.y, width: 100, height: 100})
                }
            }
        }
    }
}

function moveBonusGameEndBullet(boardItems, canvas) {
    for (let boardItem of boardItems) {
        if (boardItem.specialGameEndBullet.length > 0) {
            boardItem.specialGameEndBullet[0].x += 5
            if (boardItem.specialGameEndBullet[0].x >= canvas.width) {
                boardItem.specialGameEndBullet.shift()
                boardItem.bonusGameEndLife = false
            }
        }
    }
}

function drawBonusGameEndBullet(boardItems, ctx, specialGameEndBulletImg) {
    for (let boardItem of boardItems) {
        if (boardItem.specialGameEndBullet.length > 0) { 
            ctx.drawImage(specialGameEndBulletImg, boardItem.specialGameEndBullet[0].x, boardItem.specialGameEndBullet[0].y, boardItem.specialGameEndBullet[0].width, boardItem.specialGameEndBullet[0].height)
        }
    }
}

function clearDeadBoardItems(boardItems) {
    for (let i = 0; i < boardItems.length; i++) {
        boardItems[i] = {
            bonusGameEndLife: boardItems[i].bonusGameEndLife,
            specialGameEndBullet: boardItems[i].specialGameEndBullet,
            bullets: boardItems[i].bullets.filter(bullet => bullet.health > 0),
            plants: boardItems[i].plants.filter(plant => plant.health > 0),
            enemies: boardItems[i].enemies.filter(enemy => enemy.health > 0),
            resources: boardItems[i].resources,
        }
    }
}

function clearGameBoard(boardItems, gameBoard) {
    boardItems.forEach(boardItem => {
        boardItem.plants.forEach(plant => {
            if (plant.health <= 0) {
                gameBoard[plant.y][plant.x] = 0
            }
        })
    })
}

function currentMouseHoveredCell(ctx, cellSize) {
    ctx.strokeStyle = "#AED6F1"
    ctx.strokeRect(hoveredCell.x, hoveredCell.y, cellSize, cellSize)
}

function updateBoardItems(boardItems, a, b, items) {
    boardItems[a].plants.push({ x: b, y: a, lastBulletTime: Date.now(), health: items.healthValue, isSpecial: false, width: 100, height: 100 })
}

function createSpecialPlant(gameBoard, cordinates, items, boardItems) {
    if (gameBoard[cordinates.y][cordinates.x] == items.plant && currentResourcesAmount >= items.specialPlantCost) {
        gameBoard[cordinates.y][cordinates.x] = items.specialPlant
        boardItems[cordinates.y].plants[cordinates.x].isSpecial = true
        renderResourceCount(-items.specialPlantCost)
    }
}

function speedUpEnemiesSpawn(boardItems, cellSize, items, canvas) {
    if (lastWaveOfEnemiesSpawnTime + 45000 < Date.now()) {
        let i = 0
        for (let b of boardItems) {
               b.enemies.push({ x: canvas.width, y: i * cellSize, health: items.healthValue })
               b.enemies.push({ x: canvas.width + 200, y: i * cellSize, health: items.healthValue })
                i++
        }
        lastWaveOfEnemiesSpawnTime = Date.now()
    }
}

function main() {
    const canvas = document.getElementById("gameBoard")
    canvas.width = 900
    canvas.height = 500
    const ctx = canvas.getContext("2d")

    let cellSize = 100

    let items = {
        plant: 1,
        sun: 2,
        specialPlant: 5,
        plantCost: 50,
        healthValue: 100,
        radius: 15,
        bulletSpeed: 0.05,
        enemySpeed: 0.5,
        damageToPlant: 0.5,
        damageToEnemy: 20,
        specialPlantCost: 100,
        damageToEnemySpecialBullet: 40,
        plantWidth: 100,
        plantHeight: 100,
        specialPlantWidth: 100,
        specialPlantHeight: 100
    }

    let plantImg = new Image()
    plantImg.src = "images/plant.png"

    let specialPlantImg = new Image()
    specialPlantImg.src = "images/specialPlant.png"

    let sunImg = new Image()
    sunImg.src = "images/sun.png"

    let enemyImg = new Image()
    enemyImg.src = "images/zombie.png"

    let specialGameEndBulletImg = new Image()
    specialGameEndBulletImg.src = "images/specialBullet.png"

    let gameBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    let boardItems = []
    for (let i = 0; i < 5; i++) {
        boardItems.push({
            bonusGameEndLife: true,
            specialGameEndBullet: [],
            bullets: [],
            plants: [],
            enemies: [],
            resources: []
        })
    }
    console.log(boardItems)

    spawnEnemy(boardItems, canvas, items, cellSize)

    createResource(100, boardItems, canvas)

    canvas.addEventListener("click", (e) => {
        let cordinates = canvasPositionToGridPosition(e.offsetX, e.offsetY, 100)
        for (let boardItem of boardItems) {
            for (let resource of boardItem.resources) {
                if (e.offsetX >= resource.x && e.offsetX < (resource.x + resource.width) &&
                    e.offsetY >= resource.y && e.offsetY < (resource.y + resource.height)) {
                    renderResourceCount(25)
                    boardItem.resources.shift()
                    return
                }
            }
        }
        createSpecialPlant(gameBoard, cordinates, items, boardItems)
        spawnPlant(gameBoard, items, cordinates, boardItems, canvas)
    })

    canvas.addEventListener("mousemove", (e) => {
        hoveredCell.x = Math.floor(e.offsetX / 100) * 100
        hoveredCell.y = Math.floor(e.offsetY / 100) * 100
    })

    function loop(timestamp) {
        /*let lastFrameDuration = timestamp - lastDraw;
        msCounter += lastFrameDuration;
    
        lastDraw = timestamp;*/
        //updateGame(gameBoard, canvas, ctx, items, bullet, bulletArray)
        let gameEnd = gameOver(boardItems, cellSize, ctx, gameBoard, canvas, boardItems, items)
        if (gameEnd) {
            gameBoard = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]

            boardItems = []
            for (let i = 0; i < 5; i++) {
                boardItems.push({
                    bonusGameEndLife: true,
                    specialGameEndBullet: [],
                    bullets: [],
                    plants: [],
                    enemies: [],
                    resources: []
                })
            }
            lastWaveOfEnemiesSpawnTime = Date.now()
            renderResourceCount(currentResourcesAmount -= currentResourcesAmount)    
        }
        speedUpEnemiesSpawn(boardItems, cellSize, items, canvas)
        draw(gameBoard, ctx, canvas, plantImg, specialPlantImg, cellSize, items)
        createBonusGameEndBullet(boardItems, cellSize)
        moveBonusGameEndBullet(boardItems, canvas)
        drawBonusGameEndBullet(boardItems, ctx, specialGameEndBulletImg)
        currentMouseHoveredCell(ctx, cellSize)
        fireBullet(boardItems)
        moveBullets(boardItems, canvas, items, cellSize)
        drawBullet(ctx, boardItems)
        spawnNewEnemy(boardItems, canvas, cellSize, items)
        moveEnemies(boardItems, items)
        drawEnemy(ctx, boardItems, cellSize, enemyImg)
        moveResource(boardItems, canvas, cellSize)
        drawResource(ctx, boardItems, sunImg)
        createNewResource(cellSize, boardItems, canvas)
        checkPlantEnemyCollision(boardItems, items, cellSize)
        checkBulletEnemyCollision(boardItems, items, cellSize)
        checkBonusGameEndBulletEnemyCollision(boardItems, cellSize)
        clearGameBoard(boardItems, gameBoard)
        clearDeadBoardItems(boardItems)
        window.requestAnimationFrame(loop);
    }
    let msCounter = 0;
    let lastDraw = 0;
    window.requestAnimationFrame(loop);
}
main()


