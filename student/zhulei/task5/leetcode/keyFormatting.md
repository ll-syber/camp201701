# 482. License Key Formatting

## 说明
>新晋的热度榜第一，看题号是道新题

## 题目
给定一个字符串S和一个正整数K，S由数字、字母和横杠组成。需要将S重新以K的长度用横杠划分，并全部转化为大写。   
Example 1:
    Input: S = "2-4A0r7-4k", K = 4

    Output: "24A0-R74K"

Example 2：
    Input: S = "2-4A0r7-4k", K = 3

    Output: "24-A0R-74K"

值得注意的是，当S的长度不能被K整除时，输出结果的第一部分作为调整长度可变，其余部分按照K的长度进行划分。

## 解法一
最容易想到的就是循环处理。   

在对初始字符串S进行去`'-'`和大写化处理之后，需要对字符串S能否被K整除进行分类处理。值得注意的是，字符串在加上`'-'`之后，长度会发生变化，所以我增加了一个中间变量tmp来和K
进行比较来简化思路。   
得到了时间复杂度为O(n)的解法一：

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


## 解法二
在好好恶补了一阵正则表达式的知识之后，想的了一种用正则的解法：

    var licenseKeyFormatting = function(S, K) {
        var reg1 = /-/g;
        var str = S.replace(reg1, '').toUpperCase();
        var firstDash = str.length % K;
        var reg2 = new RegExp('(.{'+K+'})', 'g');
        var key = '';

        if (firstDash === 0) {
            key = str.replace(reg2, '$1-');
            key = key.slice(0, -1);        
        } else {
            key = str.slice(0, firstDash) + '-';
            str = str.slice(firstDash, str.length);
            key += str.replace(reg2, '$1-');
            key = key.slice(0, -1);
        }
        console.log(key);
        return key;
    };

代码相对于循环而言简洁了不少，不过运行效率基本和循环持平。