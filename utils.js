class utils {

    static generateWithProbability(p){
        return (Math.random() <= p) ? 1 : 0;
    }

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
                utils.XtoDevice(X, minX, rangeX, devRect.x, devRect.width),
                utils.YtoDevice(Y, minY, rangeY, devRect.y, devRect.height)
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
                utils.XtoWorld(X, rectWorld.x, rectWorld.width, devRect.x, devRect.width),
                utils.YtoWorld(Y, rectWorld.y - rectWorld.height, rectWorld.height, devRect.y, devRect.height)
            ]   
        )
    }

    static randomColor() {
        return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    }
    
    static randomColorCSS() {
        return this.CSS_COLORS[Math.round(Math.random() * this.CSS_COLORS.length)];
    }

    static drawHistograms(rct, frequencies, devRect, strokeStyle, lineWidth, fillStyle) {

        // Initialize maxFrequency to a very small value
        let maxFrequency = -Infinity;
        // Iterate through the values of histoFrequencies
        for (const frequency of Object.values(frequencies)) {
            if (frequency > maxFrequency) {
                maxFrequency = frequency;
            }
        }

        let nIntervals = Object.keys(frequencies).length;
        
        for (const yValue in frequencies){

            // width and height are reversed because the histogram is horizontal
            let barWidth = frequencies[yValue] / maxFrequency * (devRect.width) - 2;
            let barHeight = (devRect.height - nIntervals - 1) / nIntervals * 0.2;

            let rectHisto = new Rectangle(devRect.x + 1, yValue, barWidth, barHeight);
            
            rct.rect(rectHisto.x, rectHisto.y, rectHisto.width, rectHisto.height);

            // For Stroke
          /*rct.lineWidth = lineWidth;
            rct.strokeStyle = strokeStyle;
            rct.strokeRect(rectHisto.x, rectHisto.y, rectHisto.width, rectHisto.height) */

            // For fill
            rct.fillStyle = fillStyle;
            rct.fillRect(rectHisto.x, rectHisto.y, rectHisto.width, rectHisto.height)

        }

    }
    
    static  CSS_COLORS = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSlateGrey",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "SlateGrey",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen",
      ];    
}