/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    var damage = 0;
    for (var i = 0; i < timeSeries.length; i++) {
    	if (i > 0 ) {
    		var sep = timeSeries[i] - timeSeries[i - 1];
    		if (sep < duration) {
    			damage = damage - duration + sep;
    		}
    	}
		damage += duration;
    	
    }

    return damage;
};