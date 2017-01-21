# 482. License Key Formatting

## 说明
>新晋的热度榜第一，看题号是道新题

## 题目
给定一个字符串S和一个正整数K，S由数字、字母和横杠组成。需要将S重新以K的长度用横杠划分，并全部转化为大写。   
Example 1:
<pre>
Input: S = "2-4A0r7-4k", K = 4

Output: "24A0-R74K"
</pre>

Example 2：
<pre>
Input: S = "2-4A0r7-4k", K = 3

Output: "24-A0R-74K"
</pre>
值得注意的是，当S的长度不能被K整除时，输出结果的第一部分作为调整长度可变，其余部分按照K的长度进行划分。

## 解法一
最容易想到的就是循环处理，不过用循环来处理一个字符串似乎看起来很笨。 但在我查询了一遍js原生的字符串处理函数和正则表达式之后，发现似乎没有方法可以直接快速的按照这题的要求处理，所以又回到循环的路子上来了。   

在对初始字符串S进行去`'-'`和大写化处理之后，需要对字符串S能否被K整除进行分类处理。    
得到了时间复杂度为O(n)的解法一：
<pre>
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
</pre>
值得注意的是，字符串在加上`'-'`之后，长度会发生变化，所以我增加了一个中间变量tmp来和K
进行比较来简化思路。