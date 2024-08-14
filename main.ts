namespace cat {
    pins.setAudioPinEnabled(false)
    pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
    pins.setPull(DigitalPin.P1, PinPullMode.PullDown)
    let rightEarIsPressed = false
    let leftEarIsPressed = false
    basic.forever(function () {
        const pin0Val = pins.analogReadPin(AnalogPin.P0)
        const pin1Val = pins.analogReadPin(AnalogPin.P1)
        rightEarIsPressed = pin0Val >= 10;
        leftEarIsPressed = pin1Val >= 10;
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

}