namespace cat {

    const cat = new catImp.Cat();
    cat.init();


    //% block
    //% group="Basic"
    export function pressingRightEar(): boolean {
        return cat.rightEarIsPressed;
    }
    //% block
    //% group="Basic"
    export function pressingLeftEar(): boolean {
        return cat.leftEarIsPressed;
    }

    //% block
    //% group="Basic"
    export function onRightEarPressed(handler: () => void) {
        return cat.onRightEarPressed(handler);
    }

    //% block
    //% group="Basic"
    export function onLeftEarPressed(handler: () => void) {
        return cat.onLeftEarPressed(handler);
    }

    //% block
    //% group="Basic"
    export function purr() {
        cat.purr();

    }

    //% block
    //% group="Basic"
    export function stopPurr() {
        cat.stopPurr()
    }
    //% block
    //% group="Basic"
    export function moveTail() {
        return cat.moveTail()

    }

    //% block
    //% group="Basic"
    export function stopTail() {
        return cat.stopTail()
    }


}