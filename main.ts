input.onGesture(Gesture.LogoDown, function () {
    x = x - 1
    basic.showNumber(3)
    basic.clearScreen()
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.showString("A")
        x = 2
    } else if (receivedNumber == 3) {
        basic.showString("B")
        x = 2
    } else if (receivedNumber == 4) {
        basic.showString("C")
        x = 2
    } else if (receivedNumber == 5) {
        basic.showString("D")
        x = 2
    } else if (receivedNumber == 6) {
        basic.showString("E")
        x = 2
    } else if (receivedNumber == 7) {
        basic.showString("F")
        x = 2
    } else if (receivedNumber == 8) {
        basic.showString("G")
        x = 2
    } else if (receivedNumber == 9) {
        basic.showString("H")
        x = 2
    } else if (receivedNumber == 10) {
        basic.showString("I")
        x = 2
    } else if (receivedNumber == 11) {
        basic.showString("J")
        x = 2
    }
    if (receivedNumber == 12) {
        basic.showString("K")
        x = 2
    } else if (receivedNumber == 13) {
        basic.showString("L")
        x = 2
    } else if (receivedNumber == 14) {
        basic.showString("M")
        x = 2
    } else if (receivedNumber == 15) {
        basic.showString("N")
        x = 2
    } else if (receivedNumber == 16) {
        basic.showString("O")
        x = 2
    } else if (receivedNumber == 17) {
        basic.showString("P")
        x = 2
    } else if (receivedNumber == 18) {
        basic.showString("Q")
        x = 2
    } else if (receivedNumber == 19) {
        basic.showString("R")
        x = 2
    } else if (receivedNumber == 20) {
        basic.showString("S")
        x = 2
    } else if (receivedNumber == 21) {
        basic.showString("T")
        x = 2
    }
    if (receivedNumber == 22) {
        basic.showString("U")
        x = 2
    } else if (receivedNumber == 23) {
        basic.showString("V")
        x = 2
    } else if (receivedNumber == 24) {
        basic.showString("W")
        x = 2
    } else if (receivedNumber == 25) {
        basic.showString("X")
        x = 2
    } else if (receivedNumber == 26) {
        basic.showString("Y")
        x = 2
    } else if (receivedNumber == 27) {
        basic.showString("Z")
        x = 2
    } else if (receivedNumber == 28) {
        basic.showNumber(0)
        x = 2
    } else if (receivedNumber == 29) {
        basic.showNumber(1)
        x = 2
    } else if (receivedNumber == 30) {
        basic.showNumber(2)
        x = 2
    } else if (receivedNumber == 31) {
        basic.showNumber(3)
        x = 2
    } else if (receivedNumber == 32) {
        basic.showNumber(4)
        x = 2
    } else if (receivedNumber == 33) {
        basic.showNumber(5)
        x = 2
    } else if (receivedNumber == 34) {
        basic.showNumber(6)
        x = 2
    } else if (receivedNumber == 35) {
        basic.showNumber(7)
        x = 2
    } else if (receivedNumber == 36) {
        basic.showNumber(8)
        x = 2
    } else if (receivedNumber == 37) {
        basic.showNumber(9)
        x = 2
    } else if (receivedNumber == 38) {
        basic.showString("   ")
        x = 2
    } else if (receivedNumber == 39) {
        basic.showString(".")
        x = 2
    } else if (receivedNumber == 40) {
        basic.showString("!")
        x = 2
    } else if (receivedNumber == 41) {
        basic.showString("?")
        x = 2
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    x = x + 1
    basic.showNumber(1)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    x = x + 10
    basic.showNumber(10)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(x)
    x = 2
})
let x = 0
x = 2
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
