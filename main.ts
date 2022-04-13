input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("3 2 1 GO!")
    potato = randint(5, 15)
    while (potato > 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(500)
        potato += -1
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        basic.pause(500)
    }
    basic.showIcon(IconNames.Skull)
})
let potato = 0
basic.showString("A TO START")
let strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
let range = strip.range(0, 7)
let rangne2 = strip.range(7, 14)
range.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
rangne2.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
