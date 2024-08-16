namespace catImp {
    export class Cat {
        rightEar: Ear = new Ear({ analogPin: AnalogPin.P0, digitalPin: DigitalPin.P0 })
        leftEar: Ear = new Ear({ analogPin: AnalogPin.P1, digitalPin: DigitalPin.P1 })
        purrMotor: PurrMotor = new PurrMotor(motor.Motors.M3)
        tail: Tail = new Tail(motor.Servos.S8);
        collar: Collar = new Collar(DigitalPin.P8);

        init() {
            pins.setAudioPinEnabled(false)
            this.leftEar.init();
            this.rightEar.init();
            this.tail.init();
            this.purrMotor.init();
            this.collar.init();
        }
    }
}
