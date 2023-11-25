/* Utils file for coordinates conversion */
class coordUtils {
    // transform the "real" X to the "device" X
    static XtoDevice(X, minX, rangeX, left, width){
        return left + width * (X - minX) / rangeX; 
    }  

    static YtoDevice(Y, minY, rangeY, top, height){
        return top + height - (height * (Y - minY) / rangeY);
    }  

    // transform the "real" [X,Y] to the "device" [X,Y]
    static XYtoDevice([X, Y], minX, rangeX, minY, rangeY, devRect){
        return (
            [
                coordUtils.XtoDevice(X, minX, rangeX, devRect.x, devRect.width),
                coordUtils.YtoDevice(Y, minY, rangeY, devRect.y, devRect.height)
            ]
        )
    }

    // transform the "device" X to the "real" X
    static XtoWorld(X, minX, rangeX, left, width){
        return minX + rangeX * (X - left) / width;
    }

    static YtoWorld(Y, minY, rangeY, top, height){
        return minY + rangeY - rangeY * (Y - top) / height;
    }

    static XYtoWorld([X, Y], rectWorld, devRect){
        return (
            [
                coordUtils.XtoWorld(X, rectWorld.x, rectWorld.width, devRect.x, devRect.width),
                coordUtils.YtoWorld(Y, rectWorld.y - rectWorld.height, rectWorld.height, devRect.y, devRect.height)
            ]   
        )
    }
}