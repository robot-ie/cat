namespace cat {
    //% block
    //% group="Basic"
    export function pressingLeftEar(): boolean {
        const pin0Val = pins.analogReadPin(AnalogPin.P0)
        return pin0Val > 900;
    }

    //% block
    //% group="Basic"
    export function onLeftEarPressed(handler: () => void) {
        basic.forever(function () {
            const isPressingLeftEar = pressingLeftEar()
            if (isPressingLeftEar){
                handler();
            }
        })
    }
}