radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P2, 144)
    }
    if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P2, 180)
    }
})
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    radio.setGroup(1)
})
