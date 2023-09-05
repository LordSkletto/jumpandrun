input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Player.change(LedSpriteProperty.Y, -1)
    basic.pause(750)
    Player.change(LedSpriteProperty.Y, 1)
})
function Bild () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # #
        # # # # #
        `)
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    Player = game.createSprite(0, 3)
})
let Player: game.LedSprite = null
game.setLife(3)
basic.forever(function () {
    if (Player.isTouching(null)) {
        Player.change(LedSpriteProperty.X, -1)
    }
})
