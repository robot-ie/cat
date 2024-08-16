namespace catImp {
    export class Ear {
        earIsPressed: boolean = false
        private analogPin:AnalogPin
        private digitalPin:DigitalPin
        constructor(options:{analogPin: AnalogPin, digitalPin:DigitalPin}){
            const {analogPin, digitalPin} = options
            this.analogPin = analogPin
            this.digitalPin = digitalPin
        }
        init(){
            pins.setPull(this.digitalPin, PinPullMode.PullDown)
            basic.forever(function () {
                const pinVal = this.analogPin.analogReadPin(this.pin)
                this.earIsPressed = pinVal >= 10;
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