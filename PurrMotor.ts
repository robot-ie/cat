namespace catImp {
    export class PurrMotor {
        private purring: boolean = false
        private motor:motor.Motors
        constructor(motor:motor.Motors){
            this.motor = motor;
        }
        init() {
            motor.motorStop(this.motor);
            basic.forever(function () {
                if (this.purring) {
                    motor.MotorRun(this.motor, motor.Dir.CW, 45)
                    basic.pause(800)
                    motor.motorStop(this.motor);
                    basic.pause(200)
                    motor.MotorRun(this.motor, motor.Dir.CW, 20)
                    basic.pause(800)
                    motor.motorStop(this.motor);
                    basic.pause(200)
                }
                else {
                    motor.motorStop(this.motor);
                }

            })
        }


        vibrate() {
            this.purring = true

        }


        stop() {
            this.purring = false
            motor.motorStop(this.motor);
        }

    }
}