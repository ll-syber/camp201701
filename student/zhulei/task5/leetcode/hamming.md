# 461. Hamming Distance

## 说明
>汉明距离这个概念居然都不记得了，最后求助了度娘，这么多年书白读了【捂脸】

## 题目
给出两个数，求其汉明距离。   
0<x,y<2^31

## 解法一
将x，y异或后的结果不断除以2取余，余为1则汉明距离加一。
	
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

## 解法二
将x，y异或后的结果转为二进制去掉中间的零返回长度。

	var hammingDistance = function(x, y) {
	    var xor = x ^ y;
	    var xorStr = xor.toString(2);
	    xorStr = xorStr.replace(/0/g, '');
	    console.log(xorStr);
	    return xorStr.length;
	};
