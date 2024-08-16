namespace catImp {
    export class Cat {
        rightEar: Ear = new Ear(AnalogPin.P0, DigitalPin.P0)
        leftEar: Ear = new Ear(AnalogPin.P1, DigitalPin.P1)
        purrMotor: PurrMotor = new PurrMotor(motor.Motors.M3)
        tail: Tail = new Tail(motor.Servos.S8);
        collar: Collar = new Collar(DigitalPin.P8);
        camera: Camera = new Camera()
        constructor(){
        }

        init() {
            pins.setAudioPinEnabled(false)
            this.leftEar.init();
            this.rightEar.init();
            this.tail.init();
            this.purrMotor.init();
            this.collar.init();
            this.camera.init();
        }
    }
}
