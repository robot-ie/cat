namespace cat {

    let rightEarWasPressed = false
    let numberOfTimeRightEarPressed = 0
    basic.forever(function () {
        const isPressingRightEarNow = checkIfPressingRightEar()
        if (isPressingRightEarNow && !rightEarWasPressed){
            numberOfTimeRightEarPressed = numberOfTimeRightEarPressed +1
        }
        rightEarWasPressed = isPressingRightEarNow
        
    })

    function checkIfPressingRightEar(): boolean {
        const pin0Val = pins.analogReadPin(AnalogPin.P0)
        return pin0Val > 900;
    }

    //% block
    //% group="Basic"
    export function pressingRightEar(): boolean {
        return rightEarWasPressed;
    }

    //% block
    //% group="Basic"
    export function onRightEarPressed(handler: () => void) {
        let lastNumberOfTimesRightEarPressed = numberOfTimeRightEarPressed 
        basic.forever(function () {
            if (numberOfTimeRightEarPressed>lastNumberOfTimesRightEarPressed){
                handler()
            }
            lastNumberOfTimesRightEarPressed = numberOfTimeRightEarPressed
        })
        
    }
}