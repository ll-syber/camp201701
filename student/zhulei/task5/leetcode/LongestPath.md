# Longest Absolute File Path

## 个人说明
> leetcode从一开始就没刷多少，所以索性就按热度榜来，本题是热度榜第一题

## 题目说明
给一个表示路径的字符串，如`"dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"`，表示目录结构：

	dir
	    subdir1
	    subdir2
	       	file.ext

求出最长文件路径的字符串长度，如最长路劲为`"dir/subdir2/file.ext"`，长度为20.   
本题有两个注意点：

- 最后一个必须为文件，文件中有`'.'`字符   
- 结构层次最深的路径不一定是最长的路径，如`a/aa/aaa/file1.txt`的长度就不如`aaaaaaaaaaaaaaaaaaaaa/sth.png`

另外，题目要求时间复杂度为O(n)

## 解题方法
一开始没思路，干了一天活之后突然来灵感了，可以用栈。

把输入的字符串按`\n`进行分割，然后`\t`数量比栈顶元素多的入站，否则弹栈；栈顶元素为文件，则统计站内的字符串长度。

###版本一

	var lengthLongestPath = function(input) {
		var maxLength = 0;
		var curentLength = 0;
		var formerTab = 0;
		var currentTab = 0;
		var stack = [];

		var inputArr = input.split('\n');
		console.log(inputArr);
		for (var i = 0; i < inputArr.length; i++) {
			var tmpArr = inputArr[i].split('\t');
			currentTab = tmpArr.length - 1;
			if (currentTab > formerTab || i === 0) {
				stack.push(tmpArr[currentTab]);
					currentLength = stack.toString().length;
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

		return maxLength;
	};

写的比较臭，运行时间打败了29%的人。   
之后去DISCUSS里看了别人的解法，大部分与我的思路一致，只是别人的代码看上去更加优雅。   
我还有许多需要改进，本题暂时就先这样吧。