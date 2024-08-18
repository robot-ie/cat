namespace catImp {
    enum CollarColor{
        Black,
        Red,
        Blue,
        Rainbow
    }
    export class Collar {
        private pin: DigitalPin
        private strip:neopixel.Strip
        private collarColor:CollarColor
        constructor(pin: DigitalPin) {
            this.pin = pin;
        }
        init() {
            this.strip = neopixel.create(this.pin, 12, NeoPixelMode.RGB)
            this.strip.setBrightness(255)
            this.strip.showColor(0)
            this.collarColor = CollarColor.Black
        }


        showRainbow() {
            if (this.collarColor!=CollarColor.Rainbow){
                this.strip.showRainbow(1, 255)
                this.collarColor = CollarColor.Rainbow
            }
        }
        rotateLights(){
            this.strip.rotate(1)
            this.strip.show();
        }
        turnOff() {
            if (this.collarColor != CollarColor.Black) {
                this.strip.showColor(0)
                this.collarColor = CollarColor.Black
            }
            
        }

    }
}