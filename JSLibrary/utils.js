class utils {

    static BernoulliDist(p){
        return (Math.random() <= p) ? 1 : 0;
    }

    static RademacherDist(p){ // 1 penetrated, -1 protected
        return (Math.random() <= p) ? 1 : -1;
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

    static drawHistogramsFromDict(rct, frequencies, devRect, startGrdColor, endGrdColor) {
        
        let bins = Object.keys(frequencies).length;
        // Initialize maxFrequency to a very small value
        let maxFrequency = -Infinity;
        
        // Iterate through the values of histoFrequencies
        for (const frequency of Object.values(frequencies)) {
            if (frequency > maxFrequency) {
                maxFrequency = frequency;
            }
        }
 
        for (const yValue in frequencies){

            // width and height are reversed because the histogram is horizontal
            let barWidth = frequencies[yValue] / maxFrequency * (devRect.width) - 2;
            let barHeight = (devRect.height - bins - 1) / bins * 0.2;

            let rectHisto = new Rectangle(devRect.x + 1, yValue, barWidth, barHeight);
            
            rct.rect(rectHisto.x, rectHisto.y, rectHisto.width, rectHisto.height);

            // Create gradient
            const grd = rct.createLinearGradient(rectHisto.x, 0, rectHisto.x + rectHisto.width, 0);
            grd.addColorStop(0, startGrdColor);
            grd.addColorStop(1, endGrdColor);

            // Fill with gradient
            rct.fillStyle = grd;
            rct.fillRect(rectHisto.x, rectHisto.y, rectHisto.width, rectHisto.height)

        }

    }

    static drawHistogramsFromArr(rct, frequencies, devRect, startGrdColor, endGrdColor) {

        let bins = frequencies.length; 
        let maxFrequency = 0;
        let gap = 1;
        let barHeightFactor = 0.4; // Adjust this factor to control bar height

        // get the maximum value
        for (let i = 0; i < bins; i++) {
            maxFrequency = Math.max(maxFrequency, frequencies[i]);
        }
        
        for (let i=0; i < bins; i++){


            // width and height are reversed because the histogram is horizontal
            let barWidth = frequencies[i] / maxFrequency * (devRect.width) - 1;
            let barHeight = (devRect.height - (bins - 1) * gap) / bins * barHeightFactor;

            // Ensure the bar width is at least 1
            barWidth = Math.max(barWidth, 1);


            let x = devRect.x + 2;
            let y = devRect.top() + (devRect.height/4) + (i + 1) * (barHeight + gap);

            let rectHisto = new Rectangle(x, y, barWidth, barHeight);
            
            rct.rect(rectHisto.x, rectHisto.y, rectHisto.width, rectHisto.height);

            // Create gradient
            const grd = rct.createLinearGradient(rectHisto.x, 0, rectHisto.x + rectHisto.width, 0);
            grd.addColorStop(0, startGrdColor);
            grd.addColorStop(1, endGrdColor);

            // Fill with gradient
            rct.fillStyle = grd;
            rct.fillRect(rectHisto.x, rectHisto.y, rectHisto.width, rectHisto.height)
            
            // Add legend
            rct.font = "9px Verdana";
            rct.fillStyle = "white";
            rct.fillText(frequencies[i].toString(), rectHisto.x, rectHisto.y + (rectHisto.height/2));
            

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