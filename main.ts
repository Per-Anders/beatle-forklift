radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (claw_open) {
            pins.servoWritePin(AnalogPin.P2, 144)
            claw_open = false
        } else {
            pins.servoWritePin(AnalogPin.P2, 118)
        }
    }
})
let claw_open = false
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    radio.setGroup(1)
})
