"use strict"

class Rectangle {

    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    left() {
        return this.x
      }
    
    top() {
        return this.y
    }
    
    right() {
        return this.x + this.width
    }
    
    drawRectangle(rct, color, thickness, lineDash){
        rct.save();
        rct.beginPath();
        rct.rect(this.x, this.y, this.width, this.height);
        rct.strokeStyle = color;
        rct.lineWidth = thickness;
        rct.setLineDash(lineDash); 
        rct.stroke();
        rct.restore();
    }

}