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

        getLocation(): string {
            if (!this.objectFound) {
                return "NF"
            }
            if (0 <= this.objectX && this.objectX < 106 && this.objectY < 120) {
                return "TL"
            }
            if (106 <= this.objectX && this.objectX < 213 && this.objectY < 120) {
                return "TC"
            }
            if (213 <= this.objectX && this.objectX <= 320 && this.objectY < 120) {
                return "TR"
            }
            if (0 <= this.objectX && this.objectX < 106 && this.objectY >= 120) {
                return "BL"
            }
            if (106 <= this.objectX && this.objectX < 213 && this.objectY >= 120) {
                return "BC"
            }
            if (213 <= this.objectX && this.objectX <= 320 && this.objectY >= 120) {
                return "BR"
            }
            return "NF"
        }



    }
}