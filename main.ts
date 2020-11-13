let hand = 0
let dice_roll = 0
input.onButtonPressed(Button.A, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.pause(1500)
        basic.showLeds(`
            . # # # .
            # . . # .
            # . . # .
            # # # . .
            # . . . .
            `)
    }
    if (hand == 2) {
        basic.pause(1500)
        basic.showLeds(`
            . # # # .
            # . . . .
            . # # . .
            . . . # .
            # # # . .
            `)
    }
    if (hand == 3) {
        basic.pause(1500)
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # # # . .
            # . . # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        # . # . .
        # # # . #
        # . # . #
        `)
    for (let index = 0; index < 5; index++) {
        music.playMelody("A G A G A B C5 B ", 206)
        music.playMelody("C5 B C5 B A G A C5 ", 206)
        music.playMelody("C5 B C5 B A F G A ", 206)
        music.playMelody("C5 B C5 B A F G A ", 206)
        music.playMelody("E F G A B G B D ", 206)
        music.playMelody("A E B A G A B C5 ", 206)
        music.playMelody("C5 B C5 B A F G A ", 206)
        music.playMelody("B C C5 B A F B C5 ", 206)
        music.playMelody("A B C5 B A E C5 G ", 206)
        music.playMelody("C5 B C5 B A F G A ", 206)
        music.playMelody("A G A G A B C5 B ", 206)
    }
})
input.onGesture(Gesture.Shake, function () {
    dice_roll = randint(1, 20)
    if (dice_roll == 1) {
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
    if (dice_roll == 2) {
        basic.showLeds(`
            # # # . .
            . . # . .
            . # # . .
            # # . . .
            # # # # .
            `)
    }
    if (dice_roll == 3) {
        basic.showLeds(`
            # # # . .
            . . # . .
            # # # . .
            . . # . .
            # # # . .
            `)
    }
    if (dice_roll == 4) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # . .
            # # # # .
            . . # . .
            `)
    }
    if (dice_roll == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (dice_roll == 6) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . . .
            . # # # .
            . # # # .
            `)
    }
    if (dice_roll == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
    if (dice_roll == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (dice_roll == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (dice_roll == 10) {
        basic.showLeds(`
            . . . . .
            # . # # #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
    if (dice_roll == 11) {
        basic.showLeds(`
            . . . . .
            # . # . .
            # . # . .
            # . # . .
            # . # . .
            `)
    }
    if (dice_roll == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . # #
            # . # . .
            # . # # #
            `)
    }
    if (dice_roll == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . . . #
            # . # # #
            `)
    }
    if (dice_roll == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    }
    if (dice_roll == 16) {
        basic.showLeds(`
            . . . . .
            # . # # #
            # . # . .
            # . # # #
            # . # # #
            `)
    }
    if (dice_roll == 17) {
        basic.showLeds(`
            . . . . .
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            `)
    }
    if (dice_roll == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    }
    if (dice_roll == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . # # #
            `)
    }
    if (dice_roll == 20) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . # . # #
            # . . # #
            # # . # #
            `)
    }
})
