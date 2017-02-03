# 492. Construct the Rectangle

## 说明
来题简单的

## 题目
给出一个矩形的面积，求其长宽（正整数）数组。   
要求   
- 长与宽直接的差要求最小   
- 数组第一个数（长）大于等于第二个数（宽）

## 解法一
对面积开平方并取大于等于结果的整数，若面积除以这个数得整数，则为结果，否则该数加一直至与面积相等

	var constructRectangle = function(area) {
	    // var arr = [];
	    var sqt = Math.ceil(Math.sqrt(area));

	    for (var i = sqt; i <= area; i++) {
	        if (area % i === 0) {
	            return [i, area / i];
	        }
	    }
	};