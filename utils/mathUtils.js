/*  
 * Class:         mathUtils
 * Description:   Helper class for some math operations.
 * Created:       14.04.2016
 * Last change:   14.04.2016
 * Collaborators: circa94, Kogs
*/

'use strict';

module.exports = {
    getRandomInt : function(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
 
    getDegreesDistance :function(alpha, beta) 
    {
        var phi = Math.abs(beta - alpha) % 360;       // This is either the distance or 360 - distance
        var distance = phi > 180 ? 360 - phi : phi;
        return distance;
    }
    
}