namespace catImp {
    export class Ear {
        earIsPressed: boolean = false
        private analogPin:AnalogPin
        private digitalPin:DigitalPin
        constructor(analogPin: AnalogPin, digitalPin:DigitalPin){
            this.analogPin = analogPin;
            this.digitalPin = digitalPin;
        }
        init(){
            
            pins.setPull(this.digitalPin, PinPullMode.PullDown)
            basic.forever(function () {
                const pinVal = pins.analogReadPin(this.analogPin)
                this.earIsPressed = pinVal >= 10;
                if (this.earIsPressed){
                    basic.pause(4000)
                }
            })
            
        }


        onEarPressed(handler: () => void) {
            let earWasPressed = this.earIsPressed
            basic.forever(function () {
                if (!earWasPressed && this.earIsPressed) {
                    handler()
                }
                earWasPressed = this.earIsPressed
            })

        }

    }
}