namespace SpriteKind {
    export const powerup = SpriteKind.create()
}
function UpdateCarSprite () {
    movingUp = playerCar.vy <= 0
    movingRight = playerCar.vx > 0
    if (playerCar.vy != 0 || playerCar.vx != 0) {
        if (Math.abs(playerCar.vx) > 0 && Math.abs(playerCar.vy) <= minForDiagnal) {
            if (movingRight) {
                playerCar.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . 2 2 2 2 2 2 2 2 . . . . 
                    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
                    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
                    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
                    . 2 c 2 e e e e e e e b c 4 2 2 
                    . 2 2 e b b e b b b e e b 4 2 2 
                    . 2 e b b b e b b b b e 2 2 2 2 
                    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
                    . e e e e e e f e e e f e 2 d d 
                    . e e e e e e f e e f e e e 2 d 
                    . e e e e e e f f f e e e e e e 
                    . e f f f f e e e e f f f e e e 
                    . . f f f f f e e f f f f f e . 
                    . . . f f f . . . . f f f f . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else {
                playerCar.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 2 2 2 2 2 . . 
                    . . . . . 2 c 2 2 2 2 2 2 4 2 . 
                    . . . . 2 c c 2 2 2 2 2 2 4 c 2 
                    . . d 2 4 c c 2 4 4 4 4 4 4 c c 
                    . d 2 2 4 c b e e e e e e e 2 c 
                    . 2 2 2 4 b e e b b b e b b e 2 
                    . 2 2 2 2 2 e b b b b e b b b e 
                    . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
                    . 2 d d 2 e f e e e f e e e e e 
                    . d d 2 e e e f e e f e e e e e 
                    . e e e e e e e f f f e e e e e 
                    . e e e e f f f e e e e f f f f 
                    . . . e f f f f f e e f f f f f 
                    . . . . f f f f . . . . f f f . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
        } else if (Math.abs(playerCar.vy) > 0 && Math.abs(playerCar.vx) <= minForDiagnal) {
            if (movingUp) {
                playerCar.setImage(img`
                    . . . . . . e e c c e e . . . . 
                    . . . . . e 2 2 2 2 2 2 e . . . 
                    . . . . 2 c 2 2 2 2 2 2 c 2 . . 
                    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
                    . . . f 2 2 4 2 2 2 2 2 c 2 f . 
                    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
                    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
                    . . . f 2 c 2 4 4 2 2 2 c 2 f . 
                    . . . e 2 c e c c c c e c 2 e . 
                    . . . e 2 e c b b b b c e 2 e . 
                    . . . e 2 e b b b b b b e 2 e . 
                    . . . e e e e e e e e e e e e . 
                    . . . f e d e e e e e e d e f . 
                    . . . f e 2 d e e e e d 2 e f . 
                    . . . f f e e e e e e e e f f . 
                    . . . . f f . . . . . . f f . . 
                    `)
            } else {
                playerCar.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 2 2 2 . . . . 
                    . . . . . 2 2 4 4 2 2 2 2 . . . 
                    . . . . . c 4 2 2 2 2 2 c . . . 
                    . . . . 2 c 4 2 2 2 2 2 c 2 . . 
                    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
                    . . . f 2 c 4 2 2 2 2 2 c 2 f . 
                    . . . f e c 2 2 2 2 2 2 c e f . 
                    . . . f 2 c 2 b b b b 2 c 2 f . 
                    . . . e 2 2 b c c c c b 2 2 e . 
                    . . . e e b c c c c c c b e e . 
                    . . . f e 4 4 4 4 4 4 4 4 e f . 
                    . . . f e d 2 2 2 2 2 2 d e f . 
                    . . . . 2 d d 2 2 2 2 d d 2 f . 
                    . . . . f 2 d 2 2 2 2 d 2 f . . 
                    . . . . . e 2 2 2 2 2 2 e . . . 
                    `)
            }
        } else if (Math.abs(playerCar.vy) > 0 && Math.abs(playerCar.vx) > 0 && Math.min(Math.abs(playerCar.vx), Math.abs(playerCar.vy)) > minForDiagnal) {
            if (movingUp) {
                if (movingRight) {
                    playerCar.setImage(assets.image`car-diagnol-2`)
                } else {
                    playerCar.setImage(assets.image`diagnol_car_1`)
                }
            } else {
                if (movingRight) {
                    playerCar.setImage(img`
                        . . . . . 2 . . . . . . . . . . 
                        . . . . 2 2 2 . . . . . . . . . 
                        . . . 2 4 c 2 2 . . . . . . . . 
                        . . 2 4 c c 2 2 2 . . . . . . . 
                        . 2 2 c c 2 2 2 2 2 . . . . . . 
                        2 e e 2 2 2 2 2 2 2 2 . . . . . 
                        . e b e 2 4 2 2 2 2 2 2 . . . . 
                        . f e b e 2 4 2 2 2 2 2 2 . . . 
                        . f f e b e 2 4 2 2 2 4 2 2 . . 
                        . . f f e e e 2 4 2 4 2 2 2 2 . 
                        . . . . . e e e 2 4 2 2 c c 2 2 
                        . . . . . . e b e 2 2 c c 4 1 . 
                        . . . . . . f e b e 2 c 4 2 . . 
                        . . . . . . f f e b e 2 1 . . . 
                        . . . . . . . f f e e 1 . . . . 
                        . . . . . . . . . . e . . . . . 
                        `)
                } else {
                    playerCar.setImage(assets.image`diagnol_car_3`)
                }
            }
        }
    }
}
function UpdateCarPhysics () {
    if ((controller.left.isPressed() || controller.right.isPressed()) && (controller.down.isPressed() || controller.up.isPressed()) && !(movingDiagnal)) {
        movingDiagnal = true
        speed = speed / 1.5
        acceleration = acceleration / 1.5
        deacceleration = deacceleration / 1.5
        breakSpeed = breakSpeed / 1.5
    } else if (!((controller.left.isPressed() || controller.right.isPressed()) && (controller.down.isPressed() || controller.up.isPressed())) && movingDiagnal) {
        movingDiagnal = false
        speed = speed * 1.5
        acceleration = acceleration * 1.5
        deacceleration = deacceleration * 1.5
        breakSpeed = breakSpeed * 1.5
    }
    playerCar.setVelocity(GetCarDirectionalVelocity(controller.right.isPressed(), controller.left.isPressed(), playerCar.vx), GetCarDirectionalVelocity(controller.down.isPressed(), controller.up.isPressed(), playerCar.vy))
}
function UpdateOffRoad () {
    isOnRoadTiles = tiles.tileAtLocationEquals(playerCar.tilemapLocation(), assets.tile`myTile`) || tiles.tileAtLocationEquals(playerCar.tilemapLocation(), sprites.vehicle.roadIntersection2) || tiles.tileAtLocationEquals(playerCar.tilemapLocation(), sprites.vehicle.roadIntersection1) || tiles.tileAtLocationEquals(playerCar.tilemapLocation(), sprites.vehicle.roadHorizontal) || tiles.tileAtLocationEquals(playerCar.tilemapLocation(), sprites.vehicle.roadIntersection3) || tiles.tileAtLocationEquals(playerCar.tilemapLocation(), assets.tile`myTile2`) || tiles.tileAtLocationEquals(playerCar.tilemapLocation(), assets.tile`myTile1`) || tiles.tileAtLocationEquals(playerCar.tilemapLocation(), assets.tile`myTile0`) || tiles.tileAtLocationEquals(playerCar.tilemapLocation(), sprites.vehicle.roadVertical)
    if (offRoad && isOnRoadTiles) {
        offRoad = false
        speed = speed * 2
    } else if (!(offRoad) && !(isOnRoadTiles)) {
        offRoad = true
        speed = speed / 2
    }
}
function GetCarDirectionalVelocity (posInput: boolean, negInput: boolean, origVel: number) {
    dirVel = origVel
    if (dirVel >= speed && posInput) {
        dirVel = speed
    } else if (dirVel <= speed * -1 && negInput) {
        dirVel = speed * -1
    } else if (posInput) {
        if (dirVel < 0) {
            dirVel = dirVel + breakSpeed * deltaTime
        } else {
            dirVel = dirVel + acceleration * deltaTime
        }
    } else if (negInput) {
        if (dirVel > 0) {
            dirVel = dirVel - breakSpeed * deltaTime
        } else {
            dirVel = dirVel - acceleration * deltaTime
        }
    } else if (Math.abs(dirVel) <= rangeToStop) {
        dirVel = 0
    } else if (dirVel > 0) {
        dirVel = dirVel - deacceleration * deltaTime
    } else if (dirVel < 0) {
        dirVel = dirVel + deacceleration * deltaTime
    }
    return dirVel
}
function SpawnPowerups (maxPowerups: number) {
    powerupCount = 0
    while (powerupCount < maxPowerups) {
        powerup = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.powerup)
        tiles.placeOnTile(powerup, powerUpPositions.removeAt(randint(0, powerUpPositions.length - 1)))
        powerupCount += 1
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.powerup, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    playerCar.startEffect(effects.trail)
    acceleration = acceleration * 1.5
    speed = speed * 1.5
    breakSpeed = breakSpeed * 1.5
    pause(2000)
    effects.clearParticles(playerCar)
    acceleration = acceleration / 1.5
    speed = speed / 1.5
    breakSpeed = breakSpeed / 1.5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.gameOver(true)
})
let powerup: Sprite = null
let powerupCount = 0
let deltaTime = 0
let dirVel = 0
let offRoad = false
let isOnRoadTiles = false
let movingRight = false
let movingUp = false
let movingDiagnal = false
let minForDiagnal = 0
let rangeToStop = 0
let breakSpeed = 0
let deacceleration = 0
let acceleration = 0
let speed = 0
let playerCar: Sprite = null
let powerUpPositions: tiles.Location[] = []
tiles.setCurrentTilemap(tilemap`level0`)
powerUpPositions = [
tiles.getTileLocation(27, 28),
tiles.getTileLocation(26, 40),
tiles.getTileLocation(20, 52),
tiles.getTileLocation(27, 5),
tiles.getTileLocation(5, 5),
tiles.getTileLocation(2, 15),
tiles.getTileLocation(15, 12),
tiles.getTileLocation(10, 23),
tiles.getTileLocation(2, 30),
tiles.getTileLocation(10, 18)
]
SpawnPowerups(game.askForNumber("How many powerUps do you want to spawn?", 1))
playerCar = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(playerCar, tiles.getTileLocation(20, 28))
scene.cameraFollowSprite(playerCar)
speed = 80
acceleration = 50
deacceleration = 35
breakSpeed = 80
rangeToStop = 3
minForDiagnal = 25
movingDiagnal = false
let frameTime = game.runtime()
info.startCountdown(30)
game.onUpdate(function () {
    UpdateCarPhysics()
    UpdateCarSprite()
    UpdateOffRoad()
})
forever(function () {
    deltaTime = (game.runtime() - frameTime) / 1000
    frameTime = game.runtime()
})
