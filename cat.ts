namespace catImp {
    export class Cat {
        rightEar: Ear = new Ear(AnalogPin.P0, DigitalPin.P0)
        leftEar: Ear = new Ear(AnalogPin.P1, DigitalPin.P1)
        mouth: Mouth = new Mouth(DigitalPin.P15)
        purrMotor: PurrMotor = new PurrMotor(motor.Motors.M3)
        tail: Tail = new Tail(motor.Servos.S8);
        collar: Collar = new Collar(DigitalPin.P8);
        camera: Camera = new Camera();
        legs: Legs = new Legs();
        constructor(){
        }

        init() {
            pins.setAudioPinEnabled(false)
            this.mouth.init();
            this.leftEar.init();
            this.rightEar.init();
            this.tail.init();
            this.purrMotor.init();
            this.collar.init();
            this.legs.init();
            this.camera.init();

        }
    }
}
