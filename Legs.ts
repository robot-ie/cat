namespace catImp {
    export class Legs {
        constructor() {
        }
        init() {
            this.stop();
        }

        moveForwardSlow() {
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 250)
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 250)
            basic.pause(50)
            motor.motorStop(motor.Motors.M1)
            motor.motorStop(motor.Motors.M2)
            basic.pause(200)

        }

        moveLeftSlow() {
            motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 250)
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 250)
            basic.pause(50)
            motor.motorStop(motor.Motors.M1)
            motor.motorStop(motor.Motors.M2)
            basic.pause(200)

        }

        stop(){
            motor.motorStop(motor.Motors.M1)
            motor.motorStop(motor.Motors.M2)
        }

        moveRightSlow() {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 250)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 250)
            basic.pause(50)
            motor.motorStop(motor.Motors.M1)
            motor.motorStop(motor.Motors.M2)
            basic.pause(200)
        }

    }
}