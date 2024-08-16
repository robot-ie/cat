namespace catImp {
    export class Camera {
        private objectX: number = -1
        private objectY: number = -1
        private objectWidth: number = -1
        private objectHeight: number = -1
        private objectFound: boolean = false
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
                    this.objectFound = true
                } else {
                    this.objectX = -1
                    this.objectY = -1
                    this.objectHeight = -1
                    this.objectWidth = -1
                    this.objectFound = false
                }

            })
        }

        getLocation(): number {
            if (!this.objectFound) {
                return 0;
            }
            const xSegment = Math.floor(this.objectX / (321 / 3)) + 1
            const ySegment = Math.floor(this.objectY / (241 / 3)) + 1
            return xSegment * ySegment;
        }



    }
}