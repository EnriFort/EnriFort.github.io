class drawUtils {
    
    static drawHistogram(canvas, data) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        const bins = 50;
        const binWidth = canvas.width / bins;
        const frequencies = new Array(bins).fill(0);
    
        data.forEach((value) => {
            const binIndex = Math.floor((value * bins) / 1);
            frequencies[binIndex]++;
        });
    
        const maxFrequency = Math.max(...frequencies);
    
        ctx.fillStyle = "green";
    
        frequencies.forEach((frequency, index) => {
            const barHeight = (frequency / maxFrequency) * canvas.height;
            const x = index * binWidth;
            const y = canvas.height - barHeight;
            ctx.fillRect(x, y, binWidth, barHeight);
        });
    }
}


