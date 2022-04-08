input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("3 2 1 GO!")
    potato = randint(5, 15)
    while (potato > 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        potato += -1
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(500)
    }
    basic.showIcon(IconNames.Skull)
})
let potato = 0
basic.showString("A TO START")
