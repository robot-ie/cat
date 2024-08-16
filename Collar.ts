namespace catImp {
    export class Collar {
        private pin: DigitalPin
        private strip:neopixel.Strip
        constructor(pin: DigitalPin) {
            this.pin = pin;
        }
        init() {
            this.strip = neopixel.create(this.pin, 12, NeoPixelMode.RGB)
            this.strip.setBrightness(255)
            this.strip.showColor(0)
            this.strip.show()
        }


        showRainbow() {
            this.strip.showRainbow(1, 255)
            this.strip.show()
        }
        turnOff() {
            this.strip.showColor(0)
            this.strip.show()
        }

    }
}