namespace cat {

    const cat = new catImp.Cat();
    cat.init();


    //% block
    //% group="Basic"
    export function pressingRightEar(): boolean {
        return cat.rightEar.earIsPressed;
    }
    //% block
    //% group="Basic"
    export function pressingLeftEar(): boolean {
        return cat.leftEar.earIsPressed;
    }

    //% block
    //% group="Basic"
    export function onRightEarPressed(handler: () => void) {
        return cat.rightEar.onEarPressed(handler);
    }

    //% block
    //% group="Basic"
    export function onLeftEarPressed(handler: () => void) {
        return cat.leftEar.onEarPressed(handler);
    }

    //% block
    //% group="Basic"
    export function purr() {
        cat.purrMotor.vibrate()

    }

    //% block
    //% group="Basic"
    export function stopPurr() {
        cat.purrMotor.stop()
    }
    //% block
    //% group="Basic"
    export function moveTail() {
        return cat.tail.move()

    }

    //% block
    //% group="Basic"
    export function stopTail() {
        return cat.tail.stop()
    }

    //% block
    //% group="Basic"
    export function showRainbow() {
        return cat.collar.showRainbow();
    }

    //% block
    //% group="Basic"
    export function turnOffCollar() {
        return cat.collar.turnOff()
    }

    //% block
    //% group="Basic"
    export function objectLocation() {
        return cat.camera.getLocation();
    }

    //% block
    //% group="Basic"
    export function moveForwardSlow() {
        return cat.legs.moveForwardSlow();
    }

    //% block
    //% group="Basic"
    export function moveLeftSlow() {
        return cat.legs.moveLeftSlow();
    }
    //% block
    //% group="Basic"
    export function moveRightSlow() {
        return cat.legs.moveRightSlow();
    }

}