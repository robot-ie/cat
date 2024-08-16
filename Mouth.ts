namespace catImp {
    export class Mouth {
        isPressed: boolean = false
        private digitalPin: DigitalPin
        constructor(digitalPin: DigitalPin) {
            this.digitalPin = digitalPin;
        }
        init() {

            pins.setPull(this.digitalPin, PinPullMode.PullDown)
            basic.forever(function () {
                this.isPressed = pins.digitalReadPin(this.digitalPin)==1
            })

        }


        onPressed(handler: () => void) {
            let wasPressed = this.isPressed
            basic.forever(function () {
                if (!wasPressed && this.isPressed) {
                    handler()
                }
                wasPressed = this.isPressed
            })

        }

    }
}