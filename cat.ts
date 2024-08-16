namespace catImp {
    export class Cat {
        rightEar: Ear;
        leftEar: Ear;
        purrMotor: PurrMotor;
        tail: Tail;
        collar: Collar;
        constructor(){
            this.rightEar = new Ear(AnalogPin.P0,  DigitalPin.P0)
            this.leftEar = new Ear(AnalogPin.P1,DigitalPin.P1 )
            this.purrMotor = new PurrMotor(motor.Motors.M3)
            this.tail = new Tail(motor.Servos.S8);
            this.collar = new Collar(DigitalPin.P8);
        }

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
