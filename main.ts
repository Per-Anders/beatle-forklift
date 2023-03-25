radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (claw_open == false) {
            pins.servoWritePin(AnalogPin.P2, 144)
            claw_open = true
        } else {
            pins.servoWritePin(AnalogPin.P2, 180)
            claw_open = false
        }
    }
})
let claw_open = false
DFRobotMaqueenPlus.I2CInit()
claw_open = false
basic.forever(function () {
    radio.setGroup(1)
})
