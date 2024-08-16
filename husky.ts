// Add your code here
motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 250)
motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 250)
basic.pause(50)
motor.motorStop(motor.Motors.M1)
motor.motorStop(motor.Motors.M2)
basic.pause(200)
}
function moveLeftSlow() {
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 250)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 250)
    basic.pause(50)
    motor.motorStop(motor.Motors.M1)
    motor.motorStop(motor.Motors.M2)
    basic.pause(200)
}
function moveRightSlow() {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 250)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 250)
    basic.pause(50)
    motor.motorStop(motor.Motors.M1)
    motor.motorStop(motor.Motors.M2)
    basic.pause(200)
}
let toyWidth = 0
let toyHeight = 0
let toyY = 0
let toyX = 0
let test: DigitalPin
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
let strip = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.show()
// kitronik_VIEW128x64.clear()
// kitronik_VIEW128x64.show("X = " + toyX, 1, kitronik_VIEW128x64.ShowAlign.Left, kitronik_VIEW128x64.FontSelection.Big)
// kitronik_VIEW128x64.show("Y = " + toyY, 2, kitronik_VIEW128x64.ShowAlign.Left, kitronik_VIEW128x64.FontSelection.Big)
// kitronik_VIEW128x64.show("Wi = " + toyWidth, 3, kitronik_VIEW128x64.ShowAlign.Left, kitronik_VIEW128x64.FontSelection.Big)
// kitronik_VIEW128x64.show("He = " + toyHeight, 4, kitronik_VIEW128x64.ShowAlign.Left, kitronik_VIEW128x64.FontSelection.Big)
// basic.pause(600)
basic.forever(function () {

})
basic.forever(function () {
    if (toyX > 0 && toyX < 140) {
        moveLeftSlow()
    } else if (toyX > 0 && toyX > 180) {
        moveRightSlow()
    }
    if (toyY > 0 && toyY < 180) {
        moveForwardSlow()
    }
})
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        toyX = huskylens.readeBox(1, Content1.xCenter)
        toyY = huskylens.readeBox(1, Content1.yCenter)
        toyHeight = huskylens.readeBox(1, Content1.height)
        toyWidth = huskylens.readeBox(1, Content1.width)
    } else {
        toyX = 0
        toyY = 0
        toyHeight = 0
        toyWidth = 0
    }
})
