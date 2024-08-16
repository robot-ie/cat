namespace catImp {
    export class Camera {
        private objectX:number
        private objectY: number
        private objectWidth: number
        private objectHeight: number
        constructor() {
            
        }
        init() {
            huskylens.initI2c();
            huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
            basic.forever(function () {
                huskylens.request()
                if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
                    this.objectX = huskylens.readeBox(1, Content1.xCenter)
                    this.objectY = huskylens.readeBox(1, Content1.yCenter)
                    this.objectHeight = huskylens.readeBox(1, Content1.height)
                    this.objectWidth = huskylens.readeBox(1, Content1.width)
                } else {
                    this.objectX = 0
                    this.objectY = 0
                    this.objectHeight = 0
                    this.objectWidth = 0
                }

            })
        }


        

    }
}