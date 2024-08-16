namespace catImp {
    export class Cat {
        rightEarIsPressed: boolean = false
        leftEarIsPressed: boolean = false
        private strip: neopixel.Strip = null
        private purring:boolean = false
        private movingTail:boolean = false

        constructor() {

        }
        init() {
            pins.setAudioPinEnabled(false)
            pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
            pins.setPull(DigitalPin.P1, PinPullMode.PullDown)
            this.strip = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)
            this.strip.setBrightness(0)
            this.strip.showRainbow(1, 255)
            this.strip.show()
            motor.servo(motor.Servos.S8, 90)

            basic.forever(function () {
                const pin0Val = pins.analogReadPin(AnalogPin.P0)
                const pin1Val = pins.analogReadPin(AnalogPin.P1)
                this.rightEarIsPressed = pin0Val >= 10;
                this.leftEarIsPressed = pin1Val >= 10;
            })

            
            basic.forever(function () {
                if (this.purring) {
                    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 55)
                    basic.pause(800)
                    motor.motorStop(motor.Motors.M3);
                    basic.pause(200)
                    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 30)
                    basic.pause(800)
                    motor.motorStop(motor.Motors.M3);
                    basic.pause(200)
                }
                else {
                    motor.motorStop(motor.Motors.M3);
                }

            })
            basic.forever(function () {
                if (this.movingTail) {
                    motor.servo(motor.Servos.S8, 130)
                    basic.pause(1000)
                    motor.servo(motor.Servos.S8, 50)
                    basic.pause(1000)
                }
                else {
                    motor.servo(motor.Servos.S8, 90)
                }

            })

        }

        onRightEarPressed(handler: () => void) {
            let rightEarWasPressed = this.rightEarIsPressed
            basic.forever(function () {
                if (!rightEarWasPressed && this.rightEarIsPressed) {
                    handler()
                }
                rightEarWasPressed = this.rightEarIsPressed
            })

        }


        onLeftEarPressed(handler: () => void) {
            let leftEarWasPressed = this.leftEarIsPressed
            basic.forever(function () {
                if (!leftEarWasPressed && this.leftEarIsPressed) {
                    handler()
                }
                leftEarWasPressed = this.leftEarIsPressed
            })

        }




     purr() {
        this.purring = true

    }

    
    stopPurr() {
        this.purring = false
        motor.motorStop(motor.Motors.M3);
    }



    

    moveTail() {
       this.movingTail = true

    }

    stopTail() {
        this.movingTail = false
        motor.servo(motor.Servos.S8, 90)
    }


    }
}
