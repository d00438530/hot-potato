input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("3 2 1 GO!")
    range1.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    range22.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    range3.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    range4.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
    potato = randint(3, 10)
    while (potato > 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(500)
        potato += -1
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(500)
    }
    basic.showIcon(IconNames.Skull)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let potato = 0
let range4: neopixel.Strip = null
let range3: neopixel.Strip = null
let range22: neopixel.Strip = null
let range1: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
let range = strip.range(0, 7)
let range2 = strip.range(7, 14)
range1 = strip.range(0, 4)
range22 = strip.range(4, 7)
range3 = strip.range(7, 10)
range4 = strip.range(10, 14)
range.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
range2.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
basic.showString("B TO START")
strip.showRainbow(1, 360)
