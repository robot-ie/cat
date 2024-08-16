namespace catImp {
    export enum MoveAction{
        Forward,
        ForwardSlow,
        Backwards,
        BackwardsSlow,
        Left,
        LeftSlow,
        Right,
        RightSlow,
        Circle,
        Stop
    }
    export class Legs {
        constructor() {
        }
        init() {
            motor.motorStop(motor.Motors.M1)
            motor.motorStop(motor.Motors.M2)
        }
        move(action: MoveAction) {
            switch (action) {
                case MoveAction.Forward:
                    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 250)
                    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 250)
                    break;
                case MoveAction.ForwardSlow:
                    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 250)
                    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 250)
                    basic.pause(50)
                    motor.motorStop(motor.Motors.M1)
                    motor.motorStop(motor.Motors.M2)
                    basic.pause(200)
                    break;
                case MoveAction.Backwards:
                    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 250)
                    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 250)
                    break;
                case MoveAction.BackwardsSlow:
                    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 250)
                    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 250)
                    basic.pause(50)
                    motor.motorStop(motor.Motors.M1)
                    motor.motorStop(motor.Motors.M2)
                    basic.pause(200)
                    break;
                case MoveAction.Left:
                    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 180)
                    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 180)
                    break;
                case MoveAction.LeftSlow:
                    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 250)
                    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 250)
                    basic.pause(50)
                    motor.motorStop(motor.Motors.M1)
                    motor.motorStop(motor.Motors.M2)
                    basic.pause(200)
                    break;
                case MoveAction.Right:
                    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 180)
                    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 180)
                    break;
                case MoveAction.RightSlow:
                    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 250)
                    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 250)
                    basic.pause(50)
                    motor.motorStop(motor.Motors.M1)
                    motor.motorStop(motor.Motors.M2)
                    basic.pause(200)
                    break;
                case MoveAction.Circle:
                    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 250)
                    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 250)
                    break;
                default:
                    motor.motorStop(motor.Motors.M1)
                    motor.motorStop(motor.Motors.M2)
                    break;

            }
        }
    }
}