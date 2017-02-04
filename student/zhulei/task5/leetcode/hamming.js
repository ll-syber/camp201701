/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// var hammingDistance = function(x, y) {
//     var distance = 0;
//     var xor = x ^ y;
//     var xorStr = xor.toString(2);
//     xorStr = xorStr.replace(/0/g, '');
//     console.log(xorStr);
//     return xorStr.length;
// };

var hammingDistance = function(x, y) {
    var distance = 0;
    var xor = x ^ y;
    while (xor !== 0) {
    	if (xor % 2 === 1) {
    		distance++;
    	}
    	xor = xor >> 1;
    }
    return distance;
};

hammingDistance(4, 1);