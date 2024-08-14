namespace cat {
   
    let rightEarIsPressed = false
    let leftEarIsPressed = false
    let strip: neopixel.Strip = null
    
    init()

    function init(){
        pins.setAudioPinEnabled(false)
        pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
        pins.setPull(DigitalPin.P1, PinPullMode.PullDown)
        strip = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)
        strip.setBrightness(0)
        strip.showRainbow(1, 255)
        strip.show()
        motor.servo(motor.Servos.S8, 90)
    }



    basic.forever(function () {
        const pin0Val = pins.analogReadPin(AnalogPin.P0)
        const pin1Val = pins.analogReadPin(AnalogPin.P1)
        rightEarIsPressed = pin0Val >= 20;
        leftEarIsPressed = pin1Val >= 20;
    })


    //% block
    //% group="Basic"
    export function pressingRightEar(): boolean {
        return rightEarIsPressed;
    }
    //% block
    //% group="Basic"
    export function pressingLeftEar(): boolean {
        return leftEarIsPressed;
    }

    //% block
    //% group="Basic"
    export function onRightEarPressed(handler: () => void) {
        let rightEarWasPressed = rightEarIsPressed
        basic.forever(function () {
            if (!rightEarWasPressed && rightEarIsPressed){
                handler()
            }
            rightEarWasPressed = rightEarIsPressed
        })
        
    }

    //% block
    //% group="Basic"
    export function onLeftEarPressed(handler: () => void) {
        let leftEarWasPressed = leftEarIsPressed
        basic.forever(function () {
            if (!leftEarWasPressed && leftEarIsPressed) {
                handler()
            }
            leftEarWasPressed = leftEarIsPressed
        })

    }

    let purring = false
    basic.forever(function() {
        if (purring){
            motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 55)
            basic.pause(800)
            motor.motorStop(motor.Motors.M3);
            basic.pause(200)
            motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 30)
            basic.pause(800)
            motor.motorStop(motor.Motors.M3);
            basic.pause(200)
        }
        else{
            motor.motorStop(motor.Motors.M3);
        }
        
    })
    //% block
    //% group="Basic"
    export function purr() {
        purring = true

    }

    //% block
    //% group="Basic"
    export function stopPurr() {
        purring = false
        motor.motorStop(motor.Motors.M3);
    }








    let movingTail = false
    basic.forever(function () {
        if (movingTail) {
            motor.servo(motor.Servos.S8,130)
            basic.pause(1000)
            motor.servo(motor.Servos.S8, 50)
            basic.pause(1000)
        }
        else {
            motor.servo(motor.Servos.S8, 90)
        }

    })
    //% block
    //% group="Basic"
    export function moveTail() {
        movingTail = true

    }

    //% block
    //% group="Basic"
    export function stopTail() {
        movingTail = false
        motor.servo(motor.Servos.S8, 90)
    }


}