/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    var reg1 = /-/g;
    var str = S.replace(reg1, '').toUpperCase();
    var firstDash = str.length % K;
    var key = '';

    if (firstDash === 0) {
    	var tmp = '';
    	for (var i = 0; i < str.length; i++) {
    		tmp += str[i];
    		if (tmp.length === K) {
    			key += tmp + '-';
    			tmp = '';
    		}
    	}
    	key = key.slice(0, -1);
    } else {
    	key = str.slice(0, firstDash) + '-';
    	var tmp = '';
    	for (var i = firstDash; i < str.length; i++) {
    		tmp += str[i];
    		if (tmp.length === K) {
    			key += tmp + '-';
    			tmp = '';
    		}
    	}
    	key = key.slice(0, -1);
    }

    console.log(key);
    return key;
};

licenseKeyFormatting('2-4A0r7-4k', 3);