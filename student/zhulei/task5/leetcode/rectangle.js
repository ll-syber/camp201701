/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    // var arr = [];
    var sqt = Math.ceil(Math.sqrt(area));

    for (var i = sqt; i <= area; i++) {
        if (area % i === 0) {
            return [i, area / i];
        }
    }
};

console.log(constructRectangle(4));