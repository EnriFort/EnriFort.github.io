/* Utils file for distribution functions */
class distUtils {

    static BernoulliDist(p){
        return (Math.random() <= p) ? 1 : 0;
    }

    static RademacherDist(){ // 1 penetrated, -1 protected
        return (Math.random() <= 0.5) ? 1 : -1;
    }

    /* this function is been taken from: https://rb.gy/5b3jjc */
    static GaussianDist(mean, stdev) {
        // Standard Normal variate using Box-Muller transform.
        const u = 1 - Math.random(); // Converting [0,1) to (0,1]
        const v = Math.random();
        const z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
        // Transform to the desired mean and standard deviation:
        return z * stdev + mean;
    }

    /* this function is been taken from: https://shorturl.at/dglEX */
    

    // Generate random numbers that follow a Normal distribution. */
    static normalRandom() {
        var spareRandom = null;
        var val, u, v, s, mul;

        if(spareRandom !== null)
        {
            val = spareRandom;
            spareRandom = null;
        }
        else
        {
            do
            {
                u = Math.random()*2-1;
                v = Math.random()*2-1;

                s = u*u+v*v;
            } while(s === 0 || s >= 1);

            mul = Math.sqrt(-2 * Math.log(s) / s);

            val = u * mul;
            spareRandom = v * mul;
        }
        
        return val;
    }

    // Generate random numbers that follow a Normal distribution with a given mean and standard deviation
    static normalRandomScaled(mean, stddev)
    {
        var r = distUtils.normalRandom();

        r = r * stddev + mean;

	    return Math.round(r);
    }

    static gaussianPair(mean, stdDev) {
        let u, v, s = 0;
        while (s >= 1 || s === 0) {
          u = 2 * Math.random() - 1;
          v = 2 * Math.random() - 1;
          s = u * u + v * v;
        }
        s = Math.sqrt(-2 * Math.log(s) / s);
        const f = stdDev * s;
        return [mean + f * u, mean + f * v];
    }

    static normaleStandardSaved = undefined;

    static gaussian(Mean, StdDev) {     //Marsaglia polar method

        if (this.normaleStandardSaved) {
            const normale = Mean + StdDev * this.normaleStandardSaved;
            this.normaleStandardSaved = undefined;
            return normale;

        } else {

            let u, v, s = 0;

            while (s >= 1 || s === 0) {
            u = 2 * Math.random() - 1;
            v = 2 * Math.random() - 1;
            s = u * u + v * v;
            }

            s = Math.sqrt(-2 * Math.log(s) / s);
            this.normaleStandardSaved = v * s;
            return Mean + StdDev * u * s;
        }
    } 

}