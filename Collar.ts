namespace catImp {
    export class Collar {
        private pin: DigitalPin
        private strip:neopixel.Strip
        constructor(pin: DigitalPin) {
            this.pin = pin;
        }
        init() {
            this.strip = neopixel.create(this.pin, 12, NeoPixelMode.RGB)
            this.strip.setBrightness(0)
        }


        showRainbow() {
            this.strip.showRainbow(1, 255)
            this.strip.show()
        }

    }
}