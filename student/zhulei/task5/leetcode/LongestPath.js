/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    var maxLength = 0;
    var curentLength = 0;
    var formerTab = 0;
    var currentTab = 0;
    var stack = [];

    var inputArr = input.split('\n');
    console.log(inputArr);
    // console.log(inputArr.toString());
    // console.log(inputArr.toString().length);
    for (var i = 0; i < inputArr.length; i++) {
    	var tmpArr = inputArr[i].split('\t');
    	currentTab = tmpArr.length - 1;
    	if (currentTab > formerTab || i === 0) {
    		// console.log(i);
    		stack.push(tmpArr[currentTab]);
    		// console.log(stack);
    		// console.log(tmpArr[currentTab].indexOf('.'));
    		if (tmpArr[currentTab].indexOf('.') !== -1) {
    			// console.log('in');
    			currentLength = stack.toString().length;
    			// console.log(currentLength);
    			maxLength = (currentLength > maxLength) ? currentLength : maxLength;
    			console.log(maxLength);
    		}
    		formerTab = currentTab;
    	} else if (currentTab <= formerTab) {
    		formerTab--;
    		stack.pop();
    		i--;
    	}
    }

    // console.log(maxLength);
    return maxLength;
};

lengthLongestPath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext');
// var aaa = 'dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext';
// console.log(aaa.length);