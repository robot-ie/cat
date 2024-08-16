namespace catImp {
    export class Tail {
        private movingTail: boolean = false
        private motor: motor.Servos
        constructor(motor: motor.Servos) {
            this.motor = motor;
        }
        init() {
            motor.servo(this.motor, 90)
            basic.forever(function () {
                if (this.movingTail) {
                    motor.servo(this.motor, 130)
                    basic.pause(1000)
                    motor.servo(this.motor, 50)
                    basic.pause(1000)
                }
                else {
                    motor.servo(this.motor, 90)
                }

            })
        }


        move() {
            this.movingTail = true
        }

        stop() {
            this.movingTail = false
            motor.servo(this.motor, 90)
        }

    }
}