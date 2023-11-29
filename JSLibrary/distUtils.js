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
    

    

    

}