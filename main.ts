namespace cat {

    let rightEarIsPressed = false
    let leftEarIsPressed = false
    basic.forever(function () {
        const pin0Val = pins.analogReadPin(AnalogPin.P0)
        const pin1Val = pins.analogReadPin(AnalogPin.P0)
        rightEarIsPressed = pin0Val > 900;
        leftEarIsPressed = pin0Val > 900;
    })


    //% block
    //% group="Basic"
    export function pressingRightEar(): boolean {
        return rightEarIsPressed;
    }
    //% block
    //% group="Basic"
    export function pressingLeftEar(): boolean {
        return leftEarIsPressed;
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

    //% block
    //% group="Basic"
    export function onLeftEarPressed(handler: () => void) {
        let leftEarWasPressed = leftEarIsPressed
        basic.forever(function () {
            if (!leftEarWasPressed && leftEarIsPressed) {
                handler()
            }
            leftEarWasPressed = leftEarIsPressed
        })

    }
}