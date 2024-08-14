namespace cat {

    let rightEarIsPressed = false
    basic.forever(function () {
        const pin0Val = pins.analogReadPin(AnalogPin.P0)
        rightEarIsPressed = pin0Val > 900;
    })


    //% block
    //% group="Basic"
    export function pressingRightEar(): boolean {
        return rightEarIsPressed;
    }

    //% block
    //% group="Basic"
    export function onRightEarPressed(handler: () => void) {
        let rightEarWasPressed = rightEarIsPressed
        basic.forever(function () {
            if (!rightEarWasPressed && rightEarIsPressed){
                handler()
            }
            rightEarWasPressed = rightEarIsPressed
        })
        
    }
}